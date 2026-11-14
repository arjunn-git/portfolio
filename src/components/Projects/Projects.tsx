import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from '../CaseStudies/CaseStudyModal';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="telemetry-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
              <span>03 // FEATURED WORK</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight">
              PROVEN DEPLOYMENTS.
            </h2>
          </div>
          <p className="text-steelBlue max-w-md text-sm sm:text-base font-light">
            Five real, production-verified projects spanning corporate portals, automated QA SaaS engines, dropshipping e-commerce, and real-time utilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Case Study Modal */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
