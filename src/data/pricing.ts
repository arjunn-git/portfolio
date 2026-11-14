import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Package",
    tagline: "Ideal for founders, creators & small businesses launching their digital presence.",
    description: "A focused, responsive landing page or single-page website engineered to showcase your value proposition with clean code.",
    pricing: {
      USD: "$250 – $500",
      INR: "₹20,000 – ₹40,000",
      GBP: "£200 – £400"
    },
    features: [
      "Custom responsive single-page or landing layout",
      "Mobile-first, touch-friendly UI design",
      "Fundamental on-page SEO meta configuration",
      "Functional contact & lead capture integration",
      "Standard Core Web Vitals performance optimization",
      "Direct code repository handover & deployment setup"
    ]
  },
  {
    id: "professional",
    name: "Professional Tier",
    tagline: "Designed for growing companies requiring a multi-section digital platform.",
    description: "A comprehensive multi-section or multi-page digital experience featuring custom brand styling, interactive elements, and API connectivity.",
    popular: true,
    pricing: {
      USD: "$600 – $1,200",
      INR: "₹50,000 – ₹95,000",
      GBP: "£500 – £950"
    },
    features: [
      "Multi-section or multi-page custom website",
      "Bespoke UI/UX design matching brand guidelines",
      "Interactive components, subtle motion & micro-interactions",
      "Advanced contact & enquiry routing system",
      "SEO fundamentals, structured data & social open graphs",
      "Cross-browser QA testing & high-speed image compression",
      "30-day post-launch warranty & handover walkthrough"
    ]
  },
  {
    id: "custom",
    name: "Custom Engineering",
    tagline: "Tailored for SaaS products, complex React web applications & bespoke tools.",
    description: "Full-scale frontend architecture and API integration built to scale with your product roadmap and engineering team.",
    pricing: {
      USD: "Custom Scope",
      INR: "Custom Scope",
      GBP: "Custom Scope"
    },
    features: [
      "Bespoke React 19 / Next.js application frontend",
      "Custom SaaS dashboards, utilities & admin interfaces",
      "Complex REST API, GraphQL or BaaS (Supabase) integration",
      "Creative development: Three.js WebGL scenes & GSAP motion",
      "State management architectures & strict TypeScript typing",
      "Dedicated CI/CD pipeline automation & Vercel deployment",
      "Ongoing architectural advisory & sprint-based milestones"
    ]
  }
];
