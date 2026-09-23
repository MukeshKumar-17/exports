import React, { useState, useEffect } from 'react';

interface ScrollProgressBarProps {
  darkMode: boolean;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ darkMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const scrollY = window.scrollY;
      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollableHeight > 0) {
        const progress = (scrollY / totalScrollableHeight) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      } else {
        setScrollProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScroll);
    calculateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[70] h-[2.5px] pointer-events-none w-full"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      {/* Background Track */}
      <div
        className={`absolute inset-0 w-full h-full transition-colors duration-300 ${
          darkMode ? 'bg-white/[0.04]' : 'bg-black/[0.04]'
        }`}
      />

      {/* Progress Indicator Bar */}
      <div
        className={`h-full relative transition-[width] duration-75 ease-out ${
          darkMode
            ? 'bg-gradient-to-r from-[#997B22] via-[#D4AF37] to-[#F5E6B8]'
            : 'bg-gradient-to-r from-[#8C6D15] via-[#B8972E] to-[#D4AF37]'
        }`}
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Editorial champagne gold micro-glow bead at the leading edge */}
        {scrollProgress > 0 && (
          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
              darkMode
                ? 'bg-[#FFF6D6] shadow-[0_0_8px_rgba(212,175,55,0.9),0_0_3px_#FFFFFF]'
                : 'bg-[#FFE9A0] shadow-[0_0_6px_rgba(184,151,46,0.8)]'
            }`}
          />
        )}
      </div>
    </div>
  );
};
