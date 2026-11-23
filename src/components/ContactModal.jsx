import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Mail, Phone } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/content';

export default function ContactModal({ isOpen, onClose, prefilledService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    instagram: '',
    service: prefilledService || 'Gestão Estratégica de Redes Sociais',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Also build a quick WhatsApp link redirection option
    const text = `Olá time Nexus! Me chamo ${formData.name} (${formData.company || 'Marca'}).%0A%0A` +
      `• Instagram: ${formData.instagram || 'Não informado'}%0A` +
      `• Serviço de interesse: ${formData.service}%0A` +
      `• WhatsApp para contato: ${formData.whatsapp}%0A` +
      (formData.message ? `• Mensagem: ${formData.message}%0A%0A` : '%0A') +
      `Gostaria de agendar uma conversa para receber uma proposta.`;

    setTimeout(() => {
      window.open(`https://wa.me/${AGENCY_CONFIG.phone}?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 p-6 sm:p-10 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-stone-900">
              Solicitação Enviada com Sucesso!
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Estamos te redirecionando para o WhatsApp do nosso time para agilizar seu atendimento. Em breve retornaremos!
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold uppercase tracking-wider"
            >
              Fechar Janela
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Diagnóstico Gratuito
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mt-1">
                Vamos acelerar os resultados da sua marca?
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Preencha os dados abaixo para receber uma análise preliminar e proposta personalizada.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Nome da Empresa / Marca</label>
                  <input
                    type="text"
                    placeholder="Ex: Lumina Care"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">WhatsApp com DDD *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Instagram (@)</label>
                  <input
                    type="text"
                    placeholder="@suamarca"
                    value={formData.instagram}
                    onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Serviço de Maior Interesse</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                >
                  {formData.service && ![
                    "Gestão Estratégica de Redes Sociais",
                    "Produção de Vídeos Curtos & Reels",
                    "Identidade Visual & Direção de Arte",
                    "Tráfego Pago & Distribuição",
                    "Pacote Completo (Full Service)"
                  ].includes(formData.service) && (
                    <option value={formData.service}>{formData.service}</option>
                  )}
                  <option value="Gestão Estratégica de Redes Sociais">Gestão Estratégica de Redes Sociais</option>
                  <option value="Produção de Vídeos Curtos & Reels">Produção de Vídeos Curtos & Reels</option>
                  <option value="Identidade Visual & Direção de Arte">Identidade Visual & Direção de Arte</option>
                  <option value="Tráfego Pago & Distribuição">Tráfego Pago & Distribuição</option>
                  <option value="Pacote Completo (Full Service)">Pacote Completo (Full Service)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Qual o principal desafio atual da sua marca?</label>
                <textarea
                  rows="2"
                  placeholder="Ex: Falta de consistência, vídeos com pouca visualização, dificuldade de converter seguidores em clientes..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span>Solicitar Proposta no WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
