import React from "react";
import MeshDriftBackground from "./MeshDriftBackground";
import { 
  ArrowRight, 
  Play, 
  Target, 
  Crown, 
  Star
} from "lucide-react";

// --- CLIENT BRANDS (Marcas e Criadores que acreditaram) ---
const CLIENT_BRANDS = [
  { 
    name: "Kaio do José Luiz do Posto", 
    role: "Vereador & Liderança", 
    logo: "/logos/kaio-vereador.png", 
    heightClass: "h-7 sm:h-8" 
  },
  { 
    name: "Claredents", 
    role: "Clínica Odontológica", 
    logo: "/logos/claredents.png", 
    heightClass: "h-6 sm:h-7" 
  },
  { 
    name: "Rede Dimocostas", 
    role: "Varejo & Serviços", 
    logo: "/logos/dimocostas.png", 
    heightClass: "h-8 sm:h-9" 
  },
  { 
    name: "Chinezinho", 
    role: "Gastronomia & Marca", 
    logo: "/logos/chinezinho.png", 
    heightClass: "h-7 sm:h-8" 
  },
  { 
    name: "Over Black", 
    role: "Moda & Lifestyle", 
    logo: "/logos/over-black.png", 
    heightClass: "h-7 sm:h-8" 
  },
  { 
    name: "Galpão do Samba", 
    role: "Música & Eventos", 
    logo: "/logos/galpao-do-samba.png", 
    heightClass: "h-8 sm:h-9" 
  },
  { 
    name: "Naissin Paixão", 
    role: "Cantor & Artista", 
    logo: "/logos/naissin-paixao.png", 
    heightClass: "h-6 sm:h-7" 
  },
  { 
    name: "DGE", 
    role: "Empresarial & Gestão", 
    logo: "/logos/dge.png", 
    heightClass: "h-7 sm:h-8" 
  },
  { 
    name: "Bia Music", 
    role: "Produção Musical", 
    logo: "/logos/bia-music.png", 
    heightClass: "h-8 sm:h-9" 
  },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection({ onExploreEcosystem, onViewProjects }: { onExploreEcosystem?: () => void; onViewProjects?: () => void }) {
  return (
    <div id="inicio" className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 32s linear infinite; /* Slower for readability */
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Animated WebGL Shader Background ("Mesh drift") com Efeito Blur Preto e Branco & Gradientes */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
        }}
      >
        {/* Camada do Shader WebGL com Filtro Blur e Preto & Branco Intenso */}
        <div className="absolute inset-0 filter blur-[45px] sm:blur-[75px] scale-125 grayscale contrast-125 opacity-90 will-change-transform">
          <MeshDriftBackground />
        </div>

        {/* Gradiente de Iluminação Radial (Destaque Suave de Luz) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 35% 40%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)",
          }}
        />

        {/* Gradiente Vignette Cinematográfico */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 35%, rgba(9, 9, 11, 0.5) 75%, rgba(9, 9, 11, 0.95) 100%)",
          }}
        />

        {/* Gradiente Superior para Contraste do Navbar */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950/80 via-zinc-950/30 to-transparent pointer-events-none" />

        {/* Gradiente Inferior para Transição Suave com o Restante do Site */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
            
            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <img src="/nexus-symbol.png" alt="Nexus" className="w-3.5 h-3.5 object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  Nexus Digital • Hub de Soluções
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            </div>

            {/* Heading Oficial */}
            <h1 
              className="animate-fade-in delay-200 text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.95] uppercase"
              style={{
                maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)"
              }}
            >
              SOMOS O ELO QUE UNE EMPRESAS<br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                A UM FUTURO DE
              </span><br />
              OPORTUNIDADES DIGITAIS.
            </h1>

            {/* Description Oficial */}
            <p className="animate-fade-in delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
              Marketing, criatividade, tecnologia e inteligência digital trabalhando juntos para transformar negócios.
            </p>

            {/* CTA Buttons Oficiais */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <a 
                href="#solucoes"
                onClick={onExploreEcosystem}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
              >
                Explore nosso ecossistema
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#portfolio"
                onClick={onViewProjects}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
              >
                <Play className="w-4 h-4 fill-current" />
                Conheça nossos projetos
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            
            {/* Stats Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">150+</div>
                    <div className="text-sm text-zinc-400">Projetos & Soluções Entregues</div>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Satisfação dos Clientes</span>
                    <span className="text-white font-medium">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-white to-zinc-400" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="14+" label="Especialidades" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="360°" label="Visão Hub" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="100%" label="Execução" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    HUB ATIVO
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <Crown className="w-3 h-3 text-yellow-500" />
                    PREMIUM ECOSYSTEM
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card / Marcas e Criadores que acreditaram */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-7 sm:py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-300">
                Marcas e Criadores que acreditaram
              </h3>
              
              <div 
                className="relative flex overflow-hidden py-1"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 sm:gap-14 whitespace-nowrap px-4 items-center">
                  {[...CLIENT_BRANDS, ...CLIENT_BRANDS].map((client, i) => (
                    <div 
                      key={`${client.name}-${i}`}
                      className="flex items-center justify-center px-2 py-1 opacity-75 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer shrink-0 group"
                      title={client.name}
                    >
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className={`${client.heightClass} w-auto max-w-[130px] sm:max-w-[155px] object-contain transition-all filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)] group-hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
