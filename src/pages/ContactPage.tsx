import React, { useState } from 'react';
import type { NavTab } from '../types';
import { locationsData } from '../data/siteData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight, Headphones } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuote }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('New Project Consultation');
  const [message, setMessage] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('Orlando, FL (HQ)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-exact">
      {/* 1. HERO SECTION */}
      <section 
        className="subpage-hero"
        style={{
          backgroundImage: `url('/contact_hero_bg.jpg')`
        }}
      >
        <div className="subpage-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="subpage-hero-grid">
            <div>
              <div className="eyebrow-cyan">GET IN TOUCH</div>
              <h1 className="subpage-title">
                LET'S BUILD SOMETHING <br />
                <span style={{ color: '#0075ff' }}>EXTRAORDINARY.</span>
              </h1>
              <p className="subpage-desc">
                Get in touch with our certified engineers to discuss low voltage cabling, fiber optic deployments, security surveillance, and commercial infrastructure.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenQuote}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>REQUEST A PROJECT QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <a 
                  href="tel:4075550100"
                  className="btn-outline-white"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Phone size={14} /> (407) 555-0100
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className="tag-banner-box" style={{ width: '100%', maxWidth: '320px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#00bfff', textTransform: 'uppercase', marginBottom: '8px' }}>
                  HEADQUARTERS
                </div>
                <div style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', marginBottom: '6px' }}>
                  ORLANDO, FL
                </div>
                <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '14px' }}>
                  Serving enterprise clients, general contractors, and public institutions nationwide.
                </p>
                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.15)', fontSize: '11px', color: '#00bfff', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Headphones size={15} />
                  <span>24/7 Field Dispatch Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container-wide">
          <div className="contact-main-grid">
            {/* Left Contact Info */}
            <div>
              <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                DIRECT INQUIRY
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0a1128', marginTop: '6px', marginBottom: '14px' }}>
                We're Here to Help You Connect
              </h2>
              <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: '1.65', marginBottom: '32px' }}>
                Whether you have an upcoming architectural RFP, need emergency fiber splicing, or are expanding your multi-site retail or corporate footprint, our team is ready to assist.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '8px', color: '#0075ff' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0a1128' }}>Corporate Headquarters</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>1234 Innovation Drive, Orlando, FL 32801</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '8px', color: '#0075ff' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0a1128' }}>National Direct Line</h4>
                    <p style={{ fontSize: '13px', color: '#0075ff', fontWeight: 700, marginTop: '2px' }}>
                      <a href="tel:4075550100">(407) 555-0100</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '8px', color: '#0075ff' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0a1128' }}>Email Inquiries & RFPs</h4>
                    <p style={{ fontSize: '13px', color: '#0075ff', fontWeight: 700, marginTop: '2px' }}>
                      <a href="mailto:info@smart-linksces.com">info@smart-linksces.com</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '8px', color: '#0075ff' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0a1128' }}>Hours of Operation</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>Monday – Friday: 7:00 AM – 6:00 PM EST</p>
                    <p style={{ fontSize: '11.5px', color: '#94a3b8', marginTop: '2px' }}>24/7 On-Call Emergency Service for Contract Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="contact-form-card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '60px', height: '60px', background: '#ecfdf5', color: '#059669', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginBottom: '8px' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto 24px auto' }}>
                    Thank you for contacting Smart-Links. A project engineer from our {preferredLocation} office will follow up with you within 2 business hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ fontSize: '13px', padding: '10px 20px' }}>
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0a1128', marginBottom: '4px' }}>
                    Send Us a Message
                  </h3>

                  <div className="form-grid-2col">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(407) 555-0100"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Target Office</label>
                      <select
                        value={preferredLocation}
                        onChange={(e) => setPreferredLocation(e.target.value)}
                        className="form-select"
                      >
                        <option value="Orlando, FL (HQ)">Orlando, FL (Corporate HQ)</option>
                        <option value="Birmingham, AL">Birmingham, AL (Southeast)</option>
                        <option value="Iselin, NJ">Iselin, NJ (Northeast)</option>
                        <option value="Chicago, IL">Chicago, IL (Midwest)</option>
                        <option value="San Jose, CA">San Jose, CA (West Coast)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Inquiry Subject</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="form-select"
                    >
                      <option value="New Project Consultation">New Project Consultation / RFP</option>
                      <option value="Structured Cabling Quote">Structured Cabling & Fiber Optics</option>
                      <option value="Security & Video Surveillance">Video Surveillance & Access Control</option>
                      <option value="DAS & Wireless Solutions">DAS & In-Building Wireless</option>
                      <option value="Emergency Splicing / Service">Emergency Splicing & Repair</option>
                      <option value="General Inquiry">General Company Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Project Scope / Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your facility type, estimated drops, timeline, and requirements..."
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '6px' }}
                  >
                    <Send size={15} />
                    <span>SEND MESSAGE TO SMART-LINKS</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCATIONS SECTION */}
      <section className="locations-section" style={{ borderTop: '1px solid #eef2f6' }}>
        <div className="container-wide">
          <div className="locations-header-row">
            <div>
              <div className="eyebrow-dashes" style={{ marginBottom: '8px' }}>OUR LOCATIONS</div>
              <h2 className="locations-title">
                Strategically Located. Nationwide Support.
              </h2>
            </div>
            <div className="locations-sub-note">
              5 Regional Offices to Serve You.
            </div>
          </div>

          <div className="locations-grid-5col">
            {locationsData.map((loc) => (
              <div key={loc.id} className="location-card-v1">
                <div>
                  <div className="location-top-row">
                    <MapPin size={18} className="location-pin-icon" />
                    <h3 className="location-name">{loc.name}</h3>
                  </div>
                  <div className="location-address">
                    {loc.address}<br />
                    {loc.cityStateZip}
                  </div>
                </div>
                <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="location-phone">
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
