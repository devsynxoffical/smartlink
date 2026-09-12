import React from 'react';
import type { NavTab, IndustryItem } from '../types';
import { industriesData } from '../data/siteData';
import { 
  Building2, 
  Factory, 
  Landmark, 
  GraduationCap, 
  PlusSquare, 
  Hotel, 
  ShoppingBag, 
  RadioTower, 
  Users,
  ShieldCheck,
  Clock,
  BarChart3,
  ArrowRight
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
  onSelectIndustry: (industry: IndustryItem) => void;
}

const getIndustryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Building2': return <Building2 size={20} />;
    case 'Factory': return <Factory size={20} />;
    case 'Landmark': return <Landmark size={20} />;
    case 'GraduationCap': return <GraduationCap size={20} />;
    case 'PlusSquare': return <PlusSquare size={20} />;
    case 'Hotel': return <Hotel size={20} />;
    case 'ShoppingBag': return <ShoppingBag size={20} />;
    case 'RadioTower': return <RadioTower size={20} />;
    default: return <Building2 size={20} />;
  }
};

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ 
  onNavigate, 
  onOpenQuote,
  onSelectIndustry 
}) => {
  return (
    <div className="industries-page-exact">
      {/* 1. HERO SECTION */}
      <section className="industries-carbon-hero">
        <div className="container-wide">
          <div className="services-hero-grid">
            <div className="services-hero-content-left">
              <div className="services-hero-eyebrow">
                INDUSTRY-SPECIFIC INFRASTRUCTURE
              </div>
              <h1 className="services-hero-h1">
                SOLUTIONS FOR <br />
                <span className="blue-accent">EVERY INDUSTRY</span>
              </h1>
              <p className="services-hero-p">
                Smart-Links Cabling Solutions delivers reliable, scalable, and future-ready infrastructure across a wide range of industries, helping organizations stay connected, secure, and prepared for what's next.
              </p>
              <div className="services-hero-actions">
                <button 
                  onClick={onOpenQuote}
                  className="btn-hero-primary"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={15} />
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="btn-hero-dark-outline"
                >
                  <span>TALK TO AN EXPERT</span>
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

      {/* 2. INDUSTRIES WE SERVE (8 CARDS IN 4x2 GRID) */}
      <section className="section" style={{ background: '#ffffff', paddingBottom: '70px' }}>
        <div className="container-wide">
          <div className="section-header-row">
            <div>
              <span className="eyebrow-blue">
                INDUSTRIES WE SERVE
              </span>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0a1128', marginTop: '6px' }}>
                Building Smarter Connections<br />Across Every Sector
              </h2>
            </div>
            <p style={{ maxWidth: '420px', fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
              From commercial offices to critical infrastructure, our end-to-end cabling and technology solutions are designed to meet the unique demands of each industry.
            </p>
          </div>

          <div className="industries-8grid">
            {industriesData.map((ind) => (
              <div 
                key={ind.id}
                onClick={() => {
                  onSelectIndustry(ind);
                  onNavigate('industry-detail', ind.id);
                }}
                className="ind-card-dark"
              >
                <div className="ind-card-img-wrap">
                  <img src={ind.image} alt={ind.title} />
                  <div className="ind-card-overlay" />
                  <div className="ind-card-header-badge">
                    <span style={{ color: '#00bfff' }}>{getIndustryIcon(ind.iconName)}</span>
                    <span>{ind.title}</span>
                  </div>
                </div>

                <div className="ind-card-body">
                  <p className="ind-card-text">
                    {ind.description}
                  </p>
                  <div className="ind-card-footer">
                    <span className="ind-learn-more">
                      LEARN MORE &rarr;
                    </span>
                    <span style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                      {ind.compliance.split('/')[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. ATTACHED SKY BLUE STATS BAR + INDUSTRY EXPERTISE BANNER (ATTACHED TO FOOTER) */}
      <section className="industries-attached-module-section">
        <div className="industries-unified-container">
          {/* Top Stats Strip */}
          <div className="industries-metrics-strip-sky">
            <div className="container-wide">
              <div className="industries-metrics-grid">
                {/* 1. 10+ Industries Served */}
                <div className="industries-metric-col">
                  <div className="industries-metric-icon">
                    <Building2 size={34} />
                  </div>
                  <div className="industries-metric-num">10+</div>
                  <div className="industries-metric-txt">Industries Served</div>
                </div>

                {/* 2. 100+ Projects Completed */}
                <div className="industries-metric-col">
                  <div className="industries-metric-icon">
                    <Users size={34} />
                  </div>
                  <div className="industries-metric-num">100+</div>
                  <div className="industries-metric-txt">Projects Completed</div>
                </div>

                {/* 3. 99% Client Satisfaction */}
                <div className="industries-metric-col">
                  <div className="industries-metric-icon">
                    <ShieldCheck size={34} />
                  </div>
                  <div className="industries-metric-num">99%</div>
                  <div className="industries-metric-txt">Client Satisfaction</div>
                </div>

                {/* 4. Built for What's Next */}
                <div className="industries-metric-col">
                  <div className="industries-metric-icon">
                    <BarChart3 size={34} />
                  </div>
                  <div className="industries-metric-next-line">Built for</div>
                  <div className="industries-metric-next-line">What's Next</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Industry Expertise Banner Card */}
          <div className="industries-expertise-banner-card">
            <div className="industries-expertise-overlay" />
            <div className="container-wide" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
              <div className="industries-expertise-content">
                {/* Left Text & CTA */}
                <div className="industries-expertise-left">
                  <div className="industries-expertise-eyebrow">INDUSTRY EXPERTISE</div>
                  <h2 className="industries-expertise-h2">
                    YOUR INDUSTRY. OUR EXPERTISE.
                  </h2>
                  <p className="industries-expertise-p">
                    No matter your industry, Smart-Links delivers the infrastructure that keeps your business moving forward.
                  </p>
                  <button 
                    onClick={onOpenQuote}
                    className="btn-expertise-blue"
                  >
                    <span>GET A CUSTOM SOLUTION</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Right Pillars List */}
                <div className="industries-expertise-pillars">
                  {['RELIABLE', 'SCALABLE', 'SECURE', 'FUTURE-READY'].map((pillar, idx) => (
                    <div key={idx} className="industries-pillar-item">
                      <span className="industries-pillar-bar" />
                      <span className="industries-pillar-text">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
