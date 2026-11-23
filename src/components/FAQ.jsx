import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { Plus, Minus, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-stone-700" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 bg-stone-50 hover:bg-stone-100/80 transition-colors"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-stone-900">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-700">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 bg-white border-t border-stone-100 text-sm sm:text-base text-stone-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
