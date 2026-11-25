import React from 'react';
import {
  Layout,
  BrainCircuit,
  Server,
  Rocket,
  ArrowRight,
  Check,
  Briefcase,
  FileText,
  Clock
} from 'lucide-react';
import { servicesOffered, engagementWorkflow } from '../data/portfolioData';

export default function WhatIBuild({ onPreviewResume }) {
  const iconMap = {
    Layout,
    BrainCircuit,
    Server,
    Rocket
  };

  const handleDiscussService = (serviceTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('selectHiringIntent', {
          detail: {
            intent: 'client',
            subject: `Project Inquiry: ${serviceTitle}`,
            message: `Hi Dharmendra, we want to discuss "${serviceTitle}". Here is our scope and target timeline:`
          }
        })
      );
    }
  };

  const handleRecruiterTrack = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('selectHiringIntent', {
          detail: {
            intent: 'company',
            subject: 'Software / AI Engineering Role or Internship Inquiry',
            message: 'Hi Dharmendra, our engineering team would like to discuss a Software Developer / AI-CV role or internship opportunity with you.'
          }
        })
      );
    }
  };

  return (
    <section id="services" className="py-24 border-t border-white/[0.07] bg-[#040e16]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Dual-Audience Fast-Track Banner (Hiring Companies vs Startup Clients) */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#09292b]/80 via-[#071c20]/90 to-[#061519]/90 border border-[#26eac1]/35 mb-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#3defc7] font-bold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>For Engineering Teams & Tech Recruiters</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Hiring for SWE Intern, Full-Stack, or AI Engineer roles?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ready to join immediately (Remote or On-Site). Experienced in React 18, Node.js, FastAPI, MongoDB/MySQL, RAG agents & DSA.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onPreviewResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#061419] hover:bg-[#0d282c] border border-white/15 text-slate-100 text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#3defc7]" />
              <span>Preview Resume</span>
            </button>
            <button
              type="button"
              onClick={handleRecruiterTrack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] hover:brightness-105 text-[#031919] text-xs font-bold shadow-[0_6px_22px_rgba(38,234,193,0.28)] transition-all"
            >
              <span>Schedule Interview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Section Header: Client Deliverables */}
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#34e8be] font-semibold">
            Freelance & Contract Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Ship <span className="text-[#34e8be]">For Clients & Founders</span>
          </h2>
          <p className="text-[#95aab0] text-sm sm:text-base leading-relaxed">
            Fixed-scope sprints with live staging URLs, clean architecture, and 100% source code ownership on GitHub.
          </p>
        </div>

        {/* 3-Step Client Execution Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {engagementWorkflow.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-[#061519]/90 border border-white/[0.08] space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#3defc7] font-bold">STEP {item.step}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0b332d] text-[#3defc7] border border-[#26eac1]/30">
                  {item.duration}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-xs text-[#95aab0] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* 4 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesOffered.map((service) => {
            const Icon = iconMap[service.icon] || Layout;

            return (
              <div
                key={service.id}
                className="p-7 rounded-2xl teal-card flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#26eac1]/10 border border-[#26eac1]/25 flex items-center justify-center text-[#34e8be] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#0b332d] text-[#3defc7] border border-[#26eac1]/30 font-semibold">
                      <Clock className="w-3 h-3" />
                      {service.timeline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#34e8be] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-[#34e8be] mt-1 font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-3 text-xs text-slate-300 border-t border-white/[0.07]">
                    <span className="text-[11px] font-mono text-[#95aab0] uppercase tracking-wider block font-semibold">
                      Deliverables Included:
                    </span>
                    {service.whatYouGet.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#34e8be] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#051115] border border-white/[0.08] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleDiscussService(service.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#34e8be] hover:text-white transition-colors"
                  >
                    <span>Book this Sprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-[#95aab0]">
                    Ideal for: {service.idealFor}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
