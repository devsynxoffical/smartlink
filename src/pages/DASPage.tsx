import React, { useState } from 'react';
import type { NavTab } from '../types';
import {
  Radio,
  ShieldCheck,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building2,
  HeartPulse,
  GraduationCap,
  Hotel,
  ShoppingCart,
  Factory,
  Landmark,
  Train,
  Plane,
  Trophy,
  Network,
  Cpu,
  Check
} from 'lucide-react';

interface DASPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

interface DASServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
  specs?: string[];
}

const dasServicesList: DASServiceCard[] = [
  {
    id: 'in-building-das',
    title: 'In-Building DAS',
    description: 'Reliable indoor cellular coverage for offices, hospitals, airports, stadiums and more.',
    image: '/das_in_building.jpg',
    category: 'Indoor Wireless Infrastructure',
    details: [
      'Active, passive, and hybrid distributed antenna system architectures',
      'Ultra-dense coverage eliminating indoor dead zones and signal attenuation',
      'Low-profile omnidirectional and directional ceiling dome antennas',
      'Seamless multi-operator handover between floors and building wings'
    ],
    specs: ['Bands: 700MHz - 3.8GHz (Sub-6GHz)', 'Low-PIM plenum rated cabling', 'iBwave certified modeling']
  },
  {
    id: 'outdoor-das',
    title: 'Outdoor DAS',
    description: 'Extend coverage to outdoor campuses, venues, and large properties.',
    image: '/das_outdoor.jpg',
    category: 'Campus & Exterior Wireless',
    details: [
      'High-power remote radio units (RRU) on stealth poles and utility masts',
      'Extended wireless range across corporate plazas and university quads',
      'Ruggedized NEMA-4X weatherproof enclosures with surge protection',
      'Fiber optic fronthaul and backhaul transport to central telecom hubs'
    ],
    specs: ['Outdoor IP67 / NEMA-4X rated', 'Macro-cellular signal coordination', 'Fiber fronthaul transport']
  },
  {
    id: 'public-safety-das',
    title: 'Public Safety DAS (ERRCS)',
    description: 'Support for first responders with code-compliant, mission-critical coverage.',
    image: '/das_public_safety.svg',
    category: 'First Responder Life Safety',
    details: [
      'Code-compliant Emergency Responder Radio Coverage Systems (ERRCS)',
      'High-gain 700/800 MHz and VHF/UHF Bi-Directional Amplifiers (BDA)',
      '24-hour battery backup systems with NEMA-4 fire-rated enclosures',
      'Direct coordination with local Fire Marshals & Authorities Having Jurisdiction (AHJ)'
    ],
    specs: ['NFPA 72 & 1221 compliant', 'IFC Section 510 certified', 'UL 2524 life-safety standard']
  },
  {
    id: 'rf-design-engineering',
    title: 'RF Design & Engineering',
    description: 'Site surveys, RF modeling and custom DAS design for optimal performance.',
    image: '/das_rf_design.svg',
    category: 'Engineering & Simulation',
    details: [
      'iBwave 3D RF propagation simulation and signal heat mapping',
      'Detailed link budget calculations and passive intermodulation (PIM) mitigation',
      'Donor antenna site surveys, spectrum sniffing, and signal triangulation',
      'Comprehensive schematic blueprints, bill of materials, and CAD as-builts'
    ],
    specs: ['iBwave Level 3 Certified Engineers', 'Comprehensive decibel loss budgeting', 'Precision CAD as-built drafting']
  },
  {
    id: 'cabling-infrastructure',
    title: 'Cabling & Infrastructure',
    description: 'Expert installation of fiber, coax, cable trays and supporting infrastructure.',
    image: '/projects_cta_cables_bg.webp',
    category: 'Physical Layer Transport',
    details: [
      'Low-PIM ½" and ⅞" corrugated coaxial Heliax hardline cabling',
      'Single-mode fiber optic risers and high-density MTP/MPO distribution',
      'Fire-rated plenum pathways, J-hooks, and seismic cable tray support',
      'Precision mechanical splicing, fusion terminations, and weather-proofing'
    ],
    specs: ['Low-PIM <-160 dBc ratings', 'NFPA 262 plenum fire safety', 'BICSI installation standards']
  },
  {
    id: 'system-testing-optimization',
    title: 'System Testing & Optimization',
    description: 'Commissioning, testing and optimization to ensure peak performance.',
    image: '/das_system_testing.svg',
    category: 'RF Validation & Commissioning',
    details: [
      '20-grid and 40-grid RF signal level testing per NFPA / IFC mandates',
      'Line sweeping (Return Loss, VSWR, Distance-to-Fault) validation',
      'PIM testing to guarantee zero carrier interference or noise floor rise',
      'Official AHJ submission reports and commissioning sign-off packages'
    ],
    specs: ['Anritsu Site Master certification', 'Keysight spectrum sweep testing', 'Full grid pass/fail documentation']
  },
  {
    id: 'multi-carrier-solutions',
    title: 'Multi-Carrier Solutions',
    description: 'Support for all major carriers and neutral host DAS systems.',
    image: '/das_multi_carrier.svg',
    category: 'Neutral Host & Operator Support',
    details: [
      'Carrier-neutral host architecture supporting Verizon, AT&T, T-Mobile & UScellular',
      'Direct base transceiver station (BTS) interface and carrier re-broadcasting',
      'Independent carrier gain adjustments and carrier-grade RF power combining',
      'Turnkey carrier approval coordination and retransmission consent filing'
    ],
    specs: ['Carrier-agnostic infrastructure', 'Supports 4G LTE, 5G Sub-6 & CBRS', 'Carrier NOC integration']
  },
  {
    id: 'large-venue-das',
    title: 'Large Venue DAS',
    description: 'High-capacity solutions for stadiums, arenas, convention centers and campuses.',
    image: '/industry_sports_entertainment.webp',
    category: 'Ultra High-Density Venues',
    details: [
      'Extreme high-density capacity engineering for 50,000+ simultaneous connections',
      'Sectorized RF zoning to prevent co-channel interference in crowded bowls',
      'Under-seat, catwalk, and handrail antenna deployments for discreet coverage',
      'Game-day real-time capacity management and active RF performance tuning'
    ],
    specs: ['Multi-sector RF distribution', 'Ultra-dense concurrent user capacity', 'Sub-millisecond handover']
  },
  {
    id: 'small-cell-integration',
    title: 'Small Cell Integration',
    description: 'Integration with small cell and hybrid DAS environments.',
    image: '/card_das_antenna.webp',
    category: 'Next-Gen Microcells',
    details: [
      'Cost-effective small cell deployments for targeted high-traffic hotspots',
      'Hybrid DAS and small cell architecture combining coverage and localized capacity',
      'Private 5G and OnGo / CBRS Band 48 microcell integrations',
      'PoE+ powered enterprise radio dots and digital distributed antenna units'
    ],
    specs: ['CBRS / Band 48 private cellular', 'Digital fiber-to-the-antenna (FTTA)', 'Low power consumption']
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Ongoing monitoring, support and system upgrades.',
    image: '/technician_vest.webp',
    category: 'Lifecycle Management',
    details: [
      '24/7/365 remote network monitoring (NOC) and alarm notification',
      'Annual mandated BDA battery runtime audits and RF re-certification',
      'Rapid on-site emergency dispatch with replacement modules in stock',
      'Continuous carrier band upgrades and 5G technology migration paths'
    ],
    specs: ['SLA-backed rapid dispatch', 'Annual AHJ compliance audit', 'Remote telemetry monitoring']
  }
];

