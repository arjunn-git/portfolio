import React, { useEffect, useState } from 'react';
import { SITE_CONFIG } from '../../data/config';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // Fast, elegant load (~1.2s total)

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            onComplete();
          }, 450);
        }, 150);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight transition-opacity duration-500 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading portfolio experience"
    >
      <div className="w-full max-w-sm px-8 flex flex-col items-center">
        {/* Monogram Brand Mark */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-slateNavy border border-steelBlue/20 flex items-center justify-center shadow-electric-glow">
            <span className="font-display font-bold text-2xl text-iceWhite tracking-wider">A</span>
          </div>
          <div className="absolute -inset-1 rounded-2xl border border-electricBlue/30 animate-pulse-subtle pointer-events-none" />
        </div>

        {/* Brand Name */}
        <div className="text-center mb-6">
          <h1 className="font-display text-2xl font-bold tracking-widest text-iceWhite">
            {SITE_CONFIG.brand}
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-steelBlue mt-1">
            CREATIVE TECHNOLOGY STUDIO
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-slateNavy/80 h-1 rounded-full overflow-hidden border border-white/5 relative">
          <div
            className="h-full bg-gradient-to-r from-electricBlue to-iceWhite transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Indicator */}
        <div className="w-full flex justify-between items-center mt-3 font-mono text-[11px] text-mutedGrey">
          <span>SYS_INITIALIZE</span>
          <span className="text-iceWhite font-semibold">{progress.toString().padStart(3, '0')}%</span>
        </div>
      </div>
    </div>
  );
};
