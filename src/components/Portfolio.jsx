import React, { useState } from 'react';
import { PORTFOLIO_CASES } from '../data/content';
import { ArrowUpRight, TrendingUp, Filter, Sparkles } from 'lucide-react';

export default function Portfolio({ onOpenCase, onOpenGallery }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'Todos os Cases' },
    { key: 'videos', label: 'Reels & Vídeos' },
    { key: 'gestao', label: 'Gestão & Posicionamento' },
    { key: 'conteudo', label: 'Conteúdo Educativo' },
    { key: 'campanhas', label: 'Campanhas & Tráfego' },
  ];

  const filteredCases = activeFilter === 'all' 
    ? PORTFOLIO_CASES 
    : PORTFOLIO_CASES.filter(c => c.categoryKey === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Casos Reais & Portfólio
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Resultados comprovados que geraram autoridade e vendas.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-sm sm:text-base text-stone-500 max-w-sm">
              Não acreditamos em métricas de vaidade. Cada case abaixo representou crescimento real.
            </p>
            {onOpenGallery && (
              <button
                onClick={onOpenGallery}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Abrir Galeria Imersiva 3D</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === cat.key
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenCase(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-stone-50 border border-stone-200/90 hover:border-stone-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Metric Overlay */}
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Highlight metric badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900/85 backdrop-blur-md text-white text-xs font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.metricHighlight}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-stone-300 font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-stone-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-stone-700">
                <span>Ver Case Completo</span>
                <div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
