import React, { useState } from 'react';
import type { NavTab } from '../types';
import {
  ShieldCheck,
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

interface AccessControlPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

interface AccessServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
  specs?: string[];
}

const accessServicesList: AccessServiceCard[] = [
  {
    id: 'card-readers',
    title: 'Card Readers',
    description: 'Secure and reliable card reader solutions for any environment.',
    image: '/access_card_readers.webp',
    category: 'Contactless RFID & Smart Cards',
    details: [
      'High-security contactless smart card readers (MIFARE DESFire EV3, HID iCLASS SEOS)',
      'Multi-technology legacy 125kHz Proximity and 13.56MHz smart credential support',
      'Sleek weatherized mullion, single-gang, and architectural glass mounting profiles',
      'OSDP v2 protocol with Secure Channel encryption against sniffing and spoofing'
    ],
    specs: ['OSDP v2 Verified', '13.56MHz & 125kHz Multi-Class', 'IP65 Weatherproof', 'AES-128 Encryption']
  },
  {
    id: 'mobile-credentials',
    title: 'Mobile Credentials',
    description: 'Convenient, secure access using smartphones and mobile wallets.',
    image: '/access_mobile_credentials.webp',
    category: 'Smartphone & Mobile Keys',
    details: [
      'Touchless Bluetooth Low Energy (BLE) and NFC mobile badge authentication',
      'Native Apple Wallet and Google Wallet employee badge integration',
      'Instant cloud-based mobile credential provisioning and revocation',
      'Extended read ranges (up to 15 feet) for parking garages and gates'
    ],
    specs: ['Apple & Google Wallet', 'BLE & NFC Dual Band', 'Cloud Provisioning', 'Zero Plastic Badges']
  },
  {
    id: 'keypads',
    title: 'Keypads',
    description: 'Durable keypad solutions for controlled access.',
    image: '/access_keypads.webp',
    category: 'PIN & Two-Factor Authentication',
    details: [
      'Vandal-resistant backlit metal and capacitive touch PIN keypads',
      'Combined dual-factor authentication (Card + PIN) for high-security areas',
      'Duress code triggers with silent security dispatch notifications',
      'Programmable temporary guest and contractor PIN codes with time restrictions'
    ],
    specs: ['Two-Factor Authentication', 'Backlit Weatherproof IP66', 'Duress Trigger Alert', 'Programmable Schedules']
  },
  {
    id: 'biometrics',
    title: 'Biometrics',
    description: 'Advanced fingerprint and facial recognition technology for higher security.',
    image: '/access_biometrics.webp',
    category: 'Biometric Identity Verification',
    details: [
      'Optical and capacitive live-fingerprint scanners with spoof detection',
      'Frictionless 3D facial recognition kiosks with anti-tailgating algorithms',
      'Sub-second authentication speed with high-throughput turnstile integration',
      'Encrypted biometric template storage adhering strictly to privacy standards'
    ],
    specs: ['Sub-Second Matching (<0.3s)', '3D Anti-Spoof Liveness', 'Encrypted Templates', 'GDPR/BIPA Compliant']
  },
  {
    id: 'door-controllers',
    title: 'Door Controllers',
    description: 'Intelligent door controllers for single or multi-door systems.',
    image: '/access_door_controllers.webp',
    category: 'Intelligent Control Panels',
    details: [
      'Scalable 2-door, 4-door, and 8-door network access controllers (Mercury, Software House, Brivo)',
      'Local offline decision-making intelligence ensuring access during network outages',
      'PoE+ edge controllers reducing electrical wiring and infrastructure costs',
      'UL 294 certified power supplies with supervised battery backups'
    ],
    specs: ['UL 294 Certified', 'Offline Flash Intelligence', 'PoE+ Edge Architecture', 'Supervised Relays']
  },
  {
    id: 'electrified-hardware',
    title: 'Electrified Hardware',
    description: 'Mag locks, electric strikes and exit devices for complete access control.',
    image: '/access_electrified_hardware.webp',
    category: 'Locking Hardware & Egress',
    details: [
      'High-holding force magnetic locks (600 lbs / 1200 lbs) with bond sensors',
      'Heavy-duty commercial electric door strikes (Grade 1 ANSI mortise / cylindrical)',
      'Motorized latch retraction panic exit crash bars for code-compliant egress',
      'Fail-safe and fail-secure integration with automatic fire alarm relays'
    ],
    specs: ['Grade 1 Commercial ANSI', 'NFPA 101 Egress Code', '1200 lb Holding Force', 'Fire Alarm Relay Cutoff']
  },
  {
    id: 'access-control-software',
    title: 'Access Control Software',
    description: 'Powerful, easy-to-manage software for real-time control and reporting.',
    image: '/access_software.webp',
    category: 'Cloud & On-Premises Management',
    details: [
      'Intuitive web and mobile administrative dashboards for global user management',
      'Automated Active Directory / Azure AD / Okta single sign-on (SSO) synchronization',
      'Instant facility-wide lockdown triggers with one-click emergency protocols',
      'Comprehensive audit trails, customizable compliance reports, and mustering logs'
    ],
    specs: ['Cloud-Native & On-Prem', 'Azure AD / Okta SSO Sync', 'Instant Global Lockdown', 'Real-Time Audit Logs']
  },
  {
    id: 'visitor-management',
    title: 'Visitor Management',
    description: 'Streamline guest access with secure, automated visitor management.',
    image: '/access_visitor_management.webp',
    category: 'Guest Check-In & Badging',
    details: [
      'Self-service touchscreen iPad and tablet visitor check-in kiosks',
      'Automatic host notification via SMS, email, and Microsoft Teams / Slack',
      'Instant digital NDA signing, photo capture, and thermal adhesive badge printing',
      'Pre-registration with QR code invitations for fast frictionless entry'
    ],
    specs: ['Touchscreen Kiosks', 'Host SMS/Email Alerts', 'Instant Badge Printing', 'Digital NDA Signatures']
  },
  {
    id: 'turnstiles-entry-systems',
    title: 'Turnstiles & Entry Systems',
    description: 'Physical security barriers for additional control.',
    image: '/access_turnstiles.webp',
    category: 'Speed Gates & Lobby Barriers',
    details: [
      'Optical speed gates with motorized retractable glass flaps for high-end corporate lobbies',
      'Full-height perimeter turnstiles for perimeter fence lines and industrial yards',
      'Integrated card reader, barcode, and biometric scanner mounting plinths',
      'Sophisticated anti-tailgating and crawl-under infrared sensor beams'
    ],
    specs: ['Optical Speed Gates', 'Anti-Tailgating Sensors', 'ADA Compliant Passageways', 'Emergency Fire Drop']
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Seamless integration with video surveillance, alarms and building systems.',
    image: '/access_system_integration.webp',
    category: 'Converged Physical Security',
    details: [
      'Direct cross-linking of badge swipe events with live and recorded surveillance video',
      'Intrusion detection and perimeter alarm system synchronization',
      'Elevator dispatch destination control integration for multi-tenant high-rises',
      'Building management system (BMS) HVAC and lighting efficiency automation'
    ],
    specs: ['Unified VMS Cross-Linking', 'Elevator Dispatch Integration', 'Intrusion Alarm Sync', 'BACnet / BMS Protocol']
  }
];

