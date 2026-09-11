// Local Asset Imports - Structured Folders
import logo from '../assets/images/logos/logo.png';
import footerLogo from '../assets/images/logos/footerLogo.png';
import favicon from '../assets/images/logos/favicon.png';

import heroGraphic from '../assets/images/graphics/heroGraphic.png';
import whoWeAreGraphic from '../assets/images/graphics/whoWeAreGraphic.png';
import servicesSphere from '../assets/images/graphics/servicesSphere.png';
import whyChooseUsGraphic from '../assets/images/graphics/whyChooseUsGraphic.png';
import howWeWorkGraphic from '../assets/images/graphics/howWeWorkGraphic.png';

import client_sda from '../assets/images/clients/client_sda.png';
import client_kyro from '../assets/images/clients/client_kyro.png';
import client_navis from '../assets/images/clients/client_navis.png';
import client_ssp from '../assets/images/clients/client_ssp.png';
import client_pravin from '../assets/images/clients/client_pravin.png';
import client_rvr from '../assets/images/clients/client_rvr.png';
import client_lenient from '../assets/images/clients/client_lenient.png';
import client_aanddal from '../assets/images/clients/client_aanddal.png';
import client_europrogetti from '../assets/images/clients/client_europrogetti.png';
import client_texcher from '../assets/images/clients/client_texcher.png';
import client_mochooo from '../assets/images/clients/client_mochooo.png';
import client_frame2 from '../assets/images/clients/client_frame2.png';
import client_frame3 from '../assets/images/clients/client_frame3.png';

import avatar_lenin from '../assets/images/avatars/avatar_lenin.png';
import avatar_praveen from '../assets/images/avatars/avatar_praveen.jpg';
import avatar_prakash from '../assets/images/avatars/avatar_prakash.png';
import avatar_thangavelu from '../assets/images/avatars/avatar_thangavelu.png';

// Pep Software Authentic Dataset
export const siteConfig = {
  name: "Pep Software",
  legalName: "Pep Softwares",
  tagline: "Digital Excellence Starts Here",
  slogan: "Seize the digital spotlight and boost your business with Pep Software.",
  logo: logo,
  footerLogo: footerLogo,
  favicon: favicon,
  heroGraphic: heroGraphic,
  whoWeAreGraphic: whoWeAreGraphic,
  servicesFloatingSphere: servicesSphere,
  whyChooseUsGraphic: whyChooseUsGraphic,
  howWeWorkGraphic: howWeWorkGraphic,
  contact: {
    email: "contact@pepsoftwares.com",
    phone: "+91 94895 24424",
    address: "Erode, Tamil Nadu, India",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST"
  },
  socials: {
    linkedin: "https://linkedin.com/company/pep-software",
    instagram: "https://instagram.com/pepsoftware",
    facebook: "https://facebook.com/pepsoftware",
    twitter: "https://twitter.com/pepsoftware",
    whatsapp: "https://wa.me/919489524424"
  }
};

export const clientLogos = [
  { name: "SDA Clothing", url: client_sda },
  { name: "Kyro Steels", url: client_kyro },
  { name: "Navis Studio", url: client_navis },
  { name: "SSP Infra Projects", url: client_ssp },
  { name: "Pravin Bottelings", url: client_pravin },
  { name: "RVR Bags", url: client_rvr },
  { name: "Lenient Technologies", url: client_lenient },
  { name: "Aanddal Constructions", url: client_aanddal },
  { name: "Europrogetti", url: client_europrogetti },
  { name: "Texcher Impex", url: client_texcher },
  { name: "Mochooo TV", url: client_mochooo },
  { name: "Frame 2", url: client_frame2 },
  { name: "Frame 3", url: client_frame3 }
];

export const companyStats = [
  { value: "5", label: "Years Experience", desc: "Crafting digital enterprise solutions" },
  { value: "25+", label: "Website Projects", desc: "Delivered for global clients" },
  { value: "10+", label: "Mobile App Projects", desc: "Built for iOS & Android" },
  { value: "4.7", label: "Review Clients", desc: "Average client rating rating score" }
];

