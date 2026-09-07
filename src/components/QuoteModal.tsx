import React, { useState } from 'react';
import { X, CheckCircle2, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Structured Cabling Infrastructure']
  );
  const [buildingType, setBuildingType] = useState('Commercial Office');
  const [sqFt, setSqFt] = useState('25,000 - 50,000 sq ft');
  const [timeline, setTimeline] = useState('Within 1-3 Months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const availableServices = [
    'Structured Cabling Infrastructure',
    'Fiber Optic Solutions (OS2/OM4)',
    'Enterprise Video Surveillance',
    'Access Control & Biometrics',
    'Distributed Antenna Systems (DAS / ERRCS)',
    'Data Center Rack & IT Solutions'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#eff6ff',
              color: '#0056d2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>Request a Project Quote</h3>
              <p style={{ fontSize: '12px', color: '#64748b' }}>Custom infrastructure estimate & certified engineering consultation</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Quote Request Received!</h4>
              <p style={{ fontSize: '15px', color: '#475569', maxWidth: '440px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
                Thank you, <strong>{name || 'valued partner'}</strong>. A certified Smart-Links systems engineer has been assigned to your scope for <strong>{company || 'your project'}</strong> and will follow up within 2 business hours.
              </p>
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                maxWidth: '440px',
                margin: '0 auto 24px auto',
                textAlign: 'left',
                fontSize: '13px',
                color: '#475569'
              }}>
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Project Summary:</div>
                <div>• <strong>Building Type:</strong> {buildingType} ({sqFt})</div>
                <div>• <strong>Scope:</strong> {selectedServices.join(', ')}</div>
                <div>• <strong>Target Timeline:</strong> {timeline}</div>
              </div>
              <button className="btn-primary" onClick={handleReset}>
                Done & Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step indicator */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <div style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: '#0056d2'
                }} />
                <div style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: step >= 2 ? '#0056d2' : '#e2e8f0'
                }} />
              </div>

              {step === 1 ? (
                <div>
                  <div className="form-group">
                    <label className="form-label">Select Required Systems & Services (Multi-Select)</label>
                    <div className="services-checkbox-grid">
                      {availableServices.map((srv) => {
                        const isChecked = selectedServices.includes(srv);
                        return (
                          <div
                            key={srv}
                            className={`checkbox-pill ${isChecked ? 'selected' : ''}`}
                            onClick={() => toggleService(srv)}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              readOnly
                              style={{ accentColor: '#0056d2', cursor: 'pointer' }}
                            />
                            <span>{srv}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Facility / Property Type</label>
                      <select
                        className="form-select"
                        value={buildingType}
                        onChange={(e) => setBuildingType(e.target.value)}
                      >
                        <option value="Commercial Office">Commercial Office / HQ</option>
                        <option value="Industrial Warehouse">Industrial Warehouse / Plant</option>
                        <option value="Healthcare Facility">Hospital / Healthcare</option>
                        <option value="Retail Boutique/Store">Retail Flagship / Multi-Store</option>
                        <option value="Hospitality Hotel/Resort">Hotel / Resort / Hospitality</option>
                        <option value="Educational Campus">School / University Campus</option>
                        <option value="Government Facility">Government / Municipal</option>
                        <option value="Data Center">Data Center / Colocation</option>
                      </select>
                    </div>

                    <div className="form-group">
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

                  <div className="form-group">
                    <label className="form-label">Desired Deployment Timeline</label>
                    <select
                      className="form-select"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                    >
                      <option value="Urgent (Within 30 Days)">Urgent (Within 30 Days)</option>
                      <option value="Within 1-3 Months">Within 1-3 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="Budgeting & Planning Phase">Budgeting & Planning Phase</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => setStep(2)}
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
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
                    <div className="form-group">
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

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
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
                    <div className="form-group">
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

                  <div className="form-group">
                    <label className="form-label">Project Details / Special Requirements</label>
                    <textarea
                      rows={3}
                      className="form-textarea"
                      placeholder="Describe cable drop count, existing conduit status, floor plan availability, or any specific compliance mandates..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 16px',
                    backgroundColor: '#eff6ff',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    color: '#1e40af',
                    marginBottom: '20px'
                  }}>
                    <ShieldCheck size={20} style={{ flexShrink: 0 }} />
                    <span>All estimates include complimentary site walk-through, Fluke test certification warranties, and BICSI-stamped CAD as-built packages.</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="btn-outline-dark"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>
                    <button type="submit" className="btn-primary">
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
