import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/content';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cases & Portfólio', href: '#portfolio' },
    { name: 'Planos & Preços', href: '#planos' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 shadow-xl py-3.5' 
        : 'bg-zinc-950/60 backdrop-blur-md border-b border-white/10 py-4.5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 text-white flex items-center justify-center font-display font-bold text-sm tracking-wider group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-white leading-none">
              {AGENCY_CONFIG.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
              Hub de Soluções
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenContact()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-200 shadow-xs hover:shadow-md active:scale-95"
          >
            <span>Falar com Especialista</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full text-center text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
