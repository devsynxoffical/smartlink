import React, { useState } from 'react';
import type { NavTab } from '../types';
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Server,
  Cloud,
  Landmark,
  HeartPulse,
  GraduationCap,
  Building2,
  Building,
  Layers,
  Network,
  Cpu,
  Check
} from 'lucide-react';

interface DataCenterInfrastructurePageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

interface DataCenterServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
}

const dataCenterServicesList: DataCenterServiceCard[] = [
  {
    id: 'rack-and-stack',
    title: 'Rack & Stack',
    description: 'Professional rack installation, equipment mounting, and cable management.',
    image: '/web/03-data-center-infrastructure/01-rack-and-stack.jpg',
    category: 'Equipment Deployment',
    details: [
      'Server, switch, PDU, and UPS rack mounting',
      'High-density vertical & horizontal cable management',
      'Weight distribution and structural seismic bracing',
      'Port-by-port cable labeling and asset documentation'
    ]
  },
  {
    id: 'copper-fiber-cabling',
    title: 'Copper & Fiber Cabling',
    description: 'Structured cabling, fiber backbone, cross-connects and high-density solutions.',
    image: '/fiber_singlemode.jpg',
    category: 'High-Density Media',
    details: [
      'OM4/OM5 multimode & OS2 single-mode fiber trunks',
      'Cat6A shielded & unshielded copper patch channels',
      'Ultra-dense MPO/MTP pre-terminated cassettes',
      'Low-loss fiber optic backbone interconnects'
    ]
  },
  {
    id: 'cable-trays-pathways',
    title: 'Cable Trays & Pathways',
    description: 'Design and installation of cable trays, ladder racks, and pathways.',
    image: '/web/03-data-center-infrastructure/02-cable-trays-pathways.jpg',
    category: 'Pathway Infrastructure',
    details: [
      'Overhead wire basket & ladder rack containment',
      'Under-floor data & power raceway distribution',
      'Yellow fiber optic protective ducting channels',
      'Seismic and physical drop-out protection brackets'
    ]
  },
  {
    id: 'mdf-idf-buildouts',
    title: 'MDF / IDF Buildouts',
    description: 'Main distribution frame (MDF) and intermediate distribution frame (IDF) implementation.',
    image: '/web/03-data-center-infrastructure/03-mdf-idf-buildouts.jpg',
    category: 'Core Distribution',
    details: [
      'Full MDF/IDF telecommunications room construction',
      'Riser fiber & copper backbone distribution systems',
      'Clean cross-connect field and jumper management',
      'Comprehensive schematic mapping & labeling'
    ]
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Switches, routers, patching and cross-connects.',
    image: '/card_it_solutions.webp',
    category: 'Active Hardware',
    details: [
      'Core, spine, and leaf switch topology integration',
      'Top-of-Rack (ToR) and End-of-Row (EoR) deployments',
      'Structured patch fields and optical cross-connects',
      'Power distribution and redundant PoE supply feeds'
    ]
  },
  {
    id: 'hot-cold-aisle-design',
    title: 'Hot & Cold Aisle Design',
    description: 'Optimized cabling for efficient airflow and cooling performance.',
    image: '/hero_server_room_blue_cables.webp',
    category: 'Thermal Efficiency',
    details: [
      'Thermal aisle containment systems & blanking panels',
      'Zero-obstruction airflow cable routing design',
      'High-efficiency cooling airflow optimization',
      'Reduced PUE and energy consumption modeling'
    ]
  },
  {
    id: 'cabinets-enclosures',
    title: 'Cabinets & Enclosures',
    description: 'Supply and installation of racks, cabinets, and enclosures.',
    image: '/web/03-data-center-infrastructure/04-cabinets-enclosures.jpg',
    category: 'Containment & Security',
    details: [
      '42U–48U server and network enclosure cabinets',
      'Perforated mesh doors for optimal heat dissipation',
      'Smart locking handles and physical access security',
      'Integrated cable pass-throughs and PDU brackets'
    ]
  },
  {
    id: 'testing-certification',
    title: 'Testing & Certification',
    description: 'Fluke and OTDR testing, certification, and full documentation.',
    image: '/technician_server_rack.webp',
    category: 'Verification & Quality',
    details: [
      'Tier 1 & Tier 2 Fluke Versiv DSX-8000 validation',
      'OTDR loss trace curves and fiber end-face inspection',
      'Comprehensive PDF warranty verification packages',
      'Guaranteed standards compliance with 25-year warranty'
    ]
  }
];

