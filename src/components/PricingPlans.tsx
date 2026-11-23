"use client";

import React, { useState } from 'react';
import { 
  MONTHLY_PLANS, 
  EVENT_SERVICES, 
  EVENT_COMBOS, 
  EVENT_RULES, 
  MonthlyPlan 
} from '../data/plansData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Crown, 
  Calendar, 
  Camera, 
  Video, 
  Plane, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  Zap,
  Flame,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PricingPlansProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  const [activeMainTab, setActiveMainTab] = useState<'monthly' | 'events'>('monthly');
  const [monthlyCategory, setMonthlyCategory] = useState<'all' | 'starter' | 'growth' | 'elite'>('all');
  const [eventView, setEventView] = useState<'combos' | 'individual'>('combos');

  const filteredMonthlyPlans = monthlyCategory === 'all' 
    ? MONTHLY_PLANS 
    : MONTHLY_PLANS.filter(p => p.category === monthlyCategory);

  return (
    <section 
      id="planos" 
      className="relative w-full bg-stone-950 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-stone-900 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-sky-600/10 via-emerald-600/10 to-purple-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-sky-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investimento & Escala</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Planos transparentes para transformar seu posicionamento.
          </h2>

          <p className="text-sm sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Escolha entre nossa recorrência mensal completa ou contrate a cobertura sob medida para o seu evento.
          </p>

          {/* Main Switcher: Mensal vs. Eventos */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <button
              onClick={() => setActiveMainTab('monthly')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeMainTab === 'monthly'
                  ? 'bg-white text-zinc-950 shadow-lg scale-100'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Planos Mensais (Recorrência)</span>
            </button>

            <button
              onClick={() => setActiveMainTab('events')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeMainTab === 'events'
                  ? 'bg-white text-zinc-950 shadow-lg scale-100'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Cobertura de Eventos</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ABA 1: PLANOS MENSAIS */}
        {/* ========================================================================= */}
        {activeMainTab === 'monthly' && (
          <div>
            {/* Sub-filtros por estágio do negócio */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {[
                { id: 'all', label: 'Todos os 8 Planos' },
                { id: 'starter', label: 'Presença & Conteúdo (01 a 03)' },
                { id: 'growth', label: 'Audiovisual & Drone (04 a 06)' },
                { id: 'elite', label: 'Alto Impacto & Imersão (07 e 08)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMonthlyCategory(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    monthlyCategory === tab.id
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-sm'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Aviso de Fidelidade */}
            <div className="flex items-center justify-center gap-2 mb-8 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Fidelidade mínima de 6 meses em todos os planos mensais com planejamento estratégico contínuo.</span>
            </div>

            {/* Grid dos Planos Mensais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {filteredMonthlyPlans.map((plan, index) => {
                const isPopular = plan.popular;
                const isPremium = plan.premium;

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 ${
                      isPremium
                        ? 'border-2 border-amber-400/50 bg-gradient-to-b from-amber-950/20 via-zinc-900/90 to-zinc-950/95 shadow-[0_20px_50px_-15px_rgba(245,158,11,0.25)] hover:border-amber-400'
                        : isPopular
                        ? 'border-2 border-sky-400/60 bg-gradient-to-b from-sky-950/25 via-zinc-900/90 to-zinc-950/95 shadow-[0_20px_50px_-15px_rgba(56,189,248,0.3)] hover:border-sky-400'
                        : 'border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    {/* Badge de Destaque */}
                    {plan.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg ${
                          isPremium 
                            ? 'bg-amber-400 text-zinc-950' 
                            : 'bg-sky-400 text-zinc-950'
                        }`}>
                          {isPremium ? <Crown className="w-3 h-3 fill-current" /> : <Flame className="w-3 h-3 fill-current" />}
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-3 mt-1">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
                          Plano {plan.number}
                        </span>
                        {isPopular && (
                          <span className="text-[10px] text-sky-400 uppercase tracking-wider font-semibold">
                            Recomendado
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-2">
                        {plan.name}
                      </h3>

                      <p className="text-xs text-zinc-400 leading-relaxed mb-6 min-h-[36px]">
                        {plan.highlight}
                      </p>

                      {/* Preço */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {plan.price}
                          </span>
                          <span className="text-xs text-zinc-400 font-medium">
                            {plan.period}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-500 block mt-1">
                          Fidelidade mínima de 6 meses
                        </span>
                      </div>

                      {/* Lista de Entregáveis */}
                      <div className="space-y-3 mb-8">
                        <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                          O que está incluso:
                        </span>
                        <ul className="space-y-2.5">
                          {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isPremium ? 'text-amber-400' : isPopular ? 'text-sky-400' : 'text-emerald-400'
                              }`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Botão de Contratação */}
                    <button
                      onClick={() => onSelectPlan(`Plano ${plan.number} — ${plan.name} (${plan.price}/mês)`)}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-md ${
                        isPremium
                          ? 'bg-amber-400 text-zinc-950 hover:bg-amber-300 hover:shadow-amber-400/20'
                          : isPopular
                          ? 'bg-sky-400 text-zinc-950 hover:bg-sky-300 hover:shadow-sky-400/20'
                          : 'bg-white text-zinc-950 hover:bg-zinc-200'
                      }`}
                    >
                      <span>Contratar Plano</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* ABA 2: COBERTURA DE EVENTOS */}
        {/* ========================================================================= */}
        {activeMainTab === 'events' && (
          <div>
            {/* Switcher: Combos vs Avulsos */}
            <div className="flex justify-center gap-3 mb-10">
              <button
                onClick={() => setEventView('combos')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  eventView === 'combos'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-sm'
                    : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                Combos com Desconto (Até R$ 500 OFF)
              </button>
              <button
                onClick={() => setEventView('individual')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  eventView === 'individual'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-sm'
                    : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                Serviços Individuais (Avulsos)
              </button>
            </div>

            {/* Aviso de Duração de Eventos */}
            <div className="max-w-2xl mx-auto rounded-2xl bg-white/[0.03] border border-white/10 p-4 mb-10 flex items-center gap-3 text-xs text-zinc-400">
              <Clock className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <strong className="text-white block">{EVENT_RULES.durationNotice}</strong>
                <span>{EVENT_RULES.extraHourRate} • {EVENT_RULES.storyMakerNote}</span>
              </div>
            </div>

            {/* VIEW DE COMBOS */}
            {eventView === 'combos' && (
              <div className="space-y-6">
                
                {/* Super Card: Combo Completo */}
                {EVENT_COMBOS.filter(c => c.complete).map((combo) => (
                  <motion.div
                    key={combo.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-3xl p-8 sm:p-10 border-2 border-emerald-400/60 bg-gradient-to-r from-emerald-950/30 via-zinc-900/90 to-sky-950/30 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] flex flex-col lg:flex-row items-center justify-between gap-8"
                  >
                    <div className="absolute -top-3.5 left-8">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-400 text-zinc-950 shadow-lg">
                        <Crown className="w-3.5 h-3.5 fill-current" />
                        Mais Completo & Econômico
                      </span>
                    </div>

                    <div className="max-w-xl text-center lg:text-left">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 block">
                        Cobertura 360° do Evento
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                        {combo.name}
                      </h3>
                      <p className="text-sm text-zinc-300 mb-6">
                        Todos os 4 serviços da Nexus integrados para eternizar seu evento em todas as plataformas com a máxima qualidade visual.
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {combo.services.map((s, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{s}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-3 shrink-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
                        {combo.savings}
                      </span>
                      <div className="text-center lg:text-right">
                        <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                          {combo.price}
                        </div>
                        <span className="text-xs text-zinc-400">Até 4 horas de evento</span>
                      </div>
                      <button
                        onClick={() => onSelectPlan(`Combo Completo de Eventos: 4 Serviços (${combo.price})`)}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mt-2"
                      >
                        <span>Reservar Combo Completo</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}

                {/* Grid dos outros combos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                  {EVENT_COMBOS.filter(c => !c.complete).map((combo, idx) => (
                    <div
                      key={idx}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl p-6 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                            Combo até 4h
                          </span>
                          {combo.savings && (
                            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              {combo.savings}
                            </span>
                          )}
                        </div>

                        <h4 className="font-display text-xl font-bold text-white tracking-tight mb-4">
                          {combo.name}
                        </h4>

                        <div className="space-y-2 mb-6">
                          {combo.services.map((item, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <div>
                          <span className="text-2xl font-bold text-white tracking-tight">
                            {combo.price}
                          </span>
                          <span className="text-[10px] text-zinc-400 block">4 horas inclusas</span>
                        </div>

                        <button
                          onClick={() => onSelectPlan(`Combo de Evento: ${combo.name} (${combo.price})`)}
                          className="px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm active:scale-95"
                        >
                          Reservar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW DE SERVIÇOS INDIVIDUAIS */}
            {eventView === 'individual' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {EVENT_SERVICES.map((service, idx) => {
                  const getIcon = () => {
                    switch (service.icon) {
                      case 'camera': return <Camera className="w-6 h-6 text-sky-400" />;
                      case 'video': return <Video className="w-6 h-6 text-purple-400" />;
                      case 'plane': return <Plane className="w-6 h-6 text-emerald-400" />;
                      case 'smartphone': return <Smartphone className="w-6 h-6 text-amber-400" />;
                      default: return <Camera className="w-6 h-6 text-white" />;
                    }
                  };

                  return (
                    <div
                      key={idx}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                          {getIcon()}
                        </div>

                        <h4 className="font-display text-lg font-bold text-white tracking-tight mb-2">
                          {service.name}
                        </h4>

                        <span className="inline-block text-[11px] text-sky-400 font-medium mb-3">
                          {service.duration}
                        </span>

                        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <span className="text-2xl font-bold text-white tracking-tight">
                          {service.price}
                        </span>

                        <button
                          onClick={() => onSelectPlan(`Serviço de Evento: ${service.name} (${service.price})`)}
                          className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm active:scale-95"
                        >
                          Contratar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
