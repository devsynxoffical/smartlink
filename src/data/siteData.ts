import type { ServiceItem, IndustryItem, ProjectItem, TestimonialItem, PartnerLogo, LeaderItem, LocationItem } from '../types';

export const leadershipData: LeaderItem[] = [
  {
    id: 'andrew-wilson',
    name: 'Andrew Wilson',
    role: 'President & CEO',
    bio: 'Visionary leadership with a focus on growth, innovation, and customer success.',
    image: '/andrew_wilson.jpg',
    fullBio: 'With over 25 years of executive leadership in telecommunications and physical layer infrastructure, Andrew guides Smart-Links with an unyielding commitment to engineering excellence, national client partnerships, and technological innovation.',
    linkedin: 'https://linkedin.com',
    email: 'awilson@smart-linkscs.com'
  },
  {
    id: 'michael-carter',
    name: 'Michael Carter',
    role: 'Chief Operating Officer',
    bio: 'Operational excellence driving nationwide delivery and client satisfaction.',
    image: '/michael_carter.jpg',
    fullBio: 'Michael oversees field operations, safety compliance, and nationwide project rollouts. His background across mission-critical logistics ensures every installation is completed on time, within budget, and to the highest standards.',
    linkedin: 'https://linkedin.com',
    email: 'mcarter@smart-linkscs.com'
  },
  {
    id: 'jennifer-martinez',
    name: 'Jennifer Martinez',
    role: 'Chief Technology Officer',
    bio: 'Leading technology strategy and ensuring innovative, scalable solutions.',
    image: '/jennifer_martinez.jpg',
    fullBio: 'A certified RCDD with deep expertise in optical networking and enterprise cybersecurity systems, Jennifer directs engineering standards, emerging technology adoption, and technical architecture across all client engagements.',
    linkedin: 'https://linkedin.com',
    email: 'jmartinez@smart-linkscs.com'
  }
];

