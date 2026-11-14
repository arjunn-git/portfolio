import React from 'react';
import { ExternalLink, Github, FileText, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <article className="group relative rounded-2xl bg-gradient-to-b from-slateNavy/80 to-midnight p-6 sm:p-8 border border-steelBlue/20 hover:border-electricBlue/50 transition-all duration-300 shadow-electric-card flex flex-col justify-between overflow-hidden">
      {/* Ambient hover light */}
      <div className="absolute -top-24 -right-24 w-52 h-52 bg-electricBlue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-electricBlue/20 transition-all duration-500" />

      <div>
        {/* Card Header Telemetry */}
        <div className="flex items-center justify-between mb-4">
          <div className="font-mono text-xs text-electricBlue tracking-wider">
            PROJECT [ {project.number} ]
          </div>
          <span className="font-mono text-[11px] text-steelBlue px-2.5 py-0.5 rounded-full bg-slateNavy border border-steelBlue/15">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-iceWhite mb-3 group-hover:text-electricBlue transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-steelBlue text-sm leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        {/* Browser Mockup Visual Preview */}
        <div className="relative rounded-xl overflow-hidden bg-midnight border border-steelBlue/20 mb-6 group/mockup">
          {/* Simulated Browser Chrome bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-slateNavy/70 border-b border-steelBlue/15 font-mono text-[10px] text-steelBlue">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/70" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <span className="w-2 h-2 rounded-full bg-green-500/70" />
            </div>
            <span className="text-mutedGrey truncate max-w-[200px]">{project.liveUrl.replace('https://', '')}</span>
            <span className="text-electricBlue font-bold">HTTPS</span>
          </div>

          {/* Styled Digital Showcase Viewport */}
          <div className="relative h-44 sm:h-52 bg-gradient-to-br from-slateNavy/90 via-midnight to-slateNavy flex flex-col justify-center items-center p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-electricBlue block mb-1">
                {project.tagline}
              </span>
              <h4 className="font-display font-bold text-lg sm:text-xl text-iceWhite">
                {project.name}
              </h4>
            </div>

            {/* Hover overlay for instant live link */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-midnight/70 backdrop-blur-sm opacity-0 group-hover/mockup:opacity-100 flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold tracking-wider transition-opacity duration-200"
            >
              <span>LAUNCH LIVE DEMO</span>
              <ExternalLink className="w-4 h-4 text-electricBlue" />
            </a>
          </div>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-slateNavy/70 border border-steelBlue/15 text-[11px] font-mono text-steelBlue"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded bg-slateNavy/30 text-[11px] font-mono text-mutedGrey">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Action Buttons */}
      <div className="pt-5 border-t border-slateNavy/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {/* Live Preview Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-electricBlue hover:bg-electricBlue-hover text-white shadow-electric-glow transition-all"
          >
            <span>Live Preview</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Verified GitHub Repository Button */}
          {project.githubVerified && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono text-iceWhite bg-slateNavy hover:bg-slateNavy-light border border-steelBlue/20 hover:border-electricBlue transition-all"
            >
              <Github className="w-3.5 h-3.5 text-electricBlue" />
              <span>GitHub</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-mono text-mutedGrey bg-slateNavy/30 border border-steelBlue/10 cursor-not-allowed"
              title="No public repository found"
            >
              <Github className="w-3 h-3 text-mutedGrey" />
              <span>Repo Coming Soon</span>
            </span>
          )}
        </div>

        {/* View Case Study Button */}
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-steelBlue hover:text-iceWhite transition-colors ml-auto"
        >
          <FileText className="w-3.5 h-3.5 text-electricBlue" />
          <span>Case Study</span>
        </button>
      </div>
    </article>
  );
};
