import React from 'react';
import { PROCESS_STEPS } from '../../data/process';
import { CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="telemetry-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
              <span>05 // WORKFLOW PIPELINE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight">
              FROM IDEA TO LAUNCH.
            </h2>
          </div>
          <p className="text-steelBlue max-w-md text-sm sm:text-base font-light">
            A battle-tested 6-stage engineering and design lifecycle ensuring transparency, rapid momentum, and zero delivery friction.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-8 border border-steelBlue/15 hover:border-electricBlue/40 transition-all duration-300 relative group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-bold text-electricBlue group-hover:text-iceWhite transition-colors">
                  {step.number}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-mutedGrey uppercase px-2.5 py-1 rounded bg-slateNavy/80 border border-steelBlue/15">
                  STAGE // {step.number}
                </span>
              </div>

              {/* Step Title & Subtitle */}
              <h3 className="font-display font-bold text-xl text-iceWhite mb-1">
                {step.title}
              </h3>
              <p className="font-mono text-xs text-steelBlue mb-4">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-mutedGrey text-xs leading-relaxed mb-6 font-light">
                {step.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 pt-4 border-t border-slateNavy/80">
                <div className="font-mono text-[10px] uppercase text-steelBlue font-semibold mb-2">
                  KEY DELIVERABLES:
                </div>
                {step.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-mutedGrey">
                    <CheckCircle2 className="w-3.5 h-3.5 text-electricBlue shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
