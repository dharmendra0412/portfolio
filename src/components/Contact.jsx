import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Briefcase,
  Rocket,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onPreviewResume }) {
  const [intent, setIntent] = useState('client'); // 'client' | 'company'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Freelance / Startup MVP Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMode, setSubmittedMode] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const clientTopics = [
    'Full-Stack Web App',
    'AI / MediaPipe CV Feature',
    'FastAPI / Node Backend',
    '1–2 Week Startup MVP'
  ];

  const companyTopics = [
    'SWE / Developer Intern',
    'Full-Stack Engineer Role',
    'AI / Computer Vision Role',
    'Technical Interview Invite'
  ];

  useEffect(() => {
    const handleHiringEvent = (e) => {
      if (e.detail) {
        const nextIntent = e.detail.intent === 'company' ? 'company' : 'client';
        setIntent(nextIntent);
        setSubmittedMode(null);
        setFormData((prev) => ({
          ...prev,
          subject: e.detail.subject || prev.subject,
          message: e.detail.message || prev.message
        }));
      }
    };
    window.addEventListener('selectHiringIntent', handleHiringEvent);
    return () => window.removeEventListener('selectHiringIntent', handleHiringEvent);
  }, []);

  const switchIntent = (nextIntent) => {
    setIntent(nextIntent);
    setSubmittedMode(null);
    setSubmitError(null);
    setFormData((prev) => ({
      ...prev,
      subject:
        nextIntent === 'company'
          ? 'Engineering Role / Internship Inquiry'
          : 'Freelance / Startup MVP Inquiry'
    }));
  };

  const applyTopicPreset = (topic) => {
    setFormData((prev) => ({
      ...prev,
      subject: `${intent === 'company' ? 'Hiring Inquiry' : 'Project Scope'}: ${topic}`,
      message:
        prev.message ||
        (intent === 'company'
          ? `Hi Dharmendra, our team is hiring for "${topic}". Let's connect on interview next steps.`
          : `Hi Dharmendra, I'd like to discuss "${topic}". Target timeline and core requirements:`)
    }));
  };

  const handleCopy = (text, fieldName) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleDirectSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in your name, email, and details before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          InquiryType: intent === 'company' ? 'Company / Recruiter' : 'Client / Startup Project',
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
          _subject: `[Portfolio ${intent === 'company' ? 'Hiring' : 'Client'}] ${formData.subject}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === 'true' || result.success === true || !result.message?.toLowerCase().includes('error'))) {
        confetti({ particleCount: 75, spread: 65, origin: { y: 0.65 } });
        setSubmittedMode('direct');
      } else {
        setSubmitError('Direct form endpoint returned an error. Please use WhatsApp or your Email app below.');
      }
    } catch {
      setSubmitError('Network request could not reach the form endpoint. Use WhatsApp or your Email app below for instant delivery.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailAppSubmit = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in your name, email, and message before opening your email client.');
      return;
    }

    const subject = formData.subject || `Inquiry from ${formData.name}`;
    const body = `Hi Dharmendra,\n\nInquiry Type: ${intent === 'company' ? 'Job / Internship' : 'Freelance Project'}\nName: ${formData.name}\nEmail: ${formData.email}\n\nDetails:\n${formData.message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmittedMode('emailApp');
  };

  const handleWhatsAppSend = () => {
    const text = `Hi Dharmendra, I'm ${formData.name || 'interested in working with you'} (${formData.email || 'via portfolio'}).\n\n*Type:* ${intent === 'company' ? 'Hiring / Interview' : 'Client Project'}\n*Topic:* ${formData.subject}\n*Details:* ${formData.message || 'Would love to connect about an opportunity.'}`;
    window.open(`https://wa.me/919045141614?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const topicChips = intent === 'company' ? companyTopics : clientTopics;

  return (
    <section id="contact" className="py-24 border-t border-white/[0.07] bg-[#040e16]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#34e8be] font-semibold">
              Hire For Full-Time, Internships & Freelance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Start a Conversation <span className="text-[#34e8be]">In 15 Seconds</span>
            </h2>
            <p className="text-[#95aab0] text-sm sm:text-base leading-relaxed">
              Hiring for your engineering team or scoping a custom web/AI product? Choose your track and reach me directly.
            </p>
          </div>

          <button
            type="button"
            onClick={onPreviewResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#08171c] hover:bg-[#0e272d] border border-[#26eac1]/35 text-slate-100 text-xs font-semibold self-start lg:self-auto transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#3defc7]" />
            <span>View / Download Resume (PDF)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 min-w-0 space-y-5">

            {/* WhatsApp Priority Card */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0b332d]/50 hover:bg-[#0b332d]/80 border border-[#26eac1]/35 flex flex-wrap items-center justify-between gap-3 group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#26eac1]/15 border border-[#26eac1]/30 flex items-center justify-center text-[#3defc7]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#3defc7] font-bold block">Fastest Reply</span>
                  <span className="text-sm font-bold text-white">Chat on WhatsApp</span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#3defc7] font-semibold group-hover:translate-x-1 transition-transform">
                +91-9045141614 →
              </span>
            </a>

            {/* Email Card */}
            <div className="p-5 rounded-2xl teal-card flex items-center justify-between gap-2">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#26eac1]/10 border border-[#26eac1]/25 flex items-center justify-center text-[#34e8be] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-[#95aab0] block">Direct Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-slate-200 hover:text-[#3defc7] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2 rounded-full text-[#95aab0] hover:text-white hover:bg-white/[0.06] transition-colors shrink-0"
                title="Copy email"
                aria-label="Copy email address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-[#3defc7]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl teal-card flex items-center justify-between gap-2">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#26eac1]/10 border border-[#26eac1]/25 flex items-center justify-center text-[#34e8be]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#95aab0] block">Phone & Call</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-slate-200 hover:text-[#3defc7] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2 rounded-full text-[#95aab0] hover:text-white hover:bg-white/[0.06] transition-colors shrink-0"
                title="Copy phone"
                aria-label="Copy phone number"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#3defc7]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Response Time & Availability */}
            <div className="p-4 rounded-2xl teal-card text-xs font-mono text-[#95aab0] space-y-2">
              <div className="flex items-center gap-2 text-[#3defc7] font-semibold">
                <Clock className="w-4 h-4" />
                <span>Response SLA: within 4 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#34e8be]" />
                <span>Dehradun, India (UTC+5:30) • Remote & On-Site Ready</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dual-Track Interactive Hiring & Scope Form */}
          <div className="lg:col-span-7 min-w-0">
            <div className="p-7 sm:p-8 rounded-2xl teal-card space-y-5">

              {/* Dual-Intent Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-full bg-[#040d12] border border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => switchIntent('client')}
                  className={`py-2 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    intent === 'client'
                      ? 'bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] text-[#031919] font-bold shadow'
                      : 'text-[#95aab0] hover:text-white'
                  }`}
                >
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Client / Project</span>
                </button>
                <button
                  type="button"
                  onClick={() => switchIntent('company')}
                  className={`py-2 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    intent === 'company'
                      ? 'bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] text-[#031919] font-bold shadow'
                      : 'text-[#95aab0] hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Company / Job</span>
                </button>
              </div>

              {submittedMode ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#26eac1]/15 border border-[#26eac1]/35 flex items-center justify-center text-[#3defc7] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">Inquiry Sent</h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Dharmendra will review your note and reply within 4 hours.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmittedMode(null)}
                      className="px-5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-xs text-white font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDirectSubmit} className="space-y-4">
                  {/* Quick Scope / Role Chips */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#95aab0] block">
                      Quick Select {intent === 'company' ? 'Role' : 'Project Type'}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {topicChips.map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => applyTopicPreset(chip)}
                          className="px-2.5 py-1 rounded-full bg-[#040d12] hover:bg-[#0b332d] border border-white/[0.1] hover:border-[#26eac1]/40 text-[11px] font-mono text-slate-300 hover:text-[#3defc7] transition-colors"
                        >
                          + {chip}
                        </button>
                      ))}
                    </div>
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-slate-300 block">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={intent === 'company' ? 'Recruiter / Hiring Manager Name' : 'Founder / Client Name'}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#040d12] border border-white/[0.1] focus:border-[#26eac1] focus:outline-none text-white placeholder-slate-500 text-xs sm:text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-slate-300 block">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#040d12] border border-white/[0.1] focus:border-[#26eac1] focus:outline-none text-white placeholder-slate-500 text-xs sm:text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300 block">
                      {intent === 'company' ? 'Company & Target Role' : 'Project Title / Scope'}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={
                        intent === 'company'
                          ? 'e.g., SWE Intern / Junior Full-Stack Developer'
                          : 'e.g., Custom SaaS Dashboard / MediaPipe Pose Feature'
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#040d12] border border-white/[0.1] focus:border-[#26eac1] focus:outline-none text-white placeholder-slate-500 text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-slate-300 block">
                      {intent === 'company' ? 'Role Details / Interview Availability *' : 'Project Requirements & Timeline *'}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        intent === 'company'
                          ? 'Share role details, tech stack, location/remote setup, and interview steps...'
                          : 'Tell me what you are building, desired launch date, and key features...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#040d12] border border-white/[0.1] focus:border-[#26eac1] focus:outline-none text-white placeholder-slate-500 text-xs sm:text-sm resize-none transition-colors"
                    />
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] hover:brightness-105 text-[#031919] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_6px_26px_rgba(38,234,193,0.3)] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{intent === 'company' ? 'Send Interview / Role Inquiry' : 'Send Project Brief'}</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleWhatsAppSend}
                        className="flex-1 py-2.5 px-3 rounded-full bg-[#040d12] hover:bg-[#0b332d]/60 text-[#3defc7] border border-[#26eac1]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#3defc7]" />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleEmailAppSubmit}
                        className="flex-1 py-2.5 px-3 rounded-full bg-[#040d12] hover:bg-white/[0.05] text-slate-300 border border-white/[0.1] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>Open Email App</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
