export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  liveUrl: string;
  githubUrl: string | null; // null if coming soon
  githubVerified: boolean;
  technologies: string[];
  features: string[];
  contribution: string[];
  objective: string;
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  enquiryType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pricing: {
    USD: string;
    INR: string;
    GBP: string;
  };
  features: string[];
  popular?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName?: string;
  country?: string;
  enquiryType: string;
  projectBudget?: string;
  projectTimeline?: string;
  referenceUrl?: string;
  message: string;
}
