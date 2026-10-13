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
  previewType: 'terminal' | 'webgl' | 'payment';
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
    command: 'ROOT@PRODUCTION:~$ exec architect_profile.tsx',
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
    title: 'Sobre Mí — Perfil Profesional & Arquitectura',
    systemOverview: {
      tag: 'SYSTEM_OVERVIEW & PHILOSOPHY',
      paragraphs: [
        'Ingeniero de Sistemas y Lead Frontend Architect con más de 5 años de experiencia liderando el ciclo completo de desarrollo de software end-to-end. Especializado en transformar arquitecturas monolíticas legadas hacia ecosistemas escalables basados en microservicios resilientes (NestJS, Node) y micro-frontends modulares de ultra alto rendimiento (React, Next.js, TypeScript).',
        'Diseño soluciones SaaS multi-inquilino robustas con aislamiento estricto de datos a nivel de esquema y aplicación por tenant. Adicionalmente, orquesto integraciones avanzadas de modelos de Inteligencia Artificial (OpenAI, Claude, automatización con agentes y flujos de vibe coding), garantizando alta fidelidad técnica, observabilidad y rendimiento óptimo en producción.',
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
          title: '3D & AR Sincronizado',
          detail: 'Three.js, WebGL & WebRTC multiplataforma',
          icon: 'glasses',
        },
        {
          title: 'AI Agents & Workflows',
          detail: 'Orquestación de LLMs & automatización',
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
      projectNumber: 'FLAGSHIP SHOWCASE MVP #1',
      title: 'Multi-Tenant SaaS Inventory, Sales & Order Management System',
      subtitle: 'Multi-Tenant Architecture • Production Ready • Full Stack',
      badges: ['Multi-Tenant Architecture', 'Production Ready', 'Full Stack'],
      description:
        'Plataforma SaaS empresarial diseñada para la gestión integral de inventarios, catálogo dinámico, control de ventas y procesamiento de pedidos. Implementa arquitectura multi-inquilino estricta (aislamiento de datos por empresa/tenant), control de roles granular (RBAC), facturación y reportes de throughput en tiempo real.',
      architectureDetails: [
        'Next.js (React / TS)',
        'Tailwind CSS',
        'React Query',
        'PHP (Laravel Clean Arch)',
        'JWT Stateless Auth',
        'PostgreSQL Multi-Tenant',
        'Docker & Compose',
        'Elastic Email Integration',
      ],
      liveUrl: 'https://demo-saas-multitenant.production.internal',
      frontendRepo: 'https://github.com/victorgomez/saas-frontend-nextjs',
      backendRepo: 'https://github.com/victorgomez/saas-backend-clean-arch',
      role: 'Lead FullStack Architect',
      metrics: { label: 'Throughput', value: '240 req/s @ 12ms' },
      previewType: 'terminal',
      terminalSnippet: {
        filename: 'tenant_controller.rs — 240 req/s',
        throughput: '240 req/s',
        tenantId: '#ORG_ENTERPRISE_89',
        latency: '12ms',
        logs: [
          '[AUTH_VALIDATED] JWT verified                                  200 OK',
          '[POSTGRES_TX] Tenant schema routed                             4.2ms',
          '[EMAIL_DISPATCH] Elastic Email webhook                         DELIVERED',
        ],
      },
    },
    {
      id: '3d-webrtc-platform',
      projectNumber: 'PROJECT_ID // 02',
      title: '3D Multi-User Collaborative Platform & WebGL World',
      subtitle: 'Three.js • WebRTC • AR',
      badges: ['Three.js', 'Mozilla Hubs', 'WebRTC', 'React', 'AR QuickLook', 'OpenAI Bots'],
      description:
        'Plataforma web inmersiva en tiempo real construida sobre Mozilla Hubs y Three.js. Permite interacción espacial entre avatares multiusuario, llamadas WebRTC de baja latencia, visualización 3D interactiva y sincronización nativa de experiencias AR multiplataforma para iOS y Android.',
      architectureDetails: ['Three.js', 'Mozilla Hubs', 'WebRTC', 'React', 'AR QuickLook', 'OpenAI Bots'],
      role: 'Lead Architect & Frontend',
      metrics: { label: 'Rendering', value: '60 FPS STABLE // WEBRTC ACTIVE' },
      previewType: 'webgl',
    },
    {
      id: 'fintech-review-engine',
      projectNumber: 'PROJECT_ID // 03',
      title: 'Enterprise Payment & Product Review Engine',
      subtitle: 'Fintech • Node.js • AWS',
      badges: ['Node.js (Express)', 'StripeJS SDK', 'WebSockets', 'HTML5 Canvas', 'AWS ALB & EC2', 'Redis Pub/Sub'],
      description:
        'Microservicio transaccional resiliente para procesamiento seguro de pagos con Node.js y Stripe.JS. Incluye herramienta colaborativa en tiempo real para revisión de activos digitales, anotaciones sobre canvas y chat cliente-diseñador vía WebSockets sobre infraestructura AWS con auto-scaling.',
      architectureDetails: ['Node.js (Express)', 'StripeJS SDK', 'WebSockets', 'HTML5 Canvas', 'AWS ALB & EC2', 'Redis Pub/Sub'],
      role: 'FullStack Core Engineer',
      metrics: { label: 'Compliance', value: 'PCI-DSS READY // 99.99% FAULT TOLERANCE' },
      previewType: 'payment',
    },
  ],
  bentoMatrix: [
    {
      title: 'SaaS & Arquitectura',
      badge: 'EXPERTO',
      badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/30',
      icon: 'layers',
      description: 'Diseño de sistemas distribuidos tolerantes a fallos y arquitecturas multi-tenant con aislamiento de esquema y recursos.',
      chips: [
        'Multi-Tenant Architecture',
        'Microservicios',
        'Micro-Frontends',
        'REST & GraphQL APIs',
        'Database Modeling',
        'System Design',
      ],
    },
    {
      title: 'Backend & Bases de Datos',
      badge: 'SENIOR',
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-950/30',
      icon: 'database',
      description: 'APIs de baja latencia con NestJS y Laravel, pipelines transaccionales y contenedorización completa.',
      chips: [
        'PHP (Laravel Clean Arch)',
        'Node.js (NestJS, Express)',
        'TypeScript',
        'PostgreSQL',
        'SQL / NoSQL (Redis, Mongo)',
        'Docker & Compose',
      ],
    },
    {
      title: 'Frontend, 3D & AR',
      badge: 'LEAD ARCHITECT',
      badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-950/30',
      icon: 'compass',
      description: 'Diseño de interfaces reactivas con Next.js y ecosistemas tridimensionales e interactivos en WebGL.',
      chips: [
        'Next.js 14 & React',
        'Vue / Nuxt',
        'Three.js / Mozilla Hubs',
        'Realidad Aumentada (AR)',
        'Tailwind CSS',
        'State (Zustand, Redux)',
      ],
    },
    {
      title: 'Cloud, DevOps & Mail',
      badge: 'DEVOPS',
      badgeColor: 'border-teal-500/30 text-teal-400 bg-teal-950/30',
      icon: 'cloud-lightning',
      description: 'Despliegue continuo, balanceo de carga y pasarelas de entrega masiva transaccional.',
      chips: [
        'AWS (EC2, S3, ALB)',
        'Netlify / Vercel Edge',
        'Elastic Email Integration',
        'ETL & API Ingestion',
        'CI/CD Automation',
      ],
    },
    {
      title: 'IA & Vibe Coding',
      badge: 'FRONTIER AI',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/30',
      icon: 'sparkles',
      description: 'Potenciación de velocidad de desarrollo mediante agentes autónomos y orquestación LLM.',
      chips: [
        'OpenAI APIs & Assistants',
        'Claude & Anthropic SDK',
        'OpenCode & AI Agents',
        'Vibe Coding Workflows',
        'Prompt Engineering Avanzado',
      ],
    },
    {
      title: 'Idiomas & Certificaciones',
      badge: 'CREDENTIALS',
      badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-950/30',
      icon: 'award',
      description: 'Capacidad de comunicación ejecutiva internacional y bases de programación certificadas.',
      chips: [
        'Español (Nativo)',
        'Inglés (Fluido Profesional)',
        'Certificación en Python',
        'Certificación en .NET',
      ],
    },
  ],
  experience: [
    {
      company: 'NextReality INC',
      location: 'REMOTE / MIAMI, USA',
      period: 'Feb 2023 — Ene 2026 (3 Años)',
      role: 'Lead FrontEnd Architect',
      bullets: [
        'Liderazgo técnico en la arquitectura de plataforma web 3D colaborativa con Three.js (Mozilla Hubs) para interacción multiusuario masiva en tiempo real.',
        'Migración completa de arquitectura monolítica legada (Laravel/Vue) hacia microservicios desacoplados en NestJS y micro-frontends modulares en ReactJS.',
        'Integración de modelos generativos de IA (OpenAI API) para comportamiento autónomo y conversación de NPCs e interactivos en entornos tridimensionales.',
        'Desarrollo del pipeline de visualización y edición en Realidad Aumentada (AR) sincronizado bidireccionalmente entre iOS y Android.',
        'Construcción de microservicios e integraciones ETL para ingestión masiva de modelos y metadatos de APIs externas (The Metropolitan Museum of Art, Sketchfab).',
      ],
      tags: ['NestJS', 'React / Next.js', 'Three.js', 'Mozilla Hubs', 'OpenAI API', 'ARKit / ARCore', 'Docker'],
    },
    {
      company: 'The Futures',
      location: 'REMOTE / LONDON, UK',
      period: 'Ene 2020 — Ene 2023 (3 Años)',
      role: 'Desarrollador FullStack',
      bullets: [
        'Diseño y despliegue del microservicio transaccional de pagos altamente resiliente utilizando Node.js (Express) y la pasarela StripeJS.',
        'Construcción de una herramienta colaborativa en tiempo real para revisión de productos digitales, permitiendo anotaciones dinámicas sobre canvas y chat en vivo cliente-diseñador vía WebSockets.',
        'Configuración, automatización y monitoreo de infraestructura en Amazon Web Services (AWS) con Application Load Balancers (ALB) y auto-scaling para máxima tolerancia a fallos.',
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
      'Anzoátegui, Venezuela — Graduado en Noviembre 2023. Mención académica orientada a desarrollo de software, modelado formal de bases de datos y sistemas distribuidos.',
  },
  contact: {
    sectionNum: '06',
    sectionTag: 'INICIAR CONVERSACIÓN TÉCNICA',
    heading: '¿Listo para elevar la arquitectura de tu producto?',
    subheading: 'Disponible de inmediato para posiciones de Lead Frontend Architect o Senior FullStack Developer en esquemas remotos globales.',
    email: 'victormgbx3099@gmail.com',
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
