import React, { useState } from 'react';
import type { NavTab } from '../types';
import {
  ShieldCheck,
  Eye,
  Cpu,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShoppingCart,
  Landmark,
  Server,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Factory,
  Network,
  Check,
  Building
} from 'lucide-react';

interface VideoSurveillancePageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

interface SurveillanceServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
  specs?: string[];
}

const surveillanceServicesList: SurveillanceServiceCard[] = [
  {
    id: 'ip-cameras',
    title: 'IP Cameras',
    description: 'High-resolution IP cameras for indoor and outdoor environments.',
    image: '/surv_ip_cameras.webp',
    category: 'High-Definition Optics',
    details: [
      '4K Ultra-HD, 5MP, and 1080p high-resolution network optics',
      'Wide dynamic range (WDR) and advanced low-light sensor imaging',
      'Pan-Tilt-Zoom (PTZ), 360° fisheye, and fixed dome configurations',
      'Power over Ethernet (PoE) single-cable deployment'
    ],
    specs: ['4K / 8MP Sensors', 'H.265+ Compression', 'PoE+ 802.3at', 'IR Night Vision up to 50m']
  },
  {
    id: 'analog-cameras',
    title: 'Analog Cameras',
    description: 'Cost-effective surveillance solutions for a wide range of applications.',
    image: '/surv_analog_cameras.webp',
    category: 'Legacy & Hybrid Upgrades',
    details: [
      'High-Definition Transport Video Interface (HD-TVI/CVI) over coax',
      'Cost-effective retrofit for existing legacy coaxial infrastructures',
      'Durable weather-rated bullet and turret housings',
      'Seamless hybrid encoder integration to modern digital VMS'
    ],
    specs: ['HD-TVI / CVI Coaxial', 'Zero-Latency Feed', 'RG59/RG6 Compatibility', 'BNC Coax Interface']
  },
  {
    id: 'nvr-dvr-solutions',
    title: 'NVR & DVR Solutions',
    description: 'Reliable recording, storage and management systems.',
    image: '/surv_nvr_dvr.webp',
    category: 'Core Recording Hardware',
    details: [
      'Enterprise Network Video Recorders (NVR) with RAID storage redundancy',
      'Hybrid DVR support for multi-protocol analog and IP streams',
      'Hot-swappable enterprise surveillance hard drives (HDD/SSD)',
      'Automated health monitoring and redundant power supplies'
    ],
    specs: ['RAID 0/1/5/6/10 Arrays', 'Up to 128 Channels', 'Redundant PSU Options', 'Automated Failover']
  },
  {
    id: 'video-management-systems',
    title: 'Video Management Systems',
    description: 'Centralized monitoring, analytics and remote access from anywhere.',
    image: '/surv_vms.webp',
    category: 'VMS & Control Software',
    details: [
      'Unified multi-site VMS dashboard with interactive floor plan mapping',
      'Real-time incident alerting, bookmarking, and forensic timeline search',
      'Role-based access permissions and encrypted audit trails',
      'Milestone, Genetec, and cloud-native VMS integrations'
    ],
    specs: ['Milestone XProtect', 'Genetec Security Center', 'Open Platform APIs', 'TLS 1.3 Encryption']
  },
  {
    id: 'indoor-outdoor-solutions',
    title: 'Indoor & Outdoor Solutions',
    description: 'Durable, weather-resistant cameras built for any environment.',
    image: '/surv_indoor_outdoor.webp',
    category: 'Environmental Hardening',
    details: [
      'IP66 / IP67 weatherproof and IK10 vandal-resistant enclosures',
      'Integrated heaters, blowers, and long-range infrared (IR) night vision',
      'Corrosion-resistant marine and industrial grade housings',
      'Seismic mounting brackets and pole/corner mount adaptors'
    ],
    specs: ['IP66 / IP67 Weather-Sealed', 'IK10 Impact Resistant', '-40°F to 140°F Operating Range', 'Surge Protected']
  },
  {
    id: 'video-analytics',
    title: 'Video Analytics',
    description: 'AI-powered analytics for people, vehicle and behavior detection.',
    image: '/surv_video_analytics.webp',
    category: 'AI & Edge Intelligence',
    details: [
      'AI person, vehicle, and object classification and tracking',
      'License Plate Recognition (LPR / ANPR) and vehicle logging',
      'Virtual tripwires, loitering detection, and directional line crossing',
      'Heat mapping and customer occupancy foot-traffic analytics'
    ],
    specs: ['Deep Learning Neural Engine', 'Optical LPR / ANPR', 'Perimeter Tripwire Rules', 'Forensic Search']
  },
  {
    id: 'remote-monitoring',
    title: 'Remote Monitoring',
    description: 'Stay connected with secure mobile and desktop access.',
    image: '/surv_remote_monitoring.webp',
    category: 'Cloud & Mobile Connectivity',
    details: [
      'Secure iOS & Android mobile streaming with biometrics login',
      'End-to-end TLS/AES-256 encrypted multi-tenant web portals',
      'Push notifications for intrusion events and critical perimeter alarms',
      'Bandwidth-optimized adaptive multi-streaming technology'
    ],
    specs: ['iOS & Android Apps', 'Biometric SSO Login', 'Real-Time Push Alerts', 'Adaptive Bitrate']
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Seamless integration with access control, alarms and building systems.',
    image: '/surv_system_integration.webp',
    category: 'Security Convergence',
    details: [
      'Direct synchronization with badge access control and door contacts',
      'Automated camera dispatch on door forced open (DFO) or intrusion events',
      'Integration with building automation, fire alarm and BMS systems',
      'Consolidated security operations center (SOC) event logging'
    ],
    specs: ['OSDP Protocol Bridging', 'BACnet & Modbus BMS Sync', 'Contact Closure Triggers', 'Unified Audit Log']
  },
  {
    id: 'storage-backup',
    title: 'Storage & Backup',
    description: 'Scalable storage solutions for short and long-term retention.',
    image: '/surv_storage_backup.webp',
    category: 'Enterprise Data Archiving',
    details: [
      'Direct-Attached Storage (DAS), Storage Area Networks (SAN) and NAS',
      'Compliant 30/60/90-day and 1-year retention policy configurations',
      'Automated cloud tiering and off-site encrypted disaster recovery replication',
      'Enterprise surveillance-grade high MTBF hard drive arrays'
    ],
    specs: ['SAN / NAS / S3 Cloud', 'Automated Tiering', 'SHA-256 Checksums', 'Up to Petabyte Scale']
  },
  {
    id: 'installation-support',
    title: 'Installation & Support',
    description: 'Professional installation, maintenance and ongoing support.',
    image: '/surv_installation_support.webp',
    category: 'Full Lifecycle Services',
    details: [
      'Certified cabling technicians adhering strictly to BICSI and NEC standards',
      'Professional camera mounting, aiming, lens focusing, and depth calibration',
      '24/7 technical help desk and emergency dispatch field service agreements',
      'Routine preventative firmware patching, lens cleaning and health checks'
    ],
    specs: ['BICSI Certified Installers', '24/7 Emergency Dispatch', 'SLA Response Guarantees', 'Annual Health Audits']
  }
];

