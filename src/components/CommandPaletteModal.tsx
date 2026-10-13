import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Search,
  FileText,
  Mail,
  Zap,
  Globe,
  Layers,
  ArrowRight,
  X,
  Phone,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCv: () => void;
  onOpenDemo: (projectId: string) => void;
  onSwitchLang: () => void;
  lang: 'es' | 'en';
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onOpenCv,
  onOpenDemo,
  onSwitchLang,
  lang,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle modal
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'live-saas-netlify',
      title: 'Abrir Aplicación Real en Vivo: SystemCA (Netlify)',
      category: 'Proyectos',
      icon: <Zap className="w-4 h-4 text-emerald-400" />,
      run: () => {
        window.open('https://sassinventory-vmgb.netlify.app/', '_blank');
        onClose();
      },
    },
    {
      id: 'github-frontend',
      title: 'Ver Repositorio Frontend: sass-inventory-frontend',
      category: 'GitHub',
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      run: () => {
        window.open('https://github.com/victormgb/sass-inventory-frontend', '_blank');
        onClose();
      },
    },
    {
      id: 'github-backend',
      title: 'Ver Repositorio Backend: sass-inventory-backend',
      category: 'GitHub',
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      run: () => {
        window.open('https://github.com/victormgb/sass-inventory-backend', '_blank');
        onClose();
      },
    },
    {
      id: 'demo-saas',
      title: 'Abrir Simulador In-App: SystemCA Multi-Tenant Engine',
      category: 'Proyectos',
      icon: <Zap className="w-4 h-4 text-cyan-400" />,
      run: () => {
        onClose();
        onOpenDemo('saas-multi-tenant');
      },
    },
    {
      id: 'demo-3d',
      title: 'Abrir Simulador: 3D WebGL & WebRTC Room',
      category: 'Proyectos',
      icon: <Zap className="w-4 h-4 text-purple-400" />,
      run: () => {
        onClose();
        onOpenDemo('3d-webrtc-platform');
      },
    },
    {
      id: 'demo-payment',
      title: 'Abrir Simulador: Stripe Payment & Canvas Review',
      category: 'Proyectos',
      icon: <Zap className="w-4 h-4 text-blue-400" />,
      run: () => {
        onClose();
        onOpenDemo('fintech-review-engine');
      },
    },
    {
      id: 'view-cv',
      title: 'Ver Curriculum Vitae Completo (PDF Print Ready)',
      category: 'Documentos',
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
      run: () => {
        onClose();
        onOpenCv();
      },
    },
    {
      id: 'copy-email',
      title: `Copiar Correo (${PORTFOLIO_DATA.contact.email})`,
      category: 'Contacto',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      run: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
        onClose();
        alert('Email copiado al portapapeles');
      },
    },
    {
      id: 'call-whatsapp',
      title: `Iniciar WhatsApp Directo (${PORTFOLIO_DATA.contact.phone})`,
      category: 'Contacto',
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      run: () => {
        window.open('https://wa.me/584121939716', '_blank');
        onClose();
      },
    },
    {
      id: 'switch-language',
      title: lang === 'es' ? 'Switch to English' : 'Cambiar a Español',
      category: 'Preferencias',
      icon: <Globe className="w-4 h-4 text-amber-400" />,
      run: () => {
        onSwitchLang();
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-2xl rounded-xl bg-[#0F141C] border border-cyan-500/40 shadow-2xl overflow-hidden font-mono text-xs">
        {/* Search Input Bar */}
        <div className="p-4 bg-[#131924] border-b border-white/10 flex items-center gap-3">
          <Terminal className="w-4 h-4 text-[#00F0FF]" />
          <input
            type="text"
            autoFocus
            placeholder="Escribe un comando o busca una acción... (ej. demo, cv, email)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-xs"
          />
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="p-2 max-h-80 overflow-y-auto divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-slate-500">
              No se encontraron comandos para &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((action) => (
              <button
                key={action.id}
                onClick={action.run}
                className="w-full p-3 rounded hover:bg-[#172030] flex items-center justify-between text-left group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-[#131924] border border-white/5">
                    {action.icon}
                  </div>
                  <div>
                    <div className="text-white group-hover:text-cyan-300 font-semibold">
                      {action.title}
                    </div>
                    <div className="text-[10px] text-slate-500">{action.category}</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-2.5 bg-[#0A0D14] border-t border-white/5 text-[10px] text-slate-500 flex items-center justify-between">
          <span>ROOT@PRODUCTION:~$ ready</span>
          <span>Presiona ESC para salir</span>
        </div>
      </div>
    </div>
  );
};
