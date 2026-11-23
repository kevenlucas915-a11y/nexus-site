export interface Project {
  id: string;
  title: string;
  client: string;
  category: "Audiovisual" | "Fotografia" | "Branding e Design" | "Marketing e Campanhas" | "Tecnologia e Desenvolvimento" | "Inteligência Artificial";
  categoryKey: string;
  summary: string;
  description: string;
  coverImage: string;
  gallery: string[];
  videoUrl?: string;
  date: string;
  services: string[];
  results?: string;
}

export interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  socials: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export interface Specialty {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: string;
}

export const NEXUS_CONFIG = {
  name: "Nexus Digital",
  tagline: "HUB DE SOLUÇÕES DIGITAIS",
  headlineHero: "NÃO SOMOS APENAS UMA AGÊNCIA. SOMOS O PONTO DE CONEXÃO ENTRE IDEIAS E SOLUÇÕES.",
  subtextHero: "Marketing, criatividade, tecnologia e inteligência digital trabalhando juntos para transformar negócios.",
  aboutHeadline: "MUITO ALÉM DE SERVIÇOS ISOLADOS. UM ECOSSISTEMA DE SOLUÇÕES.",
  aboutText: "A Nexus Digital conecta diferentes especialidades do universo digital em uma única estrutura. Reunimos estratégia, marketing, audiovisual, design, tecnologia e inteligência artificial para desenvolver soluções integradas, de acordo com as necessidades de cada negócio.",
  contactEmail: "nexusdigitalcorp@gmail.com",
  whatsapp: "5521984782381",
  location: "Rio de Janeiro, Brasil",
  year: new Date().getFullYear(),
};

export const FOUNDERS: Founder[] = [
  {
    name: "Keven",
    role: "Co-Founder & Estratégia de Tecnologia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    bio: "Lidera o pilar de inteligência técnica, arquitetura de soluções digitais e automação na Nexus, transformando visões estratégicas em plataformas escaláveis.",
    specialties: ["Engenharia Digital", "Inteligência Artificial", "Arquitetura de Soluções", "Automação"],
    socials: {
      linkedin: "#",
      instagram: "#",
      email: "keven@nexusdigital.hub"
    }
  },
  {
    name: "Gabriel",
    role: "Co-Founder & Direção Criativa e Audiovisual",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    bio: "Responsável pela estética cinematográfica, narrativa visual e direção de arte da Nexus, elevando a identidade de marcas através de filmes e design de alto impacto.",
    specialties: ["Direção Cinematográfica", "Produção Audiovisual", "Direção de Arte", "Branding"],
    socials: {
      linkedin: "#",
      instagram: "#",
      email: "gabriel@nexusdigital.hub"
    }
  },
  {
    name: "Vitória",
    role: "Co-Founder & Gestão e Operações Estratégicas",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    bio: "Conduz o alinhamento operacional do ecossistema, relacionamento com clientes e integração multidisciplinar entre especialistas e entregas de ponta a ponta.",
    specialties: ["Gestão de Ecossistema", "Planejamento Estratégico", "Relacionamento B2B", "Crescimento"],
    socials: {
      linkedin: "#",
      instagram: "#",
      email: "vitoria@nexusdigital.hub"
    }
  }
];

