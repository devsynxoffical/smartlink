import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calculator, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Network, 
  Server, 
  Camera, 
  KeyRound, 
  Radio, 
  Globe, 
  Settings, 
  Building, 
  Clock, 
  Check, 
  UploadCloud, 
  Phone, 
  Mail, 
  FileText 
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

interface ServiceOption {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(['Structured Cabling']);
  const [otherServiceText, setOtherServiceText] = useState('');
  
  const [buildingType, setBuildingType] = useState('Commercial Office / HQ');
  const [sqFt, setSqFt] = useState('25,000 - 50,000 sq ft');
  const [estimatedDrops, setEstimatedDrops] = useState('50 - 200 Drops / Outlets');
  const [timeline, setTimeline] = useState('Within 1-3 Months');
  const [budgetRange, setBudgetRange] = useState('$25,000 - $75,000');
  
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [notes, setNotes] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  
  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const availableServices: ServiceOption[] = [
    { id: 'Structured Cabling', name: 'Structured Cabling', icon: <Network size={16} /> },
    { id: 'Fiber Optic Solutions', name: 'Fiber Optic Solutions', icon: <Zap size={16} /> },
    { id: 'Data Center Infrastructure', name: 'Data Center Infrastructure', icon: <Server size={16} /> },
    { id: 'Video Surveillance', name: 'Enterprise Video Surveillance', icon: <Camera size={16} /> },
    { id: 'Access Control', name: 'Access Control Systems', icon: <KeyRound size={16} /> },
    { id: 'DAS / Wireless', name: 'DAS & In-Building Wireless', icon: <Radio size={16} /> },
    { id: 'Nationwide Rollouts', name: 'Nationwide Multi-Site Rollouts', icon: <Globe size={16} /> },
    { id: 'IT Solutions', name: 'IT Solutions & Hardware Setup', icon: <Settings size={16} /> }
  ];

  // Auto-select preselected service when opened
  useEffect(() => {
    if (preselectedService && isOpen) {
      const lower = preselectedService.toLowerCase();
      const matched = availableServices.find(s => 
        lower.includes(s.id.toLowerCase()) || lower.includes(s.name.toLowerCase())
      );
      if (matched && !selectedServices.includes(matched.id)) {
        setSelectedServices([matched.id]);
      }
    }
  }, [preselectedService, isOpen]);

