import React, { useState } from 'react';
import {
  Code2,
  Brain,
  Globe,
  ShieldAlert,
  Terminal,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const iconComponents = {
    Code2,
    Brain,
    Globe,
    ShieldAlert,
    Terminal,
    Cpu,
  };

  const categories = ['All', ...skillsData.categories.map(c => c.name)];

  const displayedCategories = activeCategory === 'All'
    ? skillsData.categories
    : skillsData.categories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 border-t border-white/[0.07] bg-[#040e16]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#34e8be] font-semibold">
              Technical Capabilities & Hiring Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & <span className="text-[#34e8be]">Production Stack</span>
            </h2>
            <p className="text-[#95aab0] text-sm sm:text-base">
              Full-stack web frameworks, RAG & computer vision pipelines, relational/cloud databases, and CS fundamentals used in deployed builds.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${activeCategory === cat
                  ? 'bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] text-[#031919] font-bold shadow-[0_0_16px_rgba(38,234,193,0.25)]'
                  : 'bg-[#08171c] text-[#95aab0] hover:text-white border border-white/[0.08]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, idx) => {
            const Icon = iconComponents[cat.icon] || Code2;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl teal-card space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#26eac1]/10 border border-[#26eac1]/25 flex items-center justify-center text-[#34e8be] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{cat.name}</h3>
                      <p className="text-xs font-mono text-[#95aab0]">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#051115] border border-white/[0.08] text-xs text-slate-200"
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-[10px] font-mono text-[#34e8be] bg-[#0b332d] px-2 py-0.5 rounded-full">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
