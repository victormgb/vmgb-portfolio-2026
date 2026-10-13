import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  Check,
  Copy,
  Clock,
  MessageSquare,
} from 'lucide-react';

interface ContactSectionProps {
  lang: 'es' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (type: 'email' | 'phone') => {
    if (type === 'email') {
      navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      navigator.clipboard.writeText(PORTFOLIO_DATA.contact.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 900);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 tracking-wider">
            <span>06 //</span>
            <span>INICIAR CONVERSACIÓN TÉCNICA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            {lang === 'es'
              ? PORTFOLIO_DATA.contact.heading
              : 'Ready to elevate your product architecture?'}
          </h2>
          <p className="text-slate-400 text-sm font-normal max-w-2xl">
            {lang === 'es'
              ? PORTFOLIO_DATA.contact.subheading
              : 'Available immediately for Lead Frontend Architect or Senior FullStack Developer roles in global remote setups.'}
          </p>
        </div>

        {/* 2-Column Split: Contact Cards vs Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#0F141C] border border-white/8 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-lg bg-[#131924] border border-white/5 hover:border-cyan-500/30 transition-all flex items-start justify-between gap-3 group">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#171C24] border border-white/5 text-cyan-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      CORREO ELECTRÓNICO
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                      className="text-xs sm:text-sm font-mono font-medium text-white group-hover:text-cyan-300 transition-colors break-all"
                    >
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy('email')}
                  className="p-1.5 rounded hover:bg-[#1B2232] text-slate-400 hover:text-white transition-colors"
                  title="Copiar correo"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-lg bg-[#131924] border border-white/5 hover:border-emerald-500/30 transition-all flex items-start justify-between gap-3 group">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#171C24] border border-white/5 text-emerald-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      TELÉFONO / WHATSAPP DIRECTO
                    </span>
                    <a
                      href={`https://wa.me/584121939716?text=${encodeURIComponent(
                        'Hola Victor, te contacto desde tu portfolio de arquitectura.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono font-medium text-white group-hover:text-emerald-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy('phone')}
                  className="p-1.5 rounded hover:bg-[#1B2232] text-slate-400 hover:text-white transition-colors"
                  title="Copiar teléfono"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location & Timezone Card */}
              <div className="p-4 rounded-lg bg-[#131924] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded bg-[#171C24] border border-white/5 text-cyan-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    UBICACIÓN & ZONA HORARIA
                  </span>
                  <div className="text-xs sm:text-sm font-mono text-white">
                    {PORTFOLIO_DATA.contact.location}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Solape directo con horarios US (EST/PST) y Europa (CET)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/5">
              <a
                href={PORTFOLIO_DATA.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-blue-400 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>

              <a
                href={PORTFOLIO_DATA.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-purple-400 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#0F141C] border border-white/8 relative">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    NOMBRE O COMPAÑÍA
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ej. Acme Corp / Alex Recruiter"
                    className="w-full px-3.5 py-2.5 rounded bg-[#131924] border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    CORREO CORPORATIVO
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#131924] border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  ASUNTO DE LA OPORTUNIDAD
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Ej. Rol Lead Frontend Architect / Senior FullStack"
                  className="w-full px-3.5 py-2.5 rounded bg-[#131924] border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  MENSAJE O DETALLES DEL PROYECTO
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe los requerimientos del rol, stack arquitectónico y alcance..."
                  className="w-full px-3.5 py-2.5 rounded bg-[#131924] border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded bg-[#00F0FF] hover:bg-[#7DF4FF] text-[#0A0D14] font-semibold text-xs tracking-tight shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all font-mono flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-[#0A0D14] border-t-transparent rounded-full animate-spin" />
                      <span>Despachando mensaje a Victor...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-4 h-4 text-[#0A0D14]" />
                      <span>¡Mensaje Enviado con Éxito! Victor te responderá a la brevedad.</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 fill-current" />
                      <span>Enviar Mensaje a Victor</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
