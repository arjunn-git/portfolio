import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    description: "Architecting high-performance, accessible, and responsive user interfaces with modern client-side technologies.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript ES6+", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 Semantic Markup" },
      { name: "CSS3 / Modern CSS" },
      { name: "CSS Grid & Flexbox" },
      { name: "Responsive Web Design", highlight: true },
      { name: "React Custom Hooks" },
      { name: "Next.js Architecture" },
    ]
  },
  {
    title: "Creative Development & 3D",
    iconName: "Sparkles",
    description: "Bridging code and art through WebGL shaders, kinetic interactions, and fluid motion systems.",
    skills: [
      { name: "Three.js", highlight: true },
      { name: "WebGL Experiences", highlight: true },
      { name: "GSAP / ScrollTrigger", highlight: true },
      { name: "Framer Motion", highlight: true },
      { name: "Interactive UI & Micro-interactions" },
      { name: "Spatial Mathematics & Euler Angles" },
      { name: "Kinetic Typography" },
      { name: "Performance & GPU Optimization", highlight: true }
    ]
  },
  {
    title: "Backend & Systems",
    iconName: "Server",
    description: "Developing scalable REST APIs, reliable database architectures, and secure server-side workflows.",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "RESTful API Integration", highlight: true },
      { name: "Java Full Stack", highlight: true },
      { name: "Spring Boot" },
      { name: "JDBC" },
      { name: "MySQL / Relational DBs" },
      { name: "Supabase / BaaS Integration" }
    ]
  },
  {
    title: "Workflow, Tooling & DevOps",
    iconName: "Terminal",
    description: "Industry-standard engineering workflows, version control protocols, and continuous deployment pipelines.",
    skills: [
      { name: "Git & Git Flow", highlight: true },
      { name: "GitHub & Actions CI/CD", highlight: true },
      { name: "Vite & Modern Bundlers", highlight: true },
      { name: "Figma to Code (Pixel-Perfect)", highlight: true },
      { name: "VS Code & Antigravity" },
      { name: "npm / pnpm Package Workflows" },
      { name: "Vercel / Cloudflare Deployments" },
      { name: "Agile / Scrum Collaboration" }
    ]
  },
  {
    title: "AI-Augmented Development",
    iconName: "Cpu",
    description: "Leveraging cutting-edge AI engineering agents to accelerate delivery, code synthesis, and architectural research.",
    skills: [
      { name: "GitHub Copilot", highlight: true },
      { name: "Cursor AI", highlight: true },
      { name: "ChatGPT (Architectural Prototyping)" },
      { name: "Vercel v0 (Rapid Component Ideation)" },
      { name: "Prompt Engineering for Engineering Audits" },
      { name: "Context Window Optimization" }
    ]
  }
];
