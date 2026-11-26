import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, AlertCircle, Lightbulb, Download, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#051116] border border-[#26eac1]/35 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-start justify-between bg-[#07181d]">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#051115] text-slate-300 border border-white/[0.08]">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#0b332d] text-[#3defc7] border border-[#26eac1]/35 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#3defc7]" />
                  {project.badge}
                </span>
              )}
              {project.impactStat && (
                <span className="text-xs font-mono text-[#6ff7d9] font-semibold">
                  {project.impactStat}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white pt-1">{project.title}</h3>
            <p className="text-xs text-[#34e8be] font-mono">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Problem & Solution Breakdown */}
          {project.clientProblem && (
            <div className="p-4 rounded-xl bg-[#07161b] border border-white/[0.08] space-y-3">
              <div>
                <h5 className="text-xs font-mono uppercase text-slate-300 font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#34e8be]" />
                  <span>The Engineering Problem</span>
                </h5>
                <p className="text-[#95aab0] text-xs sm:text-sm mt-1 leading-relaxed">
                  {project.clientProblem}
                </p>
              </div>
              <div className="pt-2.5 border-t border-white/[0.06]">
                <h5 className="text-xs font-mono uppercase text-[#34e8be] font-bold flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>The Engineered Solution & Impact</span>
                </h5>
                <p className="text-slate-200 text-xs sm:text-sm mt-1 leading-relaxed">
                  {project.clientSolution}
                </p>
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#95aab0] mb-2 font-semibold">Technical Overview</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#95aab0] mb-3 font-semibold">Key Implementation Details</h4>
            <ul className="space-y-2">
              {project.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#34e8be] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#95aab0] mb-3 font-semibold">Core Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#07161b] border border-white/[0.06] text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3defc7]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#95aab0] mb-2 font-semibold">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#07161b] border border-white/[0.08] text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Hackathon Certificate Showcase */}
          {project.certificateImage && project.id === 'ai-form-coach' && (
            <div className="p-4 rounded-xl bg-[#0b332d]/40 border border-[#26eac1]/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#3defc7] font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Verified Hackathon Certificate (TIDES IIT Roorkee)</span>
                </span>
                <a
                  href={project.certificateImage}
                  download="Uttarakhand_SportsTech_Certificate.jpg"
                  className="text-xs font-mono text-[#3defc7] hover:text-white flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#26eac1]/25 max-h-48 bg-black">
                <picture>
                  <source srcSet={project.certificateImage.replace(/\.jpg$/i, '.webp')} type="image/webp" />
                  <img
                    src={project.certificateImage}
                    alt="Uttarakhand SportsTech Hackathon 2025 Certificate"
                    width="960"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#07181d] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[#95aab0] font-mono">Dharmendra Kumar • Case Study</span>
          <div className="flex flex-wrap items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0b332d] hover:bg-[#124b42] border border-[#26eac1]/45 text-[#3defc7] text-xs font-bold transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3defc7] animate-pulse" />
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] text-[#031919] text-xs font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
