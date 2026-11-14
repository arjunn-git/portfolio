import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="telemetry-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
              <span>08 // CAREER & ACADEMIA</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight">
              JOURNEY & CREDENTIALS.
            </h2>
          </div>
          <p className="text-steelBlue max-w-md text-sm sm:text-base font-light">
            Genuine employment history, university education in AI/ML, and verified certifications in enterprise full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-slateNavy border border-steelBlue/20 flex items-center justify-center text-electricBlue">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-xl text-iceWhite">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-8 border border-steelBlue/20 hover:border-electricBlue/40 transition-all relative overflow-hidden group shadow-electric-card"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-electricBlue font-semibold uppercase tracking-wider">
                      {exp.company}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-steelBlue">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-2xl text-iceWhite mb-4 group-hover:text-electricBlue transition-colors">
                    {exp.role}
                  </h4>

                  <div className="space-y-3 pt-4 border-t border-slateNavy">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-mutedGrey font-medium">
                      KEY RESPONSIBILITIES:
                    </div>
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-steelBlue leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electricBlue shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-slateNavy border border-steelBlue/20 flex items-center justify-center text-electricBlue">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-xl text-iceWhite">
                  Higher Education
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-6 border border-steelBlue/15 hover:border-steelBlue/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-electricBlue font-semibold">
                        {edu.period}
                      </span>
                      {edu.specialization && (
                        <span className="font-mono text-[10px] text-iceWhite px-2 py-0.5 rounded bg-slateNavy border border-steelBlue/20">
                          {edu.specialization}
                        </span>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-lg text-iceWhite mb-1">
                      {edu.degree}
                    </h4>
                    <p className="font-mono text-xs text-steelBlue mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-mutedGrey leading-relaxed font-light">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-slateNavy border border-steelBlue/20 flex items-center justify-center text-electricBlue">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-xl text-iceWhite">
                  Technical Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slateNavy/40 border border-steelBlue/15 flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold text-sm text-iceWhite">
                        {cert.title}
                      </span>
                      <span className="font-mono text-[11px] text-electricBlue font-bold">
                        {cert.issuer}
                      </span>
                    </div>
                    <p className="text-xs text-mutedGrey font-light">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
