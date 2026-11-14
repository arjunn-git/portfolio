import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Compass, Code2 } from 'lucide-react';
import { Project } from '../../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-midnight/90 backdrop-blur-xl animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slateNavy-dark border border-steelBlue/25 rounded-2xl p-6 sm:p-10 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slateNavy border border-steelBlue/20 text-iceWhite hover:text-electricBlue hover:border-electricBlue transition-colors"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Telemetry */}
        <div className="telemetry-tag mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
          <span>PROJECT {project.number} // DETAILED CASE STUDY</span>
        </div>

        <h3 id="case-study-title" className="font-display font-bold text-3xl sm:text-4xl text-iceWhite mb-2">
          {project.name}
        </h3>
        <p className="font-mono text-xs text-electricBlue uppercase tracking-wider mb-6">
          {project.category} · {project.tagline}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pb-8 mb-8 border-b border-slateNavy">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-electricBlue hover:bg-electricBlue-hover shadow-electric-glow transition-all"
          >
            <span>Live Production Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {project.githubVerified && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono text-iceWhite bg-slateNavy hover:bg-slateNavy-light border border-steelBlue/20 hover:border-electricBlue transition-all"
            >
              <Github className="w-4 h-4 text-electricBlue" />
              <span>Verified GitHub Repo</span>
              <ExternalLink className="w-3 h-3 text-mutedGrey" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono text-mutedGrey bg-slateNavy/40 border border-steelBlue/10 cursor-not-allowed">
              <Github className="w-4 h-4 text-mutedGrey" />
              <span>Repository Link Coming Soon</span>
            </span>
          )}
        </div>

        {/* Body Content */}
        <div className="space-y-8 text-sm">
          {/* Objective */}
          <div>
            <div className="flex items-center gap-2 text-iceWhite font-display font-semibold text-base mb-2">
              <Compass className="w-4 h-4 text-electricBlue" />
              <span>Project Objective</span>
            </div>
            <p className="text-steelBlue leading-relaxed font-light pl-6">
              {project.objective}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <div className="flex items-center gap-2 text-iceWhite font-display font-semibold text-base mb-3">
              <Layers className="w-4 h-4 text-electricBlue" />
              <span>Key Implemented Features</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slateNavy/40 border border-steelBlue/10">
                  <CheckCircle2 className="w-4 h-4 text-electricBlue shrink-0 mt-0.5" />
                  <span className="text-steelBlue text-xs leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          <div>
            <div className="flex items-center gap-2 text-iceWhite font-display font-semibold text-base mb-3">
              <Code2 className="w-4 h-4 text-electricBlue" />
              <span>My Architectural & Engineering Contribution</span>
            </div>
            <ul className="space-y-2.5 pl-6">
              {project.contribution.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-steelBlue text-xs leading-relaxed">
                  <span className="text-electricBlue font-mono font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Badges */}
          <div>
            <div className="text-iceWhite font-display font-semibold text-base mb-3">
              Technology Stack Used
            </div>
            <div className="flex flex-wrap gap-2 pl-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-midnight border border-steelBlue/20 font-mono text-xs text-iceWhite"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
