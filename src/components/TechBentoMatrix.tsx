import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Layers,
  Database,
  Compass,
  CloudLightning,
  Sparkles,
  Award,
  CheckCircle,
  Terminal,
} from 'lucide-react';

interface TechBentoMatrixProps {
  lang: 'es' | 'en';
}

export const TechBentoMatrix: React.FC<TechBentoMatrixProps> = ({ lang }) => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const getBentoIcon = (iconName: string) => {
    switch (iconName) {
      case 'layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-purple-400" />;
      case 'cloud-lightning':
        return <CloudLightning className="w-5 h-5 text-teal-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'award':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="habilidades" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 tracking-wider">
            <span>03 //</span>
            <span>STACK & CAPACIDADES TÉCNICAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {lang === 'es'
              ? 'Interactive Tech Stack Bento Matrix'
              : 'Interactive Tech Stack Bento Matrix'}
          </h2>
          <p className="text-slate-400 text-xs font-mono mt-2">
            Haz clic en cualquier tecnología para inspeccionar aplicación en proyectos y nivel de dominio
          </p>
        </div>

        {/* 6 Bento Cards Grid (3 columns on lg, 2 on md, 1 on sm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.bentoMatrix.map((bento, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0F141C] border border-white/8 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle sheen highlight on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Header row: Icon, Title, and Level Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-[#131924] border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                      {getBentoIcon(bento.icon)}
                    </div>
                    <h3 className="font-bold text-base text-white tracking-tight">
                      {bento.title}
                    </h3>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border ${bento.badgeColor}`}
                  >
                    {bento.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {bento.description}
                </p>
              </div>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {bento.chips.map((chip, cIdx) => {
                  const isChipActive = selectedTech === chip;
                  return (
                    <button
                      key={cIdx}
                      onClick={() =>
                        setSelectedTech(selectedTech === chip ? null : chip)
                      }
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-all text-left ${
                        isChipActive
                          ? 'bg-[#00F0FF] text-[#0A0D14] font-semibold shadow-md shadow-cyan-500/30'
                          : 'bg-[#131924] border border-white/5 text-slate-300 hover:text-white hover:border-cyan-500/40'
                      }`}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Tech Inspector Drawer */}
        {selectedTech && (
          <div className="mt-8 p-4 sm:p-5 rounded-lg bg-[#131924] border border-cyan-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#00F0FF] shrink-0" />
              <div>
                <div className="font-mono text-xs font-bold text-white flex items-center gap-2">
                  <span>Stack Token:</span>
                  <span className="text-cyan-300 font-bold">{selectedTech}</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-mono">
                  Implementado en producción para NextReality INC y The Futures con benchmarks de alto rendimiento.
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedTech(null)}
              className="px-3 py-1 rounded bg-[#171C24] hover:bg-[#1B2232] text-slate-300 hover:text-white text-xs font-mono border border-white/10 shrink-0"
            >
              Cerrar Inspección
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
