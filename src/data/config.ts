// Centralized Portfolio Configuration
// All components read from this single source of truth.

export const SITE_CONFIG = {
  name: "Arjun Taneja",
  brand: "ARJUN®",
  headline: "Web Designer | Frontend Developer | SaaS Web Builder",
  subheadline: "Designing the Digital Frontier through high-impact 3D visuals, precision frontend engineering, and conversion-focused SaaS applications.",
  location: "Faridabad, Haryana, India",
  timezone: "Asia/Kolkata",
  email: "arjuntaneja204@gmail.com",
  
  social: {
    github: "https://github.com/arjunn-git",
    // Only display clickable LinkedIn if URL is provided in env variable; never invent
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "",
  },

  // Central availability toggle & indicator text
  freelance: {
    available: true,
    statusText: "Available for freelance enquiries.",
    badgeText: "AVAILABLE FOR WORK",
    preferredTurnaround: "1–4 Weeks",
  },

  // Genuine resume PDF url (leave empty or set path when resume file is added)
  resume: {
    url: "", // Download button shown only when genuine PDF is connected
    label: "Download Resume",
  },

  // Contact service settings
  contactService: {
    apiUrl: import.meta.env.VITE_CONTACT_API_URL || "",
    emailJsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    emailJsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    emailJsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  },

  // Palette hex values for canvas & dynamic components
  colors: {
    midnight: "#080B12",
    slateNavy: "#171F2D",
    electricBlue: "#287BFF",
    iceWhite: "#DCE6F2",
    steelBlue: "#8FA9C9",
    mutedGrey: "#8993A3",
  }
};
