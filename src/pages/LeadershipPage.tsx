import React, { useState } from 'react';
import type { NavTab, LeaderItem } from '../types';
import { leadershipData } from '../data/siteData';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  X,
  Briefcase,
  CheckCircle2,
  HardHat,
  Network,
  PhoneCall,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface LeadershipPageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderItem | null>(null);

  return (
    <div className="leadership-page-root animate-fade-in">
      {/* 1. HERO SECTION */}
      <section 
        className="hero-wrapper leadership-hero"
        style={{
          backgroundImage: `url('/about_hero_bg.webp')`
        }}
      >
        <div className="hero-overlay" style={{ background: 'linear-gradient(90deg, rgba(5, 10, 18, 0.95) 0%, rgba(5, 10, 18, 0.85) 55%, rgba(5, 10, 18, 0.65) 100%)' }} />
        
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="leadership-hero-content">
            <div className="hero-tagline-cyan">
              <Users size={16} />
              <span>EXECUTIVE LEADERSHIP</span>
            </div>

            <h1 className="hero-main-title" style={{ maxWidth: '850px' }}>
              VISIONARY LEADERSHIP.<br />
              <span className="cyan-highlight">A STRONGER TOMORROW.</span>
            </h1>

            <p className="hero-sub-p" style={{ maxWidth: '680px' }}>
              Meet the executive leadership team guiding engineering standards, nationwide rollouts, and long-term customer partnerships at Smart-Links Cabling Solutions.
            </p>

            <div className="hero-actions-row">
              <button className="btn-primary" onClick={onOpenQuote}>
                <span>SCHEDULE LEADERSHIP CONSULTATION</span>
                <ArrowRight size={16} />
              </button>

              <button className="btn-outline-white" onClick={() => onNavigate('about')}>
                <span>ABOUT SMART-LINKS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Bottom Metric Strip */}
        <div className="leadership-hero-stats-bar">
          <div className="container-wide">
            <div className="leadership-hero-stats-grid">
              <div className="leadership-hero-stat">
                <div className="stat-value">32+</div>
                <div className="stat-label">Years of Industry Experience</div>
              </div>
              <div className="leadership-hero-stat">
                <div className="stat-value">500+</div>
                <div className="stat-label">Completed Infrastructure Projects</div>
              </div>
              <div className="leadership-hero-stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Certified Field Leads (BICSI / OSHA)</div>
              </div>
              <div className="leadership-hero-stat">
                <div className="stat-value">50 States</div>
                <div className="stat-label">Nationwide Deployment Reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE LEADERSHIP PROFILES (3 PROFILES ONLY) */}
      <section className="leadership-main-section">
        <div className="container-wide">
          <div className="leadership-section-header">
            <div className="eyebrow-dashes">EXECUTIVE TEAM</div>
            <h2 className="heading-dark">Experienced Leadership. A Stronger Tomorrow.</h2>
            <p className="leadership-section-sub">
              Our leadership team brings decades of industry experience, technical knowledge, and a shared commitment to delivering reliable infrastructure solutions.
            </p>
          </div>

          {/* Leaders Grid - Exactly 3 Executive Leaders */}
          <div className="leadership-full-grid">
            {leadershipData.map((leader) => (
              <div 
                key={leader.id} 
                className="leader-profile-card"
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="leader-card-image-area">
                  <img src={leader.image} alt={leader.name} className="leader-card-img" />
                  {leader.experience && (
                    <div className="leader-exp-badge">
                      <Award size={13} />
                      <span>{leader.experience}</span>
                    </div>
                  )}
                  {leader.department && (
                    <div className="leader-dept-tag">
                      {leader.department}
                    </div>
                  )}
                </div>

                <div className="leader-card-details">
                  <div className="leader-title-wrap">
                    <h3 className="leader-card-name">{leader.name}</h3>
                    <p className="leader-card-role">{leader.role}</p>
                  </div>

                  <p className="leader-card-summary">
                    {leader.bio}
                  </p>

                  {leader.credentials && leader.credentials.length > 0 && (
                    <div className="leader-credentials-tags">
                      {leader.credentials.slice(0, 2).map((cred, i) => (
                        <span key={i} className="cred-tag">
                          <CheckCircle2 size={12} />
                          {cred}
                        </span>
                      ))}
                    </div>
                  )}

                  {leader.quote && (
                    <blockquote className="leader-card-quote">
                      "{leader.quote}"
                    </blockquote>
                  )}

                  <div className="leader-card-footer">
                    <button className="btn-view-profile">
                      <span>View Full Bio & Credentials</span>
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP PILLARS & CORE COMMITMENTS */}
      <section className="leadership-commitments-section">
        <div className="container-wide">
          <div className="commitments-grid">
            <div className="commitments-left-col">
              <span className="eyebrow-blue">OUR VALUES</span>
              <h2 className="heading-dark">
                How Our Leadership<br />Sets Us Apart
              </h2>
              <p className="commitments-desc">
                From executive project reviews to on-site quality audits, our leadership is actively engaged in ensuring every client receives precision, safety, and transparency.
              </p>

              <div className="commitments-cta-box">
                <div className="cta-box-icon">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    Direct Executive Access
                  </h4>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, marginBottom: '12px' }}>
                    We believe in open lines of communication. Enterprise clients have direct access to leadership throughout project lifecycles.
                  </p>
                  <button 
                    className="btn-link-blue"
                    onClick={() => onNavigate('contact')}
                    style={{ background: 'none', border: 'none', padding: 0, fontWeight: 700, color: '#0056d2', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Connect with Our Leadership Team &rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="commitments-cards-grid">
              {/* Pillar 1 */}
              <div className="commitment-card">
                <div className="commitment-icon-wrap" style={{ backgroundColor: '#eff6ff', color: '#0056d2' }}>
                  <HardHat size={26} />
                </div>
                <h3 className="commitment-title">Zero-Accident Safety Culture</h3>
                <p className="commitment-text">
                  Safety is not an afterthought; it is our foundation. Leadership enforces comprehensive OSHA training, mandatory daily job briefings, and continuous job hazard assessments.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="commitment-card">
                <div className="commitment-icon-wrap" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                  <ShieldCheck size={26} />
                </div>
                <h3 className="commitment-title">Certified Craftsmanship</h3>
                <p className="commitment-text">
                  Our teams maintain top-tier industry certifications including BICSI RCDD, CommScope, Panduit, and Fluke Networks, ensuring standard compliance on every cable run.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="commitment-card">
                <div className="commitment-icon-wrap" style={{ backgroundColor: '#faf5ff', color: '#9333ea' }}>
                  <Network size={26} />
                </div>
                <h3 className="commitment-title">Scalable National Logistics</h3>
                <p className="commitment-text">
                  We deploy standardized rollout playbooks, centralized material staging, and real-time portal reporting for seamless execution across 50 to 500+ locations.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="commitment-card">
                <div className="commitment-icon-wrap" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                  <Sparkles size={26} />
                </div>
                <h3 className="commitment-title">Future-Ready Architecture</h3>
                <p className="commitment-text">
                  We design infrastructure that anticipates future bandwidth demands—incorporating high-density single-mode fiber, Category 6A, and high-speed Wi-Fi 7 pathways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM DIRECT CTA SECTION */}
      <section className="leadership-bottom-cta">
        <div className="container-wide">
          <div className="leadership-cta-inner">
            <div className="leadership-cta-text">
              <span className="eyebrow-cyan">START A CONVERSATION</span>
              <h2 className="leadership-cta-title">
                Partner with an Experienced Infrastructure Team
              </h2>
              <p className="leadership-cta-desc">
                Whether you need a full data center buildout, structured cabling upgrade, or a 100-site nationwide rollout, our leadership and engineering directors are ready to assist.
              </p>
            </div>

            <div className="leadership-cta-buttons">
              <button className="btn-primary" onClick={onOpenQuote}>
                <span>REQUEST A PROJECT QUOTE</span>
                <ArrowRight size={16} />
              </button>

              <button className="btn-outline-white" onClick={() => onNavigate('contact')}>
                <span>CONTACT US & LOCATIONS</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FULL BIO MODAL */}
      {selectedLeader && (
        <div className="leader-modal-backdrop animate-fade-in" onClick={() => setSelectedLeader(null)}>
          <div className="leader-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="leader-modal-close" 
              onClick={() => setSelectedLeader(null)}
              aria-label="Close Profile"
            >
              <X size={20} />
            </button>

            <div className="leader-modal-grid">
              <div className="leader-modal-sidebar">
                <img src={selectedLeader.image} alt={selectedLeader.name} className="leader-modal-img" />
                
                <div className="leader-modal-quick-info">
                  <h3 className="modal-leader-name">{selectedLeader.name}</h3>
                  <p className="modal-leader-role">{selectedLeader.role}</p>
                  
                  {selectedLeader.department && (
                    <span className="modal-dept-badge">{selectedLeader.department}</span>
                  )}
                </div>
              </div>

              <div className="leader-modal-content">
                <div className="modal-section-block">
                  <h4 className="modal-block-title">
                    <Briefcase size={18} />
                    <span>Executive Biography</span>
                  </h4>
                  <p className="modal-bio-text">
                    {selectedLeader.fullBio || selectedLeader.bio}
                  </p>
                </div>

                {selectedLeader.credentials && selectedLeader.credentials.length > 0 && (
                  <div className="modal-section-block">
                    <h4 className="modal-block-title">
                      <Award size={18} />
                      <span>Certifications & Credentials</span>
                    </h4>
                    <ul className="modal-list-grid">
                      {selectedLeader.credentials.map((cred, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} color="#0056d2" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedLeader.focusAreas && selectedLeader.focusAreas.length > 0 && (
                  <div className="modal-section-block">
                    <h4 className="modal-block-title">
                      <Network size={18} />
                      <span>Areas of Expertise & Focus</span>
                    </h4>
                    <div className="modal-tags-wrap">
                      {selectedLeader.focusAreas.map((area, idx) => (
                        <span key={idx} className="modal-focus-tag">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedLeader.quote && (
                  <div className="modal-quote-box">
                    <p className="modal-quote-text">
                      "{selectedLeader.quote}"
                    </p>
                    <span className="modal-quote-author">— {selectedLeader.name}, {selectedLeader.role}</span>
                  </div>
                )}

                <div className="modal-footer-cta">
                  <button 
                    className="btn-primary" 
                    onClick={() => {
                      setSelectedLeader(null);
                      onOpenQuote();
                    }}
                  >
                    <span>Discuss A Project with {selectedLeader.name.split(' ')[0]}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
