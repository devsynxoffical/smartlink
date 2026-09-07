import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Back to Top"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: '#070e1c',
        color: '#ffffff',
        border: '1.5px solid rgba(0, 191, 255, 0.4)',
        boxShadow: '0 8px 24px rgba(0, 117, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 900,
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        backdropFilter: 'blur(8px)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
        e.currentTarget.style.backgroundColor = '#0075ff';
        e.currentTarget.style.borderColor = '#00bfff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.backgroundColor = '#070e1c';
        e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.4)';
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
};
