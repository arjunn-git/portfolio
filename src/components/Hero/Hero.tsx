import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { SITE_CONFIG } from '../../data/config';

interface HeroProps {
  onExploreWorkClick: () => void;
  onStartProjectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWorkClick, onStartProjectClick }) => {
  const [localTime, setLocalTime] = useState('');

  // Live IST Time Display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: SITE_CONFIG.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-8 overflow-hidden bg-midnight"
    >
      {/* 3D WebGL Canvas Layer */}
      <HeroCanvas />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Cinematic Radial Vignette & Lighting Core */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-electricBlue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative max-w-5xl mx-auto w-full z-10 flex flex-col items-center text-center">
        {/* Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 px-4 py-2 rounded-full bg-slateNavy/60 backdrop-blur-md border border-steelBlue/20 text-[11px] font-mono text-steelBlue shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electricBlue dot-glow" />
            <span className="text-iceWhite font-semibold">{SITE_CONFIG.name.toUpperCase()}</span>
          </div>
          <span className="text-steelBlue/40 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-steelBlue" />
            <span>FARIDABAD, IN ({localTime} IST)</span>
          </div>
          <span className="text-steelBlue/40 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-iceWhite">
            <Sparkles className="w-3.5 h-3.5 text-electricBlue" />
            <span>3D & KINETIC WEB EXPERIENCES</span>
          </div>
        </div>

        {/* Main Architectural Heading */}
        <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] sm:leading-[1.05] text-iceWhite mb-6 max-w-4xl">
          DESIGNING THE <br />
          <span className="text-metallic">DIGITAL FRONTIER.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-xl text-steelBlue max-w-2xl font-light leading-relaxed mb-10">
          "I create engaging digital experiences by combining creative web design, modern frontend development and interactive technologies."
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreWorkClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-slateNavy hover:bg-slateNavy-light border border-steelBlue/30 hover:border-electricBlue text-iceWhite transition-all duration-300 shadow-lg group"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 text-electricBlue transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            type="button"
            onClick={onStartProjectClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-electricBlue hover:bg-electricBlue-hover text-white transition-all duration-300 shadow-electric-glow group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Quick Tech Badge Ticker */}
        <div className="mt-14 pt-8 border-t border-slateNavy/70 w-full flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-mutedGrey">
          <span className="text-steelBlue font-semibold uppercase tracking-wider">CORE FOCUS:</span>
          {['REACT 19', 'TYPESCRIPT', 'THREE.JS / WEBGL', 'TAILWIND CSS', 'SAAS FRONTEND', 'RESPONSIVE SYSTEMS'].map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-md bg-slateNavy/40 border border-steelBlue/15 text-iceWhite/80"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="font-mono text-[10px] tracking-widest uppercase text-steelBlue">SCROLL TO DISCOVER</span>
          <div className="w-5 h-8 rounded-full border border-steelBlue/40 flex items-start justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-electricBlue animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
