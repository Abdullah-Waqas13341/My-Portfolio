/**
 * Single source of truth for portfolio content.
 * Edit this file to update copy; add entries to arrays to scale.
 */

export type NavLink = { label: string; href: string };

export type ExperienceItem = {
  title: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  tech: string;
  description: string[];
  link?: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export const siteMeta = {
  name: "Abdullah Waqas",
  title: "ML · Computer Vision · Backend",
  location: "Islamabad, Pakistan",
  email: "abdullahwaqas13341@gmail.com",
  phone: "+92-317-5570045",
  linkedInUrl: "https://linkedin.com/in/abdwaqas",
  /** Set after deploy: e.g. https://your-name.vercel.app */
  siteUrl: "https://abdullah-waqas-portfolio.vercel.app",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headlineLead: "Building intelligent systems",
  headlineAccent: "that ship.",
  subline:
    "Computer Science @ NUST — ML, computer vision, and production backends. I turn research-grade models into fast, reliable software.",
  ctas: [
    { label: "View work", href: "#projects" },
    { label: "Get in touch", href: "#contact" },
  ],
};

export const about = {
  paragraphs: [
    "Results-driven Computer Science graduate from NUST specializing in machine learning, computer vision, and backend engineering.",
    "I've delivered production-grade AI models with over 95% accuracy and architected full-stack platforms handling 1,000+ daily transactions — with a focus on system design, high-performance APIs, and end-to-end ML pipeline deployment.",
  ],
  badges: ["NUST BS CS", "IELTS 7.0", "Open to roles"],
};

export const experience: ExperienceItem[] = [
  {
    title: "Data Science Intern",
    company: "10Pearls Pakistan",
    location: "Remote",
    period: "2026 – Present",
    highlights: [
      "Built end-to-end ML pipelines across 10+ datasets: preprocessing, feature engineering, and evaluation automation.",
      "Improved dataset quality via systematic cleaning and validation, boosting downstream model accuracy by ~30%.",
      "Exploratory analysis on 50,000+ records, surfacing 15+ feature correlations that informed model selection.",
    ],
  },
  {
    title: "Computer Vision Intern",
    company: "truID Technologies Pvt. Ltd.",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      "Face anti-spoofing and document tamper detection models with 95%+ precision on benchmark datasets.",
      "CNN and attention architectures (EfficientNet, SE-Net) across 5 attack vectors.",
      "Cut inference latency 50% for sub-200ms real-time mobile deployment.",
      "Shipped ML pipeline from preprocessing to production with monitoring dashboards.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Devsinc",
    location: "Islamabad",
    period: "Jan 2024 – Mar 2024",
    highlights: [
      "Scalable Django / DRF backends serving 500+ requests per minute.",
      "Unified 4 legacy services into RESTful APIs, reducing integration turnaround by 25%.",
      "ORM tuning (indexing, select_related) cut average response time by 30%.",
      "Hardened auth and RBAC — zero unauthorized access incidents during tenure.",
    ],
  },
];

export const education = {
  degree: "BS in Computer Science",
  school: "NUST, Islamabad",
  period: "2022 – 2026",
  extras: [
    "Coursework: Deep Learning, Computer Vision, Databases, Distributed Systems",
    "English: IELTS Overall Band 7.0",
  ],
};

export const projects: ProjectItem[] = [
  {
    name: "CereSignal",
    tech: "PyTorch, FastAPI",
    description: [
      "EEG signal classification reaching 92% diagnostic accuracy across 4 neurological conditions.",
      "Automated clinical report generation, reducing manual review time by ~60%.",
      "FastAPI inference deployment cutting end-to-end prediction latency by 40%.",
    ],
  },
  {
    name: "Agentic RAG with self-correction",
    tech: "Python, LangGraph, LlamaIndex, Tavily, Qdrant, RAGAS, Ollama",
    description: [
      "Autonomous research agent with multi-step reasoning and self-correction to limit hallucinations.",
      "LangGraph Self-RAG loop with Tavily fallback when internal retrieval is insufficient.",
      "Qdrant semantic search with multi-query expansion; +30% faithfulness vs. naive RAG (RAGAS).",
    ],
  },
  {
    name: "Face anti-spoofing",
    tech: "PyTorch, OpenCV",
    description: [
      "Dual-model CV pipeline: liveness + document integrity, 95%+ accuracy.",
      "Texture features and anomaly scoring; preprocessing improvements lifted edge-case recall ~18%.",
    ],
  },
  {
    name: "ID card tamper detection",
    tech: "PyTorch, EfficientNetB4, FPN, attention",
    description: [
      "Production-grade tamper detection at 95%+ accuracy.",
      "6-channel EfficientNetB4, FPN multi-scale fusion, spatial + channel attention.",
    ],
  },
  {
    name: "Cityscapes semantic segmentation",
    tech: "PyTorch, DeepLabv3",
    description: [
      "Pixel-level urban scene segmentation with augmentation and fine-tuned pretrained weights.",
      "Strong IoU / pixel accuracy on roads, pedestrians, vehicles, and buildings.",
    ],
  },
  {
    name: "Home services platform",
    tech: "Node.js, React, PostgreSQL, Redis",
    description: [
      "Full-stack booking with admin dashboards; 200+ concurrent users in load testing.",
      "~30% backend gains via query optimization and Redis response caching.",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"],
  },
  {
    title: "ML / AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "CNNs",
      "Computer Vision",
      "LLMs",
      "RAG",
      "Hugging Face",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Django", "FastAPI", "REST", "GraphQL"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & tools",
    items: ["Docker", "Git", "GitHub Actions", "Celery", "WebSockets", "Apache Solr"],
  },
];
