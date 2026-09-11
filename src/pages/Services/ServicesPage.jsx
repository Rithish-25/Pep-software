import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Palette, 
  Globe, 
  Smartphone, 
  Layers,
  ArrowUpRight 
} from 'lucide-react';
import { servicesData } from '../../data/pepData';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './SubServicePage.css';

const ServicesPage = () => {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Palette': return <Palette size={32} />;
      case 'Globe': return <Globe size={32} />;
      case 'Smartphone': return <Smartphone size={32} />;
      case 'Layers': return <Layers size={32} />;
      default: return <Globe size={32} />;
    }
  };

  return (
    <div className="services-main-page">
      <section className="service-hero-banner">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <span className="badge-tag glass">Our Services</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <h1 className="service-hero-title">Comprehensive Digital Services</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="service-hero-desc">
              Explore our end-to-end capabilities across UI/UX design, custom web engineering, mobile app development, and AR/VR solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pep-services-section">
        <div className="container">
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

                  <ul className="service-feature-bullets">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle size={16} className="bullet-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={`/${service.slug}`} className="service-card-link">
                    <span>Explore Service</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      <section className="pep-cta-banner">
        <div className="container">
          <ScrollReveal animation="zoom-in">
            <div className="cta-box-live">
              <div className="cta-live-left">
                <h2>Need a Specialized Technical Solution?</h2>
              </div>
              <div className="cta-live-right">
                <Link to="/contact-us" className="pep-btn-hero-primary">
                  <span>Talk To Our Team</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="cta-bottom-gradient-bar"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
