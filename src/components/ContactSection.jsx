import React from 'react';
import { AGENCY_CONFIG } from '../data/content';
import { ArrowRight, MessageCircle, Mail, MapPin, Sparkles } from 'lucide-react';

export default function ContactSection({ onOpenModal }) {
  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá! Gostaria de agendar um diagnóstico para minha marca.');
    window.open(`https://wa.me/${AGENCY_CONFIG.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-stone-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-stone-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800 text-stone-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Próximo Passo
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Sua marca não pode esperar mais um mês para crescer.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 max-w-xl leading-relaxed">
              Enquanto você adia, seus concorrentes estão ocupando o espaço e a atenção do seu cliente ideal. Vamos desenhar juntos sua presença dominante.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar pelo WhatsApp</span>
              </button>

              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-stone-700"
              >
                <span>Preencher Formulário</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 bg-stone-800/70 border border-stone-700/80 rounded-3xl p-8 backdrop-blur-md space-y-6">
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Canais Diretos de Atendimento
            </h3>

            <div className="space-y-4 text-sm">
              <a 
                href={`https://wa.me/${AGENCY_CONFIG.phone}?text=Olá%20Nexus%20Digital!`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-emerald-500/40 hover:bg-stone-900 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-105 flex items-center justify-center shrink-0 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400">WhatsApp Direto</div>
                  <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {AGENCY_CONFIG.phoneFormatted || "+55 (21) 98478-2381"}
                  </div>
                </div>
              </a>

              <a 
                href={`mailto:${AGENCY_CONFIG.email}`} 
                className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-sky-500/40 hover:bg-stone-900 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-700 text-stone-300 group-hover:scale-105 flex items-center justify-center shrink-0 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400">E-mail Comercial</div>
                  <div className="font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {AGENCY_CONFIG.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-stone-700 text-stone-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400">Localização</div>
                  <div className="font-semibold text-white">{AGENCY_CONFIG.location}</div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-stone-400">
              ⚡ Tempo médio de resposta: <span className="text-white font-medium">menos de 15 minutos</span> em horário comercial.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
