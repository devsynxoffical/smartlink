import React, { useState } from 'react';
import type { NavTab, RolloutServiceItem } from '../types';
import {
  Wifi,
  Monitor,
  CreditCard,
  ShoppingCart,
  PhoneCall,
  Camera,
  Lock,
  Server,
  Radio,
  Volume2,
  Megaphone,
  Network,
  Cable,
  Router,
  Layers,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  ShieldCheck,
  Clock,
  MapPin,
  Building2,
  BarChart3,
  Globe,
  X,
  Plus,
  Calendar,
  MessageSquare,
  FileText,
  AlertCircle,
  User,
  Mail,
  Phone,
  Building
} from 'lucide-react';

interface NationwideRolloutsPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const rolloutServicesList: RolloutServiceItem[] = [
  {
    id: 'wireless',
    name: 'Wireless',
    tagline: 'Enterprise Wi-Fi and wireless infrastructure',
    description: 'High-density access points, heat mapping, and enterprise wireless controller deployment for seamless connectivity across all locations.',
    iconName: 'Wifi',
    overview: 'Smart-Links provides end-to-end enterprise wireless deployment services for single-site and multi-site rollouts. From RF site surveys and predictive heat mapping to high-density AP mounting, cabling, and controller configuration, we deliver reliable, high-speed Wi-Fi infrastructure built for modern corporate, retail, and industrial environments.',
    capabilities: [
      'Predictive RF site surveys & active heat mapping',
      'High-density enterprise access point installation',
      'Ceiling, wall, and outdoor AP mounting & cabling',
      'Wireless LAN controller (WLC) setup & configuration',
      'Guest network, portal & 802.1X security configuration',
      'Spectrum analysis & interference mitigation',
      'PoE switch connectivity & power provisioning',
      'Post-install signal validation & performance testing',
      'Nationwide multi-site rollout coordination',
      'Ongoing wireless monitoring & troubleshooting'
    ]
  },
  {
    id: 'work-stations',
    name: 'Work Stations',
    tagline: 'Employee workstation setup and deployment',
    description: 'Complete employee workstation hardware deployment, dual-monitor mounting, docking stations, and cable management.',
    iconName: 'Monitor',
    overview: 'From corporate office renovations to massive multi-location hiring rollouts, Smart-Links manages complete workstation staging, unboxing, cabling, monitor arm installation, docking station hookup, and cable tidying to deliver turn-key workspaces on day one.',
    capabilities: [
      'PC, Mac, and laptop dock unboxing & setup',
      'Single, dual, and triple monitor arm mounting',
      'Clean under-desk cable management & power distribution',
      'VoIP phone, webcam, and peripheral integration',
      'Ethernet jack patching & connectivity verification',
      'Asset tagging, serial number logging & inventory reporting',
      'De-commissioning and packaging of legacy equipment',
      'Ergonomic desk accessory configuration',
      'Multi-floor & multi-building concurrent rollouts',
      'Packaging disposal & eco-friendly recycling'
    ]
  },
  {
    id: 'pos',
    name: 'POS',
    tagline: 'Point of sale installation and support',
    description: 'Hardware installation, cash drawers, barcode scanners, receipt printers, and secure payment terminals.',
    iconName: 'CreditCard',
    overview: 'Smart-Links delivers turnkey Point of Sale (POS) rollouts for national retail, grocery, hospitality, and dining chains. We handle mounting, register terminal assembly, payment terminal (EMV/NFC) integration, network drops, and validation with zero downtime for retail operations.',
    capabilities: [
      'Touchscreen POS terminal mounting & cabling',
      'EMV chip, NFC, and credit card pin-pad installation',
      'Thermal receipt printer & cash drawer integration',
      'Barcode scanner & scale connectivity',
      'Customer-facing display setup',
      'Dedicated POS VLAN ethernet patching & power backup',
      'After-hours and overnight cutover installations',
      'Test transaction processing & compliance sign-off',
      'Multi-lane and drive-thru POS deployments',
      'Nationwide emergency break/fix & technician dispatch'
    ]
  },
  {
    id: 'retail-automation',
    name: 'Retail Automation',
    tagline: 'In-store technology and automation solutions',
    description: 'Self-checkout kiosks, digital price tags (ESL), smart inventory sensors, and interactive customer kiosks.',
    iconName: 'ShoppingCart',
    overview: 'Accelerate retail digital transformation with Smart-Links. We deploy automated self-checkout lanes, electronic shelf labels (ESL), interactive customer information kiosks, and smart optical sensors across nationwide store footprints.',
    capabilities: [
      'Self-checkout (SCO) kiosk assembly & bolting',
      'Electronic Shelf Label (ESL) RF access point installation',
      'Interactive digital catalog & price-checker kiosks',
      'People-counting and customer traffic sensors',
      'RFID inventory tracking antennas & gateways',
      'Structured low-voltage wiring for retail fixtures',
      'Concealed power and data raceway installation',
      'Software staging & peripheral device pairing',
      'Store-by-store milestone reporting & photo validation',
      'Nationwide multi-store rollout project management'
    ]
  },
  {
    id: 'ip-phones',
    name: 'IP Phones',
    tagline: 'Business VoIP phone systems',
    description: 'Cloud and on-premise VoIP telephone deployment, PoE setup, extension provisioning, and conference room phones.',
    iconName: 'PhoneCall',
    overview: 'Upgrade your voice communications with seamless VoIP phone rollouts. Smart-Links deploys desktop IP phones, executive video phones, conference room speakerphones, and paging gateways across enterprise offices and retail locations.',
    capabilities: [
      'Desktop VoIP phone unboxing, placement & cabling',
      'Power over Ethernet (PoE) port provisioning & tagging',
      'Conference room spider phone & soundbar installation',
      'User extension mapping & button template setup',
      'Cordless DECT phone & base station coverage surveys',
      'Call quality (QoS) validation & latency testing',
      'Headset & sidecar expansion module connection',
      'Analog telephone adapter (ATA) fax & line conversions',
      'Multi-site standardized provisioning templates',
      'End-user quick-start guide distribution'
    ]
  },
  {
    id: 'security-camera-systems',
    name: 'Security Camera Systems',
    tagline: 'IP and analog video surveillance',
    description: 'High-definition dome, bullet, PTZ, and 360-degree panoramic IP camera installation with NVR/VMS setup.',
    iconName: 'Camera',
    overview: 'Protect your people, facilities, and assets with enterprise-grade video surveillance deployments. Smart-Links installs high-resolution IP cameras, cloud-managed surveillance solutions, motorized PTZ cameras, and network video recorders across nationwide sites.',
    capabilities: [
      'Interior and exterior IP dome and bullet camera mounting',
      '360-degree fisheye & multi-sensor panoramic cameras',
      'Motorized Pan-Tilt-Zoom (PTZ) camera commissioning',
      'Cat6/Cat6A cabling, conduit runs & weatherproof j-boxes',
      'Network Video Recorder (NVR) & cloud storage setup',
      'Camera field of view (FOV) optimization & focus tuning',
      'Motion detection zones & night-vision IR testing',
      'Video Management System (VMS) client software setup',
      'Remote mobile app access configuration',
      'Compliance documentation & camera location floor plans'
    ]
  },
  {
    id: 'access-control',
    name: 'Access Control',
    tagline: 'Entry management and secure access',
    description: 'Card readers, key fobs, mobile credentials, biometric readers, magnetic locks, and cloud control panels.',
    iconName: 'Lock',
    overview: 'Ensure physical security and audit-ready perimeter defense across every facility. Smart-Links delivers complete access control deployments, including door controllers, electrified strikes, magnetic locks, request-to-exit sensors, and cloud management platforms.',
    capabilities: [
      'Smart card, key fob, and NFC mobile credential readers',
      'Biometric fingerprint & facial recognition terminals',
      'Electrified door strikes & magnetic lock (maglock) installation',
      'Request-to-Exit (REX) motion detectors & crash bars',
      'Door contact sensors & tamper alarms',
      'Multi-door access control panel wiring & backup battery',
      'Cloud-based access management portal configuration',
      'Elevator and turnstile security integration',
      'Life safety fire alarm tie-in for emergency release',
      'Role-based permission setup & badge creation testing'
    ]
  },
  {
    id: 'rack-and-stacking',
    name: 'Rack and Stacking',
    tagline: 'Racking, stacking and cabinet installation',
    description: 'Server cabinet assembly, 2-post and 4-post racks, cable management, PDU installation, and device racking.',
    iconName: 'Server',
    overview: 'Transform messy IT closets into clean, standardized, high-performance data hubs. Smart-Links handles server rack assembly, seismic anchoring, vertical and horizontal cable management, smart PDU integration, and neat device mounting.',
    capabilities: [
      '2-post relay racks & 4-post server cabinet assembly',
      'Floor anchoring, seismic bracing & grounding bonding',
      'Rack-mounted servers, switches, firewalls & UPS installation',
      'Horizontal and vertical wire management finger ducts',
      'Intelligent switched & metered PDU installation',
      'Structured color-coded patch cable dress and routing',
      'Front and rear rack elevation documentation',
      'Cable labeling with ANSI/TIA-606-B standards',
      'Hot/cold aisle containment & airflow blanking panels',
      'Pre-shipment rack staging & nationwide site delivery'
    ]
  },
  {
    id: 'das',
    name: 'DAS',
    tagline: 'Distributed antenna systems',
    description: 'In-building cellular enhancement, 5G signal amplification, and public safety ERCES DAS solutions.',
    iconName: 'Radio',
    overview: 'Eliminate cellular dead zones and comply with municipal emergency responder radio codes. Smart-Links installs commercial carrier DAS and Public Safety Emergency Radio Communication Enhancement Systems (ERCES) nationwide.',
    capabilities: [
      'In-building RF signal propagation surveys & iBwave design',
      'Public safety 700/800 MHz ERCES & commercial carrier DAS',
      'Donor antenna roof mounting & lightning arrestor grounding',
      'Low-loss ½" and ⅞" coaxial cable installation & connectors',
      'Bi-Directional Amplifier (BDA) & Master Unit installation',
      'Omnidirectional ceiling antennas & directional panel mounting',
      'PIM (Passive Intermodulation) & line sweep testing',
      'Fire marshal and AHJ grid testing & certification',
      'Battery backup enclosure (NEMA 4) integration',
      'Multi-carrier approval coordination'
    ]
  },
  {
    id: 'white-noise',
    name: 'White Noise',
    tagline: 'Sound masking systems for privacy',
    description: 'Acoustic sound masking emitters, direct-field systems, and centralized sound generator tuning for speech privacy.',
    iconName: 'Volume2',
    overview: 'Protect confidential conversations, reduce conversational distractions, and achieve HIPAA and GLBA acoustic compliance. Smart-Links installs direct-field and plenum-rated sound masking systems across nationwide offices and healthcare clinics.',
    capabilities: [
      'Acoustic sound curve modeling & emitter layout planning',
      'Plenum and direct-field ceiling sound emitter installation',
      'Multi-zone sound masking controller rack installation',
      'Volume zoning for private offices, open areas, and lobbies',
      'Background music & emergency paging audio integration',
      'Acoustic spectrum calibration & decibel level balancing',
      'Plenum-rated low-voltage cabling & suspension wires',
      'Time-of-day automatic volume ramp scheduling',
      'HIPAA / GLBA privacy compliance verification',
      'Nationwide turnkey multi-office installation'
    ]
  },
  {
    id: 'intercom-system',
    name: 'Intercom System',
    tagline: 'Communication and paging solutions',
    description: 'IP audio/video intercoms, building entrance door stations, overhead paging, and master stations.',
    iconName: 'Megaphone',
    overview: 'Streamline visitor management and facility-wide emergency broadcasts. Smart-Links installs IP video door stations, warehouse horn paging systems, master desktop intercom consoles, and SIP-enabled broadcast gateways across commercial properties.',
    capabilities: [
      'IP video door intercom stations with night vision',
      'Commercial horn speakers & ceiling speaker paging grids',
      'Desktop touch-screen master intercom consoles',
      'SIP PBX & telephone system paging integration',
      'Door release trigger & access control relay connection',
      'Multi-zone audio amplifiers & mixer configuration',
      'Ambient noise-sensing automatic volume adjusters',
      'Emergency broadcast & lockdown button integration',
      'Weather-resistant outdoor bollard & pedestal mounting',
      'Audio clarity and decibel coverage sign-off'
    ]
  },
  {
    id: 'structured-cabling',
    name: 'Structured Cabling',
    tagline: 'Cat5e, Cat6, Cat6A, Cat7, Cat8 and more',
    description: 'High-performance copper structured cabling, patch panels, cable trays, and Fluke certification testing.',
    iconName: 'Cable',
    overview: 'The robust foundation of all enterprise technology. Smart-Links designs and pulls certified Cat6 and Cat6A structured cabling systems across nationwide facilities, ensuring flawless bandwidth, neat pathways, and manufacturer-backed warranties.',
    capabilities: [
      'Cat6, Cat6A, Cat7, and Cat8 horizontal cable runs',
      'J-hooks, ladder racks, and basket tray pathway installation',
      'Patch panel termination, labeling & cable combing',
      'Workstation faceplates, keystone jacks & surface mount boxes',
      'Fluke DSX cable certification testing with full PDF reports',
      'Conduit sleeves, core drilling & plenum penetrations',
      'UL-listed firestopping systems for wall/floor penetrations',
      'Color-coded patching for data, voice, PoE, and security',
      'ANSI/TIA-568 standards compliance & 25-year warranty options',
      'Fast-track multi-location concurrent rollout crews'
    ]
  },
  {
    id: 'fiber-optic-installation-and-termination',
    name: 'Fiber Optic Installation and Termination',
    tagline: 'Aerial, underground, splicing and testing',
    description: 'Single-mode and multi-mode fiber backbones, fusion splicing, OTDR testing, and fiber patch enclosures.',
    iconName: 'Network',
    overview: 'Smart-Links provides end-to-end fiber optic installation and termination services for single-site and multi-site deployments. From aerial and underground fiber to splicing, testing and certification, we deliver high-performance fiber infrastructure built for today and tomorrow.',
    capabilities: [
      'Single-mode (OS2) and multi-mode (OM3/OM4/OM5) fiber',
      'Aerial, direct-buried, and underground conduit fiber pulling',
      'Indoor and outdoor riser and campus backbone fiber deployment',
      'Pre-terminated MTP/MPO fiber assemblies',
      'Precision core-alignment fusion splicing & mechanical termination',
      'Rack-mount and wall-mount fiber optic distribution enclosures',
      'Tier 1 (OLTS) and Tier 2 (OTDR) fiber certification testing',
      'Bi-directional power meter loss testing & trace documentation',
      'Emergency fiber cut repair & troubleshooting',
      'Nationwide multi-site fiber modernization rollouts'
    ]
  },
  {
    id: 'switches-and-routers',
    name: 'Switches and Routers',
    tagline: 'Network switches, routers and configuration',
    description: 'Core switches, access PoE switches, enterprise routers, SD-WAN gateways, and redundant uplinks.',
    iconName: 'Router',
    overview: 'Ensure zero packet loss, high bandwidth, and remote manageability across all your enterprise nodes. Smart-Links handles unboxing, rack mounting, console configuration, VLAN assignment, uplink patching, and live cutovers for enterprise networking gear.',
    capabilities: [
      'Layer 2 and Layer 3 PoE+ managed switch installation',
      'Enterprise edge routers & SD-WAN gateway configuration',
      'Stacking cables, SFP+ 10G/40G optical transceiver install',
      'VLAN segmentation, trunking & management IP setup',
      'Redundant power supply (RPS) & UPS battery integration',
      'Standardized configuration script loading via console',
      'Port labeling, cross-connect patching & link verification',
      'Failover testing for dual-WAN and redundant uplinks',
      'Remote NOC engineer handoff & live cutover assistance',
      'Nationwide multi-store and branch office network refreshes'
    ]
  },
  {
    id: 'mdf-and-idf-buildouts',
    name: 'MDF and IDF Buildouts',
    tagline: 'Main and intermediate distribution frames',
    description: 'Complete telecommunications room construction, plywood backboards, ladder racks, grounding, and environmental prep.',
    iconName: 'Layers',
    overview: 'Build out clean, organized, secure network closets from the ground up. Smart-Links constructs turnkey MDF and IDF rooms, complete with AC-grade fire-retardant plywood, cable runways, grounding busbars, server racks, and environmental monitoring.',
    capabilities: [
      'Fire-rated AC-grade ¾" plywood backboard mounting & painting',
      'Ceiling-suspended ladder racks & vertical cable waterfalls',
      'Telecommunications Grounding Busbar (TGB) bonding',
      'Wall-mount swing cabinets & free-standing 4-post racks',
      'Dedicated electrical circuit outlet coordination & PDU install',
      'Environmental temperature & humidity sensor mounting',
      'Cable entrance sleeves, fire-stop collars & core sealing',
      'Backbone copper and fiber interconnect patch bays',
      'Keyless electronic lock & room access control installation',
      'Full TIA-569 compliance & detailed as-built CAD documentation'
    ]
  }
];

