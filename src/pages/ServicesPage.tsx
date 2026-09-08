import React from 'react';
import type { NavTab, ServiceItem } from '../types';
import { servicesData } from '../data/siteData';
import {
  ArrowRight,
  CheckCircle2,
  Network,
  Zap,
  Camera,
  Lock,
  Radio,
  Cloud,
  MessageSquare,
  PenTool,
  Wrench,
  Headphones,
  Award
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
  onSelectService: (service: ServiceItem) => void;
}

const getServiceIcon = (name: string) => {
  switch (name) {
    case 'Network': return <Network size={22} />;
    case 'Zap': return <Zap size={22} />;
    case 'Camera': return <Camera size={22} />;
    case 'Lock': return <Lock size={22} />;
    case 'Radio': return <Radio size={22} />;
    case 'Cloud': return <Cloud size={22} />;
    default: return <Network size={22} />;
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectService
}) => {
  return (
    <div className="services-page-exact">
      {/* 1. HERO SECTION */}
      <section 
        className="subpage-hero"
        style={{
          backgroundImage: `url('/services_hero_bg.jpg')`
        }}
      >
        <div className="subpage-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="subpage-hero-grid">
            <div>
              <div className="eyebrow-cyan">OUR SERVICES</div>
              <h1 className="subpage-title">
                INFRASTRUCTURE THAT PERFORMS.<br />
                <span style={{ color: '#0075ff' }}>SOLUTIONS THAT LAST.</span>
              </h1>
              <p className="subpage-desc">
                Smart-Links Cabling Solutions delivers end-to-end low voltage infrastructure and technology solutions designed for today's businesses and tomorrow's growth.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenQuote}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="btn-outline-white"
                >
                  <span>TALK TO AN EXPERT</span>
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className="tag-banner-box" style={{ width: '100%', maxWidth: '320px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#00bfff', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.08em' }}>
                  CORE PHASES
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  {['PLAN & DESIGN', 'PRECISION INSTALL', '100% CERTIFY', '24/7 SUPPORT', 'SCALE NATIONWIDE'].map((p, idx) => (
                    <div key={idx} style={{ fontSize: '12.5px', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00bfff' }} />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.15)', fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>
                  CONNECTING PEOPLE PLACES POSSIBILITIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE SOLUTIONS 6-CARDS */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container-wide">
          <div className="section-header-row">
            <div>
              <span className="eyebrow-blue">
                OUR CAPABILITIES
              </span>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0a1128', marginTop: '6px' }}>
                Comprehensive Solutions<br />for a Connected World
              </h2>
            </div>
            <p style={{ maxWidth: '420px', fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
              Every system we design, install, and certify meets the most rigorous performance standards and manufacturer warranties.
            </p>
          </div>

          <div className="services-3grid">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                onClick={() => {
                  onSelectService(svc);
                  onNavigate('service-detail', svc.id);
                }}
                className="service-card"
                style={{
                  cursor: 'pointer',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '190px', overflow: 'hidden' }}>
                  <img src={svc.image} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '12px', left: '14px', background: '#0075ff', color: '#ffffff', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getServiceIcon(svc.iconName)}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0a1128', marginBottom: '8px' }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.55', marginBottom: '18px' }}>
                      {svc.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                      {svc.details.capabilities.slice(0, 3).map((cap, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: 600, color: '#334155' }}>
                          <CheckCircle2 size={14} color="#0075ff" style={{ flexShrink: 0 }} />
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '14px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#0075ff', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      EXPLORE FULL SPECS <ArrowRight size={14} />
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', background: '#ffffff', padding: '4px 8px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                      25-YR WARRANTY
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4-STEP PROCESS */}
      <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid #eef2f6' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px auto' }}>
            <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase' }}>
              OUR PROCESS
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0a1128', marginTop: '6px' }}>
              From Concept to Connection
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748b', marginTop: '8px' }}>
              A structured, transparent approach that guarantees on-time delivery, flawless certification, and zero operational downtime.
            </p>
          </div>

          <div className="workflow-4grid">
            {[
              {
                step: '01',
                title: 'Consult & Assess',
                desc: 'Comprehensive site survey, pathway evaluation, and network load calculation.',
                icon: <MessageSquare size={22} color="#0075ff" />
              },
              {
                step: '02',
                title: 'Design & Engineer',
                desc: 'Detailed CAD blueprints, cable schedules, and BICSI RCDD approved plans.',
                icon: <PenTool size={22} color="#0075ff" />
              },
              {
                step: '03',
                title: 'Install & Terminate',
                desc: 'Precision cable pulls, laser fusion splicing, and immaculate rack dressing.',
                icon: <Wrench size={22} color="#0075ff" />
              },
              {
                step: '04',
                title: 'Certify & Support',
                desc: '100% Fluke DSX-8000 Level 2G verification and 24/7 ongoing warranty support.',
                icon: <Headphones size={22} color="#0075ff" />
              }
            ].map((p, i) => (
              <div key={i} className="workflow-card-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div className="workflow-step-num">{p.step}</div>
                  <div style={{ background: '#eff6ff', padding: '8px', borderRadius: '8px' }}>{p.icon}</div>
                </div>
                <h3 className="workflow-step-title">{p.title}</h3>
                <p className="workflow-step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FLUKE CERTIFICATION BANNER */}
      <section className="section" style={{ background: '#050b17', color: '#ffffff' }}>
        <div className="container-wide">
          <div className="fluke-banner-card">
            <div className="fluke-banner-grid">
              <div>
                <span className="eyebrow-cyan" style={{ marginBottom: '8px' }}>QUALITY GUARANTEE</span>
                <h3 style={{ fontSize: '30px', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>
                  100% Fluke Networks Tier 2 Testing on Every Run
                </h3>
                <p style={{ fontSize: '14.5px', color: '#cbd5e1', lineHeight: '1.65', marginBottom: '24px' }}>
                  We don't just pull cable — we certify every channel with calibrated Fluke Versiv testers, providing you with full compliance PDF test reports and manufacturer backed 25-year performance warranties.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button onClick={onOpenQuote} className="btn-primary">
                    <span>REQUEST A PROJECT QUOTE</span>
                    <ArrowRight size={14} />
                  </button>
                  <button onClick={() => onNavigate('projects')} className="btn-outline-white">
                    <span>VIEW PAST INSTALLATIONS</span>
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ background: 'rgba(5, 11, 23, 0.8)', border: '1px solid rgba(0, 191, 255, 0.3)', borderRadius: '12px', padding: '32px', textAlign: 'center', width: '100%', maxWidth: '280px' }}>
                  <Award size={48} color="#00bfff" style={{ margin: '0 auto 12px auto' }} />
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>BICSI RCDD Certified</div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>Design & Engineering Integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