const survKeyBenefitsList = [
  '24/7 Monitoring & Protection',
  'Deters Theft and Vandalism',
  'Improves Employee and Customer Safety',
  'Remote Access from Anywhere',
  'Custom Solutions for Any Facility',
  'Integration with Access Control & Alarms',
  'Scalable for Single or Multi-Site Locations',
  'Ongoing Maintenance & Support'
];

const survProcessStepsList = [
  {
    number: '1',
    title: 'Consultation',
    subtitle: 'Understand your needs'
  },
  {
    number: '2',
    title: 'Design & Planning',
    subtitle: 'Custom solution design'
  },
  {
    number: '3',
    title: 'Installation',
    subtitle: 'Professional deployment'
  },
  {
    number: '4',
    title: 'Testing & Training',
    subtitle: 'Ensure optimal performance'
  },
  {
    number: '5',
    title: 'Ongoing Support',
    subtitle: 'Maintenance & system updates'
  }
];

const survIndustriesList = [
  {
    name: 'Retail',
    icon: <ShoppingCart size={22} strokeWidth={2.2} />,
    industryId: 'retail'
  },
  {
    name: 'Financial Services',
    icon: <Landmark size={22} strokeWidth={2.2} />,
    industryId: 'commercial'
  },
  {
    name: 'Data Centers',
    icon: <Server size={22} strokeWidth={2.2} />,
    industryId: 'industrial'
  },
  {
    name: 'Commercial Real Estate',
    icon: <Building2 size={22} strokeWidth={2.2} />,
    industryId: 'commercial'
  },
  {
    name: 'Education',
    icon: <GraduationCap size={22} strokeWidth={2.2} />,
    industryId: 'education'
  },
  {
    name: 'Healthcare',
    icon: <HeartPulse size={22} strokeWidth={2.2} />,
    industryId: 'healthcare'
  },
  {
    name: 'Government',
    icon: <Building size={22} strokeWidth={2.2} />,
    industryId: 'government'
  },
  {
    name: 'Hospitality',
    icon: <Hotel size={22} strokeWidth={2.2} />,
    industryId: 'hospitality'
  },
  {
    name: 'Industrial',
    icon: <Factory size={22} strokeWidth={2.2} />,
    industryId: 'industrial'
  },
  {
    name: 'Multi-Site Enterprises',
    icon: <Network size={22} strokeWidth={2.2} />,
    industryId: 'enterprise'
  }
];