export const ECOSYSTEM_SPECIALTIES: Specialty[] = [
  { id: "1", name: "Marketing Digital", category: "Estratégia", description: "Posicionamento 360° para conectar marcas ao público certo com precisão analítica.", iconName: "Target" },
  { id: "2", name: "Gestão de Redes Sociais", category: "Conteúdo", description: "Narrativas consistentes que constroem autoridade contínua e comunidades engajadas.", iconName: "Share2" },
  { id: "3", name: "Tráfego Pago", category: "Performance", description: "Gestão estratégica de mídia de alta performance com foco em menor CAC e alto ROAS.", iconName: "TrendingUp" },
  { id: "4", name: "Audiovisual", category: "Produção", description: "Filmes publicitários, reels cinematográficos e produções com padrão de estúdio.", iconName: "Video" },
  { id: "5", name: "Fotografia", category: "Visual", description: "Ensaios editoriais, direção de fotos de produto e imagens institucionais impecáveis.", iconName: "Camera" },
  { id: "6", name: "Branding", category: "Identidade", description: "Construção de DNA de marca, propósito e posicionamento de valor inconfundível.", iconName: "Sparkles" },
  { id: "7", name: "Design Gráfico", category: "Visual", description: "Direção de arte sofisticada, materiais conceituais e comunicação estética premium.", iconName: "Palette" },
  { id: "8", name: "Desenvolvimento de Sites", category: "Tech", description: "Plataformas web, landing pages e portais modernos com arquitetura ultrarrápida.", iconName: "Code2" },
  { id: "9", name: "E-commerce", category: "Vendas", description: "Lojas virtuais com UX de ponta estruturadas para escala de pedidos e alta conversão.", iconName: "ShoppingBag" },
  { id: "10", name: "Inteligência Artificial", category: "Inovação", description: "Soluções generativas, análise preditiva e agentes integrados ao fluxo empresarial.", iconName: "Cpu" },
  { id: "11", name: "Automação", category: "Eficiência", description: "Integração entre CRM, canais de atendimento e processos sem intervenção manual.", iconName: "Workflow" },
  { id: "12", name: "Lançamentos Digitais", category: "Crescimento", description: "Estratégias de pico de vendas e esteira de produtos digitais estruturados.", iconName: "Rocket" },
  { id: "13", name: "Produtos Digitais", category: "Inovação", description: "Concepção, prototipagem e desenvolvimento de ferramentas, SaaS e ecossistemas.", iconName: "Layers" },
  { id: "14", name: "Estruturação Comercial", category: "Receita", description: "Desenho de funis de vendas, qualificação de leads e alinhamento com times comerciais.", iconName: "Briefcase" },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "lumina-cinematic-campaign",
    title: "Lumina Vision — Campanha Cinematográfica",
    client: "Lumina Studio",
    category: "Audiovisual",
    categoryKey: "audiovisual",
    summary: "Produção em escala de filme institucional e micro-pílulas com iluminação anamórfica e narrativa envolvente.",
    description: "Desenvolvimento completo desde roteiro, casting, captação em estúdio com lentes de cinema até pós-produção com color grading autoral.",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=1000&q=80"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    date: "2026",
    services: ["Roteiro Original", "Direção de Fotografia", "Color Grading", "Motion Design"],
    results: "Veiculado com alcance de +3M de visualizações orgânicas e premiação em festivais digitais."
  },
  {
    id: "solaris-editorial-photography",
    title: "Coleção Essência — Fotografia & Direção de Arte",
    client: "Solaris Atelier",
    category: "Fotografia",
    categoryKey: "fotografia",
    summary: "Ensaio fotográfico editorial em locação com iluminação natural para marca de design autoral.",
    description: "Direção de arte integrada com styling, fotografia analógica e digital de médio formato, capturando a textura e elegância dos produtos.",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
    ],
    date: "2026",
    services: ["Direção Criativa", "Fotografia de Campanha", "Retoque Editorial", "Lookbook Digital"]
  },
  {
    id: "aurora-brand-system",
    title: "Aurora Lab — Sistema de Identidade Visual",
    client: "Aurora BioTech",
    category: "Branding e Design",
    categoryKey: "branding",
    summary: "Redesenho de marca e guidelines tipográficas para posicionamento de autoridade global.",
    description: "Criação de um sistema visual completo, tipografia proprietária, papelaria premium e aplicações táteis com acabamentos de luxo.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
    ],
    date: "2025",
    services: ["Naming & Estratégia", "Design de Logomarca", "Tipografia", "Brandbook Digital"]
  },
  {
    id: "kronos-growth-campaign",
    title: "Operação Escala — Marketing & Tráfego de Alta Conversão",
    client: "Kronos Performance",
    category: "Marketing e Campanhas",
    categoryKey: "marketing",
    summary: "Campanha multicanal integrada com distribuição paga em Meta Ads, Google Ads e TikTok.",
    description: "Estruturação de funis preditivos com mais de 80 criativos testados simultaneamente para aquisição de clientes qualificados.",
    coverImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
    ],
    date: "2026",
    services: ["Mídia de Performance", "Testes A/B de Criativos", "Copywriting de Resposta Direta", "Painel de BI"]
  },
  {
    id: "nexus-mesh-platform",
    title: "Aura Commerce — Plataforma Headless & Experiência Web",
    client: "Aura Global",
    category: "Tecnologia e Desenvolvimento",
    categoryKey: "tecnologia",
    summary: "Desenvolvimento de e-commerce e portal de experiências com React, Next.js e micro-animações 60 FPS.",
    description: "Interface com tempo de carregamento sub-segundo, checkout otimizado em 1 etapa e transições visuais fluidas em WebGL.",
    coverImage: "https://images.unsplash.com/photo-1550614000-4b95d4ed798a?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550614000-4b95d4ed798a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80"
    ],
    date: "2026",
    services: ["Frontend Moderno", "Arquitetura Headless", "Design System UI/UX", "Otimização Core Web Vitals"]
  },
  {
    id: "cortex-ai-integration",
    title: "Cortex AI — Integração de Agentes & Automação de Dados",
    client: "Synthetix Corp",
    category: "Inteligência Artificial",
    categoryKey: "ia",
    summary: "Implantação de agentes neurais para automação de atendimento de alto nível e geração de insights.",
    description: "Pipeline conectado a bancos vetoriais, LLMs customizados com a base de conhecimento da empresa e automações operacionais no WhatsApp e CRM.",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80"
    ],
    date: "2026",
    services: ["Fine-tuning de LLM", "Automação com Python", "Integração via API", "Dashboards em Tempo Real"]
  }
];

export const TRUSTED_BRANDS = [
  { name: "Apex Dynamics", symbol: "◆" },
  { name: "Vanguard Studio", symbol: "▲" },
  { name: "Synthetix Labs", symbol: "⬡" },
  { name: "Lumina Vision", symbol: "✦" },
  { name: "Aura Global", symbol: "❖" },
  { name: "Kronos Performance", symbol: "◉" },
  { name: "Solaris Collective", symbol: "◈" },
  { name: "Quantum Digital", symbol: "⬢" },
];

export const TESTIMONIALS_DATA = [
  {
    quote: "A Nexus não nos entregou tarefas avulsas: eles integraram tecnologia, vídeo e posicionamento em uma estratégia sólida que reposicionou nossa marca no mercado.",
    author: "Direção de Operações",
    company: "Marca Parceira — Setor de Inovação",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "O nível de sofisticação visual e a velocidade técnica da equipe colocaram nossos lançamentos em um padrão cinematográfico que nunca havíamos alcançado antes.",
    author: "Liderança Criativa",
    company: "Estúdio de Design & Moda",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "Ter um único HUB responsável desde o desenvolvimento da plataforma até o audiovisual e tráfego economizou meses de alinhamento com múltiplos fornecedores.",
    author: "Head de Produto",
    company: "Ecossistema Tech & B2B",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  }
];
