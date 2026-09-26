import React, { useState } from 'react';
import type { NavTab } from '../types';
import {
  Server,
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
  Network,
  Check,
  Building,
  Wifi
} from 'lucide-react';

interface ITSolutionsPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

interface ITServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
  specs?: string[];
}

const itServicesList: ITServiceCard[] = [
  {
    id: 'server-racks',
    title: 'Server Rack & Cabinet Setup',
    description: '42U/48U rack assembly, vertical wire routing, and seismic anchoring.',
    image: '/it_server_racks.webp',
    category: 'Rack Engineering & Architecture',
    details: [
      'Precision installation of 42U/48U server enclosures and 2-post/4-post open frame racks',
      'High-capacity vertical and horizontal finger-duct cable managers for clean patch routing',
      'Seismic Zone 4 floor anchoring, overhead ladder rack tie-ins, and anti-tip stabilization',
      'Perforated curved mesh doors providing 80%+ open airflow for thermal optimization'
    ],
    specs: ['42U/48U 19" EIA Standard', 'Seismic Zone 4 Rated', '80%+ Mesh Ventilation', 'Integrated Busbars']
  },
  {
    id: 'network-switching',
    title: 'Enterprise Switching & Routing',
    description: 'Core, distribution, and access layer switch installation and VLAN staging.',
    image: '/it_network_switching.webp',
    category: 'Core & Edge Network Hardware',
    details: [
      'Deployment and stacking of enterprise multi-gigabit PoE++ access and core switches',
      '10G / 40G / 100G optical uplink connectivity to datacenter spine and aggregation switches',
      'Out-of-band console server management cabling and dual hot-swappable power supplies',
      'Pre-configuration staging: VLAN provisioning, port security, STP, and LACP link aggregation'
    ],
    specs: ['10G/40G/100G Uplinks', 'Multi-Gig PoE++ (90W)', 'Dual Redundant Power', 'LACP & MLAG Stacking']
  },
  {
    id: 'wifi-surveys',
    title: 'High-Density Wi-Fi 6E / 7',
    description: 'Ekahau RF 3D predictive heatmaps, access point mounting, and spectrum tuning.',
    image: '/it_wifi_wireless.webp',
    category: 'Enterprise Wireless Networks',
    details: [
      'Comprehensive Ekahau Sidekick II active, passive, and spectrum RF site surveys',
      '3D predictive predictive propagation heatmaps ensuring zero dead zones and high SNR',
      'Tri-band 2.4 GHz, 5 GHz, and 6 GHz spectrum channel allocation and power tuning',
      'Clean ceiling tile grid mounting, wall bracket placement, and concealed Cat6A cabling'
    ],
    specs: ['Wi-Fi 6E & 7 (802.11be)', 'Ekahau Sidekick II Surveys', 'Tri-Band 6GHz Spectrum', 'High-Density Roaming']
  },
  {
    id: 'pdu-power',
    title: 'Smart PDU & Power Metering',
    description: 'Switched and metered rack PDUs for remote outlet rebooting and power monitoring.',
    image: '/it_pdu_power.webp',
    category: 'Intelligent Power Distribution',
    details: [
      'Zero-U vertical metered and switched PDUs with per-outlet kilowatt-hour monitoring',
      'Remote outlet-level power cycling, automated load shedding, and circuit overload alerts',
      'Phase balancing across A/B power feeds with real-time amperage display and SNMP alerts',
      'Integrated environmental telemetry: rack temperature, humidity, and airflow sensors'
    ],
    specs: ['Per-Outlet Power Metering', 'Remote Outlet Rebooting', 'Zero-U Vertical Mount', 'SNMPv3 & Web GUI']
  },
  {
    id: 'ups-backup',
    title: 'UPS & Battery Backup Systems',
    description: 'Online double-conversion UPS systems protecting critical servers from outages.',
    image: '/it_ups_backup.webp',
    category: 'Mission-Critical Power Protection',
    details: [
      'True online double-conversion topology delivering zero transfer time (<0ms) to battery',
      'Modular extended battery modules (EBM) engineered for scalable enterprise runtime',
      'Automated graceful operating system shutdown integration via network management cards',
      'Facility generator synchronization, surge suppression, and annual battery impedance testing'
    ],
    specs: ['Online Double-Conversion', 'Zero Transfer Time (<0ms)', 'Extended Battery Modules', 'Automated OS Shutdown']
  },
  {
    id: 'closet-remediation',
    title: 'IDF/MDF Closet Remediation',
    description: 'Complete overhaul of tangled patch cables, unmanaged cords, and legacy racks.',
    image: '/it_closet_remediation.webp',
    category: 'Telecom Closet Cleanups',
    details: [
      'Zero-downtime scheduled off-hours re-cabling, tone tracing, and drop re-termination',
      'Replacement of bulky spaghetti cables with custom-length slim Category 6/6A patch cords',
      'Comprehensive port-to-drop mapping database, color-coded service dressing, and new labeling',
      'Removal of abandoned legacy cross-connects and optimization of telecom room airflow'
    ],
    specs: ['Zero-Downtime Off-Hours', 'Custom Slim Patch Cords', 'Tone & Trace Port Mapping', 'ANSI/TIA-606-B Labeling']
  },
  {
    id: 'conf-av',
    title: 'Boardroom AV & Collaboration',
    description: 'Interactive displays, Microsoft Teams/Zoom Rooms, ceiling mics, and USB-C docks.',
    image: '/it_conf_av.webp',
    category: 'Smart Workplace Collaboration',
    details: [
      'Turnkey Microsoft Teams Rooms and Zoom Rooms hardware appliances with one-touch join',
      'Beamforming ceiling microphone arrays, acoustic echo cancellation, and DSP audio tuning',
      'AI auto-framing 4K PTZ conference cameras with speaker tracking and wide-angle FOV',
      'Clean under-table retractable wire management and high-resolution commercial displays'
    ],
    specs: ['Microsoft Teams / Zoom Native', 'Beamforming Ceiling Mics', 'AI Auto-Framing 4K PTZ', 'One-Touch Join Touchpad']
  },
  {
    id: 'hardware-staging',
    title: 'Hardware Staging & Provisioning',
    description: 'Centralized warehousing, image flashing, asset tagging, and multi-site kitting.',
    image: '/it_staging.webp',
    category: 'Multi-Site Logistics & Provisioning',
    details: [
      'Secure ESD-safe staging lab for bulk hardware unboxing, firmware flashing, and burn-in testing',
      'Enterprise barcode asset tagging linked to centralized client asset management repositories',
      'Custom palletizing, kitting, and scheduled synchronized nationwide shipping delivery',
      'Defective equipment handling, vendor RMA processing, and turnkey site-ready packaging'
    ],
    specs: ['ESD-Safe Staging Lab', 'Bulk Firmware Flashing', 'Asset Tagging & Tracking', 'Nationwide Synchronized Ship']
  },
  {
    id: 'edge-computing',
    title: 'Edge Computing Micro Data Centers',
    description: 'Self-contained soundproof enclosures with built-in cooling, UPS, and remote access.',
    image: '/it_edge_computing.webp',
    category: 'Edge Infrastructure Enclosures',
    details: [
      'Acoustically dampened (<45 dB) NEMA-rated sealed micro data center cabinets for remote sites',
      'Integrated closed-loop air conditioning units providing dedicated localized thermal control',
      'Built-in rackmount online UPS power backup and remote environmental sensors (temp/water/smoke)',
      'Out-of-band KVM over IP remote console access for centralized corporate IT administration'
    ],
    specs: ['Acoustic Dampened (<45dB)', 'Closed-Loop Cooling', 'Built-in UPS & Sensors', 'Remote KVM Over IP']
  },
  {
    id: 'managed-support',
    title: '24/7 Managed Infrastructure',
    description: 'Proactive monitoring, dispatch SLAs, firmware patch management, and break-fix response.',
    image: '/it_managed_support.webp',
    category: 'Enterprise SLAs & Field Support',
    details: [
      '24/7/365 Network Operations Center (NOC) remote infrastructure telemetry and health monitoring',
      'Guaranteed 2-hour and 4-hour on-site emergency break-fix field technician dispatch SLAs',
      'Scheduled quarterly physical layer maintenance, cable inspections, and thermal audits',
      'Dedicated technical account management and standardized SLA reporting dashboards'
    ],
    specs: ['2-Hr / 4-Hr Dispatch SLAs', '24/7/365 NOC Telemetry', 'Quarterly Thermal Audits', 'Dedicated Support Manager']
  }
];

