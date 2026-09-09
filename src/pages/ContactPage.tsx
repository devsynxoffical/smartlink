import React, { useState } from 'react';
import type { NavTab } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Headphones, 
  Zap, 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  CheckCircle2,
  Navigation
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuote }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Structured Cabling');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-exact">
      {/* 1. HERO SECTION - Exact 1:1 Match to Mockup */}
      <section 
        className="contact-hero-section"
        style={{
          backgroundImage: `url('/contact_hero_bg.jpg')`
        }}
      >
        <div className="contact-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="contact-hero-grid">
            {/* Left Hero Content */}
            <div>
              <div className="eyebrow-cyan">CONTACT US</div>
              <h1 className="contact-hero-title">
                LET'S BUILD <br />
                WHAT'S NEXT <br />
                <span className="blue-highlight">TOGETHER.</span>
              </h1>
              <p className="contact-hero-subtext">
                Have a project in mind or need expert advice? Our team is ready to help with reliable infrastructure solutions tailored to your needs.
              </p>

              {/* 3 Badges Row */}
              <div className="contact-hero-badges-row">
                <div className="contact-badge-pill">
                  <Headphones size={16} className="contact-badge-icon" />
                  <span>Expert Guidance</span>
                </div>
                <div className="contact-badge-pill">
                  <Zap size={16} className="contact-badge-icon" />
                  <span>Fast Response</span>
                </div>
                <div className="contact-badge-pill">
                  <ShieldCheck size={16} className="contact-badge-icon" />
                  <span>Solutions You Can Trust</span>
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

      {/* 2. FORM & CONTACT INFORMATION SECTION */}
      <section className="contact-content-section">
        <div className="container-wide">
          <div className="contact-split-grid">
            {/* Left: Form */}
            <div className="contact-form-column">
              <div className="eyebrow-blue">SEND US A MESSAGE</div>
              <h2 className="contact-col-heading">Get in Touch</h2>
              <p className="contact-col-desc">
                Fill out the form below and a member of our team will get back to you shortly. Whether it's a quote, a question, or a partnership opportunity — we're here to help.
              </p>

              {submitted ? (
                <div className="contact-success-box">
                  <CheckCircle2 size={40} className="success-icon" />
                  <h3>Message Received!</h3>
                  <p>
                    Thank you, {firstName || 'there'}! A member of our team will review your inquiry and reach out within 1 business day.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFirstName('');
                      setLastName('');
                      setCompany('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="btn-primary"
                    style={{ marginTop: '16px' }}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-clean">
                  <div className="form-row-2col">
                    <input 
                      type="text" 
                      placeholder="First Name *" 
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="contact-input-field" 
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name *" 
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="contact-input-field" 
                    />
                  </div>

                  <div className="form-row-2col">
                    <input 
                      type="text" 
                      placeholder="Company Name *" 
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="contact-input-field" 
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contact-input-field" 
                    />
                  </div>

                  <div className="form-row-2col">
                    <input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="contact-input-field" 
                    />
                    <div className="select-wrap">
                      <select 
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="contact-select-field"
                      >
                        <option value="Structured Cabling">Structured Cabling</option>
                        <option value="Fiber Optics">Fiber Optic Solutions</option>
                        <option value="Video Surveillance">Video Surveillance</option>
                        <option value="Access Control">Access Control</option>
                        <option value="DAS & Wireless">DAS Systems</option>
                        <option value="IT Solutions">IT Solutions</option>
                        <option value="General Inquiry">General Inquiry / RFP</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea 
                      placeholder="How can we help? *&#10;Tell us about your project, timeline, or any specific requirements..."
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="contact-textarea-field"
                    />
                  </div>

                  <div className="contact-form-footer">
                    <button type="submit" className="btn-primary contact-submit-btn">
                      <span>SEND MESSAGE</span>
                      <ArrowRight size={16} />
                    </button>
                    <div className="contact-security-notice">
                      <Lock size={15} className="security-icon" />
                      <span>Your information is secure and will only be used to respond to your inquiry.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Contact Information */}
            <div className="contact-info-column">
              <div className="eyebrow-blue">CONTACT INFORMATION</div>
              <h2 className="contact-col-heading">Let's Connect</h2>

              <div className="contact-info-cards-stack">
                {/* 1. Call Us */}
                <div className="contact-info-row-item">
                  <div className="contact-icon-circle">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="contact-info-label">Call Us</h3>
                    <a href="tel:4075550100" className="contact-info-main-link">(407) 555-0100</a>
                    <p className="contact-info-sub">Mon – Fri, 8:00 AM – 6:00 PM (EST)</p>
                  </div>
                </div>

                {/* 2. Email Us */}
                <div className="contact-info-row-item">
                  <div className="contact-icon-circle">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="contact-info-label">Email Us</h3>
                    <a href="mailto:info@smart-linkscs.com" className="contact-info-main-link">info@smart-linkscs.com</a>
                    <p className="contact-info-sub">We typically respond within 24 hours.</p>
                  </div>
                </div>

                {/* 3. Visit Us */}
                <div className="contact-info-row-item">
                  <div className="contact-icon-circle">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="contact-info-label">Visit Us</h3>
                    <div className="contact-info-main-text">
                      1234 Innovation Drive<br />
                      Orlando, FL 32801
                    </div>
                    <p className="contact-info-sub">Our headquarters</p>
                  </div>
                </div>

                {/* 4. Business Hours */}
                <div className="contact-info-row-item">
                  <div className="contact-icon-circle">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="contact-info-label">Business Hours</h3>
                    <div className="contact-info-main-text">Monday – Friday</div>
                    <p className="contact-info-sub">8:00 AM – 6:00 PM (EST)</p>
                  </div>
                </div>

                {/* 5. Partner Opportunities */}
                <div className="contact-info-row-item">
                  <div className="contact-icon-circle">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="contact-info-label">Partner Opportunities</h3>
                    <a href="mailto:partnerships@smart-linkscs.com" className="contact-info-main-link">partnerships@smart-linkscs.com</a>
                    <p className="contact-info-sub">Let's build something great together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCATION & HEADQUARTERS MAP SECTION */}
      <section className="contact-hq-section">
        <div className="container-wide">
          <div className="contact-hq-grid">
            {/* Left: Functional Interactive Map Embed */}
            <div className="contact-map-wrapper">
              <iframe
                title="Smart-Links Cabling Solutions Headquarters Map"
                src="https://maps.google.com/maps?q=1234+Innovation+Drive,+Orlando,+FL+32801&t=m&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', width: '100%', height: '100%', minHeight: '460px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Headquarters Pin Popup Card */}
              <div className="map-pin-callout">
                <div className="map-pin-callout-inner">
                  <div className="map-callout-pin-icon">
                    <svg width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" fill="#0075FF"/>
                      <circle cx="12" cy="9" r="3.2" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="map-callout-title">Smart-Links Cabling Solutions</h4>
                    <p className="map-callout-address">
                      1234 Innovation Drive<br />
                      Orlando, FL 32801
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visit Our Headquarters Dark Card */}
            <div className="contact-hq-card">
              <div className="eyebrow-cyan">OUR LOCATION</div>
              <h2 className="contact-hq-title">Visit Our Headquarters</h2>
              <p className="contact-hq-desc">
                We welcome clients, partners, and industry professionals to meet with our team and learn more about how Smart-Links Cabling Solutions can support your next project.
              </p>
              
              <div style={{ marginBottom: '24px' }}>
                <a 
                  href="https://maps.google.com/?q=1234+Innovation+Drive+Orlando+FL+32801" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-white-contact"
                >
                  <Navigation size={15} />
                  <span>GET DIRECTIONS</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="hq-building-photo-wrap">
                <img 
                  src="/about_hero_bg.jpg" 
                  alt="Smart-Links Cabling Solutions Headquarters" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. READY TO GET STARTED? (BLUE BANNER) */}
      <section 
        className="contact-cta-banner"
        style={{ backgroundImage: `url('/blue_wave_cta.jpg')` }}
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
