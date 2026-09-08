import React from 'react';
import type { NavTab } from '../types';
import { partnerLogos } from '../data/siteData';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Cpu
} from 'lucide-react';

interface WhyUsPageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="why-us-page-root">
      {/* Hero */}
      <section
        className="hero-wrapper"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85')`
        }}
      >
        <div className="hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="hero-content-grid">
            <div>
              <div className="hero-tagline">WHY CHOOSE US</div>
              <h1 className="hero-heading">
                PRECISION ENGINEERING.<br />
                <span className="text-blue">CERTIFIED EXCELLENCE.</span>
              </h1>
              <p className="hero-description">
                We combine industry-certified engineers, Tier-1 manufacturer warranties, and Fluke DSX Level 2G verification for unmatched low voltage infrastructure performance.
              </p>
              <div className="hero-cta-group">
                <button className="btn-primary" onClick={onOpenQuote}>
                  <span>Get A Quote</span>
                  <ArrowRight size={16} />
                </button>
                <button className="btn-outline-white" onClick={() => onNavigate('contact')}>
                  <span>Contact Our Team</span>
                </button>
              </div>
            </div>

            <div className="hero-sidebar-pillars">
              {['BICSI RCDD', 'FLUKE CERTIFIED', '25-YR WARRANTY', 'ZERO DOWNTIME', 'NATIONWIDE'].map((item, idx) => (
                <div key={idx} className="pillar-item" style={{ cursor: 'default' }}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section section-light">
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px auto' }}>
            <span className="section-eyebrow">THE SMART-LINKS ADVANTAGE</span>
            <h2 className="section-title">Built on Trust & Technical Rigor</h2>
            <p style={{ fontSize: '15.5px', color: '#475569', marginTop: '12px' }}>
              Every fiber strand, Cat6A drop, and camera position is engineered according to stringent ANSI/TIA-568 standards.
            </p>
          </div>

          <div className="why-us-pillars-grid">
            <div className="service-card" style={{ padding: '32px' }}>
              <div className="service-card-icon-box">
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                BICSI & Manufacturer Certified
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                Our field team holds BICSI Technician and RCDD certifications alongside manufacturer accreditations from CommScope, Panduit, and Corning.
              </p>
            </div>

            <div className="service-card" style={{ padding: '32px' }}>
              <div className="service-card-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                25-Year System Warranties
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                Every structured cabling installation qualifies for full manufacturer 25-year component and application assurance warranties.
              </p>
            </div>

            <div className="service-card" style={{ padding: '32px' }}>
              <div className="service-card-icon-box">
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                100% Verified Testing
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                Every copper and fiber termination is tested with Fluke Versiv DSX-8000 analyzers. Comprehensive PDF reports are delivered with all as-builts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Certifications Grid */}
      <section className="section section-subtle">
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px auto' }}>
            <span className="section-eyebrow">CERTIFIED MANUFACTURER PARTNERS</span>
            <h2 className="section-title">Industry-Leading Technology</h2>
          </div>

          <div className="partners-logos-row">
            {partnerLogos.map((partner, idx) => (
              <div key={idx} className="partner-logo-pill" style={{ minWidth: '220px' }}>
                <span className="partner-logo-text">{partner.name}</span>
                <span className="partner-logo-sub">{partner.tagline}</span>
                <span style={{ fontSize: '11px', color: '#64748b', marginTop: '6px' }}>{partner.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-light" style={{ paddingBottom: '90px' }}>
        <div className="container-wide">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="cta-banner-eyebrow">LET'S CONNECT</span>
              <h2 className="cta-banner-title">Speak with a Senior Systems Designer</h2>
              <p className="cta-banner-desc">
                Schedule a complimentary site survey and architectural review for your property.
              </p>
            </div>
            <div>
              <button className="btn-secondary-white" onClick={onOpenQuote}>
                <span>Get A Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
