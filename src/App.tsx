import { useState, useEffect } from 'react';
import type { NavTab, ServiceItem, IndustryItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { TopLoadingBar } from './components/TopLoadingBar';
import { BackToTop } from './components/BackToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceSubPage } from './pages/ServiceSubPage';
import { NationwideRolloutsPage } from './pages/NationwideRolloutsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustrySubPage } from './pages/IndustrySubPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { servicesData, industriesData } from './data/siteData';

const parseRoute = (): { tab: NavTab; subId: string } => {
  const path = window.location.pathname.replace(/^\/|\/$/g, '');
  if (!path || path === 'home') return { tab: 'home', subId: '' };
  if (path === 'about') return { tab: 'about', subId: '' };
  if (path === 'services') return { tab: 'services', subId: '' };
  if (path === 'industries') return { tab: 'industries', subId: '' };
  if (path === 'projects') return { tab: 'projects', subId: '' };
  if (path === 'why-us') return { tab: 'why-us', subId: '' };
  if (path === 'contact') return { tab: 'contact', subId: '' };
  if (path === 'nationwide-rollouts' || path === 'service/nationwide-rollouts') return { tab: 'nationwide-rollouts', subId: 'nationwide-rollouts' };
  if (path.startsWith('service/')) return { tab: 'service-detail', subId: path.replace('service/', '') };
  if (path.startsWith('industry/')) return { tab: 'industry-detail', subId: path.replace('industry/', '') };
  return { tab: 'home', subId: '' };
};

export function App() {
  const initialRoute = parseRoute();
  const [currentTab, setCurrentTab] = useState<NavTab>(initialRoute.tab);
  const [activeSubId, setActiveSubId] = useState<string>(initialRoute.subId);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState<string | undefined>(undefined);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = parseRoute();
      setCurrentTab(route.tab);
      setActiveSubId(route.subId);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
    } else if (currentTab === 'nationwide-rollouts' || (currentTab === 'service-detail' && activeSubId === 'nationwide-rollouts')) {
      document.title = 'Nationwide Rollout Services | Smart-Links Cabling Solutions';
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
    // Intercept nationwide rollouts navigate
    if (tab === 'nationwide-rollouts' || (tab === 'service-detail' && subId === 'nationwide-rollouts')) {
      setCurrentTab('nationwide-rollouts');
      setActiveSubId('nationwide-rollouts');
      const newPath = '/nationwide-rollouts';
      if (window.location.pathname !== newPath) {
        window.history.pushState({}, '', newPath);
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    setCurrentTab(tab);
    if (subId) {
      setActiveSubId(subId);
    }

    let newPath = '/';
    if (tab === 'home') newPath = '/';
    else if (tab === 'service-detail' && subId) newPath = `/service/${subId}`;
    else if (tab === 'industry-detail' && subId) newPath = `/industry/${subId}`;
    else newPath = `/${tab}`;

    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectService = (service: ServiceItem) => {
    if (service.id === 'nationwide-rollouts') {
      handleNavigate('nationwide-rollouts', 'nationwide-rollouts');
    } else {
      setSelectedService(service);
    }
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

        {currentTab === 'nationwide-rollouts' && (
          <NationwideRolloutsPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentTab === 'service-detail' && activeSubId !== 'nationwide-rollouts' && (
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
