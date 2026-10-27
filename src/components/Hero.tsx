import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  ArrowRight,
  ExternalLink,
  Radio,
  Network,
  Box,
  Bot,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onSelectProject: (projectId: string) => void;
  lang: 'es' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject, lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'signal':
        return <Radio className="w-5 h-5 text-cyan-400" />;
      case 'network':
        return <Network className="w-5 h-5 text-blue-400" />;
      case 'box':
        return <Box className="w-5 h-5 text-purple-400" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status & Timezone Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-8 pb-3 border-b border-white/5 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            <span className="tracking-wider uppercase text-slate-300">
              {lang === 'es'
                ? PORTFOLIO_DATA.hero.topPills.availability
                : 'AVAILABLE FOR LEAD & SENIOR FULLSTACK ROLES | GLOBAL REMOTE'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 sm:text-right">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="tracking-wider uppercase">
              {PORTFOLIO_DATA.hero.topPills.timezone}
            </span>
          </div>
        </div>


        {/* Main Hero Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            <span className="block text-slate-200 font-semibold mb-1">
              Victor Gomez —
            </span>
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#7DF4FF] to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.25)]">
              {PORTFOLIO_DATA.hero.roleHighlight}
            </span>{' '}
            <span className="text-white font-medium">
              {PORTFOLIO_DATA.hero.roleSuffix}
            </span>
          </h1>

          {/* Hero Bio */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-9">
            {lang === 'es'
              ? PORTFOLIO_DATA.hero.bio
              : 'Specialized in multi-tenant SaaS architectures with strict data isolation, real-time 3D/AR web environments (Three.js / WebGL), high-throughput microservices, and AI Agent workflows.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-sm tracking-tight shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all font-mono group"
            >
              <span>{lang === 'es' ? 'Ver Proyectos' : 'View Projects'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={PORTFOLIO_DATA.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-[#131924] hover:bg-[#1B2232] border border-white/10 hover:border-blue-400/50 text-slate-200 hover:text-white font-mono text-sm transition-all"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </a>

            <a
              href={PORTFOLIO_DATA.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-[#131924] hover:bg-[#1B2232] border border-white/10 hover:border-purple-400/50 text-slate-200 hover:text-white font-mono text-sm transition-all"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-3 rounded-md bg-[#0F141C] hover:bg-[#171C24] border border-white/5 hover:border-cyan-500/30 text-slate-400 hover:text-slate-200 font-mono text-xs transition-colors"
              title="Copiar email de contacto"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{PORTFOLIO_DATA.contact.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4 Architectural Highlight Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.hero.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-lg bg-[#0F141C] border border-white/8 hover:border-cyan-500/40 hover:bg-[#131924] transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top edge specular highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-40 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${metric.accent}, transparent)`,
                }}
              />

              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-slate-300">
                  {metric.tag}
                </span>
                <div className="p-1.5 rounded bg-[#171C24] border border-white/5 group-hover:border-white/15 transition-colors">
                  {getMetricIcon(metric.icon)}
                </div>
              </div>

              <div>
                <div
                  className="font-bold text-2xl lg:text-3xl tracking-tight text-white mb-1 font-mono"
                  style={{
                    textShadow: `0 0 20px ${metric.accent}20`,
                  }}
                >
                  {metric.value}
                </div>
                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
