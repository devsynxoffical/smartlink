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
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown-wrap')) {
        setServicesDropdown(false);
        setIndustriesDropdown(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
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
          {/* Logo matching the exact official branding */}
          <div className="brand-logo" onClick={() => handleNavClick('home')}>
            <img 
              src="/smart_links_logo_hd.webp" 
              alt="Smart-Links Cabling Solutions" 
              className="brand-logo-full-img" 
            />
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
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`nav-link ${currentTab === 'services' || currentTab === 'service-detail' ? 'active' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                Services <ChevronDown size={14} style={{ transform: servicesDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>
              {servicesDropdown && (
                <div className="mega-dropdown-menu mega-dropdown-services">
                  {/* Top quick link to Services Main Page */}
                  <div 
                    onClick={() => handleNavClick('services')}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      color: '#0056d2',
                      backgroundColor: '#eff6ff',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dbeafe'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eff6ff'; }}
                  >
                    <span>All Services Overview</span>
                    <span style={{ fontSize: '12px' }}>Explore Main Services Page &rarr;</span>
                  </div>

                  <div className="mega-dropdown-grid">
                    {/* Infrastructure */}
                    <div className="mega-col">
                      <div className="mega-col-title">Infrastructure</div>
                      <div className="mega-col-list">
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('service-detail', 'structured-cabling')}
                        >
                          <span>Structured Cabling</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('service-detail', 'fiber-optics')}
                        >
                          <span>Fiber Optic Solutions</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('service-detail', 'data-center-infrastructure')}
                        >
                          <span>Data Center Infrastructure</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                      </div>
                    </div>

                    {/* Security & Wireless */}
                    <div className="mega-col">
                      <div className="mega-col-title">Security & Wireless</div>
                      <div className="mega-col-list">
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('service-detail', 'video-surveillance')}
                        >
                          <span>Video Surveillance</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('service-detail', 'access-control')}
                        >
                          <span>Access Control</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('service-detail', 'das-systems')}
                        >
                          <span>DAS</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                      </div>
                    </div>

                    {/* Technology */}
                    <div className="mega-col">
                      <div className="mega-col-title">Technology</div>
                      <div className="mega-col-list">
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('service-detail', 'it-solutions')}
                        >
                          <span>IT Solutions</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                      </div>
                    </div>

                    {/* Enterprise */}
                    <div className="mega-col">
                      <div className="mega-col-title">Enterprise</div>
                      <div className="mega-col-list">
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('service-detail', 'nationwide-rollouts')}
                        >
                          <span>Nationwide Rollouts</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="nav-dropdown-wrap"
              onMouseEnter={() => setIndustriesDropdown(true)}
              onMouseLeave={() => setIndustriesDropdown(false)}
            >
              <button
                className={`nav-link ${currentTab === 'industries' || currentTab === 'industry-detail' ? 'active' : ''}`}
                onClick={() => handleNavClick('industries')}
              >
                Industries <ChevronDown size={14} style={{ transform: industriesDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>
              {industriesDropdown && (
                <div className="mega-dropdown-menu mega-dropdown-industries">
                  {/* Top quick link to Industries Main Page */}
                  <div 
                    onClick={() => handleNavClick('industries')}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      color: '#0056d2',
                      backgroundColor: '#eff6ff',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dbeafe'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eff6ff'; }}
                  >
                    <span>All Industries Overview</span>
                    <span style={{ fontSize: '12px' }}>Explore Main Industries Page &rarr;</span>
                  </div>

                  <div className="mega-dropdown-grid">
                    {/* Commercial & Corporate */}
                    <div className="mega-col">
                      <div className="mega-col-title">Commercial & Corporate</div>
                      <div className="mega-col-list">
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('industry-detail', 'commercial')}
                        >
                          <span>Commercial</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('industry-detail', 'retail')}
                        >
                          <span>Retail</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                      </div>
                    </div>

                    {/* Institutional & Public */}
                    <div className="mega-col">
                      <div className="mega-col-title">Institutional & Public</div>
                      <div className="mega-col-list">
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('industry-detail', 'government')}
                        >
                          <span>Government</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('industry-detail', 'education')}
                        >
                          <span>Education</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                      </div>
                    </div>

                    {/* Healthcare & Industrial */}
                    <div className="mega-col">
                      <div className="mega-col-title">Healthcare & Industrial</div>
                      <div className="mega-col-list">
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('industry-detail', 'healthcare')}
                        >
                          <span>Healthcare</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('industry-detail', 'industrial')}
                        >
                          <span>Industrial</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                      </div>
                    </div>

                    {/* Hospitality & Venues */}
                    <div className="mega-col">
                      <div className="mega-col-title">Hospitality & Venues</div>
                      <div className="mega-col-list">
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('industry-detail', 'hospitality')}
                        >
                          <span>Hospitality</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                        <div 
                          className="mega-item-link"
                          onClick={() => handleNavClick('industry-detail', 'sports-entertainment')}
                        >
                          <span>Sports & Entertainment</span>
                          <span className="mega-item-chevron">&gt;</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
              <span>GET A QUOTE</span>
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
