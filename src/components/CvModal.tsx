import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

interface CvModalProps {
  onClose: () => void;
  lang: 'es' | 'en';
}

export const CvModal: React.FC<CvModalProps> = ({ onClose, lang }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl bg-[#0F141C] border border-cyan-500/40 shadow-2xl flex flex-col text-slate-200">
        {/* Sticky modal toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#131924] border-b border-white/10 sticky top-0 z-20 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>CURRICULUM VITAE // VICTOR MANUEL GOMEZ BARRETO</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-xs font-mono flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-[#1B2232] text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-[#0A0D14] font-sans">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Victor Manuel Gomez Barreto
              </h1>
              <div className="text-cyan-400 font-mono text-sm sm:text-base font-semibold mt-1">
                Lead Frontend Architect & Senior FullStack Developer
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                Especialista en arquitecturas web distribuidas, SaaS multi-inquilino de alto throughput, 3D/WebGL en tiempo real y desarrollo potenciado por Inteligencia Artificial.
              </p>
            </div>

            <div className="font-mono text-xs text-slate-400 space-y-1.5 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PORTFOLIO_DATA.contact.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PORTFOLIO_DATA.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Anaco, Anzoátegui, Venezuela (UTC-4)</span>
              </div>
              <div className="text-emerald-400 font-semibold pt-1">
                Disponible de inmediato · Remoto Global
              </div>
            </div>
          </div>

          {/* Resumen Profesional */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-white/5 pb-1">
              Perfil Profesional & Enfoque de Arquitectura
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Ingeniero de Sistemas con más de 5 años de experiencia liderando la concepción técnica y ejecución de aplicaciones críticas. Especializado en migración de sistemas monolíticos a microservicios desacoplados (NestJS, Node) y microfrontends con React/Next.js y TypeScript. Dominio avanzado en aislamiento estricto de datos para plataformas SaaS multi-tenant, rendering 3D en navegador con Three.js y WebRTC, así como diseño de flujos con agentes autónomos de IA.
            </p>
          </div>

          {/* Competencias Técnicas Clave */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-white/5 pb-1">
              Matriz de Habilidades & Tecnologías
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded bg-[#0F141C] border border-white/5">
                <span className="text-cyan-300 font-bold block mb-1">Frontend & Gráficos:</span>
                <span className="text-slate-400">Next.js 14, React, TypeScript, Vue/Nuxt, Three.js, WebGL, WebRTC, Tailwind CSS, Zustand, Redux.</span>
              </div>
              <div className="p-3 rounded bg-[#0F141C] border border-white/5">
                <span className="text-blue-300 font-bold block mb-1">Backend & Bases de Datos:</span>
                <span className="text-slate-400">NestJS, Node.js (Express), PHP (Laravel Clean Architecture), PostgreSQL, MySQL, Redis, MongoDB.</span>
              </div>
              <div className="p-3 rounded bg-[#0F141C] border border-white/5">
                <span className="text-purple-300 font-bold block mb-1">Arquitectura & Cloud:</span>
                <span className="text-slate-400">Multi-Tenancy, Microservices, Micro-Frontends, Docker & Compose, AWS (EC2, S3, ALB), CI/CD.</span>
              </div>
              <div className="p-3 rounded bg-[#0F141C] border border-white/5">
                <span className="text-emerald-300 font-bold block mb-1">IA & Métodos de Alta Velocidad:</span>
                <span className="text-slate-400">OpenAI API, Anthropic Claude SDK, AI Agents, Vibe Coding, Prompt Engineering, Model Context Protocol.</span>
              </div>
            </div>
          </div>

          {/* Experiencia Laboral */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4 border-b border-white/5 pb-1">
              Experiencia Laboral
            </h2>
            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div>
                      <span className="text-base font-bold text-white">{exp.company}</span>
                      <span className="text-slate-400 ml-2 font-mono">({exp.location})</span>
                    </div>
                    <span className="font-mono text-cyan-400 text-xs">{exp.period}</span>
                  </div>
                  <div className="font-mono text-xs text-slate-300 font-semibold">
                    {exp.role}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-white/5 pb-1">
              Formación Académica
            </h2>
            <div className="text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm">
                  {PORTFOLIO_DATA.education.institution}
                </span>
                <span className="font-mono text-cyan-400">Graduado Noviembre 2023</span>
              </div>
              <div className="font-mono text-cyan-300 font-semibold">
                {PORTFOLIO_DATA.education.degree} (Título Profesional: Ingeniero de Sistemas)
              </div>
              <p className="text-slate-400 text-xs">
                {PORTFOLIO_DATA.education.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
