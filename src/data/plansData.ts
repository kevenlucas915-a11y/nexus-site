export interface MonthlyPlan {
  id: string;
  number: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  premium?: boolean;
  category: 'starter' | 'growth' | 'elite';
  highlight: string;
  features: string[];
}

export interface EventService {
  name: string;
  price: string;
  duration: string;
  description: string;
  icon: string;
}

export interface EventCombo {
  name: string;
  price: string;
  popular?: boolean;
  complete?: boolean;
  services: string[];
  savings?: string;
}

export const MONTHLY_PLANS: MonthlyPlan[] = [
  {
    id: "plano-01",
    number: "01",
    name: "Presença",
    price: "R$ 500,00",
    period: "/mês",
    category: "starter",
    highlight: "Para quem quer iniciar no digital e manter o feed sempre ativo e profissional.",
    features: [
      "8 artes exclusivas por mês",
      "2 publicações por semana",
      "Planejamento visual alinhado à marca",
      "Design gráfico de alto padrão",
      "Fidelidade mínima de 6 meses"
    ]
  },
  {
    id: "plano-02",
    number: "02",
    name: "Constância",
    price: "R$ 800,00",
    period: "/mês",
    category: "starter",
    highlight: "Consistência de feed aliada ao dinamismo dos vídeos editados semanalmente.",
    features: [
      "12 artes exclusivas por mês (3 por semana)",
      "4 vídeos editados pela Nexus (1 por semana)",
      "Edição dinâmica com motion & legendas",
      "Roteiros e ganchos de retenção",
      "Fidelidade mínima de 6 meses"
    ]
  },
  {
    id: "plano-03",
    number: "03",
    name: "Movimento",
    price: "R$ 1.500,00",
    period: "/mês",
    category: "starter",
    highlight: "O primeiro passo no audiovisual profissional gravado pela própria equipe Nexus.",
    features: [
      "12 artes exclusivas por mês (3 por semana)",
      "4 vídeos editados pela Nexus (1 por semana)",
      "1 Reel gravado presencialmente pela Nexus",
      "Direção de gravação e captação orientada",
      "Fidelidade mínima de 6 meses"
    ]
  },
  {
    id: "plano-04",
    number: "04",
    name: "Crescimento",
    price: "R$ 2.500,00",
    period: "/mês",
    badge: "Mais Escolhido",
    popular: true,
    category: "growth",
    highlight: "O equilíbrio perfeito entre volume, autoridade visual e vídeo institucional de impacto.",
    features: [
      "12 artes exclusivas por mês (3 por semana)",
      "8 vídeos editados pela Nexus (2 por semana)",
      "1 Reel gravado presencialmente pela Nexus",
      "1 Vídeo Institucional gravado pela Nexus",
      "Captação com iluminação e áudio profissional",
      "Fidelidade mínima de 6 meses"
    ]
  },
  {
    id: "plano-05",
    number: "05",
    name: "Produção",
    price: "R$ 3.000,00",
    period: "/mês",
    badge: "Alta Frequência",
    category: "growth",
    highlight: "Volume cinematográfico mensal para dominar os formatos verticais e institucionais.",
    features: [
      "12 artes exclusivas por mês (3 por semana)",
      "4 Reels gravados presencialmente pela Nexus",
      "2 Vídeos Institucionais gravados pela Nexus",
      "Direção criativa de arte e narrativa",
      "Edição com color grading profissional",
      "Fidelidade mínima de 6 meses"
    ]
  },
  {
    id: "plano-06",
    number: "06",
    name: "Visão Aérea",
    price: "R$ 3.500,00",
    period: "/mês",
    category: "growth",
    highlight: "Produção completa aliada a tomadas aéreas com drone para valorizar estrutura e eventos.",
    features: [
      "12 artes exclusivas por mês (3 por semana)",
      "4 Reels gravados presencialmente pela Nexus",
      "2 Vídeos Institucionais gravados pela Nexus",
      "3 usos de drone no mês (takes aéreos 4K)",
      "Captação completa de estrutura física e equipe",
      "Fidelidade mínima de 6 meses"
    ]
  },
  {
    id: "plano-07",
    number: "07",
    name: "Alto Impacto",
    price: "R$ 4.000,00",
    period: "/mês",
    badge: "Audiovisual Master",
    category: "elite",
    highlight: "Para negócios consolidados que exigem cobertura aérea e terrestre contínua.",
    features: [
      "12 artes exclusivas por mês (3 por semana)",
      "4 Reels gravados presencialmente pela Nexus",
      "2 Vídeos Institucionais gravados pela Nexus",
      "6 usos de drone no mês (cobertura aérea expandida)",
      "Direção de fotografia e motion design",
      "Fidelidade mínima de 6 meses"
    ]
  },
  {
    id: "plano-08",
    number: "08",
    name: "Imersão Nexus Premium",
    price: "R$ 5.000,00",
    period: "/mês",
    badge: "Sem Limites • Full Hub",
    premium: true,
    category: "elite",
    highlight: "A Nexus entra na sua empresa como seu time interno de elite para acelerar o crescimento.",
    features: [
      "A Nexus entra na sua empresa e produz o que for preciso",
      "Artes e vídeos sem limite fixo mensal",
      "Estratégia, roteiros e produção completas",
      "Prioridade máxima na agenda da equipe",
      "Acompanhamento direto dos fundadores da Nexus",
      "Para quem quer crescer rápido e liderar o mercado"
    ]
  }
];

