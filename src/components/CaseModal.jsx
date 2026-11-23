import React from 'react';
import { X, TrendingUp, CheckCircle, ArrowRight, Quote } from 'lucide-react';

export default function CaseModal({ caseData, onClose, onSchedule }) {
  if (!caseData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-8 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-stone-700 hover:text-stone-900 flex items-center justify-center shadow-md transition-transform hover:scale-105"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover image banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
          <img
            src={caseData.image}
            alt={caseData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wider uppercase mb-2">
              {caseData.category}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              {caseData.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
            {caseData.stats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <span className="text-xs font-medium text-stone-500 uppercase tracking-wider block mb-1">
                  {stat.label}
                </span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Estratégia Aplicada
            </h4>
            <p className="text-base text-stone-700 leading-relaxed">
              {caseData.summary}
            </p>
          </div>

          {/* Client Testimonial */}
          {caseData.clientQuote && (
            <div className="relative p-6 rounded-2xl bg-stone-100/80 border-l-4 border-stone-900">
              <Quote className="w-6 h-6 text-stone-300 mb-2" />
              <p className="text-sm sm:text-base italic text-stone-800 font-medium leading-relaxed">
                "{caseData.clientQuote}"
              </p>
              <span className="block mt-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
                — Depoimento do Cliente
              </span>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {caseData.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 border border-stone-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-500 text-center sm:text-left">
              Quer aplicar uma estratégia parecida no seu negócio?
            </span>
            <button
              onClick={() => {
                onClose();
                onSchedule(caseData.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>Quero resultados similares</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
