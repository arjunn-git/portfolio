import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding the Vision",
    description: "Deep dive into your business model, target audience, core objectives, brand tone, and technical prerequisites.",
    deliverables: ["Project brief alignment", "Audience persona evaluation", "Technical requirements audit"]
  },
  {
    number: "02",
    title: "Planning",
    subtitle: "Architecture & Scope Definition",
    description: "Map out the sitemap, information architecture, component hierarchy, tech stack selection, and milestone schedule.",
    deliverables: ["Information architecture tree", "Component inventory", "Milestone schedule & timeline"]
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Visual Direction & Layouts",
    description: "Craft pixel-perfect responsive layouts, cinematic typography, subtle motion systems, and accessible interactive states.",
    deliverables: ["Responsive UI layouts", "Interactive prototypes", "Design tokens & style guide"]
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Clean Code Implementation",
    description: "Build the website using modern frontend technologies (React, TypeScript, Tailwind, Three.js) with semantic markup.",
    deliverables: ["Modular component library", "API & data state hooks", "Interactive 3D/WebGL systems"]
  },
  {
    number: "05",
    title: "Testing",
    subtitle: "Quality Assurance & Speed",
    description: "Rigorous cross-browser checks, responsiveness audits across mobile/desktop, form validation tests, and Core Web Vitals tuning.",
    deliverables: ["Lighthouse 95+ performance report", "Cross-browser compatibility validation", "Accessibility (WCAG) checks"]
  },
  {
    number: "06",
    title: "Delivery",
    subtitle: "Deployment & Smooth Handover",
    description: "Production deployment to Vercel/Cloudflare, DNS configuration, source code repository handover, and post-launch verification.",
    deliverables: ["Live production deployment", "GitHub repository transfer", "Comprehensive walkthrough documentation"]
  }
];
