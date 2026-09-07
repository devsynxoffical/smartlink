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
      {/* 1. HERO SECTION */}
      <section
        className="hero-wrapper"
        style={{
          backgroundImage: `url('/featured_building.jpg')`
        }}
      >
        <div className="hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="hero-content-grid">
            <div>
              <div className="hero-tagline-cyan">OUR PROJECTS</div>
              <h1 className="hero-main-title">
                REAL PROJECTS.<br />
                <span className="cyan-highlight">REAL IMPACT.</span>
              </h1>
              <p className="hero-sub-p">
                From global brands to local businesses, Smart-Links Cabling Solutions has delivered reliable infrastructure that keeps organizations connected, secure, and ready for what's next.
              </p>
              <div className="hero-actions-row">
                <button className="btn-primary" onClick={onOpenQuote}>
                  <span>Discuss Your Project</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="hero-sidebar-pillars">
              {[
                'STRUCTURED CABLING',
                'FIBER OPTIC',
                'VIDEO SURVEILLANCE',
                'ACCESS CONTROL',
                'DAS',
                'IT SOLUTIONS'
              ].map((item, idx) => (
                <div key={idx} className="pillar-item" onClick={() => onNavigate('services')}>
                  <span>{item}</span>
                  <ArrowRight size={14} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER BAR & SEARCH */}
      <section className="section section-light" style={{ paddingBottom: '30px' }}>
        <div className="container-wide">
          <div className="filter-bar-container">
            {/* Filter Pill Tabs */}
            <div className="filter-tabs-scroll">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  className={`filter-tab-pill ${activeFilter === tab ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="search-input-box">
              <Search size={16} color="#64748b" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ color: '#94a3b8' }}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Projects 3-Col Grid */}
          <div className="projects-grid">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="project-card"
                onClick={() => setSelectedProject(proj)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-card-image-wrap">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="project-card-img"
                  />
                  {/* Client brand banner over card */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: proj.logoBg || '#0a1128',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 800,
                    letterSpacing: '0.03em',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}>
                    {proj.logoText}
                  </div>
                </div>

                <div className="project-card-body">
                  <span className="project-client-name">{proj.client}</span>
                  <span className="project-category-tag">{proj.categoryLabel}</span>
                  <p className="project-card-desc">{proj.description}</p>
                  <div className="project-card-footer">
                    <div className="project-arrow-btn">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
              <p style={{ fontSize: '18px', fontWeight: 600 }}>No projects found matching "{searchQuery}" in {activeFilter}</p>
              <button
                className="btn-outline-dark"
                style={{ marginTop: '16px' }}
                onClick={() => { setActiveFilter('All Projects'); setSearchQuery(''); }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* 3. METRICS BANNER 4-COL */}
          <div className="metrics-banner-4col">
            <div className="metric-col-item">
              <div className="metric-icon-bubble">
                <Building2 size={24} />
              </div>
              <div className="metric-big-number">100+</div>
              <div className="metric-caption">Projects Completed</div>
            </div>

            <div className="metric-col-item">
              <div className="metric-icon-bubble">
                <Users size={24} />
              </div>
              <div className="metric-big-number">50+</div>
              <div className="metric-caption">Enterprise Clients</div>
            </div>

            <div className="metric-col-item">
              <div className="metric-icon-bubble">
                <Globe size={24} />
              </div>
              <div className="metric-big-number">Nationwide</div>
              <div className="metric-caption">Project Coverage</div>
            </div>

            <div className="metric-col-item">
              <div className="metric-icon-bubble">
                <ShieldCheck size={24} />
              </div>
              <div className="metric-big-number">99%</div>
              <div className="metric-caption">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT OUR CLIENTS SAY CAROUSEL */}
      <section className="section section-light" style={{ paddingTop: 0, paddingBottom: '60px' }}>
        <div className="container-wide">
          <div className="testimonial-card-translucent" style={{ backgroundColor: '#070e1c', padding: '48px 40px', borderRadius: '16px' }}>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
              <span className="eyebrow-blue" style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>WHAT OUR CLIENTS SAY</span>
              <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#ffffff', marginBottom: '20px', fontWeight: 500 }}>
                “{testimonialsData[testimonialIdx].quote}”
              </p>
              <div className="testimonial-attr" style={{ color: 'var(--accent-cyan)' }}>
                — {testimonialsData[testimonialIdx].author}, {testimonialsData[testimonialIdx].company}
              </div>

              <div className="testimonial-arrow-controls" style={{ justifyContent: 'center', marginTop: '28px' }}>
                <button className="arrow-ctrl-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                  <ChevronLeft size={18} />
                </button>
                <button className="arrow-ctrl-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div className="cta-banner-home" style={{ backgroundImage: `url('/blue_wave_cta.jpg')` }}>
            <div className="cta-banner-home-content">
              <span className="eyebrow-blue" style={{ color: 'var(--accent-cyan)' }}>LET'S BUILD WHAT'S NEXT</span>
              <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#ffffff', lineHeight: 1.15, marginBottom: '10px' }}>
                Have a Project in Mind?
              </h2>
              <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.5' }}>
                Partner with Smart-Links Cabling Solutions for reliable, scalable infrastructure tailored to your needs.
              </p>
            </div>
            <div className="cta-banner-home-btn-wrap">
              <button className="btn-secondary-white" onClick={onOpenQuote}>
                <span>Get A Quote</span>
                <ArrowRight size={16} />
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

            <div className="modal-body" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '18px', fontSize: '13px', color: '#64748b' }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
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
