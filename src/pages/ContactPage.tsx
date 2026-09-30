import React, { useState, useRef } from 'react';
import type { NavTab } from '../types';
import { 
  FileText, 
  Settings, 
  MessageSquare, 
  MapPin, 
  Paperclip, 
  UploadCloud, 
  Clock, 
  Users, 
  Globe, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  X,
  Plus
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

interface ServiceTile {
  id: string;
  title: string;
  image?: string;
  isOther?: boolean;
}

const serviceOptionsList: ServiceTile[] = [
  {
    id: 'structured-cabling',
    title: 'Structured Cabling',
    image: '/web/02-structured-cabling/01-patch-panels-dressing.jpg'
  },
  {
    id: 'fiber-optics',
    title: 'Fiber Optic Solutions',
    image: '/web/01-fiber-optics/01-pre-terminated-fiber-solutions.jpg'
  },
  {
    id: 'data-center',
    title: 'Data Center Services',
    image: '/web/03-data-center-infrastructure/01-rack-and-stack.jpg'
  },
  {
    id: 'video-surveillance',
    title: 'Video Surveillance',
    image: '/web/05-video-surveillance/01-ip-cameras.jpg'
  },
  {
    id: 'access-control',
    title: 'Access Control',
    image: '/web/04-access-control/01-biometrics.jpg'
  },
  {
    id: 'wireless-networks',
    title: 'Wireless Networks',
    image: '/images/03-high-density-wifi-6e-7.jpg'
  },
  {
    id: 'das-wireless',
    title: 'DAS / In-Building Wireless',
    image: '/card_das_antenna.webp'
  },
  {
    id: 'pos-retail',
    title: 'POS & Retail Technology',
    image: '/pos_retail_technology.png'
  },
  {
    id: 'mdf-idf',
    title: 'MDF / IDF Buildouts',
    image: '/web/03-data-center-infrastructure/03-mdf-idf-buildouts.jpg'
  },
  {
    id: 'outside-plant',
    title: 'Outside Plant',
    image: '/web/01-fiber-optics/02-aerial-underground-fiber.jpg'
  },
  {
    id: 'field-services',
    title: 'Field Services / Smart Hands',
    image: '/technician_server_rack.webp'
  },
  {
    id: 'other',
    title: 'Other (Please Specify)',
    isOther: true
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

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuote }) => {
  // Wizard Step State (1: Details & Services, 2: Requirements, 3: Location & Files, 4: Review & Submit)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [companyName, setCompanyName] = useState('');
  const [yourName, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const [selectedServices, setSelectedServices] = useState<string[]>(['structured-cabling']);
  const [otherServiceText, setOtherServiceText] = useState('');

  const [projectDescription, setProjectDescription] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [startDate, setStartDate] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [howHeard, setHowHeard] = useState('');
  const [comments, setComments] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const [validationError, setValidationError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      if (!companyName.trim()) {
        setValidationError('Please enter your Company Name.');
        return false;
      }
      if (!yourName.trim()) {
        setValidationError('Please enter Your Name.');
        return false;
      }
      if (!email.trim() || !email.includes('@')) {
        setValidationError('Please enter a valid Email Address.');
        return false;
      }
      if (!phone.trim()) {
        setValidationError('Please enter your Phone Number.');
        return false;
      }
      if (selectedServices.length === 0) {
        setValidationError('Please select at least one Service Category.');
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!projectDescription.trim()) {
        setValidationError('Please provide a Project Description.');
        return false;
      }
      if (!projectType) {
        setValidationError('Please select a Project Type.');
        return false;
      }
      return true;
    }
    if (step === 3) {
      if (!address.trim()) {
        setValidationError('Please enter the project Street Address.');
        return false;
      }
      if (!city.trim()) {
        setValidationError('Please enter the City.');
        return false;
      }
      if (!stateVal) {
        setValidationError('Please select a State / Province.');
        return false;
      }
      if (!zipCode.trim()) {
        setValidationError('Please enter the ZIP / Postal Code.');
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
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setValidationError(null);
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setCompanyName('');
    setYourName('');
    setEmail('');
    setPhone('');
    setSelectedServices(['structured-cabling']);
    setOtherServiceText('');
    setProjectDescription('');
    setProjectType('');
    setBudgetRange('');
    setStartDate('');
    setAddress('');
    setCity('');
    setStateVal('');
    setZipCode('');
    setHowHeard('');
    setComments('');
    setUploadedFileName(null);
    setValidationError(null);
  };

  return (
    <div className="contact-page-exact">
      {/* 1. HERO SECTION */}
      <section 
        className="contact-hero-section"
        style={{
          backgroundImage: `url('/contact_hero_bg.webp')`
        }}
      >
        <div className="contact-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="contact-hero-grid">
            {/* Left Hero Content */}
            <div>
              <div className="eyebrow-cyan">REQUEST A QUOTE</div>
              <h1 className="contact-hero-title">
                Let's Build <br />
                <span className="blue-highlight">What's Next.</span>
              </h1>
              <p className="contact-hero-subtext">
                Tell us about your project and our team will provide a detailed, customized quote as quickly as possible.
              </p>

              {/* 3 Badges Row */}
              <div className="contact-hero-badges-row">
                <div className="contact-badge-pill">
                  <Zap size={16} className="contact-badge-icon" />
                  <span>Fast Response</span>
                </div>
                <div className="contact-badge-pill">
                  <ShieldCheck size={16} className="contact-badge-icon" />
                  <span>Experienced Team</span>
                </div>
                <div className="contact-badge-pill">
                  <Users size={16} className="contact-badge-icon" />
                  <span>Nationwide Coverage</span>
                </div>
              </div>
            </div>

            {/* Right Tag Banner */}
            <div className="contact-hero-right-tag">
              <div className="contact-tagline-block">
                <div className="contact-tagline-words">
                  CONNECTING<br />
                  PEOPLE<br />
                  PLACES<br />
                  POSSIBILITIES
                </div>
                <div className="contact-tagline-bar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MULTI-SECTION REQUEST A QUOTE & CONTACT FORM CARD */}
      <section className="contact-form-section-wrap">
        <div className="container-wide">
          <div className="quote-form-master-card">
            
            {/* Interactive Stepper Header Bar */}
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
                <span className="quote-step-label">Project Details</span>
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
                <span className="quote-step-label">Service Requirements</span>
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
                <span className="quote-step-label">Location & Timeline</span>
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
                <span className="quote-step-label">Review & Submit</span>
              </div>
            </div>

            {/* Validation Error Toast */}
            {validationError && (
              <div className="quote-validation-alert">
                <span>{validationError}</span>
              </div>
            )}

            {submitted ? (
              /* FINAL CONFIRMATION VIEW */
              <div className="quote-success-view">
                <div className="quote-success-icon-wrap">
                  <CheckCircle2 size={56} className="quote-success-check" />
                </div>
                <h2 className="quote-success-title">Quote Request Received!</h2>
                <p className="quote-success-subtitle">
                  Thank you, <strong>{yourName || 'valued client'}</strong>. Our engineering and estimating team has received your project details for <strong>{companyName || 'your organization'}</strong>.
                </p>

                <div className="quote-success-summary-box">
                  <div className="quote-summary-row">
                    <span className="quote-summary-key">Services Requested:</span>
                    <div className="quote-summary-pills">
                      {selectedServices.map(srvId => {
                        const srv = serviceOptionsList.find(s => s.id === srvId);
                        return srv ? (
                          <span key={srvId} className="quote-summary-pill">{srv.title}</span>
                        ) : null;
                      })}
                    </div>
                  </div>
                  {city && stateVal && (
                    <div className="quote-summary-row" style={{ marginTop: '12px' }}>
                      <span className="quote-summary-key">Project Location:</span>
                      <span className="quote-summary-val">{city}, {stateVal}</span>
                    </div>
                  )}
                  {email && (
                    <div className="quote-summary-row" style={{ marginTop: '8px' }}>
                      <span className="quote-summary-key">Confirmation Sent To:</span>
                      <span className="quote-summary-val">{email}</span>
                    </div>
                  )}
                </div>

                <p className="quote-success-followup">
                  A certified Smart-Links solutions specialist will review your specifications and contact you within <strong>24 business hours</strong>.
                </p>

                <button 
                  type="button" 
                  onClick={handleReset}
                  className="quote-btn-submit"
                  style={{ maxWidth: '280px', margin: '24px auto 0 auto' }}
                >
                  <span>Submit Another Request</span>
                  <Plus size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-master-form">

                {/* STEP 1: PROJECT DETAILS & SERVICES */}
                {currentStep === 1 && (
                  <div className="quote-step-content-fade">
                    {/* SECTION 1: PROJECT INFORMATION */}
                    <div className="quote-section-block">
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <FileText size={20} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Project Information</h3>
                          <p className="quote-section-subtitle">Tell us about your project and your organization.</p>
                        </div>
                      </div>

                      <div className="quote-grid-2x2">
                        <div className="quote-field-group">
                          <label className="quote-label">Company Name <span className="req-star">*</span></label>
                          <input 
                            type="text" 
                            required 
                            placeholder="Enter company name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="quote-input"
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">Your Name <span className="req-star">*</span></label>
                          <input 
                            type="text" 
                            required 
                            placeholder="Full name"
                            value={yourName}
                            onChange={(e) => setYourName(e.target.value)}
                            className="quote-input"
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">Email Address <span className="req-star">*</span></label>
                          <input 
                            type="email" 
                            required 
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="quote-input"
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">Phone Number <span className="req-star">*</span></label>
                          <input 
                            type="tel" 
                            required 
                            placeholder="(555) 123-4567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="quote-input"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: SERVICE CATEGORY */}
                    <div className="quote-section-block" style={{ borderBottom: 'none', marginBottom: '16px', paddingBottom: '0' }}>
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <Settings size={20} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Service Category</h3>
                          <p className="quote-section-subtitle">Select the services you're interested in. You can choose multiple.</p>
                        </div>
                      </div>

                      <div className="quote-services-tiles-grid">
                        {serviceOptionsList.map((service) => {
                          const isSelected = selectedServices.includes(service.id);
                          return (
                            <div 
                              key={service.id}
                              className={`quote-service-tile ${isSelected ? 'selected' : ''}`}
                              onClick={() => toggleService(service.id)}
                              role="checkbox"
                              aria-checked={isSelected}
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === ' ' || e.key === 'Enter') {
                                  e.preventDefault();
                                  toggleService(service.id);
                                }
                              }}
                            >
                              <div className="quote-tile-media">
                                {service.isOther ? (
                                  <div className="quote-tile-other-icon">
                                    <FileText size={28} />
                                  </div>
                                ) : (
                                  <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="quote-tile-img"
                                    loading="lazy"
                                  />
                                )}
                              </div>
                              <div className="quote-tile-footer">
                                <span className="quote-tile-name">{service.title}</span>
                                <div className={`quote-tile-checkbox ${isSelected ? 'checked' : ''}`}>
                                  {isSelected && <Check size={12} strokeWidth={3} />}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {selectedServices.includes('other') && (
                        <div className="quote-field-group" style={{ marginTop: '16px' }}>
                          <label className="quote-label">Please Specify Other Service Requirements</label>
                          <input 
                            type="text" 
                            placeholder="Describe custom or specialized service requirements..."
                            value={otherServiceText}
                            onChange={(e) => setOtherServiceText(e.target.value)}
                            className="quote-input"
                          />
                        </div>
                      )}
                    </div>

                    {/* Step 1 Actions */}
                    <div className="quote-wizard-actions">
                      <div />
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="quote-btn-primary"
                      >
                        <span>Continue to Service Requirements</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: SERVICE REQUIREMENTS & DETAILS */}
                {currentStep === 2 && (
                  <div className="quote-step-content-fade">
                    <div className="quote-section-block" style={{ borderBottom: 'none', paddingBottom: '0' }}>
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <MessageSquare size={20} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Project Details &amp; Requirements</h3>
                          <p className="quote-section-subtitle">Provide more information about your project scope and timelines.</p>
                        </div>
                      </div>

                      <div className="quote-details-split-grid">
                        {/* Left: Description Textarea */}
                        <div className="quote-field-group">
                          <label className="quote-label">Project Description <span className="req-star">*</span></label>
                          <textarea 
                            required 
                            rows={8}
                            placeholder="Tell us about your project, scope of work, site requirements, and any specific details..."
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            className="quote-textarea"
                          />
                        </div>

                        {/* Right: Dropdowns */}
                        <div className="quote-details-right-col">
                          <div className="quote-field-group">
                            <label className="quote-label">Project Type <span className="req-star">*</span></label>
                            <select 
                              required
                              value={projectType}
                              onChange={(e) => setProjectType(e.target.value)}
                              className="quote-select"
                            >
                              <option value="">Select Project Type</option>
                              <option value="New Construction / Buildout">New Construction / Buildout</option>
                              <option value="System Upgrade & Expansion">System Upgrade & Expansion</option>
                              <option value="Infrastructure Refresh & MACs">Infrastructure Refresh & MACs</option>
                              <option value="Emergency Repair & Troubleshooting">Emergency Repair & Troubleshooting</option>
                              <option value="Nationwide Multi-Site Rollout">Nationwide Multi-Site Rollout</option>
                              <option value="Ongoing Maintenance SLA">Ongoing Maintenance SLA</option>
                              <option value="Other">Other Custom Project</option>
                            </select>
                          </div>

                          <div className="quote-field-group">
                            <label className="quote-label">Estimated Budget Range</label>
                            <select 
                              value={budgetRange}
                              onChange={(e) => setBudgetRange(e.target.value)}
                              className="quote-select"
                            >
                              <option value="">Select Budget Range</option>
                              <option value="Under $10,000">Under $10,000</option>
                              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                              <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                              <option value="$250,000+">$250,000+</option>
                            </select>
                          </div>

                          <div className="quote-field-group">
                            <label className="quote-label">Estimated Start Date</label>
                            <input 
                              type="date"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                              className="quote-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 Actions */}
                    <div className="quote-wizard-actions">
                      <button 
                        type="button" 
                        onClick={handleBack}
                        className="quote-btn-secondary"
                      >
                        ← Back
                      </button>
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="quote-btn-primary"
                      >
                        <span>Continue to Location &amp; Timeline</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: LOCATION & TIMELINE */}
                {currentStep === 3 && (
                  <div className="quote-step-content-fade">
                    {/* SECTION: PROJECT LOCATION */}
                    <div className="quote-section-block">
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Project Location</h3>
                          <p className="quote-section-subtitle">Where is this project located?</p>
                        </div>
                      </div>

                      <div className="quote-location-grid">
                        <div className="quote-field-group quote-col-span-2">
                          <label className="quote-label">Address <span className="req-star">*</span></label>
                          <input 
                            type="text" 
                            required 
                            placeholder="Street address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="quote-input"
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">City <span className="req-star">*</span></label>
                          <input 
                            type="text" 
                            required 
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="quote-input"
                          />
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">State / Province <span className="req-star">*</span></label>
                          <select 
                            required
                            value={stateVal}
                            onChange={(e) => setStateVal(e.target.value)}
                            className="quote-select"
                          >
                            <option value="">Select State</option>
                            {usStatesList.map(st => (
                              <option key={st} value={st}>{st}</option>
                            ))}
                          </select>
                        </div>

                        <div className="quote-field-group">
                          <label className="quote-label">ZIP / Postal Code <span className="req-star">*</span></label>
                          <input 
                            type="text" 
                            required 
                            placeholder="ZIP / Postal Code"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="quote-input"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION: ADDITIONAL INFORMATION */}
                    <div className="quote-section-block" style={{ borderBottom: 'none', paddingBottom: '0' }}>
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <Paperclip size={20} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Additional Information</h3>
                          <p className="quote-section-subtitle">Attach plans, drawings, specifications or any relevant files (optional).</p>
                        </div>
                      </div>

                      <div className="quote-additional-grid">
                        {/* Drag & Drop Zone */}
                        <div 
                          className="quote-upload-dropzone"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <input 
                            type="file" 
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileUpload}
                            accept=".pdf,.dwg,.jpg,.jpeg,.png,.doc,.docx"
                          />
                          <div className="quote-upload-icon-circle">
                            <UploadCloud size={24} />
                          </div>
                          <span className="quote-upload-headline">Upload Files</span>
                          <p className="quote-upload-subtext">
                            Drag and drop files here or <span className="quote-upload-link">tap to browse</span>
                          </p>
                          <span className="quote-upload-formats">PDF, DWG, JPG, PNG (Max 25MB per file)</span>

                          {uploadedFileName && (
                            <div className="quote-file-badge" onClick={(e) => e.stopPropagation()}>
                              <FileText size={14} />
                              <span>{uploadedFileName}</span>
                              <button 
                                type="button" 
                                className="quote-file-remove-btn"
                                onClick={() => setUploadedFileName(null)}
                              >
                                <X size={12} />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Referral & Comments */}
                        <div className="quote-additional-right">
                          <div className="quote-field-group">
                            <label className="quote-label">How Did You Hear About Us?</label>
                            <select 
                              value={howHeard}
                              onChange={(e) => setHowHeard(e.target.value)}
                              className="quote-select"
                            >
                              <option value="">Select an option</option>
                              <option value="Google Search">Google Search</option>
                              <option value="LinkedIn / Social Media">LinkedIn / Social Media</option>
                              <option value="Client / Colleague Referral">Client / Colleague Referral</option>
                              <option value="Industry Partner">Industry Partner</option>
                              <option value="Trade Show / Conference">Trade Show / Conference</option>
                              <option value="Previous Project Experience">Previous Project Experience</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <div className="quote-field-group">
                            <label className="quote-label">Comments (Optional)</label>
                            <textarea 
                              rows={3}
                              placeholder="Any additional information..."
                              value={comments}
                              onChange={(e) => setComments(e.target.value)}
                              className="quote-textarea"
                            />
                          </div>
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
                        ← Back
                      </button>
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="quote-btn-primary"
                      >
                        <span>Proceed to Review &amp; Submit</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: REVIEW & SUBMIT */}
                {currentStep === 4 && (
                  <div className="quote-step-content-fade">
                    <div className="quote-section-block" style={{ borderBottom: 'none', paddingBottom: '0' }}>
                      <div className="quote-section-header">
                        <div className="quote-section-icon-box">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <h3 className="quote-section-title">Review &amp; Confirm Your Request</h3>
                          <p className="quote-section-subtitle">Please verify your information below before submitting to our engineering team.</p>
                        </div>
                      </div>

                      {/* Review Cards Grid */}
                      <div className="quote-review-grid">
                        {/* 1. Contact & Org */}
                        <div className="quote-review-card">
                          <div className="quote-review-card-header">
                            <h4>Project &amp; Contact Info</h4>
                            <button type="button" onClick={() => setCurrentStep(1)} className="quote-review-edit-btn">Edit</button>
                          </div>
                          <div className="quote-review-card-body">
                            <div className="quote-review-line"><strong>Company:</strong> {companyName || 'Not specified'}</div>
                            <div className="quote-review-line"><strong>Contact Name:</strong> {yourName || 'Not specified'}</div>
                            <div className="quote-review-line"><strong>Email:</strong> {email || 'Not specified'}</div>
                            <div className="quote-review-line"><strong>Phone:</strong> {phone || 'Not specified'}</div>
                          </div>
                        </div>

                        {/* 2. Services */}
                        <div className="quote-review-card">
                          <div className="quote-review-card-header">
                            <h4>Selected Services</h4>
                            <button type="button" onClick={() => setCurrentStep(1)} className="quote-review-edit-btn">Edit</button>
                          </div>
                          <div className="quote-review-card-body">
                            <div className="quote-summary-pills" style={{ marginTop: '4px' }}>
                              {selectedServices.map(srvId => {
                                const srv = serviceOptionsList.find(s => s.id === srvId);
                                return srv ? (
                                  <span key={srvId} className="quote-summary-pill">{srv.title}</span>
                                ) : null;
                              })}
                            </div>
                            {otherServiceText && (
                              <div className="quote-review-line" style={{ marginTop: '8px' }}>
                                <strong>Other Details:</strong> {otherServiceText}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* 3. Scope & Requirements */}
                        <div className="quote-review-card">
                          <div className="quote-review-card-header">
                            <h4>Project Scope &amp; Budget</h4>
                            <button type="button" onClick={() => setCurrentStep(2)} className="quote-review-edit-btn">Edit</button>
                          </div>
                          <div className="quote-review-card-body">
                            <div className="quote-review-line"><strong>Type:</strong> {projectType || 'Standard'}</div>
                            <div className="quote-review-line"><strong>Budget:</strong> {budgetRange || 'Flexible'}</div>
                            <div className="quote-review-line"><strong>Start Date:</strong> {startDate || 'As soon as possible'}</div>
                            <div className="quote-review-line" style={{ marginTop: '4px' }}>
                              <strong>Scope:</strong> {projectDescription || 'None provided'}
                            </div>
                          </div>
                        </div>

                        {/* 4. Location & Files */}
                        <div className="quote-review-card">
                          <div className="quote-review-card-header">
                            <h4>Location &amp; Documents</h4>
                            <button type="button" onClick={() => setCurrentStep(3)} className="quote-review-edit-btn">Edit</button>
                          </div>
                          <div className="quote-review-card-body">
                            <div className="quote-review-line"><strong>Address:</strong> {address}, {city}, {stateVal} {zipCode}</div>
                            <div className="quote-review-line"><strong>Attachment:</strong> {uploadedFileName || 'No file attached'}</div>
                            {howHeard && <div className="quote-review-line"><strong>Referral:</strong> {howHeard}</div>}
                            {comments && <div className="quote-review-line"><strong>Comments:</strong> {comments}</div>}
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Step 4 Submit Button & Disclaimer */}
                    <div className="quote-submit-container" style={{ marginTop: '32px' }}>
                      <div className="quote-wizard-actions" style={{ width: '100%', marginBottom: '12px' }}>
                        <button 
                          type="button" 
                          onClick={handleBack}
                          className="quote-btn-secondary"
                        >
                          ← Back to Edit
                        </button>
                        <button type="submit" className="quote-btn-submit" style={{ flex: 1 }}>
                          <span>Submit Request</span>
                          <ArrowRight size={18} />
                        </button>
                      </div>
                      <p className="quote-submit-note">
                        Our team will review your request and contact you as soon as possible, typically within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

              </form>
            )}

            {/* 4 TRUST BADGES STRIP */}
            <div className="quote-trust-strip">
              <div className="quote-trust-badge">
                <div className="quote-trust-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="quote-trust-title">Quick Response</h4>
                  <p className="quote-trust-sub">Typically within 24 hours</p>
                </div>
              </div>

              <div className="quote-trust-badge">
                <div className="quote-trust-icon">
                  <Settings size={20} />
                </div>
                <div>
                  <h4 className="quote-trust-title">Expert Consultation</h4>
                  <p className="quote-trust-sub">Solutions tailored to your needs</p>
                </div>
              </div>

              <div className="quote-trust-badge">
                <div className="quote-trust-icon">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="quote-trust-title">Nationwide Service</h4>
                  <p className="quote-trust-sub">All 50 states, Alaska, Hawaii &amp; Canada</p>
                </div>
              </div>

              <div className="quote-trust-badge">
                <div className="quote-trust-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="quote-trust-title">Your Trusted Partner</h4>
                  <p className="quote-trust-sub">30+ years of experience</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. READY TO GET STARTED BOTTOM CTA */}
      <section 
        className="contact-cta-banner"
        style={{ backgroundImage: `url('/blue_wave_cta.webp')` }}
      >
        <div className="container-wide">
          <div className="contact-cta-inner">
            <div>
              <div className="eyebrow-cyan" style={{ marginBottom: '6px' }}>READY TO GET STARTED?</div>
              <h2 className="contact-cta-title">Request a Quote</h2>
              <p className="contact-cta-desc">
                Tell us about your project, and we'll provide a customized solution and competitive pricing.
              </p>
            </div>
            <div>
              <button 
                onClick={onOpenQuote}
                className="btn-white-quote"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

