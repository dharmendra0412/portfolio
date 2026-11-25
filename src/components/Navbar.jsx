import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Download,
  Home,
  User,
  Code2,
  Folder,
  Briefcase,
  Mail,
  MessageSquare
} from 'lucide-react';
import { DKLogo } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', name: 'Home', href: '#home', icon: Home },
    { id: 'about', name: 'About', href: '#about', icon: User },
    { id: 'skills', name: 'Skills', href: '#skills', icon: Code2 },
    { id: 'projects', name: 'Projects', href: '#projects', icon: Folder },
    { id: 'experience', name: 'Experience', href: '#experience', icon: Briefcase },
    { id: 'contact', name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-10">
      <div
        className={`max-w-[1260px] mx-auto rounded-full transition-all duration-300 px-3.5 sm:px-5 py-1.5 sm:py-2 ${
          scrolled
            ? 'bg-[#051017]/90 backdrop-blur-xl border border-[#26eac1]/20 shadow-[0_10px_35px_rgba(0,0,0,0.65)]'
            : 'bg-[#051017]/75 backdrop-blur-md border border-[#1d4347]/70 shadow-[0_6px_24px_rgba(0,0,0,0.45)]'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Left: DK Monogram + Name */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <DKLogo className="w-8 h-6 group-hover:scale-105 transition-transform" />
            <span className="font-bold text-sm sm:text-[15px] text-white tracking-tight whitespace-nowrap">
              Dharmendra <span className="text-[#34e8be] font-semibold">Kumar</span>
            </span>
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                    isActive
                      ? 'bg-[#0b332d] text-[#3defc7] border border-[#24695c]/65 shadow-[0_0_16px_rgba(38,234,193,0.12)]'
                      : 'text-slate-300/90 hover:text-white hover:bg-white/[0.05] border border-transparent'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-[#3defc7]' : 'text-slate-400'
                    }`}
                    fill={isActive && link.id === 'home' ? 'currentColor' : 'none'}
                  />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Download Resume CTA */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={personalInfo.resumeUrl}
              download="Dharmendra_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-[1.5px] border-[#2ae2bc]/80 bg-[#05181b]/90 hover:bg-[#092b2c] text-white text-xs sm:text-[13px] font-medium transition-all shadow-[0_0_14px_rgba(42,226,188,0.14)] hover:shadow-[0_0_20px_rgba(42,226,188,0.28)]"
            >
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5 text-[#3defc7]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-1.5 shrink-0">
            <a
              href={personalInfo.resumeUrl}
              download="Dharmendra_Kumar_Resume.pdf"
              aria-label="Download Resume"
              className="sm:hidden p-1.5 rounded-full border border-[#2ae2bc]/70 bg-[#05181b]/90 text-[#3defc7] flex items-center justify-center"
            >
              <Download className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden max-w-[1260px] mx-auto mt-2 rounded-2xl bg-[#051017]/95 backdrop-blur-xl border border-[#26eac1]/20 p-4 space-y-1.5 shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#0b332d] text-[#3defc7] border border-[#24695c]/50'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between px-2">
            <a
              href={personalInfo.resumeUrl}
              download="Dharmendra_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-[#3defc7] font-medium"
            >
              <Download className="w-3.5 h-3.5 text-[#3defc7]" /> Download Resume
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#3defc7] font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
