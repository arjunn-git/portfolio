import React from 'react';
import { ShieldCheck, Code, GitPullRequest, Search, FileCode, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

export const Trust: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-slateNavy/40 relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="telemetry-tag justify-center mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
            <span>CONFIDENCE & COLLABORATION STANDARDS</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-iceWhite tracking-tight mb-4">
            BUILT ON VERIFIED CODE & PRODUCTION INTEGRITY.
          </h2>
          <p className="text-steelBlue text-sm leading-relaxed font-light">
            I prioritize genuine technical competence, verifiable repositories, and authentic deliverables over synthetic marketing badges or fabricated statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-xl border border-steelBlue/15">
            <div className="w-10 h-10 rounded-lg bg-midnight border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-iceWhite text-base mb-2">
              Publicly Verifiable Codebase
            </h3>
            <p className="text-xs text-mutedGrey leading-relaxed">
              Every major personal project is published on GitHub with complete commit histories, README documentation, and clean architecture standards.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-steelBlue/15">
            <div className="w-10 h-10 rounded-lg bg-midnight border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-iceWhite text-base mb-2">
              Production-Grade Engineering
            </h3>
            <p className="text-xs text-mutedGrey leading-relaxed">
              Real deployments on Vercel and Cloudflare, optimized for high Core Web Vitals, accessible semantic HTML, and zero cumulative layout shifts.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-steelBlue/15">
            <div className="w-10 h-10 rounded-lg bg-midnight border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
              <GitPullRequest className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-iceWhite text-base mb-2">
              Industry Experience
            </h3>
            <p className="text-xs text-mutedGrey leading-relaxed">
              Currently engineering web solutions at Adaan Digital Solutions, converting Figma designs to responsive code and maintaining live production portals.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-steelBlue/15">
            <div className="w-10 h-10 rounded-lg bg-midnight border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-iceWhite text-base mb-2">
              Quality Assurance Discipline
            </h3>
            <p className="text-xs text-mutedGrey leading-relaxed">
              Creator of Real-Time Web QA tool, bringing an automated eye for broken links, responsive layout breaks, and cross-browser quirks.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-steelBlue/15">
            <div className="w-10 h-10 rounded-lg bg-midnight border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
              <FileCode className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-iceWhite text-base mb-2">
              Clean Handover & Ownership
            </h3>
            <p className="text-xs text-mutedGrey leading-relaxed">
              Full source code ownership, transparent documentation, environment setup guides, and repository rights transferred upon project completion.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-steelBlue/15">
            <div className="w-10 h-10 rounded-lg bg-midnight border border-steelBlue/20 flex items-center justify-center text-electricBlue mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-iceWhite text-base mb-2">
              Clear Communication
            </h3>
            <p className="text-xs text-mutedGrey leading-relaxed">
              Daily or weekly sprint updates, asynchronous demo recordings, and active availability for freelance client inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
