import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            O que dizem os líderes que escalam com a Nexus.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-stone-300 mb-4" />
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-stone-200"
                />
                <div>
                  <h4 className="font-bold text-sm text-stone-900 leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {t.role} • <span className="text-stone-700 font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
