import React, { useState } from 'react';
import {
  Award,
  ArrowUpRight,
  Activity,
  Shield,
  Rocket,
  Building2,
  Globe,
  Store,
  FolderGit2,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'Full-Stack', 'AI & Vision', 'Systems & Client'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.filterGroup === selectedFilter);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'ai-form-coach':
        return Activity;
      case 'propflow':
        return Building2;
      case 'phish-guard-ai':
        return Shield;
      case 'nasa-mission-control':
        return Rocket;
      case 'bharat-teerth':
        return Globe;
      case 'ag-traders':
        return Store;
      default:
        return FolderGit2;
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-white/[0.07] bg-[#040e16]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#34e8be] font-semibold">
              Verified Proof of Work • Live Production Apps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-[#34e8be]">Live Projects</span>
            </h2>
            <p className="text-[#95aab0] text-sm sm:text-base max-w-2xl">
              Real-world SaaS platforms, 3D systems simulators, client websites, and AI engineering tools deployed live for interactive testing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] text-[#031919] font-bold shadow-[0_0_16px_rgba(38,234,193,0.25)]'
                    : 'bg-[#08171c] text-[#95aab0] hover:text-white border border-white/[0.08]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const IconComponent = getProjectIcon(project.id);
            const isWinner = project.id === 'ai-form-coach';

            return (
              <div
                key={project.id}
                className={`p-7 rounded-2xl teal-card transition-all flex flex-col justify-between group ${
                  isWinner ? 'border-[#26eac1]/45 shadow-[0_12px_36px_rgba(38,234,193,0.08)]' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#26eac1]/10 border border-[#26eac1]/25 flex items-center justify-center text-[#34e8be] shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-[#95aab0] block">{project.category}</span>
                        <span className="text-[11px] font-mono text-[#6ff7d9] font-semibold">{project.impactStat}</span>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                        isWinner
                          ? 'bg-[#0b332d] text-[#3defc7] border-[#26eac1]/45 font-bold'
                          : 'bg-[#051115] text-slate-300 border-white/[0.08]'
                      }`}
                    >
                      {isWinner && <Award className="w-3.5 h-3.5 text-[#3defc7]" />}
                      <span>{project.badge}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-white group-hover:text-[#34e8be] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#34e8be]" />
                    </h3>
                    <p className="text-xs font-mono text-[#34e8be]/90 mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.clientSolution || project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-[#051115] border border-white/[0.08] text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Bar: Architecture Breakdown + Live Demo Only */}
                <div className="pt-5 mt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#34e8be] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Architecture Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0b332d] hover:bg-[#124b42] border border-[#26eac1]/45 text-[#3defc7] text-xs font-semibold transition-colors shadow-[0_0_12px_rgba(38,234,193,0.12)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3defc7] animate-pulse" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