const dcProcessSteps = [
  {
    step: 1,
    title: 'Consultation',
    desc: 'Understand your goals'
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

const dcIndustriesList = [
  {
    name: 'Data Centers',
    icon: <Server size={22} strokeWidth={2.2} />,
    industryId: 'commercial'
  },
  {
    name: 'Cloud Providers',
    icon: <Cloud size={22} strokeWidth={2.2} />,
    industryId: 'commercial'
  },
  {
    name: 'Financial Services',
    icon: <Landmark size={22} strokeWidth={2.2} />,
    industryId: 'commercial'
  },
  {
    name: 'Healthcare',
    icon: <HeartPulse size={22} strokeWidth={2.2} />,
    industryId: 'healthcare'
  },
  {
    name: 'Government',
    icon: <Building2 size={22} strokeWidth={2.2} />,
    industryId: 'government'
  },
  {
    name: 'Education',
    icon: <GraduationCap size={22} strokeWidth={2.2} />,
    industryId: 'education'
  },
  {
    name: 'Enterprise',
    icon: <Building size={22} strokeWidth={2.2} />,
    industryId: 'commercial'
  },
  {
    name: 'Colocation Facilities',
    icon: <Layers size={22} strokeWidth={2.2} />,
    industryId: 'industrial'
  },
  {
    name: 'Edge Facilities',
    icon: <Network size={22} strokeWidth={2.2} />,
    industryId: 'industrial'
  }
];

export const DataCenterInfrastructurePage: React.FC<DataCenterInfrastructurePageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [selectedService, setSelectedService] = useState<DataCenterServiceCard | null>(null);

  const handleDownloadBrochure = () => {
    onOpenQuote('Data Center Infrastructure Brochure & Consultation');
  };

  return (
    <div className="dc-page-root">
      {/* 1. HERO SECTION */}
      <section id="dc-hero" className="access-hero-section">
        {/* Background Image Container */}
        <div className="access-hero-bg-wrapper">
          <img
            src="/datacenter_hero_bg.webp"
            alt="Data Center Server Corridor"
            className="access-hero-bg-img"
          />
          <div className="access-hero-gradient-overlay" />
        </div>

        <div className="access-container">
          <div className="access-hero-inner">
            {/* Left Content Area */}
            <div className="access-hero-content">
              {/* Breadcrumb Navigation */}
              <nav className="access-breadcrumbs" aria-label="Breadcrumb">
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="access-breadcrumb-link"
                >
                  Home
                </button>
                <ChevronRight size={13} className="access-breadcrumb-separator" />
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="access-breadcrumb-link"
                >
                  Services
                </button>
                <ChevronRight size={13} className="access-breadcrumb-separator" />
                <span className="access-breadcrumb-current">Data Center Infrastructure</span>
              </nav>

              {/* Eyebrow */}
              <div className="access-hero-eyebrow">
                DATA CENTER INFRASTRUCTURE
              </div>

              {/* Main Headline */}
              <h1 className="access-hero-title">
                MISSION CRITICAL.<br />
                CREATE <span className="access-hero-title-highlight">SCALABLE FABRICS.</span>
              </h1>

              {/* Subtitle */}
              <p className="access-hero-desc">
                End-to-end data center cabling, hot/cold aisle containment, and high-density optical backbones engineered for maximum uptime.
              </p>

              {/* 4 Feature Badges */}
              <div className="access-hero-features-grid">
                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <Zap size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Reliable Performance</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <ShieldCheck size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Zero Downtime MOP</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <BarChart3 size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Scalable Pathways</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <Users size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Expert Execution</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="access-hero-actions">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Data Center - Talk to an Expert')}
                  className="access-btn-primary"
                >
                  <span>TALK TO A DATA CENTER EXPERT</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Side Vertical Corporate Brand Banner */}
            <div className="access-hero-right-banner">
              <div className="access-hero-pillar-box">
                <div className="access-pillar-keywords">
                  <span className="access-keyword">PEOPLE</span>
                  <span className="access-keyword">PLACES</span>
                  <span className="access-keyword">POSSIBILITIES</span>
                </div>
                <div className="access-pillar-accent-line" />
                <div className="access-pillar-subtext">
                  MISSION-CRITICAL.<br />
                  HIGH DENSITY.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE SOLUTIONS FOR MODERN DATA CENTERS */}
      <section id="dc-services" className="fiber-services-section">
        <div className="fiber-container">
          {/* Section Header Row */}
          <div className="fiber-section-head-row">
            <div className="fiber-section-head-left">
              <div className="fiber-eyebrow-cyan">
                <span>OUR DATA CENTER SOLUTIONS</span>
              </div>
              <h2 className="fiber-services-main-title">
                Complete Solutions for Modern Data Centers.
              </h2>
              <p className="fiber-services-subtext">
                From design and build to installation and support, Smart-Links delivers high-performance infrastructure for data centers of all sizes — from edge facilities to hyperscale environments.
              </p>
            </div>

            <div className="fiber-section-head-right">
              <button
                type="button"
                onClick={handleDownloadBrochure}
                className="dc-btn-brochure-link"
              >
                <span>DOWNLOAD DATA CENTER BROCHURE</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* 8 Cards Grid */}
          <div className="fiber-cards-grid">
            {dataCenterServicesList.map((srv) => (
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

      {/* 3. WHY SMART-LINKS & DATA CENTER CAPABILITIES (Split Section) */}
      <section id="dc-why-choose" className="fiber-why-applications-section">
        <div className="fiber-container">
          <div className="fiber-split-box">
            {/* Left Column: Why Smart-Links */}
            <div className="fiber-why-left-col">
              <div className="fiber-eyebrow-cyan">
                <span>WHY SMART-LINKS</span>
              </div>
              <h2 className="fiber-why-title">
                Data Center Expertise You Can Trust.
              </h2>
              <p className="fiber-why-desc">
                We understand the unique demands of mission-critical environments and deliver solutions that keep your operations running 24/7.
              </p>

              {/* 4 Pillars Horizontal Grid */}
              <div className="fiber-pillars-grid">
                <div className="fiber-pillar-item">
                  <div className="fiber-pillar-icon-wrap">
                    <Cpu size={28} className="fiber-pillar-icon" />
                  </div>
                  <span className="fiber-pillar-label">Certified<br />Professionals</span>
                </div>

                <div className="fiber-pillar-item">
                  <div className="fiber-pillar-icon-wrap">
                    <ShieldCheck size={28} className="fiber-pillar-icon" />
                  </div>
                  <span className="fiber-pillar-label">Industry-Leading<br />Standards</span>
                </div>

                <div className="fiber-pillar-item">
                  <div className="fiber-pillar-icon-wrap">
                    <BarChart3 size={28} className="fiber-pillar-icon" />
                  </div>
                  <span className="fiber-pillar-label">Scalable<br />Solutions</span>
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

            {/* Right Column: Data Center Capabilities (2 Columns of 6 Items) */}
            <div className="fiber-applications-right-col">
              <div className="fiber-apps-eyebrow">
                OUR DATA CENTER CAPABILITIES
              </div>

              <div className="fiber-apps-2col-list">
                <div className="fiber-apps-subcol">
                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Structured Cabling (Copper & Fiber)')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <span>Structured Cabling (Copper & Fiber)</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('MDF / IDF Design & Build')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <span>MDF / IDF Design & Build</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Rack & Stack / Equipment Installation')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Rack & Stack / Equipment Installation</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Cable Trays & Pathways')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Cable Trays & Pathways</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Network Switching & Routing')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Network Switching & Routing</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Power & Cable Management')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Power & Cable Management</span>
                  </button>
                </div>

                <div className="fiber-apps-subcol">
                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Hot / Cold Aisle Optimization')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Hot / Cold Aisle Optimization</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Testing & Certification')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Testing & Certification</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Moves, Adds & Changes (MAC)')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Moves, Adds & Changes (MAC)</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('Decommissioning & Relocation')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Decommissioning & Relocation</span>
                  </button>

                  <button
                    type="button"
                    className="fiber-app-check-item fiber-app-interactive-btn"
                    onClick={() => onOpenQuote('24/7 Support & Maintenance')}
                  >
                    <div className="fiber-check-bubble">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>24/7 Support & Maintenance</span>
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

      {/* 4. OUR PROCESS / FROM PLANNING TO PERFORMANCE */}
      <section id="dc-process" className="fiber-process-section">
        <div className="fiber-container">
          <div className="fiber-process-header">
            <div className="fiber-eyebrow-cyan" style={{ marginBottom: '8px' }}>
              <span>OUR PROCESS</span>
            </div>
            <h2 className="fiber-process-title">
              From Planning to Performance.
            </h2>
          </div>

          <div className="fiber-timeline-row">
            {dcProcessSteps.map((p, idx) => (
              <React.Fragment key={p.step}>
                <div
                  className="fiber-step-node fiber-step-interactive"
                  onClick={() => onOpenQuote(`Data Center Project - Stage: ${p.title}`)}
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

                {idx < dcProcessSteps.length - 1 && (
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

      {/* 5. INDUSTRIES WE SERVE / BUILT FOR CRITICAL ENVIRONMENTS */}
      <section id="dc-industries" className="dc-industries-section">
        <div className="fiber-container">
          <div className="fiber-process-header">
            <div className="fiber-eyebrow-cyan" style={{ marginBottom: '8px' }}>
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="fiber-process-title">
              Built for Critical Environments.
            </h2>
          </div>

          <div className="dc-industries-grid">
            {dcIndustriesList.map((ind, idx) => (
              <button
                key={idx}
                type="button"
                className="dc-industry-pill-card"
                onClick={() => onNavigate('industry-detail', ind.industryId)}
                title={`Explore ${ind.name} data center solutions`}
              >
                <div className="dc-industry-icon-wrap">
                  {ind.icon}
                </div>
                <span className="dc-industry-name">{ind.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER (Ready to Power Your Data Center?) */}
      <section id="dc-cta" className="fiber-bottom-cta-section">
        <div className="fiber-cta-bg-wrapper">
          <img
            src="/hero_server_room_blue_cables.webp"
            alt="Data Center Server Corridor"
            className="fiber-cta-bg-img"
          />
          <div className="fiber-cta-dark-overlay" />
        </div>

        <div className="fiber-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="fiber-cta-inner">
            {/* Left Content */}
            <div className="fiber-cta-content">
              <div className="fiber-cta-eyebrow">
                <span>LET'S BUILD A HIGHER STANDARD</span>
              </div>
              <h2 className="fiber-cta-headline">
                Ready to Power Your Data Center?
              </h2>
              <p className="fiber-cta-subtext">
                Talk to our team about your project requirements.
              </p>

              <div className="fiber-cta-buttons-row">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Data Center Infrastructure')}
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
                  <span>TALK TO A SPECIALIST</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Watermark */}
            <div className="fiber-cta-watermark">
              <div className="fiber-cta-slogan-text">CONNECTING</div>
              <div className="fiber-cta-slogan-text">PEOPLE</div>
              <div className="fiber-cta-slogan-text">PLACES</div>
              <div className="fiber-cta-slogan-text">POSSIBILITIES</div>
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
                  <h4 className="fiber-modal-specs-title">Technical Capabilities & Scope</h4>
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
                  onOpenQuote(`Data Center - ${serviceName}`);
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
