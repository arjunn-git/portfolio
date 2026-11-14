import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';
import { PROJECTS } from '../../data/projects';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-midnight border-t border-slateNavy pt-20 pb-12 px-6 sm:px-8 text-xs font-mono text-steelBlue">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slateNavy/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slateNavy border border-steelBlue/20 flex items-center justify-center">
                <span className="font-display font-bold text-base text-iceWhite">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-iceWhite tracking-wider">
                  {SITE_CONFIG.brand}
                </span>
                <p className="font-sans text-xs text-mutedGrey">
                  {SITE_CONFIG.name}
                </p>
              </div>
            </div>

            <p className="font-sans text-xs text-steelBlue max-w-sm leading-relaxed font-light">
              {SITE_CONFIG.headline}. Transforming digital concepts into high-impact 3D experiences, responsive systems, and scalable SaaS interfaces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slateNavy border border-steelBlue/20 text-iceWhite hover:border-electricBlue hover:text-electricBlue transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              {SITE_CONFIG.social.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slateNavy border border-steelBlue/20 text-iceWhite hover:border-electricBlue hover:text-electricBlue transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-2.5 rounded-lg bg-slateNavy border border-steelBlue/20 text-iceWhite hover:border-electricBlue hover:text-electricBlue transition-colors"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-wider text-iceWhite font-semibold mb-4">
              SITE MAP
            </div>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Expertise', href: '#expertise' },
                { label: 'Projects', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Playground', href: '#playground' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-electricBlue transition-colors inline-block"
                  >
                    // {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Projects Direct Access */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-wider text-iceWhite font-semibold mb-4">
              PROVEN DEPLOYMENTS
            </div>
            <ul className="space-y-2.5">
              {PROJECTS.map((proj) => (
                <li key={proj.id}>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-electricBlue transition-colors group truncate"
                  >
                    <span className="text-mutedGrey font-bold">[{proj.number}]</span>
                    <span className="truncate">{proj.name}</span>
                    <ExternalLink className="w-3 h-3 text-mutedGrey opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slateNavy border border-steelBlue/20 text-iceWhite hover:border-electricBlue hover:text-electricBlue transition-colors shadow-sm group"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="mt-8 lg:mt-0 text-left lg:text-right text-[11px] text-mutedGrey">
              <span>FARIDABAD // IN</span>
              <br />
              <span className="text-electricBlue">● ACTIVE STATUS</span>
            </div>
          </div>
        </div>

        {/* Dynamic Copyright & Studio Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-mutedGrey">
          <div>
            © {currentYear} {SITE_CONFIG.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="text-steelBlue">
            DESIGNED & ENGINEERED WITH THREE.JS, REACT 19 & TAILWIND CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
