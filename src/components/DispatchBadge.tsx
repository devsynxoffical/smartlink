import React from 'react';
import { Phone } from 'lucide-react';

interface DispatchBadgeProps {
  onOpenQuote: () => void;
}

export const DispatchBadge: React.FC<DispatchBadgeProps> = ({ onOpenQuote }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 890,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
      className="dispatch-floating-badge"
    >
      <div
        style={{
          backgroundColor: 'rgba(7, 14, 28, 0.92)',
          border: '1px solid rgba(0, 191, 255, 0.35)',
          borderRadius: '30px',
          padding: '8px 16px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 8px #10b981',
              animation: 'pulse 2s infinite'
            }}
          />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em' }}>
            24/7 NATIONAL DISPATCH
          </span>
        </div>

        <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>

        <a
          href="tel:4075550100"
          style={{
            fontSize: '12px',
            fontWeight: 800,
            color: '#00bfff',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none'
          }}
        >
          <Phone size={12} />
          <span>(407) 555-0100</span>
        </a>

        <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>

        <button
          onClick={onOpenQuote}
          style={{
            fontSize: '11.5px',
            fontWeight: 800,
            color: '#ffffff',
            backgroundColor: '#0075ff',
            padding: '4px 10px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          QUICK RFP
        </button>
      </div>
    </div>
  );
};
