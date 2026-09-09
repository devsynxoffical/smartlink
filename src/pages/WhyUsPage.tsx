import React from 'react';
import type { NavTab } from '../types';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Lightbulb,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  Handshake,
  BarChart3,
  Globe
} from 'lucide-react';

interface WhyUsPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="why-us-page-exact">
      {/* 1. HERO SECTION - Exact 1:1 Match */}
      <section 
        className="why-hero-section"
        style={{
          backgroundImage: `url('/services_hero_bg.jpg')`
        }}
      >
        <div className="why-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="why-hero-grid">
            {/* Left Content */}
            <div>
              <div className="eyebrow-cyan">WHY SMART-LINKS</div>
              <h1 className="why-hero-title">
                MORE THAN CABLING. <br />
                <span className="blue-highlight">A STRONGER TOMORROW.</span>
              </h1>
              <p className="why-hero-subtext">
                We deliver infrastructure solutions that connect people, technology and opportunity. Our commitment to quality, reliability and long-term partnerships sets us apart.
              </p>

              <div className="why-hero-buttons-row">
                <button 
                  onClick={onOpenQuote}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', borderRadius: '6px' }}
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={15} />
                </button>
                <button 
                  onClick={() => onNavigate('services')}
                  className="btn-outline-white-solid"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', borderRadius: '6px' }}
                >
                  <span>OUR SERVICES</span>
                </button>
              </div>
            </div>

            {/* Right Tag Banner */}
            <div className="why-hero-right-tag">
              <div className="why-tagline-block">
                <div className="why-tagline-words">
                  CONNECTING<br />
                  PEOPLE<br />
                  PLACES<br />
                  POSSIBILITIES
                </div>
                <div className="why-tagline-bar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS / METRICS STRIP (5 COLUMNS WITH DIVIDERS) */}
      <section className="why-stats-strip">
        <div className="container-wide">
          <div className="why-stats-grid-5col">
            {/* 1. Projects Completed */}
            <div className="why-stat-col">
              <div className="why-stat-icon-wrap">
                <Users size={28} strokeWidth={2} />
              </div>
              <div className="why-stat-number">100+</div>
              <div className="why-stat-label">Projects Completed</div>
            </div>

            {/* 2. Client Satisfaction */}
            <div className="why-stat-col">
              <div className="why-stat-icon-wrap">
                <Handshake size={28} strokeWidth={2} />
              </div>
              <div className="why-stat-number">99%</div>
              <div className="why-stat-label">Client Satisfaction</div>
            </div>

            {/* 3. Years of Experience */}
            <div className="why-stat-col">
              <div className="why-stat-icon-wrap">
                <ShieldCheck size={28} strokeWidth={2} />
              </div>
              <div className="why-stat-number">15+</div>
              <div className="why-stat-label">Years of Experience</div>
            </div>

            {/* 4. Industries Served */}
            <div className="why-stat-col">
              <div className="why-stat-icon-wrap">
                <BarChart3 size={28} strokeWidth={2} />
              </div>
              <div className="why-stat-number">Multiple</div>
              <div className="why-stat-label">Industries Served</div>
            </div>

            {/* 5. Project Coverage */}
            <div className="why-stat-col">
              <div className="why-stat-icon-wrap">
                <Globe size={28} strokeWidth={2} />
              </div>
              <div className="why-stat-number">Nationwide</div>
              <div className="why-stat-label">Project Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SMART-LINKS (6 CARDS + TECHNICIAN MEDIA) */}
      <section className="why-choose-section">
        <div className="container-wide">
          <div className="why-choose-split-grid">
            {/* Left 60%: Header + 6 Feature Cards */}
            <div className="why-choose-left-col">
              {/* Header with Callout Box */}
              <div className="why-choose-header-flex">
                <div>
                  <div className="eyebrow-blue">WHY CHOOSE SMART-LINKS</div>
                  <h2 className="why-choose-heading">
                    The Smart Choice <br />
                    for a More Connected World
                  </h2>
                  <p className="why-choose-desc">
                    We combine technical expertise, industry best practices, and a commitment to excellence to deliver infrastructure solutions that perform today and scale for tomorrow.
                  </p>
                </div>

                <div className="why-partner-callout-card">
                  <div className="partner-callout-tag">YOUR PARTNER IN INFRASTRUCTURE. TODAY AND BEYOND.</div>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="btn-talk-dark"
                  >
                    <span>LET'S TALK</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* 6 Features Grid (2x3) */}
              <div className="why-features-6grid">
                {/* 1. Proven Expertise */}
                <div className="why-feature-card">
                  <div className="why-feature-icon-wrap">
                    <Award size={26} strokeWidth={2} />
                  </div>
                  <h3 className="why-feature-title">Proven Expertise</h3>
                  <p className="why-feature-text">
                    Years of hands-on experience delivering complex infrastructure projects across diverse industries.
                  </p>
                </div>

                {/* 2. Quality You Can Trust */}
                <div className="why-feature-card">
                  <div className="why-feature-icon-wrap">
                    <ShieldCheck size={26} strokeWidth={2} />
                  </div>
                  <h3 className="why-feature-title">Quality You Can Trust</h3>
                  <p className="why-feature-text">
                    We use industry-leading products, certified technicians, and rigorous quality control.
                  </p>
                </div>

                {/* 3. Customized Solutions */}
                <div className="why-feature-card">
                  <div className="why-feature-icon-wrap">
                    <Lightbulb size={26} strokeWidth={2} />
                  </div>
                  <h3 className="why-feature-title">Customized Solutions</h3>
                  <p className="why-feature-text">
                    Tailored infrastructure solutions designed to meet your unique business needs.
                  </p>
                </div>

                {/* 4. Client-Focused Approach */}
                <div className="why-feature-card">
                  <div className="why-feature-icon-wrap">
                    <Users size={26} strokeWidth={2} />
                  </div>
                  <h3 className="why-feature-title">Client-Focused Approach</h3>
                  <p className="why-feature-text">
                    We build long-term partnerships through clear communication, reliability, and exceptional service.
                  </p>
                </div>

                {/* 5. Scalable for the Future */}
                <div className="why-feature-card">
                  <div className="why-feature-icon-wrap">
                    <TrendingUp size={26} strokeWidth={2} />
                  </div>
                  <h3 className="why-feature-title">Scalable for the Future</h3>
                  <p className="why-feature-text">
                    Our solutions are designed to support your growth, from single locations to multi-site nationwide deployments.
                  </p>
                </div>

                {/* 6. On-Time, On-Budget */}
                <div className="why-feature-card">
                  <div className="why-feature-icon-wrap">
                    <Clock size={26} strokeWidth={2} />
                  </div>
                  <h3 className="why-feature-title">On-Time, On-Budget</h3>
                  <p className="why-feature-text">
                    We deliver projects efficiently without compromising quality or safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Server Rack Technician Photo with Overlay */}
            <div className="why-tech-photo-col">
              <div className="why-tech-photo-wrapper">
                <img 
                  src="/technician_server_rack.jpg" 
                  alt="Smart-Links Cabling Solutions Certified Technician in Server Room" 
                />
                <div className="why-tech-badge-overlay">
                  <div className="tech-badge-bar" />
                  <div className="tech-badge-text">
                    EXPERIENCE.<br />
                    INTEGRITY.<br />
                    RESULTS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR DIFFERENCE (2-COLUMN ATTACHED SECTION WITH CHECKMARKS) */}
      <section className="why-difference-section">
        <div className="container-wide">
          <div className="why-difference-grid">
            {/* Left: Text Column (Light Blue Background) */}
            <div className="why-difference-text-col">
              <div className="eyebrow-blue">OUR DIFFERENCE</div>
              <h2 className="why-difference-heading">
                A Higher Standard <br />
                in Every Connection
              </h2>
              <p className="why-difference-desc">
                At Smart-Links, we don't just install cables, we build the foundation for smarter, safer, and more connected environments. Our attention to detail, commitment to safety, and focus on long-term value make us the trusted partner for businesses of all sizes.
              </p>
              <div>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '6px' }}
                >
                  <span>OUR PROJECTS</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right: Dark Building Column with 6 Checklist Items */}
            <div 
              className="why-difference-dark-col"
              style={{
                backgroundImage: `url('/about_hero_bg.jpg')`
              }}
            >
              <div className="why-difference-overlay" />
              <div className="why-checklist-content">
                <div className="why-checklist-stack">
                  <div className="why-check-item">
                    <CheckCircle2 size={20} className="why-check-icon" />
                    <span>Certified and experienced technicians</span>
                  </div>
                  <div className="why-check-item">
                    <CheckCircle2 size={20} className="why-check-icon" />
                    <span>End-to-end project management</span>
                  </div>
                  <div className="why-check-item">
                    <CheckCircle2 size={20} className="why-check-icon" />
                    <span>Compliance with industry standards (BICSI, TIA, NEC)</span>
                  </div>
                  <div className="why-check-item">
                    <CheckCircle2 size={20} className="why-check-icon" />
                    <span>Use of top-tier, reliable products</span>
                  </div>
                  <div className="why-check-item">
                    <CheckCircle2 size={20} className="why-check-icon" />
                    <span>Dedicated support before, during, and after your project</span>
                  </div>
                  <div className="why-check-item">
                    <CheckCircle2 size={20} className="why-check-icon" />
                    <span>A true partner in your success</span>
                  </div>
                </div>

                <div className="why-difference-tag-bottom">
                  <div className="diff-tag-box">
                    <div className="diff-tag-line">BUILT ON INTEGRITY.</div>
                    <div className="diff-tag-line">DRIVEN BY SOLUTIONS.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUSTED BY LEADING BRANDS */}
      <section className="why-brands-section">
        <div className="container-wide">
          <div className="eyebrow-blue" style={{ textAlign: 'left', marginBottom: '24px' }}>
            TRUSTED BY LEADING BRANDS
          </div>

          <div className="why-brands-row">
            <div className="why-brand-pill"><span className="brand-font-serif">Morgan Stanley</span></div>
            <div className="why-brand-pill"><span className="brand-font-sans-bold">CHANEL</span></div>
            <div className="why-brand-pill"><span className="brand-font-walmart">Walmart<span className="spark">✻</span></span></div>
            <div className="why-brand-pill">
              <img src="/logo_home_depot.png" alt="The Home Depot" className="brand-logo-img logo-homedepot" />
            </div>
            <div className="why-brand-pill"><span className="brand-font-lowes">LOWE'S</span></div>
            <div className="why-brand-pill">
              <img src="/logo_hilton.png" alt="Hilton" className="brand-logo-img logo-hilton" />
            </div>
            <div className="why-brand-pill">
              <img src="/logo_holiday_inn.png" alt="Holiday Inn" className="brand-logo-img logo-holidayinn" />
            </div>
            <div className="why-brand-pill">
              <img src="/logo_louis_vuitton.png" alt="Louis Vuitton" className="brand-logo-img logo-lv" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
