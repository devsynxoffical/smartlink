import React, { useEffect, useState } from 'react';

interface TopLoadingBarProps {
  trigger: string;
}

export const TopLoadingBar: React.FC<TopLoadingBarProps> = ({ trigger }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(20);

    const t1 = setTimeout(() => setProgress(70), 80);
    const t2 = setTimeout(() => setProgress(100), 220);
    const t3 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 380);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [trigger]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 999999,
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #0075ff, #00bfff, #38bdf8)',
          boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
          transition: 'width 0.2s ease-out'
        }}
      />
    </div>
  );
};
