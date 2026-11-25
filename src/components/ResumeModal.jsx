import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Briefcase, Award, Code2, CheckCircle2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Dharmendra Kumar Resume Preview"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#051116] border border-[#26eac1]/40 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:px-6 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 bg-[#07181d]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#0b332d] text-[#3defc7] border border-[#26eac1]/35 font-semibold">
                ATS-Ready CV
              </span>
              <span className="text-xs font-mono text-[#95aab0]">Immediate / Remote & Hybrid</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1">
              {personalInfo.name} — Software Developer & AI/CV Engineer
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/[0.1] text-xs font-medium transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#3defc7]" />
              <span>Open Tab</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Dharmendra_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] hover:brightness-105 text-[#031919] text-xs font-bold transition-all shadow-[0_0_16px_rgba(38,234,193,0.25)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body: Recruiter Quick Highlights + Embedded PDF */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow overflow-hidden">
          {/* Quick Screening Column */}
          <div className="lg:col-span-4 p-5 border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-[#061419] space-y-4 overflow-y-auto">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#34e8be] font-semibold">
                6-Second Recruiter Summary
              </span>
              <h4 className="text-sm font-bold text-white mt-1">Target Engineering Roles</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {personalInfo.rolesTargeted.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-full bg-[#0b332d]/70 border border-[#26eac1]/30 text-[11px] font-mono text-[#6ff7d9]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-white/[0.07] text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[#3defc7] shrink-0 mt-0.5" />
                <span><strong>1st Place Winner</strong> — Uttarakhand SportsTech Hackathon 2025 (IIT Roorkee TIDES)</span>
              </div>
              <div className="flex items-start gap-2">
                <Code2 className="w-4 h-4 text-[#3defc7] shrink-0 mt-0.5" />
                <span><strong>Rank #818 / 12,885</strong> globally across 48 countries (HackerRank Orchestrate AI)</span>
              </div>
              <div className="flex items-start gap-2">
                <Briefcase className="w-4 h-4 text-[#3defc7] shrink-0 mt-0.5" />
                <span><strong>14+ Public Repos</strong> across React, Node/Express, FastAPI, MongoDB, MySQL & MediaPipe</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3defc7] shrink-0 mt-0.5" />
                <span>B.Tech CSE (2024–28), JB Institute of Technology — DSA, OOP, DBMS, Computer Networks</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.07]">
              <a
                href="#contact"
                onClick={() => {
                  onClose();
                  window.dispatchEvent(
                    new CustomEvent('selectHiringIntent', {
                      detail: {
                        intent: 'company',
                        subject: 'Interview / Internship Opportunity — Software & AI Engineering',
                        message: 'Hi Dharmendra, we reviewed your resume and portfolio and would like to schedule an introductory discussion regarding an engineering role.'
                      }
                    })
                  );
                }}
                className="w-full py-2.5 px-4 rounded-full bg-[#0b332d] hover:bg-[#114840] border border-[#26eac1]/45 text-[#3defc7] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Invite to Interview</span>
              </a>
            </div>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="lg:col-span-8 bg-[#02080c] min-h-[420px] lg:min-h-[600px]">
            <iframe
              src={`${personalInfo.resumeUrl}#view=FitH`}
              title="Dharmendra Kumar Resume PDF"
              className="w-full h-full min-h-[420px] lg:min-h-[600px] border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