export const servicesData = [
  {
    id: "ui-ux-design-services",
    slug: "ui-ux-design-services",
    title: "UI/UX Design",
    iconName: "Palette",
    shortDesc: "We design beautiful, user-friendly interfaces that improve engagement and deliver exceptional user experiences across web and mobile platforms.",
    fullDesc: "At Pep Software, our UI/UX design process centers on deep user research, strategic wireframing, interactive prototyping, and modern aesthetic design. We turn complex visual concepts into seamless, intuitive user experiences that convert visitors into loyal customers.",
    badge: "Design & Research",
    features: [
      "User Research & Wireframing",
      "Interactive High-Fidelity Prototypes",
      "Design Systems & Component Libraries",
      "Mobile & Web UI Design",
      "Usability Testing & Design Audit"
    ],
    deliverables: [
      "Pixel-perfect Figma Design Files",
      "Complete Typography & Color Guidelines",
      "Clickable Interactive Prototypes",
      "Responsive Layout Grid Specifications"
    ]
  },
  {
    id: "web-design-and-development-services",
    slug: "web-design-and-development-services",
    title: "Website Development",
    iconName: "Globe",
    shortDesc: "From sleek business websites to advanced web applications, we build SEO-optimized, responsive, and high-performing digital platforms that grow your brand.",
    fullDesc: "From custom React/Next.js web applications to responsive e-commerce stores and enterprise web portals, Pep Software delivers scalable, ultra-fast web solutions tailored to your unique business goals.",
    badge: "Web Engineering",
    features: [
      "Custom React & Next.js Web Development",
      "Responsive & Mobile-Optimized Layouts",
      "E-Commerce & Payment Gateway Integration",
      "Headless CMS & Custom WordPress",
      "SEO Optimization & Lightning Fast Speed"
    ],
    deliverables: [
      "Production-ready Clean Codebase",
      "Fully Responsive Across All Screens",
      "SSL, Security & Speed Optimization",
      "Admin Panel & Content Management Setup"
    ]
  },
  {
    id: "mobile-app-development-services",
    slug: "mobile-app-development-services",
    title: "Mobile App Development",
    iconName: "Smartphone",
    shortDesc: "We build fast, intuitive mobile apps tailored to your business goals. From concept to launch, we ensure a smooth, user-focused experience across devices.",
    fullDesc: "We build powerful iOS and Android mobile applications using Flutter and React Native. Whether you need a customer-facing app, an e-commerce mobile store, or an enterprise mobile tool, we ensure top-tier performance.",
    badge: "Mobile Apps",
    features: [
      "iOS & Android Mobile App Development",
      "Cross-Platform Flutter & React Native",
      "Real-time Push Notifications & APIs",
      "Secure In-App Payments & Auth",
      "App Store & Google Play Publishing"
    ],
    deliverables: [
      "Native iOS (.ipa) & Android (.apk/.aab) Builds",
      "App Store Deployment Assistance",
      "RESTful API & Cloud Backend Integration",
      "6 Months Post-Launch Support"
    ]
  },
  {
    id: "ar-vr-design-and-development",
    slug: "ar-vr-design-and-development",
    title: "AR/VR Design",
    iconName: "Layers",
    shortDesc: "Create immersive AR/VR experiences that engage and inspire. We design interactive 3D content for web, mobile, and VR platforms.",
    fullDesc: "Unlock the future of digital interaction with Pep Software's AR/VR development. We build interactive 3D product visualizations, virtual showrooms, and WebAR applications that create unforgettable brand experiences.",
    badge: "Next-Gen Tech",
    features: [
      "Interactive 3D Product Visualization",
      "WebAR (Browser-Based Augmented Reality)",
      "Virtual Showrooms & Real Estate Walkthroughs",
      "3D Model Optimization & Rendering",
      "Cross-Device AR Integration"
    ],
    deliverables: [
      "Web-ready 3D/AR Web Components",
      "Interactive Virtual Tour Systems",
      "Optimized 3D Asset Files (.glb, .usdz)",
      "User Analytics & Engagement Tracking"
    ]
  }
];