const keyBenefitsList = [
  'Improved Indoor & Outdoor Coverage',
  'Enhanced Public Safety Communication',
  'Supports 4G, 5G and Future Technologies',
  'Custom Solutions for Any Environment',
  'Carrier Neutral & Multi-Carrier Support',
  'Code Compliant (NFPA, IFC, UL, FCC)',
  'Scalable for Single or Multi-Site Locations',
  'Ongoing Optimization & Support'
];

const processStepsList = [
  {
    number: '1',
    title: 'Consultation',
    subtitle: 'Understand your needs'
  },
  {
    number: '2',
    title: 'Site Survey & RF Analysis',
    subtitle: 'Evaluate and design'
  },
  {
    number: '3',
    title: 'Installation',
    subtitle: 'Professional deployment'
  },
  {
    number: '4',
    title: 'Testing & Commissioning',
    subtitle: 'Validate performance'
  },
  {
    number: '5',
    title: 'Support',
    subtitle: 'Ongoing maintenance'
  }
];

const industriesList = [
  {
    name: 'Commercial Real Estate',
    icon: <Building2 size={24} strokeWidth={2} />,
    industryId: 'commercial'
  },
  {
    name: 'Healthcare',
    icon: <HeartPulse size={24} strokeWidth={2} />,
    industryId: 'healthcare'
  },
  {
    name: 'Education',
    icon: <GraduationCap size={24} strokeWidth={2} />,
    industryId: 'education'
  },
  {
    name: 'Hospitality',
    icon: <Hotel size={24} strokeWidth={2} />,
    industryId: 'hospitality'
  },
  {
    name: 'Retail',
    icon: <ShoppingCart size={24} strokeWidth={2} />,
    industryId: 'retail'
  },
  {
    name: 'Industrial',
    icon: <Factory size={24} strokeWidth={2} />,
    industryId: 'industrial'
  },
  {
    name: 'Government',
    icon: <Landmark size={24} strokeWidth={2} />,
    industryId: 'government'
  },
  {
    name: 'Transportation',
    icon: <Train size={24} strokeWidth={2} />,
    industryId: 'transportation'
  },
  {
    name: 'Aviation',
    icon: <Plane size={24} strokeWidth={2} />,
    industryId: 'transportation'
  },
  {
    name: 'Stadiums & Venues',
    icon: <Trophy size={24} strokeWidth={2} />,
    industryId: 'sports-entertainment'
  },
  {
    name: 'Multi-Site Enterprises',
    icon: <Network size={24} strokeWidth={2} />,
    industryId: 'enterprise'
  }
];

