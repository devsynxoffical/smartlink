import React from 'react';
import type { NavTab, IndustryItem } from '../types';
import { industriesData, statsOverview } from '../data/siteData';
import { 
  Building2, 
  Factory, 
  Landmark, 
  GraduationCap, 
  PlusSquare, 
  Hotel, 
  ShoppingBag, 
  RadioTower, 
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
      {/* 1. HERO SECTION - Exact Match to Mockup #2 */}
      <section 
        className="industries-hero-section"
        style={{
          backgroundImage: `url('/about_hero_bg.jpg')`
        }}
      >
        <div className="about-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-hero-grid">
            <div>
              <div className="eyebrow-cyan">INDUSTRIES</div>
              <h1 className="about-hero-title">
                SOLUTIONS FOR <br />
                <span className="blue-highlight">EVERY INDUSTRY</span>
              </h1>
              <p className="about-hero-subtext">
                Smart-Links Cabling Solutions delivers reliable, scalable, and future-ready infrastructure across a wide range of industries, helping organizations stay connected, secure, and prepared for what's next.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenQuote}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="btn-outline-white"
                >
                  <span>TALK TO AN EXPERT</span>
                </button>
              </div>
            </div>

            <div className="about-hero-right-tag">
              <div className="tag-banner-box">
                <div className="tag-banner-heading">
                  CONNECTING<br />
                  PEOPLE<br />
                  PLACES<br />
                  POSSIBILITIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES WE SERVE (8 CARDS IN 4x2 GRID) */}
      <section className="section" style={{ background: '#ffffff' }}>
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

      {/* 3. 4 STATS ROW */}
      <section style={{ borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container-wide">
          <div className="stats-4col-row">
            {statsOverview.map((st, i) => (
              <div key={i} className="stat-item-box">
                <div className="stat-num">{st.value}</div>
                <div className="stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY EXPERTISE BANNER */}
      <section 
        className="expertise-banner-dark"
        style={{
          backgroundImage: `url('/datacenter_hero_bg.jpg')`
        }}
      >
        <div className="about-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="expertise-banner-grid">
            <div>
              <div className="eyebrow-cyan" style={{ marginBottom: '8px' }}>INDUSTRY EXPERTISE</div>
              <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#ffffff', lineHeight: '1.15', marginBottom: '14px' }}>
                YOUR INDUSTRY. OUR EXPERTISE.
              </h2>
              <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', maxWidth: '540px', marginBottom: '24px' }}>
                No matter your industry, Smart-Links delivers the infrastructure that keeps your business moving forward.
              </p>
              <button 
                onClick={onOpenQuote}
                className="btn-primary"
              >
                <span>GET A CUSTOM SOLUTION</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="expertise-pillars-list">
              {['RELIABLE', 'SCALABLE', 'SECURE', 'FUTURE-READY'].map((p, idx) => (
                <div key={idx} className="pillar-check-item">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
