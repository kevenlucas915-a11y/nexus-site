import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Eye, Sparkles } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/content';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-stone-100/60 via-stone-50 to-white">
      {/* Subtle background decoration grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/70 border border-stone-300/80 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-8 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Social Media • Produção de Conteúdo • Performance
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.08] mb-8">
            Transformamos perfis comuns em{' '}
            <span className="underline decoration-stone-300 decoration-wavy underline-offset-8">
              máquinas de autoridade
            </span>{' '}
            e vendas.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mb-10">
            Criamos narrativas magnéticas, vídeos curtos de alta retenção e estratégias de conteúdo que posicionam sua marca como líder e geram novos clientes todos os dias.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={() => onOpenContact()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Quero Escalar Minha Marca</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-stone-700 bg-white border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all duration-200 shadow-xs"
            >
              <span>Explorar Portfólio</span>
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-200/80">
            {AGENCY_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Showcase Card / Interactive Hero Graphic */}
        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
          <div className="rounded-3xl p-3 sm:p-4 bg-white/70 backdrop-blur-xl border border-stone-200 shadow-2xl shadow-stone-200/60">
            <div className="rounded-2xl overflow-hidden bg-stone-900 text-white p-6 sm:p-10 relative">
              {/* Background gradient effect */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-stone-700/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-stone-800/40 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Column 1: Strategy highlight */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Algoritmo & Retenção
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white leading-snug">
                    Roteiros que prendem atenção nos primeiros 3 segundos.
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Não adianta postar todo dia sem estratégia. Aplicamos engenharia de ganchos virais e storytelling que convertem visualizações em faturamento real.
                  </p>
                </div>

                {/* Column 2: Simulated Phone Preview / Reel Card */}
                <div className="relative flex justify-center">
                  <div className="w-64 rounded-3xl bg-stone-950 p-2.5 shadow-2xl border border-stone-800">
                    <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-stone-900 group">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
                        alt="Reel visual preview" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />
                      
                      {/* Floating metrics */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-emerald-400 mb-2">
                          <TrendingUp className="w-3 h-3" />
                          +1.2M Visualizações
                        </div>
                        <p className="text-xs font-semibold leading-tight line-clamp-2">
                          "O segredo para posicionar sua marca pessoal em 2026..."
                        </p>
                        <div className="flex items-center gap-3 mt-3 text-[10px] text-stone-400">
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 48.2k</span>
                          <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> 1.2M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Conversion proof */}
                <div className="space-y-4 bg-stone-800/50 backdrop-blur-sm border border-stone-700/60 rounded-2xl p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Resultados em Tempo Real
                  </div>
                  <div className="space-y-3">
                    <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800">
                      <span className="text-xs text-stone-400">Leads recebidos no WhatsApp</span>
                      <div className="text-lg font-bold text-white mt-0.5">+142 contatos/mês</div>
                    </div>
                    <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800">
                      <span className="text-xs text-stone-400">Taxa média de conversão</span>
                      <div className="text-lg font-bold text-emerald-400 mt-0.5">3.8x do setor</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => onOpenContact()}
                    className="w-full py-2.5 rounded-xl bg-white text-stone-950 text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors"
                  >
                    Quero estes resultados
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