const accessKeyBenefitsList = [
  'Protect People, Property and Assets',
  'Control Access Across Multiple Locations',
  'Integrate with Video Surveillance and Alarms',
  'Monitor and Manage in Real Time',
  'Customizable User Permissions',
  'Detailed Reporting and Audit Trails',
  'Scalable for Future Growth',
  'Professional Installation and Support'
];

const accessProcessStepsList = [
  {
    number: '1',
    title: 'Consultation',
    subtitle: 'Understand your needs'
  },
  {
    number: '2',
    title: 'Design & Planning',
    subtitle: 'Custom system design'
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

const accessIndustriesList = [
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

export const AccessControlPage: React.FC<AccessControlPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [selectedService, setSelectedService] = useState<AccessServiceCard | null>(null);

  const handleDownloadBrochure = () => {
    onOpenQuote('Access Control Systems Brochure & Security Assessment');
  };

  return (
    <div className="access-page-root">
      {/* 1. HERO SECTION */}
      <section id="access-hero" className="access-hero-section">
        {/* Background Image Container */}
        <div className="access-hero-bg-wrapper">
          <img
            src="/access_hero_bg.webp"
            alt="Access Control Smart Keypad and RFID Badge"
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
                <span className="access-breadcrumb-current">Access Control</span>
              </nav>

              {/* Eyebrow */}
              <div className="access-hero-eyebrow">
                ACCESS CONTROL
              </div>

              {/* Main Headline */}
              <h1 className="access-hero-title">
                CONTROL ACCESS.<br />
                CREATE <span className="access-hero-title-highlight">SAFER SPACES.</span>
              </h1>

              {/* Subtitle */}
              <p className="access-hero-desc">
                Modern access control solutions designed to protect your people, property,
                and assets — with scalable systems for any size facility.
              </p>

              {/* 4 Feature Badges */}
              <div className="access-hero-features-grid">
                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <ShieldCheck size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Enhanced Security</span>
                </div>

                <div className="access-feature-item">
                  <div className="access-feature-icon-wrap">
                    <Cpu size={20} strokeWidth={2.2} />
                  </div>
                  <span className="access-feature-label">Flexible Solutions</span>
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
                  <span className="access-feature-label">Expert Installation & Support</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="access-hero-actions">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Access Control - Talk to an Expert')}
                  className="access-btn-primary"
                >
                  <span>TALK TO AN ACCESS CONTROL EXPERT</span>
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
                  SECURE TODAY.<br />
                  STRONGER TOMORROW.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE ACCESS CONTROL SYSTEMS (10 CARDS GRID) */}
      <section id="access-services-section" className="access-services-section">
        <div className="access-container">
          {/* Section Header */}
          <div className="access-section-header-row">
            <div className="access-section-header-left">
              <div className="access-section-eyebrow">
                <span className="access-eyebrow-dash">—</span>
                <span>OUR ACCESS CONTROL SOLUTIONS</span>
              </div>
              <h2 className="access-section-title">Complete Access Control Systems.</h2>
              <p className="access-section-subtitle">
                From simple door access to enterprise-wide integrated security, Smart-Links delivers reliable,
                future-ready access control solutions tailored to your facility and operational needs.
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
            {accessServicesList.map((service) => (
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
              <h2 className="access-trust-heading">Access Control That Works for You.</h2>
              <p className="access-trust-desc">
                We design, install, and support access control systems that improve security,
                increase operational efficiency, and provide peace of mind.
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="access-trust-features-grid">
                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <ShieldCheck size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Trusted Expertise</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <Cpu size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Customized Solutions</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <BarChart3 size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Scalable Infrastructure</span>
                </div>

                <div className="access-trust-item">
                  <div className="access-trust-icon-box">
                    <Users size={26} strokeWidth={2.2} />
                  </div>
                  <span className="access-trust-item-title">Ongoing Support</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="access-split-divider" />

            {/* Right Column: Key Benefits */}
            <div className="access-benefits-right-col">
              <h3 className="access-benefits-heading">KEY BENEFITS</h3>
              <ul className="access-benefits-list">
                {accessKeyBenefitsList.map((benefit, idx) => (
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
            {accessProcessStepsList.map((step, idx) => (
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

                {idx < accessProcessStepsList.length - 1 && (
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
            <h2 className="access-section-title">Access Control for Any Environment.</h2>
          </div>

          <div className="access-industries-row">
            {accessIndustriesList.map((ind, idx) => (
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
            src="/access_cta_bg.webp"
            alt="Access Control Speed Gates and Optical Turnstiles"
            className="access-cta-bg-img"
          />
          <div className="access-cta-gradient-overlay" />
        </div>

        <div className="access-container">
          <div className="access-cta-inner">
            <div className="access-cta-left">
              <div className="access-cta-eyebrow">
                READY FOR A MORE SECURE TOMORROW?
              </div>
              <h2 className="access-cta-heading">Let's Build Your Access Control Solution.</h2>
              <p className="access-cta-desc">
                Talk to our team about your project requirements.
              </p>
              <div className="access-cta-btn-group">
                <button
                  type="button"
                  onClick={() => onOpenQuote('Access Control - Get a Quote')}
                  className="access-btn-primary"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuote('Talk to an Access Control Specialist')}
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
                    onOpenQuote(`Access Control Solution: ${svcName}`);
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