export const EVENT_SERVICES: EventService[] = [
  {
    name: "Fotografia Profissional",
    price: "R$ 1.000,00",
    duration: "Até 4 horas de evento",
    description: "Cobertura fotográfica completa com tratamento profissional de cor e entrega em alta resolução.",
    icon: "camera"
  },
  {
    name: "Filmagem Cinematográfica",
    price: "R$ 1.000,00",
    duration: "Até 4 horas de evento",
    description: "Captação de vídeo com câmeras de cinema, sound design e edição dinâmica dos melhores momentos.",
    icon: "video"
  },
  {
    name: "Imagens Aéreas com Drone",
    price: "R$ 1.500,00",
    duration: "Até 4 horas de evento",
    description: "Tomadas aéreas em resolução 4K para valorizar a magnitude do espaço, público e estrutura.",
    icon: "plane"
  },
  {
    name: "Story Maker em Tempo Real",
    price: "R$ 900,00",
    duration: "Até 4 horas de evento",
    description: "Cobertura ao vivo direto nos Stories com entrega rápida durante o próprio evento (não inclui aftermovie).",
    icon: "smartphone"
  }
];

export const EVENT_COMBOS: EventCombo[] = [
  {
    name: "Combo Completo: Os 4 Serviços",
    price: "R$ 3.899,00",
    complete: true,
    popular: true,
    savings: "Economia de R$ 501",
    services: [
      "Fotografia Profissional",
      "Filmagem Cinematográfica",
      "Imagens Aéreas com Drone",
      "Story Maker em Tempo Real"
    ]
  },
  {
    name: "Foto + Filmagem + Drone",
    price: "R$ 3.099,00",
    savings: "Economia de R$ 401",
    services: ["Fotografia", "Filmagem", "Drone"]
  },
  {
    name: "Foto + Drone + Story Maker",
    price: "R$ 2.999,00",
    savings: "Economia de R$ 401",
    services: ["Fotografia", "Drone", "Story Maker"]
  },
  {
    name: "Filmagem + Drone + Story Maker",
    price: "R$ 2.999,00",
    savings: "Economia de R$ 401",
    services: ["Filmagem", "Drone", "Story Maker"]
  },
  {
    name: "Foto + Filmagem + Story Maker",
    price: "R$ 2.499,00",
    savings: "Economia de R$ 401",
    services: ["Fotografia", "Filmagem", "Story Maker"]
  },
  {
    name: "Foto + Drone",
    price: "R$ 2.199,00",
    savings: "Economia de R$ 301",
    services: ["Fotografia", "Drone"]
  },
  {
    name: "Filmagem + Drone",
    price: "R$ 2.199,00",
    savings: "Economia de R$ 301",
    services: ["Filmagem", "Drone"]
  },
  {
    name: "Drone + Story Maker",
    price: "R$ 2.099,00",
    savings: "Economia de R$ 301",
    services: ["Drone", "Story Maker"]
  },
  {
    name: "Foto + Filmagem",
    price: "R$ 1.799,00",
    popular: true,
    savings: "Economia de R$ 201",
    services: ["Fotografia", "Filmagem"]
  },
  {
    name: "Foto + Story Maker",
    price: "R$ 1.699,00",
    savings: "Economia de R$ 201",
    services: ["Fotografia", "Story Maker"]
  },
  {
    name: "Filmagem + Story Maker",
    price: "R$ 1.699,00",
    savings: "Economia de R$ 201",
    services: ["Filmagem", "Story Maker"]
  }
];

export const EVENT_RULES = {
  durationNotice: "Todos os pacotes e combos incluem até 4 horas contínuas de cobertura.",
  extraHourRate: "Hora adicional: acréscimo de 20% sobre o valor por hora contratada.",
  storyMakerNote: "O serviço de Story Maker é voltado para posts em tempo real e não inclui edição de aftermovie."
};
