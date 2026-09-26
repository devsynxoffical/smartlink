import React, { useState } from 'react';
import type { NavTab } from '../types';
import {
  Network,
  ShieldCheck,
  Cpu,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShoppingCart,
  Landmark,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Factory,
  Check,
  Building,
  Server
} from 'lucide-react';

interface StructuredCablingPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

interface CablingServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
  specs?: string[];
}

const cablingServicesList: CablingServiceCard[] = [
  {
    id: 'cat6a-cabling',
    title: 'Cat5e, Cat6 & Cat6A Cabling',
    description: 'High-speed horizontal copper cabling engineered for multi-gigabit throughput.',
    image: '/cabling_cat6a.webp',
    category: 'Horizontal Copper Infrastructure',
    details: [
      'Certified Category 6 & 6A (UTP & STP) installations supporting 10 Gbps Ethernet up to 100 meters',
      'Advanced Alien Crosstalk (AXT) suppression and superior signal-to-noise ratio in dense runs',
      'PoE++ (IEEE 802.3bt Type 4, 90W) compatibility for high-power access points and PTZ cameras',
      'CMP plenum-rated and CMR riser-rated jacket deployments adhering strictly to NFPA safety standards'
    ],
    specs: ['Cat6A 10Gbps @ 100m', 'PoE++ (Type 4, 90W)', 'Plenum & Riser Rated', 'Zero-AXT Suppression']
  },
  {
    id: 'copper-backbone',
    title: 'Copper Backbone & Riser',
    description: 'Multi-pair backbone distribution connecting MDF, IDF, and telecommunication rooms.',
    image: '/cabling_backbone.webp',
    category: 'Backbone & Riser Pathways',
    details: [
      '25, 50, and 100-pair Category 3/5e copper riser backbone distribution between telecom closets',
      'High-pair 110-block cross-connect terminations with organized wire dressing and labeling',
      'Inter-building underground conduit routing with heavy-duty lightning and surge protection',
      'UL-listed intumescent fire-stop sleeve penetrations through floor slabs and fire barrier walls'
    ],
    specs: ['25-100 Pair ARMM/CMR', '110 Block Cross-Connects', 'Lightning Surge Protected', 'UL Fire-Stop Sleeves']
  },
  {
    id: 'patch-panels',
    title: 'Patch Panels & Dressing',
    description: 'Flawless cable dressing, horizontal/vertical wire managers, and high-density panels.',
    image: '/web/02-structured-cabling/01-patch-panels-dressing.jpg',
    category: 'Rack Cable Organization',
    details: [
      '1U/2U 24-port and 48-port angled and flat high-density Category 6A modular patch panels',
      'Flawless comb dressing and hook-and-loop velcro bundling with zero zip-tie compression stress',
      'Comprehensive ANSI/TIA-606-B drop-to-patch labeling and laminated rack elevation schematics',
      'Integrated rear cable strain relief bars preventing port fatigue and disconnects'
    ],
    specs: ['24/48 Port 1U/2U High-Density', 'Zero-Stress Velcro Dressing', 'ANSI/TIA-606-B Labeling', 'Rear Strain Relief Bars']
  },
  {
    id: 'pathways-raceways',
    title: 'Cable Trays & Pathways',
    description: 'Seismic-rated basket trays, ladder racks, and surface raceways for organized runs.',
    image: '/web/02-structured-cabling/02-cable-trays-pathways.jpg',
    category: 'Pathway Routing & Rigging',
    details: [
      'Overhead wire mesh basket trays and tubular steel ladder racks engineered for high load capacities',
      'Seismic Zone 4 sway bracing, trapeze supports, and seismic wall penetrations',
      'Radius drop-out waterfall guides protecting copper and optical cables from bend radius pinching',
      'Architectural surface latching raceways for aesthetic retrofits in executive suites and historic buildings'
    ],
    specs: ['Wire Mesh Basket Trays', 'Seismic Zone 4 Bracing', 'Radius Waterfall Guides', 'Architectural Raceways']
  },
  {
    id: 'fluke-certification',
    title: 'Fluke Certification & Testing',
    description: '100% channel and permanent link verification with Fluke DSX-8000 analyzers.',
    image: '/cabling_fluke_testing.webp',
    category: 'Level 2G Tier Certification',
    details: [
      '100% permanent link and channel verification testing with calibrated Fluke DSX-8000 analyzers',
      'Level 2G / 2000MHz diagnostic sweeps: NEXT, Return Loss, Delay Skew, Resistance Unbalance',
      'Comprehensive exportable LinkWare software test report packages with individual drop graphs',
      'Mandatory qualification testing required for manufacturer 20 to 25-year application warranties'
    ],
    specs: ['Fluke DSX-8000 2000MHz', '100% Pass/Fail Channel Tests', 'LinkWare PDF Deliverables', '25-Year Warranty Backed']
  },
  {
    id: 'mdf-idf-buildouts',
    title: 'MDF & IDF Buildouts',
    description: 'Turnkey telecom closet construction including 2/4-post racks and environmental control.',
    image: '/cabling_mdf_idf.webp',
    category: 'Telecom Closet Engineering',
    details: [
      'Complete buildout of Main and Intermediate Distribution Frames (MDF/IDF) to BICSI TDMM standards',
      'Installation of 42U/48U 2-post and 4-post open frame racks, swing-out wall cabinets, and vertical ducts',
      'Telecommunications Grounding Busbar (TGB/TMGB) bonding to ANSI/TIA-607-C standards',
      'Dedicated smart PDU power provisioning, thermal monitoring sensors, and biometric door access'
    ],
    specs: ['BICSI TDMM Standards', '42U Racks & Wall Enclosures', 'TIA-607-C TGB Grounding', 'Thermal & PDU Integration']
  },
  {
    id: 'av-systems',
    title: 'Low Voltage AV Cabling',
    description: 'Specialized low-voltage cabling for boardroom AV, paging, background audio, and displays.',
    image: '/web/02-structured-cabling/03-low-voltage-av-cabling.jpg',
    category: 'Audio/Visual Low Voltage',
    details: [
      'HDBaseT 4K HDMI uncompressed video and control extension over Category 6A shielded cabling',
      '70V and 100V distributed commercial audio lines, ceiling speaker arrays, and paging systems',
      'Conference room table pop-up boxes with motorized retractable HDMI, USB-C, and network drops',
      'Direct-burial and plenum-rated low-voltage wiring for outdoor sound and digital menu boards'
    ],
    specs: ['HDBaseT 4K Over Cat6A', '70V/100V Commercial Audio', 'Conference Table Pop-ups', 'Digital Signage Cabling']
  },
  {
    id: 'industrial-cabling',
    title: 'Industrial & Plant Cabling',
    description: 'Ruggedized, shielded cabling resistant to oil, extreme temperatures, and heavy EMI.',
    image: '/web/02-structured-cabling/04-industrial-plant-cabling.jpg',
    category: 'Harsh Environment Industrial',
    details: [
      'Industrial-grade Shielded/Foil Twisted Pair (SF/UTP) cabling designed to eliminate machine motor EMI',
      'Continuous flex robotic-rated and oil/chemical-resistant polyurethane jackets',
      'IP67 and NEMA 4X sealed RJ45 connectivity and sealed stainless steel faceplates',
      'Heavy-wall rigid steel conduit and liquid-tight flexible metallic conduit drops on plant floors'
    ],
    specs: ['Industrial SF/UTP Shielded', 'IP67 / NEMA 4X Sealed', 'Heavy EMI Noise Immunity', 'Chemical & Oil Resistant']
  },
  {
    id: 'macs-support',
    title: 'Moves, Adds & Changes (MACs)',
    description: 'Agile day-two cabling modifications, drop additions, and office reconfiguration support.',
    image: '/web/02-structured-cabling/05-moves-adds-changes.jpg',
    category: 'Day-Two MAC Support',
    details: [
      'Rapid-response field dispatch for office workstation relocations, expansions, and cubicle reconfigurations',
      'Abandoned cable removal and abatement ensuring strict compliance with NEC National Electrical Code',
      'Immediate tone tracing, port re-patching, and drop additions with certified Fluke testing',
      'Ongoing CAD as-built updates and drop schedule record maintenance'
    ],
    specs: ['Fast SLA Dispatch Crews', 'After-Hours Scheduling', 'NEC Cable Abatement', 'As-Built CAD Updates']
  },
  {
    id: 'datacenter-cabling',
    title: 'Data Center Cabling Architecture',
    description: 'High-density top-of-rack (ToR) and end-of-row (EoR) structured cabling solutions.',
    image: '/web/02-structured-cabling/06-data-center-cabling-architecture.jpg',
    category: 'Mission-Critical Data Centers',
    details: [
      'High-density Top-of-Rack (ToR), End-of-Row (EoR), and Middle-of-Row (MoR) cabling topologies',
      'Pre-terminated copper trunk bundles and MPO/MTP multi-fiber trunk integrations',
      'Hot and cold aisle containment wire management preventing airflow blockage and hot spots',
      'Dual A/B path redundant fabric routing with color-coded high-flex patch assemblies'
    ],
    specs: ['TIA-942 Tier I-IV Compliant', 'Pre-Terminated Trunks', 'Containment Integration', 'Dual A/B Color Fabrics']
  }
];