export const VideoSurveillancePage: React.FC<VideoSurveillancePageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [selectedService, setSelectedService] = useState<SurveillanceServiceCard | null>(null);

  const handleDownloadBrochure = () => {
    onOpenQuote('Video Surveillance Solutions Brochure & Security Assessment');
  };

  return (
    <div className="surv-page-root">
      {/* 1. HERO SECTION */}
      <section id="surv-hero" className="surv-hero-section">
        {/* Background Image Container */}
        <div className="surv-hero-bg-wrapper">
          <img
            src="/surveillance_hero_bg.webp"
            alt="Video Surveillance Security Monitoring and Dome Camera"
            className="surv-hero-bg-img"
          />
          <div className="surv-hero-gradient-overlay" />
        </div>

        <div className="surv-container">
          <div className="surv-hero-inner">
            {/* Left Content Area */}
            <div className="surv-hero-content">
              {/* Breadcrumb Navigation */}
              <nav className="surv-breadcrumbs" aria-label="Breadcrumb">
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="surv-breadcrumb-link"
                >
                  Home
                </button>
                <ChevronRight size={13} className="surv-breadcrumb-separator" />
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="surv-breadcrumb-link"
                >
                  Services
                </button>
                <ChevronRight size={13} className="surv-breadcrumb-separator" />
                <span className="surv-breadcrumb-current">Video Surveillance</span>
              </nav>

              {/* Eyebrow */}
              <div className="surv-hero-eyebrow">
                VIDEO SURVEILLANCE
              </div>

              {/* Main Headline */}
              <h1 className="surv-hero-title">
                SEE MORE.<br />
                PROTECT MORE.<br />
                <span className="surv-hero-title-highlight">DO MORE.</span>
              </h1>

              {/* Subtitle */}
              <p className="surv-hero-desc">
                Advanced video surveillance solutions designed to enhance security, increase operational visibility, and give you peace of mind.
              </p>

              {/* 4 Feature Badges */}
              <div className="surv-hero-features-grid">
                <div className="surv-feature-item">
                  <div className="surv-feature-icon-wrap">
                    <ShieldCheck size={20} strokeWidth={2.2} />
                  </div>
                  <span className="surv-feature-label">Deterrence & Security</span>
                </div>

                <div className="surv-feature-item">
                  <div className="surv-feature-icon-wrap">
                    <Eye size={20} strokeWidth={2.2} />
                  </div>
                  <span className="surv-feature-label">Real-Time Monitoring</span>
                </div>

                <div className="surv-feature-item">
                  <div className="surv-feature-icon-wrap">
                    <Cpu size={20} strokeWidth={2.2} />
                  </div>
                  <span className="surv-feature-label">Scalable Solutions</span>
                </div>

                <div className="surv-feature-item">
                  <div className="surv-feature-icon-wrap">
                    <BarChart3 size={20} strokeWidth={2.2} />
                  </div>
                  <span className="surv-feature-label">Smarter Operations</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="surv-hero-actions">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Video Surveillance - Talk to an Expert')}
                  className="surv-btn-primary"
                >
                  <span>TALK TO A SECURITY EXPERT</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Side Vertical Corporate Brand Banner */}
            <div className="surv-hero-right-banner">
              <div className="surv-hero-pillar-box">
                <div className="surv-pillar-keywords">
                  <span className="surv-keyword">CONNECTING</span>
                  <span className="surv-keyword">PEOPLE</span>
                  <span className="surv-keyword">PLACES</span>
                  <span className="surv-keyword">POSSIBILITIES</span>
                </div>
                <div className="surv-pillar-accent-line" />
                <div className="surv-pillar-subtext">
                  SECURITY BUILDS A<br />
                  STRONGER TOMORROW.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE VIDEO SURVEILLANCE SYSTEMS (10 CARDS GRID) */}
      <section id="surv-services-section" className="surv-services-section">
        <div className="surv-container">
          {/* Section Header */}
          <div className="surv-section-header-row">
            <div className="surv-section-header-left">
              <div className="surv-section-eyebrow">
                <span className="surv-eyebrow-dash">—</span>
                <span>OUR VIDEO SURVEILLANCE SOLUTIONS</span>
              </div>
              <h2 className="surv-section-title">Complete Video Surveillance Systems.</h2>
              <p className="surv-section-subtitle">
                From design and installation to monitoring and support, Smart-Links delivers reliable,
                high-performance video surveillance solutions for businesses of all sizes.
              </p>
            </div>
            <div className="surv-section-header-right">
              <button
                type="button"
                onClick={handleDownloadBrochure}
                className="surv-download-brochure-btn"
              >
                <span>DOWNLOAD BROCHURE</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* 10 Services 5x2 Grid */}
          <div className="surv-services-grid">
            {surveillanceServicesList.map((service) => (
              <div
                key={service.id}
                className="surv-card"
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
                <div className="surv-card-image-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="surv-card-img"
                    loading="lazy"
                  />
                  <div className="surv-card-image-overlay" />
                </div>

                {/* Card Body */}
                <div className="surv-card-body">
                  <h3 className="surv-card-title">{service.title}</h3>
                  <p className="surv-card-desc">{service.description}</p>

                  <div className="surv-card-footer">
                    <button
                      type="button"
                      className="surv-card-arrow-btn"
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
      <section className="surv-trust-benefits-section">
        <div className="surv-container">
          <div className="surv-trust-split-grid">
            {/* Left Column: Why Smart-Links */}
            <div className="surv-trust-left-col">
              <div className="surv-section-eyebrow">
                <span className="surv-eyebrow-dash">—</span>
                <span>WHY SMART-LINKS</span>
              </div>
              <h2 className="surv-trust-heading">Security. Visibility. Confidence.</h2>
              <p className="surv-trust-desc">
                Our certified team designs and deploys video surveillance systems that help you protect
                your people, assets and facilities — with reliable performance and long-term support.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="surv-trust-features-grid">
                <div className="surv-trust-item">
                  <div className="surv-trust-icon-box">
                    <ShieldCheck size={26} strokeWidth={2.2} />
                  </div>
                  <span className="surv-trust-item-title">Certified Professionals</span>
                </div>

                <div className="surv-trust-item">
                  <div className="surv-trust-icon-box">
                    <Cpu size={26} strokeWidth={2.2} />
                  </div>
                  <span className="surv-trust-item-title">Industry-Leading Technology</span>
                </div>

                <div className="surv-trust-item">
                  <div className="surv-trust-icon-box">
                    <BarChart3 size={26} strokeWidth={2.2} />
                  </div>
                  <span className="surv-trust-item-title">Scalable Solutions</span>
                </div>

                <div className="surv-trust-item">
                  <div className="surv-trust-icon-box">
                    <Users size={26} strokeWidth={2.2} />
                  </div>
                  <span className="surv-trust-item-title">Nationwide Support</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="surv-split-divider" />

            {/* Right Column: Key Benefits */}
            <div className="surv-benefits-right-col">
              <h3 className="surv-benefits-heading">KEY BENEFITS</h3>
              <ul className="surv-benefits-list">
                {survKeyBenefitsList.map((benefit, idx) => (
                  <li key={idx} className="surv-benefit-list-item">
                    <div className="surv-benefit-check-icon">
                      <CheckCircle2 size={19} strokeWidth={2.4} />
                    </div>
                    <span className="surv-benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS (SEAMLESS ATTACHED WHITE BACKGROUND) */}
      <section className="surv-process-section">
        <div className="surv-container">
          <div className="surv-process-header">
            <div className="surv-section-eyebrow">
              <span className="surv-eyebrow-dash">—</span>
              <span>OUR PROCESS</span>
            </div>
            <h2 className="surv-section-title">From Assessment to Ongoing Support.</h2>
          </div>

          <div className="surv-process-flow-track">
            {survProcessStepsList.map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="surv-process-step-node">
                  <div className="surv-process-num-circle">
                    <span>{step.number}</span>
                  </div>
                  <div className="surv-process-step-info">
                    <h4 className="surv-process-step-title">{step.title}</h4>
                    <p className="surv-process-step-subtitle">{step.subtitle}</p>
                  </div>
                </div>

                {idx < survProcessStepsList.length - 1 && (
                  <div className="surv-process-step-arrow" aria-hidden="true">
                    <ChevronRight size={18} strokeWidth={2} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE (ATTACHED WITH COMPACT SPACING) */}
      <section className="surv-industries-section">
        <div className="surv-container">
          <div className="surv-industries-header">
            <div className="surv-section-eyebrow">
              <span className="surv-eyebrow-dash">—</span>
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="surv-section-title">Security Solutions for Every Industry.</h2>
          </div>

          <div className="surv-industries-row">
            {survIndustriesList.map((ind, idx) => (
              <div
                key={idx}
                className="surv-industry-pill-card"
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
                <div className="surv-industry-icon-circle">
                  {ind.icon}
                </div>
                <span className="surv-industry-name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER SECTION */}
      <section className="surv-cta-banner-section">
        {/* Background Image & Overlay */}
        <div className="surv-cta-bg-wrapper">
          <img
            src="/surveillance_cta_bg.webp"
            alt="Video Surveillance System Architecture"
            className="surv-cta-bg-img"
          />
          <div className="surv-cta-gradient-overlay" />
        </div>

        <div className="surv-container">
          <div className="surv-cta-inner">
            <div className="surv-cta-left">
              <div className="surv-cta-eyebrow">
                LET'S BUILD A SAFER TOMORROW
              </div>
              <h2 className="surv-cta-heading">READY TO ENHANCE YOUR SECURITY?</h2>
              <p className="surv-cta-desc">
                Talk to our team about your video surveillance project.
              </p>
              <div className="surv-cta-btn-group">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Video Surveillance - Get a Quote')}
                  className="surv-btn-primary"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuote('Talk to a Surveillance Specialist')}
                  className="surv-btn-secondary"
                >
                  <span>TALK TO A SPECIALIST</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="surv-cta-right">
              <div className="surv-cta-pillar-words">
                <span>CONNECTING</span>
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
        <div className="surv-modal-overlay" onClick={() => setSelectedService(null)}>
          <div
            className="surv-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="surv-modal-close-btn"
              onClick={() => setSelectedService(null)}
              aria-label="Close dialog"
            >
              &times;
            </button>

            <div className="surv-modal-header-hero">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="surv-modal-hero-img"
              />
              <div className="surv-modal-hero-overlay" />
              <div className="surv-modal-hero-caption">
                <span className="surv-modal-category-tag">{selectedService.category}</span>
                <h3 className="surv-modal-title">{selectedService.title}</h3>
              </div>
            </div>

            <div className="surv-modal-body">
              <p className="surv-modal-desc">{selectedService.description}</p>

              {selectedService.details && (
                <div className="surv-modal-block">
                  <h4 className="surv-modal-subtitle">Service Deliverables & Capabilities</h4>
                  <ul className="surv-modal-list">
                    {selectedService.details.map((item, i) => (
                      <li key={i}>
                        <Check size={16} className="surv-modal-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedService.specs && (
                <div className="surv-modal-block">
                  <h4 className="surv-modal-subtitle">Technical Specifications & Standards</h4>
                  <div className="surv-modal-specs-wrap">
                    {selectedService.specs.map((spec, i) => (
                      <span key={i} className="surv-spec-chip">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="surv-modal-actions">
                <button
                  type="button"
                  onClick={() => {
                    const svcName = selectedService.title;
                    setSelectedService(null);
                    onOpenQuote(`Surveillance Solution: ${svcName}`);
                  }}
                  className="surv-modal-cta-btn"
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
