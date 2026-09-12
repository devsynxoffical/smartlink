import React, { useState, useEffect } from 'react';
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
  onNavigate: (tab: NavTab, subId?: string) => void;
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

  const heroSlides = [
    {
      id: 1,
      image: '/hero_server_room_blue_cables.webp',
      tagline: 'CONNECTING TODAY. POWERING TOMORROW.',
      title1: 'SMART INFRASTRUCTURE',
      title2: 'STRONGER POSSIBILITIES',
      desc: 'Smart-Links Cabling Solutions delivers reliable, scalable and future-ready low voltage infrastructure for a more connected world.',
      primaryBtnText: 'OUR SERVICES',
      primaryBtnAction: () => onNavigate('services'),
      secondaryBtnText: 'GET A QUOTE',
      secondaryBtnAction: onOpenQuote
    },
    {
      id: 2,
      image: '/hero_slide_2_hd.webp',
      tagline: 'MISSION-CRITICAL LOW VOLTAGE & FIBER.',
      title1: 'HIGH-SPEED OPTICS',
      title2: 'UNMATCHED RELIABILITY',
      desc: 'Certified fusion splicing, OTDR tier verification, and high-density campus backbone infrastructure built for maximum network throughput.',
      primaryBtnText: 'FIBER SOLUTIONS',
      primaryBtnAction: () => onNavigate('service-detail', 'fiber-optics'),
      secondaryBtnText: 'GET A QUOTE',
      secondaryBtnAction: onOpenQuote
    },
    {
      id: 3,
      image: '/hero_slide_3_hd.webp',
      tagline: 'NATIONWIDE ENTERPRISE INFRASTRUCTURE.',
      title1: 'CONNECTED CAMPUSES',
      title2: 'ENGINEERED EXCELLENCE',
      desc: 'From corporate headquarters to multi-site national rollouts, we deliver turnkey low voltage cabling, security, and wireless DAS systems.',
      primaryBtnText: 'VIEW OUR PROJECTS',
      primaryBtnAction: () => onNavigate('projects'),
      secondaryBtnText: 'GET A QUOTE',
      secondaryBtnAction: onOpenQuote
    }
  ];

  const currentSlideData = heroSlides.find((s) => s.id === activeSlide) || heroSlides[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 3 ? 1 : prev + 1));
    }, 6500);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="homepage-exact-root">
      {/* 1. HERO SECTION WITH 3 DYNAMIC SCREENS */}
      <section className="home-hero">
        {/* Layered Cross-Fading Backgrounds */}
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="home-hero-bg-layer"
            style={{
              backgroundImage: `url('${slide.image}')`,
              opacity: activeSlide === slide.id ? 1 : 0,
              visibility: activeSlide === slide.id ? 'visible' : 'hidden',
              transition: 'opacity 0.8s ease, visibility 0.8s ease'
            }}
          />
        ))}

        <div className="home-hero-overlay" />

        <div className="container-wide" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="home-hero-grid">
            {/* Left Column Dynamic Content */}
            <div key={currentSlideData.id} className="hero-slide-content-fade">
              <div className="hero-tagline-cyan">
                {currentSlideData.tagline}
              </div>
              <h1 className="hero-main-title">
                {currentSlideData.title1}
                <span className="cyan-highlight">{currentSlideData.title2}</span>
              </h1>
              <p className="hero-sub-p">
                {currentSlideData.desc}
              </p>

              <div className="hero-actions-row">
                <button
                  className="btn-primary"
                  onClick={currentSlideData.primaryBtnAction}
                >
                  <span>{currentSlideData.primaryBtnText}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  className="btn-outline-white"
                  onClick={currentSlideData.secondaryBtnAction}
                >
                  <span>{currentSlideData.secondaryBtnText}</span>
                </button>
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

        {/* Bottom Center 01 02 03 Slider Controls */}
        <div className="hero-bottom-center-slider">
          <div className="hero-slider-indices">
            {heroSlides.map((slide) => (
              <span
                key={slide.id}
                className={activeSlide === slide.id ? 'active-idx' : ''}
                onClick={() => setActiveSlide(slide.id)}
                style={{ cursor: 'pointer' }}
                title={`Go to slide 0${slide.id}`}
              >
                0{slide.id}
              </span>
            ))}
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
                  <span>VIEW ALL SERVICES</span>
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
                src="/card_structured_cabling.webp"
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
                    <span>LEARN MORE</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Fiber Optic Solutions */}
            <div className="service-card-v1">
              <img
                src="/card_fiber_optics.webp"
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
                    <span>LEARN MORE</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Video Surveillance */}
            <div className="service-card-v1">
              <img
                src="/card_video_surveillance.webp"
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
                    <span>LEARN MORE</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Access Control */}
            <div className="service-card-v1">
              <img
                src="/card_access_control.webp"
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
                    <span>LEARN MORE</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5: Distributed Antenna Systems (DAS) */}
            <div className="service-card-v1">
              <img
                src="/card_das_antenna.webp"
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
                    <span>LEARN MORE</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 6: IT Solutions */}
            <div className="service-card-v1">
              <img
                src="/card_it_solutions.webp"
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
                    <span>LEARN MORE</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SMART-LINKS (FULL BACKGROUND MATCH) */}
      <section 
        className="section-about-home"
        style={{ backgroundImage: "url('/technician_cabling_reference.webp')" }}
      >
        <div className="about-home-gradient-overlay" />
        <div className="about-home-container">
          {/* Left Narrative */}
          <div className="about-home-left-col">
            <div>
              <span className="eyebrow-blue">ABOUT SMART-LINKS</span>
              <h2 className="heading-dark">
                A Trusted Partner in<br />Building Smarter<br />Connections
              </h2>
              <p className="about-home-left-desc">
                Smart-Links Cabling Solutions is a full-service low voltage contractor, delivering high-quality infrastructure solutions across commercial, industrial, and government markets. We combine technical expertise, industry best practices, and a commitment to excellence to keep your business connected and secure.
              </p>
              <div>
                <button
                  className="btn-primary"
                  onClick={() => onNavigate('about')}
                >
                  <span>LEARN MORE ABOUT US</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Dark Navy Stats Panel */}
          <div className="about-home-right-col">
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
          backgroundImage: `url('/featured_building_banner.webp')`
        }}
      >
        <div className="featured-projects-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="featured-projects-grid">
            {/* Left */}
            <div>
              <span className="eyebrow-blue" style={{ color: '#0075ff' }}>FEATURED PROJECTS</span>
              <h2 className="hero-heading" style={{ marginTop: '12px', color: '#ffffff' }}>
                REAL SOLUTIONS.<br />
                REAL IMPACT.
              </h2>
              <p className="featured-projects-desc">
                Explore how Smart-Links delivers reliable infrastructure that keeps businesses, communities, and people connected.
              </p>
              <button
                className="btn-primary"
                onClick={() => onNavigate('projects')}
                style={{ backgroundColor: '#0075ff', padding: '14px 28px' }}
              >
                <span>VIEW OUR PROJECTS</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Quote Card */}
            <div className="testimonial-card-translucent">
              <div>
                <span style={{ fontSize: '46px', color: '#0075ff', lineHeight: 1, fontFamily: 'serif', display: 'block', marginBottom: '8px' }}>“</span>
                <p className="testimonial-quote-p">
                  "{testimonialsData[testimonialIdx].quote}"
                </p>
                <div className="testimonial-attr">
                  ― {testimonialsData[testimonialIdx].author}
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
                  <span>VIEW ALL INDUSTRIES</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* 8 Industry Cards Grid */}
          <div className="industries-eight-grid">
            {[
              { name: 'Commercial', icon: <Building2 size={28} /> },
              { name: 'Industrial', icon: <TrendingUp size={28} /> },
              { name: 'Government', icon: <Landmark size={28} /> },
              { name: 'Education', icon: <GraduationCap size={28} /> },
              { name: 'Healthcare', icon: <Plus size={28} /> },
              { name: 'Hospitality', icon: <Bed size={28} /> },
              { name: 'Retail', icon: <ShoppingBag size={28} /> },
              { name: 'And More', icon: <MoreHorizontal size={28} /> },
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

      {/* 6. CALL TO ACTION BANNER (FULL WIDTH, ATTACHED TO FOOTER) */}
      <section 
        className="cta-section-full"
        style={{ backgroundImage: `url('/blue_wave_cta.webp')` }}
      >
        <div className="container-wide">
          <div className="cta-full-content">
            <div className="cta-banner-home-content">
              <span className="eyebrow-blue" style={{ color: '#00bfff', marginBottom: '6px', fontSize: '11px', letterSpacing: '0.08em' }}>
                LET'S BUILD TOGETHER
              </span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '8px' }}>
                Ready to Get Started?
              </h2>
              <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.5' }}>
                Partner with Smart-Links Cabling Solutions for reliable, scalable infrastructure that supports your goals today and tomorrow.
              </p>
            </div>
            <div className="cta-banner-home-btn-wrap">
              <button 
                className="btn-primary" 
                onClick={onOpenQuote}
                style={{ borderRadius: '6px', padding: '14px 28px', fontSize: '13.5px', letterSpacing: '0.04em' }}
              >
                <span>GET A QUOTE</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