const cablingKeyBenefitsList = [
  'Ultra-High Bandwidth (Supports 10G/40G Multi-Gigabit Ethernet)',
  '100% Verified with Fluke DSX-8000 Tier-2 Test Certifications',
  'PoE++ (Type 4, 90W) Power Capability for APs, Cameras & Smart Lighting',
  'Flawless Cable Dressing & Color-Coded Port Mapping',
  'ANSI/TIA-568.2-D, ISO/IEC 11801 & BICSI Compliance',
  'Comprehensive As-Built CAD Documentation & Drop Schedules',
  'Direct Partner 20 to 25-Year Manufacturer Application Warranties',
  'Full Nationwide Turnkey Deployment & Rapid MAC Support'
];

const cablingProcessStepsList = [
  {
    number: '1',
    title: 'Site Survey',
    subtitle: 'Detailed pathway modeling & drop mapping'
  },
  {
    number: '2',
    title: 'Design & Planning',
    subtitle: 'Custom conduit, tray & rack engineering'
  },
  {
    number: '3',
    title: 'Installation',
    subtitle: 'Precision cable pulls, termination & dressing'
  },
  {
    number: '4',
    title: 'Fluke Testing',
    subtitle: '100% channel certification & test reports'
  },
  {
    number: '5',
    title: 'Ongoing Support',
    subtitle: 'MAC support, warranty & SLA coverage'
  }
];

