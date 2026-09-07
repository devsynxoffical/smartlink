import React from 'react';
import type { NavTab } from '../types';
import { industriesData, projectsData } from '../data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  Building2, 
  Factory, 
  Landmark, 
  GraduationCap, 
  PlusSquare, 
  Hotel, 
  ShoppingBag, 
  RadioTower 
} from 'lucide-react';

interface IndustrySubPageProps {
  industryId: string;
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
}

const getIndustryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Building2': return <Building2 size={22} />;
    case 'Factory': return <Factory size={22} />;
    case 'Landmark': return <Landmark size={22} />;
    case 'GraduationCap': return <GraduationCap size={22} />;
    case 'PlusSquare': return <PlusSquare size={22} />;
    case 'Hotel': return <Hotel size={22} />;
    case 'ShoppingBag': return <ShoppingBag size={22} />;
    case 'RadioTower': return <RadioTower size={22} />;
    default: return <Building2 size={22} />;
  }
};

export const IndustrySubPage: React.FC<IndustrySubPageProps> = ({
  industryId,
  onNavigate,
  onOpenQuote
}) => {
  const industry = industriesData.find(i => i.id === industryId) || industriesData[0];
  const otherIndustries = industriesData.filter(i => i.id !== industry.id);

  const relatedProjects = projectsData.filter(p => 
    p.category.toLowerCase().includes(industry.id.toLowerCase()) || 
    p.categoryLabel.toLowerCase().includes(industry.title.toLowerCase()) ||
    p.category === 'Multi-Industry'
  );

  return (
    <div className="industry-subpage-root">
      {/* 1. HERO SECTION */}
      <section 
        className="subpage-hero"
        style={{
          backgroundImage: `url(${industry.heroImage || industry.image})`
        }}
      >
        <div className="subpage-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div className="subpage-breadcrumbs">
            <button onClick={() => onNavigate('industries')}>
              <ArrowLeft size={14} /> Back to All Industries
            </button>
            <span>/</span>
            <span style={{ color: '#00bfff' }}>{industry.title} Sector</span>
          </div>

          <div className="subpage-hero-grid">
            <div>
              <div className="subpage-badge-pill">
                {getIndustryIcon(industry.iconName)}
                <span>{industry.title} Infrastructure</span>
              </div>
              <h1 className="subpage-title">
                {industry.title} Cabling & Security
              </h1>
              <p className="subpage-desc">
                {industry.description} Smart-Links delivers tailored low-voltage infrastructure engineered specifically to meet the strict uptime, compliance, and life-safety mandates of the {industry.title.toLowerCase()} sector.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenQuote}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>GET A SECTOR ESTIMATE</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="btn-outline-white"
                >
                  <span>VIEW CASE STUDIES</span>
                </button>
              </div>
            </div>

            {/* Compliance Box */}
            <div>
              <div className="subpage-hero-box">
                <div className="subpage-box-title">
                  <ShieldCheck size={18} />
                  <span>Regulatory Compliance</span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  {industry.compliance}
                </div>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '16px' }}>
                  All network pathways, enclosures, and security hardware comply strictly with federal, state, and industry specific codes.
                </p>
                <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', fontSize: '12px', color: '#00bfff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} />
                  <span>100% Certified Field Technicians</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTOR CHALLENGES VS SOLUTIONS */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container-wide">
          <div className="challenges-solutions-grid">
            {/* Left: Sector Challenges */}
            <div>
              <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#d97706', textTransform: 'uppercase' }}>
                INDUSTRY CHALLENGES
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0a1128', marginTop: '6px', marginBottom: '20px' }}>
                Obstacles in {industry.title}
              </h2>
              <div>
                {industry.challenges?.map((chal, i) => (
                  <div key={i} className="challenge-item-card">
                    <AlertTriangle size={18} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{chal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Smart-Links Solutions */}
            <div>
              <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase' }}>
                ENGINEERED SOLUTIONS
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0a1128', marginTop: '6px', marginBottom: '20px' }}>
                How Smart-Links Solves Them
              </h2>
              <div>
                {industry.solutions.map((sol, i) => (
                  <div key={i} className="solution-item-card">
                    <CheckCircle2 size={18} color="#0075ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TECH & HARDWARE ARCHITECTURE */}
      <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid #eef2f6' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase' }}>
                HARDWARE ARCHITECTURE
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0a1128', marginTop: '6px', marginBottom: '18px' }}>
                Technology Deployed for {industry.title}
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                {industry.featuredTech?.map((tech, i) => (
                  <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 14px', fontSize: '13px', fontWeight: 700, color: '#0a1128', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0075ff' }} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0a1128', marginBottom: '10px' }}>
                Key Operational Benefits:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {industry.keyBenefits?.map((ben, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#475569' }}>
                    <CheckCircle2 size={16} color="#059669" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}>
                <img src={industry.image} alt={industry.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED CLIENT PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="section" style={{ background: '#ffffff', borderTop: '1px solid #eef2f6' }}>
          <div className="container-wide">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
              <div>
                <span className="eyebrow-blue" style={{ fontSize: '11.5px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase' }}>
                  TRACK RECORD
                </span>
                <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0a1128', marginTop: '6px' }}>
                  Featured Projects in {industry.title}
                </h2>
              </div>
              <button 
                onClick={() => onNavigate('projects')}
                style={{ fontSize: '13.5px', fontWeight: 700, color: '#0075ff' }}
              >
                View full portfolio &rarr;
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {relatedProjects.slice(0, 3).map((proj) => (
                <div key={proj.id} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: '#0075ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                        {proj.categoryLabel}
                      </span>
                      <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0a1128', margin: '8px 0 6px 0' }}>{proj.title}</h4>
                      <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: '1.5' }}>{proj.description}</p>
                    </div>
                    <div style={{ paddingTop: '12px', marginTop: '12px', borderTop: '1px solid #e2e8f0', fontSize: '11.5px', color: '#94a3b8', fontWeight: 600 }}>
                      {proj.location} • {proj.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SWITCHER TO OTHER INDUSTRIES */}
      <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid #eef2f6', padding: '50px 0' }}>
        <div className="container-wide">
          <h4 style={{ textAlign: 'center', fontSize: '14px', fontWeight: 800, color: '#0a1128', textTransform: 'uppercase', marginBottom: '20px' }}>
            Explore Other Industry Sectors
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
            {otherIndustries.map((other) => (
              <button
                key={other.id}
                onClick={() => onNavigate('industry-detail', other.id)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  color: '#0a1128',
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0075ff';
                  e.currentTarget.style.color = '#0075ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#0a1128';
                }}
              >
                {other.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="subpage-cta-dark">
        <div className="container-wide">
          <h2 className="subpage-cta-title">
            Need Expert Infrastructure for Your {industry.title} Facility?
          </h2>
          <p className="subpage-cta-desc">
            Connect with a Smart-Links specialist experienced in your sector's specific technical guidelines, fire codes, and scheduling requirements.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenQuote}
              className="btn-primary"
            >
              <span>REQUEST A CUSTOM PROPOSAL</span>
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="btn-outline-white"
            >
              <span>SPEAK WITH AN ENGINEER</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
