import React from 'react';
import { Github, Linkedin, ExternalLink, Code2, Layers, Cpu, Compass, FileDown } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="telemetry-tag mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
            <span>01 // PROFESSIONAL IDENTITY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight">
            BEYOND THE ORDINARY WEB.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Artistic Geometric Identity & Quick Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl bg-gradient-to-br from-slateNavy via-midnight to-slateNavy/80 p-8 border border-steelBlue/20 shadow-electric-card overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-electricBlue/20 rounded-full blur-3xl pointer-events-none" />

              {/* Monogram Sculpture Display */}
              <div className="relative z-10 flex flex-col items-start">
                <div className="w-16 h-16 rounded-xl bg-midnight border border-steelBlue/30 flex items-center justify-center mb-6 shadow-inner">
                  <span className="font-display font-bold text-3xl text-iceWhite">AT</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-iceWhite mb-1">
                  {SITE_CONFIG.name}
                </h3>
                <p className="font-mono text-xs text-electricBlue tracking-wider uppercase mb-6">
                  {SITE_CONFIG.headline}
                </p>

                <div className="w-full space-y-3 pt-6 border-t border-slateNavy/90 font-mono text-xs text-steelBlue">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-mutedGrey">BASE LOCATION</span>
                    <span className="text-iceWhite text-right">{SITE_CONFIG.location}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-mutedGrey">CURRENT ROLE</span>
                    <span className="text-iceWhite text-right">Web Designer @ Adaan</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-mutedGrey">HIGHER EDUCATION</span>
                    <span className="text-iceWhite text-right">MCA (AI/ML) · Manipal Univ</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-mutedGrey">SPECIALTY</span>
                    <span className="text-electricBlue font-semibold text-right">Interactive 3D & Frontend</span>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="w-full mt-6 pt-6 border-t border-slateNavy/90 flex flex-wrap gap-3">
                  <a
                    href={SITE_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-midnight hover:bg-slateNavy border border-steelBlue/25 hover:border-electricBlue text-iceWhite text-xs font-mono transition-colors"
                  >
                    <Github className="w-4 h-4 text-electricBlue" />
                    <span>arjunn-git</span>
                    <ExternalLink className="w-3 h-3 text-mutedGrey" />
                  </a>

                  {SITE_CONFIG.social.linkedin && (
                    <a
                      href={SITE_CONFIG.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-midnight hover:bg-slateNavy border border-steelBlue/25 hover:border-electricBlue text-iceWhite text-xs font-mono transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-electricBlue" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3 text-mutedGrey" />
                    </a>
                  )}

                  {SITE_CONFIG.resume.url && (
                    <a
                      href={SITE_CONFIG.resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-electricBlue/20 hover:bg-electricBlue/30 border border-electricBlue text-iceWhite text-xs font-mono transition-colors"
                    >
                      <FileDown className="w-4 h-4 text-electricBlue" />
                      <span>{SITE_CONFIG.resume.label}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Engineering Principles */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-steelBlue/20">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-iceWhite mb-4">
                Creative Design Thinking Meets Frontend Engineering
              </h3>
              <p className="text-base sm:text-lg text-steelBlue leading-relaxed mb-6 font-light">
                "I'm Arjun Taneja, a Web Designer and Frontend Developer focused on transforming ideas into modern digital experiences. I combine visual design, frontend engineering, usability and performance to create websites and applications that are both engaging and functional."
              </p>
              <p className="text-sm sm:text-base text-mutedGrey leading-relaxed font-light">
                At the intersection of design sensibility and software engineering, I believe modern websites should not merely display data—they should evoke immersion, inspire trust, and convert visitors into clients. Every component is built with pixel precision, fluid responsiveness, and strict architectural standards.
              </p>
            </div>

            {/* Triad Pillars: Philosophy & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-6 border border-steelBlue/15">
                <div className="w-10 h-10 rounded-lg bg-slateNavy border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-iceWhite text-sm mb-2">Design Philosophy</h4>
                <p className="text-xs text-mutedGrey leading-relaxed">
                  Generous whitespace, cinematic dark palettes, high-contrast typography, and purposeful micro-interactions that elevate brand prestige.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-steelBlue/15">
                <div className="w-10 h-10 rounded-lg bg-slateNavy border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-iceWhite text-sm mb-2">Development Approach</h4>
                <p className="text-xs text-mutedGrey leading-relaxed">
                  Clean, modular React 19 and TypeScript architectures, atomic CSS, reusable components, and robust API endpoints with zero bloat.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-steelBlue/15">
                <div className="w-10 h-10 rounded-lg bg-slateNavy border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-iceWhite text-sm mb-2">Performance & 3D</h4>
                <p className="text-xs text-mutedGrey leading-relaxed">
                  Hardware-accelerated Three.js WebGL visuals, rapid first contentful paints, strict Core Web Vitals, and smooth mobile responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