  // Prevent background body scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (srvId: string) => {
    if (selectedServices.includes(srvId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srvId));
      }
    } else {
      setSelectedServices([...selectedServices, srvId]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const validateCurrentStep = () => {
    setValidationError(null);
    if (step === 1) {
      if (selectedServices.length === 0) {
        setValidationError('Please select at least one system or service.');
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!name.trim()) {
        setValidationError('Please enter your full name.');
        return false;
      }
      if (!company.trim()) {
        setValidationError('Please enter your company or organization name.');
        return false;
      }
      if (!email.trim() || !email.includes('@')) {
        setValidationError('Please enter a valid business email address.');
        return false;
      }
      if (!phone.trim()) {
        setValidationError('Please enter your phone number.');
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setStep((prev) => (prev < 3 ? (prev + 1 as 1 | 2 | 3) : 3));
    }
  };

  const handleBack = () => {
    setValidationError(null);
    setStep((prev) => (prev > 1 ? (prev - 1 as 1 | 2 | 3) : 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      const generatedRef = 'SL-Q' + Math.floor(100000 + Math.random() * 900000);
      setQuoteRef(generatedRef);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setName('');
    setJobTitle('');
    setCompany('');
    setEmail('');
    setPhone('');
    setCityState('');
    setNotes('');
    setUploadedFileName(null);
    setValidationError(null);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 9999 }}>
      <div 
        className="modal-container quote-modal-container" 
        style={{ 
          maxWidth: '740px', 
          maxHeight: '88vh', 
          display: 'flex', 
          flexDirection: 'column', 
          borderRadius: '16px', 
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (Fixed at top) */}
        <div className="modal-header" style={{ flexShrink: 0, backgroundColor: '#050b17', color: '#ffffff', borderBottom: '1px solid #1e293b', padding: '18px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: '#0056d2',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Calculator size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Get an Instant Project Quote
                </h3>
                <span style={{ backgroundColor: 'rgba(0, 191, 255, 0.15)', color: '#00bfff', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '12px' }}>
                  Fast Response
                </span>
              </div>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '2px 0 0 0' }}>
                Itemized engineering estimate &amp; complimentary site walkthrough
              </p>
            </div>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close modal"
            style={{ color: '#94a3b8', background: 'transparent' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body (Scrollable with smooth scrollbar) */}
        <div 
          className="modal-body quote-modal-scrollable-body" 
          style={{ 
            padding: '22px 26px 30px 26px', 
            overflowY: 'auto', 
            flex: 1, 
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {submitted ? (
            /* SUBMITTED SUCCESS VIEW */
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <CheckCircle2 size={40} />
              </div>
              <div style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#0056d2', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, marginBottom: '10px' }}>
                Quote Reference: {quoteRef}
              </div>
              <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Quote Request Successfully Submitted!
              </h4>
              <p style={{ fontSize: '14.5px', color: '#475569', maxWidth: '480px', margin: '0 auto 20px auto', lineHeight: '1.55' }}>
                Thank you, <strong>{name || 'valued client'}</strong>. Our engineering estimation team has received your project details for <strong>{company || 'your organization'}</strong>.
              </p>

              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px 20px',
                maxWidth: '520px',
                margin: '0 auto 20px auto',
                textAlign: 'left',
                fontSize: '13px',
                color: '#334155'
              }}>
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FileText size={15} color="#0056d2" />
                  <span>Configured Scope Summary:</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12.5px' }}>
                  <div>• <strong>Building Type:</strong> {buildingType}</div>
                  <div>• <strong>Size:</strong> {sqFt}</div>
                  <div>• <strong>Drops / Cables:</strong> {estimatedDrops}</div>
                  <div>• <strong>Target Timeline:</strong> {timeline}</div>
                </div>
                <div style={{ marginTop: '8px', borderTop: '1px solid #e2e8f0', paddingTop: '8px' }}>
                  • <strong>Selected Systems:</strong> {selectedServices.join(', ')}
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>
                A certified Smart-Links systems engineer will review your specs and deliver an itemized quote to <strong>{email}</strong> within <strong>24 business hours</strong>.
              </p>

              <button className="btn-primary" onClick={handleReset} style={{ minWidth: '200px' }}>
                Done &amp; Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Stepper Progress Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '6px', flex: 1, marginRight: '16px' }}>
                  <div style={{
                    flex: 1,
                    height: '5px',
                    borderRadius: '3px',
                    backgroundColor: '#0056d2',
                    transition: 'background 0.3s ease'
                  }} />
                  <div style={{
                    flex: 1,
                    height: '5px',
                    borderRadius: '3px',
                    backgroundColor: step >= 2 ? '#0056d2' : '#e2e8f0',
                    transition: 'background 0.3s ease'
                  }} />
                  <div style={{
                    flex: 1,
                    height: '5px',
                    borderRadius: '3px',
                    backgroundColor: step === 3 ? '#0056d2' : '#e2e8f0',
                    transition: 'background 0.3s ease'
                  }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>
                  Step {step} of 3
                </span>
              </div>

              {/* Validation Alert */}
              {validationError && (
                <div style={{
                  padding: '10px 14px',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  color: '#b91c1c',
                  fontSize: '13px',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>⚠️ {validationError}</span>
                </div>
              )}

              {/* STEP 1: SERVICES & FACILITY */}
              {step === 1 && (
                <div>
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label className="form-label" style={{ fontWeight: 700, color: '#0f172a', marginBottom: '8px', display: 'block' }}>
                      1. Select Required Systems &amp; Solutions (Multi-Select)
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                      gap: '8px'
                    }}>
                      {availableServices.map((srv) => {
                        const isChecked = selectedServices.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            style={{
                              border: isChecked ? '2px solid #0056d2' : '1px solid #e2e8f0',
                              backgroundColor: isChecked ? '#f0f7ff' : '#ffffff',
                              borderRadius: '8px',
                              padding: '10px 12px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ color: isChecked ? '#0056d2' : '#64748b' }}>{srv.icon}</span>
                              <span style={{ fontSize: '12.5px', fontWeight: isChecked ? 700 : 500, color: '#0f172a' }}>
                                {srv.name}
                              </span>
                            </div>
                            <div style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '4px',
                              border: isChecked ? '2px solid #0056d2' : '2px solid #cbd5e1',
                              backgroundColor: isChecked ? '#0056d2' : 'transparent',
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '10px'
                            }}>
                              {isChecked && <Check size={11} strokeWidth={3} />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Facility / Building Type</label>
                      <select
                        className="form-select"
                        value={buildingType}
                        onChange={(e) => setBuildingType(e.target.value)}
                      >
                        <option value="Commercial Office / HQ">Commercial Office / HQ</option>
                        <option value="Industrial Warehouse / Plant">Industrial Warehouse / Plant</option>
                        <option value="Data Center / Colocation">Data Center / Colocation</option>
                        <option value="Hospital / Healthcare">Hospital / Healthcare</option>
                        <option value="Retail Multi-Site / Flagship">Retail Multi-Site / Flagship</option>
                        <option value="Hotel / Hospitality / Resort">Hotel / Hospitality / Resort</option>
                        <option value="School / Campus / University">School / Campus / University</option>
                        <option value="Government / Municipal">Government / Municipal</option>
                        <option value="Other / Mixed-Use">Other / Mixed-Use</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Approximate Square Footage</label>
                      <select
                        className="form-select"
                        value={sqFt}
                        onChange={(e) => setSqFt(e.target.value)}
                      >
                        <option value="Under 10,000 sq ft">Under 10,000 sq ft</option>
                        <option value="10,000 - 25,000 sq ft">10,000 - 25,000 sq ft</option>
                        <option value="25,000 - 50,000 sq ft">25,000 - 50,000 sq ft</option>
                        <option value="50,000 - 150,000 sq ft">50,000 - 150,000 sq ft</option>
                        <option value="150,000+ sq ft / Campus">150,000+ sq ft / Multi-Building Campus</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Estimated Cable Drops / Outlets</label>
                      <select
                        className="form-select"
                        value={estimatedDrops}
                        onChange={(e) => setEstimatedDrops(e.target.value)}
                      >
                        <option value="Under 50 Drops / Outlets">Under 50 Drops / Outlets</option>
                        <option value="50 - 200 Drops / Outlets">50 - 200 Drops / Outlets</option>
                        <option value="200 - 500 Drops">200 - 500 Drops</option>
                        <option value="500+ Drops / Campus Backbone">500+ Drops / Campus Backbone</option>
                        <option value="Not Sure / Need Assessment">Not Sure / Need Assessment</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Desired Deployment Timeline</label>
                      <select
                        className="form-select"
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                      >
                        <option value="Urgent (Within 30 Days)">Urgent (Within 30 Days)</option>
                        <option value="Within 1-3 Months">Within 1-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="Budgeting & Planning Phase">Budgeting &amp; Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={handleNext}
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: CONTACT & LOCATION */}
              {step === 2 && (
                <div>
                  <div className="form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. John Davis"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Apex Enterprises"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Business Email *</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-input"
                        placeholder="(407) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Job Title / Role</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. IT Director / Facilities Mgr"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Project City &amp; State</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Orlando, FL"
                        value={cityState}
                        onChange={(e) => setCityState(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '14px' }}>
                    <label className="form-label">Project Scope Notes / Specific Requirements</label>
                    <textarea
                      rows={3}
                      className="form-textarea"
                      placeholder="Describe drop counts, ceiling type, conduit readiness, or hardware preferences (Panduit, CommScope, Corning)..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  {/* Attachment */}
                  <div style={{ marginBottom: '16px' }}>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      style={{
                        border: '1px dashed #cbd5e1',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        backgroundColor: '#f8fafc',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '12.5px'
                      }}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                        accept=".pdf,.dwg,.cad,.docx,.xlsx,.png,.jpg,.zip"
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569' }}>
                        <UploadCloud size={18} color="#0056d2" />
                        <span>{uploadedFileName ? `Attached: ${uploadedFileName}` : 'Attach Blueprint / RFP File (PDF, CAD, Excel - Optional)'}</span>
                      </div>
                      <span style={{ color: '#0056d2', fontWeight: 600 }}>{uploadedFileName ? 'Change' : 'Browse'}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                    <button
                      type="button"
                      className="btn-outline-dark"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={handleNext}
                    >
                      <span>Review Quote Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: REVIEW & SUBMIT */}
              {step === 3 && (
                <div>
                  <div style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '16px',
                    marginBottom: '16px'
                  }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '10px', borderBottom: '1px solid #e2e8f0', pb: '6px' }}>
                      Review Request Details:
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px', color: '#475569' }}>
                      <div><strong>Client:</strong> {name} ({company})</div>
                      <div><strong>Email:</strong> {email}</div>
                      <div><strong>Phone:</strong> {phone}</div>
                      <div><strong>Location:</strong> {cityState || 'To Be Specified'}</div>
                      <div><strong>Facility:</strong> {buildingType} ({sqFt})</div>
                      <div><strong>Drops:</strong> {estimatedDrops}</div>
                      <div><strong>Timeline:</strong> {timeline}</div>
                      <div><strong>Attachment:</strong> {uploadedFileName || 'None'}</div>
                    </div>

                    <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0', fontSize: '13px' }}>
                      <strong>Selected Systems:</strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                        {selectedServices.map(s => (
                          <span key={s} style={{ backgroundColor: '#eff6ff', color: '#0056d2', padding: '2px 8px', borderRadius: '4px', fontSize: '11.5px', fontWeight: 600 }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {notes && (
                      <div style={{ marginTop: '8px', fontSize: '12.5px', color: '#475569' }}>
                        <strong>Notes:</strong> {notes}
                      </div>
                    )}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 14px',
                    backgroundColor: '#eff6ff',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    color: '#1e40af',
                    marginBottom: '20px'
                  }}>
                    <ShieldCheck size={20} style={{ flexShrink: 0 }} />
                    <span>Every quote includes complimentary on-site walkthrough, Fluke test certification warranty, and BICSI RCDD engineering review.</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="btn-outline-dark"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button type="submit" className="btn-primary" style={{ padding: '12px 28px' }}>
                      <span>Submit Quote Request</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
