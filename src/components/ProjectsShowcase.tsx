import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  ExternalLink,
  Zap,
  Terminal,
  Activity,
  Box,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building2,
  PackageCheck,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenDemo: (projectId: string) => void;
  lang: 'es' | 'en';
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenDemo, lang }) => {
  const [selectedTenant, setSelectedTenant] = useState<'acme' | 'nova' | 'vertex'>('acme');
  const [liveReqCount, setLiveReqCount] = useState(240);
  const [liveLatency, setLiveLatency] = useState(12);

  // Gentle live telemetry oscillation to simulate production throughput
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveReqCount((prev) => 235 + Math.floor(Math.random() * 15));
      setLiveLatency((prev) => 11 + Math.floor(Math.random() * 3));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const tenantData = {
    acme: {
      id: '#ORG_ACME_CORP_89',
      name: 'Acme Corp',
      items: '1,245,890',
      alertStock: '74',
      sales: '$15,200',
      schema: 'tenant_acme_prod',
    },
    nova: {
      id: '#ORG_NOVA_LOGISTICS_12',
      name: 'Nova Logistics',
      items: '890,320',
      alertStock: '12',
      sales: '$48,900',
      schema: 'tenant_nova_prod',
    },
    vertex: {
      id: '#ORG_VERTEX_LABS_04',
      name: 'Vertex Labs',
      items: '3,410,000',
      alertStock: '3',
      sales: '$124,500',
      schema: 'tenant_vertex_prod',
    },
  };

  const currentTenant = tenantData[selectedTenant];
  const flagship = PORTFOLIO_DATA.projects[0];
  const project2 = PORTFOLIO_DATA.projects[1];
  const project3 = PORTFOLIO_DATA.projects[2];

  return (
    <section id="proyectos" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 tracking-wider">
              <span>02 //</span>
              <span>CASOS DE ESTUDIO DE PRODUCCIÓN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {lang === 'es'
                ? 'Sistemas y Arquitecturas de Misión Crítica'
                : 'Mission-Critical Systems & Architectures'}
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">SLA 99.99%</span>
            <span>•</span>
            <span>MULTI-TENANT</span>
            <span>•</span>
            <span className="text-slate-300">PRODUCTION BENCHMARKS</span>
          </div>
        </div>

        {/* FLAGSHIP SHOWCASE MVP #1 (Full-Width Card) */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-xl bg-[#0F141C] border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden mb-12 shadow-2xl">
          {/* Subtle cyan ambient background gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-cyan-500/5 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Content Column (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Showcase Pill & Categories */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-400/40 text-[#00F0FF] text-[11px] font-mono font-bold tracking-wider">
                    {flagship.projectNumber}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {flagship.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
                  {flagship.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {flagship.description}
                </p>

                {/* Technical Architecture Breakdown */}
                <div className="mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                    DESGLOSE DE ARQUITECTURA TÉCNICA:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {flagship.architectureDetails.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#131924] border border-white/8 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 font-mono text-xs transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => onOpenDemo(flagship.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-xs tracking-tight shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all font-mono"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>LIVE DEMO PROD</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenDemo(flagship.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded bg-[#131924] hover:bg-[#1B2232] border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                >
                  <span>Frontend Repo</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </button>

                <button
                  onClick={() => onOpenDemo(flagship.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded bg-[#131924] hover:bg-[#1B2232] border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                >
                  <span>Backend Repo</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Right Terminal & Live Console Simulation (6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="rounded-lg bg-[#0A0D14] border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col h-full">
                {/* Terminal Window Header Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#131924] border-b border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-300 text-[11px] truncate px-2 font-mono">
                    tenant_controller.rs — {liveReqCount} req/s
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Tenant Selector Toolbar */}
                <div className="p-3 bg-[#0F141C] border-b border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[11px] flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Tenant Activo:</span>
                  </span>
                  <div className="flex items-center gap-1">
                    {(['acme', 'nova', 'vertex'] as const).map((tKey) => (
                      <button
                        key={tKey}
                        onClick={() => setSelectedTenant(tKey)}
                        className={`px-2 py-1 rounded text-[11px] font-mono transition-colors ${
                          selectedTenant === tKey
                            ? 'bg-cyan-950 border border-cyan-400/50 text-cyan-300 font-semibold'
                            : 'bg-[#171C24] text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {tenantData[tKey].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mini Dashboard Widget for Selected Tenant */}
                <div className="p-4 bg-[#0D121B] border-b border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-3">
                    <span className="font-semibold text-white">
                      Inventory Overview — {currentTenant.name}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Schema: {currentTenant.schema}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded bg-[#131924] border border-white/5">
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <PackageCheck className="w-3 h-3 text-cyan-400" />
                        <span>Total Items</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                        {currentTenant.items}
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-[#131924] border border-white/5">
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-400" />
                        <span>Alert Stock</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-amber-300 font-mono mt-0.5">
                        {currentTenant.alertStock}
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-[#131924] border border-white/5">
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span>Sales MTD</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-emerald-300 font-mono mt-0.5">
                        {currentTenant.sales}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit Terminal Log Stream */}
                <div className="p-4 font-mono text-xs flex-1 flex flex-col justify-between bg-[#070A0F]">
                  <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5 text-slate-400">
                    <span className="text-cyan-400">
                      TENANT_ID: {currentTenant.id}
                    </span>
                    <span className="text-emerald-400">
                      LATENCY: {liveLatency}ms
                    </span>
                  </div>

                  <div className="space-y-2 py-3 text-[11px]">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">
                        [AUTH_VALIDATED] JWT verified
                      </span>
                      <span className="text-emerald-400 font-semibold">200 OK</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">
                        [POSTGRES_TX] Tenant schema routed
                      </span>
                      <span className="text-cyan-400 font-semibold">4.2ms</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">
                        [EMAIL_DISPATCH] Elastic Email webhook
                      </span>
                      <span className="text-emerald-400 font-semibold">DELIVERED</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                    <span>ISOLATION: Strict Row/Schema Partitioning</span>
                    <button
                      onClick={() => onOpenDemo(flagship.id)}
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Abrir Simulador Completo</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Grid Project Cards (Project 02 & Project 03) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project 02: 3D Multi-User Platform */}
          <div className="p-6 sm:p-7 rounded-xl bg-[#0F141C] border border-white/8 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <span className="text-purple-400 font-semibold">
                  {project2.projectNumber}
                </span>
                <span className="text-slate-400">{project2.subtitle}</span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-300 transition-colors">
                {project2.title}
              </h4>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                {project2.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project2.architectureDetails.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#131924] border border-white/5 text-slate-400 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 3D Wireframe HUD Preview Container */}
              <div
                onClick={() => onOpenDemo(project2.id)}
                className="cursor-pointer p-4 rounded-lg bg-[#0A0D14] border border-purple-500/20 hover:border-purple-400/50 mb-6 relative overflow-hidden group/hud transition-all"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <Box className="w-3.5 h-3.5" />
                    <span>THREE.JS ENGINE / HUB SCENE</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    {project2.metrics.value}
                  </span>
                </div>

                <div className="h-28 rounded bg-[#111622] border border-white/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-purple-500/10 to-transparent" />
                  {/* Geometric 3D cube illustration */}
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 mx-auto border-2 border-purple-400/60 rounded rotate-45 flex items-center justify-center group-hover/hud:rotate-90 group-hover/hud:scale-110 transition-all duration-700">
                      <div className="w-6 h-6 border border-cyan-400/60 rounded rotate-12" />
                    </div>
                    <span className="block mt-2 font-mono text-[10px] text-purple-300">
                      [Haz clic para interactuar con la órbita 3D]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono">
              <span className="text-slate-400">{project2.role}</span>
              <button
                onClick={() => onOpenDemo(project2.id)}
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Ver Caso de Éxito</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Project 03: Enterprise Payment & Review Engine */}
          <div className="p-6 sm:p-7 rounded-xl bg-[#0F141C] border border-white/8 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <span className="text-blue-400 font-semibold">
                  {project3.projectNumber}
                </span>
                <span className="text-slate-400">{project3.subtitle}</span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                {project3.title}
              </h4>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                {project3.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project3.architectureDetails.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#131924] border border-white/5 text-slate-400 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Payment Flow & Canvas Telemetry HUD */}
              <div
                onClick={() => onOpenDemo(project3.id)}
                className="cursor-pointer p-4 rounded-lg bg-[#0A0D14] border border-blue-500/20 hover:border-blue-400/50 mb-6 relative overflow-hidden group/hud transition-all"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 text-blue-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>STRIPE GATEWAY / WEBSOCKETS</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    {project3.metrics.value}
                  </span>
                </div>

                <div className="h-28 rounded bg-[#111622] border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">AWS_ALB :: auto-scaling active</span>
                    <span className="text-blue-400">Redis Pub/Sub</span>
                  </div>

                  <div className="flex items-center justify-center gap-3 font-mono text-xs">
                    <div className="px-2.5 py-1 rounded bg-[#172030] border border-blue-500/30 text-blue-300">
                      Client Canvas
                    </div>
                    <span className="text-slate-500">⇄ WS ⇄</span>
                    <div className="px-2.5 py-1 rounded bg-[#172030] border border-emerald-500/30 text-emerald-300">
                      Stripe Vault
                    </div>
                  </div>

                  <span className="block text-center font-mono text-[10px] text-blue-300">
                    [Haz clic para simular transacción y anotación sobre canvas]
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono">
              <span className="text-slate-400">{project3.role}</span>
              <button
                onClick={() => onOpenDemo(project3.id)}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Ver Arquitectura</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
