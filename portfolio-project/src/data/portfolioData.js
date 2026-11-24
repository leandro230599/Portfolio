export const SOCIAL_LINKS = {
  github: 'https://github.com/leandrolopez',
  linkedin: 'https://linkedin.com/in/leandrolopez',
  email: 'mailto:contacto@leandrolopez.dev',
};

export const SECTIONS = [
  { id: 'home', label: { en: 'Home', es: 'Inicio' } },
  { id: 'about', label: { en: 'About', es: 'Sobre mí' } },
  { id: 'projects', label: { en: 'Projects', es: 'Proyectos' } },
  { id: 'skills', label: { en: 'Stack', es: 'Tecnologías' } },
];

export const CONTENT = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Tech Stack',
    },
    hero: {
      badge: 'Remote or On-site · Berazategui, Buenos Aires, AR',
      ariaTitle: "Hi! I'm Leandro Lopez — Full-Stack Developer",
      typewriter: [
        "Hi! I'm Leandro Lopez",
        "I'm a Full-Stack Developer",
        'Building Web, Mobile & APIs',
      ],
      subtitle:
        'Crafting scalable APIs, relational databases, and modern web & mobile interfaces with JavaScript, Node.js, NestJS, PostgreSQL, React, and React Native.',
      ctaProjects: 'View Projects',
      ctaAbout: 'About Me',
      scrollHint: 'Scroll to explore',
    },
    about: {
      eyebrow: '01 / ABOUT ME',
      title: 'Who I am',
      lead: "I'm Leandro Lopez — a Full-Stack Developer and student of the Bachelor's Degree in Systems at the National University of La Plata (UNLP).",
      bio1: 'Since 2021, I have been continuously learning modern software engineering practices and building clean, maintainable digital products. While I work comfortably across the full stack, I lean most toward Back-End development and API architecture.',
      bio2: 'JavaScript is my favorite language. I enjoy designing services and databases with Node.js, NestJS, Express, SQL, and PostgreSQL, as well as building intuitive interfaces with React, React Native, Vue, and Tailwind.',
      codeComment: '// developer-profile.json',
      highlights: [
        {
          icon: 'server',
          label: 'Engineering',
          title: 'APIs, Web & Mobile',
          description:
            'End-to-end product development, from REST APIs and real-time services to responsive web and mobile interfaces.',
        },
        {
          icon: 'code',
          label: 'Favorite Ecosystem',
          title: 'JavaScript & TypeScript',
          description:
            'Node.js, NestJS, Express, PostgreSQL, React, React Native, Vue, and Tailwind CSS.',
        },
        {
          icon: 'academic',
          label: 'Education',
          title: 'Licenciatura en Sistemas · UNLP',
          description:
            'Studying Systems at Universidad Nacional de La Plata. Writing and shipping code since 2021.',
        },
        {
          icon: 'location',
          label: 'Based In',
          title: 'Berazategui, Buenos Aires, Argentina',
          description:
            'Available for both remote and on-site work opportunities (UTC-3).',
        },
      ],
    },
    projects: {
      eyebrow: '02 / SELECTED WORK',
      title: 'Projects',
      subtitle:
        'Real-world projects I have contributed to. Select a card to view full details, my role, and app screenshots.',
      rolePrefix: 'Participation',
      viewDetails: 'View details',
      photosLabel: 'photos',
      photoLabel: 'photo',
      modal: {
        overview: 'Overview',
        roleLabel: 'Role',
        highlights: 'Key Contributions',
        technologies: 'Technologies',
        viewCode: 'Source Code',
        liveDemo: 'Live Demo',
        close: 'Close modal',
        prevImage: 'Previous image',
        nextImage: 'Next image',
      },
    },
    skills: {
      eyebrow: '03 / TECH STACK',
      title: 'Technologies I Work With',
      subtitle:
        'Languages, frameworks, and tools I use day to day to design, build, and test software.',
      categories: {
        backend: 'Back-End & Databases',
        frontend: 'Front-End & Mobile',
        tools: 'Workflow & Testing',
      },
    },
    footer: {
      backToTop: 'Back to top',
      crafted:
        'Designed & built by Leandro Lopez · Berazategui, Buenos Aires, Argentina',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Tecnologías',
    },
    hero: {
      badge: 'Remoto o Presencial · Berazategui, Buenos Aires, AR',
      ariaTitle: '¡Hola! Soy Leandro Lopez — Desarrollador Full-Stack',
      typewriter: [
        '¡Hola! Soy Leandro Lopez',
        'Soy Desarrollador Full-Stack',
        'Desarrollo Web, Mobile y APIs',
      ],
      subtitle:
        'Construyo APIs escalables, bases de datos e interfaces web y mobile con JavaScript, Node.js, NestJS, PostgreSQL, React y React Native.',
      ctaProjects: 'Ver Proyectos',
      ctaAbout: 'Sobre Mí',
      scrollHint: 'Deslizá para explorar',
    },
    about: {
      eyebrow: '01 / SOBRE MÍ',
      title: 'Quién soy',
      lead: 'Soy Leandro Lopez — Desarrollador Full-Stack y estudiante de la Licenciatura en Sistemas en la Universidad Nacional de La Plata (UNLP).',
      bio1: 'Desde 2021 me dedico a aprender buenas prácticas de ingeniería de software y construir soluciones digitales limpias y mantenibles. Si bien cuento con conocimientos en todo el stack, tengo una mayor inclinación por el desarrollo Back-End.',
      bio2: 'Mi lenguaje favorito es JavaScript. Disfruto diseñar servicios y bases de datos con Node.js, NestJS, Express, SQL y PostgreSQL, además de crear interfaces modernas con React, React Native, Vue y Tailwind.',
      codeComment: '// perfil-desarrollador.json',
      highlights: [
        {
          icon: 'server',
          label: 'Desarrollo',
          title: 'APIs, Web y Mobile',
          description:
            'Construcción de aplicaciones de punta a punta: desde APIs REST y tiempo real hasta interfaces web y móviles.',
        },
        {
          icon: 'code',
          label: 'Ecosistema Favorito',
          title: 'JavaScript & TypeScript',
          description:
            'Node.js, NestJS, Express, PostgreSQL, React, React Native, Vue y Tailwind CSS.',
        },
        {
          icon: 'academic',
          label: 'Formación',
          title: 'Licenciatura en Sistemas · UNLP',
          description:
            'Estudiante en la Universidad Nacional de La Plata. Programando de forma continua desde 2021.',
        },
        {
          icon: 'location',
          label: 'Ubicación',
          title: 'Berazategui, Buenos Aires, Argentina',
          description:
            'Disponible para trabajo remoto o presencial (UTC-3).',
        },
      ],
    },
    projects: {
      eyebrow: '02 / TRABAJO DESTACADO',
      title: 'Proyectos',
      subtitle:
        'Proyectos reales que desarrolle o participé. Seleccioná una tarjeta para ver más información, mi rol y capturas de la aplicación.',
      rolePrefix: 'Participación',
      viewDetails: 'Ver detalles',
      photosLabel: 'imágenes',
      photoLabel: 'imagen',
      modal: {
        overview: 'Descripción',
        roleLabel: 'Participación',
        highlights: 'Principales Aportes',
        technologies: 'Tecnologías',
        viewCode: 'Ver Código',
        liveDemo: 'Demo en Vivo',
        close: 'Cerrar ventana',
        prevImage: 'Imagen anterior',
        nextImage: 'Siguiente imagen',
      },
    },
    skills: {
      eyebrow: '03 / TECNOLOGÍAS',
      title: 'Tecnologías que Manejo',
      subtitle:
        'Lenguajes, frameworks y herramientas que utilizo en el día a día para diseñar, desarrollar y probar aplicaciones.',
      categories: {
        backend: 'Back-End y Bases de Datos',
        frontend: 'Front-End y Mobile',
        tools: 'Herramientas y Testing',
      },
    },
    footer: {
      backToTop: 'Volver arriba',
      crafted:
        'Diseñado y desarrollado por Leandro Lopez · Berazategui, Buenos Aires, Argentina',
    },
  },
};

