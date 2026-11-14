export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Web Designer",
    company: "Adaan Digital Solutions",
    period: "June 2025 – Present",
    location: "India",
    type: "Full-Time",
    responsibilities: [
      "Developing responsive websites and high-performance interfaces across diverse client accounts.",
      "Engineering modular web interfaces with HTML, modern CSS, JavaScript (ES6+), and React.",
      "Building reusable, atomic frontend component libraries to accelerate cross-team development.",
      "Integrating REST APIs for seamless dynamic data rendering and form processing.",
      "Converting high-fidelity Figma designs into pixel-perfect, accessible, and responsive interfaces.",
      "Auditing and improving website performance, Core Web Vitals, and multi-device usability.",
      "Working with Git, GitHub, and collaborative pull-request workflows in an Agile team setup."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Manipal University Jaipur",
    period: "2026 – 2028",
    specialization: "AI / ML Specialization",
    description: "Advanced curriculum focused on artificial intelligence, machine learning architectures, high-scale algorithmic development, and modern cloud computation."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St Andrews Institute of Technology & Management, Gurugram",
    period: "2022 – 2025",
    description: "Foundational computer science degree covering data structures, object-oriented programming (Java/C++), relational database systems, and web architecture fundamentals."
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Java Full Stack Development",
    issuer: "DUCAT",
    description: "Comprehensive enterprise full-stack training covering Java, JDBC, Spring Boot, REST APIs, and relational database management."
  },
  {
    title: "Web Development Certification",
    issuer: "Apna College",
    description: "Rigorous frontend and full-stack curriculum focused on HTML5, modern CSS, JavaScript ES6+, React, Node.js, and web application architecture."
  }
];
