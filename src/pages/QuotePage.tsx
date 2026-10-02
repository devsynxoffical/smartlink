import React, { useState, useRef, useEffect } from 'react';
import type { NavTab } from '../types';
import {
  FileText,
  Settings,
  MapPin,
  UploadCloud,
  Clock,
  Users,
  Globe,
  ShieldCheck,
  Check,
  ArrowRight,
  CheckCircle2,
  Zap,
  Building,
  HardHat,
  Phone,
  Mail,
  HelpCircle,
  ChevronDown,
  Award,
  Layers,
  FileCheck2,
  Server,
  Network,
  Camera,
  KeyRound,
  Radio,
  Plus
} from 'lucide-react';

interface QuotePageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  preselectedService?: string;
}

interface QuoteServiceOption {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
}

const quoteServicesList: QuoteServiceOption[] = [
  {
    id: 'structured-cabling',
    name: 'Structured Cabling',
    category: 'Copper & Infrastructure',
    description: 'Cat6, Cat6A, Cat7 copper cabling, patch panels, cable trays & rack dressing.',
    icon: <Network size={22} />,
    popular: true
  },
  {
    id: 'fiber-optics',
    name: 'Fiber Optic Solutions',
    category: 'High-Speed Optical',
    description: 'Single-mode (OS2) & Multi-mode (OM4/OM5), fusion splicing, OTDR testing & backbone links.',
    icon: <Zap size={22} />,
    popular: true
  },
  {
    id: 'data-center',
    name: 'Data Center Infrastructure',
    category: 'Mission-Critical Tech',
    description: 'Server rack & stack, hot/cold containment, MDF/IDF buildouts, PDU power & cable busways.',
    icon: <Server size={22} />,
    popular: true
  },
  {
    id: 'video-surveillance',
    name: 'Enterprise Video Surveillance',
    category: 'Physical Security',
    description: 'IP security cameras, AI video analytics, NVR storage servers & cloud VMS systems.',
    icon: <Camera size={22} />
  },
  {
    id: 'access-control',
    name: 'Access Control Systems',
    category: 'Facility Security',
    description: 'Card keyfob readers, biometric scanners, electric door strikes, turnstiles & visitor management.',
    icon: <KeyRound size={22} />
  },
  {
    id: 'das-systems',
    name: 'DAS & In-Building Wireless',
    category: 'Cellular & Public Safety',
    description: 'Distributed Antenna Systems (DAS), ERRCS first responder radios & high-density WiFi 6E/7.',
    icon: <Radio size={22} />
  },
  {
    id: 'nationwide-rollouts',
    name: 'Nationwide Rollouts & Multi-Site',
    category: 'Enterprise Scale',
    description: 'Standardized multi-location IT deployments, retail tech rollouts & field smart hands across 50 states.',
    icon: <Globe size={22} />,
    popular: true
  },
  {
    id: 'it-solutions',
    name: 'IT Solutions & Hardware Setup',
    category: 'Workstation & Network',
    description: 'Switching, routing, firewall appliance installs, POS terminals & VoIP telecommunications.',
    icon: <Settings size={22} />
  }
];

const usStatesList = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'Canada / International'
];

