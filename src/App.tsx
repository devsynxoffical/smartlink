import { useState, useEffect } from 'react';
import type { NavTab, ServiceItem, IndustryItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { TopLoadingBar } from './components/TopLoadingBar';
import { BackToTop } from './components/BackToTop';
import { DispatchBadge } from './components/DispatchBadge';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceSubPage } from './pages/ServiceSubPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustrySubPage } from './pages/IndustrySubPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { servicesData, industriesData } from './data/siteData';

export function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [activeSubId, setActiveSubId] = useState<string>('');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState<string | undefined>(undefined);

  // Guarantee that every page transition loads strictly from the very top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Dynamic SEO Titles based on route
    if (currentTab === 'home') {
      document.title = 'Smart-Links Cabling Solutions | Smart Infrastructure. Stronger Possibilities.';
    } else if (currentTab === 'about') {
      document.title = 'About Us & Leadership | Smart-Links Cabling Solutions';
    } else if (currentTab === 'services') {
      document.title = 'Our Services & Infrastructure | Smart-Links Cabling Solutions';
    } else if (currentTab === 'service-detail') {
      const s = servicesData.find(item => item.id === activeSubId);
      document.title = `${s ? s.title : 'Service'} | Smart-Links Cabling Solutions`;
    } else if (currentTab === 'industries') {
      document.title = 'Industries We Serve | Smart-Links Cabling Solutions';
    } else if (currentTab === 'industry-detail') {
      const ind = industriesData.find(item => item.id === activeSubId);
      document.title = `${ind ? ind.title : 'Industry'} Solutions | Smart-Links Cabling Solutions`;
    } else if (currentTab === 'projects') {
      document.title = 'Client Projects & Case Studies | Smart-Links Cabling Solutions';
    } else if (currentTab === 'why-us') {
      document.title = 'Why Us & Certifications | Smart-Links Cabling Solutions';
    } else if (currentTab === 'contact') {
      document.title = 'Contact Us & Locations | Smart-Links Cabling Solutions';
    }
  }, [currentTab, activeSubId]);

  const handleOpenQuote = (serviceName?: string) => {
    setPreselectedQuoteService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleNavigate = (tab: NavTab, subId?: string) => {
    setCurrentTab(tab);
    if (subId) {
      setActiveSubId(subId);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleSelectIndustry = (industry: IndustryItem) => {
    setActiveSubId(industry.id);
  };

  return (
    <div className="app-container">
      {/* 1. Initial Page Loading Preloader */}
      <Preloader />

      {/* 2. Top Navigation Progress Indicator on route change */}
      <TopLoadingBar trigger={`${currentTab}-${activeSubId}`} />

      {/* 3. Persistent Global Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* 4. Main View Router */}
      <main className="main-content">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
            onSelectService={handleSelectService}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
            onSelectService={handleSelectService}
          />
        )}

        {currentTab === 'service-detail' && (
          <ServiceSubPage
            serviceId={activeSubId || servicesData[0].id}
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentTab === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
            onSelectIndustry={handleSelectIndustry}
          />
        )}

        {currentTab === 'industry-detail' && (
          <IndustrySubPage
            industryId={activeSubId || industriesData[0].id}
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentTab === 'why-us' && (
          <WhyUsPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}
      </main>

      {/* 5. Persistent Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* 6. Professional Floating Widgets */}
      <BackToTop />
      <DispatchBadge onOpenQuote={() => handleOpenQuote()} />

      {/* 7. Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={preselectedQuoteService}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceName) => handleOpenQuote(serviceName)}
      />
    </div>
  );
}

export default App;