const itKeyBenefitsList = [
  'Turnkey Server Rack & Multi-Gigabit Switch Deployments',
  'Ekahau 3D Wi-Fi 6E/7 Predictive Modeling & Active Surveys',
  'Zero-Downtime IDF/MDF Server Room Wire Cleanups & Remediation',
  'Smart Switched PDU & Intelligent Environmental Telemetry',
  'Online Double-Conversion Battery Backup & Power Redundancy',
  'Microsoft Teams / Zoom Room Boardroom Audio-Visual Systems',
  'Pre-Deployment Staging, Asset Tagging & Secure Multi-Site Kitting',
  'Nationwide 2-Hour / 4-Hour Break-Fix Field Dispatch SLAs'
];

const itProcessStepsList = [
  {
    number: '1',
    title: 'Assessment',
    subtitle: 'Audit power, compute loads & Wi-Fi coverage'
  },
  {
    number: '2',
    title: 'Design & Staging',
    subtitle: 'Rack elevations, firmware flash & burn-in'
  },
  {
    number: '3',
    title: 'Deployment',
    subtitle: 'Rack & stack, cable dressing & VLAN cutover'
  },
  {
    number: '4',
    title: 'Validation',
    subtitle: 'Throughput testing, failover drills & handoff'
  },
  {
    number: '5',
    title: 'Ongoing Support',
    subtitle: '24/7 telemetry monitoring & rapid dispatch'
  }
];

