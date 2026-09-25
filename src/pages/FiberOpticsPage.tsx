import React, { useState } from 'react';
import type { NavTab } from '../types';
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Globe2,
  ChevronRight,
  Building2,
  Server,
  GraduationCap,
  Landmark,
  Layers,
  HeartPulse,
  Factory,
  Check
} from 'lucide-react';

interface FiberOpticsPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

interface FiberServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
}

const fiberServicesList: FiberServiceCard[] = [
  {
    id: 'singlemode-multimode',
    title: 'Single-Mode & Multimode Fiber',
    description: 'Design and installation for diverse network requirements.',
    image: '/fiber_singlemode.jpg',
    category: 'Optical Transmission',
    details: [
      'OS2 single-mode long-haul and inter-building runs',
      'OM3, OM4, and OM5 ultra-high-speed multimode',
      'Loss budget analysis and dispersion calculations',
      'High-density fiber optic patch panel termination'
    ]
  },
  {
    id: 'splicing-termination',
    title: 'Fiber Splicing & Termination',
    description: 'Precision splicing, termination and connectorization.',
    image: '/fiber_splicing.jpg',
    category: 'Precision Engineering',
    details: [
      'Core-alignment fusion splicing with ultra-low dB loss',
      'LC, SC, ST, FC, and MPO/MTP connectorization',
      'Mechanical splicing and field-installable connectors',
      'Splice tray and cassette management'
    ]
  },
  {
    id: 'mdf-idf-runs',
    title: 'MDF to IDF Fiber Runs',
    description: 'Backbone and horizontal fiber distribution.',
    image: '/card_fiber_optics.webp',
    category: 'Backbone Distribution',
    details: [
      'Riser and plenum-rated backbone fiber runs',
      'Inter-floor high-capacity distribution pathways',
      'Redundant ring and star topology architecture',
      'Structured cable labeling and port mapping'
    ]
  },
  {
    id: 'preterminated-solutions',
    title: 'Pre-Terminated Fiber Solutions',
    description: 'Faster deployment with factory-terminated systems.',
    image: '/hero_server_room_blue_cables.webp',
    category: 'Rapid Deployment',
    details: [
      'Factory-tested MTP/MPO multi-fiber trunk cables',
      'Plug-and-play fiber cassettes and enclosures',
      'Guaranteed insertion loss test certificates',
      'Significantly reduced on-site installation time'
    ]
  },
  {
    id: 'aerial-underground',
    title: 'Aerial & Underground Fiber',
    description: 'Indoor, outdoor, aerial and direct-burial installations.',
    image: '/featured_building_banner.webp',
    category: 'Outside Plant (OSP)',
    details: [
      'Directional boring and underground conduit installation',
      'Armored direct-burial fiber placement',
      'Aerial strand and lashing deployment',
      'Waterproof outdoor splice enclosures & handholes'
    ]
  },
  {
    id: 'testing-certification',
    title: 'Testing & Certification',
    description: 'OTDR, loss testing and full documentation.',
    image: '/technician_server_rack.webp',
    category: 'Tier 1 & Tier 2 Testing',
    details: [
      'Fluke Versiv Tier 1 Optical Loss Test Set (OLTS)',
      'Tier 2 Optical Time-Domain Reflectometer (OTDR) traces',
      'End-face inspection and grading (IEC 61300-3-35)',
      'Comprehensive warranty certification packages'
    ]
  },
  {
    id: 'cable-pathways-trays',
    title: 'Cable Pathways & Trays',
    description: 'Complete pathway solutions for fiber infrastructure.',
    image: '/projects_cta_cables_bg.webp',
    category: 'Pathway Infrastructure',
    details: [
      'Yellow fiber optic raceway and ducting systems',
      'Overhead wire basket and ladder rack pathways',
      'Bend-radius compliant routing channels',
      'Seismic and structural seismic bracing support'
    ]
  },
  {
    id: 'repair-troubleshooting',
    title: 'Repair & Troubleshooting',
    description: 'Fast, reliable support to keep you connected.',
    image: '/technician_vest.webp',
    category: 'Emergency Services',
    details: [
      '24/7 emergency fiber cut repair and restoration',
      'Fault location using precision OTDR diagnostics',
      'Strand repatching and connector re-polishing',
      'Preventative maintenance and scheduled testing'
    ]
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Consultation',
    desc: 'Understand your needs'
  },
  {
    step: 2,
    title: 'Design & Planning',
    desc: 'Custom solution design'
  },
  {
    step: 3,
    title: 'Installation',
    desc: 'Expert deployment'
  },
  {
    step: 4,
    title: 'Testing & Certification',
    desc: 'Validate performance'
  },
  {
    step: 5,
    title: 'Support',
    desc: 'Ongoing maintenance'
  }
];

