import React from 'react';
import type { NavTab } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Scale
} from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote?: (serviceName?: string) => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({
  onNavigate
}) => {
  return (
    <div className="legal-page-root access-page-root">
      {/* 1. HERO SECTION */}
      <section id="terms-hero" className="access-hero-section" style={{ minHeight: '340px', padding: '60px 0' }}>
        {/* Background Image Container */}
        <div className="access-hero-bg-wrapper">
          <img
            src="/about_hero_bg.webp"
            alt="Terms of Service and Service Agreements"
            className="access-hero-bg-img"
          />
          <div className="access-hero-gradient-overlay" />
        </div>

        <div className="access-container">
          <div className="access-hero-inner">
            {/* Left Content Area */}
            <div className="access-hero-content">
              <div className="access-hero-eyebrow">
                LEGAL & SERVICE AGREEMENTS
              </div>

              <h1 className="access-hero-title">
                TERMS OF <span className="access-hero-title-highlight">SERVICE.</span>
              </h1>

              <p className="access-hero-desc">
                These Terms of Service govern all physical layer cabling installations, hardware deployments, nationwide rollouts, and consulting services provided by Smart-Links Cabling Solutions, LLC.
              </p>
            </div>

            {/* Right Side Vertical Corporate Brand Banner */}
            <div className="access-hero-right-banner">
              <div className="access-hero-pillar-box">
                <div className="access-pillar-keywords">
                  <span className="access-keyword">RELIABILITY</span>
                  <span className="access-keyword">STANDARDS</span>
                  <span className="access-keyword">WARRANTY</span>
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
                  <Scale size={22} />
                  <span>Agreement Overview</span>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
                  By accessing this website, requesting quotations, or executing a Statement of Work (SOW) with Smart-Links Cabling Solutions, LLC, you agree to be bound by these commercial Terms of Service and applicable industry installation benchmarks.
                </p>
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '0', marginBottom: '16px' }}>
                1. Scope of Services & Statements of Work
              </h2>
              <p>
                Smart-Links provides physical layer structured cabling (copper & fiber), video surveillance, electronic access control, Distributed Antenna Systems (DAS), data center infrastructure, and nationwide technology rollout services. All projects are performed pursuant to an authorized Statement of Work (SOW), proposal, or purchase order detailing the specific deliverables, bill of materials (BOM), schedule, and pricing.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                2. Installation Standards & Code Compliance
              </h2>
              <p>
                All physical installations, cable routing, pathway construction, and terminations executed by Smart-Links adhere strictly to the following standards:
              </p>
              <ul style={{ paddingLeft: '22px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '8px' }}><strong>BICSI TDMM:</strong> Telecommunications Distribution Methods Manual (14th Edition).</li>
                <li style={{ marginBottom: '8px' }}><strong>ANSI/TIA Standards:</strong> ANSI/TIA-568 (Commercial Building Cabling), TIA-569 (Pathways & Spaces), TIA-606 (Administration), and TIA-607 (Grounding & Bonding).</li>
                <li style={{ marginBottom: '8px' }}><strong>National Electrical Code:</strong> NEC Article 725, 770, and 800 for plenum/riser fire ratings.</li>
                <li style={{ marginBottom: '8px' }}><strong>Life Safety & NFPA:</strong> NFPA 70, 72, and 101 emergency egress protocols for electrified hardware.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                3. Site Access & Client Obligations
              </h2>
              <p>To ensure on-time project completion and worker safety, the Client agrees to:</p>
              <ul style={{ paddingLeft: '22px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Provide timely, unencumbered physical access to all telecommunication closets (MDF/IDF), ceiling plenums, risers, and work areas during scheduled shifts.</li>
                <li style={{ marginBottom: '8px' }}>Ensure necessary building permits, lift access approvals, and security clearances are secured prior to technician mobilization.</li>
                <li style={{ marginBottom: '8px' }}>Provide adequate primary power, environmental HVAC conditioning, and lighting in equipment rooms.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                4. Change Orders & Modifications (MACs)
              </h2>
              <p>
                Any requests for additional cable drops, pathway reroutes, scope expansions, or unforeseen structural obstructions encountered during installation will be documented via a formal written Change Order. Work on change orders will proceed upon mutual written authorization.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                5. System Testing, Certifications & Warranties
              </h2>
              <p>
                Upon completion of cabling installations, Smart-Links performs 100% channel verification with calibrated Fluke DSX-8000 analyzers and delivers certified PDF test logs.
              </p>
              <ul style={{ paddingLeft: '22px', marginBottom: '24px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Labor Warranty:</strong> Smart-Links provides a 1-year comprehensive workmanship warranty on all labor and physical installation integrity from the date of substantial completion.</li>
                <li style={{ marginBottom: '8px' }}><strong>Manufacturer Extended Warranty:</strong> As certified manufacturer partners (CommScope, Panduit, Superior Essex, Corning), qualified structured cabling installations carry direct 20 to 25-year manufacturer application assurance and product warranties.</li>
                <li style={{ marginBottom: '8px' }}><strong>Hardware Warranties:</strong> Cameras, access control panels, switches, and active electronics carry original manufacturer warranties against factory defects.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                6. Payment Terms & Invoicing
              </h2>
              <p>
                Standard payment terms are Net 30 days from date of invoice, subject to approved credit. Milestone billing may apply to multi-phase enterprise deployments and nationwide rollouts.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                7. Limitation of Liability
              </h2>
              <p>
                Except for gross negligence or willful misconduct, neither party shall be liable for indirect, incidental, consequential, special, or punitive damages, including loss of business revenue or data, arising out of these services. Smart-Links' total aggregate liability shall not exceed the total fees paid under the applicable SOW.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                8. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any legal actions shall be resolved in the state or federal courts located in Orange County, Florida.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a1128', marginTop: '36px', marginBottom: '16px' }}>
                9. Legal Inquiries & Notices
              </h2>
              <p>
                Formal notices under this agreement should be delivered in writing to:
              </p>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px 24px', marginTop: '16px' }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: 700, color: '#0a1128' }}>Smart-Links Cabling Solutions, LLC</p>
                <p style={{ margin: '0 0 6px 0' }}>Attn: General Counsel / Contracts Management</p>
                <p style={{ margin: '0 0 6px 0' }}>1234 Innovation Drive, Orlando, FL 32801</p>
                <p style={{ margin: '0 0 6px 0' }}>Email: <a href="mailto:contracts@smart-linksces.com" style={{ color: '#0056d2', fontWeight: 600 }}>contracts@smart-linksces.com</a></p>
                <p style={{ margin: 0 }}>Phone: (407) 555-0100</p>
              </div>

            </div>

            {/* Right Sidebar Key Highlights */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '28px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <ShieldCheck size={22} color="#0056d2" />
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0a1128' }}>Quality Assurance</h3>
                </div>
                <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, marginBottom: '20px' }}>
                  Smart-Links guarantees rigorous installation quality backed by leading warranties:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    <CheckCircle2 size={16} color="#0056d2" />
                    <span>25-Year Manufacturer Warranty</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    <CheckCircle2 size={16} color="#0056d2" />
                    <span>100% Fluke DSX-8000 Certified</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    <CheckCircle2 size={16} color="#0056d2" />
                    <span>1-Year Workmanship Warranty</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    <CheckCircle2 size={16} color="#0056d2" />
                    <span>BICSI TDMM Installation Quality</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="access-btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: '13px' }}
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Project Quote</span>
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
