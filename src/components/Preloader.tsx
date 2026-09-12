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
        {/* Official Brand Logo matching Header & Footer */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div 
            style={{
              background: '#ffffff',
              padding: '14px 28px',
              borderRadius: '14px',
              boxShadow: '0 8px 30px rgba(0, 117, 255, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 2s infinite ease-in-out'
            }}
          >
            <img 
              src="/smart_links_logo_hd.png" 
              alt="Smart-Links Cabling Solutions" 
              style={{
                height: '42px',
                width: 'auto',
                display: 'block'
              }}
            />
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
