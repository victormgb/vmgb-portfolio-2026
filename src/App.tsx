import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechBentoMatrix } from './components/TechBentoMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LiveDemoModal } from './components/LiveDemoModal';
import { CvModal } from './components/CvModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [activeDemoProjectId, setActiveDemoProjectId] = useState<string | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Global keydown listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0D14] text-[#DEE2EE] selection:bg-[#00F0FF]/25 selection:text-[#00F0FF] relative font-sans">
      {/* Subtle top atmospheric radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-radial from-cyan-500/5 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <Navbar
        onOpenCv={() => setIsCvOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onSelectProject={(projectId) => setActiveDemoProjectId(projectId)}
          lang={lang}
        />

        {/* Section 01: Resumen Ejecutivo / Executive Summary */}
        <ExecutiveSummary lang={lang} />

        {/* Section 02: Casos de Estudio de Producción / Projects Showcase */}
        <ProjectsShowcase
          onOpenDemo={(projectId) => setActiveDemoProjectId(projectId)}
          lang={lang}
        />

        {/* Section 03: Stack & Capacidades Técnicas / Tech Bento Matrix */}
        <TechBentoMatrix lang={lang} />

        {/* Section 04: Trayectoria de Liderazgo / Professional Experience */}
        <ExperienceTimeline lang={lang} />

        {/* Section 05: Formación Académica / Education */}
        <EducationSection lang={lang} />

        {/* Section 06: Iniciar Conversación Técnica / Contact */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LiveDemoModal
        projectId={activeDemoProjectId}
        onClose={() => setActiveDemoProjectId(null)}
        lang={lang}
      />

      {isCvOpen && (
        <CvModal
          onClose={() => setIsCvOpen(false)}
          lang={lang}
        />
      )}

      <CommandPaletteModal
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenCv={() => setIsCvOpen(true)}
        onOpenDemo={(id) => setActiveDemoProjectId(id)}
        onSwitchLang={() => setLang(lang === 'es' ? 'en' : 'es')}
        lang={lang}
      />
    </div>
  );
}
