import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, FileText, Send, Sparkles, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenCommand: () => void;
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, onOpenCommand, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'es' ? 'Sobre Mí' : 'About Me', href: '#sobre-mi' },
    { label: lang === 'es' ? 'Proyectos' : 'Projects', href: '#proyectos' },
    { label: lang === 'es' ? 'Habilidades' : 'Skills', href: '#habilidades' },
    { label: lang === 'es' ? 'Experiencia' : 'Experience', href: '#experiencia' },
    { label: lang === 'es' ? 'Educación' : 'Education', href: '#educacion' },
    { label: lang === 'es' ? 'Contacto' : 'Contact', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0A0D14]/90 backdrop-blur-md border-white/10 shadow-2xl py-3'
          : 'bg-[#0A0D14]/75 backdrop-blur-sm border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Wordmark & Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded bg-[#131924] border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs text-[#00F0FF] group-hover:border-cyan-400 group-hover:glow-cyan transition-all">
              &lt;VG /&gt;
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-[#00F0FF] transition-colors leading-tight">
                {PORTFOLIO_DATA.header.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 leading-tight">
                {PORTFOLIO_DATA.header.title}
              </span>
            </div>
          </a>

          {/* Availability Status Beacon (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#131924]/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-tight text-[11px]">
              {lang === 'es'
                ? 'Disponible para Roles Lead & Architect / Remoto'
                : 'Available for Architect & Senior Roles / Remote'}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-mono text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#00F0FF] transition-colors hover:underline underline-offset-4 decoration-cyan-500/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Rail */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommand}
              title="Command Palette (Cmd+K)"
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#131924] border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] text-slate-400 bg-white/5 px-1 py-0.5 rounded">⌘K</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#131924] border border-white/10 hover:border-slate-400 text-slate-300 hover:text-white text-xs font-mono transition-colors"
              title="Cambiar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span className="uppercase text-[11px] font-semibold">{lang}</span>
            </button>

            {/* Curriculum Vitae Button */}
            <button
              onClick={onOpenCv}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#131924] border border-white/10 hover:border-cyan-500/60 text-slate-200 hover:text-white text-xs font-mono font-medium transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>CV</span>
            </button>

            {/* Primary Contact CTA Button */}
            <a
              href="#contacto"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-xs tracking-tight shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all font-mono"
            >
              <Send className="w-3 h-3" />
              <span>{lang === 'es' ? 'Contactar' : 'Contact'}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-[#131924] text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0D14]/98 border-b border-white/10 px-4 pt-3 pb-5 mt-3 space-y-2 animate-in fade-in">
          <div className="flex items-center gap-2 p-2 rounded bg-[#131924] border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PORTFOLIO_DATA.header.status}</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded hover:bg-[#131924] text-slate-200 font-mono text-sm hover:text-[#00F0FF] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="flex-1 py-2 rounded bg-[#131924] border border-white/10 text-white font-mono text-xs text-center flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ver CV Completo</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommand();
              }}
              className="flex-1 py-2 rounded bg-[#131924] border border-cyan-500/30 text-cyan-300 font-mono text-xs text-center flex items-center justify-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal ⌘K</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