export const locationsData: LocationItem[] = [
  {
    id: 'hq-orlando',
    name: 'Corporate Headquarters',
    address: '1234 Innovation Drive',
    cityStateZip: 'Orlando, FL 32801',
    phone: '(407) 555-0100',
    isHQ: true
  },
  {
    id: 'southeast-birmingham',
    name: 'Southeast Office',
    address: '2100 Riverchase Boulevard',
    cityStateZip: 'Birmingham, AL 35244',
    phone: '(205) 555-0188'
  },
  {
    id: 'northeast-iselin',
    name: 'Northeast Office',
    address: '100 Wood Avenue South',
    cityStateZip: 'Iselin, NJ 08830',
    phone: '(732) 555-0144'
  },
  {
    id: 'midwest-chicago',
    name: 'Midwest Office',
    address: '500 West Madison Street',
    cityStateZip: 'Chicago, IL 60661',
    phone: '(312) 555-0177'
  },
  {
    id: 'west-coast-san-jose',
    name: 'West Coast Office',
    address: '2150 North First Street',
    cityStateZip: 'San Jose, CA 95131',
    phone: '(408) 555-0199'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'structured-cabling',
    title: 'Structured Cabling Infrastructure',
    tagline: 'A solid foundation for a smarter, more connected future.',
    description: 'Design, installation, and support for high-performance voice, data, and network cabling systems.',
    image: '/card_structured_cabling.jpg',
    heroImage: '/services_hero_bg.jpg',
    iconName: 'Network',
    details: {
      overview: 'Our structured cabling systems provide the robust physical backbone that enterprise networks require for gigabit and multi-gigabit throughput. We engineer pathways, patch bays, and horizontal/backbone distributions that adhere strictly to ANSI/TIA-568 standards.',
      capabilities: [
        'Cat5e, Cat6, Cat6A (UTP & STP) Installations',
        'Backbone Copper & Riser Infrastructure',
        'Data Center Hot/Cold Aisle Containment Cabling',
        'Cable Tray & Conduit Pathway Design',
        'Patch Panel Termination & Cable Dressing',
        'Fluke DSX-8000 Level 2G Verification & Certification'
      ],
      standards: ['ANSI/TIA-568.2-D', 'ISO/IEC 11801', 'BICSI TDMM 14th Edition', 'NEC Article 800'],
      deliverables: ['Detailed CAD As-Builts', 'Certified Fluke Test Reports', '25-Year Manufacturer System Warranty', 'Laminated Rack Elevation Diagrams'],
      processSteps: [
        { step: '01', title: 'Site Survey & Engineering', desc: 'Detailed architectural walkthrough, pathway calculation, and cable drop mapping.' },
        { step: '02', title: 'Pathway & J-Hook Rigging', desc: 'Installation of seismic-rated cable trays, conduits, ladder racks, and sleeves.' },
        { step: '03', title: 'Precision Pulling & Dressing', desc: 'Careful cable pulls avoiding tension/bend radius stress, velcro bundled with zero zip-ties.' },
        { step: '04', title: 'Fluke Certification & As-Builts', desc: '100% channel testing with Fluke Versiv and comprehensive PDF test result packages.' }
      ],
      faq: [
        { q: 'What is the difference between Cat6 and Cat6A?', a: 'Cat6 supports 10 Gbps up to 55 meters, while Cat6A supports full 10 Gbps up to 100 meters and offers superior alien crosstalk suppression for dense environments.' },
        { q: 'Do you offer manufacturer warranties on structured cabling?', a: 'Yes, as certified partners with CommScope, Panduit, and Superior Essex, we provide 20 to 25-year full component and application assurance warranties.' }
      ]
    }
  },
  {
    id: 'fiber-optics',
    title: 'Fiber Optic Solutions',
    tagline: 'High-speed connectivity for high-performance environments.',
    description: 'End-to-end fiber solutions including multi-mode to single-mode, pre-termination, splicing, testing, and certification.',
    image: '/card_fiber_optics.jpg',
    heroImage: '/services_hero_bg.jpg',
    iconName: 'Zap',
    details: {
      overview: 'Ultra-fast optical interconnects for campus backbones, datacenter fabrics, and high-bandwidth industrial corridors. We deliver low-loss fusion splicing, high-density MTP/MPO fiber assemblies, and end-to-end OTDR validation.',
      capabilities: [
        'Single-Mode (OS2) & Multimode (OM3, OM4, OM5) Cabling',
        'Core Alignment Fusion Splicing & Ribbon Splicing',
        'MPO/MTP High-Density Trunking for 40G/100G/400G Networks',
        'Outdoor Armored & Direct-Burial Fiber Deployments',
        'OTDR (Optical Time Domain Reflectometer) Tier-2 Testing',
        'Emergency Fiber Break Locating & Rapid Splicing Repairs'
      ],
      standards: ['TIA-568.3-D Optical Fiber Standard', 'ITU-T G.652.D / G.657.A1', 'BICSI 002 Data Center'],
      deliverables: ['Tier 1 Optical Loss Test Sets (OLTS) Reports', 'Tier 2 OTDR Trace Profiles', 'Fusion Splice Loss Logs (<0.02dB)', 'Connector Endface Pass/Fail Fiber Scopes'],
      processSteps: [
        { step: '01', title: 'Optical Link Budgeting', desc: 'Calculation of total decibel loss budget across all connectors, splices, and fiber lengths.' },
        { step: '02', title: 'Conduit & Innerduct Placement', desc: 'Deploying smooth HDPE innerduct and pulling armored single-mode or multimode strands.' },
        { step: '03', title: 'Core Fusion Splicing', desc: 'Fujikura 90S precision fusion splicing inside controlled mobile labs or enclosures.' },
        { step: '04', title: 'Tier 2 OTDR Certification', desc: 'Bidirectional OTDR testing pinpointing attenuation, reflectance, and splice events.' }
      ],
      faq: [
        { q: 'When should we use Single-Mode (OS2) vs Multimode (OM4)?', a: 'Multimode is cost-effective for short campus and datacenter distances (<400m), whereas Single-Mode is ideal for long runs (>500m up to 40km) and future-proofing high speeds.' },
        { q: 'How fast can you respond to an emergency fiber cut?', a: 'Smart-Links offers rapid-response emergency splicing crews equipped with OTDRs and fusion equipment to restore dark fiber links quickly.' }
      ]
    }
  },
  {
    id: 'video-surveillance',
    title: 'Video Surveillance',
    tagline: 'Enhanced security. Greater peace of mind.',
    description: 'Advanced IP video surveillance systems designed to enhance safety, monitor assets, and provide peace of mind.',
    image: '/card_video_surveillance.jpg',
    heroImage: '/services_hero_bg.jpg',
    iconName: 'Camera',
    details: {
      overview: 'Next-generation AI-powered visual surveillance and security operations centers (SOC). High-resolution 4K/multisensor cameras, cloud-hybrid video management systems (VMS), and edge analytics for license plate recognition (LPR) and perimeter intrusion detection.',
      capabilities: [
        'Multi-Sensor, PTZ, Dome & Bullet 4K IP Cameras',
        'Enterprise VMS Integration (Milestone, Genetec, Avigilon, Verkada)',
        'AI Object Classification (People, Vehicles, PPE Detection)',
        'Thermal Imaging & Optical Perimeter Protection',
        'Low-Light & DarkFighter Night Vision Coverage',
        'Secure Cloud & On-Premises NVR/SAN Storage Archiving'
      ],
      standards: ['NDAA Compliance', 'ONVIF Profile S/G/T Conformant', 'UL 2802 Video Quality Standards'],
      deliverables: ['Camera Coverage Sight-Line Heatmaps', 'Storage & Bandwidth Calculation Matrices', '24/7 Remote Viewing Access Setup', 'Staff Operations Training & SOP Handbooks'],
      processSteps: [
        { step: '01', title: 'Field of View Design', desc: '3D modeling of camera angles, focal lengths, pixel density (PPM), and blind spot elimination.' },
        { step: '02', title: 'PoE+ Cabling & Mounting', desc: 'Direct Cat6A runs from secure IDF switches to ruggedized weather-resistant mounts.' },
        { step: '03', title: 'VMS & AI Analytics Config', desc: 'Configuring retention policies, motion zones, tripwires, and cloud recording.' },
        { step: '04', title: 'Focus Calibration & Sign-off', desc: 'Day and night illumination fine-tuning, focus lock, and security team training.' }
      ],
      faq: [
        { q: 'Are your video surveillance systems NDAA compliant?', a: 'Yes. We provide 100% NDAA-compliant camera systems certified for federal, municipal, and high-security enterprise installations.' },
        { q: 'Can we view footage remotely from our smartphones?', a: 'Yes, all modern systems include multi-platform mobile apps with biometric login and instant push alert notifications.' }
      ]
    }
  },
  {
    id: 'access-control',
    title: 'Access Control',
    tagline: 'Control access. Protect what matters.',
    description: 'Reliable access control systems to secure your facilities, people, and assets with flexible, scalable solutions.',
    image: '/card_access_control.jpg',
    heroImage: '/services_hero_bg.jpg',
    iconName: 'Lock',
    details: {
      overview: 'Protect key access points with biometric, mobile credential, and smart badge management. Seamlessly control gates, turnstiles, elevator dispatch, and server room enclosures with centralized policy enforcement.',
      capabilities: [
        'Mobile Credentialing (Apple Wallet / NFC / Bluetooth Low Energy)',
        'Biometric Facial Recognition & Fingerprint Scanners',
        'Smart Card (Mifare DESFire EV3, HID SEOS) Deployments',
        'Electrified Door Hardware, Magnetic Locks & Crash Bars',
        'Turnstiles, Barrier Arms & Vehicle Gate Integration',
        'Visitor Management & Badge Printing Kiosks'
      ],
      standards: ['FIPS 201 / PIV Compliance', 'OSDP v2 Secure Channel Protocol', 'Life Safety NFPA 101'],
      deliverables: ['Door Schedule & Hardware Matrix', 'Power Supply & Battery Backup Audits', 'Active Directory / Okta SSO Integration', 'Fail-Safe & Life Safety Egress Certification'],
      processSteps: [
        { step: '01', title: 'Door Hardware Audit', desc: 'Detailed review of fire ratings, egress codes, lock types, and ADA compliance.' },
        { step: '02', title: 'Controller & Power Installation', desc: 'Mounting UL 294 rated access control power supplies and multi-door controllers.' },
        { step: '03', title: 'Reader & Strike Termination', desc: 'Wiring OSDP encrypted readers, request-to-exit (REX) sensors, and door contacts.' },
        { step: '04', title: 'Database & Role Sync', desc: 'Importing badge directories, configuring schedules, holiday rules, and lockdown triggers.' }
      ],
      faq: [
        { q: 'What happens during a power outage or fire alarm?', a: 'All systems are engineered with battery backups and hardwired fire alarm relay cutoffs ensuring immediate fail-safe egress per NFPA 101.' }
      ]
    }
  },
  {
    id: 'das-systems',
    title: 'Distributed Antenna Systems (DAS)',
    tagline: 'Stronger wireless coverage. Everywhere it\'s needed.',
    description: 'In-building wireless coverage solutions to ensure strong, reliable cellular service everywhere it\'s needed.',
    image: '/card_das_antenna.jpg',
    heroImage: '/services_hero_bg.jpg',
    iconName: 'Radio',
    details: {
      overview: 'Eliminate cellular dead zones and guarantee public safety first-responder radio compliance (ERRCS). We engineer active and passive DAS networks for high-rise commercial buildings, hospitals, campuses, and venues.',
      capabilities: [
        'Public Safety Bi-Directional Amplifiers (BDA) & ERRCS',
        'Neutral Host Cellular DAS (AT&T, Verizon, T-Mobile)',
        'CBRS & Private 5G/LTE Microcell Installations',
        'iBwave 3D RF Signal Propagation Modeling',
        'Coaxial Hardline Cable (Heliax) & Donor Antenna Rigging',
        'NFPA 72 & 1221 AHJ Code Compliance Testing'
      ],
      standards: ['NFPA 1221 / IFC 510 Public Safety', 'FCC Part 90 Signal Booster Rules', 'UL 2524 Emergency In-Building Communication'],
      deliverables: ['iBwave 3D Coverage Heatmaps', 'Grid Testing & Signal Strength Grid Reports', 'AHJ Inspection & Sign-off Submittals', 'Annual BDA Battery & Link Budget Audits'],
      processSteps: [
        { step: '01', title: 'RF Benchmark & Grid Testing', desc: '20-grid or 40-grid RF signal measurement to determine baseline decibel levels.' },
        { step: '02', title: 'iBwave Engineering Design', desc: '3D structural modeling showing heatmaps, donor antenna azimuth, and splitter loss.' },
        { step: '03', title: 'RF Cabling & Antenna Rigging', desc: 'Installing low-PIM plenum coaxial cables, directional dome antennas, and BDA enclosures.' },
        { step: '04', title: 'AHJ Commissioning & Sign-Off', desc: 'Joint inspection with the local Fire Marshal to secure Certificate of Occupancy.' }
      ],
      faq: [
        { q: 'What is ERRCS and is it mandatory?', a: 'Emergency Responder Radio Coverage Systems (ERRCS) are mandated by IFC Section 510 and NFPA 1221 for newly constructed or renovated commercial buildings to ensure firefighter two-way radios operate inside.' }
      ]
    }
  },
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    tagline: 'Scalable IT solutions to keep your business ahead.',
    description: 'Scalable IT infrastructure and network solutions to keep your business running efficiently and securely.',
    image: '/card_it_solutions.jpg',
    heroImage: '/services_hero_bg.jpg',
    iconName: 'Cloud',
    details: {
      overview: 'Complete lifecycle IT hardware provisioning, rack-and-stack services, enterprise Wi-Fi 6E/7 deployments, and edge datacenter optimizations engineered for 99.999% uptime.',
      capabilities: [
        'Server Rack & Cabinet Setup with PDU Power Management',
        'Enterprise Switching, Routing & Firewall Deployments',
        'High-Density Wi-Fi 6E / Wi-Fi 7 Site Surveys (Ekahau)',
        'Uninterruptible Power Supply (UPS) & Generator Backup Systems',
        'MDF / IDF Buildouts & Clean Wire Management Remediation',
        'Audio/Visual & Conference Room Collaboration Tech'
      ],
      standards: ['IEEE 802.11be (Wi-Fi 7)', 'ASHRAE Data Center Thermal Guidelines', 'TIA-942-B Tier Architecture'],
      deliverables: ['Ekahau Wi-Fi Predictive & Active Survey Reports', 'Network Topology Visio Diagrams', 'Asset Tagging & Port-to-Patch Mapping Logs', '24/7 Managed Infrastructure Support SLAs'],
      processSteps: [
        { step: '01', title: 'Architecture & Capacity Planning', desc: 'Reviewing current bottlenecks, compute loads, switch port counts, and thermal airflow.' },
        { step: '02', title: 'Rack Elevation & Power Provisioning', desc: 'Installing 42U/48U racks, metered smart PDUs, UPS battery banks, and wire managers.' },
        { step: '03', title: 'Hardware Staging & Cutover', desc: 'Burn-in testing, firmware upgrades, VLAN port mapping, and color-coded patch cables.' },
        { step: '04', title: 'Documentation & Handover', desc: 'Detailed port maps, cable labeling sheets, and 24/7 technical monitoring setup.' }
      ],
      faq: [
        { q: 'Can you clean up and re-dress an existing messy server room?', a: 'Yes! We specialize in IDF/MDF closet cleanups, cable re-routing, custom length patch cords, and color-coded labeling with scheduled off-hours cutovers to prevent downtime.' }
      ]
    }
  },
  {
    id: 'data-center-infrastructure',
    title: 'Data Center Infrastructure',
    tagline: 'High-density containment, structured pathways, and optical fabrics.',
    description: 'Turnkey data center cabling, hot/cold aisle containment, server rack staging, and ultra-low-loss fiber backbones.',
    image: '/hero_server_room_blue_cables.jpg',
    heroImage: '/datacenter_hero_bg.jpg',
    iconName: 'Server',
    details: {
      overview: 'Engineered for maximum thermal efficiency and high-density throughput. We build mission-critical data center infrastructures complying with ANSI/TIA-942 standards, integrating overhead fiber raceways, underfloor copper pathways, and clean room power distribution.',
      capabilities: [
        'TIA-942 Tier I-IV Data Center Topology Architecture',
        'MTP/MPO 40G/100G/400G Ultra-Low-Loss Fiber Trunks',
        'Hot & Cold Aisle Thermal Containment Systems',
        'Custom Overhead Cable Tray & Ladder Rack Pathways',
        'Server Cabinet Rack-and-Stack & Smart PDU Metering',
        'Zero-Downtime Migration & Cable De-Installation'
      ],
      standards: ['ANSI/TIA-942-B', 'BICSI 002 Data Center Standard', 'ASHRAE TC 9.9 Thermal Guidelines'],
      deliverables: ['CFD Thermal Airflow Models', 'Tier 2 Bidirectional OTDR Fiber Certifications', 'Rack Elevation CAD As-Builts', 'Cable Schedule & Port Mapping Database'],
      processSteps: [
        { step: '01', title: 'Aisle Containment & Layout', desc: 'Designing thermal containment zones, rack spacing, and overhead raceway heights.' },
        { step: '02', title: 'Pathway & Fiber Backbone Rigging', desc: 'Deploying yellow Fiber-Duct raceways and high-density MPO pre-terminated trunks.' },
        { step: '03', title: 'Cabinet Integration & PDU Power', desc: 'Mounting zero-U smart PDUs, vertical cable organizers, and server sliding rails.' },
        { step: '04', title: 'Fluke Certification & Commissioning', desc: '100% channel verification with Fluke Versiv and thermal camera imaging inspection.' }
      ],
      faq: [
        { q: 'How do you prevent hot spots and airflow recirculation?', a: 'We install modular hot/cold aisle containment barriers, blanking panels in all empty rack spaces, and brush grommets on all cable pass-throughs.' },
        { q: 'Can you handle live data center cable cleanups?', a: 'Yes, our certified technicians work within strict MOP (Method of Procedure) protocols to safely de-install abandoned cables and re-dress live circuits without service disruption.' }
      ]
    }
  },
  {
    id: 'nationwide-rollouts',
    title: 'Nationwide Rollouts',
    tagline: 'Multi-site technology deployments executed with precision.',
    description: 'Centralized project management and standardized network, cabling, and POS rollouts across hundreds of sites simultaneously.',
    image: '/featured_building_hd.jpg',
    heroImage: '/about_hero_bg.jpg',
    iconName: 'Globe',
    details: {
      overview: 'Seamless, large-scale multi-site technology deployments across the United States. Smart-Links serves as your single point of contact, ensuring unified installation standards, strict schedule adherence, and real-time portal reporting across all geographical markets.',
      capabilities: [
        'Multi-Site Retail & Hospitality Structured Cabling Rollouts',
        'Nationwide POS & Kiosk Hardware Upgrades',
        'Digital Signage & Audio/Visual Deployments',
        'Centralized PMO with Real-Time Deliverable Tracking',
        'Rapid-Response Field Dispatch & Escalation Protocols',
        'Standardized Deliverables & Uniform As-Built Packages'
      ],
      standards: ['Single SOW / Nationwide SLA', 'PMI Project Management Standards', 'BICSI Uniform Installation Quality'],
      deliverables: ['Centralized Project Dashboard Access', 'Daily Site Completion Sign-Off Sheets', 'High-Res As-Built Photo Packages', 'Consolidated Monthly Invoicing'],
      processSteps: [
        { step: '01', title: 'Pilot Site Validation', desc: 'Executing 1-3 proof-of-concept installations to solidify standard installation playbooks.' },
        { step: '02', title: 'Logistics & Crew Dispatch', desc: 'Coordinating regional technician teams, hardware staging, and on-time site arrival.' },
        { step: '03', title: 'Standardized Execution', desc: 'Uniform cabling, mounting, and testing following strict checklist quality standards.' },
        { step: '04', title: 'Central Sign-Off & Turnkey Closeout', desc: 'Instant photo upload, manager sign-off, and customer portal approval.' }
      ],
      faq: [
        { q: 'How many locations can Smart-Links handle simultaneously?', a: 'Our network of vetted, certified technicians can execute simultaneous rollouts across 50 to 500+ locations on synchronized schedules.' },
        { q: 'Do you provide overnight and off-hours service for retail?', a: 'Yes! Over 70% of our retail and hospitality rollout work is performed during off-hours to prevent any disruption to revenue and business operations.' }
      ]
    }
  }
];

