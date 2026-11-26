import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import BentoHero from './components/BentoHero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CredentialsSection from './components/CredentialsSection';
import WhatIBuild from './components/WhatIBuild';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ResumeModal = lazy(() => import('./components/ResumeModal'));

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040e16] text-slate-100 flex flex-col font-sans selection:bg-[#26eac1] selection:text-[#040e16] relative max-w-full overflow-x-clip">
      <Navbar />
      <main className="flex-grow min-w-0 w-full">
        <BentoHero />
        <About onPreviewResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Projects />
        <CredentialsSection />
        <WhatIBuild onPreviewResume={() => setIsResumeOpen(true)} />
        <Contact onPreviewResume={() => setIsResumeOpen(true)} />
      </main>
      <Footer />
      {isResumeOpen && (
        <Suspense fallback={null}>
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