const renderServiceIcon = (iconName: string, size = 24) => {
  switch (iconName) {
    case 'Wifi': return <Wifi size={size} />;
    case 'Monitor': return <Monitor size={size} />;
    case 'CreditCard': return <CreditCard size={size} />;
    case 'ShoppingCart': return <ShoppingCart size={size} />;
    case 'PhoneCall': return <PhoneCall size={size} />;
    case 'Camera': return <Camera size={size} />;
    case 'Lock': return <Lock size={size} />;
    case 'Server': return <Server size={size} />;
    case 'Radio': return <Radio size={size} />;
    case 'Volume2': return <Volume2 size={size} />;
    case 'Megaphone': return <Megaphone size={size} />;
    case 'Cable': return <Cable size={size} />;
    case 'Network': return <Network size={size} />;
    case 'Router': return <Router size={size} />;
    case 'Layers': return <Layers size={size} />;
    default: return <Network size={size} />;
  }
};

export const NationwideRolloutsPage: React.FC<NationwideRolloutsPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  // Screen state: 'list' (Screen 1), 'detail' (Screen 2), 'summary' (Screen 4)
  const [currentScreen, setCurrentScreen] = useState<'list' | 'detail' | 'summary'>('list');
  const [activeService, setActiveService] = useState<RolloutServiceItem>(rolloutServicesList[12]); // Default to Fiber Optic
  const [selectedServices, setSelectedServices] = useState<RolloutServiceItem[]>([
    rolloutServicesList[0],  // Wireless
    rolloutServicesList[2],  // POS
    rolloutServicesList[5],  // Security Camera Systems
    rolloutServicesList[6],  // Access Control
    rolloutServicesList[12]  // Fiber Optic
  ]);

  // Screen 3 Modal and Toast states
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [addedServiceName, setAddedServiceName] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Screen 4 Quote Form state (Strict Validation - No Blank Submissions Allowed)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [locations, setLocations] = useState('');
  const [startDate, setStartDate] = useState('');
  const [projectType, setProjectType] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [wantSpecialist, setWantSpecialist] = useState(true);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFieldChange = (field: string, setter: (val: string) => void, val: string) => {
    setter(val);
    if (formErrors[field]) {
      setFormErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = (): Record<string, string> => {
    const errors: Record<string, string> = {};

    if (selectedServices.length === 0) {
      errors.services = 'Please select at least one rollout service before submitting.';
    }
    if (!fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }
    if (!email.trim()) {
      errors.email = 'Work email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please enter a valid work email address.';
    }
    if (!phone.trim()) {
      errors.phone = 'Phone number is required.';
    }
    if (!company.trim()) {
      errors.company = 'Company or organization name is required.';
    }
    if (!locations.trim()) {
      errors.locations = 'Please select the number of project locations.';
    }
    if (!startDate.trim()) {
      errors.startDate = 'Please select your target start date.';
    }
    if (!projectType.trim()) {
      errors.projectType = 'Please select a deployment project type.';
    }
    if (!additionalDetails.trim()) {
      errors.additionalDetails = 'Please provide details about your project scope, target cities, or equipment.';
    } else if (additionalDetails.trim().length < 10) {
      errors.additionalDetails = 'Please provide at least 10 characters describing your rollout scope.';
    }

    return errors;
  };

  const handleServiceClick = (service: RolloutServiceItem) => {
    setActiveService(service);
    setCurrentScreen('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToRollout = (service: RolloutServiceItem) => {
    if (!selectedServices.some(s => s.id === service.id)) {
      setSelectedServices(prev => [...prev, service]);
    }
    if (formErrors.services) {
      setFormErrors(prev => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
    setAddedServiceName(service.name);
    setShowConfirmationModal(true);
    setShowToast(true);
  };

  const handleRemoveService = (serviceId: string) => {
    setSelectedServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      const errorContainer = document.getElementById('rollout-form-top');
      if (errorContainer) {
        errorContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="rollouts-app-root">
      {/* =========================================================================
          SCREEN 1: NATIONWIDE ROLLOUTS SERVICE LIST
          ========================================================================= */}
      {currentScreen === 'list' && (
        <div className="rollout-screen-list">
          {/* Top Hero Banner */}
          <div className="rollout-hero-banner">
            <div className="rollout-hero-overlay" />
            <div className="container-wide rollout-hero-inner">
              <h1 className="rollout-hero-title">
                One Partner.<br />
                <span className="rollout-blue-accent">Every Location.</span>
              </h1>
              <p className="rollout-hero-subtitle">
                Full-service structured cabling, fiber, security, and multi-site deployments with consistent standards and guaranteed SLAs across the United States.
              </p>

              {/* Badges Strip */}
              <div className="rollout-hero-badges-row">
                <div className="rollout-hero-badge-pill">
                  <Globe size={15} className="rollout-badge-icon" />
                  <span>50+ Nationwide Markets</span>
                </div>
                <div className="rollout-hero-badge-pill">
                  <Clock size={15} className="rollout-badge-icon" />
                  <span>99% On-Time Delivery</span>
                </div>
                <div className="rollout-hero-badge-pill">
                  <ShieldCheck size={15} className="rollout-badge-icon" />
                  <span>Standardized Execution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service List Section */}
          <div className="container-wide rollout-content-container">
            <div className="rollout-section-heading-box">
              <h2 className="rollout-heading-title">Our Nationwide Rollout Services</h2>
              <p className="rollout-heading-desc">Select a service below to learn more.</p>
            </div>

            <div className="rollout-services-cards-grid">
              {rolloutServicesList.map((service) => {
                const isSelected = selectedServices.some(s => s.id === service.id);
                return (
                  <div
                    key={service.id}
                    className={`rollout-service-card-item ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="rollout-card-icon-wrap">
                      {renderServiceIcon(service.iconName, 26)}
                    </div>
                    <div className="rollout-card-text-wrap">
                      <div className="rollout-card-name">{service.name}</div>
                      <div className="rollout-card-tagline">{service.tagline}</div>
                    </div>
                    <div className="rollout-card-arrow-wrap">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Bottom Sticky Bar */}
          <div className="rollout-floating-bar-wrapper">
            <div className="container-wide">
              <button
                className="rollout-floating-cta-btn"
                onClick={() => {
                  setCurrentScreen('summary');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="rollout-floating-btn-left">
                  <span className="rollout-floating-icon">🎛️</span>
                  <span className="rollout-floating-text">My Rollout ({selectedServices.length})</span>
                </div>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SCREEN 2: SERVICE LEARN MORE (DETAIL VIEW)
          ========================================================================= */}
      {currentScreen === 'detail' && (
        <div className="rollout-screen-detail">
          {/* Detail Header & Breadcrumb */}
          <div className="rollout-detail-nav-bar">
            <div className="container-wide">
              <button
                className="rollout-back-btn"
                onClick={() => {
                  setCurrentScreen('list');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <ArrowLeft size={16} />
                <span>Back to All Rollout Services</span>
              </button>
            </div>
          </div>

          {/* Hero Header Card */}
          <div className="rollout-detail-hero-section">
            <div className="container-wide">
              <div className="rollout-detail-hero-card">
                <div className="rollout-detail-hero-img-wrap">
                  <img src="/datacenter_hero_bg.jpg" alt={activeService.name} />
                  <div className="rollout-detail-hero-overlay" />
                </div>
                <div className="rollout-detail-hero-content">
                  <div className="rollout-detail-icon-badge">
                    {renderServiceIcon(activeService.iconName, 28)}
                  </div>
                  <h1 className="rollout-detail-title">{activeService.name}</h1>
                  <p className="rollout-detail-tagline">
                    A complete deployment solution for any environment.
                  </p>
                </div>
              </div>

              {/* 4 Feature Badges */}
              <div className="rollout-features-strip">
                <div className="rollout-feature-badge">
                  <span className="rollout-feature-icon"><Building2 size={18} /></span>
                  <span>Reliable</span>
                </div>
                <div className="rollout-feature-badge">
                  <span className="rollout-feature-icon"><BarChart3 size={18} /></span>
                  <span>Scalable</span>
                </div>
                <div className="rollout-feature-badge">
                  <span className="rollout-feature-icon"><ShieldCheck size={18} /></span>
                  <span>Certified</span>
                </div>
                <div className="rollout-feature-badge">
                  <span className="rollout-feature-icon"><MapPin size={18} /></span>
                  <span>Nationwide</span>
                </div>
              </div>

              {/* Two Column Content: Overview & Capabilities */}
              <div className="rollout-detail-body-grid">
                {/* Left Column: Overview + Capabilities */}
                <div className="rollout-detail-main-col">
                  {/* Overview */}
                  <div className="rollout-content-block">
                    <h3 className="rollout-block-title">Overview</h3>
                    <p className="rollout-block-paragraph">{activeService.overview}</p>
                  </div>

                  {/* Capabilities Checklist */}
                  <div className="rollout-content-block">
                    <h3 className="rollout-block-title">Our Capabilities</h3>
                    <div className="rollout-capabilities-list">
                      {activeService.capabilities.map((cap, i) => (
                        <div key={i} className="rollout-capability-item">
                          <div className="rollout-check-circle">
                            <Check size={14} />
                          </div>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Choose Smart-Links */}
                  <div className="rollout-content-block">
                    <h3 className="rollout-block-title">Why Choose Smart-Links?</h3>
                    <div className="rollout-why-grid">
                      <div className="rollout-why-card">
                        <ShieldCheck size={22} className="rollout-why-icon" />
                        <div className="rollout-why-title">Certified Technicians</div>
                      </div>
                      <div className="rollout-why-card">
                        <CheckCircle2 size={22} className="rollout-why-icon" />
                        <div className="rollout-why-title">Consistent Standards</div>
                      </div>
                      <div className="rollout-why-card">
                        <Clock size={22} className="rollout-why-icon" />
                        <div className="rollout-why-title">On-Time Delivery</div>
                      </div>
                      <div className="rollout-why-card">
                        <MapPin size={22} className="rollout-why-icon" />
                        <div className="rollout-why-title">Nationwide Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Sticky Action Box */}
                <div className="rollout-detail-sidebar-col">
                  <div className="rollout-action-card-sticky">
                    <div className="rollout-sidebar-header">
                      <div className="rollout-sidebar-service-name">{activeService.name}</div>
                      <div className="rollout-sidebar-desc">Ready to integrate this into your multi-site project?</div>
                    </div>

                    <div className="rollout-sidebar-buttons-stack">
                      {selectedServices.some(s => s.id === activeService.id) ? (
                        <button
                          className="btn-add-rollout is-already-added"
                          onClick={() => {
                            setCurrentScreen('summary');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          <Check size={16} />
                          <span>Added to Rollout • View Summary</span>
                        </button>
                      ) : (
                        <button
                          className="btn-add-rollout"
                          onClick={() => handleAddToRollout(activeService)}
                        >
                          <Plus size={16} />
                          <span>Add to My Rollout</span>
                        </button>
                      )}

                      <button
                        className="btn-sidebar-outline"
                        onClick={() => onNavigate('contact')}
                      >
                        <MessageSquare size={16} />
                        <span>Talk to a Rollout Specialist</span>
                      </button>

                      <button
                        className="btn-sidebar-outline"
                        onClick={() => onOpenQuote(activeService.name)}
                      >
                        <FileText size={16} />
                        <span>Request a Quote</span>
                      </button>
                    </div>

                    <div className="rollout-sidebar-footer-link">
                      <button
                        className="rollout-text-link"
                        onClick={() => onNavigate('services')}
                      >
                        <span>View Full Service Catalog</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SCREEN 3: SERVICE ADDED CONFIRMATION MODAL & TOAST
          ========================================================================= */}
      {showConfirmationModal && (
        <div className="rollout-modal-backdrop" onClick={() => setShowConfirmationModal(false)}>
          <div className="rollout-modal-card" onClick={e => e.stopPropagation()}>
            <button
              className="rollout-modal-close-btn"
              onClick={() => setShowConfirmationModal(false)}
            >
              <X size={20} />
            </button>

            <div className="rollout-modal-icon-circle">
              <Check size={38} />
            </div>

            <h3 className="rollout-modal-title">Added to Your Rollout</h3>
            <p className="rollout-modal-text">
              <strong>{addedServiceName}</strong> has been added to your rollout requirements.
            </p>

            <div className="rollout-modal-actions">
              <button
                className="btn-modal-primary"
                onClick={() => {
                  setShowConfirmationModal(false);
                  setCurrentScreen('summary');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>View My Rollout ({selectedServices.length})</span>
                <ArrowRight size={15} />
              </button>

              <button
                className="btn-modal-secondary"
                onClick={() => setShowConfirmationModal(false)}
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Screen 3 Bottom Toast Bar */}
      {showToast && (
        <div className="rollout-toast-banner">
          <div className="rollout-toast-inner">
            <div className="rollout-toast-left">
              <div className="rollout-toast-check"><Check size={14} /></div>
              <span>Service added to your rollout</span>
            </div>
            <button
              className="rollout-toast-view-btn"
              onClick={() => {
                setShowToast(false);
                setCurrentScreen('summary');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              View Rollout
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          SCREEN 4: MY ROLLOUT SUMMARY & PROJECT INFORMATION FORM
          ========================================================================= */}
      {currentScreen === 'summary' && (
        <div className="rollout-screen-summary">
          <div className="rollout-detail-nav-bar">
            <div className="container-wide">
              <button
                className="rollout-back-btn"
                onClick={() => {
                  setCurrentScreen('list');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <ArrowLeft size={16} />
                <span>Back to Services List</span>
              </button>
            </div>
          </div>

          <div className="container-wide rollout-summary-container">
            {isSubmitted ? (
              <div className="rollout-success-card">
                <div className="rollout-success-icon-wrap">
                  <Check size={48} />
                </div>
                <h2 className="rollout-success-title">Rollout Request Received!</h2>
                <p className="rollout-success-p">
                  Thank you, <strong>{fullName}</strong> from <strong>{company}</strong>! We have received your rollout request for <strong>{locations}</strong> ({projectType}) scheduled around <strong>{startDate}</strong>. Our dedicated nationwide engineering team will contact you at <strong>{email}</strong> ({phone}) within 1 business day with a customized deployment plan.
                </p>
                <div className="rollout-success-summary-box">
                  <div className="rollout-summary-pill-label">Selected Services ({selectedServices.length}):</div>
                  <div className="rollout-success-chips">
                    {selectedServices.map(s => (
                      <span key={s.id} className="rollout-success-chip">{s.name}</span>
                    ))}
                  </div>
                  {additionalDetails && (
                    <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #e2e8f0', fontSize: '13px', color: '#475569' }}>
                      <strong>Submitted Scope:</strong> {additionalDetails}
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
                  <button
                    className="btn-hero-primary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentScreen('list');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span>Back to Rollout Services</span>
                  </button>
                  <button
                    className="btn-hero-dark-outline"
                    onClick={() => onNavigate('home')}
                  >
                    <span>Return to Home</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="rollout-summary-content-wrap">
                <div className="rollout-summary-header-box">
                  <h1 className="rollout-summary-title">My Rollout Summary</h1>
                  <p className="rollout-summary-subtitle">
                    Review your selected services and provide project details to receive a customized quote.
                  </p>
                </div>

                {/* Selected Services Tags / Cards List */}
                <div className="rollout-selected-services-box">
                  <div className="rollout-selected-list">
                    {selectedServices.length === 0 ? (
                      <div className="rollout-empty-state">
                        <p>No services currently selected.</p>
                      </div>
                    ) : (
                      selectedServices.map((service) => (
                        <div key={service.id} className="rollout-selected-item-row">
                          <div className="rollout-selected-item-left">
                            <span className="rollout-selected-item-icon">
                              {renderServiceIcon(service.iconName, 20)}
                            </span>
                            <span className="rollout-selected-item-name">{service.name}</span>
                          </div>
                          <button
                            className="rollout-selected-remove-btn"
                            onClick={() => handleRemoveService(service.id)}
                            title="Remove service"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  <button
                    className="btn-add-more-services"
                    onClick={() => {
                      setCurrentScreen('list');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <Plus size={16} />
                    <span>Add More Services</span>
                  </button>
                </div>

                {/* Project Information Form */}
                <form id="rollout-form-top" className="rollout-project-form" onSubmit={handleFormSubmit} noValidate>
                  <div className="rollout-form-header-row">
                    <div>
                      <h3 className="rollout-form-heading">Project Information & Scope</h3>
                      <p className="rollout-form-subheading">
                        All fields marked with <span className="req-star">*</span> are mandatory to generate an accurate deployment estimate.
                      </p>
                    </div>
                  </div>

                  {/* Top Alert Banner for Validation Errors */}
                  {attemptedSubmit && Object.keys(formErrors).length > 0 && (
                    <div className="rollout-form-error-banner">
                      <AlertCircle size={22} className="rollout-error-banner-icon" />
                      <div>
                        <strong>Incomplete Form Submission</strong>
                        <p>Please fill out all required fields below before requesting a quote. Blank submissions are not permitted.</p>
                      </div>
                    </div>
                  )}

                  {/* Contact Details Grid */}
                  <div className="rollout-form-subheading-group">
                    <span>1. Contact & Organization Details</span>
                  </div>

                  <div className="rollout-form-grid-2col">
                    {/* Full Name */}
                    <div className="rollout-form-group">
                      <label className="rollout-form-label">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <div className="rollout-input-icon-wrap">
                        <input
                          type="text"
                          className={`rollout-form-input ${formErrors.fullName ? 'has-error' : ''}`}
                          value={fullName}
                          onChange={e => handleFieldChange('fullName', setFullName, e.target.value)}
                          placeholder="e.g., Sarah Jenkins"
                        />
                        <User size={18} className="rollout-input-inner-icon" />
                      </div>
                      {formErrors.fullName && (
                        <div className="rollout-field-error-msg">
                          <AlertCircle size={13} />
                          <span>{formErrors.fullName}</span>
                        </div>
                      )}
                    </div>

                    {/* Work Email */}
                    <div className="rollout-form-group">
                      <label className="rollout-form-label">
                        Work Email <span className="req-star">*</span>
                      </label>
                      <div className="rollout-input-icon-wrap">
                        <input
                          type="email"
                          className={`rollout-form-input ${formErrors.email ? 'has-error' : ''}`}
                          value={email}
                          onChange={e => handleFieldChange('email', setEmail, e.target.value)}
                          placeholder="sarah.j@enterprise.com"
                        />
                        <Mail size={18} className="rollout-input-inner-icon" />
                      </div>
                      {formErrors.email && (
                        <div className="rollout-field-error-msg">
                          <AlertCircle size={13} />
                          <span>{formErrors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="rollout-form-group">
                      <label className="rollout-form-label">
                        Direct Phone Number <span className="req-star">*</span>
                      </label>
                      <div className="rollout-input-icon-wrap">
                        <input
                          type="tel"
                          className={`rollout-form-input ${formErrors.phone ? 'has-error' : ''}`}
                          value={phone}
                          onChange={e => handleFieldChange('phone', setPhone, e.target.value)}
                          placeholder="+1 (555) 019-2834"
                        />
                        <Phone size={18} className="rollout-input-inner-icon" />
                      </div>
                      {formErrors.phone && (
                        <div className="rollout-field-error-msg">
                          <AlertCircle size={13} />
                          <span>{formErrors.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="rollout-form-group">
                      <label className="rollout-form-label">
                        Company / Organization <span className="req-star">*</span>
                      </label>
                      <div className="rollout-input-icon-wrap">
                        <input
                          type="text"
                          className={`rollout-form-input ${formErrors.company ? 'has-error' : ''}`}
                          value={company}
                          onChange={e => handleFieldChange('company', setCompany, e.target.value)}
                          placeholder="e.g., Apex Retail Group"
                        />
                        <Building size={18} className="rollout-input-inner-icon" />
                      </div>
                      {formErrors.company && (
                        <div className="rollout-field-error-msg">
                          <AlertCircle size={13} />
                          <span>{formErrors.company}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Scope Grid */}
                  <div className="rollout-form-subheading-group" style={{ marginTop: '16px' }}>
                    <span>2. Rollout Scope & Timeline</span>
                  </div>

                  <div className="rollout-form-grid-3col">
                    {/* Number of Locations */}
                    <div className="rollout-form-group">
                      <label className="rollout-form-label">
                        Number of Locations <span className="req-star">*</span>
                      </label>
                      <select
                        className={`rollout-form-select ${formErrors.locations ? 'has-error' : ''}`}
                        value={locations}
                        onChange={e => handleFieldChange('locations', setLocations, e.target.value)}
                      >
                        <option value="">-- Select Locations --</option>
                        <option value="1 - 5 Locations">1 - 5 Locations</option>
                        <option value="6 - 20 Locations">6 - 20 Locations</option>
                        <option value="21 - 50 Locations">21 - 50 Locations</option>
                        <option value="51 - 100 Locations">51 - 100 Locations</option>
                        <option value="100+ Locations Nationwide">100+ Locations Nationwide</option>
                      </select>
                      {formErrors.locations && (
                        <div className="rollout-field-error-msg">
                          <AlertCircle size={13} />
                          <span>{formErrors.locations}</span>
                        </div>
                      )}
                    </div>

                    {/* Target Start Date */}
                    <div className="rollout-form-group">
                      <label className="rollout-form-label">
                        Target Start Date <span className="req-star">*</span>
                      </label>
                      <div className="rollout-input-icon-wrap">
                        <input
                          type="date"
                          className={`rollout-form-input ${formErrors.startDate ? 'has-error' : ''}`}
                          value={startDate}
                          onChange={e => handleFieldChange('startDate', setStartDate, e.target.value)}
                        />
                        <Calendar size={18} className="rollout-input-inner-icon" />
                      </div>
                      {formErrors.startDate && (
                        <div className="rollout-field-error-msg">
                          <AlertCircle size={13} />
                          <span>{formErrors.startDate}</span>
                        </div>
                      )}
                    </div>

                    {/* Project Type */}
                    <div className="rollout-form-group">
                      <label className="rollout-form-label">
                        Project Deployment Type <span className="req-star">*</span>
                      </label>
                      <select
                        className={`rollout-form-select ${formErrors.projectType ? 'has-error' : ''}`}
                        value={projectType}
                        onChange={e => handleFieldChange('projectType', setProjectType, e.target.value)}
                      >
                        <option value="">-- Select Project Type --</option>
                        <option value="Multi-Site Rollout">Multi-Site Deployment & Rollout</option>
                        <option value="New Construction">New Construction & Fit-Out</option>
                        <option value="Retrofit / Tech Upgrade">Retrofit / Technology Upgrade</option>
                        <option value="Maintenance & Ongoing Support">Maintenance & Ongoing Support</option>
                      </select>
                      {formErrors.projectType && (
                        <div className="rollout-field-error-msg">
                          <AlertCircle size={13} />
                          <span>{formErrors.projectType}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="rollout-form-group">
                    <div className="rollout-label-counter-row">
                      <label className="rollout-form-label">
                        Project Scope & Technical Details <span className="req-star">*</span>
                      </label>
                      <span className="rollout-char-counter">{additionalDetails.length}/500</span>
                    </div>
                    <textarea
                      className={`rollout-form-textarea ${formErrors.additionalDetails ? 'has-error' : ''}`}
                      rows={4}
                      maxLength={500}
                      value={additionalDetails}
                      onChange={e => handleFieldChange('additionalDetails', setAdditionalDetails, e.target.value)}
                      placeholder="Please specify target cities, facility types, hardware models, cable drops per site, or specific deadlines..."
                    />
                    {formErrors.additionalDetails && (
                      <div className="rollout-field-error-msg">
                        <AlertCircle size={13} />
                        <span>{formErrors.additionalDetails}</span>
                      </div>
                    )}
                  </div>

                  <div className="rollout-checkbox-row">
                    <input
                      type="checkbox"
                      id="specialist-check"
                      checked={wantSpecialist}
                      onChange={e => setWantSpecialist(e.target.checked)}
                      className="rollout-custom-checkbox"
                    />
                    <label htmlFor="specialist-check" className="rollout-checkbox-label">
                      I would like to speak directly with a dedicated nationwide rollout specialist.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-rollout-submit"
                  >
                    <span>Submit Rollout Quote Request</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="rollout-response-time-text">
                    We typically review specifications and respond within 1 business day.
                  </div>
                </form>

                {/* Bottom Trust Badges */}
                <div className="rollout-summary-trust-strip">
                  <div className="rollout-trust-item">
                    <Network size={22} className="rollout-trust-icon" />
                    <span>Nationwide Coverage</span>
                  </div>
                  <div className="rollout-trust-item">
                    <ShieldCheck size={22} className="rollout-trust-icon" />
                    <span>Certified Experts</span>
                  </div>
                  <div className="rollout-trust-item">
                    <Clock size={22} className="rollout-trust-icon" />
                    <span>On-Time Delivery</span>
                  </div>
                  <div className="rollout-trust-item">
                    <PhoneCall size={22} className="rollout-trust-icon" />
                    <span>Single Point of Contact</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
