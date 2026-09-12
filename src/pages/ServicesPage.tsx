import React from 'react';
import type { NavTab, ServiceItem } from '../types';
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Clock,
  BarChart3,
  Building2,
  Truck
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const StructuredCablingIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 23L10 18" />
      <path d="M6.5 24.5L11.5 19.5" />
      <path d="M8 16L12 20" />
      <path d="M9.5 14.5L17.5 6.5C18.3 5.7 19.7 5.7 20.5 6.5L21.5 7.5C22.3 8.3 22.3 9.7 21.5 10.5L13.5 18.5L9.5 14.5Z" />
      <path d="M15 5L18 8" />
      <path d="M19 13L21 11" />
      <path d="M17 15L19 13" />
    </svg>
  );

  const FiberOpticIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22C6 19 8 16.5 11 15" />
      <circle cx="11" cy="15" r="2" />
      <path d="M12.5 13.5C14 10 17 7 21 6" />
      <path d="M13 14.5C16 13 18.5 12 23 12" />
      <path d="M13 16C15.5 16.5 18 18 21 21" />
      <path d="M12 13C12.5 9.5 14 7 16.5 4.5" />
      <circle cx="21" cy="6" r="1.6" />
      <circle cx="23" cy="12" r="1.6" />
      <circle cx="21" cy="21" r="1.6" />
      <circle cx="16.5" cy="4.5" r="1.6" />
    </svg>
  );

  const DataCenterIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="22" height="5.5" rx="2.5" />
      <rect x="3" y="11.25" width="22" height="5.5" rx="2.5" />
      <rect x="3" y="18.5" width="22" height="5.5" rx="2.5" />
      <circle cx="7" cy="6.75" r="0.9" fill="currentColor" />
      <circle cx="10" cy="6.75" r="0.9" fill="currentColor" />
      <circle cx="7" cy="14" r="0.9" fill="currentColor" />
      <circle cx="10" cy="14" r="0.9" fill="currentColor" />
      <circle cx="7" cy="21.25" r="0.9" fill="currentColor" />
      <circle cx="10" cy="21.25" r="0.9" fill="currentColor" />
      <line x1="15" y1="6.75" x2="21" y2="6.75" />
      <line x1="15" y1="14" x2="21" y2="14" />
      <line x1="15" y1="21.25" x2="21" y2="21.25" />
    </svg>
  );

  const VideoSurveillanceIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14V7" />
      <path d="M4 10.5H8" />
      <path d="M8 10.5L11 13" />
      <path d="M9 10L20 15.5" />
      <path d="M10 12.5L19 17C19.5 17.2 20.2 17 20.5 16.5L22 13.5C22.2 13 22 12.3 21.5 12L12.5 7.5C12 7.3 11.3 7.5 11 8L9.5 11C9.3 11.5 9.5 12.2 10 12.5Z" />
      <path d="M20 17.5L23.5 19.2" />
      <circle cx="17" cy="16" r="0.8" fill="currentColor" />
    </svg>
  );

  const AccessControlIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="18" height="13" rx="3" />
      <path d="M9 11V7.5C9 4.7 11.2 2.5 14 2.5C16.8 2.5 19 4.7 19 7.5V11" />
      <circle cx="14" cy="16.5" r="1.8" />
      <path d="M14 18.3V20.5" />
    </svg>
  );

  const DasIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="12" r="2.2" />
      <path d="M14 14.2V24" />
      <path d="M10.5 24L14 18L17.5 24" />
      <path d="M12 21H16" />
      <path d="M9.5 8A6.5 6.5 0 0 0 9.5 16" />
      <path d="M6 5A11.5 11.5 0 0 0 6 19" />
      <path d="M18.5 8A6.5 6.5 0 0 1 18.5 16" />
      <path d="M22 5A11.5 11.5 0 0 1 22 19" />
    </svg>
  );

  const ItSolutionsIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="22" height="14" rx="2" />
      <path d="M9 23.5H19" />
      <path d="M14 18.5V23.5" />
      <path d="M14 8.5V14.5" />
      <path d="M11 11.5H17" />
      <circle cx="14" cy="11.5" r="1.2" fill="currentColor" />
    </svg>
  );

  const NationwideRolloutsIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 24.5C14 24.5 21 17.5 21 11.5C21 7.6 17.9 4.5 14 4.5C10.1 4.5 7 7.6 7 11.5C7 17.5 14 24.5 14 24.5Z" />
      <circle cx="14" cy="11.5" r="2.8" />
    </svg>
  );

  const solutionCards = [
    {
      id: 'structured-cabling',
      title: 'Structured Cabling',
      desc: 'Cat5e, Cat6, Cat6A, Cat7, Cat8 and more.',
      icon: <StructuredCablingIcon />
    },
    {
      id: 'fiber-optics',
      title: 'Fiber Optic Solutions',
      desc: 'Aerial and underground fiber. Splicing, testing and more.',
      icon: <FiberOpticIcon />
    },
    {
      id: 'data-center-infrastructure',
      title: 'Data Center Infrastructure',
      desc: 'Buildouts, racking, stacking, patching and more.',
      icon: <DataCenterIcon />
    },
    {
      id: 'video-surveillance',
      title: 'Video Surveillance',
      desc: 'Analog, IP, servers, monitoring and more.',
      icon: <VideoSurveillanceIcon />
    },
    {
      id: 'access-control',
      title: 'Access Control',
      desc: 'Card readers, mobile credentials, biometrics and more.',
      icon: <AccessControlIcon />
    },
    {
      id: 'das-systems',
      title: 'Distributed Antenna Systems (DAS)',
      desc: 'In-building wireless coverage and public safety DAS.',
      icon: <DasIcon />
    },
    {
      id: 'it-solutions',
      title: 'IT Solutions',
      desc: 'Networks, servers, cloud, security and more.',
      icon: <ItSolutionsIcon />
    },
    {
      id: 'nationwide-rollouts',
      title: 'Nationwide Rollouts',
      desc: 'Multi-site deployments, standardized solutions across the U.S.',
      icon: <NationwideRolloutsIcon />
    }
  ];

  const RetailIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );

  const FinancialIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="21" x2="22" y2="21" />
      <line x1="4" y1="21" x2="4" y2="10" />
      <line x1="9" y1="21" x2="9" y2="10" />
      <line x1="15" y1="21" x2="15" y2="10" />
      <line x1="20" y1="21" x2="20" y2="10" />
      <polygon points="12 2 2 7 22 7 12 2" />
    </svg>
  );

  const DataCentersIndustryIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="5" rx="1.5" />
      <rect x="2" y="9.5" width="20" height="5" rx="1.5" />
      <rect x="2" y="17" width="20" height="5" rx="1.5" />
      <line x1="6" y1="4.5" x2="6.01" y2="4.5" strokeWidth="3" />
      <line x1="6" y1="12" x2="6.01" y2="12" strokeWidth="3" />
      <line x1="6" y1="19.5" x2="6.01" y2="19.5" strokeWidth="3" />
    </svg>
  );

  const RealEstateIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="8" height="15" rx="1" />
      <rect x="13" y="2" width="8" height="19" rx="1" />
      <path d="M6 10h2M6 14h2M16 6h2M16 10h2M16 14h2M16 18h2" />
    </svg>
  );

  const HospitalityIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16" />
      <path d="M2 13h20" />
      <path d="M22 13v7" />
      <path d="M6 8h4a2 2 0 0 1 2 2v3H4v-3a2 2 0 0 1 2-2z" />
      <circle cx="7" cy="6" r="1.5" />
    </svg>
  );

  const HealthcareIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 2h8v6h6v8h-6v6H8v-6H2V8h6V2z" />
    </svg>
  );

  const GovernmentIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21h16" />
      <path d="M5 21v-7" />
      <path d="M19 21v-7" />
      <path d="M9 21v-4" />
      <path d="M15 21v-4" />
      <path d="M4 14h16" />
      <path d="M12 3v3" />
      <path d="M8 14c0-3.5 1.8-6 4-6s4 2.5 4 6" />
    </svg>
  );

  const EducationIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );

  const IndustrialIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M2 20V8l6 4V8l6 4V4h6v16" />
      <path d="M16 8h2M16 12h2M16 16h2" />
    </svg>
  );

  const EnterpriseIcon = () => (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M12 7.5v3.5" />
      <path d="M10.2 13.5L7.8 15.8" />
      <path d="M13.8 13.5L16.2 15.8" />
      <circle cx="12" cy="12.5" r="1.5" />
    </svg>
  );

  const industriesTiles = [
    { name: 'Retail', icon: <RetailIcon />, tab: 'industry-detail', subId: 'retail' },
    { name: 'Financial Services', icon: <FinancialIcon />, tab: 'industries' },
    { name: 'Data Centers', icon: <DataCentersIndustryIcon />, tab: 'service-detail', subId: 'data-center-infrastructure' },
    { name: 'Commercial Real Estate', icon: <RealEstateIcon />, tab: 'industry-detail', subId: 'commercial' },
    { name: 'Hospitality & Hotels', icon: <HospitalityIcon />, tab: 'industry-detail', subId: 'hospitality' },
    { name: 'Healthcare', icon: <HealthcareIcon />, tab: 'industry-detail', subId: 'healthcare' },
    { name: 'Government', icon: <GovernmentIcon />, tab: 'industry-detail', subId: 'government' },
    { name: 'Education', icon: <EducationIcon />, tab: 'industry-detail', subId: 'education' },
    { name: 'Industrial', icon: <IndustrialIcon />, tab: 'industry-detail', subId: 'industrial' },
    { name: 'Multi-Site Enterprise', icon: <EnterpriseIcon />, tab: 'industries' }
  ];

  return (
    <div className="services-carbon-root">
      {/* 1. HERO SECTION */}
      <section className="services-carbon-hero">
        <div className="container-wide">
          <div className="services-hero-grid">
            <div className="services-hero-content-left">
              <div className="services-hero-eyebrow">
                INFRASTRUCTURE TODAY. A STRONGER TOMORROW.
              </div>
              <h1 className="services-hero-h1">
                YOUR COMPLETE<br />
                INFRASTRUCTURE<br />
                PARTNER. <span className="blue-accent">NATIONWIDE.</span>
              </h1>
              <p className="services-hero-p">
                Structured cabling, fiber, data centers, security, DAS, and IT solutions delivered nationwide with a single point of contact.
              </p>
              <div className="services-hero-actions">
                <button 
                  onClick={() => scrollToSection('services-solutions-section')}
                  className="btn-hero-primary"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight size={15} />
                </button>
                <button 
                  onClick={() => scrollToSection('services-rollouts-section')}
                  className="btn-hero-dark-outline"
                >
                  <span>NATIONWIDE ROLLOUTS</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar inside Hero */}
          <div className="services-hero-bottom-bar">
            <div className="services-hero-badges-strip">
              <div className="services-hero-badge">
                <span className="services-hero-badge-icon">
                  <ShieldCheck size={20} />
                </span>
                <span>Certified Expertise</span>
              </div>
              <div className="services-hero-badge">
                <span className="services-hero-badge-icon">
                  <Users size={20} />
                </span>
                <span>Nationwide Coverage</span>
              </div>
              <div className="services-hero-badge">
                <span className="services-hero-badge-icon">
                  <Clock size={20} />
                </span>
                <span>On-Time Delivery</span>
              </div>
              <div className="services-hero-badge">
                <span className="services-hero-badge-icon">
                  <BarChart3 size={20} />
                </span>
                <span>Scalable Solutions</span>
              </div>
            </div>

            <div className="services-hero-tagline-box">
              CONNECTING<br />
              PEOPLE<br />
              PLACES<br />
              POSSIBILITIES
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES 4x2 GRID */}
      <section id="services-solutions-section" className="services-solutions-section">
        <div className="container-wide">
          <div className="services-section-header-row">
            <div className="services-section-header-left">
              <div className="services-section-eyebrow">
                <span className="services-eyebrow-line"></span>
                <span>OUR SERVICES</span>
              </div>
              <h2 className="services-section-title">
                Infrastructure Solutions for a Connected World.
              </h2>
            </div>
            <button 
              onClick={() => scrollToSection('services-rollouts-section')}
              className="services-view-all-btn"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="services-solutions-grid">
            {solutionCards.map((card) => (
              <div
                key={card.id}
                className="services-solution-card"
                onClick={() => onNavigate('service-detail', card.id)}
              >
                <div className="services-solution-top-row">
                  <div className="services-solution-icon-circle">
                    {card.icon}
                  </div>
                  <h3 className="services-solution-title">{card.title}</h3>
                </div>
                <div className="services-solution-bottom-row">
                  <p className="services-solution-desc">{card.desc}</p>
                  <div className="services-solution-arrow-btn">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. ATTACHED METRICS STRIP + NATIONWIDE ROLLOUTS BANNER (FULL WIDTH EDGE-TO-EDGE) */}
      <section id="services-rollouts-section" className="services-rollouts-fullwidth-section">
        <div className="services-rollouts-unified-container">
          {/* Top Stats Strip */}
          <div className="services-metrics-strip-carbon">
            <div className="container-wide">
              <div className="services-metrics-grid-carbon">
                <div className="services-metric-box-carbon">
                  <div className="services-metric-value-carbon">1,000+</div>
                  <div className="services-metric-label-carbon">Projects Completed</div>
                </div>
                <div className="services-metric-box-carbon">
                  <div className="services-metric-value-carbon">50+</div>
                  <div className="services-metric-label-carbon">Markets Nationwide</div>
                </div>
                <div className="services-metric-box-carbon">
                  <div className="services-metric-value-carbon">99%</div>
                  <div className="services-metric-label-carbon">On-Time Delivery</div>
                </div>
                <div className="services-metric-box-carbon">
                  <div className="services-metric-value-carbon">100%</div>
                  <div className="services-metric-label-carbon">Client Focused</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Nationwide Rollouts Card */}
          <div className="services-rollouts-card">
            {/* Left Content */}
            <div className="services-rollouts-left">
              <div className="services-rollouts-eyebrow">NATIONWIDE ROLLOUTS</div>
              <h2 className="services-rollouts-h2">
                ONE PARTNER.<br />
                EVERY LOCATION.
              </h2>
              <p className="services-rollouts-p">
                From single sites to nationwide multi-location deployments, we deliver consistent, high-quality infrastructure solutions across the United States.
              </p>
              <button 
                onClick={() => onNavigate('service-detail', 'nationwide-rollouts')}
                className="btn-rollouts-blue"
              >
                <span>EXPLORE NATIONWIDE ROLLOUTS</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Glowing US Map */}
            <div className="services-rollouts-map-box">
              <img 
                src="/services_rollouts_map_clean.png" 
                alt="Nationwide Network Coverage" 
                className="services-rollouts-map-img" 
              />
            </div>

            {/* Feature Checklist */}
            <div className="services-rollouts-checklist-box">
              <div className="services-rollouts-check-item">
                <Building2 size={26} className="services-rollouts-check-icon" />
                <span>Multi-Site Deployment</span>
              </div>
              <div className="services-rollouts-check-item">
                <ShieldCheck size={26} className="services-rollouts-check-icon" />
                <span>Consistent Standards</span>
              </div>
              <div className="services-rollouts-check-item">
                <Users size={26} className="services-rollouts-check-icon" />
                <span>Local Support Teams</span>
              </div>
              <div className="services-rollouts-check-item">
                <Truck size={26} className="services-rollouts-check-icon" />
                <span>Logistics & Coordination</span>
              </div>
              <div className="services-rollouts-check-item">
                <Clock size={26} className="services-rollouts-check-icon" />
                <span>On-Time & On-Budget</span>
              </div>
            </div>

            {/* Logistics Truck Photo */}
            <div className="services-rollouts-truck-box">
              <img 
                src="/services_rollouts_truck.jpg?v=4" 
                alt="Smart-Links Cabling Solutions Fleet" 
                className="services-rollouts-truck-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="services-industries-section-carbon">
        <div className="container-wide">
          <div className="services-section-header-row">
            <div className="services-section-header-left">
              <div className="services-section-eyebrow">
                <span className="services-eyebrow-line"></span>
                <span>INDUSTRIES WE SERVE</span>
              </div>
              <h2 className="services-section-title">Built for Every Industry.</h2>
            </div>
            <button 
              onClick={() => onNavigate('industries')}
              className="services-view-all-btn"
            >
              <span>VIEW ALL INDUSTRIES</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* 10 Industry Tiles */}
          <div className="services-industries-grid-carbon">
            {industriesTiles.map((tile, idx) => (
              <div
                key={idx}
                className="services-industry-tile-carbon"
                onClick={() => onNavigate(tile.tab as NavTab, tile.subId)}
              >
                <span className="services-industry-tile-icon">
                  {tile.icon}
                </span>
                <span className="services-industry-tile-name">{tile.name}</span>
              </div>
            ))}
          </div>

          {/* Trusted By Leaders Strip */}
          <div className="services-trusted-leaders-strip">
            <div className="services-trusted-label">TRUSTED BY INDUSTRY LEADERS</div>
            <div className="services-trusted-logos-row">
              <div className="services-trusted-logo-item">
                <span className="trusted-brand-text trusted-morgan">Morgan Stanley</span>
              </div>
              <div className="services-trusted-divider"></div>
              <div className="services-trusted-logo-item">
                <span className="trusted-brand-text trusted-chanel">CHANEL</span>
              </div>
              <div className="services-trusted-divider"></div>
              <div className="services-trusted-logo-item">
                <span className="trusted-brand-text trusted-walmart">Walmart <span className="walmart-spark">✻</span></span>
              </div>
              <div className="services-trusted-divider"></div>
              <div className="services-trusted-logo-item">
                <img src="/logo_home_depot.png" alt="The Home Depot" />
              </div>
              <div className="services-trusted-divider"></div>
              <div className="services-trusted-logo-item">
                <img src="/logo_lowes.svg" alt="Lowe's" />
              </div>
              <div className="services-trusted-divider"></div>
              <div className="services-trusted-logo-item">
                <img src="/logo_hilton.png" alt="Hilton" />
              </div>
              <div className="services-trusted-divider"></div>
              <div className="services-trusted-logo-item">
                <img src="/logo_holiday_inn.png" alt="Holiday Inn" />
              </div>
              <div className="services-trusted-divider"></div>
              <div className="services-trusted-logo-item">
                <img src="/logo_louis_vuitton.png" alt="Louis Vuitton" />
              </div>
              <div className="services-trusted-divider"></div>
              <div className="services-trusted-logo-item">
                <span className="trusted-and-more" onClick={() => onNavigate('projects')}>AND MORE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION (ATTACHED TO FOOTER) */}
      <section className="services-bottom-cta-carbon">
        <div className="container-wide">
          <div className="services-bottom-cta-row">
            {/* Left Content */}
            <div className="services-bottom-cta-left">
              <div className="services-cta-eyebrow">LET'S BUILD TOGETHER</div>
              <h2 className="services-cta-h2">
                A STRONGER,<br />
                MORE CONNECTED TOMORROW.
              </h2>
              <p className="services-cta-p">
                Partner with Smart-Links for reliable, scalable infrastructure — nationwide.
              </p>
              <div className="services-cta-actions">
                <button 
                  onClick={onOpenQuote}
                  className="btn-cta-blue"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={15} />
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="btn-cta-outline"
                >
                  <span>TALK TO AN EXPERT</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Tagline */}
            <div className="services-cta-right-tagline">
              <div className="services-cta-tagline-text">
                PEOPLE<br />
                PLACES<br />
                POSSIBILITIES
              </div>
              <div className="services-cta-tagline-bar"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
