import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ExternalLink, Mail, Phone, MapPin, Activity, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#070A0F] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity lockup */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded bg-[#131924] border border-cyan-500/40 flex items-center justify-center font-bold text-xs text-[#00F0FF]">
                &lt;VG /&gt;
              </div>
              <span className="font-bold text-sm text-white font-sans">
                {PORTFOLIO_DATA.footer.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs font-normal leading-relaxed font-sans">
              {PORTFOLIO_DATA.footer.summary}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={PORTFOLIO_DATA.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-blue-400" />
            </a>

            <a
              href={PORTFOLIO_DATA.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-purple-400" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Email</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Telemetry metadata row */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span>{PORTFOLIO_DATA.contact.email}</span>
            </span>

            <span className="flex items-center gap-1 text-slate-400">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{PORTFOLIO_DATA.contact.phoneDisplay}</span>
            </span>

            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-purple-400" />
              <span>{PORTFOLIO_DATA.contact.location}</span>
            </span>

            <span className="flex items-center gap-1 text-cyan-400">
              <Activity className="w-3 h-3" />
              <span>{PORTFOLIO_DATA.footer.latency}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{PORTFOLIO_DATA.footer.sysStatus}</span>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500">
          <span>{PORTFOLIO_DATA.footer.copyright}</span>
          <span className="text-slate-600">
            LATAM Timezone · Immediate Availability · Remote Global
          </span>
        </div>
      </div>
    </footer>
  );
};
