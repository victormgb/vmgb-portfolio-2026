import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Cpu,
  Gauge,
  Cloud,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  Quote,
  Glasses,
} from 'lucide-react';

interface ExecutiveSummaryProps {
  lang: 'es' | 'en';
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ lang }) => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [simulatedPing, setSimulatedPing] = useState<Record<number, number>>({
    0: 14,
    1: 28,
    2: 4,
    3: 42,
  });

  const handleTestLayer = (index: number) => {
    setActiveLayer(index);
    // simulate slight latency variance on probe
    const variance = Math.floor(Math.random() * 6) - 3;
    setSimulatedPing((prev) => ({
      ...prev,
      [index]: Math.max(2, (prev[index] || 15) + variance),
    }));
  };

  const getHighlightIcon = (icon: string) => {
    switch (icon) {
      case 'gauge':
        return <Gauge className="w-4 h-4 text-cyan-400" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 text-blue-400" />;
      case 'glasses':
        return <Glasses className="w-4 h-4 text-purple-400" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="sobre-mi" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 tracking-wider">
            <span>{PORTFOLIO_DATA.executiveSummary.sectionNum} //</span>
            <span>{PORTFOLIO_DATA.executiveSummary.sectionTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {lang === 'es'
              ? PORTFOLIO_DATA.executiveSummary.title
              : 'About Me — Professional Profile & Architecture'}
          </h2>
        </div>

        {/* 2-Column High-Density Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: System Overview & Philosophy (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-[#0F141C] border border-white/8 flex flex-col justify-between">
            <div>
              {/* Card Sub-Header */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 pb-3 border-b border-white/5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase tracking-wider">
                  {PORTFOLIO_DATA.executiveSummary.systemOverview.tag}
                </span>
              </div>

              {/* Prose Content */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {PORTFOLIO_DATA.executiveSummary.systemOverview.paragraphs.map((para, idx) => (
                  <p key={idx} className="font-normal text-slate-300">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* 4 Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/5">
              {PORTFOLIO_DATA.executiveSummary.systemOverview.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-[#131924] border border-white/5 flex items-start gap-3 hover:border-white/15 transition-colors"
                >
                  <div className="p-1.5 rounded bg-[#171C24] border border-white/5 shrink-0 mt-0.5">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white font-mono mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: ARCH_DIAGNOSTIC // 2025 & Principle Quote (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-lg bg-[#0F141C] border border-white/8 flex flex-col justify-between">
            <div>
              {/* Header with Health Badge */}
              <div className="flex items-center justify-between gap-3 text-xs font-mono pb-3 mb-6 border-b border-white/5">
                <div className="flex items-center gap-2 text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="uppercase tracking-wider">
                    {PORTFOLIO_DATA.executiveSummary.diagnostic.header}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{PORTFOLIO_DATA.executiveSummary.diagnostic.health}</span>
                </div>
              </div>

              {/* System Stack Layers */}
              <div className="space-y-3 mb-8">
                {PORTFOLIO_DATA.executiveSummary.diagnostic.layers.map((layer, idx) => {
                  const isSelected = activeLayer === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleTestLayer(idx)}
                      className={`group p-3 rounded cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-[#172030] border-cyan-400 shadow-lg shadow-cyan-500/10'
                          : 'bg-[#131924] border-white/5 hover:border-cyan-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                        <span className="text-slate-400 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
                          {layer.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 text-[10px]">
                            {simulatedPing[idx]}ms
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-emerald-400'
                            }`}
                          />
                        </div>
                      </div>
                      <div className="font-mono text-xs sm:text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">
                        {layer.tech}
                      </div>
                    </div>
                  );
                })}
                <p className="text-[10px] font-mono text-slate-500 text-right">
                  Tip: Haz clic en cualquier capa para probar latencia de enrutamiento
                </p>
              </div>
            </div>

            {/* Quote / Architectural Principle */}
            <div className="p-4 sm:p-5 rounded bg-[#131924]/90 border border-cyan-500/20 relative mt-4">
              <div className="font-mono text-[11px] text-cyan-400 mb-2 flex items-center gap-1.5">
                <Quote className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{PORTFOLIO_DATA.executiveSummary.diagnostic.quote.comment}</span>
              </div>
              <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-3 font-mono">
                {PORTFOLIO_DATA.executiveSummary.diagnostic.quote.text}
              </blockquote>
              <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-white/5">
                <span className="text-slate-300 font-medium">
                  {PORTFOLIO_DATA.executiveSummary.diagnostic.quote.author}
                </span>
                <span className="text-[#00F0FF] font-semibold">
                  {PORTFOLIO_DATA.executiveSummary.diagnostic.quote.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