export const FiberOpticsPage: React.FC<FiberOpticsPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [selectedService, setSelectedService] = useState<FiberServiceCard | null>(null);

  return (
    <div className="fiber-page-root">
      {/* 1. HERO SECTION */}
      <section id="fiber-hero" className="fiber-hero-section">
        {/* Background Image Container */}
        <div className="fiber-hero-bg-wrapper">
          <img
            src="/fiber_hero_tech.jpg"
            alt="Fiber Optic Technician"
            className="fiber-hero-bg-img"
          />
          <div className="fiber-hero-gradient-overlay" />
        </div>

        <div className="fiber-hero-container">
          <div className="fiber-hero-inner">
            {/* Left Content Area */}
            <div className="fiber-hero-content">
              {/* Breadcrumb Navigation */}
              <nav className="fiber-breadcrumbs" aria-label="Breadcrumb">
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="fiber-breadcrumb-link"
                >
                  Home
                </button>
                <span className="fiber-breadcrumb-separator">&gt;</span>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="fiber-breadcrumb-link"
                >
                  Services
                </button>
                <span className="fiber-breadcrumb-separator">&gt;</span>
                <span className="fiber-breadcrumb-current">Fiber Optic Solutions</span>
              </nav>

              {/* Eyebrow */}
              <div className="fiber-hero-eyebrow">
                <span className="fiber-eyebrow-text">FIBER OPTIC SOLUTIONS</span>
              </div>

              {/* Main Headline */}
              <h1 className="fiber-hero-headline">
                HIGHER SPEEDS.<br />
                GREATER <span className="fiber-glow-text">POSSIBILITIES.</span>
              </h1>

              {/* Subtitle */}
              <p className="fiber-hero-subtitle">
                End-to-end fiber optic solutions designed for today's high-performance networks and tomorrow's growth.
              </p>

              {/* 4 Feature Items (Connected to Sections) */}
              <div className="fiber-hero-pills-row">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('fiber-services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="fiber-pill-item fiber-pill-interactive"
                  title="View complete fiber optic services"
                >
                  <div className="fiber-pill-icon">
                    <div className="fiber-icon-circle-badge">
                      <Zap size={15} strokeWidth={3} fill="#0075ff" />
                    </div>
                  </div>
                  <div className="fiber-pill-text">
                    <span className="fiber-pill-main">High</span>
                    <span className="fiber-pill-sub">Performance</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('fiber-why-choose');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="fiber-pill-item fiber-pill-interactive"
                  title="Explore reliable infrastructure standards"
                >
                  <div className="fiber-pill-icon">
                    <ShieldCheck size={28} strokeWidth={2.2} />
                  </div>
                  <div className="fiber-pill-text">
                    <span className="fiber-pill-main">Reliable</span>
                    <span className="fiber-pill-sub">Infrastructure</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('fiber-why-choose');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="fiber-pill-item fiber-pill-interactive"
                  title="Scalable architecture for future demands"
                >
                  <div className="fiber-pill-icon">
                    <BarChart3 size={28} strokeWidth={2.2} />
                  </div>
                  <div className="fiber-pill-text">
                    <span className="fiber-pill-main">Scalable</span>
                    <span className="fiber-pill-sub">for the Future</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('fiber-process');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="fiber-pill-item fiber-pill-interactive"
                  title="Learn our proven deployment process"
                >
                  <div className="fiber-pill-icon">
                    <Users size={28} strokeWidth={2.2} />
                  </div>
                  <div className="fiber-pill-text">
                    <span className="fiber-pill-main">Experts</span>
                    <span className="fiber-pill-sub">You Can Trust</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Watermark Slogan Badge */}
            <div className="fiber-hero-watermark-col">
              <button
                type="button"
                className="fiber-slogan-box fiber-slogan-btn"
                onClick={() => {
                  const el = document.getElementById('fiber-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                title="Explore fiber optic capabilities"
              >
                <div className="fiber-slogan-text">CONNECTING</div>
                <div className="fiber-slogan-text">PEOPLE</div>
                <div className="fiber-slogan-text">PLACES</div>
                <div className="fiber-slogan-text">POSSIBILITIES</div>
                <div className="fiber-slogan-line" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE FIBER OPTIC SERVICES SECTION */}
      <section id="fiber-services" className="fiber-services-section">
        <div className="fiber-container">
          {/* Section Header Row */}
          <div className="fiber-section-head-row">
            <div className="fiber-section-head-left">
              <div className="fiber-eyebrow-cyan">
                <span>OUR FIBER SOLUTIONS</span>
              </div>
              <h2 className="fiber-services-main-title">
                Complete Fiber Optic Services.
              </h2>
              <p className="fiber-services-subtext">
                From design and installation to splicing, testing, and certification, Smart-Links delivers reliable fiber infrastructure for businesses, data centers, campuses, and multi-site enterprises.
              </p>
            </div>

            <div className="fiber-section-head-right">
              <button
                type="button"
                onClick={() => onOpenQuote('Fiber Optic Solutions')}
                className="fiber-btn-talk-expert"
              >
                <span>TALK TO A FIBER EXPERT</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* 8 Cards Grid */}
          <div className="fiber-cards-grid">
            {fiberServicesList.map((srv) => (
              <div
                key={srv.id}
                className="fiber-card"
                onClick={() => setSelectedService(srv)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedService(srv);
                  }
                }}
              >
                <div className="fiber-card-img-wrapper">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="fiber-card-img"
                    loading="lazy"
                  />
                  <div className="fiber-card-img-overlay" />
                </div>

                <div className="fiber-card-body">
                  <div className="fiber-card-text-col">
                    <h3 className="fiber-card-title">{srv.title}</h3>
                    <p className="fiber-card-desc">{srv.description}</p>
                  </div>

                  <div className="fiber-card-action">
                    <button
                      type="button"
                      className="fiber-card-arrow-btn"
                      aria-label={`View details for ${srv.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(srv);
                      }}
                    >
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SMART-LINKS & APPLICATIONS SECTION */}
      <section id="fiber-why-choose" className="fiber-why-applications-section">
        <div className="fiber-container">
          <div className="fiber-split-box">
            {/* Left Column: Why Choose Smart-Links */}
            <div className="fiber-why-left-col">
              <div className="fiber-eyebrow-cyan">
                <span>WHY CHOOSE SMART-LINKS</span>
              </div>
              <h2 className="fiber-why-title">
                Fiber Infrastructure Built for What's Next.
              </h2>
              <p className="fiber-why-desc">
                Our certified team delivers high-quality fiber optic solutions that support mission-critical operations, high-speed data, and long-term scalability.
              </p>

              {/* 4 Pillars Horizontal Grid */}
              <div className="fiber-pillars-grid">
                <div className="fiber-pillar-item">
                  <div className="fiber-pillar-icon-wrap">
                    <ShieldCheck size={28} className="fiber-pillar-icon" />
                  </div>
                  <span className="fiber-pillar-label">Certified<br />Professionals</span>
                </div>

                <div className="fiber-pillar-item">
                  <div className="fiber-pillar-icon-wrap">
                    <Cpu size={28} className="fiber-pillar-icon" />
                  </div>
                  <span className="fiber-pillar-label">Industry-Leading<br />Technology</span>
                </div>

                <div className="fiber-pillar-item">
                  <div className="fiber-pillar-icon-wrap">
                    <BarChart3 size={28} className="fiber-pillar-icon" />
                  </div>
                  <span className="fiber-pillar-label">Reliable<br />Performance</span>
                </div>

                <div className="fiber-pillar-item">
                  <div className="fiber-pillar-icon-wrap">
                    <Users size={28} className="fiber-pillar-icon" />
                  </div>
                  <span className="fiber-pillar-label">Nationwide<br />Support</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="fiber-split-divider" />

            {/* Right Column: Fiber Optic Applications (Connected to Industries & Quotes) */}
            <div className="fiber-applications-right-col">
              <div className="fiber-apps-eyebrow">
                FIBER OPTIC APPLICATIONS
              </div>

              <div className="fiber-apps-2col-list">
                <div className="fiber-apps-subcol">
                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onNavigate('industry-detail', 'commercial')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <span>Enterprise Networks</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onNavigate('industry-detail', 'industrial')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <span>Data Centers</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onNavigate('industry-detail', 'commercial')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Campus Environments</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onNavigate('industry-detail', 'industrial')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Industrial Facilities</span>
                  </button>
                </div>

                <div className="fiber-apps-subcol">
                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onNavigate('industry-detail', 'healthcare')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Healthcare</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onNavigate('industry-detail', 'education')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Education</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onNavigate('industry-detail', 'government')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Government</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onNavigate('nationwide-rollouts', 'nationwide-rollouts')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Multi-Site Rollouts</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS / A PROVEN APPROACH */}
      <section id="fiber-process" className="fiber-process-section">
        <div className="fiber-container">
          <div className="fiber-process-header">
            <div className="fiber-eyebrow-cyan" style={{ marginBottom: '8px' }}>
              <span>OUR PROCESS</span>
            </div>
            <h2 className="fiber-process-title">
              A Proven Approach.
            </h2>
          </div>

          <div className="fiber-timeline-row">
            {processSteps.map((p, idx) => (
              <React.Fragment key={p.step}>
                <div
                  className="fiber-step-node fiber-step-interactive"
                  onClick={() => onOpenQuote(`Fiber Optic Project - Stage: ${p.title}`)}
                  title={`Request consultation for ${p.title}`}
                  role="button"
                  tabIndex={0}
                >
                  <div className="fiber-step-badge">
                    <span className="fiber-step-num">{p.step}</span>
                  </div>
                  <div className="fiber-step-info">
                    <div className="fiber-step-name">{p.title}</div>
                    <div className="fiber-step-desc">{p.desc}</div>
                  </div>
                </div>

                {idx < processSteps.length - 1 && (
                  <div className="fiber-step-arrow-connector">
                    <span className="fiber-connector-line" />
                    <ChevronRight size={16} className="fiber-connector-chevron" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER (Ready to Upgrade Your Fiber Infrastructure?) */}
      <section id="fiber-cta" className="fiber-bottom-cta-section">
        <div className="fiber-cta-bg-wrapper">
          <img
            src="/projects_cta_cables_bg.webp"
            alt="Fiber Network Cables"
            className="fiber-cta-bg-img"
          />
          <div className="fiber-cta-dark-overlay" />
        </div>

        <div className="fiber-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="fiber-cta-inner">
            {/* Left Content */}
            <div className="fiber-cta-content">
              <div className="fiber-cta-eyebrow">
                <span>LET'S BUILD A STRONGER, FASTER NETWORK</span>
              </div>
              <h2 className="fiber-cta-headline">
                Ready to Upgrade Your<br />
                Fiber Infrastructure?
              </h2>
              <p className="fiber-cta-subtext">
                Talk to our team about your project requirements.
              </p>

              <div className="fiber-cta-buttons-row">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Fiber Optic Infrastructure')}
                  className="fiber-btn-cta-primary"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="fiber-btn-cta-secondary"
                >
                  <span>CONTACT A SPECIALIST</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Watermark */}
            <div className="fiber-cta-watermark">
              <div className="fiber-cta-slogan-text">FASTER</div>
              <div className="fiber-cta-slogan-text">STRONGER</div>
              <div className="fiber-cta-slogan-text">MORE CONNECTED</div>
              <div className="fiber-cta-slogan-line" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fiber-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="fiber-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="fiber-modal-header">
              <div>
                <span className="fiber-modal-badge">{selectedService.category}</span>
                <h3 className="fiber-modal-title">{selectedService.title}</h3>
              </div>
              <button
                type="button"
                className="fiber-modal-close"
                onClick={() => setSelectedService(null)}
              >
                &times;
              </button>
            </div>

            <div className="fiber-modal-body">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="fiber-modal-img"
              />
              <p className="fiber-modal-desc">{selectedService.description}</p>

              {selectedService.details && (
                <div className="fiber-modal-specs">
                  <h4 className="fiber-modal-specs-title">Key Capabilities & Specifications</h4>
                  <ul className="fiber-modal-list">
                    {selectedService.details.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="fiber-modal-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="fiber-modal-footer">
              <button
                type="button"
                className="fiber-btn-cta-primary"
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenQuote(serviceName);
                }}
              >
                <span>REQUEST QUOTE FOR THIS SERVICE</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="fiber-modal-cancel-btn"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