export const PROJECTS = [
  {
    id: 'cristo-viviente-app',
    category: { en: 'Backend & Mobile', es: 'Backend y Mobile' },
    role: { en: 'Backend & Mobile', es: 'Backend y Mobile' },
    year: '2026',
    isMobileShowcase: true,
    title: {
      en: 'Cristo Viviente App',
      es: 'Cristo Viviente App',
    },
    summary: {
      en: 'Comprehensive church platform combining a mobile app, an admin panel, and a REST API for events, devotionals, and live service broadcasts.',
      es: 'Aplicación integral para centralizar información y servicios de la iglesia en una sola plataforma: app móvil, panel administrativo y API REST.',
    },
    description: {
      en: 'I participated in developing a comprehensive application designed to centralize church information and services into a single platform, consisting of a mobile app, an administrative panel, and a REST API. I collaborated across different areas of the project, primarily in Backend and Mobile development, implementing event management and browsing features as well as a section to access the latest live service broadcasts.',
      es: 'Participé en el desarrollo de una aplicación integral destinada a centralizar la información y los servicios de la iglesia en una única plataforma, compuesta por una aplicación móvil, un panel administrativo y una API REST. Colaboré en distintas áreas del proyecto, principalmente en el desarrollo Backend y Mobile, implementando funcionalidades de gestión y visualización de eventos, así como una sección para acceder a las últimas transmisiones de reuniones en vivo.',
    },
    highlights: {
      en: [
        'Backend REST API built with NestJS, Node.js, TypeScript, and PostgreSQL documented with Swagger',
        'Event management and interactive calendar browsing across the mobile app and API',
        'Dedicated section to browse and watch the latest live service broadcasts and sermons',
        'Cross-platform mobile experience developed with React Native and Expo',
      ],
      es: [
        'API REST desarrollada con NestJS, Node.js, TypeScript y PostgreSQL, documentada con Swagger',
        'Gestión y visualización interactiva de eventos integrada entre el backend y la app móvil',
        'Sección dedicada para acceder y reproducir las últimas transmisiones de reuniones en vivo',
        'Experiencia móvil multiplataforma construida con React Native y Expo',
      ],
    },
    tech: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'React Native',
      'Expo',
      'Material UI',
      'Swagger',
      'Postman',
      'Git',
    ],
    images: [
      {
        src: '/cv-app/cvappmobile1.png',
        caption: {
          en: 'Home Screen — Daily devotional, upcoming meeting & quick shortcuts',
          es: 'Pantalla de inicio — Devocional del día, próxima reunión y accesos directos',
        },
      },
      {
        src: '/cv-app/cvappmobile2.png',
        caption: {
          en: 'Events — Interactive monthly calendar, filters & event cards',
          es: 'Eventos — Calendario mensual interactivo, filtros y detalle de actividades',
        },
      },
      {
        src: '/cv-app/cvappmobile3.png',
        caption: {
          en: 'Recent Meetings — Sunday services & latest sermons catalog',
          es: 'Últimas reuniones — Servicios de domingo y catálogo de prédicas',
        },
      },
      {
        src: '/cv-app/cvappmobile4.png',
        caption: {
          en: 'Live Broadcasts — Integrated video player for recent meetings',
          es: 'Transmisiones — Reproductor integrado de las últimas reuniones',
        },
      },
    ],
    repoUrl: '',
    liveUrl: '',
  },
];

