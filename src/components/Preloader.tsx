import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 400);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`preloader-overlay ${fade ? 'preloader-fade-out' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#050b17',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
        opacity: fade ? 0 : 1,
        visibility: fade ? 'hidden' : 'visible'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        {/* Animated Brand Logo */}
        <div style={{ position: 'relative' }}>
          <svg width="68" height="68" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="12" fill="#0A1128"/>
            <path d="M14 16C14 13.7909 15.7909 12 18 12H32C34.2091 12 36 13.7909 36 16V18C36 20.2091 34.2091 22 32 22H20C17.7909 22 16 23.7909 16 26V32C16 34.2091 17.7909 36 20 36H34C36.2091 36 38 34.2091 38 32" stroke="#0075FF" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M18 18H32C33.1046 18 34 18.8954 34 20C34 21.1046 33.1046 22 32 22H20C18.8954 22 18 22.8954 18 24V28" stroke="#00C2FF" strokeWidth="3.5" strokeLinecap="round"/>
          </svg>
          <div 
            style={{
              position: 'absolute',
              inset: '-8px',
              border: '2px solid rgba(0, 191, 255, 0.4)',
              borderRadius: '20px',
              animation: 'pulse 1.5s infinite ease-in-out'
            }} 
          />
        </div>

        {/* Brand Text */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>
            Smart-Links
          </div>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#00bfff', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '2px' }}>
            Cabling Solutions
          </div>
        </div>

        {/* Loading Bar */}
        <div 
          style={{
            width: '180px',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            marginTop: '8px'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '60%',
              background: 'linear-gradient(90deg, #0075ff, #00bfff)',
              borderRadius: '10px',
              animation: 'preloaderProgress 1.2s infinite ease-in-out'
            }}
          />
        </div>
      </div>
    </div>
  );
};
