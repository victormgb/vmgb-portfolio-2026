import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ExternalLink, Zap } from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenDemo: (projectId: string) => void;
  lang: 'es' | 'en';
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenDemo, lang }) => {
  return (
    <section id="proyectos" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 tracking-wider">
            <span>02 //</span>
            <span>CASOS DE ESTUDIO DE PRODUCCIÓN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            {lang === 'es'
              ? 'Proyectos & Arquitecturas en Producción'
              : 'Production Projects & Architectures'}
          </h2>
          <p className="text-slate-400 text-sm font-normal max-w-2xl">
            {lang === 'es'
              ? 'Sistemas desplegados con arquitecturas escalables, aislamiento de datos y alto rendimiento.'
              : 'Deployed systems with scalable architectures, data isolation, and high performance.'}
          </p>
        </div>

        {/* Minimalist Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-xl bg-[#0F141C] border border-white/8 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Top Badge & Subtitle */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-400/40 text-[#00F0FF] text-[11px] font-bold tracking-wider">
                    PROJECT // {project.projectNumber}
                  </span>
                  <span className="text-slate-400 text-[11px] truncate max-w-[180px]">
                    {project.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {project.description}
                </p>

                {/* Architecture Details / Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.architectureDetails.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#131924] border border-white/5 text-slate-300 font-mono text-[11px] hover:border-cyan-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: 1 Live Demo + Repo Buttons */}
              <div className="pt-5 border-t border-white/5 flex flex-wrap items-center gap-2 mt-auto">
                {/* 1 Live Demo Button */}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-xs tracking-tight shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all font-mono"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenDemo(project.id)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-xs tracking-tight shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all font-mono cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Live Demo</span>
                  </button>
                )}

                {/* Repository Buttons */}
                {project.frontendRepo && (
                  <a
                    href={project.frontendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded bg-[#131924] hover:bg-[#1B2232] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                  >
                    <span>Frontend Repo</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                )}

                {project.backendRepo && (
                  <a
                    href={project.backendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded bg-[#131924] hover:bg-[#1B2232] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                  >
                    <span>Backend Repo</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
