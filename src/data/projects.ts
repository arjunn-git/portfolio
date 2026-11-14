import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "connexindus",
    number: "01",
    name: "Connexindus",
    category: "Corporate & Responsive Web",
    tagline: "Custom-Engineered Manufacturing & Corporate Digital Presence",
    description: "A custom-coded WordPress website focused on responsive layouts, modern visual presentation and functional user experience.",
    objective: "To design and develop an industrial-grade digital portal for global client discovery, highlighting manufacturing capabilities through custom CSS architecture and seamless responsiveness across all screen sizes.",
    liveUrl: "https://connexindus.com/",
    githubUrl: null, // Inspected arjunn-git public repos; not public
    githubVerified: false,
    technologies: ["WordPress", "HTML5", "CSS3 / Custom Grid", "JavaScript (ES6+)", "Responsive Design"],
    features: [
      "Custom responsive layout architecture tailored for high-density industrial catalogs",
      "Dynamic navigation with multi-tier product category exploration",
      "Cross-device performance optimization and zero-cumulative layout shifts",
      "Streamlined client inquiry modals and direct lead-generation points",
      "Structured SEO and semantic markup for search indexability"
    ],
    contribution: [
      "Custom website development from design mockups into production code",
      "Handcrafted responsive CSS systems replacing bulky theme overrides",
      "Custom HTML, CSS and interactive JavaScript UI components",
      "WordPress implementation, template structuring and speed optimization",
      "Rigorous cross-browser testing on mobile, tablet, and ultra-wide displays"
    ],
    accentColor: "#287BFF"
  },
  {
    id: "real-time-web-qa",
    number: "02",
    name: "Real-Time Web QA Analysis",
    category: "Developer Tool / SaaS Utility",
    tagline: "Automated Website Quality Assurance & Real-Time Review Engine",
    description: "A web-based quality assurance tool developed to streamline website validation and improve website review workflows.",
    objective: "Eliminate manual verification friction for engineering and design teams by automating web compliance, structural link auditing, content difference checks, and SEO grading in real time.",
    liveUrl: "https://real-time-web-qa.vercel.app/",
    githubUrl: "https://github.com/arjunn-git/real-time-web-qa",
    githubVerified: true,
    technologies: ["React 19", "TypeScript", "Vite", "Node.js", "Express", "REST APIs"],
    features: [
      "Real-time content validation and broken link detection across web pages",
      "Comprehensive SEO audit engine evaluating meta headers and structured tags",
      "Interactive button and form validation verification",
      "Word-level content comparison algorithm for copy review workflows",
      "Requirement checking matrix and automated reporting outputs"
    ],
    contribution: [
      "Architected the full frontend with React 19 and strict TypeScript typing",
      "Engineered responsive analysis dashboard with dynamic reporting charts",
      "Integrated Node.js and Express backend services for headless verification",
      "Implemented client-side caching to deliver near-instant repeated audit lookups",
      "Constructed reusable component architecture deployed on Vercel"
    ],
    accentColor: "#287BFF"
  },
  {
    id: "one-store",
    number: "03",
    name: "One Store",
    category: "Full-Stack E-Commerce",
    tagline: "High-Performance Dropshipping Platform with OTP Authentication",
    description: "A custom-coded e-commerce platform focused on product discovery, shopping experience and responsive interface design.",
    objective: "Build a modern, friction-free online storefront with real-time inventory management, secure user authentication workflows, and an intuitive customer shopping experience.",
    liveUrl: "https://one-store-gray.vercel.app/",
    githubUrl: "https://github.com/arjunn-git/One-Store",
    githubVerified: true,
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "REST API"],
    features: [
      "Dynamic product listings with categorized filtering and search indexing",
      "Intuitive product presentation with responsive image galleries and variant picking",
      "Secure OTP-based authentication workflows backed by Supabase",
      "Complete shopping cart state management with persistent storage",
      "Responsive administrative dashboard and inventory tracking interface"
    ],
    contribution: [
      "Engineered frontend product discovery routes with Tailwind CSS & Next.js",
      "Configured Supabase client authentication and database relationships",
      "Implemented responsive checkout and shopping cart interaction mechanics",
      "Optimized Core Web Vitals, image asset delivery, and mobile touch targets",
      "Designed dark/cinematic commerce styling aligned with modern design standards"
    ],
    accentColor: "#287BFF"
  },
  {
    id: "currency-converter",
    number: "04",
    name: "Currency Converter",
    category: "Interactive Web Application",
    tagline: "Live Exchange-Rate Engine with Real-Time Conversion Matrices",
    description: "A responsive currency conversion application using live exchange-rate API integration.",
    objective: "Provide international travelers, digital freelancers, and global shoppers with a lightweight, instantaneous calculation tool powered by live bank exchange feeds.",
    liveUrl: "https://arjunn-git.github.io/currency/",
    githubUrl: "https://github.com/arjunn-git/currency",
    githubVerified: true,
    technologies: ["React", "JavaScript (ES6+)", "Vite", "REST API", "Tailwind CSS"],
    features: [
      "Live exchange rates fetched in real-time through reliable currency APIs",
      "Support for 150+ global fiat currencies with instant swap mechanics",
      "Dynamic conversion calculations with zero page refresh delays",
      "Clean, tactile user interface with instant input validation",
      "Fully responsive mobile layout optimized for quick one-thumb interaction"
    ],
    contribution: [
      "Developed the modular React application utilizing custom state hooks",
      "Created resilient API fetch handlers with caching and graceful offline fallback",
      "Designed a clean interface prioritizing numerical clarity and swift inputs",
      "Engineered keyboard navigation accessibility for fast currency selection",
      "Configured automated GitHub Pages build & deployment pipelines"
    ],
    accentColor: "#287BFF"
  },
  {
    id: "resume-maker",
    number: "05",
    name: "Resume Maker & ATS Analyzer",
    category: "Productivity SaaS Application",
    tagline: "ATS-Optimized Career Resume Builder & Real-Time Scoring Platform",
    description: "A resume-building application designed to help users create structured professional resumes and evaluate ATS compatibility.",
    objective: "Help job seekers and software engineers create structured, recruiter-ready resumes that pass Applicant Tracking Systems (ATS) with real-time scoring and actionable feedback.",
    liveUrl: "https://resume-maker-nine-livid.vercel.app/",
    githubUrl: "https://github.com/arjunn-git/resume_maker",
    githubVerified: true,
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express"],
    features: [
      "Step-by-step structured resume builder with live dynamic preview",
      "Intelligent ATS scoring algorithm checking keyword density and structural compliance",
      "Custom section management for technical experience, projects, and education",
      "Instant PDF export styling preserved across standard printer page ratios",
      "Actionable improvement guidance highlighting weak bullet points and missing metrics"
    ],
    contribution: [
      "Built the interactive builder UI with real-time document synchronization",
      "Formulated the ATS parsing evaluation logic and scoring feedback system",
      "Crafted responsive Tailwind CSS styling with print-specific media queries",
      "Integrated Node.js backend validation endpoints",
      "Deployed and verified production builds on Vercel"
    ],
    accentColor: "#287BFF"
  }
];
