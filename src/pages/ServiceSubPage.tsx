import React, { useState } from 'react';
import type { NavTab } from '../types';
import { servicesData } from '../data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Network,
  Zap,
  Camera,
  Lock,
  Radio,
  Cloud,
  Server,
  Globe
} from 'lucide-react';

interface ServiceSubPageProps {
  serviceId: string;
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Network': return <Network size={20} />;
    case 'Zap': return <Zap size={20} />;
    case 'Camera': return <Camera size={20} />;
    case 'Lock': return <Lock size={20} />;
    case 'Radio': return <Radio size={20} />;
    case 'Cloud': return <Cloud size={20} />;
    case 'Server': return <Server size={20} />;
    case 'Globe': return <Globe size={20} />;
    default: return <Network size={20} />;
  }
};

export const ServiceSubPage: React.FC<ServiceSubPageProps> = ({
  serviceId,
  onNavigate,
  onOpenQuote
}) => {
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const otherServices = servicesData.filter(s => s.id !== service.id);

  return (
    <div className="service-subpage-root">
      {/* 1. HERO SECTION */}
      <section 
        className="subpage-hero"
        style={{
          backgroundImage: `url(${service.heroImage || '/services_hero_bg.jpg'})`
        }}
      >
        <div className="subpage-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div className="subpage-breadcrumbs">
            <button onClick={() => onNavigate('services')}>
              <ArrowLeft size={14} /> Back to All Services
            </button>
            <span>/</span>
            <span style={{ color: '#00bfff' }}>{service.title}</span>
          </div>

          <div className="subpage-hero-grid">
            <div>
              <div className="subpage-badge-pill">
                {getServiceIcon(service.iconName)}
                <span>{service.title}</span>
              </div>
              <h1 className="subpage-title">
                {service.title}
              </h1>
              <p className="subpage-tagline">
                "{service.tagline}"
              </p>
              <p className="subpage-desc">
                {service.description}
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenQuote}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>REQUEST SERVICE QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="btn-outline-white"
                >
                  <span>SCHEDULE SITE SURVEY</span>
                </button>
              </div>
            </div>

            {/* Standards Box */}
            <div>
              <div className="subpage-hero-box">
                <div className="subpage-box-title">
                  <Award size={18} />
                  <span>Standards & Warranty Assurance</span>
                </div>
                <div className="subpage-standards-list">
                  {service.details.standards.map((std, idx) => (
                    <div key={idx} className="subpage-std-item">
                      <CheckCircle2 size={16} color="#00bfff" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', fontSize: '12px', color: '#94a3b8' }}>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px' }}>25-Year Manufacturer System Warranty</strong>
                  Backed by CommScope, Panduit, and Superior Essex certified installation standards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL SPECIFICATIONS & CAPABILITIES */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container-wide">
          <div className="subpage-main-grid">
            {/* Left Column */}
            <div>
              <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                TECHNICAL SPECIFICATIONS
              </span>
              <h2 className="specs-title">
                Engineered for Peak Reliability & Throughput
              </h2>
              <p className="specs-paragraph">
                {service.details.overview}
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0a1128', marginBottom: '14px' }}>
                Core Technical Capabilities
              </h3>
              <div className="capabilities-2grid">
                {service.details.capabilities.map((cap, idx) => (
                  <div key={idx} className="capability-pill-item">
                    <CheckCircle2 size={16} color="#0075ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0a1128', marginBottom: '14px' }}>
                Project Deliverables Package
              </h3>
              <div className="deliverables-stack">
                {service.details.deliverables.map((del, idx) => (
                  <div key={idx} className="deliverable-box-item">
                    <FileText size={16} color="#0075ff" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Box & Other Services */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="subpage-sidebar-box">
                <img src={service.image} alt={service.title} className="subpage-sidebar-img" />
                <div className="subpage-sidebar-content">
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase', marginBottom: '6px' }}>
                    FIELD QUALITY ASSURANCE
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0a1128', marginBottom: '8px' }}>
                    100% Verified Testing
                  </h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', marginBottom: '18px' }}>
                    Every drop, fiber strand, and terminal is verified using Fluke Versiv DSX-8000 testers with full PDF documentation packages delivered upon completion.
                  </p>
                  <button 
                    onClick={onOpenQuote}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>REQUEST CONSULTATION</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Other Services Switcher */}
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0a1128', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  Explore Other Services
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {otherServices.map(other => (
                    <button
                      key={other.id}
                      onClick={() => onNavigate('service-detail', other.id)}
                      style={{
                        padding: '10px 14px',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        textAlign: 'left',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#334155',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>{other.title}</span>
                      <ArrowRight size={14} color="#0075ff" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-STEP METHODOLOGY */}
      {service.details.processSteps && (
        <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid #eef2f6' }}>
          <div className="container-wide">
            <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px auto' }}>
              <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase' }}>
                METHODOLOGY
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0a1128', marginTop: '6px' }}>
                Our 4-Stage Deployment Workflow
              </h2>
            </div>

            <div className="workflow-4grid">
              {service.details.processSteps.map((st, i) => (
                <div key={i} className="workflow-card-item">
                  <div className="workflow-step-num">{st.step}</div>
                  <h3 className="workflow-step-title">{st.title}</h3>
                  <p className="workflow-step-desc">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. FAQ ACCORDION */}
      {service.details.faq && (
        <section className="section" style={{ background: '#ffffff', borderTop: '1px solid #eef2f6' }}>
          <div className="container-wide">
            <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 36px auto' }}>
              <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase' }}>
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0a1128', marginTop: '6px' }}>
                Questions About {service.title}
              </h2>
            </div>

            <div className="faq-container">
              {service.details.faq.map((faq, index) => (
                <div key={index} className="faq-item-box">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="faq-question-btn"
                  >
                    <span>{faq.q}</span>
                    {openFaq === index ? <ChevronUp size={18} color="#0075ff" /> : <ChevronDown size={18} color="#64748b" />}
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. BOTTOM CTA CALLOUT */}
      <section className="subpage-cta-dark">
        <div className="container-wide">
          <h2 className="subpage-cta-title">
            Ready to Deploy High-Performance {service.title}?
          </h2>
          <p className="subpage-cta-desc">
            Speak directly with a Smart-Links certified engineer. We provide fast turnarounds on estimates and nationwide installation schedules.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenQuote}
              className="btn-primary"
            >
              <span>START YOUR PROJECT QUOTE</span>
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="btn-outline-white"
            >
              <span>CALL (407) 555-0100</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