export const portfolioProjects = [
  // WEBSITES
  {
    id: "twilight-engineering",
    title: "Twilight Engineering Solutions Ltd",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_rvr,
    bgAccent: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
    type: "website"
  },
  {
    id: "italian-water-consultancy",
    title: "Italian Water Consultancy (IWS)",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_navis,
    bgAccent: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    type: "website"
  },
  {
    id: "erodu-eye-bank",
    title: "Erodu Eye Bank",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_kyro,
    bgAccent: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
    type: "website"
  },
  {
    id: "shine-jewellery",
    title: "Shine Jewellery E-Commerce",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_sda,
    bgAccent: "linear-gradient(135deg, #047857 0%, #34D399 100%)",
    type: "website"
  },
  {
    id: "grand-launch-discounts",
    title: "Baking & Cake Supplies Store",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_ssp,
    bgAccent: "linear-gradient(135deg, #B91C1C 0%, #F87171 100%)",
    type: "website"
  },
  {
    id: "metal-supplier",
    title: "Metal & Raw Material Supplier",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_pravin,
    bgAccent: "linear-gradient(135deg, #D97706 0%, #FBBF24 100%)",
    type: "website"
  },
  {
    id: "allen-residency",
    title: "Allen Residency",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_lenient,
    bgAccent: "linear-gradient(135deg, #4C1D95 0%, #8B5CF6 100%)",
    type: "website"
  },
  {
    id: "pravin-bottelings-web",
    title: "Pravin Bottelings",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_aanddal,
    bgAccent: "linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)",
    type: "website"
  },
  {
    id: "hakir-pharma",
    title: "Hakir Pharmaceuticals",
    category: "WEBSITES",
    categoryKey: "web",
    image: client_europrogetti,
    bgAccent: "linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)",
    type: "website"
  },

  // MOBILE APPS
  {
    id: "esuba-app",
    title: "ESUBA – Android App",
    category: "MOBILE APPS",
    categoryKey: "mobile",
    logoText: "ESUBA",
    screenBg: "#EAB308",
    bgAccent: "#FEF08A",
    type: "mobile"
  },
  {
    id: "lenient-tech-app",
    title: "Lenient Technologies – Android App",
    category: "MOBILE APPS",
    categoryKey: "mobile",
    logoText: "Lenient",
    logoSub: "Technologies",
    screenBg: "#FFFFFF",
    bgAccent: "#4ADE80",
    type: "mobile"
  },
  {
    id: "g-elite-app",
    title: "G-Elite – Android, iOS App",
    category: "MOBILE APPS",
    categoryKey: "mobile",
    logoText: "G-ELITE",
    screenBg: "#16A34A",
    bgAccent: "#FACC15",
    type: "mobile"
  },
  {
    id: "feedit-app",
    title: "FeedIt – Android App",
    category: "MOBILE APPS",
    categoryKey: "mobile",
    logoText: "FeedIt",
    screenBg: "#065F46",
    bgAccent: "#D1FAE5",
    type: "mobile"
  },
  {
    id: "rotary-app",
    title: "Rotary Means Business – Android App",
    category: "MOBILE APPS",
    categoryKey: "mobile",
    logoText: "ROTARY",
    logoSub: "Means Business",
    screenBg: "#1E3A8A",
    bgAccent: "#3B82F6",
    type: "mobile"
  },
  {
    id: "rainbow-tv-app",
    title: "Rainbow TV – Mobile App",
    category: "MOBILE APPS",
    categoryKey: "mobile",
    logoText: "Rainbow TV",
    screenBg: "linear-gradient(180deg, #38BDF8 0%, #1E3A8A 100%)",
    bgAccent: "#C084FC",
    type: "mobile"
  },

  // AR / VR
  {
    id: "ar-showroom-3d",
    title: "3D Virtual Product Showroom",
    category: "AR/VR",
    categoryKey: "ar-vr",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&auto=format&fit=crop&q=80",
    bgAccent: "linear-gradient(135deg, #7C3AED 0%, #C084FC 100%)",
    type: "website"
  },
  {
    id: "vr-training-sim",
    title: "VR Industrial Training Simulator",
    category: "AR/VR",
    categoryKey: "ar-vr",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=80",
    bgAccent: "linear-gradient(135deg, #059669 0%, #34D399 100%)",
    type: "website"
  },
  {
    id: "ar-architectural-model",
    title: "WebAR Architectural 3D Model",
    category: "AR/VR",
    categoryKey: "ar-vr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    bgAccent: "linear-gradient(135deg, #EA580C 0%, #FDBA74 100%)",
    type: "website"
  }
];

export const whyChooseUs = [
  {
    title: "Expertise in Digital Innovation",
    description: "We blend design thinking with emerging tech to create modern, user-focused solutions."
  },
  {
    title: "Proven Track Record of Success",
    description: "From startups to established brands, our projects drive measurable impact.",
    highlight: true
  },
  {
    title: "Dedicated and Experienced Team",
    description: "Our skilled team brings creativity, strategy, and execution to every project."
  }
];

export const workflowSteps = [
  {
    step: "1",
    title: "Free Consultation",
    description: "We understand your needs, goals, and vision through a friendly, no-pressure call."
  },
  {
    step: "2",
    title: "Share Your Business Process",
    description: "Tell us how your business works — we'll align our solution with your real-world flow."
  },
  {
    step: "3",
    title: "Launch Your End Product",
    description: "After design and development, we deliver a ready-to-use digital solution — tested and deployed."
  }
];

export const testimonials = [
  {
    text: "We are Lenient Technologies, dealing with computer hardware sales and service in Erode. We needed a custom mobile app for our internal use to manage service calls and stock easily. The team clearly understood our requirements and delivered a user-friendly app, just the way we wanted. Very professional and supportive throughout the project. Thank you for your great work!",
    name: "Lenin",
    avatar: avatar_lenin
  },
  {
    text: "We are running a plastic bottle manufacturing company and wanted to build our website. We reached out to Pep Software, a trusted website design company in Erode. They understood our business clearly and designed a clean and professional site. The team is friendly and gave regular updates. Very happy with their work!",
    name: "Praveen",
    avatar: avatar_praveen
  },
  {
    text: "We are in the pharma business and we wanted to take our brand online. We found this website design company in Erode and they built a neat and clean website for us. Very friendly team and easy to work with. They delivered everything on time. Highly recommended for anyone looking for a professional website!",
    name: "Prakash",
    avatar: avatar_prakash
  },
  {
    text: "I recently got a one page website designed by Pep Software for my mutual fund platform, and I’m extremely happy with the result! The site is fast, clean, and looks great on both desktop and mobile. What impressed me the most was their affordable pricing and how quickly they delivered.",
    name: "Thangavelu B",
    avatar: avatar_thangavelu
  }
];
