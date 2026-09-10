import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Layout, 
  Code2, 
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../../data/mockData';
import './ServicesPage.css';

const processSteps = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    description: "We analyze your business goals, target audience, technical requirements, and define clear architecture blueprints.",
    icon: Compass
  },
  {
    step: "02",
    title: "UI/UX & System Design",
    description: "Our designers craft visually captivating interface mockups while software architects structure high-scalability databases.",
    icon: Layout
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Iterative development sprints with clean code standards, unit testing, and continuous deployment previews.",
    icon: Code2
  },
  {
    step: "04",
    title: "QA & Cloud Launch",
    description: "Rigorously tested for security, load handling, and cross-platform compatibility prior to seamless cloud deployment.",
    icon: Rocket
  }
];

const ServicesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="services-page">
      {/* PAGE HEADER HERO */}
      <section className="services-page-hero">
        <div className="container">
          <span className="services-badge-gold">Engineering Solutions</span>
          <h1 className="services-hero-title">
            Our Core <span className="services-gradient-gold">Software Services</span>
          </h1>
          <p className="services-hero-desc">
            From modern web portals and native mobile applications to bespoke enterprise software systems, PEP Software turns complex technology challenges into business advantages.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES SECTION */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-detailed-list">
            {servicesData.map((service, index) => {
              const iconMap = { Globe, Smartphone, Cpu };
              const IconComp = iconMap[service.iconName] || Globe;
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={service.id} 
                  id={service.id} 
                  className={`service-detail-card ${isEven ? 'reverse' : ''}`}
                >
                  <div className="service-detail-content">
                    <div className="service-header-row">
                      <div className="service-detail-icon">
                        <IconComp size={32} />
                      </div>
                      <span className="services-badge-purple">{service.badge}</span>
                    </div>

                    <h2 className="service-detail-title">{service.title}</h2>
                    <p className="service-detail-desc">{service.fullDesc}</p>

                    <div className="service-features-box">
                      <h4 className="features-subtitle">Key Capabilities & Features:</h4>
                      <ul className="service-checklist">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx}>
                            <CheckCircle2 size={18} className="gold-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-action-row">
                      <Link to="/contact" className="services-btn-primary">
                        Request a Quote <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>

                  <div className="service-detail-visual">
                    <div className="service-visual-card">
                      <div className="visual-card-top">
                        <Sparkles size={20} className="gold-icon" />
                        <span>PEP Enterprise Standard</span>
                      </div>
                      <div className="visual-graphic-box">
                        <IconComp size={80} className="graphic-icon" />
                        <div className="graphic-glow"></div>
                      </div>
                      <div className="visual-card-footer">
                        <ShieldCheck size={18} className="gold-icon" />
                        <span>Production Ready • Scalable Code</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW PROCESS SECTION */}
      <section className="services-process-section">
        <div className="container">
          <div className="services-section-header">
            <span className="services-badge-gold">How We Work</span>
            <h2>Our Proven 4-Step Engineering Process</h2>
            <p>A disciplined, transparent development methodology focused on quality, speed, and continuous client collaboration.</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="process-card">
                  <div className="process-step-badge">{step.step}</div>
                  <div className="process-icon-box">
                    <StepIcon size={24} />
                  </div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="services-cta-section">
        <div className="container text-center">
          <h2>Have a Specific Custom Software Requirement?</h2>
          <p>Talk to our lead architects today and get a tailored technical roadmap for your business.</p>
          <Link to="/contact" className="services-btn-primary lg">
            Consult With Our Experts <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