const itIndustriesList = [
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

export const ITSolutionsPage: React.FC<ITSolutionsPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [selectedService, setSelectedService] = useState<ITServiceCard | null>(null);

  const handleDownloadBrochure = () => {
    onOpenQuote('IT Solutions & Infrastructure Brochure & Technical Assessment');
  };

  return (
    <div className="access-page-root">
      {/* 1. HERO SECTION */}
      <section id="it-hero" className="access-hero-section">
        {/* Background Image Container */}
        <div className="access-hero-bg-wrapper">
          <img
            src="/it_solutions_hero_bg.webp"
            alt="IT Solutions and Enterprise Server Infrastructure"
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
                <span className="access-breadcrumb-current">IT Solutions</span>
              </nav>

              {/* Eyebrow */}
              <div className="access-hero-eyebrow">
                IT SOLUTIONS & INFRASTRUCTURE
              </div>

              {/* Main Headline */}
              <h1 className="access-hero-title">
                SCALABLE IT.<br />
                CREATE <span className="access-hero-title-highlight">RESILIENT SPACES.</span>
              </h1>

              {/* Subtitle */}
              <p className="access-hero-desc">
                End-to-end IT infrastructure, high-density Wi-Fi 6E/7, server rack engineering,
                and managed network deployments designed for 99.999% uptime.
              </p>

              {/* 4 Feature Badges */}
              <div className="access-hero-features-grid">
                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <Server size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">99.999% High Uptime</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <Wifi size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Wi-Fi 6E/7 Certified</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <BarChart3 size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Scalable Architecture</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <Users size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">24/7 NOC Support</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="access-hero-actions">
                <button
                  type="button"
                  onClick={() => onOpenQuote('IT Solutions - Talk to an Expert')}
                  className="access-btn-primary"
                >
                  <span>TALK TO AN IT SPECIALIST</span>
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
                  RELIABLE TODAY.<br />
                  READY FOR TOMORROW.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE IT INFRASTRUCTURE SYSTEMS (10 CARDS GRID) */}
      <section id="it-services-section" className="access-services-section">
        <div className="access-container">
          {/* Section Header */}
          <div className="access-section-header-row">
            <div className="access-section-header-left">
              <div className="access-section-eyebrow">
                <span className="access-eyebrow-dash">—</span>
                <span>OUR IT INFRASTRUCTURE SOLUTIONS</span>
              </div>
              <h2 className="access-section-title">Complete IT Infrastructure Systems.</h2>
              <p className="access-section-subtitle">
                From server room cleanups and switch provisioning to high-density Wi-Fi deployments and edge micro data centers, Smart-Links delivers robust, scalable technology systems.
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
            {itServicesList.map((service) => (
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
              <h2 className="access-trust-heading">IT Infrastructure That Works for You.</h2>
              <p className="access-trust-desc">
                We design, stage, install, and support physical layer IT systems that maximize uptime,
                eliminate thermal bottlenecks, simplify wire management, and scale seamlessly with business expansion.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="access-trust-features-grid">
                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <ShieldCheck size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Certified Engineers</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <Cpu size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Staged & Tested</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <BarChart3 size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Scalable Architecture</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <Users size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">24/7 SLA Response</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="access-split-divider" />

            {/* Right Column: Key Benefits */}
            <div className="access-benefits-right-col">
              <h3 className="access-benefits-heading">KEY BENEFITS</h3>
              <ul className="access-benefits-list">
                {itKeyBenefitsList.map((benefit, idx) => (
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
            {itProcessStepsList.map((step, idx) => (
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

                {idx < itProcessStepsList.length - 1 && (
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
            <h2 className="access-section-title">IT Solutions for Any Environment.</h2>
          </div>

          <div className="access-industries-row">
            {itIndustriesList.map((ind, idx) => (
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
            src="/it_cta_bg.webp"
            alt="IT Solutions and Enterprise Infrastructure"
            className="access-cta-bg-img"
          />
          <div className="access-cta-gradient-overlay" />
        </div>

        <div className="access-container">
          <div className="access-cta-inner">
            <div className="access-cta-left">
              <div className="access-cta-eyebrow">
                READY FOR RESILIENT IT INFRASTRUCTURE?
              </div>
              <h2 className="access-cta-heading">Let's Build Your IT Solution.</h2>
              <p className="access-cta-desc">
                Talk to our enterprise network engineers today about rack staging, Wi-Fi surveys, and managed infrastructure solutions.
              </p>
              <div className="access-cta-btn-group">
                <button
                  type="button"
                  onClick={() => onOpenQuote('IT Solutions - Get a Quote')}
                  className="access-btn-primary"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuote('Talk to an IT Solutions Specialist')}
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
                    onOpenQuote(`IT Solution: ${svcName}`);
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
