export const siteConfig = {
  name: "Mubasir Halidu",
  role: "Full-Stack Engineer & Cloud Architect",
  tagline:
    "I build production-grade platforms, automate cloud infrastructure, and ship software that scales — from Next.js frontends to Kubernetes clusters.",
  email: "halidumubashir@gmail.com",
  phone: "+233549790023",
  location: "Ghana / Beirut, Lebanon",
  github: "https://github.com/Halidu-Mubasir",
  linkedin: "https://linkedin.com/in/halidu-mubasir-44077b204",
  resumeUrl: "/Mubasir_Halidu_CV.pdf",
};

export const about = {
  summary:
    "Full-stack engineer and cloud practitioner with 3+ years of experience shipping production software across the entire lifecycle. I specialize in building React/Next.js frontends, Django and Node.js backends, and deploying them through CI/CD pipelines and containerized environments on AWS and Azure. I'm passionate about AI-integrated platforms, developer tooling, and solving real-world problems through technology.",
  highlights: [
    "AWS Certified DevOps Engineer — Professional",
    "Azure Developer Associate (AZ-204)",
    "AWS Certified Developer — Associate",
    "BSc. Computer Science — Magna Cum Laude (3.75/4.0)",
    "MA in Computing in Education — AUB (in progress)",
  ],
};

export const experiences = [
  {
    company: "CloudFruition",
    role: "Full-Stack & Cloud Engineer",
    location: "Remote, Ghana",
    period: "Sep 2024 — Present",
    achievements: [
      "Architected AutoRollback, a full-stack CI/CD platform with Next.js + Django, cutting failed deployment recovery time by 40%",
      "Automated infrastructure provisioning with Terraform and Python across AWS and Azure, reducing manual deployment time by 60%",
      "Led ISO 27001 compliance assessment across 114 controls, identifying critical gaps in access management and encryption",
      "Removed 50+ deprecated Azure RBAC roles, reducing the privileged access attack surface by 40%",
      "Built monitoring systems with Azure Monitor and KQL queries, reducing MTTR by 35%",
      "Managed AKS clusters for microservices, optimizing container build times by 30%",
      "Mentored team members to 100% pass rate on AWS certifications",
    ],
  },
  {
    company: "GhanaNLP",
    role: "Machine Learning Engineer Intern",
    location: "Remote, Ghana",
    period: "Jun 2023 — Aug 2023",
    achievements: [
      "Built an interactive Gradio frontend for an ASR model serving low-resource African languages",
      "Implemented QA testing pipelines for speech recognition and translation models",
      "Created and cleaned a large-scale dataset for the Dagbani language, advancing low-resource NLP research",
    ],
  },
];

export const education = [
  {
    institution: "American University of Beirut",
    degree: "MA in Computing in Education",
    location: "Beirut, Lebanon",
    period: "Sep 2025 — May 2027 (Expected)",
  },
  {
    institution: "Ashesi University",
    degree: "BSc. Computer Science — Magna Cum Laude",
    location: "Eastern Region, Ghana",
    period: "Jan 2021 — Aug 2024",
    gpa: "3.75 / 4.00",
  },
];

export const projects = [
  {
    title: "AutoRollback",
    description:
      "A full-stack CI/CD automation platform for Azure deployments. Features a Next.js dashboard and Django REST backend for configuring deployments, triggering automated rollbacks, and monitoring release health in real time.",
    tech: ["Next.js", "Django REST", "Azure APIs", "GitHub Actions", "OAuth 2.0"],
    github: "https://github.com/Halidu-Mubasir",
    featured: true,
  },
  {
    title: "Inspired Minds LMS",
    description:
      "A dual-product platform for Ghana's premier home tutoring agency: a marketing website and a full LMS with teacher and student portals, quiz auto-grading, assignment management, and real-time messaging.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/Halidu-Mubasir/inspired-minds",
    featured: true,
  },
  {
    title: "DASA Connect",
    description:
      "A governance and community platform serving 500+ students. Features a secure election system with secret ballot logic, RBAC admin dashboard, marketplace, and academic repository.",
    tech: ["Next.js", "Django REST", "Docker", "Recharts"],
    github: "https://github.com/Halidu-Mubasir/dasa-knust-app",
    featured: true,
  },
  {
    title: "Hifdh Practice App",
    description:
      "A cross-platform mobile app for Quran memorization practice. Offline-first architecture with SQLite, Gemini AI-powered trial generation, and audio playback with caching.",
    tech: ["React Native", "Expo", "Supabase", "Gemini AI", "SQLite"],
    github: "https://github.com/Halidu-Mubasir",
    featured: true,
  },
  {
    title: "Conversational Simulations",
    description:
      "An AI platform where users hold contextually rich conversations with historically accurate simulations of famous figures, powered by LLM APIs with custom persona prompting.",
    tech: ["Next.js", "TypeScript", "LLM APIs", "React"],
    github: "https://github.com/Halidu-Mubasir/Conversational-Simulations-Platform",
    featured: false,
  },
  {
    title: "Fixit Ghana",
    description:
      "A two-sided marketplace connecting Ghanaian service vendors with customers. Integrates Google Maps for location-based proximity search and vendor discovery.",
    tech: ["Next.js", "TypeScript", "Google Maps API"],
    github: "https://github.com/Halidu-Mubasir/fixit-ghana",
    featured: false,
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Native",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Django",
      "Django REST Framework",
      "Flask",
      "Node.js",
      "Express.js",
      "REST API Design",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    category: "AI & Data",
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "Machine Learning",
      "NLP",
      "Python",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"],
  },
  {
    category: "Monitoring",
    skills: [
      "Azure Monitor",
      "CloudWatch",
      "Prometheus",
      "Grafana",
      "KQL",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
