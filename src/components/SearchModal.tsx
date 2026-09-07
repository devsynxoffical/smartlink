import React, { useState } from 'react';
import { Search, X, ArrowRight, Layers, Building2, Briefcase } from 'lucide-react';
import { servicesData, industriesData, projectsData } from '../data/siteData';
import type { NavTab } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: NavTab, subId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredServices = query.trim()
    ? servicesData.filter(
        s =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredIndustries = query.trim()
    ? industriesData.filter(
        i =>
          i.title.toLowerCase().includes(query.toLowerCase()) ||
          i.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredProjects = query.trim()
    ? projectsData.filter(
        p =>
          p.client.toLowerCase().includes(query.toLowerCase()) ||
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const totalMatches =
    filteredServices.length + filteredIndustries.length + filteredProjects.length;

  const handleSelect = (tab: NavTab, subId?: string) => {
    onNavigate(tab, subId);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '90%' }}>
            <Search size={20} color="#0056d2" />
            <input
              type="text"
              autoFocus
              placeholder="Search services, industries, clients, or standards..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                width: '100%',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
          {!query.trim() ? (
            <div>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quick Recommendations
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Fiber Optics', 'Cat6A Structured Cabling', 'Access Control', 'DAS Wireless', 'Retail Multi-Site', 'Healthcare HIPAA', 'Commercial Offices'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      background: '#f1f5f9',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#334155'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalMatches === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 0', color: '#64748b' }}>
              <p style={{ fontSize: '16px', fontWeight: 600 }}>No matching results found for "{query}"</p>
              <p style={{ fontSize: '13.5px', marginTop: '6px' }}>Try searching for "Fiber", "Surveillance", "Walmart", or "Commercial".</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {filteredServices.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 800, color: '#0056d2', textTransform: 'uppercase', marginBottom: '8px' }}>
                    <Layers size={14} /> Services ({filteredServices.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {filteredServices.map(s => (
                      <div
                        key={s.id}
                        onClick={() => handleSelect('service-detail', s.id)}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                      >
                        <div>
                          <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0f172a' }}>{s.title}</div>
                          <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>{s.description}</div>
                        </div>
                        <ArrowRight size={16} color="#0056d2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredIndustries.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 800, color: '#0056d2', textTransform: 'uppercase', marginBottom: '8px' }}>
                    <Building2 size={14} /> Industries ({filteredIndustries.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {filteredIndustries.map(ind => (
                      <div
                        key={ind.id}
                        onClick={() => handleSelect('industry-detail', ind.id)}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                      >
                        <div>
                          <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0f172a' }}>{ind.title} Industry</div>
                          <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>{ind.description}</div>
                        </div>
                        <ArrowRight size={16} color="#0056d2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredProjects.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 800, color: '#0056d2', textTransform: 'uppercase', marginBottom: '8px' }}>
                    <Briefcase size={14} /> Client Case Studies ({filteredProjects.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {filteredProjects.map(proj => (
                      <div
                        key={proj.id}
                        onClick={() => handleSelect('projects')}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                      >
                        <div>
                          <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0f172a' }}>{proj.client} — {proj.title}</div>
                          <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>{proj.description}</div>
                        </div>
                        <ArrowRight size={16} color="#0056d2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
