import React from 'react';
import type { NavTab } from '../types';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote?: (serviceName?: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigate
}) => {
  return (
    <div className="legal-page-root access-page-root">
      {/* 1. HERO SECTION */}
      <section id="privacy-hero" className="access-hero-section" style={{ minHeight: '340px', padding: '60px 0' }}>
        {/* Background Image Container */}
        <div className="access-hero-bg-wrapper">
          <img
            src="/about_hero_bg.webp"
            alt="Privacy Policy and Corporate Data Protection"
            className="access-hero-bg-img"
          />
          <div className="access-hero-gradient-overlay" />
        </div>

        <div className="access-container">
          <div className="access-hero-inner">
            {/* Left Content Area */}
            <div className="access-hero-content">
              <div className="access-hero-eyebrow">
                LEGAL & DATA PROTECTION
              </div>

              <h1 className="access-hero-title">
                PRIVACY <span className="access-hero-title-highlight">POLICY.</span>
              </h1>

              <p className="access-hero-desc">
                Smart-Links Cabling Solutions, LLC is committed to protecting the privacy, confidentiality, and security of our clients, partners, and website visitors.
              </p>
            </div>

            {/* Right Side Vertical Corporate Brand Banner */}
            <div className="access-hero-right-banner">
              <div className="access-hero-pillar-box">
                <div className="access-pillar-keywords">
                  <span className="access-keyword">INTEGRITY</span>
                  <span className="access-keyword">SECURITY</span>
                  <span className="access-keyword">COMPLIANCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN LEGAL CONTENT & SIDEBAR */}
      <section className="legal-content-section" style={{ padding: '60px 0 80px 0', backgroundColor: '#ffffff' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px', alignItems: 'start' }}>
            
            {/* Left Content Column */}
            <div className="legal-body-content" style={{ color: '#334155', lineHeight: 1.75, fontSize: '15px' }}>
              
              <div style={{ backgroundColor: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px 28px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0056d2', fontWeight: 800, fontSize: '16px', marginBottom: '8px' }}>
                  <ShieldCheck size={22} />
                  <span>Summary of Key Principles</span>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
                  We do not sell your personal or corporate data. We collect only necessary information to provide telecommunication, structured cabling, security, and IT infrastructure services, quote projects, and communicate with you effectively.
                </p>
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '0', marginBottom: '16px' }}>
                1. Information We Collect
              </h2>
              <p>
                When you visit our website, request a project quote, consult with our engineering team, or engage our nationwide rollout services, we may collect the following categories of information:
              </p>
              <ul style={{ paddingLeft: '22px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Contact Details:</strong> Name, professional title, corporate email address, telephone number, and company name.</li>
                <li style={{ marginBottom: '8px' }}><strong>Facility & Technical Data:</strong> Building addresses, architectural blueprints, floor plans, cable drop schedules, hardware manifests, and site access specifications provided during scoping.</li>
                <li style={{ marginBottom: '8px' }}><strong>Billing & Transaction Information:</strong> Invoicing addresses, purchase order numbers, and tax exemption certificates.</li>
                <li style={{ marginBottom: '8px' }}><strong>Technical Log Data:</strong> IP address, browser type, operating system, referring URL, and browsing telemetry gathered through essential cookies.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                2. How We Use Your Information
              </h2>
              <p>We utilize the collected information strictly for legitimate commercial and operational purposes, including:</p>
              <ul style={{ paddingLeft: '22px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Designing, estimating, engineering, and deploying structured cabling, DAS, video surveillance, access control, and IT infrastructure projects.</li>
                <li style={{ marginBottom: '8px' }}>Coordinating certified technician dispatch, equipment delivery, and project logistics across nationwide facility sites.</li>
                <li style={{ marginBottom: '8px' }}>Generating certified Fluke test reports, CAD as-built diagrams, and 25-year manufacturer warranty registrations.</li>
                <li style={{ marginBottom: '8px' }}>Responding to customer inquiries, support tickets, and quote requests.</li>
                <li style={{ marginBottom: '8px' }}>Ensuring compliance with local building codes, NEC/NFPA safety standards, and Life Safety egress requirements.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                3. Information Sharing & Third Parties
              </h2>
              <p>
                Smart-Links does <strong>never sell, rent, or trade</strong> your personal or enterprise information to data brokers or third-party advertisers. Information is only shared under the following limited circumstances:
              </p>
              <ul style={{ paddingLeft: '22px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Manufacturer Partners:</strong> Authorized hardware manufacturers (e.g., CommScope, Panduit, Corning, Axis, HID) solely for processing 20 to 25-year system warranty registrations and RMA warranties.</li>
                <li style={{ marginBottom: '8px' }}><strong>Vetted Field Contractors:</strong> Certified technicians operating under strict Non-Disclosure Agreements (NDAs) to perform on-site installations.</li>
                <li style={{ marginBottom: '8px' }}><strong>Legal & Regulatory Compliance:</strong> When required by subpoena, court order, AHJ (Authority Having Jurisdiction) inspection, or to enforce our service agreements.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                4. Data Security & Storage
              </h2>
              <p>
                We employ industry-standard administrative, physical, and technological security controls to safeguard your proprietary data, project floor plans, and network topologies against unauthorized access, loss, or alteration. All electronic communications and project records are stored in encrypted cloud environments complying with SOC 2 Type II standards.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                5. Cookies & Tracking Technologies
              </h2>
              <p>
                Our website utilizes standard session and analytics cookies to evaluate traffic patterns, improve page speed, and enhance user experience. You can choose to disable cookies through your web browser settings; however, certain interactive features of the website may function with reduced capabilities.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                6. Your Rights & Data Inquiries
              </h2>
              <p>
                You have the right to request access to the personal data we maintain about you, request corrections to inaccurate records, or request the deletion of your contact information from our marketing databases at any time.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                7. Contact Us Regarding Privacy
              </h2>
              <p>
                For questions, concerns, or requests regarding this Privacy Policy or our data protection practices, please contact our Compliance Officer:
              </p>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px 24px', marginTop: '16px' }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: 700, color: '#0a1128' }}>Smart-Links Cabling Solutions, LLC</p>
                <p style={{ margin: '0 0 6px 0' }}>Attn: Legal & Compliance Department</p>
                <p style={{ margin: '0 0 6px 0' }}>1234 Innovation Drive, Orlando, FL 32801</p>
                <p style={{ margin: '0 0 6px 0' }}>Email: <a href="mailto:privacy@smart-linksces.com" style={{ color: '#0056d2', fontWeight: 600 }}>privacy@smart-linksces.com</a></p>
                <p style={{ margin: 0 }}>Phone: (407) 555-0100</p>
              </div>

            </div>

            {/* Right Sidebar Quick Card */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '28px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Lock size={22} color="#0056d2" />
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0a1128' }}>Trust & Compliance</h3>
                </div>
                <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, marginBottom: '20px' }}>
                  Our infrastructure installations and data protocols comply with international industry standards:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    <CheckCircle2 size={16} color="#0056d2" />
                    <span>BICSI Corporate Member</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    <CheckCircle2 size={16} color="#0056d2" />
                    <span>ANSI / TIA-568 Standards</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    <CheckCircle2 size={16} color="#0056d2" />
                    <span>100% NDAA Compliant</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    <CheckCircle2 size={16} color="#0056d2" />
                    <span>OSHA 30 Safety Certified</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="access-btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: '13px' }}
                  onClick={() => onNavigate('contact')}
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
