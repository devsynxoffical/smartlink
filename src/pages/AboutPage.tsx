import React, { useState } from 'react';
import type { NavTab, LeaderItem } from '../types';
import { leadershipData, locationsData } from '../data/siteData';
import { 
  ArrowRight, 
  Mail
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderItem | null>(null);

  return (
    <div className="about-page-exact">
      {/* 1. HERO SECTION - Exact 1:1 Match to Mockup */}
      <section 
        className="about-hero-section"
        style={{
          backgroundImage: `url('/about_hero_bg.jpg')`
        }}
      >
        <div className="about-hero-overlay" />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-hero-grid">
            {/* Left Content */}
            <div>
              <div className="eyebrow-cyan">COMPANY</div>
              <h1 className="about-hero-title">
                More Than 30 Years <br />
                <span className="blue-highlight">of IT Experience.</span>
              </h1>
              <p className="about-hero-subtext">
                The experts at Smart-Links Cabling Solutions, LLC.<br />
                are here to assist you.
              </p>
            </div>

            {/* Right Tag Banner (Plain Stacked Typography) */}
            <div className="about-hero-right-tag">
              <div className="about-hero-tagline-text">
                CONNECTING<br />
                PEOPLE<br />
                PLACES<br />
                POSSIBILITIES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR LEADERSHIP - Exact 4-Column Layout Match to Mockup */}
      <section className="leadership-section">
        <div className="container-wide">
          <div className="leadership-grid-4col">
            {/* Column 1: Text Block */}
            <div className="leadership-text-col">
              <div className="eyebrow-dashes">OUR LEADERSHIP</div>
              <h2 className="leadership-heading">
                Experienced Leadership.<br />
                A Stronger Tomorrow.
              </h2>
              <p className="leadership-desc">
                Our leadership team brings decades of industry experience, technical knowledge, and a shared commitment to delivering reliable infrastructure solutions. We lead with integrity, innovation, and a focus on building lasting partnerships.
              </p>
              <button 
                onClick={() => onNavigate('contact')}
                className="btn-primary"
                style={{ fontSize: '13.5px', padding: '12px 24px', borderRadius: '6px' }}
              >
                <span>MEET OUR LEADERSHIP</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Column 2: Andrew Wilson */}
            <div className="leader-card-v1" onClick={() => setSelectedLeader(leadershipData[0])} style={{ cursor: 'pointer' }}>
              <div className="leader-photo-wrap">
                <img src="/andrew_wilson.jpg" alt="Andrew Wilson" />
              </div>
              <div className="leader-card-body">
                <h3 className="leader-name">Andrew Wilson</h3>
                <p className="leader-role">President & CEO</p>
                <p className="leader-bio">
                  Visionary leadership with a focus on growth, innovation, and customer success.
                </p>
              </div>
            </div>

            {/* Column 3: Michael Carter */}
            <div className="leader-card-v1" onClick={() => setSelectedLeader(leadershipData[1])} style={{ cursor: 'pointer' }}>
              <div className="leader-photo-wrap">
                <img src="/michael_carter.jpg" alt="Michael Carter" />
              </div>
              <div className="leader-card-body">
                <h3 className="leader-name">Michael Carter</h3>
                <p className="leader-role">Chief Operating Officer</p>
                <p className="leader-bio">
                  Operational excellence driving nationwide delivery and client satisfaction.
                </p>
              </div>
            </div>

            {/* Column 4: Jennifer Martinez */}
            <div className="leader-card-v1" onClick={() => setSelectedLeader(leadershipData[2])} style={{ cursor: 'pointer' }}>
              <div className="leader-photo-wrap">
                <img src="/jennifer_martinez.jpg" alt="Jennifer Martinez" />
              </div>
              <div className="leader-card-body">
                <h3 className="leader-name">Jennifer Martinez</h3>
                <p className="leader-role">Chief Technology Officer</p>
                <p className="leader-bio">
                  Leading technology strategy and ensuring innovative, scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION - Exact 1:1 Match to Mockup */}
      <section className="story-section">
        <div className="container-wide">
          <div className="story-grid-2col">
            {/* Left Narrative */}
            <div>
              <div className="eyebrow-dashes-left" style={{ marginBottom: '14px' }}>OUR STORY</div>
              <h2 className="story-heading">
                A Strong Foundation<br />
                for a Connected Tomorrow.
              </h2>
              <p className="story-paragraph">
                Smart-Links Cabling Solutions, LLC. was founded on the principle that reliable infrastructure drives real progress. With more than 30 years of IT experience, the experts at Smart-Links Cabling Solutions. LLC. are here to assist you.
              </p>
              <p className="story-paragraph">
                We bring deep technical knowledge, industry certifications, and real-world experience to every project — from single-site installations to complex nationwide rollouts. Our commitment to quality, integrity, and customer success has made us a trusted partner for businesses, government agencies, educational institutions, and organizations across the United States.
              </p>
              <div style={{ marginTop: '24px' }}>
                <button 
                  onClick={() => onNavigate('why-us')}
                  className="btn-primary"
                  style={{ fontSize: '13.5px', padding: '12px 24px', borderRadius: '6px' }}
                >
                  <span>OUR FULL STORY</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Photo with Smart-Links Technician */}
            <div className="story-photo-container">
              <img 
                src="/technician_cabling.jpg" 
                alt="Smart-Links Cabling Solutions Technician" 
              />
              <div className="story-badge-overlay">
                <div className="badge-text">
                  PEOPLE<br />
                  PLACES<br />
                  POSSIBILITIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR LOCATIONS SECTION - Exact 5-Column Match to Mockup */}
      <section className="locations-section">
        <div className="container-wide">
          <div className="locations-header-row">
            <div>
              <div className="eyebrow-dashes-left" style={{ marginBottom: '8px' }}>OUR LOCATIONS</div>
              <h2 className="locations-title">
                Strategically Located. Nationwide Support.
              </h2>
            </div>
            <div className="locations-sub-note">
              Multiple locations to serve you better.
            </div>
          </div>

          <div className="locations-grid-5col">
            {locationsData.map((loc) => (
              <div key={loc.id} className="location-col-item">
                <div className="location-item-inner">
                  <div className="location-pin-wrap">
                    <svg width="22" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="location-pin-svg">
                      <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" fill="#0075FF"/>
                      <circle cx="12" cy="9" r="3.2" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <div className="location-info-block">
                    <h3 className="location-name">{loc.name}</h3>
                    <div className="location-address">
                      {loc.address}<br />
                      {loc.cityStateZip}
                    </div>
                    <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="location-phone">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE MODAL */}
      {selectedLeader && (
        <div className="modal-backdrop" onClick={() => setSelectedLeader(null)}>
          <div className="modal-container" style={{ maxWidth: '620px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#0075ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Executive Leadership Profile
              </span>
              <button className="modal-close-btn" onClick={() => setSelectedLeader(null)}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="executive-profile-row">
                <img 
                  src={selectedLeader.image} 
                  alt={selectedLeader.name} 
                  style={{ width: '100px', height: '125px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                />
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0a1128' }}>{selectedLeader.name}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0075ff', margin: '4px 0 10px 0' }}>{selectedLeader.role}</p>
                  <div className="executive-profile-actions">
                    <a 
                      href={`mailto:${selectedLeader.email}`} 
                      style={{ fontSize: '12px', color: '#475569', background: '#f1f5f9', padding: '6px 12px', borderRadius: '6px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Mail size={13} /> Email
                    </a>
                    <a 
                      href={selectedLeader.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: '12px', color: '#0075ff', background: '#eff6ff', padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}
                    >
                      LinkedIn Profile &rarr;
                    </a>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65' }}>
                {selectedLeader.fullBio || selectedLeader.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
