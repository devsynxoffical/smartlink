import React, { useState } from 'react';
import type { NavTab, ProjectItem } from '../types';
import { projectsData, testimonialsData } from '../data/siteData';
import {
  ArrowRight,
  Search,
  Building2,
  Users,
  Globe,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Calendar,
  Layers
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    'All Projects',
    'Commercial',
    'Retail',
    'Hospitality',
    'Financial',
    'Industrial',
    'Healthcare',
    'Education',
    'Government'
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter =
      activeFilter === 'All Projects' ||
      project.category === activeFilter ||
      project.categoryLabel.toLowerCase().includes(activeFilter.toLowerCase());

    const matchesSearch =
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.scope.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="projects-page-root">
      {/* 1. HERO SECTION (WITH INFRASTRUCTURE/PEOPLE/PLACES/POSSIBILITIES ON BUILDING WALL) */}
      <section
        className="projects-hero-exact"
        style={{
          backgroundImage: `url('/projects_hero_building_wall_perfect.jpg')`
        }}
      >
        <div className="projects-hero-dark-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="projects-hero-grid-exact">
            {/* Left Column: Heading & CTA */}
            <div className="projects-hero-left-col">
              <div className="projects-hero-eyebrow">OUR PROJECTS</div>
              <h1 className="projects-hero-title">
                REAL PROJECTS.<br />
                <span className="cyan-text">REAL IMPACT.</span>
              </h1>
              <p className="projects-hero-sub">
                From global brands to local businesses, Smart-Links Cabling Solutions has delivered reliable infrastructure that keeps organizations connected, secure, and ready for what's next.
              </p>
              <div className="projects-hero-btn-row">
                <button className="btn-primary projects-hero-btn" onClick={onOpenQuote}>
                  <span>DISCUSS YOUR PROJECT</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Center: Spacer revealing the building wall typography */}
            <div className="projects-hero-center-spacer" />

            {/* Right Column: 6 Services List */}
            <div className="projects-hero-pillars-col">
              {[
                'STRUCTURED CABLING',
                'FIBER OPTIC',
                'VIDEO SURVEILLANCE',
                'ACCESS CONTROL',
                'DAS',
                'IT SOLUTIONS'
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="projects-pillar-row"
                  onClick={() => onNavigate('services')}
                >
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER PILLS & SEARCH BAR */}
      <section className="projects-main-section">
        <div className="container-wide">
          <div className="projects-filter-bar-row">
            {/* Filter Pill Tabs */}
            <div className="projects-pill-tabs">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  className={`projects-filter-pill ${activeFilter === tab ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="projects-search-field">
              <Search size={15} className="projects-search-icon" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="projects-search-clear">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* 3. PROJECTS 3-COL GRID (9 CARDS) */}
          <div className="projects-cards-grid-exact">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="project-card-exact"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Photo Header */}
                <div className="project-card-thumb-wrap">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="project-card-thumb-img"
                  />
                </div>

                {/* Card Body */}
                <div className="project-card-body-exact">
                  <div className="project-brand-row-exact">
                    {proj.id === 'walmart-supercenter' ? (
                      <span className="brand-walmart-text">
                        Walmart<span className="walmart-spark">✻</span>
                      </span>
                    ) : proj.logoImage ? (
                      <div className={`project-logo-badge-box badge-${proj.id}`}>
                        <img 
                          src={proj.logoImage} 
                          alt={proj.client} 
                          className={`project-logo-file-img img-${proj.id}`} 
                        />
                      </div>
                    ) : proj.id === 'chanel-flagship' ? (
                      <span className="brand-chanel-text">CHANEL</span>
                    ) : proj.id === 'morgan-stanley' ? (
                      <span className="brand-morgan-text">Morgan Stanley</span>
                    ) : (
                      <span className="brand-default-text">{proj.client}</span>
                    )}
                  </div>

                  <span className="project-category-eyebrow">{proj.categoryLabel}</span>
                  <p className="project-desc-exact">{proj.description}</p>
                  
                  <div className="project-card-bottom-row">
                    <span className="project-naked-arrow">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="projects-empty-state">
              <p>No projects found matching "{searchQuery}" in {activeFilter}</p>
              <button
                className="btn-outline-dark"
                onClick={() => { setActiveFilter('All Projects'); setSearchQuery(''); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. METRICS BANNER (ATTACHED FULL-WIDTH SKY BLUE BAR) */}
      <section className="projects-metrics-strip-section">
        <div className="container-wide">
          <div className="projects-metrics-strip-exact">
            <div className="projects-metric-col">
              <div className="projects-metric-icon">
                <Building2 size={44} strokeWidth={1.8} />
              </div>
              <div className="projects-metric-num">100+</div>
              <div className="projects-metric-lbl">Projects Completed</div>
            </div>

            <div className="projects-metric-col">
              <div className="projects-metric-icon">
                <Users size={44} strokeWidth={1.8} />
              </div>
              <div className="projects-metric-num">50+</div>
              <div className="projects-metric-lbl">Enterprise Clients</div>
            </div>

            <div className="projects-metric-col">
              <div className="projects-metric-icon">
                <Globe size={44} strokeWidth={1.8} />
              </div>
              <div className="projects-metric-num">Nationwide</div>
              <div className="projects-metric-lbl">Project Coverage</div>
            </div>

            <div className="projects-metric-col">
              <div className="projects-metric-icon">
                <ShieldCheck size={44} strokeWidth={1.8} />
              </div>
              <div className="projects-metric-num">99%</div>
              <div className="projects-metric-lbl">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT OUR CLIENTS SAY TESTIMONIAL BANNER (ATTACHED NIGHT OFFICE BG) */}
      <section className="projects-testimonial-section" style={{ backgroundImage: `url('/projects_reviews_night_bg.jpg')` }}>
        <div className="container-wide">
          <div className="projects-testimonial-banner">
            <button className="testimonial-arrow-btn left" onClick={prevTestimonial} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>

            <div className="projects-testimonial-content">
              <div className="projects-testimonial-tag">WHAT OUR CLIENTS SAY</div>
              <p className="projects-testimonial-quote">
                “{testimonialsData[testimonialIdx].quote}”
              </p>
              <div className="projects-testimonial-author">
                — {testimonialsData[testimonialIdx].author}, {testimonialsData[testimonialIdx].company}
              </div>

              {/* Dots */}
              <div className="projects-testimonial-dots">
                {testimonialsData.map((_, i) => (
                  <span
                    key={i}
                    className={`testimonial-dot ${testimonialIdx === i ? 'active' : ''}`}
                    onClick={() => setTestimonialIdx(i)}
                  />
                ))}
              </div>
            </div>

            <button className="testimonial-arrow-btn right" onClick={nextTestimonial} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER (ATTACHED BLUE NETWORK CABLES BG) */}
      <section className="projects-cta-section" style={{ backgroundImage: `url('/projects_cta_cables_bg.jpg')` }}>
        <div className="container-wide">
          <div className="projects-cta-inner">
            <div className="projects-cta-left">
              <div className="projects-cta-tag">LET'S BUILD WHAT'S NEXT</div>
              <h2 className="projects-cta-heading">
                Have a Project in Mind?
              </h2>
              <p className="projects-cta-sub">
                Partner with Smart-Links Cabling Solutions for reliable, scalable infrastructure tailored to your needs.
              </p>
            </div>
            <div className="projects-cta-right">
              <button className="projects-cta-btn-white" onClick={onOpenQuote}>
                <span>GET A QUOTE</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-container" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(7, 14, 28, 0.95) 0%, rgba(7, 14, 28, 0.3) 100%)'
              }} />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <X size={18} />
              </button>
              <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px', zIndex: 5 }}>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                  {selectedProject.categoryLabel} CASE STUDY
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', marginTop: '4px' }}>
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            <div className="modal-body">
              <div style={{ display: 'flex', gap: '20px', marginBottom: '18px', fontSize: '13px', color: '#64748b', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} color="var(--primary-blue)" />
                  <span>{selectedProject.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} color="var(--primary-blue)" />
                  <span>Completed in {selectedProject.year}</span>
                </div>
              </div>

              <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.65', marginBottom: '20px' }}>
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0a1128', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Layers size={16} color="var(--primary-blue)" /> Technical Scope Delivered:
                </h4>
                <div className="form-grid-2col" style={{ gap: '8px' }}>
                  {selectedProject.scope.map((item, idx) => (
                    <div key={idx} style={{
                      fontSize: '13px',
                      color: '#475569',
                      background: '#f8fafc',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0'
                    }}>
                      • {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuote();
                  }}
                >
                  <span>Inquire About Similar Project</span>
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