const cablingIndustriesList = [
  {
    name: 'Commercial Real Estate',
    icon: <Building2 size={22} strokeWidth={2.2} />,
    industryId: 'commercial'
  },
  {
    name: 'Data Centers',
    icon: <Server size={22} strokeWidth={2.2} />,
    industryId: 'industrial'
  },
  {
    name: 'Financial Institutions',
    icon: <Landmark size={22} strokeWidth={2.2} />,
    industryId: 'commercial'
  },
  {
    name: 'Healthcare',
    icon: <HeartPulse size={22} strokeWidth={2.2} />,
    industryId: 'healthcare'
  },
  {
    name: 'Education',
    icon: <GraduationCap size={22} strokeWidth={2.2} />,
    industryId: 'education'
  },
  {
    name: 'Government',
    icon: <Building size={22} strokeWidth={2.2} />,
    industryId: 'government'
  },
  {
    name: 'Retail',
    icon: <ShoppingCart size={22} strokeWidth={2.2} />,
    industryId: 'retail'
  },
  {
    name: 'Industrial',
    icon: <Factory size={22} strokeWidth={2.2} />,
    industryId: 'industrial'
  },
  {
    name: 'Hospitality',
    icon: <Hotel size={22} strokeWidth={2.2} />,
    industryId: 'hospitality'
  },
  {
    name: 'Multi-Site Enterprises',
    icon: <Network size={22} strokeWidth={2.2} />,
    industryId: 'enterprise'
  }
];

