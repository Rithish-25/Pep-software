import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Check, 
  Star,
  Mail,
  Palette,
  Globe,
  Smartphone,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { 
  siteConfig, 
  companyStats, 
  servicesData, 
  whyChooseUs, 
  workflowSteps 
} from '../../data/pepData';
import ClientMarquee from '../../components/ClientMarquee/ClientMarquee';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter';
import './Home.css';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Palette': return <Palette size={28} />;
      case 'Globe': return <Globe size={28} />;
      case 'Smartphone': return <Smartphone size={28} />;
      case 'Layers': return <Layers size={28} />;
      default: return <Globe size={28} />;
    }
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="pep-hero-section">
        <div className="hero-glow-bg"></div>
        <div className="container hero-grid">
          <div className="hero-text-content">
            <ScrollReveal animation="fade-up">
              <div className="badge-tag glass hero-subbadge">
                <Sparkles size={16} className="brand-icon" />
                <span>Welcome to Pep Software</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <h1 className="pep-hero-title">
                Digital Excellence <span className="text-gradient-brand">Starts Here.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p className="pep-hero-desc">
                {siteConfig.slogan}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={450}>
              <div className="hero-actions">
                <Link to="/our-portfolio" className="pep-btn-hero-primary">
                  <span>Our Portfolio</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact-us" className="pep-btn-hero-outline">
                  <span>Contact Us</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={600}>
              <div className="hero-trust-list">
                <div className="trust-item">
                  <Check size={18} className="teal-icon" />
                  <span>Custom Architecture</span>
                </div>
                <div className="trust-item">
                  <Check size={18} className="teal-icon" />
                  <span>Scalable Platforms</span>
                </div>
                <div className="trust-item">
                  <Check size={18} className="teal-icon" />
                  <span>End-to-End Support</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="hero-visual-content">
            <ScrollReveal animation="slide-right" delay={200}>
              <div className="hero-img-wrapper">
                <img 
                  src={siteConfig.heroGraphic} 
                  alt="Pep Software Digital Excellence" 
                  className="hero-3d-graphic float-animation"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGOS MARQUEE */}
      <ClientMarquee />

      {/* 3. WHO WE ARE SECTION */}
      <section className="pep-who-we-are-section">
        <div className="container">
          <div className="who-we-are-grid">
            <div className="who-image-side">
              <ScrollReveal animation="slide-left">
                <img 
                  src={siteConfig.whoWeAreGraphic} 
                  alt="Maximize your digital potential - Pep Software 3D Target" 
                  className="who-3d-img float-animation-slow"
                />
              </ScrollReveal>
            </div>

            <div className="who-text-side">
              <ScrollReveal animation="fade-up">
                <span className="badge-tag teal">WHO WE ARE?</span>
                <h2>Maximize your digital potential and captivate your audience.</h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150}>
                <p className="who-sub-p">
                  At Pep Software, we turn your ideas into impactful digital solutions. Whether you're building a website, refining your UI/UX, or launching a product — our team delivers tailored strategies that boost performance and keep users engaged.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="who-checklist-grid">
                  <div className="checklist-col">
                    <div className="check-item"><Check size={18} className="teal-icon" /><span>Tailored Digital Solutions</span></div>
                    <div className="check-item"><Check size={18} className="teal-icon" /><span>User-Centered Design Focus</span></div>
                    <div className="check-item"><Check size={18} className="teal-icon" /><span>Transparent & Flexible Pricing</span></div>
                  </div>
                  <div className="checklist-col">
                    <div className="check-item"><Check size={18} className="teal-icon" /><span>Business-Aligned Strategy</span></div>
                    <div className="check-item"><Check size={18} className="teal-icon" /><span>Reliable Support & Delivery</span></div>
                    <div className="check-item"><Check size={18} className="teal-icon" /><span>Forward-Thinking Innovation</span></div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={450}>
                <div className="who-actions-row">
                  <Link to="/services" className="pep-btn-hero-primary sm">
                    <span>Our Services</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact-us" className="link-underlined">
                    Customer Support
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID SECTION */}
      <section className="pep-services-section">
        <div className="container relative-container">
          {/* FLOATING 3D SPHERE ON LEFT SIDE WITH SCROLL ROTATION */}
          <img 
            src={siteConfig.servicesFloatingSphere} 
            alt="3D Floating Sphere" 
            className="floating-sphere-img left-sphere"
            style={{ transform: `rotate(${scrollY * 0.2}deg)` }}
          />

          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <span className="badge-tag teal">Our Services</span>
              <h2>Start your digital success journey with Pep Software.</h2>
            </div>
          </ScrollReveal>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <ScrollReveal key={service.id} animation="fade-up" delay={index * 150}>
                <div className="service-card">
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="service-badge">{service.badge}</span>
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.shortDesc}</p>

                  <Link to={`/${service.slug}`} className="service-card-link">
                    <span>Learn more</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="pep-why-section">
        <div className="container">
          <div className="why-layout">
            <div className="why-header-side">
              <ScrollReveal animation="fade-up">
                <span className="badge-tag teal">WHY CHOOSE US?</span>
                <h2>Smart Solutions, Real Results — Built Around Your Vision</h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150}>
                <p className="why-desc-p">
                  We don't just deliver projects — we partner with you to create digital experiences that are impactful, efficient, and built to grow with your business.
                </p>
              </ScrollReveal>
              
              <div className="why-points-list">
                {whyChooseUs.map((item, idx) => (
                  <ScrollReveal key={idx} animation="fade-up" delay={200 + idx * 150}>
                    <div className={`why-point-card ${item.highlight ? 'highlighted' : ''}`}>
                      <div className="star-icon-circle">
                        <Star size={18} className="star-svg" />
                      </div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="why-image-side">
              <ScrollReveal animation="slide-right">
                <img 
                  src={siteConfig.whyChooseUsGraphic} 
                  alt="Smart Solutions Built Around Your Vision - 3D Developers" 
                  className="why-3d-img float-animation"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="pep-stats-strip-section">
        <div className="container">
          <div className="stats-cards-grid">
            {companyStats.map((stat, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
                <div className="stat-card">
                  <AnimatedCounter 
                    value={stat.value} 
                    className="stat-value text-gradient-brand" 
                  />
                  <h4 className="stat-label">{stat.label}</h4>
                  <p className="stat-desc">{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK SECTION */}
      <section className="pep-process-section">
        <div className="container">
          <div className="process-layout">
            <div className="process-image-side">
              <ScrollReveal animation="slide-left">
                <img 
                  src={siteConfig.howWeWorkGraphic} 
                  alt="Your Project Journey Made Simple - 3D Team" 
                  className="process-3d-img float-animation-slow"
                />
              </ScrollReveal>
            </div>

            <div className="process-text-side">
              <ScrollReveal animation="fade-up">
                <span className="badge-tag teal">HOW WE WORK?</span>
                <h2 className="process-main-title">Your Project Journey Made Simple</h2>
              </ScrollReveal>

              <div className="process-steps-list">
                {workflowSteps.map((step, idx) => (
                  <ScrollReveal key={step.step} animation="fade-up" delay={idx * 150}>
                    <div className="process-step-item">
                      <div className="step-star-badge">
                        <Star size={18} />
                      </div>
                      <div className="step-content">
                        <h3>{step.step}. {step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <TestimonialSlider />

      {/* 8. BOTTOM CTA BANNER */}
      <section className="pep-cta-banner">
        <div className="container">
          <ScrollReveal animation="zoom-in">
            <div className="cta-box-live">
              <div className="cta-live-left">
                <h2>Seize the digital spotlight and boost your business with Pep Software.</h2>
              </div>
              <div className="cta-live-right">
                <div className="cta-support-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="cta-support-label">CUSTOMER SUPPORT</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="cta-support-email">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="cta-bottom-gradient-bar"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
