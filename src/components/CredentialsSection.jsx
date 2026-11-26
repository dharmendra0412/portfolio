import React, { useState, useEffect } from 'react';
import {
  Eye,
  X,
  Download,
  CheckCircle2,
  FileText,
  ExternalLink
} from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

export default function CredentialsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="experience" className="py-24 border-t border-white/[0.07] bg-[#040e16]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#34e8be] font-semibold">
              Verified Experience & Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications & <span className="text-[#34e8be]">Honors</span>
            </h2>
            <p className="text-[#95aab0] text-sm sm:text-base">
              Official competition awards, IIT trainings, YC-backed cohorts, and authenticated technical credentials.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09181c] border border-[#26eac1]/35 hover:border-[#26eac1] text-[#3defc7] text-xs font-semibold transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3defc7]" />
              <span>5 Verified Credentials • LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => {
            const hasImage = Boolean(cert.image);
            const isHackathonWinner = cert.badge.includes('1st Place');

            return (
              <div
                key={idx}
                onClick={() => hasImage && setSelectedCert(cert)}
                className={`p-5 rounded-2xl teal-card flex flex-col justify-between space-y-4 transition-all ${
                  hasImage ? 'cursor-pointer' : ''
                } ${isHackathonWinner ? 'border-[#26eac1]/45 shadow-[0_12px_36px_rgba(38,234,193,0.08)]' : ''}`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                        isHackathonWinner
                          ? 'bg-[#0b332d] text-[#3defc7] border-[#26eac1]/40 font-bold'
                          : 'bg-[#051115] text-slate-300 border-white/[0.08]'
                      }`}
                    >
                      {cert.badge}
                    </span>

                    {hasImage && (
                      <span className="text-[11px] font-mono flex items-center gap-1 text-[#34e8be]">
                        <Eye className="w-3.5 h-3.5" /> View
                      </span>
                    )}
                  </div>

                  {hasImage && (
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#030a0e] border border-[#26eac1]/20 group">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[11px] font-mono text-white/90 flex items-center gap-1">
                          <Eye className="w-3 h-3 text-[#3defc7]" /> Full Preview
                        </span>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-[#34e8be] mt-1">{cert.issuer}</p>
                  </div>

                  <p className="text-[#95aab0] text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#95aab0]">
                  <span>{cert.period}</span>
                  <span className="text-[#3defc7] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setSelectedCert(null)} />

          <div className="relative w-full max-w-4xl bg-[#051116] border border-[#26eac1]/40 rounded-2xl overflow-hidden z-10 flex flex-col shadow-2xl">
            <div className="p-4 border-b border-white/[0.08] flex items-center justify-between bg-[#07181d]">
              <div>
                <h3 className="text-base font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs font-mono text-[#34e8be]">{selectedCert.issuer}</p>
              </div>

              <div className="flex items-center gap-2">
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    download="Dharmendra_Kumar_Certificate.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#26eac1]/15 hover:bg-[#26eac1]/25 text-[#3defc7] border border-[#26eac1]/35 text-xs font-mono transition-colors"
                    title="Download Official PDF"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                )}
                <a
                  href={selectedCert.image}
                  download="Dharmendra_Kumar_Certificate.jpg"
                  className="p-2 rounded-full bg-white/[0.06] text-slate-300 hover:text-white transition-colors"
                  title="Download Image"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 bg-black/70 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[68vh] w-auto rounded-xl object-contain shadow-2xl border border-white/[0.1]"
              />
            </div>

            <div className="p-3 px-6 border-t border-white/[0.08] bg-[#051116] flex items-center justify-between text-xs text-[#95aab0] font-mono">
              <span>Presented to Dharmendra Kumar</span>
              <span className="text-[#3defc7] flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Authenticated Credential
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
