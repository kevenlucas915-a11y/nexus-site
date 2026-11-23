import React from 'react';
import { METHODOLOGY_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Methodology({ onOpenContact }) {
  return (
    <section id="metodologia" className="py-24 sm:py-32 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
            Nosso Método
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Sem achismos. Um processo estruturado para gerar previsibilidade.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
            Desde o primeiro briefing até a análise de dados das postagens, nossa metodologia garante alinhamento de expectativas e evolução contínua.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div>
                <span className="font-display text-4xl font-extrabold text-stone-300 block mb-6">
                  {step.step}
                </span>
                <h3 className="font-display text-xl font-bold text-stone-900 tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Etapa Concluída</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Pronto para colocar sua marca em outro patamar?
            </h3>
            <p className="text-sm text-stone-300">
              Agende uma sessão diagnóstica sem compromisso com nossa liderança estratégica.
            </p>
          </div>
          <button
            onClick={() => onOpenContact()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-stone-100 text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>Agendar Diagnóstico Grátis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