export const StructuredCablingPage: React.FC<StructuredCablingPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [selectedService, setSelectedService] = useState<CablingServiceCard | null>(null);

  const handleDownloadBrochure = () => {
    onOpenQuote('Structured Cabling Solutions Brochure & Design Guide');
  };

  return (
    <div className="access-page-root">
      {/* 1. HERO SECTION */}
      <section id="cabling-hero" className="access-hero-section">
        {/* Background Image Container */}
        <div className="access-hero-bg-wrapper">
          <img
            src="/cabling_hero_bg.webp"
            alt="Structured Cabling Infrastructure and High Speed Copper Cables"
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
                <span className="access-breadcrumb-current">Structured Cabling</span>
              </nav>

              {/* Eyebrow */}
              <div className="access-hero-eyebrow">
                STRUCTURED CABLING INFRASTRUCTURE
              </div>

              {/* Main Headline */}
              <h1 className="access-hero-title">
                SOLID FOUNDATIONS.<br />
                CREATE <span className="access-hero-title-highlight">CONNECTED SPACES.</span>
              </h1>

              {/* Subtitle */}
              <p className="access-hero-desc">
                High-performance copper and fiber structured cabling systems engineered to power your data,
                voice, and wireless networks with zero bottleneck.
              </p>

              {/* 4 Feature Badges */}
              <div className="access-hero-features-grid">
                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <Network size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">High Bandwidth</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <ShieldCheck size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Certified Standards</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <BarChart3 size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Scalable for Growth</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <Users size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">25-Year Warranty</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="access-hero-actions">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Structured Cabling - Talk to an Expert')}
                  className="access-btn-primary"
                >
                  <span>TALK TO A CABLING EXPERT</span>
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
                  ENGINEERED TODAY.<br />
                  MAXIMUM PERFORMANCE.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE STRUCTURED CABLING SYSTEMS (10 CARDS GRID) */}
      <section id="cabling-services-section" className="access-services-section">
        <div className="access-container">
          {/* Section Header */}
          <div className="access-section-header-row">
            <div className="access-section-header-left">
              <div className="access-section-eyebrow">
                <span className="access-eyebrow-dash">—</span>
                <span>OUR STRUCTURED CABLING SOLUTIONS</span>
              </div>
              <h2 className="access-section-title">Complete Structured Cabling Systems.</h2>
              <p className="access-section-subtitle">
                From single-office workstation drops to multi-floor enterprise campus backbones, Smart-Links delivers reliable,
                future-ready cabling infrastructure tailored to your exact facility and speed requirements.
              </p>
            </div>
            <div className="access-section-header-right">
              <button
                type="button"
                onClick={handleDownloadBrochure}
                className="access-download-brochure-btn"
              >
                <span>DOWNLOAD BROCHURE</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* 10 Services 5x2 Grid */}
          <div className="access-services-grid">
            {cablingServicesList.map((service) => (
              <div
                key={service.id}
                className="access-card"
                onClick={() => setSelectedService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedService(service);
                  }
                }}
              >
                {/* Image Wrap */}
                <div className="access-card-image-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="access-card-img"
                    loading="lazy"
                  />
                  <div className="access-card-image-overlay" />
                </div>

                {/* Card Body */}
                <div className="access-card-body">
                  <h3 className="access-card-title">{service.title}</h3>
                  <p className="access-card-desc">{service.description}</p>

                  <div className="access-card-footer">
                    <button
                      type="button"
                      className="access-card-arrow-btn"
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

      {/* 3. WHY SMART-LINKS & KEY BENEFITS (LIGHT BLUE BACKGROUND) */}
      <section className="access-trust-benefits-section">
        <div className="access-container">
          <div className="access-trust-split-grid">
            {/* Left Column: Why Smart-Links */}
            <div className="access-trust-left-col">
              <div className="access-section-eyebrow">
                <span className="access-eyebrow-dash">—</span>
                <span>WHY SMART-LINKS</span>
              </div>
              <h2 className="access-trust-heading">Structured Cabling That Works for You.</h2>
              <p className="access-trust-desc">
                We engineer, install, and certify high-density cabling systems that optimize signal integrity,
                eliminate cross-talk, streamline telecom closets, and provide decades of peace of mind.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="access-trust-features-grid">
                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <ShieldCheck size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Certified RCDDs</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <Cpu size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Custom Pathways</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <BarChart3 size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">High-Density Scaling</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <Users size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">25-Year Warranty</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="access-split-divider" />

            {/* Right Column: Key Benefits */}
            <div className="access-benefits-right-col">
              <h3 className="access-benefits-heading">KEY BENEFITS</h3>
              <ul className="access-benefits-list">
                {cablingKeyBenefitsList.map((benefit, idx) => (
                  <li key={idx} className="access-benefit-list-item">
                    <div className="access-benefit-check-icon">
                      <CheckCircle2 size={19} strokeWidth={2.4} />
                    </div>
                    <span className="access-benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS (SEAMLESS ATTACHED WHITE BACKGROUND) */}
      <section className="access-process-section">
        <div className="access-container">
          <div className="access-process-header">
            <div className="access-section-eyebrow">
              <span className="access-eyebrow-dash">—</span>
              <span>OUR PROCESS</span>
            </div>
            <h2 className="access-section-title">From Assessment to Ongoing Support.</h2>
          </div>

          <div className="access-process-flow-track">
            {cablingProcessStepsList.map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="access-process-step-node">
                  <div className="access-process-num-circle">
                    <span>{step.number}</span>
                  </div>
                  <div className="access-process-step-info">
                    <h4 className="access-process-step-title">{step.title}</h4>
                    <p className="access-process-step-subtitle">{step.subtitle}</p>
                  </div>
                </div>

                {idx < cablingProcessStepsList.length - 1 && (
                  <div className="access-process-step-arrow" aria-hidden="true">
                    <ChevronRight size={18} strokeWidth={2} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE (ATTACHED WITH COMPACT SPACING) */}
      <section className="access-industries-section">
        <div className="access-container">
          <div className="access-industries-header">
            <div className="access-section-eyebrow">
              <span className="access-eyebrow-dash">—</span>
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="access-section-title">Structured Cabling for Any Environment.</h2>
          </div>

          <div className="access-industries-row">
            {cablingIndustriesList.map((ind, idx) => (
              <div
                key={idx}
                className="access-industry-pill-card"
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
                <div className="access-industry-icon-circle">
                  {ind.icon}
                </div>
                <span className="access-industry-name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER SECTION */}
      <section className="access-cta-banner-section">
        {/* Background Image & Overlay */}
        <div className="access-cta-bg-wrapper">
          <img
            src="/cabling_cta_bg.webp"
            alt="Structured Cabling Infrastructure Deployment"
            className="access-cta-bg-img"
          />
          <div className="access-cta-gradient-overlay" />
        </div>

        <div className="access-container">
          <div className="access-cta-inner">
            <div className="access-cta-left">
              <div className="access-cta-eyebrow">
                READY FOR A MORE CONNECTED TOMORROW?
              </div>
              <h2 className="access-cta-heading">Let's Build Your Structured Cabling Solution.</h2>
              <p className="access-cta-desc">
                Talk to our certified BICSI RCDD engineers today about your multi-pair copper and fiber design requirements.
              </p>
              <div className="access-cta-btn-group">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Structured Cabling - Get a Quote')}
                  className="access-btn-primary"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuote('Talk to a Cabling Specialist')}
                  className="access-btn-secondary"
                >
                  <span>TALK TO A SPECIALIST</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="access-cta-right">
              <div className="access-cta-pillar-words">
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
        <div className="access-modal-overlay" onClick={() => setSelectedService(null)}>
          <div
            className="access-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="access-modal-close-btn"
              onClick={() => setSelectedService(null)}
              aria-label="Close dialog"
            >
              &times;
            </button>

            <div className="access-modal-header-hero">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="access-modal-hero-img"
              />
              <div className="access-modal-hero-overlay" />
              <div className="access-modal-hero-caption">
                <span className="access-modal-category-tag">{selectedService.category}</span>
                <h3 className="access-modal-title">{selectedService.title}</h3>
              </div>
            </div>

            <div className="access-modal-body">
              <p className="access-modal-desc">{selectedService.description}</p>

              {selectedService.details && (
                <div className="access-modal-block">
                  <h4 className="access-modal-subtitle">Service Deliverables & Capabilities</h4>
                  <ul className="access-modal-list">
                    {selectedService.details.map((item, i) => (
                      <li key={i}>
                        <Check size={16} className="access-modal-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedService.specs && (
                <div className="access-modal-block">
                  <h4 className="access-modal-subtitle">Technical Specifications & Standards</h4>
                  <div className="access-modal-specs-wrap">
                    {selectedService.specs.map((spec, i) => (
                      <span key={i} className="access-spec-chip">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="access-modal-actions">
                <button
                  type="button"
                  onClick={() => {
                    const svcName = selectedService.title;
                    setSelectedService(null);
                    onOpenQuote(`Structured Cabling Solution: ${svcName}`);
                  }}
                  className="access-modal-cta-btn"
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
