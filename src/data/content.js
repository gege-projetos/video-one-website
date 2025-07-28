import { Camera, Video, Instagram, Globe, TrendingUp, Play, Zap } from 'lucide-react';

export const services = [
  {
    id: 'fotos',
    name: 'Fotos Profissionais',
    icon: Camera,
    description: 'Sessões fotográficas profissionais para destacar sua marca pessoal ou empresarial.',
    features: ['Equipamentos de ponta', 'Edição e tratamento de imagem', 'Entrega rápida em alta resolução'],
    gallery: [
      { type: 'image', alt: 'Retrato profissional de uma executiva sorrindo' },
      { type: 'image', alt: 'Fotografia de produto para e-commerce' },
      { type: 'video', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/public/videos/making-of-photo-session.mp4', alt: 'Making of de uma sessão de fotos' },
    ]
  },
  {
    id: 'videos',
    name: 'Vídeos para Reels e YouTube',
    icon: Video,
    description: 'Produção de vídeos dinâmicos e impactantes, otimizados para engajamento em redes sociais.',
    features: ['Roteiro e storyboard', 'Captação com qualidade cinematográfica', 'Edição com trilha e legendas'],
    gallery: [
      { type: 'video', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/public/videos/reels-example-1.mp4', alt: 'Exemplo de vídeo para Reels' },
      { type: 'video', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/public/videos/youtube-intro-example.mp4', alt: 'Exemplo de introdução para vídeo do YouTube' },
      { type: 'image', alt: 'Bastidores de uma gravação de vídeo' },
    ]
  },
  {
    id: 'consultoria',
    name: 'Consultoria de Posicionamento',
    icon: TrendingUp,
    description: 'Análise e desenvolvimento de estratégias para fortalecer sua marca no ambiente digital.',
    features: ['Análise de concorrência', 'Definição de persona e tom de voz', 'Planejamento de conteúdo mensal'],
    gallery: [
      { type: 'image', alt: 'Gráfico de crescimento de engajamento em redes sociais' },
      { type: 'image', alt: 'Mapa mental de estratégia de conteúdo' },
    ]
  },
  {
    id: 'cursos-nuvem',
    name: 'Gravação de Cursos (Nuvem)',
    icon: Globe,
    description: 'Produção completa de videoaulas, com edição profissional e disponibilização em nuvem.',
    features: ['Gravação em estúdio ou externa', 'Edição e inserção de gráficos', 'Hospedagem segura em nuvem'],
    gallery: [
      { type: 'video', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/public/videos/online-course-example.mp4', alt: 'Trecho de uma videoaula gravada' },
      { type: 'image', alt: 'Professor em frente a um cromaqui durante gravação' },
    ]
  },
  {
    id: 'cursos-plataforma',
    name: 'Cursos na Plataforma de Vendas',
    icon: Play,
    description: 'Criação e configuração do seu curso online em plataformas de venda como Hotmart ou Kiwify.',
    features: ['Setup completo da plataforma', 'Integração com meios de pagamento', 'Criação da página de vendas'],
    gallery: [
      { type: 'image', alt: 'Interface de uma plataforma de curso online' },
      { type: 'image', alt: 'Página de checkout de um curso online' },
    ]
  },
  {
    id: 'trafego',
    name: 'Tráfego Pago',
    icon: Zap,
    description: 'Gestão de campanhas de anúncios no Google, Facebook e Instagram para atrair mais clientes.',
    features: ['Criação de criativos de alta conversão', 'Segmentação de público avançada', 'Relatórios de performance'],
    gallery: [
      { type: 'image', alt: 'Dashboard de resultados de uma campanha de Facebook Ads' },
      { type: 'image', alt: 'Exemplo de anúncio patrocinado no Instagram' },
    ]
  },
  {
    id: 'instagram',
    name: 'Administração de Instagram',
    icon: Instagram,
    description: 'Gestão completa do seu perfil profissional, do planejamento de conteúdo à interação.',
    features: ['Criação de calendário editorial', 'Design de posts e stories', 'Análise de métricas e relatórios'],
    gallery: [
      { type: 'image', alt: 'Feed de Instagram com design harmonioso' },
      { type: 'image', alt: 'Exemplo de stories interativos para engajamento' },
    ]
  },
  {
    id: 'landing',
    name: 'Criação de Landing Page',
    icon: Globe,
    description: 'Desenvolvimento de páginas de alta conversão, focadas em capturar leads ou vender produtos.',
    features: ['Design responsivo e moderno', 'Copywriting persuasivo (CTA)', 'Integração com ferramentas de marketing'],
    gallery: [
      { type: 'image', alt: 'Exemplo de uma landing page de alta conversão' },
    ]
  },
  {
    id: 'wordpress',
    name: 'Sites Funcionais WordPress',
    icon: Globe,
    description: 'Criação de sites institucionais, blogs ou portfólios em WordPress, com design personalizado.',
    features: ['Design exclusivo e responsivo', 'Otimização de SEO on-page', 'Painel de gerenciamento intuitivo'],
    gallery: [
      { type: 'image', alt: 'Homepage de um site institucional criado em WordPress' },
    ]
  }
];

export const packages = [
  {
    id: 'iniciante',
    name: 'Pacote Iniciante',
    price: 'R$ 400',
    originalPrice: 'R$ 600',
    description: 'Perfeito para quem está começando a se posicionar.',
    features: ['1 Vídeo Reels profissional', '15 Fotos editadas', 'Consultoria básica', 'Entrega em 3 dias'],
    popular: false,
    gradient: 'from-green-500 to-blue-500'
  },
  {
    id: 'profissional',
    name: 'Pacote Profissional',
    price: 'R$ 900',
    originalPrice: 'R$ 1.200',
    description: 'Para profissionais que querem se destacar no mercado.',
    features: ['5 Vídeos Reels', '25 Fotos editadas', 'Consultoria completa', 'Administração Instagram (1 mês)', 'Landing Page'],
    popular: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'premium',
    name: 'Pacote Premium',
    price: 'R$ 1.800',
    originalPrice: 'R$ 2.400',
    description: 'Solução completa para eventos e grandes projetos.',
    features: ['10 Vídeos Reels', '30 Fotos editadas', 'Consultoria premium', 'Administração Instagram (2 meses)', 'Site WordPress', 'Tráfego pago básico'],
    popular: false,
    gradient: 'from-orange-500 to-red-500'
  }
];

export const testimonials = [
  {
    name: 'Maria Silva',
    profession: 'Nutricionista',
    text: 'A Video One transformou completamente minha presença digital! Em 2 meses triplicaram meus seguidores.',
    rating: 5
  },
  {
    name: 'João Santos',
    profession: 'Personal Trainer',
    text: 'Profissionais incríveis! Os vídeos ficaram perfeitos e minha conversão aumentou 300%.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    profession: 'Coach',
    text: 'Recomendo demais! Equipe super atenciosa e resultados que superam expectativas.',
    rating: 5
  }
];