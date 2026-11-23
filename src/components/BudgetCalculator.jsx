"use client";

import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Calendar, 
  Video, 
  Camera, 
  Plane, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  Crown, 
  CheckCircle2,
  Flame,
  Info
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/content';
import { MONTHLY_PLANS, EVENT_COMBOS, EVENT_RULES } from '../data/plansData';

export default function BudgetCalculator() {
  const [calculatorType, setCalculatorType] = useState('monthly');

  // Estado para Planos Mensais (Index de 0 a 7 nos 8 planos oficiais)
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(3); // Default no Plano 04 (Mais Escolhido)

  // Estado para Eventos (Checkboxes dos 4 serviços)
  const [eventServices, setEventServices] = useState({
    foto: true,
    video: true,
    drone: false,
    story: false
  });

  const currentMonthlyPlan = MONTHLY_PLANS[selectedPlanIndex] || MONTHLY_PLANS[3];

  // Cálculo e identificação do valor oficial para eventos
  const calculateEventPricing = () => {
    const { foto, video, drone, story } = eventServices;
    const selectedCount = [foto, video, drone, story].filter(Boolean).length;

    if (selectedCount === 0) {
      return {
        price: 'R$ 0,00',
        numericPrice: 0,
        originalPrice: 0,
        savings: null,
        title: 'Selecione ao menos 1 serviço',
        isCombo: false,
        isComplete: false
      };
    }

    // Todos os 4 selecionados -> Combo Completo Oficial
    if (foto && video && drone && story) {
      return {
        price: 'R$ 3.899,00',
        numericPrice: 3899,
        originalPrice: 4400,
        savings: 'Economia de R$ 501,00',
        title: 'Combo Completo: Os 4 Serviços',
        isCombo: true,
        isComplete: true
      };
    }

    // 3 Serviços Selecionados
    if (foto && video && drone) {
      return {
        price: 'R$ 3.099,00',
        numericPrice: 3099,
        originalPrice: 3500,
        savings: 'Economia de R$ 401,00',
        title: 'Combo: Foto + Filmagem + Drone',
        isCombo: true,
        isComplete: false
      };
    }
    if (foto && drone && story) {
      return {
        price: 'R$ 2.999,00',
        numericPrice: 2999,
        originalPrice: 3400,
        savings: 'Economia de R$ 401,00',
        title: 'Combo: Foto + Drone + Story Maker',
        isCombo: true,
        isComplete: false
      };
    }
    if (video && drone && story) {
      return {
        price: 'R$ 2.999,00',
        numericPrice: 2999,
        originalPrice: 3400,
        savings: 'Economia de R$ 401,00',
        title: 'Combo: Filmagem + Drone + Story Maker',
        isCombo: true,
        isComplete: false
      };
    }
    if (foto && video && story) {
      return {
        price: 'R$ 2.499,00',
        numericPrice: 2499,
        originalPrice: 2900,
        savings: 'Economia de R$ 401,00',
        title: 'Combo: Foto + Filmagem + Story Maker',
        isCombo: true,
        isComplete: false
      };
    }

    // 2 Serviços Selecionados
    if (foto && drone) {
      return {
        price: 'R$ 2.199,00',
        numericPrice: 2199,
        originalPrice: 2500,
        savings: 'Economia de R$ 301,00',
        title: 'Combo: Foto + Drone',
        isCombo: true,
        isComplete: false
      };
    }
    if (video && drone) {
      return {
        price: 'R$ 2.199,00',
        numericPrice: 2199,
        originalPrice: 2500,
        savings: 'Economia de R$ 301,00',
        title: 'Combo: Filmagem + Drone',
        isCombo: true,
        isComplete: false
      };
    }
    if (drone && story) {
      return {
        price: 'R$ 2.099,00',
        numericPrice: 2099,
        originalPrice: 2400,
        savings: 'Economia de R$ 301,00',
        title: 'Combo: Drone + Story Maker',
        isCombo: true,
        isComplete: false
      };
    }
    if (foto && video) {
      return {
        price: 'R$ 1.799,00',
        numericPrice: 1799,
        originalPrice: 2000,
        savings: 'Economia de R$ 201,00',
        title: 'Combo: Foto + Filmagem',
        isCombo: true,
        isComplete: false
      };
    }
    if (foto && story) {
      return {
        price: 'R$ 1.699,00',
        numericPrice: 1699,
        originalPrice: 1900,
        savings: 'Economia de R$ 201,00',
        title: 'Combo: Foto + Story Maker',
        isCombo: true,
        isComplete: false
      };
    }
    if (video && story) {
      return {
        price: 'R$ 1.699,00',
        numericPrice: 1699,
        originalPrice: 1900,
        savings: 'Economia de R$ 201,00',
        title: 'Combo: Filmagem + Story Maker',
        isCombo: true,
        isComplete: false
      };
    }

    // Apenas 1 Serviço Avulso Selecionado
    if (foto) return { price: 'R$ 1.000,00', numericPrice: 1000, originalPrice: 1000, savings: null, title: 'Fotografia Profissional (Avulso)', isCombo: false, isComplete: false };
    if (video) return { price: 'R$ 1.000,00', numericPrice: 1000, originalPrice: 1000, savings: null, title: 'Filmagem Cinematográfica (Avulso)', isCombo: false, isComplete: false };
    if (drone) return { price: 'R$ 1.500,00', numericPrice: 1500, originalPrice: 1500, savings: null, title: 'Imagens Aéreas com Drone (Avulso)', isCombo: false, isComplete: false };
    if (story) return { price: 'R$ 900,00', numericPrice: 900, originalPrice: 900, savings: null, title: 'Story Maker em Tempo Real (Avulso)', isCombo: false, isComplete: false };

    return { price: 'R$ 0,00', numericPrice: 0, originalPrice: 0, savings: null, title: '', isCombo: false, isComplete: false };
  };

  const eventCalculation = calculateEventPricing();

  const handleSendWhatsApp = () => {
    let text = '';

    if (calculatorType === 'monthly') {
      text = `Olá time Nexus! Fiz uma simulação no site com base nos planos oficiais:%0A%0A` +
        `• Plano Selecionado: Plano ${currentMonthlyPlan.number} — ${currentMonthlyPlan.name}%0A` +
        `• Investimento Oficial: ${currentMonthlyPlan.price}/mês%0A` +
        `• Período: Fidelidade mínima de 6 meses%0A` +
        `• Recursos Inclusos:%0A` +
        currentMonthlyPlan.features.map(f => `  - ${f}`).join('%0A') + `%0A%0A` +
        `Gostaria de agendar uma conversa para fechar a contratação.`;
    } else {
      const servicesList = [
        eventServices.foto && 'Fotografia',
        eventServices.video && 'Filmagem',
        eventServices.drone && 'Drone',
        eventServices.story && 'Story Maker'
      ].filter(Boolean).join(' + ');

      text = `Olá time Nexus! Montei uma simulação de cobertura de evento no site:%0A%0A` +
        `• Formato: ${eventCalculation.title}%0A` +
        `• Serviços Inclusos: ${servicesList}%0A` +
        `• Duração: Até 4 horas de evento%0A` +
        `• Investimento Oficial: ${eventCalculation.price}` + 
        (eventCalculation.savings ? ` (${eventCalculation.savings})` : '') + `%0A%0A` +
        `Gostaria de consultar disponibilidade de data na agenda da Nexus.`;
    }

    window.open(`https://wa.me/${AGENCY_CONFIG.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="simulador" className="py-24 sm:py-32 bg-stone-950 text-white border-t border-stone-900 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-sky-400" />
            <span>Valores 100% Alinhados à Tabela Oficial</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Simulador de Proposta & Investimento
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-2xl mx-auto">
            Selecione o escopo que seu negócio precisa e visualize a proposta exata correspondente à nossa tabela de planos e eventos.
          </p>

          {/* Switcher Mensal vs Eventos */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setCalculatorType('monthly')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                calculatorType === 'monthly'
                  ? 'bg-white text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Simular Plano Mensal</span>
            </button>

            <button
              onClick={() => setCalculatorType('event')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                calculatorType === 'event'
                  ? 'bg-white text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Simular Cobertura de Evento</span>
            </button>
          </div>
        </div>

        {/* Card Principal do Simulador */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ========================================================================= */}
          {/* COLUNA ESQUERDA: OPÇÕES E SELEÇÃO */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* 1. MODO PLANO MENSAL */}
            {calculatorType === 'monthly' && (
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Escolha o nível de atuação mensal da Nexus:</span>
                    </label>
                    <span className="text-xs text-sky-400 font-semibold">
                      8 Planos Oficiais
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-4">
                    Arraste ou clique no plano ideal para o tamanho atual e ambição da sua empresa:
                  </p>

                  {/* Grid de Seleção Rápida dos 8 Planos */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {MONTHLY_PLANS.map((plan, idx) => {
                      const isSelected = selectedPlanIndex === idx;
                      return (
                        <button
                          key={plan.id}
                          onClick={() => setSelectedPlanIndex(idx)}
                          className={`p-3 rounded-2xl border text-left transition-all duration-200 relative flex flex-col justify-between ${
                            isSelected
                              ? 'border-sky-400 bg-sky-500/20 shadow-lg shadow-sky-500/10'
                              : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          {plan.popular && (
                            <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-full bg-sky-400 text-zinc-950 text-[9px] font-extrabold uppercase">
                              Top
                            </span>
                          )}
                          {plan.premium && (
                            <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-full bg-amber-400 text-zinc-950 text-[9px] font-extrabold uppercase">
                              VIP
                            </span>
                          )}
                          <div>
                            <span className="text-[10px] font-mono font-bold text-zinc-400 block">
                              Plano {plan.number}
                            </span>
                            <div className="text-xs font-bold text-white leading-tight truncate">
                              {plan.name}
                            </div>
                          </div>
                          <div className="text-xs font-extrabold text-sky-300 mt-2">
                            {plan.price}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Resumo do Plano Selecionado */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Resumo da Entrega Mensal:
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Fidelidade mínima 6 meses
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed italic">
                    "{currentMonthlyPlan.highlight}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {currentMonthlyPlan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. MODO EVENTOS */}
            {calculatorType === 'event' && (
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-white">
                      Monte os serviços que você precisa no evento:
                    </label>
                    <span className="text-xs text-sky-400 font-semibold">
                      Até 4 Horas
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-4">
                    Marque os serviços desejados. O desconto do combo oficial será aplicado automaticamente:
                  </p>

                  {/* Checkboxes dos 4 Serviços */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Fotografia */}
                    <div
                      onClick={() => setEventServices({...eventServices, foto: !eventServices.foto})}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                        eventServices.foto
                          ? 'border-sky-400 bg-sky-500/15 shadow-sm'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sky-400">
                          <Camera className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Fotografia</div>
                          <div className="text-xs text-zinc-400">Avulso: R$ 1.000,00</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        eventServices.foto ? 'bg-sky-400 text-zinc-950' : 'border border-zinc-600'
                      }`}>
                        {eventServices.foto && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    {/* Filmagem */}
                    <div
                      onClick={() => setEventServices({...eventServices, video: !eventServices.video})}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                        eventServices.video
                          ? 'border-purple-400 bg-purple-500/15 shadow-sm'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-purple-400">
                          <Video className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Filmagem</div>
                          <div className="text-xs text-zinc-400">Avulso: R$ 1.000,00</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        eventServices.video ? 'bg-purple-400 text-zinc-950' : 'border border-zinc-600'
                      }`}>
                        {eventServices.video && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    {/* Drone */}
                    <div
                      onClick={() => setEventServices({...eventServices, drone: !eventServices.drone})}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                        eventServices.drone
                          ? 'border-emerald-400 bg-emerald-500/15 shadow-sm'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                          <Plane className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Imagens com Drone</div>
                          <div className="text-xs text-zinc-400">Avulso: R$ 1.500,00</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        eventServices.drone ? 'bg-emerald-400 text-zinc-950' : 'border border-zinc-600'
                      }`}>
                        {eventServices.drone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    {/* Story Maker */}
                    <div
                      onClick={() => setEventServices({...eventServices, story: !eventServices.story})}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                        eventServices.story
                          ? 'border-amber-400 bg-amber-500/15 shadow-sm'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Story Maker ao Vivo</div>
                          <div className="text-xs text-zinc-400">Avulso: R$ 900,00</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        eventServices.story ? 'bg-amber-400 text-zinc-950' : 'border border-zinc-600'
                      }`}>
                        {eventServices.story && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Observações de Evento */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-zinc-400 space-y-1">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span>{EVENT_RULES.durationNotice}</span>
                  </div>
                  <p>{EVENT_RULES.extraHourRate}</p>
                  <p>{EVENT_RULES.storyMakerNote}</p>
                </div>
              </div>
            )}

          </div>

          {/* ========================================================================= */}
          {/* COLUNA DIREITA: RESULTADO DA ESTIMATIVA */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-zinc-900 to-zinc-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            
            <div>
              {/* Badge Topo */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {calculatorType === 'monthly' ? 'Investimento Oficial Mensal' : 'Investimento Oficial de Evento'}
                </span>

                {calculatorType === 'monthly' && currentMonthlyPlan.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-400/20 text-sky-300 border border-sky-400/30">
                    {currentMonthlyPlan.badge}
                  </span>
                )}

                {calculatorType === 'event' && eventCalculation.savings && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    {eventCalculation.savings}
                  </span>
                )}
              </div>

              {/* Título do Pacote Calculado */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                {calculatorType === 'monthly' 
                  ? `Plano ${currentMonthlyPlan.number} — ${currentMonthlyPlan.name}` 
                  : (eventCalculation.title || 'Selecione os Serviços')
                }
              </h3>

              {/* Valor Oficial em Destaque */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                    {calculatorType === 'monthly' ? currentMonthlyPlan.price : eventCalculation.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {calculatorType === 'monthly' ? '/mês' : '(até 4h)'}
                  </span>
                </div>

                {/* Preço de comparação se for combo de evento */}
                {calculatorType === 'event' && eventCalculation.savings && (
                  <div className="text-xs text-zinc-400 mt-1 flex items-center gap-2">
                    <span className="line-through">De R$ {eventCalculation.originalPrice.toLocaleString('pt-BR')},00</span>
                    <span className="text-emerald-400 font-semibold">{eventCalculation.savings}</span>
                  </div>
                )}
              </div>

              {/* Checklist de Itens Inclusos */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                  Entregas Confirmadas:
                </span>

                {calculatorType === 'monthly' ? (
                  <div className="space-y-1.5">
                    {currentMonthlyPlan.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Cobertura de até 4 horas contínuas</span>
                    </div>
                    {eventServices.foto && (
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Fotografia profissional tratada em alta resolução</span>
                      </div>
                    )}
                    {eventServices.video && (
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>Captação de vídeo com edição cinematográfica</span>
                      </div>
                    )}
                    {eventServices.drone && (
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Tomadas aéreas em resolução 4K com drone</span>
                      </div>
                    )}
                    {eventServices.story && (
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Cobertura de Stories em tempo real durante o evento</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Botão de Envio para WhatsApp */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>
                  {calculatorType === 'monthly' ? 'Contratar Este Plano no WhatsApp' : 'Reservar Data no WhatsApp'}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
