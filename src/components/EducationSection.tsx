import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationSectionProps {
  lang: 'es' | 'en';
}

export const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  return (
    <section id="educacion" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 tracking-wider">
            <span>04 //</span>
            <span>FORMACIÓN ACADÉMICA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {lang === 'es'
              ? 'Educación & Credenciales de Ingeniería'
              : 'Education & Engineering Credentials'}
          </h2>
        </div>

        {/* Education Degree Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#0F141C] border border-white/8 hover:border-cyan-500/40 transition-all duration-300 relative group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#131924] border border-cyan-500/30 flex items-center justify-center text-[#00F0FF] group-hover:glow-cyan transition-all">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {PORTFOLIO_DATA.education.institution}
                </h3>
                <div className="font-mono text-sm sm:text-base text-cyan-300 font-semibold mt-0.5">
                  {PORTFOLIO_DATA.education.degree}
                </div>
              </div>
            </div>

            <div className="text-left md:text-right font-mono">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                {PORTFOLIO_DATA.education.credentialTitle}
              </span>
              <span className="text-xs sm:text-sm text-cyan-400 font-bold tracking-tight">
                {PORTFOLIO_DATA.education.credentialSubtitle}
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mt-4 pt-4 border-t border-white/5 font-normal">
            {PORTFOLIO_DATA.education.details}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#131924] border border-white/5">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sistemas Distribuidos</span>
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#131924] border border-white/5">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Modelado Formal de BD</span>
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#131924] border border-white/5">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Arquitectura de Software End-to-End</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
