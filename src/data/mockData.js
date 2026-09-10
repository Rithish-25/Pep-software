export const servicesData = [
  {
    id: "website-development",
    title: "Website Development",
    shortDesc: "Modern, responsive and high-performance websites built with cutting-edge technology.",
    fullDesc: "We craft visually stunning, SEO-optimized, and lightning-fast web applications tailored to elevate your brand presence and convert visitors into loyal customers.",
    iconName: "Globe",
    badge: "Web Solutions",
    features: [
      "Custom Frontend & Backend Architecture",
      "Progressive Web Apps (PWA) & Next.js",
      "E-Commerce & Payment Gateways",
      "SEO Optimization & Core Web Vitals Optimization",
      "Responsive & Mobile-First Design"
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Beautiful, intuitive and scalable mobile applications for iOS and Android.",
    fullDesc: "From conceptualization to App Store release, we build native and cross-platform mobile apps that offer native performance, sleek UI/UX, and robust offline capabilities.",
    iconName: "Smartphone",
    badge: "Mobile Solutions",
    features: [
      "iOS & Android App Development",
      "React Native & Flutter Cross-Platform Apps",
      "Intuitive UI/UX Mobile Interface Design",
      "App Store & Google Play Publishing",
      "Push Notifications & Cloud Synchronization"
    ]
  },
  {
    id: "customized-software",
    title: "Customized Software",
    shortDesc: "Tailored software solutions built for specific enterprise and business needs.",
    fullDesc: "Empower your business workflows with bespoke enterprise software, SaaS platforms, custom CRM systems, and cloud infrastructure tailored to your exact operational requirements.",
    iconName: "Cpu",
    badge: "Enterprise SaaS",
    features: [
      "Custom Enterprise ERP & CRM Platforms",
      "Cloud Architecture & Microservices",
      "API Integrations & Third-Party Connectors",
      "Database Optimization & High Security",
      "Automated Testing & Maintenance Support"
    ]
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "FinPulse Banking Portal",
    category: "Website Development",
    categoryId: "website-development",
    description: "Next-gen web portal for a digital banking platform featuring real-time transaction analytics.",
    image: "/images/project_banking.jpg",
    techStack: ["React", "Node.js", "Tailwind", "Chart.js"],
    client: "FinPulse Global",
    year: "2025"
  },
  {
    id: 2,
    title: "HealthConnect Mobile App",
    category: "Mobile App Development",
    categoryId: "mobile-app-development",
    description: "Telemedicine app allowing patients to consult with top doctors and track vitals seamlessly.",
    image: "/images/project_health.jpg",
    techStack: ["React Native", "Firebase", "WebRTC", "Redux"],
    client: "HealthConnect Inc",
    year: "2025"
  },
  {
    id: 3,
    title: "OmniStore ERP Suite",
    category: "Customized Software",
    categoryId: "customized-software",
    description: "End-to-end inventory management and supply chain enterprise software for multi-location retail.",
    image: "/images/project_erp.jpg",
    techStack: ["React", "Python", "PostgreSQL", "Docker"],
    client: "OmniStore Retail",
    year: "2024"
  },
  {
    id: 4,
    title: "Aether AI Content Platform",
    category: "Website Development",
    categoryId: "website-development",
    description: "SaaS web application providing AI-driven content creation and workflow management tools.",
    image: "/images/project_ai.jpg",
    techStack: ["React", "TypeScript", "OpenAI API", "AWS"],
    client: "Aether Labs",
    year: "2025"
  },
  {
    id: 5,
    title: "FitLife Tracker App",
    category: "Mobile App Development",
    categoryId: "mobile-app-development",
    description: "Cross-platform fitness app with customized workout plans, GPS tracking, and community challenges.",
    image: "/images/project_fitness.jpg",
    techStack: ["Flutter", "GraphQL", "Node.js", "MongoDB"],
    client: "FitLife Global",
    year: "2024"
  },
  {
    id: 6,
    title: "LogiSmart Logistics Hub",
    category: "Customized Software",
    categoryId: "customized-software",
    description: "Real-time fleet tracking and automated dispatch management software system for global logistics.",
    image: "/images/project_logistics.jpg",
    techStack: ["React", "Go", "Kubernetes", "Google Maps API"],
    client: "LogiSmart Cargo",
    year: "2025"
  }
];

export const companyStats = [
  { value: "150+", label: "Projects Delivered", icon: "CheckCircle" },
  { value: "99%", label: "Client Satisfaction", icon: "Smile" },
  { value: "10+", label: "Years Experience", icon: "Award" },
  { value: "24/7", label: "Dedicated Support", icon: "Clock" }
];

export const whyChooseUs = [
  {
    title: "Tailored Engineering",
    description: "We don't do cookie-cutter code. Every solution is custom engineered to solve your exact business challenges.",
    icon: "Code"
  },
  {
    title: "Scalable Architecture",
    description: "Built for growth from day one using modern cloud microservices and high-concurrency database designs.",
    icon: "Layers"
  },
  {
    title: "Visually Impressive UI",
    description: "We craft captivating user interfaces that engage users and project a world-class brand impression.",
    icon: "Sparkles"
  },
  {
    title: "On-Time Delivery",
    description: "Agile development sprints with clear milestones ensure your project launches on schedule every time.",
    icon: "Zap"
  }
];

export const testimonials = [
  {
    quote: "PEP Software transformed our digital infrastructure with an intuitive web platform and mobile app. Their purple & gold branded solutions exceeded all our expectations!",
    author: "Sarah Jenkins",
    role: "CTO, FinPulse Global",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The customized ERP software they created streamlined our supply chain management and boosted our operational efficiency by 45% in just 3 months.",
    author: "David Miller",
    role: "Operations Director, OmniStore Retail",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

export const faqs = [
  {
    question: "What technology stack does PEP Software use?",
    answer: "We specialize in modern JavaScript frameworks including React.js, Next.js, React Native, Node.js, Python, PostgreSQL, AWS, and Docker to ensure maximum performance and security."
  },
  {
    question: "How long does a typical website or custom software project take?",
    answer: "Project timelines depend on project scope. Standard websites typically take 2-4 weeks, while complex mobile apps or enterprise software take 6-12 weeks with agile sprint updates."
  },
  {
    question: "Do you provide post-launch maintenance and support?",
    answer: "Yes! We offer 24/7 dedicated post-launch support, server monitoring, security updates, and feature updates under flexible maintenance packages."
  },
  {
    question: "Can PEP Software customize existing software systems?",
    answer: "Absolutely. We specialize in modernizing legacy applications, API integrations, and building custom modular additions to existing software systems."
  }
];
