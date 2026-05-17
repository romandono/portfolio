export const en = {
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    name: 'Román Dono Pérez',
    role: 'Fullstack Developer',
    tagline: 'I build modern, scalable web applications',
    cta: 'Get in touch',
  },
  experience: {
    title: 'Experience',
    present: 'Present',
  },
  projects: {
    title: 'Projects',
    viewProject: 'View Project',
    viewRepo: 'Source Code',
  },
  skills: {
    title: 'Skills',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Have a question or want to work together?',
    email: 'Email',
    emailValue: 'hello@rdono.dev',
    location: 'Location',
    locationValue: 'Remote',
    getInTouch: 'Get in Touch',
  },
  footer: {
    rights: 'All rights reserved.',
  },
  theme: {
    toggle: 'Toggle dark mode',
  },
  lang: {
    switch: 'Switch to Spanish',
    label: 'ES',
  },
  experienceEntries: {
    'senior-dev': {
      role: 'Senior Fullstack Developer',
      description: 'Building scalable web applications with modern technologies. Leading architecture decisions and mentoring junior developers.',
    },
    'fullstack-dev': {
      role: 'Fullstack Developer',
      description: 'Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver features on time.',
    },
  },
  projectEntries: {
    portfolio: {
      title: 'Personal Portfolio',
      description: 'Personal portfolio website built with Astro, featuring i18n support, dark mode, and responsive design.',
    },
    'mcp-server': {
      title: 'MCP Memory Server',
      description: 'Model Context Protocol server for persistent AI context storage using SQLite. Enables AI assistants to maintain state across sessions.',
    },
    ecommerce: {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with product management, cart functionality, payment processing, and admin dashboard.',
    },
  },
} as const;

export type Dictionary = typeof en;
