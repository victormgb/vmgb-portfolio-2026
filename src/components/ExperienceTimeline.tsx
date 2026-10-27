import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, CheckCircle2, MapPin, Briefcase } from 'lucide-react';

interface ExperienceTimelineProps {
  lang: 'es' | 'en';
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  return (
    <section id="experiencia" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 tracking-wider">
            <span>03 //</span>
            <span>TRAYECTORIA DE LIDERAZGO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {lang === 'es'
              ? 'Experiencia Profesional de Alto Impacto'
              : 'High-Impact Professional Experience'}
          </h2>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#0F141C] border border-white/8 hover:border-cyan-500/40 transition-all duration-300 relative group"
            >
              {/* Header: Company, Location, Period Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-500/20">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-[#131924] px-3 py-1 rounded border border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role */}
              <div className="font-mono text-sm sm:text-base font-semibold text-cyan-300 mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>{exp.role}</span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 mb-8">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-[#131924] border border-white/5 text-slate-300 font-mono text-xs hover:border-cyan-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
