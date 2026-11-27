import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { faqData } from '../data/portfolioData';

export default function EngineeringFAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24 border-t border-white/[0.07] bg-[#040e16]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#34e8be] font-semibold">
              Architecture &amp; Hiring Notes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical <span className="text-[#34e8be]">Deep Dive &amp; FAQ</span>
            </h2>
            <p className="text-[#95aab0] text-sm sm:text-base leading-relaxed">
              Clear engineering answers on stack architecture, cost-free browser computer vision, sprint delivery, and role readiness.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#34e8be] hover:text-white transition-colors shrink-0"
          >
            <span>Have a specific technical question? Ask directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-Column Scannable Architecture & FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqData.map((item) => (
            <article
              key={item.question}
              className="p-6 rounded-2xl teal-card space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white leading-snug flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#3defc7] shrink-0 mt-1" />
                  <span>{item.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#95aab0] leading-relaxed pl-6">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
