import React, { useState } from 'react';
import { Layout, Sparkles, Server, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/skills';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-electricBlue" />,
  Sparkles: <Sparkles className="w-5 h-5 text-electricBlue" />,
  Server: <Server className="w-5 h-5 text-electricBlue" />,
  Terminal: <Terminal className="w-5 h-5 text-electricBlue" />,
  Cpu: <Cpu className="w-5 h-5 text-electricBlue" />,
};

export const Expertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="expertise" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="telemetry-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
              <span>02 // TECHNICAL MATRIX</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight">
              EXPERTISE & STACK.
            </h2>
          </div>
          <p className="text-steelBlue max-w-md text-sm sm:text-base font-light">
            Comprehensive frontend engineering, creative 3D motion, and full-stack capabilities honed across professional projects and real products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-slateNavy/70">
          {SKILL_CATEGORIES.map((category, idx) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                activeCategory === idx
                  ? 'bg-slateNavy text-iceWhite border border-electricBlue shadow-electric-glow font-semibold'
                  : 'bg-slateNavy/40 text-mutedGrey hover:text-iceWhite border border-steelBlue/15 hover:border-steelBlue/30'
              }`}
            >
              {ICON_MAP[category.iconName]}
              <span>{category.title.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display & Detailed Card Grid */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-steelBlue/20 shadow-electric-card">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-iceWhite mb-2">
              {SKILL_CATEGORIES[activeCategory].title}
            </h3>
            <p className="text-steelBlue text-sm font-light max-w-2xl">
              {SKILL_CATEGORIES[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className={`group p-4 rounded-xl transition-all duration-200 border ${
                  skill.highlight
                    ? 'bg-slateNavy/80 border-electricBlue/40 shadow-sm'
                    : 'bg-midnight/70 border-steelBlue/15 hover:border-steelBlue/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-medium text-sm text-iceWhite group-hover:text-electricBlue transition-colors">
                    {skill.name}
                  </span>
                  <CheckCircle2
                    className={`w-4 h-4 ${
                      skill.highlight ? 'text-electricBlue' : 'text-steelBlue/40'
                    }`}
                  />
                </div>
                <div className="w-full bg-midnight/90 h-1 rounded-full overflow-hidden mt-3">
                  <div
                    className={`h-full ${
                      skill.highlight
                        ? 'bg-gradient-to-r from-electricBlue to-iceWhite w-full'
                        : 'bg-steelBlue/30 w-3/4'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Standard Note: No Fake Percentages */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-mutedGrey px-2">
          <span>* EVALUATED BY PRODUCTION DEPLOYMENTS & ARCHITECTURAL IMPLEMENTATIONS</span>
          <span className="text-steelBlue">ZERO ARBITRARY PERCENTAGES · 100% PRODUCTION VERIFIED</span>
        </div>
      </div>
    </section>
  );
};
