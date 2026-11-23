"use client";

import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { 
  BarChart3, 
  Video, 
  Palette, 
  Cpu, 
  Share2, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  Zap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  'marketing-performance': BarChart3,
  'audiovisual-videos': Video,
  'branding-design': Palette,
  'tech-ai': Cpu,
  'social-media': Share2,
  'growth-consulting': Compass,
};

const accentStyles = {
  'marketing-performance': {
    badge: 'border-sky-500/30 bg-sky-500/10 text-sky-400',
    iconBg: 'bg-sky-500/10 text-sky-400 border-sky-400/20 group-hover:bg-sky-500/20 group-hover:scale-105',
    glow: 'from-sky-500/15 via-blue-600/5 to-transparent',
    borderHover: 'hover:border-sky-500/40 hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.2)]',
    pillCheck: 'text-sky-400',
    colSpan: 'lg:col-span-7',
  },
  'audiovisual-videos': {
    badge: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    iconBg: 'bg-purple-500/10 text-purple-400 border-purple-400/20 group-hover:bg-purple-500/20 group-hover:scale-105',
    glow: 'from-purple-500/15 via-indigo-600/5 to-transparent',
    borderHover: 'hover:border-purple-500/40 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.2)]',
    pillCheck: 'text-purple-400',
    colSpan: 'lg:col-span-5',
  },
  'branding-design': {
    badge: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
    iconBg: 'bg-rose-500/10 text-rose-400 border-rose-400/20 group-hover:bg-rose-500/20 group-hover:scale-105',
    glow: 'from-rose-500/15 via-orange-600/5 to-transparent',
    borderHover: 'hover:border-rose-500/40 hover:shadow-[0_20px_60px_-15px_rgba(244,63,94,0.2)]',
    pillCheck: 'text-rose-400',
    colSpan: 'lg:col-span-5',
  },
  'tech-ai': {
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20 group-hover:bg-emerald-500/20 group-hover:scale-105',
    glow: 'from-emerald-500/15 via-cyan-600/5 to-transparent',
    borderHover: 'hover:border-emerald-500/40 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.2)]',
    pillCheck: 'text-emerald-400',
    colSpan: 'lg:col-span-7',
  },
  'social-media': {
    badge: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    iconBg: 'bg-amber-500/10 text-amber-400 border-amber-400/20 group-hover:bg-amber-500/20 group-hover:scale-105',
    glow: 'from-amber-500/15 via-yellow-600/5 to-transparent',
    borderHover: 'hover:border-amber-500/40 hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.2)]',
    pillCheck: 'text-amber-400',
    colSpan: 'lg:col-span-6',
  },
  'growth-consulting': {
    badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20 group-hover:bg-cyan-500/20 group-hover:scale-105',
    glow: 'from-cyan-500/15 via-blue-600/5 to-transparent',
    borderHover: 'hover:border-cyan-500/40 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)]',
    pillCheck: 'text-cyan-400',
    colSpan: 'lg:col-span-6',
  },
};

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section
      id="servicos"
      className="relative w-full bg-stone-950 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-stone-900 overflow-hidden"
    >
      {/* Background Ambient Lighting (Glows Suaves Sem Travar Rolagem) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-600/10 via-blue-600/10 to-purple-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-emerald-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md shadow-inner">
            <Layers className="w-3.5 h-3.5" />
            <span>Ecossistema do Hub</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            O que fazemos para acelerar o seu negócio.
          </h2>

          <p className="text-sm sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Todas as especialidades do universo digital unificadas em uma estrutura de alto nível: estratégia, conteúdo, tecnologia e execução integrada.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-400" />
              <span>Visão 360° Integrada</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Foco em ROI & Escala</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Execução de Ponta a Ponta</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Glassmorphism Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || Zap;
            const style = accentStyles[service.id] || accentStyles['marketing-performance'];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${style.borderHover} ${style.colSpan}`}
              >
                {/* Radial Lighting Accent on Card Header */}
                <div 
                  className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${style.glow} rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                />

                <div className="relative z-10">
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${style.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border backdrop-blur-md ${style.badge}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables / Entregáveis em Pílulas Glassmorphism */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 block">
                      Entregas & Recursos Inclusos:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables?.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-zinc-300 hover:bg-white/[0.08] hover:border-white/15 transition-all"
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${style.pillCheck}`} />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Highlight & CTA */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-zinc-400 italic max-w-sm line-clamp-2">
                    "{service.highlight}"
                  </span>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-95 shrink-0 group/btn"
                  >
                    <span>Solicitar Solução</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-900 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner de Diagnóstico */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-sky-950/40 via-zinc-900/60 to-purple-950/40 p-8 sm:p-10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Precisa de uma Solução Customizada?</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Não tem certeza de qual especialidade seu negócio precisa primeiro?
            </h4>
            <p className="text-sm text-zinc-400">
              Agende um diagnóstico gratuito de 30 minutos com nossos estrategistas para mapear o funil ideal.
            </p>
          </div>

          <button
            onClick={() => onSelectService("Diagnóstico 360° Gratuito")}
            className="px-8 py-4 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 shrink-0"
          >
            Agendar Diagnóstico Gratuito
          </button>
        </div>

      </div>
    </section>
  );
}