export const QuotePage: React.FC<QuotePageProps> = ({ onNavigate, preselectedService }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  // Form State
  const [selectedServices, setSelectedServices] = useState<string[]>(['structured-cabling']);
  const [otherServiceText, setOtherServiceText] = useState('');
  
  const [facilityType, setFacilityType] = useState('Commercial Office / Corporate HQ');
  const [squareFootage, setSquareFootage] = useState('25,000 - 50,000 sq ft');
  const [estimatedDrops, setEstimatedDrops] = useState('50 - 200 Drops / Cables');
  const [siteCount, setSiteCount] = useState('1 Location (Single Site)');
  const [deploymentTimeline, setDeploymentTimeline] = useState('Within 1-3 Months');
  const [budgetRange, setBudgetRange] = useState('$25,000 - $75,000');
  const [projectDescription, setProjectDescription] = useState('');

  // Contact Info
  const [yourName, setYourName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Location Info
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('Florida');
  const [zipCode, setZipCode] = useState('');

  // Document Upload & Referral
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [howHeard, setHowHeard] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const [validationError, setValidationError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-select preselected service if passed
  useEffect(() => {
    if (preselectedService) {
      const lower = preselectedService.toLowerCase();
      const matched = quoteServicesList.find(s => 
        lower.includes(s.id) || lower.includes(s.name.toLowerCase())
      );
      if (matched && !selectedServices.includes(matched.id)) {
        setSelectedServices([matched.id]);
      }
    }
  }, [preselectedService]);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(item => item !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const validateStep = (step: number): boolean => {
    setValidationError(null);
    if (step === 1) {
      if (selectedServices.length === 0) {
        setValidationError('Please select at least one required service.');
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!projectDescription.trim()) {
        setValidationError('Please provide a brief description of your project scope or objectives.');
        return false;
      }
      return true;
    }
    if (step === 3) {
      if (!yourName.trim()) {
        setValidationError('Please enter your full name.');
        return false;
      }
      if (!companyName.trim()) {
        setValidationError('Please enter your company or organization name.');
        return false;
      }
      if (!email.trim() || !email.includes('@')) {
        setValidationError('Please enter a valid business email address.');
        return false;
      }
      if (!phone.trim()) {
        setValidationError('Please enter your contact phone number.');
        return false;
      }
      if (!city.trim() || !zipCode.trim()) {
        setValidationError('Please provide project City and ZIP code.');
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setValidationError(null);
      setCurrentStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setValidationError(null);
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(1) && validateStep(2) && validateStep(3)) {
      const generatedRef = 'SL-Q' + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(generatedRef);
      setSubmitted(true);
      window.scrollTo({ top: 340, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setSelectedServices(['structured-cabling']);
    setOtherServiceText('');
    setProjectDescription('');
    setYourName('');
    setJobTitle('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setZipCode('');
    setUploadedFileName(null);
    setSpecialNotes('');
    setValidationError(null);
  };

  return (
    <div className="quote-page-root">
      {/* 1. HERO SECTION */}
      <section 
        className="contact-hero-section"
        style={{
          backgroundImage: `url('/contact_hero_new_office.png')`
        }}
      >
        <div className="contact-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="contact-hero-grid">
            {/* Left Hero Content */}
            <div>
              <div className="eyebrow-cyan">ENTERPRISE QUOTE REQUEST</div>
              <h1 className="contact-hero-title">
                Get a Fast, Itemized <br />
                <span className="blue-highlight">Infrastructure Quote.</span>
              </h1>
              <p className="contact-hero-subtext">
                Configure your network, cabling, security, or nationwide rollout specifications below. Our certified RCDD engineers provide complete transparent pricing and turnaround within 24 hours.
              </p>

              {/* 4 Badges Row */}
              <div className="contact-hero-badges-row">
                <div className="contact-badge-pill">
                  <Zap size={16} className="contact-badge-icon" />
                  <span>&lt;24 Hr Response</span>
                </div>
                <div className="contact-badge-pill">
                  <ShieldCheck size={16} className="contact-badge-icon" />
                  <span>Fluke &amp; BICSI Certified</span>
                </div>
                <div className="contact-badge-pill">
                  <Globe size={16} className="contact-badge-icon" />
                  <span>Nationwide 50 States</span>
                </div>
                <div className="contact-badge-pill">
                  <Award size={16} className="contact-badge-icon" />
                  <span>25-Yr System Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Tag Banner */}
            <div className="contact-hero-right-tag">
              <div className="contact-tagline-block">
                <div className="contact-tagline-words">
                  PRECISION<br />
                  PERFORMANCE<br />
                  COMPLIANCE<br />
                  SCALE
                </div>
                <div className="contact-tagline-bar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED QUOTE WIZARD CONTAINER */}
      <section className="contact-form-section-wrap" style={{ paddingTop: '50px', paddingBottom: '70px' }}>
        <div className="container-wide">
          <div className="quote-form-master-card" style={{ boxShadow: '0 20px 45px rgba(0,0,0,0.08)' }}>
            
            {/* Interactive Stepper Navigation */}
            <div className="quote-stepper-track">
              {/* Step 1 */}
              <div 
                className={`quote-step-item ${currentStep >= 1 ? 'active' : ''} ${submitted || currentStep > 1 ? 'completed' : ''}`}
                onClick={() => !submitted && setCurrentStep(1)}
                style={{ cursor: !submitted ? 'pointer' : 'default' }}
              >
                <div className="quote-step-num">
                  {submitted || currentStep > 1 ? <Check size={14} strokeWidth={3} /> : '1'}
                </div>
                <span className="quote-step-label">1. Services &amp; Scope</span>
              </div>
              <div className={`quote-step-connector ${submitted || currentStep > 1 ? 'completed' : ''}`} />

              {/* Step 2 */}
              <div 
                className={`quote-step-item ${currentStep >= 2 ? 'active' : ''} ${submitted || currentStep > 2 ? 'completed' : ''}`}
                onClick={() => !submitted && validateStep(1) && setCurrentStep(2)}
                style={{ cursor: !submitted ? 'pointer' : 'default' }}
              >
                <div className="quote-step-num">
                  {submitted || currentStep > 2 ? <Check size={14} strokeWidth={3} /> : '2'}
                </div>
                <span className="quote-step-label">2. Facility &amp; Timeline</span>
              </div>
              <div className={`quote-step-connector ${submitted || currentStep > 2 ? 'completed' : ''}`} />

              {/* Step 3 */}
              <div 
                className={`quote-step-item ${currentStep >= 3 ? 'active' : ''} ${submitted || currentStep > 3 ? 'completed' : ''}`}
                onClick={() => !submitted && validateStep(1) && validateStep(2) && setCurrentStep(3)}
                style={{ cursor: !submitted ? 'pointer' : 'default' }}
              >
                <div className="quote-step-num">
                  {submitted || currentStep > 3 ? <Check size={14} strokeWidth={3} /> : '3'}
                </div>
                <span className="quote-step-label">3. Contact &amp; Location</span>
              </div>
              <div className={`quote-step-connector ${submitted || currentStep === 4 ? 'completed' : ''}`} />

              {/* Step 4: Review & Submit */}
              <div 
                className={`quote-step-item ${currentStep === 4 || submitted ? 'active completed' : ''}`}
                onClick={() => !submitted && validateStep(1) && validateStep(2) && validateStep(3) && setCurrentStep(4)}
                style={{ cursor: !submitted ? 'pointer' : 'default' }}
              >
                <div className="quote-step-num">
                  {submitted ? <Check size={14} strokeWidth={3} /> : '4'}
                </div>
                <span className="quote-step-label">4. Review &amp; Submit</span>
              </div>
            </div>

            {/* Validation Error Toast */}
            {validationError && (
              <div className="quote-validation-alert">
                <span>{validationError}</span>
              </div>
            )}

            {submitted ? (
              /* SUCCESS STATE VIEW */
              <div className="quote-success-view">
                <div className="quote-success-icon-wrap" style={{ backgroundColor: '#ecfdf5', color: '#10b981' }}>
                  <CheckCircle2 size={60} />
                </div>
                <div style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#0056d2', padding: '4px 14px', borderRadius: '20px', fontSize: '12.5px', fontWeight: 700, marginBottom: '12px' }}>
                  Reference Code: {refNumber}
                </div>
                <h2 className="quote-success-title">Your Quote Request Has Been Received!</h2>
                <p className="quote-success-subtitle">
                  Thank you, <strong>{yourName || 'valued client'}</strong>. Our engineering estimation team has registered your request for <strong>{companyName || 'your organization'}</strong>.
                </p>

                <div className="quote-success-summary-box">
                  <div className="quote-summary-row">
                    <span className="quote-summary-key">Requested Services:</span>
                    <div className="quote-summary-pills">
                      {selectedServices.map(srvId => {
                        const srv = quoteServicesList.find(s => s.id === srvId);
                        return srv ? (
                          <span key={srvId} className="quote-summary-pill">{srv.name}</span>
                        ) : null;
                      })}
                    </div>
                  </div>
                  <div className="quote-summary-row" style={{ marginTop: '10px' }}>
                    <span className="quote-summary-key">Facility &amp; Scope:</span>
                    <span className="quote-summary-val">{facilityType} • {squareFootage} ({estimatedDrops})</span>
                  </div>
                  {city && stateVal && (
                    <div className="quote-summary-row" style={{ marginTop: '10px' }}>
                      <span className="quote-summary-key">Site Location:</span>
                      <span className="quote-summary-val">{city}, {stateVal} {zipCode}</span>
                    </div>
                  )}
                  {email && (
                    <div className="quote-summary-row" style={{ marginTop: '10px' }}>
                      <span className="quote-summary-key">Written Estimate Delivery:</span>
                      <span className="quote-summary-val">{email}</span>
                    </div>
                  )}
                </div>

                <div style={{
                  maxWidth: '560px',
                  margin: '20px auto 0 auto',
                  padding: '16px 20px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'left',
                  fontSize: '13.5px',
                  color: '#475569',
                  lineHeight: '1.6'
                }}>
                  <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Next Steps:</strong>
                  1. A designated Smart-Links solutions estimator will review your specifications.<br />
                  2. We will contact you within <strong>24 business hours</strong> with an itemized draft proposal or to coordinate an on-site survey if requested.<br />
                  3. For emergency inquiries or urgent bids, please call our direct hotline at <strong>(800) 555-SMART</strong>.
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className="quote-btn-secondary"
                    style={{ maxWidth: '240px' }}
                  >
                    <span>Submit Another Quote</span>
                    <Plus size={16} />
                  </button>
                  <button 
                    type="button" 
                    onClick={() => onNavigate('home')}
                    className="quote-btn-submit"
                    style={{ maxWidth: '240px' }}
                  >
                    <span>Return to Home</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-master-form">

                {/* STEP 1: SERVICES & SOLUTIONS SELECTION */}
                {currentStep === 1 && (
                  <div className="quote-step-content-fade">
                    <div className="quote-section-block">
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <Layers size={22} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Select Required Services &amp; Systems</h3>
                          <p className="quote-section-subtitle">Choose one or more solutions needed for your project scope.</p>
                        </div>
                      </div>

                      {/* Service Selection Card Grid */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '14px',
                        marginTop: '16px'
                      }}>
                        {quoteServicesList.map((srv) => {
                          const isSelected = selectedServices.includes(srv.id);
                          return (
                            <div
                              key={srv.id}
                              onClick={() => toggleService(srv.id)}
                              style={{
                                border: isSelected ? '2px solid #0056d2' : '1px solid #e2e8f0',
                                backgroundColor: isSelected ? '#f0f7ff' : '#ffffff',
                                borderRadius: '12px',
                                padding: '16px 18px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative'
                              }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                <div style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '8px',
                                  backgroundColor: isSelected ? '#0056d2' : '#f1f5f9',
                                  color: isSelected ? '#ffffff' : '#0056d2',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                  {srv.icon}
                                </div>
                                <div style={{
                                  width: '22px',
                                  height: '22px',
                                  borderRadius: '6px',
                                  border: isSelected ? '2px solid #0056d2' : '2px solid #cbd5e1',
                                  backgroundColor: isSelected ? '#0056d2' : 'transparent',
                                  color: '#ffffff',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                  {isSelected && <Check size={14} strokeWidth={3} />}
                                </div>
                              </div>
                              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: isSelected ? '#0056d2' : '#64748b', fontWeight: 700, marginBottom: '2px' }}>
                                {srv.category}
                              </div>
                              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                                {srv.name}
                              </h4>
                              <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: '1.45', margin: 0 }}>
                                {srv.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Custom / Other Service Option */}
                      <div style={{ marginTop: '16px' }}>
                        <div 
                          className={`quote-other-card ${selectedServices.includes('other') ? 'selected' : ''}`}
                          onClick={() => toggleService('other')}
                          style={{
                            border: selectedServices.includes('other') ? '2px solid #0056d2' : '1px dashed #cbd5e1',
                            backgroundColor: selectedServices.includes('other') ? '#f0f7ff' : '#fafafa',
                            borderRadius: '10px',
                            padding: '14px 18px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '4px',
                              border: selectedServices.includes('other') ? '2px solid #0056d2' : '2px solid #cbd5e1',
                              backgroundColor: selectedServices.includes('other') ? '#0056d2' : 'transparent',
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {selectedServices.includes('other') && <Check size={12} strokeWidth={3} />}
                            </div>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>Other Specialized Requirement or Hybrid Solution</span>
                          </div>
                        </div>

                        {selectedServices.includes('other') && (
                          <div style={{ marginTop: '10px' }}>
                            <input
                              type="text"
                              className="quote-input"
                              placeholder="Please specify your unique technology or cabling requirements..."
                              value={otherServiceText}
                              onChange={(e) => setOtherServiceText(e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step 1 Actions */}
                    <div className="quote-wizard-actions">
                      <div style={{ fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <ShieldCheck size={16} color="#0056d2" />
                        <span>{selectedServices.length} service(s) selected</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="quote-btn-submit"
                      >
                        <span>Continue to Facility Details</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: FACILITY & SCOPE SPECIFICATIONS */}
                {currentStep === 2 && (
                  <div className="quote-step-content-fade">
                    <div className="quote-section-block">
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <Building size={22} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Facility &amp; Project Specifications</h3>
                          <p className="quote-section-subtitle">Help our engineering estimators accurately size equipment and labor.</p>
                        </div>
                      </div>

                      <div className="quote-grid-2x2">
                        {/* Facility Type */}
                        <div className="quote-field-group">
                          <label className="quote-label">Building / Facility Type <span className="req-star">*</span></label>
                          <select 
                            className="quote-select"
                            value={facilityType}
                            onChange={(e) => setFacilityType(e.target.value)}
                          >
                            <option value="Commercial Office / Corporate HQ">Commercial Office / Corporate HQ</option>
                            <option value="Industrial Warehouse / Distribution Center">Industrial Warehouse / Distribution Center</option>
                            <option value="Data Center / Colocation Facility">Data Center / Colocation Facility</option>
                            <option value="Hospital / Healthcare Complex">Hospital / Healthcare Complex</option>
                            <option value="Retail Multi-Site Chain / Flagship">Retail Multi-Site Chain / Flagship</option>
                            <option value="Hotel / Resort / Hospitality">Hotel / Resort / Hospitality</option>
                            <option value="School / College / University Campus">School / College / University Campus</option>
                            <option value="Financial Institution / Banking Branch">Financial Institution / Banking Branch</option>
                            <option value="Government / Municipal Building">Government / Municipal Building</option>
                            <option value="Other / Mixed-Use Development">Other / Mixed-Use Development</option>
                          </select>
                        </div>

                        {/* Square Footage */}
                        <div className="quote-field-group">
                          <label className="quote-label">Approximate Facility Size</label>
                          <select 
                            className="quote-select"
                            value={squareFootage}
                            onChange={(e) => setSquareFootage(e.target.value)}
                          >
                            <option value="Under 10,000 sq ft">Under 10,000 sq ft</option>
                            <option value="10,000 - 25,000 sq ft">10,000 - 25,000 sq ft</option>
                            <option value="25,000 - 50,000 sq ft">25,000 - 50,000 sq ft</option>
                            <option value="50,000 - 150,000 sq ft">50,000 - 150,000 sq ft</option>
                            <option value="150,000+ sq ft / Campus">150,000+ sq ft / Multi-Building Campus</option>
                            <option value="Not Sure / Multi-Site Aggregated">Not Sure / Multi-Site Aggregated</option>
                          </select>
                        </div>

                        {/* Estimated Drops / Cables */}
                        <div className="quote-field-group">
                          <label className="quote-label">Estimated Cable Drops / Device Outlets</label>
                          <select 
                            className="quote-select"
                            value={estimatedDrops}
                            onChange={(e) => setEstimatedDrops(e.target.value)}
                          >
                            <option value="Under 50 Drops / Outlets">Under 50 Drops / Outlets</option>
                            <option value="50 - 200 Drops / Cables">50 - 200 Drops / Cables</option>
                            <option value="200 - 500 Drops / Cables">200 - 500 Drops / Cables</option>
                            <option value="500 - 1,500+ Drops">500 - 1,500+ Drops</option>
                            <option value="Campus Optical Backbone Only">Campus Optical Backbone Only</option>
                            <option value="Not Sure / Need Site Survey">Not Sure / Need Site Survey</option>
                          </select>
                        </div>

                        {/* Number of Sites */}
                        <div className="quote-field-group">
                          <label className="quote-label">Deployment Scale / Sites</label>
                          <select 
                            className="quote-select"
                            value={siteCount}
                            onChange={(e) => setSiteCount(e.target.value)}
                          >
                            <option value="1 Location (Single Site)">1 Location (Single Site)</option>
                            <option value="2 - 5 Locations (Regional)">2 - 5 Locations (Regional)</option>
                            <option value="6 - 25 Locations (Multi-State)">6 - 25 Locations (Multi-State)</option>
                            <option value="25+ Locations (Nationwide Rollout)">25+ Locations (Nationwide Rollout)</option>
                          </select>
                        </div>

                        {/* Timeline */}
                        <div className="quote-field-group">
                          <label className="quote-label">Target Deployment Timeline</label>
                          <select 
                            className="quote-select"
                            value={deploymentTimeline}
                            onChange={(e) => setDeploymentTimeline(e.target.value)}
                          >
                            <option value="Immediate / Emergency (Under 30 Days)">Immediate / Emergency (Under 30 Days)</option>
                            <option value="Within 1-3 Months">Within 1-3 Months</option>
                            <option value="3-6 Months">3-6 Months</option>
                            <option value="Budgeting & Planning Stage (RFP)">Budgeting &amp; Planning Stage (RFP)</option>
                          </select>
                        </div>

                        {/* Budget Range */}
                        <div className="quote-field-group">
                          <label className="quote-label">Anticipated Budget Range</label>
                          <select 
                            className="quote-select"
                            value={budgetRange}
                            onChange={(e) => setBudgetRange(e.target.value)}
                          >
                            <option value="Under $10,000">Under $10,000</option>
                            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                            <option value="$25,000 - $75,000">$25,000 - $75,000</option>
                            <option value="$75,000 - $200,000">$75,000 - $200,000</option>
                            <option value="$200,000+ / Enterprise">$200,000+ / Enterprise Multi-Site</option>
                            <option value="To Be Determined (TBD)">To Be Determined (TBD)</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Scope Description */}
                      <div className="quote-field-group" style={{ marginTop: '16px' }}>
                        <label className="quote-label">Scope Description &amp; Specific Requirements <span className="req-star">*</span></label>
                        <textarea
                          rows={4}
                          className="quote-textarea"
                          placeholder="Please provide specifics: ceiling type (plenum, open deck, drywall), conduit readiness, rack space availability, specific hardware preferences (Panduit, CommScope, Corning), or test certification requirements..."
                          value={projectDescription}
                          onChange={(e) => setProjectDescription(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Step 2 Actions */}
                    <div className="quote-wizard-actions">
                      <button 
                        type="button" 
                        onClick={handleBack}
                        className="quote-btn-secondary"
                      >
                        ← Back to Services
                      </button>
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="quote-btn-submit"
                      >
                        <span>Continue to Contact &amp; Location</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT & LOCATION INFORMATION */}
                {currentStep === 3 && (
                  <div className="quote-step-content-fade">
                    <div className="quote-section-block">
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <Users size={22} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Contact &amp; Site Location Details</h3>
                          <p className="quote-section-subtitle">Where should we deliver the quote and who is the designated point of contact?</p>
                        </div>
                      </div>

                      {/* Contact Info Grid */}
                      <div className="quote-grid-2x2">
                        <div className="quote-field-group">
                          <label className="quote-label">Full Name <span className="req-star">*</span></label>
                          <input 
                            type="text" 
                            className="quote-input" 
                            placeholder="e.g. Michael Henderson"
                            value={yourName}
                            onChange={(e) => setYourName(e.target.value)}
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">Job Title / Role</label>
                          <input 
                            type="text" 
                            className="quote-input" 
                            placeholder="e.g. Director of IT / Project Manager"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">Company / Organization <span className="req-star">*</span></label>
                          <input 
                            type="text" 
                            className="quote-input" 
                            placeholder="e.g. Apex Global Logistics"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">Business Email Address <span className="req-star">*</span></label>
                          <input 
                            type="email" 
                            className="quote-input" 
                            placeholder="m.henderson@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">Phone Number <span className="req-star">*</span></label>
                          <input 
                            type="tel" 
                            className="quote-input" 
                            placeholder="(407) 555-0199"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">How Did You Hear About Us?</label>
                          <select 
                            className="quote-select"
                            value={howHeard}
                            onChange={(e) => setHowHeard(e.target.value)}
                          >
                            <option value="">Please Select Option</option>
                            <option value="Google / Search Engine">Google / Search Engine</option>
                            <option value="Client Referral / Partner">Client Referral / Partner</option>
                            <option value="Manufacturer / Distributor Rep">Manufacturer / Distributor Rep</option>
                            <option value="LinkedIn / Social Media">LinkedIn / Social Media</option>
                            <option value="BICSI / Industry Event">BICSI / Industry Event</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Site Address Section */}
                      <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                          <MapPin size={18} color="#0056d2" />
                          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                            Project Site Location
                          </h4>
                        </div>

                        <div className="quote-grid-2x2">
                          <div className="quote-field-group">
                            <label className="quote-label">Street Address (Optional if Multi-Site)</label>
                            <input 
                              type="text" 
                              className="quote-input" 
                              placeholder="e.g. 100 Innovation Way, Suite 400"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>

                          <div className="quote-field-group">
                            <label className="quote-label">City <span className="req-star">*</span></label>
                            <input 
                              type="text" 
                              className="quote-input" 
                              placeholder="e.g. Orlando"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>

                          <div className="quote-field-group">
                            <label className="quote-label">State / Province <span className="req-star">*</span></label>
                            <select 
                              className="quote-select"
                              value={stateVal}
                              onChange={(e) => setStateVal(e.target.value)}
                            >
                              {usStatesList.map(st => (
                                <option key={st} value={st}>{st}</option>
                              ))}
                            </select>
                          </div>

                          <div className="quote-field-group">
                            <label className="quote-label">ZIP / Postal Code <span className="req-star">*</span></label>
                            <input 
                              type="text" 
                              className="quote-input" 
                              placeholder="e.g. 32801"
                              value={zipCode}
                              onChange={(e) => setZipCode(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Blueprint / RFP File Attachment */}
                      <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                          <UploadCloud size={18} color="#0056d2" />
                          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                            Attach Blueprints, CAD, RFP, or Scope Documents (Optional)
                          </h4>
                        </div>

                        <div 
                          className="quote-upload-dropzone"
                          onClick={() => fileInputRef.current?.click()}
                          style={{
                            border: '2px dashed #94a3b8',
                            borderRadius: '10px',
                            padding: '24px',
                            textAlign: 'center',
                            backgroundColor: '#f8fafc',
                            cursor: 'pointer',
                            transition: 'border-color 0.2s'
                          }}
                        >
                          <input 
                            type="file" 
                            ref={fileInputRef} 
                            style={{ display: 'none' }}
                            onChange={handleFileUpload}
                            accept=".pdf,.dwg,.cad,.docx,.xlsx,.png,.jpg,.jpeg,.zip"
                          />
                          <UploadCloud size={32} style={{ color: '#0056d2', margin: '0 auto 8px auto' }} />
                          {uploadedFileName ? (
                            <div>
                              <div style={{ fontWeight: 700, color: '#0056d2', fontSize: '14px' }}>
                                Selected: {uploadedFileName}
                              </div>
                              <span style={{ fontSize: '12px', color: '#64748b' }}>Click to choose a different file</span>
                            </div>
                          ) : (
                            <div>
                              <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '4px' }}>
                                Drag &amp; Drop or Click to Browse Project Files
                              </div>
                              <div style={{ fontSize: '12px', color: '#64748b' }}>
                                Accepted formats: PDF blueprints, CAD (.dwg), Word, Excel RFP sheets, ZIP packages (up to 50MB)
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step 3 Actions */}
                    <div className="quote-wizard-actions">
                      <button 
                        type="button" 
                        onClick={handleBack}
                        className="quote-btn-secondary"
                      >
                        ← Back to Facility
                      </button>
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="quote-btn-submit"
                      >
                        <span>Review &amp; Submit Quote</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: REVIEW & SUBMIT */}
                {currentStep === 4 && (
                  <div className="quote-step-content-fade">
                    <div className="quote-section-block">
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <FileCheck2 size={22} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Review Project Summary</h3>
                          <p className="quote-section-subtitle">Please verify your specifications before submitting to our engineering desk.</p>
                        </div>
                      </div>

                      <div className="quote-review-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '16px',
                        marginTop: '16px'
                      }}>
                        {/* 1. Selected Services */}
                        <div className="quote-review-card">
                          <div className="quote-review-card-header">
                            <h4>Selected Systems &amp; Services</h4>
                            <button type="button" onClick={() => setCurrentStep(1)} className="quote-review-edit-btn">Edit</button>
                          </div>
                          <div className="quote-review-card-body">
                            <div className="quote-summary-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                              {selectedServices.map(srvId => {
                                const srv = quoteServicesList.find(s => s.id === srvId);
                                return (
                                  <span key={srvId} className="quote-summary-pill" style={{ backgroundColor: '#eff6ff', color: '#0056d2', padding: '4px 10px', borderRadius: '6px', fontSize: '12.5px', fontWeight: 600 }}>
                                    {srv ? srv.name : (srvId === 'other' ? (otherServiceText || 'Custom Requirement') : srvId)}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* 2. Facility & Scope */}
                        <div className="quote-review-card">
                          <div className="quote-review-card-header">
                            <h4>Facility &amp; Scope</h4>
                            <button type="button" onClick={() => setCurrentStep(2)} className="quote-review-edit-btn">Edit</button>
                          </div>
                          <div className="quote-review-card-body">
                            <div className="quote-review-line"><strong>Type:</strong> {facilityType}</div>
                            <div className="quote-review-line"><strong>Size:</strong> {squareFootage} ({estimatedDrops})</div>
                            <div className="quote-review-line"><strong>Locations:</strong> {siteCount}</div>
                            <div className="quote-review-line"><strong>Timeline:</strong> {deploymentTimeline}</div>
                            <div className="quote-review-line"><strong>Budget Target:</strong> {budgetRange}</div>
                          </div>
                        </div>

                        {/* 3. Contact & Delivery */}
                        <div className="quote-review-card">
                          <div className="quote-review-card-header">
                            <h4>Contact &amp; Delivery</h4>
                            <button type="button" onClick={() => setCurrentStep(3)} className="quote-review-edit-btn">Edit</button>
                          </div>
                          <div className="quote-review-card-body">
                            <div className="quote-review-line"><strong>Contact:</strong> {yourName} {jobTitle ? `(${jobTitle})` : ''}</div>
                            <div className="quote-review-line"><strong>Company:</strong> {companyName}</div>
                            <div className="quote-review-line"><strong>Email:</strong> {email}</div>
                            <div className="quote-review-line"><strong>Phone:</strong> {phone}</div>
                          </div>
                        </div>

                        {/* 4. Site Location & Files */}
                        <div className="quote-review-card">
                          <div className="quote-review-card-header">
                            <h4>Location &amp; Documents</h4>
                            <button type="button" onClick={() => setCurrentStep(3)} className="quote-review-edit-btn">Edit</button>
                          </div>
                          <div className="quote-review-card-body">
                            <div className="quote-review-line"><strong>Site:</strong> {address ? `${address}, ` : ''}{city}, {stateVal} {zipCode}</div>
                            <div className="quote-review-line"><strong>Attachment:</strong> {uploadedFileName || 'None (can provide during survey)'}</div>
                            {howHeard && <div className="quote-review-line"><strong>Referral:</strong> {howHeard}</div>}
                          </div>
                        </div>
                      </div>

                      {/* Scope Description Box */}
                      {projectDescription && (
                        <div style={{
                          marginTop: '16px',
                          padding: '14px 18px',
                          backgroundColor: '#f8fafc',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          fontSize: '13.5px',
                          color: '#334155'
                        }}>
                          <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Scope Notes:</strong>
                          {projectDescription}
                        </div>
                      )}

                      {/* Trust Assurance Banner */}
                      <div style={{
                        marginTop: '20px',
                        padding: '14px 18px',
                        backgroundColor: '#eff6ff',
                        borderRadius: '8px',
                        border: '1px solid #bfdbfe',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <ShieldCheck size={24} color="#0056d2" style={{ flexShrink: 0 }} />
                        <div style={{ fontSize: '13px', color: '#1e40af', lineHeight: '1.45' }}>
                          <strong>Smart-Links Pricing Guarantee:</strong> Every quote includes Fluke certification test warranty, certified BICSI engineering review, and transparent itemized deliverables with zero surprise fees.
                        </div>
                      </div>
                    </div>

                    {/* Submit Actions */}
                    <div className="quote-submit-container" style={{ marginTop: '24px' }}>
                      <div className="quote-wizard-actions" style={{ width: '100%', marginBottom: '12px' }}>
                        <button 
                          type="button" 
                          onClick={handleBack}
                          className="quote-btn-secondary"
                        >
                          ← Back to Edit
                        </button>
                        <button type="submit" className="quote-btn-submit" style={{ flex: 1 }}>
                          <span>Submit Quote Request</span>
                          <ArrowRight size={18} />
                        </button>
                      </div>
                      <p className="quote-submit-note">
                        Our engineering estimating desk will analyze your request and reply within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

              </form>
            )}

            {/* TRUST BADGES STRIP */}
            <div className="quote-trust-strip">
              <div className="quote-trust-badge">
                <div className="quote-trust-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="quote-trust-title">Fast Turnaround</h4>
                  <p className="quote-trust-sub">Complete bids within 24 hours</p>
                </div>
              </div>

              <div className="quote-trust-badge">
                <div className="quote-trust-icon">
                  <Settings size={20} />
                </div>
                <div>
                  <h4 className="quote-trust-title">RCDD Certified</h4>
                  <p className="quote-trust-sub">Engineered to ANSI/TIA-568</p>
                </div>
              </div>

              <div className="quote-trust-badge">
                <div className="quote-trust-icon">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="quote-trust-title">50-State Coverage</h4>
                  <p className="quote-trust-sub">Single point of contact</p>
                </div>
              </div>

              <div className="quote-trust-badge">
                <div className="quote-trust-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="quote-trust-title">25-Yr System Warranty</h4>
                  <p className="quote-trust-sub">CommScope &amp; Panduit backed</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DIRECT ASSISTANCE / HOTLINE BANNER */}
      <section style={{ backgroundColor: '#050b17', color: '#fff', padding: '60px 0', borderTop: '1px solid #1e293b' }}>
        <div className="container-wide">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ color: '#00bfff', fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '8px' }}>
                NEED IMMEDIATE BID SUPPORT?
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                Speak Directly with an Estimating Engineer
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                Have an active emergency outage, immediate walk-through requirement, or urgent RFP deadline? Our senior project directors are available now.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <a 
                href="tel:8005557627" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#0056d2',
                  color: '#fff',
                  padding: '14px 24px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none'
                }}
              >
                <Phone size={18} />
                <span>Call (800) 555-SMART</span>
              </a>
              <button 
                onClick={() => onNavigate('contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '1px solid #475569',
                  padding: '14px 24px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer'
                }}
              >
                <MapPin size={18} />
                <span>View Office Locations</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUOTE FAQS SECTION */}
      <section style={{ padding: '70px 0', backgroundColor: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 45px auto' }}>
            <div style={{ color: '#0056d2', fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '8px' }}>
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Quoting &amp; Engineering Process
            </h2>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6' }}>
              Everything you need to know about our bidding, site walk-throughs, and warranty certifications.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                How quickly will I receive my quote?
              </h4>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                Standard structured cabling, fiber, or camera scopes with floor plans receive detailed itemized proposals within 24 business hours. Large campus environments or multi-site rollouts are delivered within 48 to 72 hours.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Do you provide complimentary on-site surveys?
              </h4>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                Yes! We offer complimentary on-site facility surveys and pathway assessments nationwide to verify cable routes, plenum requirements, and rack space before finalizing contracts.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Can you quote from architectural PDF blueprints?
              </h4>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                Absolutely. You can upload CAD files (.dwg), floor plan PDFs, or RFP spreadsheets directly on this form. Our estimating team uses advanced digital takeoffs for 100% accurate drop counts and pathway distances.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                What warranties are included with installations?
              </h4>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                As certified partner installers for CommScope, Panduit, Corning, and Belden, we provide 25-year manufacturer system performance warranties along with our comprehensive Smart-Links craftsmanship guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