export const DASPage: React.FC<DASPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [selectedService, setSelectedService] = useState<DASServiceCard | null>(null);

  const handleDownloadBrochure = () => {
    onOpenQuote('DAS (Distributed Antenna Systems) Brochure & Engineering Specs');
  };

  const handleScrollToSolutions = () => {
    const el = document.getElementById('das-services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="das-page-root">
      {/* 1. HERO SECTION */}
      <section id="das-hero" className="das-hero-section">
        {/* Background Image Container */}
        <div className="das-hero-bg-wrapper">
          <img
            src="/das_hero_bg.jpg"
            alt="Modern Commercial Atrium with DAS Omni Dome Antenna"
            className="das-hero-bg-img"
          />
          <div className="das-hero-gradient-overlay" />
        </div>

        <div className="das-hero-container">
          <div className="das-hero-inner">
            {/* Left Content Area */}
            <div className="das-hero-content">
              {/* Breadcrumb Navigation */}
              <nav className="das-breadcrumbs" aria-label="Breadcrumb">
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="das-breadcrumb-link"
                >
                  Home
                </button>
                <ChevronRight size={13} className="das-breadcrumb-separator" />
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="das-breadcrumb-link"
                >
                  Services
                </button>
                <ChevronRight size={13} className="das-breadcrumb-separator" />
                <span className="das-breadcrumb-current">
                  Distributed Antenna Systems (DAS)
                </span>
              </nav>

              {/* Eyebrow Pill */}
              <div className="das-hero-eyebrow">
                DISTRIBUTED ANTENNA SYSTEMS (DAS)
              </div>

              {/* Main Headline */}
              <h1 className="das-hero-title">
                STRONGER COVERAGE.<br />
                A MORE CONNECTED<br />
                <span className="das-hero-title-highlight">TOMORROW.</span>
              </h1>

              {/* Paragraph Description */}
              <p className="das-hero-desc">
                In-building and outdoor DAS solutions that deliver reliable cellular coverage,
                enhance public safety communications, and keep people connected — everywhere they go.
              </p>

              {/* 4 Feature Badges / Highlights */}
              <div className="das-hero-features-grid">
                <div className="das-feature-item">
                  <div className="das-feature-icon-wrap">
                    <Radio size={20} strokeWidth={2.2} />
                  </div>
                  <span className="das-feature-label">Reliable Coverage</span>
                </div>

                <div className="das-feature-item">
                  <div className="das-feature-icon-wrap">
                    <Users size={20} strokeWidth={2.2} />
                  </div>
                  <span className="das-feature-label">Supports Public Safety</span>
                </div>

                <div className="das-feature-item">
                  <div className="das-feature-icon-wrap">
                    <BarChart3 size={20} strokeWidth={2.2} />
                  </div>
                  <span className="das-feature-label">Scalable Solutions</span>
                </div>

                <div className="das-feature-item">
                  <div className="das-feature-icon-wrap">
                    <ShieldCheck size={20} strokeWidth={2.2} />
                  </div>
                  <span className="das-feature-label">Carrier Agnostic</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="das-hero-actions">
                <button
                  type="button"
                  onClick={() => onOpenQuote('DAS - Distributed Antenna Systems')}
                  className="das-btn-primary"
                >
                  <span>TALK TO A DAS EXPERT</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleScrollToSolutions}
                  className="das-btn-secondary"
                >
                  <span>VIEW OUR SOLUTIONS</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Side Vertical Corporate Brand Banner */}
            <div className="das-hero-right-banner">
              <div className="das-hero-pillar-box">
                <div className="das-pillar-keywords">
                  <span className="das-keyword">CONNECTING</span>
                  <span className="das-keyword">PEOPLE</span>
                  <span className="das-keyword">PLACES</span>
                  <span className="das-keyword">POSSIBILITIES</span>
                </div>
                <div className="das-pillar-accent-line" />
                <div className="das-pillar-subtext">
                  BETTER COVERAGE.<br />
                  SAFER BUILDINGS.<br />
                  STRONGER COMMUNITIES.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE DAS SERVICES (OUR DAS SOLUTIONS) */}
      <section id="das-services-section" className="das-services-section">
        <div className="das-container">
          {/* Section Header */}
          <div className="das-section-header-row">
            <div className="das-section-header-left">
              <div className="das-section-eyebrow">
                <span className="das-eyebrow-dash">—</span>
                <span>OUR DAS SOLUTIONS</span>
              </div>
              <h2 className="das-section-title">Complete DAS Services.</h2>
              <p className="das-section-subtitle">
                From design and engineering to installation and optimization, Smart-Links
                delivers end-to-end DAS solutions for commercial, industrial, and public safety environments.
              </p>
            </div>
            <div className="das-section-header-right">
              <button
                type="button"
                onClick={handleDownloadBrochure}
                className="das-download-brochure-btn"
              >
                <span>DOWNLOAD DAS BROCHURE</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* 10 Services 5x2 Grid */}
          <div className="das-services-grid">
            {dasServicesList.map((service) => (
              <div
                key={service.id}
                className="das-card"
                onClick={() => setSelectedService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedService(service);
                  }
                }}
              >
                {/* Image Container */}
                <div className="das-card-image-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="das-card-img"
                    loading="lazy"
                  />
                  <div className="das-card-image-overlay" />
                </div>

                {/* Card Body */}
                <div className="das-card-body">
                  <h3 className="das-card-title">{service.title}</h3>
                  <p className="das-card-desc">{service.description}</p>

                  <div className="das-card-footer">
                    <button
                      type="button"
                      className="das-card-arrow-btn"
                      aria-label={`View details for ${service.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                    >
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY SMART-LINKS & KEY BENEFITS (SPLIT SECTION) */}
      <section className="das-trust-benefits-section">
        <div className="das-container">
          <div className="das-trust-split-grid">
            {/* Left Column: Why Smart-Links */}
            <div className="das-trust-left-col">
              <div className="das-section-eyebrow">
                <span className="das-eyebrow-dash">—</span>
                <span>WHY SMART-LINKS</span>
              </div>
              <h2 className="das-trust-heading">DAS Expertise You Can Trust.</h2>
              <p className="das-trust-desc">
                We deliver high-performance DAS solutions that improve connectivity,
                enhance safety, and support your business operations with minimal disruption.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="das-trust-features-grid">
                <div className="das-trust-item">
                  <div className="das-trust-icon-box">
                    <ShieldCheck size={26} strokeWidth={2.2} />
                  </div>
                  <span className="das-trust-item-title">Certified Professionals</span>
                </div>

                <div className="das-trust-item">
                  <div className="das-trust-icon-box">
                    <Cpu size={26} strokeWidth={2.2} />
                  </div>
                  <span className="das-trust-item-title">Industry-Leading Technology</span>
                </div>

                <div className="das-trust-item">
                  <div className="das-trust-icon-box">
                    <BarChart3 size={26} strokeWidth={2.2} />
                  </div>
                  <span className="das-trust-item-title">Scalable Infrastructure</span>
                </div>

                <div className="das-trust-item">
                  <div className="das-trust-icon-box">
                    <Users size={26} strokeWidth={2.2} />
                  </div>
                  <span className="das-trust-item-title">End-to-End Support</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="das-split-divider" />

            {/* Right Column: Key Benefits */}
            <div className="das-benefits-right-col">
              <h3 className="das-benefits-heading">KEY BENEFITS</h3>
              <ul className="das-benefits-list">
                {keyBenefitsList.map((benefit, idx) => (
                  <li key={idx} className="das-benefit-list-item">
                    <div className="das-benefit-check-icon">
                      <CheckCircle2 size={19} strokeWidth={2.4} />
                    </div>
                    <span className="das-benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section className="das-process-section">
        <div className="das-container">
          <div className="das-process-header">
            <div className="das-section-eyebrow">
              <span className="das-eyebrow-dash">—</span>
              <span>OUR PROCESS</span>
            </div>
            <h2 className="das-section-title">From Design to Ongoing Performance.</h2>
          </div>

          <div className="das-process-flow-track">
            {processStepsList.map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="das-process-step-node">
                  <div className="das-process-num-circle">
                    <span>{step.number}</span>
                  </div>
                  <div className="das-process-step-info">
                    <h4 className="das-process-step-title">{step.title}</h4>
                    <p className="das-process-step-subtitle">{step.subtitle}</p>
                  </div>
                </div>

                {idx < processStepsList.length - 1 && (
                  <div className="das-process-step-arrow" aria-hidden="true">
                    <ChevronRight size={18} strokeWidth={2} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="das-industries-section">
        <div className="das-container">
          <div className="das-industries-header">
            <div className="das-section-eyebrow">
              <span className="das-eyebrow-dash">—</span>
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="das-section-title">DAS Solutions for Every Environment.</h2>
          </div>

          <div className="das-industries-row">
            {industriesList.map((ind, idx) => (
              <div
                key={idx}
                className="das-industry-pill-card"
                onClick={() => {
                  onNavigate('industry-detail', ind.industryId);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onNavigate('industry-detail', ind.industryId);
                  }
                }}
              >
                <div className="das-industry-icon-circle">
                  {ind.icon}
                </div>
                <span className="das-industry-name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER SECTION */}
      <section className="das-cta-banner-section">
        {/* Background Image & Overlay */}
        <div className="das-cta-bg-wrapper">
          <img
            src="/services_bottom_cta_skyline.webp"
            alt="Night Skyline Connectivity Infrastructure"
            className="das-cta-bg-img"
          />
          <div className="das-cta-gradient-overlay" />
        </div>

        <div className="das-container">
          <div className="das-cta-inner">
            <div className="das-cta-left">
              <div className="das-cta-eyebrow">
                LET'S BUILD A MORE CONNECTED TOMORROW
              </div>
              <h2 className="das-cta-heading">Ready to Discuss Your DAS Project?</h2>
              <p className="das-cta-desc">
                Talk to our team about your coverage and connectivity requirements.
              </p>
              <div className="das-cta-btn-group">
                <button
                  type="button"
                  onClick={() => onOpenQuote('DAS - Ready to Discuss Project')}
                  className="das-btn-primary"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuote('Talk to a DAS Specialist')}
                  className="das-btn-secondary"
                >
                  <span>TALK TO A DAS SPECIALIST</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="das-cta-right">
              <div className="das-cta-pillar-words">
                <span>PEOPLE</span>
                <span>PLACES</span>
                <span>POSSIBILITIES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE DETAIL MODAL */}
      {selectedService && (
        <div className="das-modal-overlay" onClick={() => setSelectedService(null)}>
          <div
            className="das-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="das-modal-close-btn"
              onClick={() => setSelectedService(null)}
              aria-label="Close dialog"
            >
              &times;
            </button>

            <div className="das-modal-header-hero">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="das-modal-hero-img"
              />
              <div className="das-modal-hero-overlay" />
              <div className="das-modal-hero-caption">
                <span className="das-modal-category-tag">{selectedService.category}</span>
                <h3 className="das-modal-title">{selectedService.title}</h3>
              </div>
            </div>

            <div className="das-modal-body">
              <p className="das-modal-desc">{selectedService.description}</p>

              {selectedService.details && (
                <div className="das-modal-block">
                  <h4 className="das-modal-subtitle">Service Deliverables & Capabilities</h4>
                  <ul className="das-modal-list">
                    {selectedService.details.map((item, i) => (
                      <li key={i}>
                        <Check size={16} className="das-modal-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedService.specs && (
                <div className="das-modal-block">
                  <h4 className="das-modal-subtitle">Technical Specifications & Standards</h4>
                  <div className="das-modal-specs-wrap">
                    {selectedService.specs.map((spec, i) => (
                      <span key={i} className="das-spec-chip">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="das-modal-actions">
                <button
                  type="button"
                  onClick={() => {
                    const svcName = selectedService.title;
                    setSelectedService(null);
                    onOpenQuote(`DAS Solution: ${svcName}`);
                  }}
                  className="das-modal-cta-btn"
                >
                  <span>Request a Quote for {selectedService.title}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
