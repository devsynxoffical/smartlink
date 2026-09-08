import React, { useState, useEffect } from 'react';
import type { NavTab } from '../types';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { servicesData, industriesData } from '../data/siteData';

interface HeaderProps {
  currentTab: NavTab;
  onNavigate: (tab: NavTab, subId?: string) => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenQuote,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: NavTab, subId?: string) => {
    onNavigate(tab, subId);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIndustriesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-wide">
        <div className="header-container">
          {/* Logo matching the original branding */}
          <div className="brand-logo" onClick={() => handleNavClick('home')}>
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

          {/* Desktop Navigation Links */}
          <nav className="nav-menu">
            <button
              className={`nav-link ${currentTab === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>

            <button
              className={`nav-link ${currentTab === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div 
              className="nav-dropdown-wrap"
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`nav-link ${currentTab === 'services' || currentTab === 'service-detail' ? 'active' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                Services <ChevronDown size={14} />
              </button>
              {servicesDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-20px',
                  width: '320px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.14)',
                  borderRadius: '14px',
                  padding: '12px',
                  zIndex: 100,
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <div 
                    onClick={() => handleNavClick('services')}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#0056d2',
                      backgroundColor: '#eff6ff',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>All Services Overview</span>
                    <span>&rarr;</span>
                  </div>
                  {servicesData.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => handleNavClick('service-detail', s.id)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#334155',
                        cursor: 'pointer',
                        transition: 'background 0.15s, color 0.15s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8fafc';
                        e.currentTarget.style.color = '#0056d2';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#334155';
                      }}
                    >
                      <span>{s.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="nav-dropdown-wrap"
              style={{ position: 'relative' }}
              onMouseEnter={() => setIndustriesDropdown(true)}
              onMouseLeave={() => setIndustriesDropdown(false)}
            >
              <button
                className={`nav-link ${currentTab === 'industries' || currentTab === 'industry-detail' ? 'active' : ''}`}
                onClick={() => handleNavClick('industries')}
              >
                Industries <ChevronDown size={14} />
              </button>
              {industriesDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-20px',
                  width: '300px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.14)',
                  borderRadius: '14px',
                  padding: '12px',
                  zIndex: 100,
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <div 
                    onClick={() => handleNavClick('industries')}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#0056d2',
                      backgroundColor: '#eff6ff',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>All Industries Overview</span>
                    <span>&rarr;</span>
                  </div>
                  {industriesData.map((ind) => (
                    <div
                      key={ind.id}
                      onClick={() => handleNavClick('industry-detail', ind.id)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#334155',
                        cursor: 'pointer',
                        transition: 'background 0.15s, color 0.15s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8fafc';
                        e.currentTarget.style.color = '#0056d2';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#334155';
                      }}
                    >
                      <span>{ind.title}</span>
                      <span style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>{ind.compliance.split('/')[0]}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              className={`nav-link ${currentTab === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </button>

            <button
              className={`nav-link ${currentTab === 'why-us' ? 'active' : ''}`}
              onClick={() => handleNavClick('why-us')}
            >
              Why Us
            </button>

            <button
              className={`nav-link ${currentTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </nav>

          {/* Action Area */}
          <div className="header-actions">
            <button 
              className="search-btn" 
              onClick={onOpenSearch} 
              aria-label="Search"
              title="Search Site Content"
            >
              <Search size={18} />
            </button>

            <button className="btn-get-quote" onClick={onOpenQuote}>
              <span>Get A Quote</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Menu Hamburger */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-inner">
            <button className={`mobile-nav-link ${currentTab === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>
              Home
            </button>
            <button className={`mobile-nav-link ${currentTab === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>
              About Us & Leadership
            </button>
            <button className={`mobile-nav-link ${currentTab === 'services' ? 'active' : ''}`} onClick={() => handleNavClick('services')}>
              <span>Services Overview</span>
              <ChevronDown size={15} />
            </button>
            <div className="mobile-sub-group">
              {servicesData.map(s => (
                <button 
                  key={s.id} 
                  onClick={() => handleNavClick('service-detail', s.id)}
                  className="mobile-sub-link"
                >
                  • {s.title}
                </button>
              ))}
            </div>

            <button className={`mobile-nav-link ${currentTab === 'industries' ? 'active' : ''}`} onClick={() => handleNavClick('industries')}>
              <span>Industries Served</span>
              <ChevronDown size={15} />
            </button>
            <div className="mobile-sub-group">
              {industriesData.map(ind => (
                <button 
                  key={ind.id} 
                  onClick={() => handleNavClick('industry-detail', ind.id)}
                  className="mobile-sub-link"
                >
                  • {ind.title}
                </button>
              ))}
            </div>

            <button className={`mobile-nav-link ${currentTab === 'projects' ? 'active' : ''}`} onClick={() => handleNavClick('projects')}>
              Projects Portfolio
            </button>
            <button className={`mobile-nav-link ${currentTab === 'why-us' ? 'active' : ''}`} onClick={() => handleNavClick('why-us')}>
              Why Us & Credentials
            </button>
            <button className={`mobile-nav-link ${currentTab === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
              Contact & Locations
            </button>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
              <button 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
              >
                <span>Request A Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
