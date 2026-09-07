import React from 'react';
import type { NavTab } from '../types';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (tab: NavTab, subId?: string) => {
    onNavigate(tab, subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-exact-root">
      {/* Upper White Footer Section */}
      <div className="footer-wrapper-white">
        <div className="container-wide">
          <div className="footer-white-grid">
            {/* 1. Logo & Tagline Column */}
            <div className="footer-col-brand">
              <div className="brand-logo" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>
                <svg className="logo-icon-svg" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" rx="10" fill="#070D18"/>
                  <path d="M14 16C14 13.7909 15.7909 12 18 12H32C34.2091 12 36 13.7909 36 16V18C36 20.2091 34.2091 22 32 22H20C17.7909 22 16 23.7909 16 26V32C16 34.2091 17.7909 36 20 36H34C36.2091 36 38 34.2091 38 32" stroke="#0056D2" strokeWidth="5.5" strokeLinecap="round"/>
                  <path d="M18 18H32C33.1046 18 34 18.8954 34 20C34 21.1046 33.1046 22 32 22H20C18.8954 22 18 22.8954 18 24V28" stroke="#00C2FF" strokeWidth="3.5" strokeLinecap="round"/>
                </svg>
                <div className="brand-text">
                  <span className="brand-title">Smart-Links</span>
                  <span className="brand-subtitle">Cabling Solutions</span>
                </div>
              </div>
              <p className="footer-brand-motto">
                Connecting People. Places. Possibilities.
              </p>
            </div>

            {/* 2. Quick Links Column */}
            <div>
              <h4 className="footer-col-heading">Quick Links</h4>
              <ul className="footer-nav-list">
                <li><button onClick={() => handleNav('home')}>Home</button></li>
                <li><button onClick={() => handleNav('about')}>About</button></li>
                <li><button onClick={() => handleNav('services')}>Services</button></li>
                <li><button onClick={() => handleNav('industries')}>Industries</button></li>
                <li><button onClick={() => handleNav('projects')}>Projects</button></li>
                <li><button onClick={() => handleNav('why-us')}>Why Us</button></li>
                <li><button onClick={() => handleNav('contact')}>Contact</button></li>
              </ul>
            </div>

            {/* 3. Our Services Column */}
            <div>
              <h4 className="footer-col-heading">Our Services</h4>
              <ul className="footer-nav-list">
                <li><button onClick={() => handleNav('service-detail', 'structured-cabling')}>Structured Cabling</button></li>
                <li><button onClick={() => handleNav('service-detail', 'fiber-optics')}>Fiber Optic</button></li>
                <li><button onClick={() => handleNav('service-detail', 'video-surveillance')}>Video Surveillance</button></li>
                <li><button onClick={() => handleNav('service-detail', 'access-control')}>Access Control</button></li>
                <li><button onClick={() => handleNav('service-detail', 'das-systems')}>DAS</button></li>
                <li><button onClick={() => handleNav('service-detail', 'it-solutions')}>IT Solutions</button></li>
              </ul>
            </div>

            {/* 4. Contact Us & Follow Us Column */}
            <div>
              <h4 className="footer-col-heading">Contact Us</h4>
              <div className="footer-contact-stack">
                <div className="footer-contact-item">
                  <MapPin size={15} className="footer-contact-icon" />
                  <span>1234 Innovation Drive, Orlando, FL 32801</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={15} className="footer-contact-icon" />
                  <a href="tel:4075550100">(407) 555-0100</a>
                </div>
                <div className="footer-contact-item">
                  <Mail size={15} className="footer-contact-icon" />
                  <a href="mailto:info@smart-linksces.com">info@smart-linksces.com</a>
                </div>
                <div className="footer-contact-item">
                  <Globe size={15} className="footer-contact-icon" />
                  <a href="https://smart-linksces.com" target="_blank" rel="noreferrer">www.smart-linksces.com</a>
                </div>
              </div>

              {/* Follow Us Dark Social Icons */}
              <div className="footer-social-wrapper">
                <div className="footer-social-label">Follow Us</div>
                <div className="footer-social-row">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="YouTube">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 5. Right Brand Motto Tag Column */}
            <div className="footer-col-tagline">
              <div className="footer-tagline-block">
                <div className="footer-tagline-words">
                  PEOPLE<br />
                  PLACES<br />
                  POSSIBILITIES
                </div>
                <div className="footer-tagline-accent-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Copyright Sub-footer Strip */}
      <div className="footer-dark-strip">
        <div className="container-wide">
          <div className="footer-dark-inner">
            <div className="footer-dark-copy">
              © {new Date().getFullYear()} Smart-Links Cabling Solutions, LLC. All rights reserved.
            </div>
            <div className="footer-dark-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="dot">|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
