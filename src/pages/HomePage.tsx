import React, { useState } from 'react';
import type { NavTab, ServiceItem } from '../types';
import { servicesData, testimonialsData } from '../data/siteData';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  TrendingUp,
  Landmark,
  GraduationCap,
  Plus,
  Bed,
  ShoppingBag,
  MoreHorizontal,
  Network,
  Sparkles,
  Camera,
  Lock,
  Radio,
  Cloud,
  Users,
  Settings,
  ShieldCheck
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenQuote: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectService
}) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="homepage-exact-root">
      {/* 1. HERO SECTION */}
      <section
        className="home-hero"
        style={{
          backgroundImage: `url('/datacenter_hero_bg.jpg')`
        }}
      >
        <div className="home-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="home-hero-grid">
            {/* Left Column */}
            <div>
              <div className="hero-tagline-cyan">
                CONNECTING TODAY. POWERING TOMORROW.
              </div>
              <h1 className="hero-main-title">
                SMART INFRASTRUCTURE
                <span className="cyan-highlight">STRONGER POSSIBILITIES</span>
              </h1>
              <p className="hero-sub-p">
                Smart-Links Cabling Solutions delivers reliable, scalable and future-ready low voltage infrastructure for a more connected world.
              </p>

              <div className="hero-actions-row">
                <button
                  className="btn-primary"
                  onClick={() => onNavigate('services')}
                >
                  <span>Our Services</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  className="btn-outline-white"
                  onClick={onOpenQuote}
                >
                  <span>Get A Quote</span>
                </button>
              </div>

              {/* Slider 01 02 03 */}
              <div className="hero-slider-indices">
                <span
                  className={activeSlide === 1 ? 'active-idx' : ''}
                  onClick={() => setActiveSlide(1)}
                  style={{ cursor: 'pointer' }}
                >
                  01
                </span>
                <span
                  className={activeSlide === 2 ? 'active-idx' : ''}
                  onClick={() => setActiveSlide(2)}
                  style={{ cursor: 'pointer' }}
                >
                  02
                </span>
                <span
                  className={activeSlide === 3 ? 'active-idx' : ''}
                  onClick={() => setActiveSlide(3)}
                  style={{ cursor: 'pointer' }}
                >
                  03
                </span>
                <span className="hero-slider-dash" />
              </div>
            </div>

            {/* Right Column: Menu List & Motto */}
            <div className="hero-right-menu">
              <div className="hero-services-list">
                {[
                  'STRUCTURED CABLING',
                  'FIBER OPTIC',
                  'VIDEO SURVEILLANCE',
                  'ACCESS CONTROL',
                  'DAS',
                  'IT SOLUTIONS'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="hero-service-item"
                    onClick={() => onNavigate('services')}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="hero-motto-bottom-right">
                BUILDING CONNECTIONS THAT MATTER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO (6 HORIZONTAL CARDS) */}
      <section className="section-what-we-do">
        <div className="container-wide">
          <div className="what-we-do-header">
            <div>
              <span className="eyebrow-blue">WHAT WE DO</span>
              <h2 className="heading-dark">
                Comprehensive Cabling<br />and Technology Solutions
              </h2>
            </div>
            <div>
              <p className="what-we-do-right-desc">
                From structured cabling to advanced security and wireless infrastructure, Smart-Links delivers end-to-end solutions designed for performance, reliability, and growth.
              </p>
              <div style={{ marginTop: '8px', textAlign: 'right' }}>
                <button className="btn-link" onClick={() => onNavigate('services')}>
                  <span>View All Services</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* 6 Cards Single Row */}
          <div className="six-services-row">
            {/* Card 1: Structured Cabling */}
            <div className="service-card-v1">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80"
                alt="Structured Cabling Infrastructure"
                className="service-card-v1-img"
              />
              <div className="service-card-v1-body">
                <div className="service-card-v1-icon">
                  <Network size={22} />
                </div>
                <h3 className="service-card-v1-title">Structured Cabling Infrastructure</h3>
                <p className="service-card-v1-text">A solid foundation for a smarter, more connected future.</p>
                <div>
                  <button
                    className="btn-link"
                    onClick={() => onSelectService(servicesData[0])}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Fiber Optic Solutions */}
            <div className="service-card-v1">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80"
                alt="Fiber Optic Solutions"
                className="service-card-v1-img"
              />
              <div className="service-card-v1-body">
                <div className="service-card-v1-icon">
                  <Sparkles size={22} />
                </div>
                <h3 className="service-card-v1-title">Fiber Optic Solutions</h3>
                <p className="service-card-v1-text">High-speed connectivity for high-performance environments.</p>
                <div>
                  <button
                    className="btn-link"
                    onClick={() => onSelectService(servicesData[1])}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Video Surveillance */}
            <div className="service-card-v1">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80"
                alt="Video Surveillance"
                className="service-card-v1-img"
              />
              <div className="service-card-v1-body">
                <div className="service-card-v1-icon">
                  <Camera size={22} />
                </div>
                <h3 className="service-card-v1-title">Video Surveillance</h3>
                <p className="service-card-v1-text">Enhanced security. Greater peace of mind.</p>
                <div>
                  <button
                    className="btn-link"
                    onClick={() => onSelectService(servicesData[2])}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Access Control */}
            <div className="service-card-v1">
              <img
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=400&q=80"
                alt="Access Control"
                className="service-card-v1-img"
              />
              <div className="service-card-v1-body">
                <div className="service-card-v1-icon">
                  <Lock size={22} />
                </div>
                <h3 className="service-card-v1-title">Access Control</h3>
                <p className="service-card-v1-text">Control access. Protect what matters.</p>
                <div>
                  <button
                    className="btn-link"
                    onClick={() => onSelectService(servicesData[3])}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5: Distributed Antenna Systems (DAS) */}
            <div className="service-card-v1">
              <img
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=400&q=80"
                alt="Distributed Antenna Systems (DAS)"
                className="service-card-v1-img"
              />
              <div className="service-card-v1-body">
                <div className="service-card-v1-icon">
                  <Radio size={22} />
                </div>
                <h3 className="service-card-v1-title">Distributed Antenna Systems (DAS)</h3>
                <p className="service-card-v1-text">Stronger wireless coverage. Everywhere it's needed.</p>
                <div>
                  <button
                    className="btn-link"
                    onClick={() => onSelectService(servicesData[4])}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 6: IT Solutions */}
            <div className="service-card-v1">
              <img
                src="https://images.unsplash.com/photo-1544197150-199123fc639e?auto=format&fit=crop&w=400&q=80"
                alt="IT Solutions"
                className="service-card-v1-img"
              />
              <div className="service-card-v1-body">
                <div className="service-card-v1-icon">
                  <Cloud size={22} />
                </div>
                <h3 className="service-card-v1-title">IT Solutions</h3>
                <p className="service-card-v1-text">Scalable IT solutions to keep your business ahead.</p>
                <div>
                  <button
                    className="btn-link"
                    onClick={() => onSelectService(servicesData[5])}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SMART-LINKS (3-COLUMN EXACT MATCH) */}
      <section className="section-about-home">
        <div className="container-wide">
          <div className="about-home-grid">
            {/* Left Narrative */}
            <div>
              <span className="eyebrow-blue">ABOUT SMART-LINKS</span>
              <h2 className="heading-dark">
                A Trusted Partner in Building Smarter Connections
              </h2>
              <p className="about-home-left-desc">
                Smart-Links Cabling Solutions is a full-service low voltage contractor, delivering high-quality infrastructure solutions across commercial, industrial, and government markets. We combine technical expertise, industry best practices, and a commitment to excellence to keep your business connected and secure.
              </p>
              <button
                className="btn-primary"
                onClick={() => onNavigate('about')}
              >
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Center Technician Photo */}
            <div className="technician-photo-wrap">
              <img
                src="/technician_cabling.jpg"
                alt="Smart-Links Certified Technician"
              />
              <div className="technician-overlay-brand">
                <span style={{ fontWeight: 800, fontSize: '13px', letterSpacing: '0.04em' }}>Smart-Links Cabling Solutions</span>
              </div>
            </div>

            {/* Right Dark Navy Stats Card */}
            <div className="about-home-dark-stats">
              {/* Stat 1 */}
              <div className="about-stat-row">
                <div className="about-stat-row-icon">
                  <Users size={28} />
                </div>
                <div>
                  <div className="about-stat-val">100+</div>
                  <div className="about-stat-lbl">Projects Completed</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="about-stat-row">
                <div className="about-stat-row-icon">
                  <Settings size={28} />
                </div>
                <div>
                  <div className="about-stat-val">99%</div>
                  <div className="about-stat-lbl">Client Satisfaction</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="about-stat-row">
                <div className="about-stat-row-icon">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <div className="about-stat-industries-title">Industries</div>
                  <div className="about-stat-industries-sub">
                    Commercial | Industrial<br />
                    Government | Education<br />
                    Healthcare | and More
                  </div>
                </div>
              </div>

              {/* Bottom Motto */}
              <div className="about-motto-bottom">
                BUILT ON INTEGRITY.<br />
                DRIVEN BY SOLUTIONS.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS (BUILDING BACKGROUND + TRANSLUCENT QUOTE CARD) */}
      <section
        className="section-featured-projects"
        style={{
          backgroundImage: `url('/featured_building.jpg')`
        }}
      >
        <div className="featured-projects-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="featured-projects-grid">
            {/* Left */}
            <div>
              <span className="eyebrow-blue" style={{ color: '#00bfff' }}>FEATURED PROJECTS</span>
              <h2 style={{ fontSize: '42px', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase' }}>
                REAL SOLUTIONS.<br />
                REAL IMPACT.
              </h2>
              <p className="featured-projects-desc">
                Explore how Smart-Links delivers reliable infrastructure that keeps businesses, communities, and people connected.
              </p>
              <button
                className="btn-primary"
                onClick={() => onNavigate('projects')}
              >
                <span>View Our Projects</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Quote Card */}
            <div className="testimonial-card-translucent">
              <div>
                <span style={{ fontSize: '40px', color: '#00bfff', lineHeight: 1, fontFamily: 'serif' }}>“</span>
                <p className="testimonial-quote-p">
                  "{testimonialsData[testimonialIdx].quote}"
                </p>
                <div className="testimonial-attr">
                  — {testimonialsData[testimonialIdx].author}
                </div>
              </div>

              <div className="testimonial-arrow-controls">
                <button className="arrow-ctrl-btn" onClick={prevTestimonial} aria-label="Previous">
                  <ChevronLeft size={16} />
                </button>
                <button className="arrow-ctrl-btn" onClick={nextTestimonial} aria-label="Next">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE (8 HORIZONTAL CARDS) */}
      <section className="section-industries-home">
        <div className="container-wide">
          <div className="industries-home-header">
            <div>
              <span className="eyebrow-blue">INDUSTRIES WE SERVE</span>
              <h2 className="heading-dark">Solutions for a Connected World</h2>
            </div>
            <div>
              <p className="what-we-do-right-desc">
                We provide customized low voltage and IT infrastructure solutions for a wide range of industries.
              </p>
              <div style={{ marginTop: '8px', textAlign: 'right' }}>
                <button className="btn-link" onClick={() => onNavigate('industries')}>
                  <span>View All Industries</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* 8 Industry Cards Grid */}
          <div className="industries-eight-grid">
            {[
              { name: 'Commercial', icon: <Building2 size={24} /> },
              { name: 'Industrial', icon: <TrendingUp size={24} /> },
              { name: 'Government', icon: <Landmark size={24} /> },
              { name: 'Education', icon: <GraduationCap size={24} /> },
              { name: 'Healthcare', icon: <Plus size={24} /> },
              { name: 'Hospitality', icon: <Bed size={24} /> },
              { name: 'Retail', icon: <ShoppingBag size={24} /> },
              { name: 'And More', icon: <MoreHorizontal size={24} /> },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="industry-card-home"
                onClick={() => onNavigate('industries')}
              >
                <div className="industry-card-home-icon">
                  {ind.icon}
                </div>
                <div className="industry-card-home-name">{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER (GLOWING BLUE WAVE BG) */}
      <section style={{ backgroundColor: '#ffffff', paddingBottom: '70px' }}>
        <div className="container-wide">
          <div
            className="cta-banner-home"
            style={{
              backgroundImage: `url('/blue_wave_cta.jpg')`
            }}
          >
            <div className="cta-banner-home-content">
              <span className="eyebrow-blue" style={{ color: '#00bfff', marginBottom: '6px' }}>
                LET'S BUILD TOGETHER
              </span>
              <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#ffffff', lineHeight: 1.15, marginBottom: '10px' }}>
                Ready to Get Started?
              </h2>
              <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.5' }}>
                Partner with Smart-Links Cabling Solutions for reliable, scalable infrastructure that supports your goals today and tomorrow.
              </p>
            </div>
            <div className="cta-banner-home-btn-wrap">
              <button className="btn-primary" onClick={onOpenQuote}>
                <span>Get A Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
