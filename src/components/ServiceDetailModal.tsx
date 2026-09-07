import React from 'react';
import type { ServiceItem } from '../types';
import { X, Check, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header image banner */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <img
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, rgba(7, 13, 24, 0.95) 0%, rgba(7, 13, 24, 0.4) 100%)'
          }} />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(0,0,0,0.6)',
              color: '#ffffff',
              borderRadius: '50%',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
          >
            <X size={18} />
          </button>
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px', zIndex: 5 }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: '#38bdf8',
              textTransform: 'uppercase'
            }}>
              Service Specification & Delivery
            </span>
            <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff', marginTop: '4px' }}>
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto', padding: '28px' }}>
          <p style={{ fontSize: '15.5px', color: '#334155', lineHeight: '1.65', marginBottom: '24px' }}>
            {service.details.overview}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            {/* Core Capabilities */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={18} color="#0056d2" /> Core Capabilities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {service.details.capabilities.map((cap, i) => (
                  <li key={i} style={{ fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0056d2', fontWeight: 700 }}>•</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality & Deliverables */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileCheck size={18} color="#0056d2" /> Verified Deliverables
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {service.details.deliverables.map((del, i) => (
                  <li key={i} style={{ fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} color="#0056d2" /> Standards Compliance
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {service.details.standards.map((st, i) => (
                    <span key={i} style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: '#eff6ff',
                      color: '#1e40af',
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span style={{ fontSize: '13px', color: '#64748b' }}>
              Complies with all OSHA, NEC, and BICSI standards.
            </span>
            <button
              className="btn-primary"
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
            >
              <span>Request Quote For This Service</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
