import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from '@/components/ui/glassmorphism-trust-hero';
import Services from './components/Services.jsx';
import ParallaxGallery from '@/components/ui/3d-parallax-unfurling-gallery';
import PricingPlans from './components/PricingPlans';
import Methodology from './components/Methodology.jsx';
import BudgetCalculator from './components/BudgetCalculator.jsx';
import FAQ from './components/FAQ.jsx';
import ContactSection from './components/ContactSection.jsx';
import BeamWordmarkFooter from '@/components/ui/beam-wordmark-footer';
import ContactModal from './components/ContactModal.jsx';
import { MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG } from './data/content';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');

  const handleOpenContact = (serviceName = '') => {
    setPrefilledService(serviceName);
    setIsContactOpen(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const text = encodeURIComponent('Olá Nexus Digital! Vim pelo site oficial e gostaria de agendar uma reunião.');
    window.open(`https://wa.me/${AGENCY_CONFIG.phone}?text=${text}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* 1. Header / Navbar original com visual clean e glassmorphism */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main>
        {/* 2. Hero Section 21st.dev (Glassmorphism Trust Hero) com os textos da Nexus */}
        <HeroSection 
          onExploreEcosystem={() => scrollToSection('servicos')}
          onViewProjects={() => scrollToSection('portfolio')}
        />

        {/* 3. Seção de Serviços & Especialidades do Hub */}
        <Services onSelectService={(service) => handleOpenContact(service)} />

        {/* 4. Galeria Imersiva 3D no rolamento contínuo da página */}
        <ParallaxGallery />

        {/* 5. Planos & Preços (Mensais e Eventos) */}
        <PricingPlans onSelectPlan={(plan) => handleOpenContact(plan)} />

        {/* 6. Metodologia / Processo em 4 Etapas */}
        <Methodology onOpenContact={() => handleOpenContact()} />

        {/* 6. Simulador Interativo de Proposta & Investimento */}
        <BudgetCalculator />

        {/* 7. Perguntas Frequentes (FAQ) */}
        <FAQ />

        {/* 8. Seção Final de Contato & Conversão */}
        <ContactSection onOpenModal={() => handleOpenContact()} />
      </main>

      {/* 11. Footer 21st.dev (Beam Wordmark Footer com feixe de luz interativo e marca NEXUS) */}
      <BeamWordmarkFooter
        brand="NEXUS"
        wordmark="NEXUS DIGITAL"
        company="Nexus Digital Hub"
        year={new Date().getFullYear()}
        background="#050505"
        accent="#38bdf8"
        credits={[
          { lead: "Nexus Digital • ", label: "Rio de Janeiro, Brasil" },
          { lead: "Atendimento comercial: ", label: "nexusdigitalcorp@gmail.com", href: "mailto:nexusdigitalcorp@gmail.com" },
        ]}
      />

      {/* Modal de Contato & Captura de Leads */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        prefilledService={prefilledService} 
      />

      {/* Botão Flutuante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenWhatsAppDirect}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Falar no WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-950 opacity-30"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-stone-950"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Online</span>
        </button>
      </div>
    </div>
  );
}
