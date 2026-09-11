import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  ChevronDown,
  ArrowUpRight,
  Plus,
  Target,
  Layers,
  Check,
  FileText
} from 'lucide-react';
import { servicesData, siteConfig } from '../../data/mockData';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './SubServicePage.css';

const DesignProcessWheel = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const defaultSteps = [
    {
      title: "Empathize",
      desc: "Understand users deeply through research, user interviews, and behavior analysis to uncover real needs and pain points."
    },
    {
      title: "Define",
      desc: "Analyze insights to clearly define core user problems, project goals, and key feature requirements."
    },
    {
      title: "Ideate",
      desc: "Brainstorm creative concepts, sketch user flows, and explore multiple design possibilities."
    },
    {
      title: "Prototype",
      desc: "Build interactive wireframes and high-fidelity prototypes to visualize the product experience."
    },
    {
      title: "Test",
      desc: "Validate design solutions with real users, gather feedback, and iterate for perfection."
    }
  ];

  const currentSteps = steps && steps.length > 0 ? steps : defaultSteps;

  return (
    <div className="design-process-wheel-container">
      <div className="process-circle-ring">
        <div className="process-center-content">
          <p>{currentSteps[activeStep]?.desc || currentSteps[0]?.desc}</p>
        </div>

        {currentSteps.map((step, idx) => {
          const angle = -90 + idx * (360 / currentSteps.length);
          const rad = (angle * Math.PI) / 180;
          const radius = 180; // px
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <button
              key={idx}
              type="button"
              className={`process-node-btn ${idx === activeStep ? 'active' : ''}`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`
              }}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
            >
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const caseStudy7List = [
  {
    title: "Organic Edge",
    category: "E-Commerce UX",
    image: "https://pepsoftwares.com/wp-content/uploads/2025/07/Rectangle-28-5-scaled.png"
  },
  {
    title: "Giving Heart",
    category: "Charity Platform",
    image: "https://pepsoftwares.com/wp-content/uploads/2025/07/Rectangle-28-2-scaled.png"
  },
  {
    title: "Bee Sure",
    category: "Farmer Connect UX",
    image: "https://pepsoftwares.com/wp-content/uploads/2025/07/Rectangle-28-1-scaled.png"
  },
  {
    title: "BloodDrop",
    category: "Healthcare Dashboard",
    image: "https://pepsoftwares.com/wp-content/uploads/2025/07/Rectangle-28-3-scaled.png"
  },
  {
    title: "Glamify",
    category: "Salon Booking UX",
    image: "https://pepsoftwares.com/wp-content/uploads/2025/07/Rectangle-28-scaled.png"
  },
  {
    title: "Feature Film",
    category: "Movie Booking App",
    image: "https://pepsoftwares.com/wp-content/uploads/2025/07/Rectangle-28-4-scaled.png"
  },
  {
    title: "Udanvaa",
    category: "Patient Management",
    image: "https://pepsoftwares.com/wp-content/uploads/2025/07/Rectangle-28-3-scaled.png"
  }
];

const CaseStudy3DCurvedCarousel = () => {
  const [progress, setProgress] = useState(0);
  const animRef = useRef(null);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // Continuous linear movement over ~10s cycle
      setProgress((prev) => (prev + delta * 0.65) % caseStudy7List.length);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const N = caseStudy7List.length;

  return (
    <div className="case-study-3d-stage">
      <div className="case-study-3d-track-container">
        {caseStudy7List.map((card, i) => {
          let pos = (i - progress + N) % N;
          if (pos > N / 2) pos -= N;
          if (pos < -N / 2) pos += N;

          // 3D Arc Curve Math
          const spacing = 280; // horizontal spacing in px
          const x = pos * spacing;
          const rotateY = -pos * 22; // rotate in 3D arc
          const z = 80 - Math.abs(pos) * 60; // front card z=80, edge cards z=-130
          const scale = Math.max(0.68, 1 - Math.abs(pos) * 0.08);
          const opacity = Math.abs(pos) > 3.8 ? 0 : Math.max(0.3, 1 - (Math.abs(pos) - 2.8) * 0.5);
          const zIndex = Math.round(100 - Math.abs(pos) * 10);

          return (
            <div
              key={i}
              className="case-study-3d-card-item"
              style={{
                transform: `translate3d(calc(-50% + ${x}px), -50%, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                willChange: 'transform, opacity'
              }}
            >
              <img src={card.image} alt={card.title} className="case-study-card-img" />
              <div className="case-study-card-overlay">
                <span>{card.category}</span>
                <h4>{card.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SubServicePage = ({ serviceSlug }) => {
  const params = useParams();
  const activeSlug = serviceSlug || params.slug || '';

  const [openFaq, setOpenFaq] = useState(0);

  const isWebDev = activeSlug.includes('website') || activeSlug.includes('web-design');
  const isMobileApp = activeSlug.includes('mobile');
  const isArVr = activeSlug.includes('ar-vr');

  const pageData = isWebDev ? {
    title: "Website Development",
    subTitle: "Inspired Design. Intelligent Development.",
    titleGradient: "linear-gradient(90deg, #FF7A00 0%, #FF4D4D 50%, #E91E63 100%)",
    descHeadline: "Responsive Web Design & Development That Works Seamlessly Across Devices",
    descP1: "Web design and development services are the foundation of a powerful online presence. Design defines how your website looks—its layout, typography, color scheme, and overall feel—while development brings that design to life with clean, performant code.",
    descLi1: "• Front-end Development covers responsive HTML, CSS, JavaScript, and React interfaces that users see and interact with.",
    descLi2: "• Back-end & CMS Integration ensures your site is dynamic, secure, easy to manage, and scalable for business growth.",
    descSummary: "Together, design and development shape your online identity — compelling design engages visitors, solid development converts them into customers.",
    descCallout: "👉 Transform your online presence with our proven Website Development services.",
    servicesTitle: "Our Website Services",
    offeringsLayout: "two-column-graphic",
    offerings: [
      {
        title: "Custom Website Design",
        desc: "We create customized website designs that combine the aesthetics of visual branding with the functionality of user-centered interfaces. With a strong blend of UI/UX design principles, every website we craft is tailored to reflect your brand, engage your audience, and support your business goals."
      },
      {
        title: "Front-end Development",
        desc: "We develop responsive websites using HTML, CSS, JavaScript, Bootstrap, and React JS — delivering fast, pixel-perfect performance across all devices."
      },
      {
        title: "Custom WordPress Websites",
        desc: "We design and build custom WordPress websites — combining creative layouts with powerful CMS flexibility."
      },
      {
        title: "One-Page Website",
        desc: "Perfect for portfolios, startups, and small businesses — our single page websites are fast, focused, and built for simplicity and impact."
      },
      {
        title: "E-Commerce Websites",
        desc: "We build customized, scalable e-commerce websites using Shopify and WooCommerce, tailored to your products and business goals. From sleek storefront design to secure checkout and mobile optimization, we ensure a smooth shopping experience that drives sales and builds trust with your customers."
      }
    ],
    processTitle: "Website Development Life Cycle (WDLC)",
    processSteps: [
      {
        title: "Requirement Gathering",
        desc: "We understand your business goals, target audience, and functional requirements."
      },
      {
        title: "UI/UX Design",
        desc: "Create intuitive wireframes, responsive layouts, and interactive prototypes tailored to your brand."
      },
      {
        title: "Development",
        desc: "Write clean, scalable front-end and back-end code using modern web frameworks."
      },
      {
        title: "Testing",
        desc: "Perform rigorous cross-browser testing, mobile responsiveness checks, and performance audits."
      },
      {
        title: "Launch & Support",
        desc: "Deploy to production server, configure SEO & domain, and provide ongoing technical maintenance."
      }
    ],
    whyMattersTitle: "What Makes a Good Website?",
    whyMattersSub: "Great design isn't just visual—it drives engagement, trust, and results. Discover why our Website Development Services are critical to your product's success.",
    whyItMatters: [
      {
        title: "First Impression Counts",
        desc: "75% of users judge a brand's credibility based on its website. A clean, modern design creates instant trust.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Higher Conversion",
        desc: "Responsive layouts and clear navigation guide users effectively, increasing conversions by up to 300%.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "User Retention",
        desc: "Fast-loading, mobile-friendly websites keep users engaged, boost retention, and reduce bounce rates.",
        img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Boost Credibility",
        desc: "A secure, well-developed website with consistent branding builds confidence and improves user loyalty.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=80"
      }
    ],
    whyChooseTitle: "Why Choose Pep Software?",
    whyChooseSub: "Crafting digital excellence through innovation, precision, and user-first thinking.",
    whyChooseCards: [
      {
        icon: Plus,
        title: "Tailored Solutions",
        desc: "We build strategies and digital products that align perfectly with your unique business needs and goals."
      },
      {
        icon: Target,
        title: "User-Centered Design",
        desc: "We prioritize your users through UX research, journey mapping, and accessibility-focused UI design."
      },
      {
        icon: Layers,
        title: "Innovation-Driven Approach",
        desc: "Using AI, AR/VR and next-gen tech, we bring creative and functional solutions to life."
      },
      {
        icon: Check,
        title: "Transparent Workflow",
        desc: "We communicate openly, work in agile sprints, and deliver with full clarity and timelines."
      }
    ],
    ctaTitle: "Need a Website That Works for Your Business?",
    ctaSub: "From idea to launch, we design and build custom websites that are fast, responsive, and tailored to your goals. Let's create a site that not only looks great but delivers real results.",
    ctaBtnText: "Request a Quote"
  } : isMobileApp ? {
    title: "Mobile App Design & Development",
    subTitle: "Design with Purpose. Develop with Precision. Deliver with Impact.",
    titleGradient: "linear-gradient(90deg, #FF7A00 0%, #FF4D4D 50%, #E91E63 100%)",
    descHeadline: "Transform Your Ideas into Powerful Mobile Apps",
    descP1: "At Pep Software, we craft intuitive, high-performance mobile app development services that engage your audience and drive business growth. Whether it's Android, iOS, or cross-platform, our apps are built for speed, security, and seamless user experience.",
    descLi1: "• Native & Cross-Platform Development covers iOS (Swift), Android (Kotlin), and Flutter / React Native solutions.",
    descLi2: "• Backend Integration & Cloud Infrastructure ensures real-time sync, push notifications, and enterprise security.",
    descSummary: "Our user-first approach guarantees mobile applications that rank high on App Store and Google Play while driving user retention.",
    descCallout: "👉 Elevate your mobile presence with our end-to-end Mobile App Development services.",
    servicesTitle: "Our Mobile App Development Services",
    offeringsLayout: "grid",
    offerings: [
      {
        title: "Android App Development",
        desc: "Native apps for Google Play ecosystem."
      },
      {
        title: "iOS App Development",
        desc: "High-quality apps for Apple devices."
      },
      {
        title: "Cross-Platform App Development",
        desc: "Our designs are clean, responsive, and brand-aligned—essential for any successful mobile app development company."
      },
      {
        title: "Progressive Web Apps (PWA)",
        desc: "Fast, installable web apps."
      },
      {
        title: "UI/UX Design for Apps",
        desc: "Pixel-perfect, user-friendly interfaces."
      },
      {
        title: "App Maintenance & Updates",
        desc: "Keep your app fresh & secure."
      }
    ],
    processTitle: "Mobile App Development Lifecycle",
    processSteps: [
      {
        title: "Requirement Analysis",
        desc: "Understanding your goals and target audience."
      },
      {
        title: "Wireframing & UI/UX Design",
        desc: "Crafting intuitive layouts and interactive user interfaces."
      },
      {
        title: "Development & Coding",
        desc: "Building native or cross-platform mobile apps."
      },
      {
        title: "Testing & Quality",
        desc: "Ensuring flawless performance across multiple device screen sizes."
      },
      {
        title: "Deployment & Launch",
        desc: "Publishing your app seamlessly to App Store and Google Play."
      },
      {
        title: "Maintenance & Support",
        desc: "Providing continuous updates, security patches, and optimizations."
      }
    ],
    whyMattersTitle: "What Makes a Great Mobile App?",
    whyMattersSub: "Great design isn't just visual—it drives engagement, trust, and results. Discover why UI UX Design Services are critical to your product's success.",
    whyItMatters: [
      {
        title: "Simple, clean navigation",
        desc: "94% of users form their first impression based on design alone. A visually appealing and intuitive design builds trust instantly.",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Fast loading speed",
        desc: "Better UX through clear navigation and simple actions enhances user experience, increasing conversion rates by up to 200%.",
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Eye-catching UI design",
        desc: "An intuitive and user-friendly design reduces confusion and frustration, helping to retain users and lower churn rates.",
        img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Offline functionality",
        desc: "A consistent, modern design builds trust with users, making your brand appear professional and increasing engagement.",
        img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Robust security",
        desc: "An intuitive and user-friendly design reduces confusion and frustration, helping to retain users and lower churn rates.",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Regular updates",
        desc: "A consistent, modern design builds trust with users, making your brand appear professional and increasing engagement.",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80"
      }
    ],
    whyChooseTitle: "Why Choose Pep Softwares?",
    whyChooseSub: "Crafting digital excellence through innovation, precision, and user-first thinking.",
    whyChooseCards: [
      {
        icon: Plus,
        title: "End-to-End Expertise",
        desc: "From idea to app store launch"
      },
      {
        icon: Target,
        title: "Custom Solutions",
        desc: "Tailored to your business needs."
      },
      {
        icon: Layers,
        title: "Scalable & Future-Ready",
        desc: "Built for growth."
      },
      {
        icon: Check,
        title: "Proven Track Record",
        desc: "Apps that deliver results."
      },
      {
        icon: FileText,
        title: "Local + Global Reach",
        desc: "Erode-based with worldwide clients."
      }
    ],
    ctaTitle: "Let's Build Together",
    ctaSub: "Let's Design Better From apps to dashboards to websites – our design makes tech feel human.",
    ctaBtnText: "Get a Free Design Audit"
  } : isArVr ? {
    title: "AR / VR Design & Development",
    subTitle: "Immersive Experiences. Real-World Impact.",
    titleGradient: "linear-gradient(90deg, #30BD9B 0%, #4FA4D8 50%, #885DD1 100%)",
    descHeadline: "Understanding AR VR Design and Development: Why It's a Game-Changer",
    descP1: "At Pep Software, we deliver innovative and immersive AR VR design and development services tailored to your industry. Whether it's an interactive showroom, training simulation, or augmented reality app, we offer solutions that boost user engagement and performance.",
    descLi1: "• AR VR design and development uses advanced technology to create engaging digital experiences.",
    descLi2: "• AR enhances the real world with virtual elements, while VR builds fully immersive environments.",
    descSummary: "These solutions help businesses improve training, captivate customers, and drive digital growth.",
    descCallout: "👉 Step into the future with our cutting-edge AR / VR Design & Development services.",
    servicesTitle: "Immersive AR VR Solutions We Offer",
    offeringsLayout: "arvr-stacked",
    arvrCards: [
      {
        title: "AR (Augmented Reality) Experiences",
        intro: "AR (Augmented Reality) experiences blend virtual content into the real world to boost engagement and interactivity. Our AR VR design and development services include a variety of custom AR solutions built for marketing, education, retail, and more.",
        bullets: [
          "Marker-based AR experiences (e.g., scan a business card, see a product in 3D using AR technology)",
          "Markerless AR apps (place 3D objects in real-world space using ARKit/ARCore)",
          "WebAR experiences (no app needed – accessible via mobile browsers)",
          "Interactive QR-based AR experiences (perfect for banners, product packaging, or smart ads)"
        ],
        summary: "These augmented reality applications are ideal for brands seeking interactive marketing, educational tools, and immersive engagement without heavy app development.",
        img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&auto=format&fit=crop&q=80"
      },
      {
        title: "VR (Virtual Reality) Experiences",
        intro: "Our virtual reality development services focus on immersive experiences that place users inside a fully digital environment. We build high-performance VR apps for multiple platforms, tailored to business, training, and experiential needs.",
        bullets: [
          "360° VR walkthroughs (ideal for real estate, interior design, and training centers)",
          "Interactive virtual environments (including VR showrooms, virtual classrooms, and product showcases)",
          "Built using Unity for Oculus, HTC Vive, and mobile VR platforms"
        ],
        summary: "We deliver optimized and realistic VR experiences that elevate learning, selling, and storytelling.",
        img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=700&auto=format&fit=crop&q=80"
      },
      {
        title: "3D Modeling & Animation",
        intro: "We offer professional 3D modeling and animation for AR VR using industry tools like Blender and Unity. Our custom assets are built for performance, realism, and device compatibility.",
        bullets: [
          "Custom 3D models in Blender (realistic, low-poly, stylized, or game-ready)",
          "Animated 3D characters, objects, and environments (ideal for mobile AR apps, VR training, and games)",
          "Optimized models for mobile AR/VR performance (lightweight, responsive, and cross-platform ready)"
        ],
        summary: "Our 3D animation services support projects in education, eCommerce, healthcare, and virtual training.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&auto=format&fit=crop&q=80"
      }
    ],
    offerings: [],
    processTitle: "AR / VR Development Workflow",
    processSteps: [
      { title: "Conceptualization", desc: "3D environment planning, storyboarding, and interaction mapping." },
      { title: "3D Asset Modeling", desc: "Crafting realistic 3D models, textures, and animations in Blender." },
      { title: "Spatial Engine Coding", desc: "Developing spatial tracking and logic using Unity and WebXR." },
      { title: "Optimization", desc: "Frame rate and performance tuning for Oculus, mobile, and WebAR." },
      { title: "Deployment", desc: "Publishing app packages or launching interactive WebAR portals." }
    ],
    whyChooseTitle: "Why Choose Pep Software for AR/VR?",
    whyChooseSub: "Crafting immersive 3D digital experiences through innovation, precision, and spatial computing.",
    whyMattersTitle: "Where AR/VR Helps?",
    whyMattersSub: "AR VR design and development is changing how industries connect, train, and engage. From virtual storytelling to interactive simulations, it delivers impactful digital experiences.",
    whyItMatters: [
      {
        title: "Product launches",
        desc: "Showcase products through AR visuals and VR demos that let users explore and interact in 3D before they buy.",
        img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Real estate walkthroughs",
        desc: "Offer 360° virtual tours or AR previews to help buyers experience properties remotely and confidently.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Event marketing",
        desc: "Use AR displays and VR storytelling to grab attention at expos and events — turning viewers into participants.",
        img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Educational modules",
        desc: "Enhance learning with AR tools and VR simulations that simplify complex subjects and improve retention.",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=80"
      },
      {
        title: "Training simulations",
        desc: "Train safely and effectively with VR programs and AR-guided tasks for industries like healthcare, aviation, and manufacturing.",
        img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&auto=format&fit=crop&q=80"
      }
    ],
    whyChooseCards: [
      {
        icon: Plus,
        title: "Tailored Solutions",
        desc: "We build strategies and digital products that align perfectly with your unique business needs and goals."
      },
      {
        icon: Target,
        title: "User-Centered Design",
        desc: "We prioritize your users through UX research, journey mapping, and accessibility-focused UI design."
      },
      {
        icon: Check,
        title: "Innovation-Driven Approach",
        desc: "Using AR/VR, AI, and next-gen tech, we bring creative and functional solutions to life."
      },
      {
        icon: FileText,
        title: "Transparent Workflow",
        desc: "We communicate openly, work in agile sprints, and deliver with full clarity and timelines."
      }
    ],
    toolsTitle: "Our Tools & Tech Stack",
    ctaTitle: "Ready to Create Immersive 3D Experiences?",
    ctaSub: "From WebAR to full VR simulations and 3D architectural renders, we transform ideas into interactive reality.",
    ctaBtnText: "Explore AR/VR Solutions"
  } : {
    title: "UI/UX Design",
    subTitle: "Beautiful Interfaces. Meaningful Experiences.",
    titleGradient: "linear-gradient(90deg, #30BD9B 0%, #4FA4D8 50%, #885DD1 100%)",
    descHeadline: "Maximize Your Digital Potential with UI/UX Design Services",
    descP1: "Pep Software provides expert UI UX design services that help businesses build beautiful, user-friendly digital products. As a leading UI UX design company, we focus on both how your product looks and how it feels to use.",
    descLi1: "• UI (User Interface) covers visuals like layout, colors, typography, and buttons — the elements users interact with.",
    descLi2: "• UX (User Experience) ensures the product is easy to use, with smooth navigation and logical flow that keeps users engaged.",
    descSummary: "Together, UI and UX shape the overall experience — good UI grabs attention, great UX keeps users coming back.",
    descCallout: "👉 Discover better digital design with our proven UI UX design services.",
    servicesTitle: "Our UI/UX Design Services",
    offeringsLayout: "grid",
    offerings: [
      {
        title: "User Research & Insights",
        desc: "We explore user behavior, pain points, and goals through surveys, interviews, and competitor analysis to design meaningful experiences."
      },
      {
        title: "UX Strategy & Wireframing",
        desc: "From journey mapping to wireframing, we build intuitive flows and logical structures that form the backbone of usable products."
      },
      {
        title: "UI Design & Visual Identity",
        desc: "We design clean, responsive, and visually stunning interfaces that reflect your brand with pixel-perfect precision."
      },
      {
        title: "Prototyping & Interaction Design",
        desc: "Interactive prototypes and smooth micro-interactions bring your product to life and offer early user feedback before development."
      },
      {
        title: "Design Systems",
        desc: "We develop scalable, reusable design systems to ensure consistent UI patterns across all digital touchpoints."
      },
      {
        title: "UX Writing & Microcopy",
        desc: "Clear, concise, and helpful copy that enhances user interactions—from CTAs to form validation messages."
      },
      {
        title: "Web & App UI/UX",
        desc: "We design custom UI/UX for mobile apps, web platforms, SaaS tools, and enterprise solutions—focused on flow, performance, and engagement."
      },
      {
        title: "Developer Handoff & Collaboration",
        desc: "We deliver developer-friendly design files using Figma, XD, Photoshop—ensuring smooth, pixel-perfect execution."
      }
    ],
    processTitle: "Our Design Process",
    processSteps: [
      {
        title: "Empathize",
        desc: "Understand users deeply through research, user interviews, and behavior analysis to uncover real needs and pain points."
      },
      {
        title: "Define",
        desc: "Analyze insights to clearly define core user problems, project goals, and key feature requirements."
      },
      {
        title: "Ideate",
        desc: "Brainstorm creative concepts, sketch user flows, and explore multiple design possibilities."
      },
      {
        title: "Prototype",
        desc: "Build interactive wireframes and high-fidelity prototypes to visualize the product experience."
      },
      {
        title: "Test",
        desc: "Validate design solutions with real users, gather feedback, and iterate for perfection."
      }
    ]
  };

  const whyItMatters = [
    {
      title: "First Impression Counts",
      desc: "94% of users form their first impression based on design alone. A visually appealing and intuitive design builds trust instantly.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80"
    },
    {
      title: "Higher Conversion",
      desc: "Better UX through clear navigation and simple actions enhances user experience, increasing conversion rates by up to 200%.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80"
    },
    {
      title: "User Retention",
      desc: "An intuitive and user-friendly design reduces confusion and frustration, helping to retain users and lower churn rates.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80"
    },
    {
      title: "Boost Credibility",
      desc: "A consistent, modern design builds trust with users, making your brand appear professional and increasing engagement.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=80"
    }
  ];

  const toolsList = isWebDev ? [
    { name: "Figma", bg: "#F24E1E", text: "Figma" },
    { name: "Shopify", bg: "#96BF48", text: "Shopify" },
    { name: "WordPress", bg: "#21759B", text: "WordPress" },
    { name: "GitHub", bg: "#181717", text: "GitHub" },
    { name: "VS Code", bg: "#007ACC", text: "VS Code" },
    { name: "Lighthouse", bg: "#F44B26", text: "Lighthouse" },
    { name: "WooCommerce", bg: "#96588A", text: "WooCommerce" },
    { name: "React", bg: "#61DAFB", text: "React" }
  ] : isMobileApp ? [
    { name: "Dart", bg: "#0175C2", text: "Dart" },
    { name: "Swift", bg: "#FA7343", text: "Swift" },
    { name: "Kotlin", bg: "#7F52FF", text: "Kotlin" },
    { name: "JavaScript", bg: "#F7DF1E", text: "JS" },
    { name: "Flutter", bg: "#02569B", text: "Flutter" },
    { name: "React Native", bg: "#61DAFB", text: "RN" },
    { name: "Node.js", bg: "#339933", text: "Node" },
    { name: "Firebase", bg: "#FFCA28", text: "Firebase" },
    { name: "Laravel", bg: "#FF2D20", text: "Laravel" },
    { name: "Figma", bg: "#F24E1E", text: "Figma" },
    { name: "MySQL", bg: "#4479A1", text: "MySQL" },
    { name: "MongoDB", bg: "#47A248", text: "Mongo" }
  ] : isArVr ? [
    { name: "Blender", bg: "#E87D0D", text: "Blender", sub: "3D tool for modeling, animation, VFX, and AR/VR content." },
    { name: "Unity", bg: "#000000", text: "Unity", sub: "For building VR & interactive AR Experience" },
    { name: "WebAR", bg: "#30BD9B", text: "WebAR", sub: "Web-based AR for interactive 3D experiences without an app." },
    { name: "Meta Quest", bg: "#0668E1", text: "Meta Quest", sub: "For deployment & testing" }
  ] : [
    { name: "Figma", bg: "#F24E1E", text: "F" },
    { name: "FigJam", bg: "#A259FF", text: "FJ" },
    { name: "Balsamiq", bg: "#CC292B", text: "B" },
    { name: "Photoshop", bg: "#31A8FF", text: "Ps" },
    { name: "Miro", bg: "#FFD02F", text: "M" },
    { name: "Uizard", bg: "#FFB800", text: "U" }
  ];

  const faqListLeft = [
    {
      q: "Can you redesign my existing website or app?",
      a: "Yes. We specialize in modernizing outdated platforms for better usability and performance."
    },
    {
      q: "Are your designs mobile-optimized?",
      a: "Yes, all our designs are fully responsive across all desktop, tablet, and mobile device sizes."
    },
    {
      q: "What industries do you serve?",
      a: "We work with healthcare, e-commerce, SaaS, fintech, logistics, education, and hardware manufacturing."
    },
    {
      q: "Will you collaborate with our developers?",
      a: "Yes, we provide complete Figma design handoffs, component assets, and design system documentation."
    },
    {
      q: "How long does a typical project take?",
      a: "Depending on scope, typical projects range from 2 to 6 weeks from discovery to final handoff."
    },
    {
      q: "Do you conduct research as part of your process?",
      a: "Yes, user research, wireframing, and usability testing are integrated directly into our core workflow."
    }
  ];

  const faqListRight = [
    {
      q: "What file formats and deliverables will I receive?",
      a: "You'll get layered Figma files, design documentation, design systems, and production-ready source code."
    },
    {
      q: "Can I request changes after completion?",
      a: "Absolutely! We include revisions during each project milestone to ensure complete satisfaction."
    },
    {
      q: "Do you also handle development or just design?",
      a: "We offer both UI/UX design and full front-end & back-end web and mobile app development."
    },
    {
      q: "Is your team available for long-term support or retainer?",
      a: "Yes, we offer flexible monthly retainer plans for ongoing updates and feature expansions."
    }
  ];

  return (
    <div className="sub-service-page">
      {/* TOP HEADER */}
      <section className="service-top-header text-center">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1 className="service-animated-title" style={{ background: pageData.titleGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {pageData.title}
            </h1>
            <p className="service-header-sub">{pageData.subTitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="service-description-section">
        <div className="container">
          <div className="desc-flex-layout">
            <div className="desc-text-side">
              <ScrollReveal animation="fade-up">
                <span className="badge-tag teal">DESCRIPTION</span>
                <h2 className="desc-main-headline">{pageData.descHeadline}</h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150}>
                <div className="desc-body-p">
                  <p>{pageData.descP1}</p>
                  <ul>
                    <li>{pageData.descLi1}</li>
                    <li>{pageData.descLi2}</li>
                  </ul>
                  <p className="summary-line">{pageData.descSummary}</p>
                  <div className="discover-callout">{pageData.descCallout}</div>
                </div>
              </ScrollReveal>
            </div>

            <div className="desc-graphic-side">
              <ScrollReveal animation="slide-right">
                <img 
                  src={siteConfig.subServiceGraphic || siteConfig.whoWeAreGraphic} 
                  alt={pageData.title} 
                  className="desc-3d-graphic float-animation"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS SECTION (PURPLE) */}
      <section className="why-it-matters-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="why-matters-title text-center">
              {pageData.whyMattersTitle || "Why it Matters?"}
            </h2>
            <p className="why-matters-sub text-center">
              {pageData.whyMattersSub || "Great design & development isn't just visual—it drives engagement, trust, and results. Discover why our services are critical to your product's success."}
            </p>
          </ScrollReveal>

          <div className="why-matters-grid">
            {(pageData.whyItMatters || whyItMatters).map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="why-matter-card">
                  <div className="why-card-img-wrapper">
                    <img src={item.img} alt={item.title} className="why-card-img" />
                  </div>
                  <div className="why-card-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PEP SOFTWARES SECTION */}
      <section className="why-choose-pep-section">
        <div className="container text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="why-choose-pep-title">{pageData.whyChooseTitle || "Why Choose Pep Software?"}</h2>
            <p className="why-choose-pep-sub">
              {pageData.whyChooseSub || "Crafting digital excellence through innovation, precision, and user-first thinking."}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <div className="why-choose-pep-grid">
              {(pageData.whyChooseCards || [
                { icon: Plus, title: "Tailored Solutions", desc: "We build strategies and digital products that align perfectly with your unique business needs and goals." },
                { icon: Target, title: "User-Centered Design", desc: "We prioritize your users through UX research, journey mapping, and accessibility-focused UI design." },
                { icon: Layers, title: "Innovation-Driven Approach", desc: "Using AI, AR/VR and next-gen tech, we bring creative and functional solutions to life." },
                { icon: Check, title: "Transparent Workflow", desc: "We communicate openly, work in agile sprints, and deliver with full clarity and timelines." }
              ]).map((item, idx) => {
                const IconComp = item.icon || Star;
                return (
                  <div key={idx} className="why-choose-pep-card">
                    <div className="why-choose-icon-badge">
                      <IconComp size={24} color="#FFFFFF" />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR SERVICES GRID SECTION (DARK) */}
      <section className="uiux-offerings-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="offerings-title text-center">{pageData.servicesTitle}</h2>
          </ScrollReveal>

          {pageData.offeringsLayout === 'arvr-stacked' ? (
            <div className="arvr-stacked-container">
              {pageData.arvrCards.map((card, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 120}>
                  <div className={`arvr-card-box ${idx % 2 === 1 ? 'reverse' : ''}`}>
                    <div className="arvr-card-content">
                      <h3 className="arvr-card-title">{card.title}</h3>
                      <p className="arvr-card-intro">{card.intro}</p>
                      <ul className="arvr-bullet-list">
                        {card.bullets.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                      <p className="arvr-card-summary">{card.summary}</p>
                    </div>
                    <div className="arvr-card-image-side">
                      <img src={card.img} alt={card.title} className="arvr-card-img" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : pageData.offeringsLayout === 'two-column-graphic' ? (
            <div className="offerings-with-graphic-layout">
              <div className="offerings-left-graphic">
                <ScrollReveal animation="slide-left">
                  <img 
                    src={siteConfig.whoWeAreGraphic} 
                    alt="Developers working at desk" 
                    className="offerings-3d-img float-animation" 
                  />
                </ScrollReveal>
              </div>

              <div className="offerings-right-list">
                {pageData.offerings.map((item, idx) => (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                    <div className="offering-card vertical">
                      <div className="offering-star-badge">
                        <Star size={20} fill="#30BD9B" color="#30BD9B" />
                      </div>
                      <div className="offering-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ) : (
            <div className="offerings-grid">
              {pageData.offerings.map((item, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                  <div className="offering-card">
                    <div className="offering-star-badge">
                      <Star size={20} fill="#30BD9B" color="#30BD9B" />
                    </div>
                    <div className="offering-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PROCESS WHEEL SECTION */}
      <section className="design-process-section">
        <div className="container text-center">
          <ScrollReveal animation="fade-up">
            <span className="badge-tag teal">OUR PROCESS</span>
            <h2 className="process-heading">{pageData.processTitle}</h2>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={150}>
            <DesignProcessWheel steps={pageData.processSteps} />
          </ScrollReveal>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="case-study-showcase-section">
        <div className="container text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="case-study-title">Case Study</h2>
            <p className="case-study-quote">
              "We redesigned a healthcare dashboard and reduced task completion time by 40%. Users loved the clarity and flow."
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <CaseStudy3DCurvedCarousel />

            <div className="case-study-action">
              <Link to="/portfolio" className="case-study-blue-pill-btn">
                <span>See more</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TOOLS WE MASTER SECTION */}
      <section className="tools-master-section">
        <div className="container text-center">
          <ScrollReveal animation="fade-up">
            <span className="badge-tag teal">TECH STACK</span>
            <h2 className="tools-heading">{pageData.toolsTitle || "Tools & Tech We Master"}</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <div className="tools-grid">
              {toolsList.map((tool, idx) => (
                <div key={idx} className="tool-card">
                  <div className="tool-icon-pill" style={{ background: tool.bg }}>
                    <span>{tool.text}</span>
                  </div>
                  <h4 className="tool-name">{tool.name}</h4>
                  {tool.sub && <p className="tool-sub">{tool.sub}</p>}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MOST POPULAR QUESTIONS (FAQ) */}
      <section className="uiux-faq-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h2 className="faq-main-title text-center">Most Popular Questions</h2>
          </ScrollReveal>

          <div className="faq-two-col-grid">
            <div className="faq-col">
              {faqListLeft.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`faq-item-box ${openFaq === idx ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="faq-question-head">
                    <span className="faq-dot"></span>
                    <h4>{faq.q}</h4>
                    <ChevronDown size={18} className="faq-chevron" />
                  </div>
                  {openFaq === idx && (
                    <p className="faq-answer-p">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="faq-col">
              {faqListRight.map((faq, idx) => {
                const rightIdx = idx + 10;
                return (
                  <div 
                    key={rightIdx} 
                    className={`faq-item-box ${openFaq === rightIdx ? 'open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === rightIdx ? null : rightIdx)}
                  >
                    <div className="faq-question-head">
                      <span className="faq-dot"></span>
                      <h4>{faq.q}</h4>
                      <ChevronDown size={18} className="faq-chevron" />
                    </div>
                    {openFaq === rightIdx && (
                      <p className="faq-answer-p">{faq.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* READY TO ELEVATE / LET'S BUILD TOGETHER CTA */}
      <section className="uiux-cta-box-section">
        <div className="container">
          <ScrollReveal animation="zoom-in">
            <div className="elevate-cta-card">
              <div className="elevate-left">
                <h2>{pageData.ctaTitle || "Ready to Elevate Your Digital Products?"}</h2>
                <p>
                  {pageData.ctaSub || "We build intuitive, high-performance web platforms that not only look great but drive real results. Let's bring clarity, creativity, and speed to your product."}
                </p>
                <Link to="/contact-us" className="talk-ux-btn">
                  {pageData.ctaBtnText || "Talk to an Expert"}
                </Link>
              </div>
              <div className="elevate-right">
                <img 
                  src={siteConfig.howWeWorkGraphic || siteConfig.whoWeAreGraphic} 
                  alt="3D Growth Rocket" 
                  className="elevate-rocket-img float-animation" 
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


    </div>
  );
};

export default SubServicePage;