export const TECH_CATEGORIES = [
  {
    key: 'backend',
    items: [
      { name: 'JavaScript', icon: '/javascript.png', accent: '#facc15' },
      { name: 'Node.js', icon: '/nodejs.png', accent: '#22c55e' },
      { name: 'NestJS', icon: '/nestjs.png', accent: '#e0234e' },
      { name: 'Express', icon: '/Express.png', accent: '#e2e8f0', invertOnDark: true },
      { name: 'Socket.io', icon: '/Socket.io.png', accent: '#38bdf8', invertOnDark: true },
      { name: 'PostgreSQL', icon: '/postgresql.png', accent: '#60a5fa' },
      { name: 'SQL', icon: '/sql.png', accent: '#38bdf8' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'React', icon: '/react.png', accent: '#38bdf8' },
      { name: 'React Native', icon: '/react-native.svg', accent: '#38bdf8' },
      { name: 'Vue', icon: '/vue.png', accent: '#34d399' },
      { name: 'Tailwind', icon: '/tailwind.png', accent: '#22d3ee' },
      { name: 'HTML5', icon: '/html.png', accent: '#fb923c' },
      { name: 'CSS3', icon: '/css.png', accent: '#60a5fa' },
      { name: 'Bootstrap', icon: '/bootstrap.png', accent: '#a78bfa' },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', icon: '/git.png', accent: '#f87171' },
      { name: 'Postman', icon: '/postman.png', accent: '#ff6c37', cropLeft: true },
      { name: 'REST APIs', badge: '{}', accent: '#0be779' },
    ],
  },
];