export const industriesData: IndustryItem[] = [
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Scalable infrastructure for office buildings, corporate campuses, and mixed-use facilities.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    heroImage: '/featured_building.jpg',
    iconName: 'Building2',
    compliance: 'BICSI / ANSI-TIA-568',
    solutions: ['High-density Cat6A horizontal cabling', 'Multi-tenant fiber risers', 'Mobile credential access control', 'Smart conference AV integration'],
    challenges: [
      'Multi-tenant bandwidth management and secure physical partitioning.',
      'Aesthetic concealment of cabling in architectural modern offices.',
      'Fast tenant fit-outs with zero disruption to neighboring suites.'
    ],
    featuredTech: ['Cat6A UTP/STP Cabling', 'MPO Multi-Fiber Risers', 'Cloud-Managed Access Control', 'Conference Room PoE Displays'],
    keyBenefits: ['Flexible modular expansion for evolving office layouts', '25-Year performance warranty', 'Turnkey project management from design to turnover']
  },
  {
    id: 'industrial',
    title: 'Industrial',
    description: 'Rugged, high-performance cabling solutions for manufacturing, warehouses, and industrial environments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    heroImage: '/datacenter_hero_bg.jpg',
    iconName: 'Factory',
    compliance: 'IP67 / NEMA 4X / NFPA 70',
    solutions: ['Armored fiber optic links', 'Harsh environment shielded cabling', 'High-bay security surveillance', 'Automated logistics wireless DAS'],
    challenges: [
      'High electromagnetic interference (EMI) from heavy machinery and motors.',
      'Extreme temperature swings, moisture, dust, and chemical exposure.',
      'Massive square footage requiring long-distance optical distribution.'
    ],
    featuredTech: ['Industrial Shielded Foil Twisted Pair (SF/UTP)', 'Armored Tactical Fiber Cables', 'NEMA 4X Weatherproof Enclosures', 'High-Gain Long Range Directional APs'],
    keyBenefits: ['Extreme physical durability against vibration and crushing', 'Continuous 24/7 uptime for automated manufacturing lines', 'Compliance with hazardous location fire safety codes']
  },
  {
    id: 'government',
    title: 'Government',
    description: 'Secure and compliant infrastructure for federal, state, and local government facilities.',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    heroImage: '/about_hero_bg.jpg',
    iconName: 'Landmark',
    compliance: 'FIPS 201 / PIV / NDAA',
    solutions: ['FIPS-compliant card access readers', 'Air-gapped secure fiber conduits', 'Classified conference room cabling', 'NDAA-approved video surveillance'],
    challenges: [
      'Strict federal security mandates including TAA and NDAA Section 889 compliance.',
      'Need for physical separation between unclassified and classified networks (SIPRNet/NIPRNet).',
      'Rigorous background checks and security clearance requirements for installation crews.'
    ],
    featuredTech: ['FIPS 201 Approved Smart Readers', 'NDAA 4K Surveillance Cameras', 'Interlocking Armored Optical Raceway', 'Tamper-Evident Enclosures'],
    keyBenefits: ['Fully certified and vetted US citizen technicians', 'Turnkey audit-ready documentation', 'Strict conformance to federal procurement guidelines']
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Reliable networks for schools, colleges, and universities to support learning and innovation.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    heroImage: '/featured_building.jpg',
    iconName: 'GraduationCap',
    compliance: 'E-Rate Eligible / FERPA',
    solutions: ['Campus-wide Wi-Fi 6E/7 coverage', 'Classroom interactive display cabling', 'Emergency lockdown panic systems', 'Stadium and auditorium DAS'],
    challenges: [
      'Simultaneous device connection surges during lecture hours and exams.',
      'Campus safety, emergency notification, and rapid lockdown integration.',
      'Compressed installation windows strictly limited to summer and holiday breaks.'
    ],
    featuredTech: ['High-Density Wi-Fi 6E Access Points', 'PoE++ Classrooms Switches', 'Integrated Emergency Blue Light Stations', 'Inter-Building OSP Single-Mode Fiber'],
    keyBenefits: ['E-Rate eligible infrastructure design', 'Uncompromised student and staff safety systems', 'Seamless high-capacity digital learning experiences']
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'High-availability infrastructure for hospitals, clinics, and healthcare facilities.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    heroImage: '/about_hero_bg.jpg',
    iconName: 'PlusSquare',
    compliance: 'HIPAA / TIA-1179 Healthcare Standard',
    solutions: ['Plenum-rated antimicrobial cabling', 'Nurse call & patient monitoring integration', 'Strict bio-security access control', 'Low-EMI medical imaging data feeds'],
    challenges: [
      'Zero tolerance for network interruption during life-critical patient monitoring.',
      'Strict ICRA (Infection Control Risk Assessment) containment during ceiling work.',
      'Heavy RF and EMI shielding requirements around MRI and radiology suites.'
    ],
    featuredTech: ['TIA-1179 Healthcare Grade Pathways', 'Antimicrobial Outer Jacketed Cables', 'Hospital-Grade Isolation Transformers', 'Mobile Cart Real-Time Location Systems (RTLS)'],
    keyBenefits: ['ICRA compliant dust containment certified crews', 'HIPAA protected physical security perimeter', 'Rock-solid medical device telemetry reliability']
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Connected experiences for hotels, resorts, and entertainment venues.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    heroImage: '/featured_building.jpg',
    iconName: 'Hotel',
    compliance: 'PCI-DSS / Brand Standards',
    solutions: ['Guest room high-speed internet (HSIA)', 'Keyless mobile door lock systems', 'Discreet public area surveillance', 'Poolside & ballroom event Wi-Fi'],
    challenges: [
      'Meeting demanding hotel brand standard technical specifications (Marriott, Hilton, Hyatt).',
      'High density wireless in ballrooms and conference centers without aesthetic intrusion.',
      'Ensuring seamless mobile key entry and IoT room automation from day one.'
    ],
    featuredTech: ['In-Wall Hospitality Access Points with PoE Out', 'Bluetooth Low Energy (BLE) Door Locks', 'Hidden Micro-Dome 4K Cameras', 'Outdoor High-Capacity Weatherproof Wi-Fi'],
    keyBenefits: ['Elevated guest review scores through flawless Wi-Fi', 'Discreet installations preserving luxury design aesthetics', 'Centralized multi-property management']
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Flexible cabling and security solutions for single and multi-location retail environments.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
    heroImage: '/datacenter_hero_bg.jpg',
    iconName: 'ShoppingBag',
    compliance: 'PCI-DSS Tier 1',
    solutions: ['POS terminal reliable networking', 'Overhead customer traffic analytics cameras', 'EAS anti-theft pedestal connectivity', 'Digital signage media distribution'],
    challenges: [
      'Rapid store openings requiring fast-track nationwide deployment coordination.',
      'Strict PCI-DSS compliance requirements for cardholder data environments.',
      'Minimizing retail floor disruption by executing work during overnight hours.'
    ],
    featuredTech: ['High-Performance Cat6 Drops to POS', 'AI Foot Traffic & Heatmap Video Cameras', 'Digital Menu Board High-Definition Video Extenders', 'Secure Isolated Cash Wrap Cabling'],
    keyBenefits: ['Nationwide simultaneous store rollout capabilities', 'Off-hours installations with zero lost sales', 'Strict PCI-DSS physical layer compliance']
  },
  {
    id: 'sports-entertainment',
    title: 'Sports & Entertainment',
    description: 'High-capacity infrastructure for stadiums, arenas, and large venues.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    heroImage: '/featured_building.jpg',
    iconName: 'RadioTower',
    compliance: 'Ultra-High Density RF Standards',
    solutions: ['Under-seat stadium Wi-Fi antennas', '4K broadcast fiber transmission lines', 'Mass transit ticketing turnstiles', 'Jumbotron video feed pathways'],
    challenges: [
      'Extreme spectator density (60,000+ fans uploading video simultaneously).',
      'Massive physical structures requiring specialized rigging and weatherproofing.',
      'Real-time low-latency broadcast requirements for live television transmission.'
    ],
    featuredTech: ['Under-Seat Handrail Enclosures for APs', 'SMPTE Broadcast Fiber Cables', 'High-Density Cellular Multi-Operator DAS', 'High-Speed Automated Turnstile Data Lines'],
    keyBenefits: ['Flawless fan connectivity and mobile ticketing experience', 'Rock-solid broadcast television transmission links', 'Instant concession and point-of-sale response times']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'morgan-stanley',
    title: 'Morgan Stanley Corporate Offices',
    client: 'Morgan Stanley',
    category: 'Financial',
    categoryLabel: 'FINANCIAL SERVICES',
    description: 'Structured cabling and network infrastructure across multiple office floors with zero downtime cutover.',
    image: '/project_morgan_stanley.jpg',
    logoText: 'Morgan Stanley',
    logoBg: '#002B49',
    scope: ['1,800+ Cat6A Drops', 'Dual 100G Multimode Fiber Backbone', 'MDF Clean Room Architecture', 'Fluke Certified Testing'],
    location: 'New York, NY',
    year: '2024'
  },
  {
    id: 'chanel-flagship',
    title: 'CHANEL Flagship Boutique',
    client: 'CHANEL',
    category: 'Retail',
    categoryLabel: 'RETAIL',
    description: 'High-performance cabling and discreet luxury security systems for a flagship retail location.',
    image: '/project_chanel.jpg',
    logoText: 'CHANEL',
    logoBg: '#111111',
    scope: ['Architectural Hidden Cable Paths', '4K High-Res AI Analytics Cameras', 'Biometric High-Value Vault Access', 'Bespoke Point of Sale Drops'],
    location: 'Miami, FL',
    year: '2024'
  },
  {
    id: 'walmart-supercenter',
    title: 'Walmart Regional Supercenter',
    client: 'Walmart',
    category: 'Retail',
    categoryLabel: 'RETAIL',
    description: 'Structured cabling, warehouse wireless infrastructure, and enterprise security solutions.',
    image: '/project_walmart.jpg',
    logoText: 'Walmart ✽',
    logoBg: '#0071DC',
    scope: ['220,000 sq ft High-Bay Wi-Fi', 'Fiber Backbone between Distribution Hubs', 'IP Video Surveillance across Perimeter', 'Automated Scan & Go Cabling'],
    location: 'Orlando, FL',
    year: '2023'
  },
  {
    id: 'the-home-depot',
    title: 'The Home Depot Store Modernization',
    client: 'The Home Depot',
    category: 'Retail',
    categoryLabel: 'RETAIL',
    description: 'Network infrastructure and security systems for multiple locations.',
    image: '/project_home_depot.jpg',
    logoText: 'THE HOME DEPOT',
    logoImage: '/logo_home_depot.png',
    logoBg: '#F96302',
    scope: ['Industrial Grade Cat6 Drops', 'Lumber Yard Long-Range Wireless', 'Loss Prevention PTZ Cameras', 'Overnight Phased Deployment'],
    location: 'Tampa, FL',
    year: '2023'
  },
  {
    id: 'lowes-distribution',
    title: "Lowe's Logistics & Retail Center",
    client: "Lowe's",
    category: 'Retail',
    categoryLabel: 'RETAIL',
    description: 'Cabling infrastructure and technology solutions to support operations.',
    image: '/project_lowes.jpg',
    logoText: "LOWE'S",
    logoImage: '/logo_lowes.svg',
    logoBg: '#004990',
    scope: ['Conduit Riser Installation', 'Emergency Communication BDA System', 'RFID Portal Cabling', 'MDF Server Racks & Cable Trays'],
    location: 'Atlanta, GA',
    year: '2023'
  },
  {
    id: 'hilton-resort',
    title: 'Hilton Grand Luxury Resort & Spa',
    client: 'Hilton',
    category: 'Hospitality',
    categoryLabel: 'HOSPITALITY',
    description: 'Structured cabling, seamless Wi-Fi, and security systems for a premium guest experience across 450 rooms.',
    image: '/project_hilton.jpg',
    logoText: 'Hilton',
    logoImage: '/logo_hilton.png',
    logoBg: '#ffffff',
    scope: ['450 Guest Room Ethernet Drops', 'Cellular In-Building DAS Coverage', 'Pool & Convention Center Wi-Fi 6', 'Mobile Key Reader Integration'],
    location: 'Orlando, FL',
    year: '2024'
  },
  {
    id: 'holiday-inn-express',
    title: 'Holiday Inn Express & Suites',
    client: 'Holiday Inn',
    category: 'Hospitality',
    categoryLabel: 'HOSPITALITY',
    description: 'Turnkey network infrastructure and surveillance systems across multiple hospitality properties.',
    image: '/project_holiday_inn.jpg',
    logoText: 'Holiday Inn',
    logoImage: '/logo_holiday_inn.png',
    logoBg: '#ffffff',
    scope: ['Brand Standard Cat6 Installation', 'Corridor HD Dome Cameras', 'Back-of-House Access Control', 'Property Management System Cabling'],
    location: 'Jacksonville, FL',
    year: '2023'
  },
  {
    id: 'louis-vuitton-maison',
    title: 'Louis Vuitton Flagship Maison',
    client: 'Louis Vuitton',
    category: 'Retail',
    categoryLabel: 'RETAIL',
    description: 'Structured cabling and advanced security systems for a flagship location.',
    image: '/project_louis_vuitton.jpg',
    logoText: 'LOUIS VUITTON',
    logoImage: '/logo_louis_vuitton.png',
    logoBg: '#ffffff',
    scope: ['Micro-Conduit Hidden Runs', 'Facial Recognition Access Control', 'High-Speed Fiber Optics', 'VIP Lounge Audio/Visual Networks'],
    location: 'Palm Beach, FL',
    year: '2024'
  },
  {
    id: 'multi-industry-partners',
    title: 'And Many More Enterprise Clients',
    client: 'And Many More...',
    category: 'Multi-Industry',
    categoryLabel: 'MULTI-INDUSTRY',
    description: 'Delivering tailored solutions for businesses of all sizes, across industries.',
    image: '/project_and_many_more.jpg',
    logoText: 'And Many More...',
    logoBg: '#0052FF',
    scope: ['Commercial Office Parks', 'Government Municipal Facilities', 'Regional Medical Centers', 'Universities & Research Labs'],
    location: 'Nationwide, USA',
    year: '2024'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'Smart-Links delivered a complex infrastructure project on time, with exceptional quality and professionalism. They are a trusted partner from start to finish.',
    author: 'PROJECT CLIENT',
    role: 'FACILITIES DIRECTOR',
    company: 'FORTUNE 500 COMPANY'
  },
  {
    id: 't2',
    quote: 'The level of craftsmanship their cabling technicians displayed was first-class. Our MDF and IDF closets are spotless, fully certified, and easily expandable.',
    author: 'MICHAEL R.',
    role: 'VP OF INFORMATION TECHNOLOGY',
    company: 'SOUTHEAST HEALTH SYSTEM'
  },
  {
    id: 't3',
    quote: 'Handling multi-site retail rollouts with tight timelines is tough. Smart-Links hit every milestone without disrupting a single hour of store trading.',
    author: 'SARAH JENKINS',
    role: 'DIRECTOR OF RETAIL OPERATIONS',
    company: 'NATIONAL LUXURY RETAILER'
  }
];

export const partnerLogos: PartnerLogo[] = [
  { name: 'bicsi', tagline: 'CORPORATE MEMBER', badge: 'BICSI Corporate Member' },
  { name: 'COMMSCOPE', tagline: 'CERTIFIED INSTALLER', badge: 'CommScope Certified Partner' },
  { name: 'PANDUIT', tagline: 'ENTERPRISE PARTNER', badge: 'Panduit Certified Infrastructure' },
  { name: 'FLUKE networks', tagline: 'VERIFIED TESTING', badge: 'Fluke Networks Certified Cabling Test' }
];

export const statsOverview = [
  { value: '10+', label: 'Industries Served' },
  { value: '100+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: 'Built for What\'s Next', label: 'Future-Ready Infrastructure' }
];
