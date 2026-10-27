export interface TechChip {
  name: string;
  category?: string;
  highlight?: boolean;
}

export interface ProjectData {
  id: string;
  projectNumber: string;
  title: string;
  subtitle: string;
  badges: string[];
  description: string;
  architectureDetails: string[];
  liveUrl?: string;
  frontendRepo?: string;
  backendRepo?: string;
  role: string;
  metrics: { label: string; value: string };
  previewType: 'terminal' | 'webgl' | 'payment' | 'gamification';
  terminalSnippet?: {
    filename: string;
    throughput: string;
    tenantId: string;
    latency: string;
    logs: string[];
  };
}

export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  role: string;
  bullets: string[];
  tags: string[];
}

export interface BentoCategory {
  title: string;
  badge: string;
  badgeColor: string;
  icon: string;
  description: string;
  chips: string[];
}

export const PORTFOLIO_DATA = {
  header: {
    logoInitials: 'VG',
    name: 'Victor M. Gomez B.',
    title: 'Lead Architect',
    status: 'Available for Architect & Senior Roles / Remote',
    statusShort: 'Available Remote',
  },
  hero: {
    topPills: {
      availability: 'DISPONIBLE PARA ROLES LEAD & SENIOR FULLSTACK | REMOTO GLOBAL',
      timezone: 'LATAM TIMEZONE // OVERLAPS US & EU',
    },
    namePrefix: 'Victor Gomez —',
    roleHighlight: 'Lead Frontend Architect',
    roleSuffix: '& Senior FullStack',
    bio: 'Especializado en arquitecturas SaaS multi-tenant con estricto aislamiento de datos, entornos web 3D/AR en tiempo real (Three.js / WebGL), microservicios de alto throughput y desarrollo impulsado por Agentes de IA.',
    metrics: [
      {
        tag: 'LIDERAZGO & EXP',
        value: '+5 Años',
        desc: 'Arquitectura End-to-End & Equipos',
        icon: 'signal',
        accent: '#00F0FF',
      },
      {
        tag: 'ENTERPRISE SCALE',
        value: 'Multi-Tenant',
        desc: 'SaaS & Micro-frontends aislados',
        icon: 'network',
        accent: '#3B82F6',
      },
      {
        tag: 'INMERSIÓN WEB',
        value: '3D / WebGL',
        desc: 'Three.js & Mozilla Hubs Real-Time',
        icon: 'box',
        accent: '#8B5CF6',
      },
      {
        tag: 'INTELIGENCIA ARTIFICIAL',
        value: 'AI Agents',
        desc: 'OpenAI, Claude & Vibe Coding',
        icon: 'bot',
        accent: '#10B981',
      },
    ],
  },
  executiveSummary: {
    sectionNum: '01',
    sectionTag: 'RESUMEN EJECUTIVO',
    title: 'Sobre Mí — Arquitectura & Enfoque',
    systemOverview: {
      tag: 'SYSTEM_OVERVIEW & PHILOSOPHY',
      paragraphs: [
        'Lead Frontend Architect e Ingeniero de Sistemas (+5 años de experiencia). Especializado en desacoplar sistemas monolíticos legados hacia microservicios resilientes (NestJS, Node) y microfrontends modulares de alto rendimiento (Next.js, TypeScript).',
        'Diseño arquitecturas SaaS multi-tenant con aislamiento estricto de datos en PostgreSQL e integración de agentes de IA en producción, optimizando Core Web Vitals (< 0.6s LCP) y escalabilidad en la nube.',
      ],
      highlights: [
        {
          title: 'Web Performance',
          detail: 'Core Web Vitals < 0.6s LCP, zero CLS',
          icon: 'gauge',
        },
        {
          title: 'Escalabilidad Cloud',
          detail: 'AWS EC2, S3, Docker multi-stage',
          icon: 'cloud',
        },
        {
          title: '3D & WebGL',
          detail: 'Three.js & WebRTC multiplataforma',
          icon: 'glasses',
        },
        {
          title: 'IA & Agentes',
          detail: 'Orquestación de LLMs y automatización',
          icon: 'cpu',
        },
      ],
    },
    diagnostic: {
      header: 'ARCH_DIAGNOSTIC // 2025',
      health: 'HEALTH: 100%',
      layers: [
        { name: 'CLIENT LAYER', tech: 'Next.js 14 / TypeScript', latency: '14ms', status: 'Optimal' },
        { name: 'API & MICROSERVICES', tech: 'NestJS / Laravel REST', latency: '28ms', status: 'Healthy' },
        { name: 'ISOLATION & STORAGE', tech: 'PostgreSQL (Multi-Tenant)', latency: '4.2ms', status: 'Isolated' },
        { name: 'AI & REALTIME SYNC', tech: 'WebSockets / OpenAI', latency: '45ms', status: 'Active' },
      ],
      quote: {
        comment: '// Principio Arquitectónico',
        text: '"El código de infraestructura debe ser tan limpio como la experiencia del usuario. La escalabilidad nace de desacoplar responsabilidades y aislar la mutabilidad de los estados."',
        author: 'Victor M. Gomez Barreto',
        role: 'Lead Architect',
      },
    },
  },
  projects: [
    {
      id: 'saas-multi-tenant',
      projectNumber: '01',
      title: 'SystemCA — Multi-Tenant SaaS Inventory & Orders',
      subtitle: 'Next.js • PostgreSQL Multi-Tenant • Laravel',
      badges: ['Next.js', 'PostgreSQL Multi-Tenant', 'Laravel REST', 'Docker'],
      description:
        'Plataforma SaaS empresarial en producción para gestión integral de catálogo, inventarios y pedidos. Implementa aislamiento estricto por esquema en PostgreSQL, control RBAC y despliegue continuo en Netlify.',
      architectureDetails: [
        'Next.js (React / TS)',
        'PostgreSQL Multi-Tenant',
        'PHP (Laravel Clean Arch)',
        'Docker & Compose',
        'JWT Stateless Auth',
        'Tailwind CSS',
      ],
      liveUrl: 'https://sassinventory-vmgb.netlify.app/',
      frontendRepo: 'https://github.com/victormgb/sass-inventory-frontend',
      backendRepo: 'https://github.com/victormgb/sass-inventory-backend',
      role: 'Lead FullStack Architect',
      metrics: { label: 'Throughput', value: '240 req/s @ 12ms' },
      previewType: 'terminal',
      terminalSnippet: {
        filename: 'tenant_controller.rs — 240 req/s',
        throughput: '240 req/s',
        tenantId: '#ORG_SYSTEMCA_PROD',
        latency: '12ms',
        logs: [
          '[AUTH_VALIDATED] JWT verified                                  200 OK',
          '[POSTGRES_TX] Tenant schema routed (tenant_systemca)           4.2ms',
          '[NETLIFY_EDGE] Cache-Control: s-maxage=3600                   HIT',
        ],
      },
    },
    {
      id: '3d-webrtc-platform',
      projectNumber: '02',
      title: '3D Multi-User Platform & WebGL World',
      subtitle: 'Three.js • WebRTC • Mozilla Hubs',
      badges: ['Three.js', 'Mozilla Hubs', 'WebRTC', 'React'],
      description:
        'Entorno web 3D colaborativo sobre Three.js y Mozilla Hubs. Ofrece llamadas WebRTC de baja latencia, sincronización espacial multiusuario y renderizado a 60 FPS estables.',
      architectureDetails: ['Three.js', 'WebRTC', 'React', 'AR QuickLook', 'Mozilla Hubs'],
      role: 'Lead Architect & Frontend',
      metrics: { label: 'Rendering', value: '60 FPS STABLE // WEBRTC ACTIVE' },
      previewType: 'webgl',
    },
    {
      id: 'gamification-objectives',
      projectNumber: '03',
      title: 'Gamefication Objectives — Goals & Habits',
      subtitle: 'Next.js • PostgreSQL • Supabase',
      badges: ['Next.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
      description:
        'Plataforma web de gamificación para seguimiento de metas personales y hábitos diarios. Construida con Next.js y PostgreSQL en Supabase, incorporando niveles de XP, rachas activas y Row Level Security (RLS).',
      architectureDetails: ['Next.js', 'PostgreSQL', 'Supabase Realtime', 'Row Level Security (RLS)', 'Tailwind CSS'],
      liveUrl: 'https://gamefication-objectives.netlify.app',
      role: 'FullStack Engineer & Architect',
      metrics: { label: 'Database & Auth', value: 'POSTGRES RLS // SUPABASE REALTIME' },
      previewType: 'gamification',
    },
  ],
  experience: [
    {
      company: 'NextReality INC',
      location: 'REMOTE / MIAMI, USA',
      period: 'Feb 2023 — Ene 2026 (3 Años)',
      role: 'Lead FrontEnd Architect',
      bullets: [
        'Liderazgo técnico en plataforma web 3D interactiva con Three.js y WebRTC para multiusuario en tiempo real.',
        'Migración de arquitectura monolítica legada hacia microservicios desacoplados en NestJS y microfrontends modulares en React/Next.js.',
        'Integración de modelos generativos de IA (OpenAI API) para agentes interactivos autónomos y pipeline AR sincronizado.',
      ],
      tags: ['NestJS', 'React / Next.js', 'Three.js', 'Mozilla Hubs', 'OpenAI API', 'ARKit / ARCore', 'Docker'],
    },
    {
      company: 'The Futures',
      location: 'REMOTE / LONDON, UK',
      period: 'Ene 2020 — Ene 2023 (3 Años)',
      role: 'Desarrollador FullStack',
      bullets: [
        'Diseño y despliegue del microservicio transaccional de pagos altamente resiliente utilizando Node.js y la pasarela Stripe.',
        'Construcción de herramienta colaborativa en tiempo real para revisión sobre canvas con chat en vivo vía WebSockets e infraestructura AWS.',
      ],
      tags: ['Node.js', 'StripeJS', 'WebSockets', 'AWS EC2 & ALB', 'HTML5 Canvas'],
    },
  ],
  education: {
    institution: 'Universidad de Oriente',
    degree: 'Ingeniería de Sistemas',
    credentialTitle: 'TÍTULO PROFESIONAL',
    credentialSubtitle: 'INGENIERO DE SISTEMAS',
    details:
      'Anzoátegui, Venezuela — Graduado en Noviembre 2023. Especialidad en modelado de software, sistemas distribuidos y bases de datos.',
  },
  contact: {
    sectionNum: '05',
    sectionTag: 'CONTACTO DIRECTO',
    heading: '¿Listo para elevar la arquitectura de tu producto?',
    subheading: 'Disponible de inmediato para posiciones de Lead Frontend Architect o Senior FullStack Developer en esquemas remotos globales.',
    email: 'victormgb3099@gmail.com',
    phone: '+58 4121939716',
    phoneDisplay: '+58 4121939716',
    location: 'Anaco, Anzoátegui, Venezuela (UTC-4)',
    linkedinUrl: 'https://linkedin.com/in/victormgb',
    githubUrl: 'https://github.com/victormgb',
  },
  footer: {
    name: 'Victor Manuel Gomez Barreto',
    summary:
      'Lead Frontend Architect & Senior FullStack Developer especializado en arquitecturas reactivas distribuidas, diseño de microfrontends y sistemas web de ultra alta velocidad.',
    latency: 'LATENCY // 18ms SLA: 99.99%',
    copyright: '© 2026 Victor Manuel Gomez Barreto. Built with surgical performance & atomic CSS.',
    sysStatus: 'SYS_STATUS: ACTIVE v4.8.0-PROD',
  },
};
