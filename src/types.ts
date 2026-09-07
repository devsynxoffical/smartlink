export type NavTab = 'home' | 'about' | 'services' | 'industries' | 'projects' | 'why-us' | 'contact' | 'service-detail' | 'industry-detail';

export interface LeaderItem {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  fullBio?: string;
  linkedin?: string;
  email?: string;
}

export interface LocationItem {
  id: string;
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  isHQ?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
  heroImage?: string;
  details: {
    overview: string;
    capabilities: string[];
    standards: string[];
    deliverables: string[];
    processSteps?: { step: string; title: string; desc: string }[];
    faq?: { q: string; a: string }[];
  };
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  heroImage?: string;
  compliance: string;
  solutions: string[];
  challenges?: string[];
  featuredTech?: string[];
  keyBenefits?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Commercial' | 'Retail' | 'Hospitality' | 'Financial' | 'Industrial' | 'Healthcare' | 'Education' | 'Government' | 'Multi-Industry';
  categoryLabel: string;
  description: string;
  image: string;
  logoText: string;
  logoBg?: string;
  scope: string[];
  location: string;
  year: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName?: string;
}

export interface PartnerLogo {
  name: string;
  tagline: string;
  badge: string;
}

