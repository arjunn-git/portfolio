import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

interface NavbarProps {
  onStartProjectClick: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Playground', href: '#playground' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for sticky header elevation & active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-midnight/85 backdrop-blur-md border-b border-slateNavy'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram & Availability Telemetry */}
        <div className="flex items-center gap-6">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 text-iceWhite"
          >
            <div className="w-9 h-9 rounded-lg bg-slateNavy border border-steelBlue/20 flex items-center justify-center group-hover:border-electricBlue transition-colors">
              <span className="font-display font-bold text-sm tracking-wider">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider group-hover:text-electricBlue transition-colors">
                {SITE_CONFIG.brand}
              </span>
              <span className="hidden sm:inline font-mono text-[9px] tracking-widest text-steelBlue uppercase">
                STUDIO // PORTFOLIO
              </span>
            </div>
          </a>

          {/* Central Availability Pulse */}
          {SITE_CONFIG.freelance.available && (
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slateNavy/60 border border-steelBlue/20 text-[11px] font-mono text-steelBlue">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electricBlue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electricBlue dot-glow" />
              </span>
              <span>{SITE_CONFIG.freelance.badgeText}</span>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slateNavy/40 backdrop-blur-lg border border-steelBlue/15">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-iceWhite font-semibold'
                    : 'text-mutedGrey hover:text-iceWhite'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-slateNavy rounded-full border border-electricBlue/30 shadow-sm -z-10" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA: Start a Project */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            type="button"
            onClick={onStartProjectClick}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-white bg-electricBlue hover:bg-electricBlue-hover transition-all duration-200 shadow-electric-glow"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-slateNavy border border-steelBlue/20 text-iceWhite hover:text-electricBlue transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-midnight/95 backdrop-blur-xl border-b border-slateNavy px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-display font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-slateNavy text-electricBlue font-semibold'
                    : 'text-mutedGrey hover:text-iceWhite'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slateNavy/80 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProjectClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold tracking-wider text-white bg-electricBlue hover:bg-electricBlue-hover shadow-electric-glow"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              {SITE_CONFIG.freelance.available && (
                <div className="text-center font-mono text-[11px] text-steelBlue flex items-center justify-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-electricBlue dot-glow" />
                  <span>{SITE_CONFIG.freelance.statusText}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
