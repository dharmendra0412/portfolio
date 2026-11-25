import React from 'react';
import { ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { Github, Linkedin, DKLogo } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#030b10] py-14 text-[#95aab0]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <DKLogo className="w-8 h-6" />
            <div>
              <span className="font-bold text-white text-sm">
                Dharmendra <span className="text-[#34e8be]">Kumar</span>
              </span>
              <p className="text-xs text-[#95aab0]">
                Software Developer • B.Tech CSE (2024–28) at JB Institute of Technology
              </p>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#07181d] border border-white/[0.08] text-[#3defc7] hover:border-[#26eac1]/45 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#07181d] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#26eac1]/45 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#07181d] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#26eac1]/45 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-[#07181d] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#26eac1]/45 transition-colors"
              title="Send an Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#07181d] border border-white/[0.08] text-slate-300 hover:text-[#3defc7] hover:border-[#26eac1]/45 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[#95aab0] gap-4">
          <p>© {new Date().getFullYear()} Dharmendra Kumar. Available for engineering contracts & roles.</p>
          <p className="font-mono text-[#95aab0]">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
