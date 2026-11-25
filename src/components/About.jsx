import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  Zap,
  MessageSquare,
  MapPin,
  Trophy,
  Globe2,
  Award,
  FileText,
  Download,
  Briefcase,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function About({ onPreviewResume }) {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-white/[0.07] relative bg-[#040e16]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Top Verified Hiring Strip — Scannable in 5 seconds for recruiters & founders */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {personalInfo.proofMetrics.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-2xl teal-card flex flex-col justify-between space-y-1.5"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-[#3defc7] tracking-tight">
                {item.value}
              </span>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">{item.label}</div>
                <div className="text-[11px] font-mono text-[#95aab0] mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header + Recruiter Quick Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#34e8be] font-semibold">
              Background & Engineering Fit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Teams & Clients <span className="text-[#34e8be]">Hire Me</span>
            </h2>
            <p className="text-[#95aab0] text-sm sm:text-base leading-relaxed">
              CS undergraduate shipping deployed full-stack apps, autonomous RAG agents, and 60 FPS client-side computer vision.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onPreviewResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] hover:brightness-105 text-[#031919] text-xs font-bold shadow-[0_6px_22px_rgba(38,234,193,0.28)] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Preview Resume</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Dharmendra_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#08171c] hover:bg-[#0e272d] border border-[#26eac1]/35 text-slate-100 text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#3defc7]" />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#08171c] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
              title="GitHub (14+ Repos)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#08171c] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Bio, Education & Dual Role Readiness */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl teal-card space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#34e8be] font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>JB INSTITUTE OF TECHNOLOGY, DEHRADUN</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0b332d] border border-[#26eac1]/35 text-[11px] font-mono text-[#3defc7] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3defc7]" />
                  Immediate Availability
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                B.Tech in Computer Science & Engineering (2024–2028)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Target Hiring Roles for Tech Recruiters */}
              <div className="pt-3 border-t border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#95aab0] font-semibold block">
                  Actively Open To Roles In:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.rolesTargeted.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#051115] border border-[#26eac1]/25 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#3defc7]" />
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs text-[#95aab0] font-mono">
                <span className="flex items-center gap-1.5 text-[#34e8be]">
                  <MapPin className="w-3.5 h-3.5" /> Dehradun, India • Remote / Hybrid Worldwide
                </span>
                <a
                  href="#contact"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent('selectHiringIntent', {
                        detail: {
                          intent: 'company',
                          subject: 'Engineering Role / Internship Discussion',
                          message: 'Hi Dharmendra, we saw your portfolio and would love to discuss an engineering role or interview with our team.'
                        }
                      })
                    );
                  }}
                  className="text-[#3defc7] hover:underline flex items-center gap-1 font-semibold"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Schedule Interview</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Verified Competitive Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl teal-card space-y-1.5">
                <Trophy className="w-5 h-5 text-[#34e8be]" />
                <div className="text-sm font-bold text-white">1st Place Winner</div>
                <div className="text-xs text-[#95aab0]">Uttarakhand SportsTech Hackathon '25</div>
              </div>
              <div className="p-4 rounded-2xl teal-card space-y-1.5">
                <Globe2 className="w-5 h-5 text-[#34e8be]" />
                <div className="text-sm font-bold text-white">Rank #818</div>
                <div className="text-xs text-[#95aab0]">Top 6.3% of 12,885 across 48 countries</div>
              </div>
              <div className="p-4 rounded-2xl teal-card space-y-1.5">
                <Award className="w-5 h-5 text-[#34e8be]" />
                <div className="text-sm font-bold text-white">ECSoC Fellow</div>
                <div className="text-xs text-[#95aab0]">Elite Coders Summer of Code '26</div>
              </div>
            </div>
          </div>

          {/* Right: Concrete Reasons Engineering Managers & Clients Choose Me */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#95aab0] font-semibold block">
              Engineering Value Delivered
            </span>

            <div className="p-5 rounded-2xl teal-card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#26eac1]/10 border border-[#26eac1]/25 flex items-center justify-center text-[#34e8be] shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Zero-Hype, Production Execution ($0 GPU CV)</h4>
                <p className="text-xs sm:text-sm text-[#95aab0] mt-1 leading-relaxed">
                  Whether building browser-native 60 FPS MediaPipe Pose tracking or Socket.IO + MongoDB SaaS platforms, I optimize for low latency, minimal infra cost, and reliable uptime.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl teal-card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#26eac1]/10 border border-[#26eac1]/25 flex items-center justify-center text-[#34e8be] shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Ships End-to-End Fast Under Tight Deadlines</h4>
                <p className="text-xs sm:text-sm text-[#95aab0] mt-1 leading-relaxed">
                  Built an end-to-end AI Agent in 24 hours for HackerRank Orchestrate (#818/12,885) and shipped state-winning competition code. I communicate daily with live staging URLs and respond within 4 hours.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl teal-card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#26eac1]/10 border border-[#26eac1]/25 flex items-center justify-center text-[#34e8be] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Strong CS Core & Clean IP Ownership</h4>
                <p className="text-xs sm:text-sm text-[#95aab0] mt-1 leading-relaxed">
                  Grounded in DSA, OOP, DBMS, JWT/Bcrypt auth, and modular API architecture. Clients and teams receive clean, documented GitHub code with 100% ownership from commit one.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
