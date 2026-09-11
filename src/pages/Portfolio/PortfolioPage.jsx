import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../../data/pepData';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'ALL' },
    { key: 'web', label: 'WEBSITES' },
    { key: 'mobile', label: 'MOBILE APPS' },
    { key: 'ar-vr', label: 'AR/VR' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.categoryKey === activeFilter);

  return (
    <div className="portfolio-page">
      {/* HERO BANNER */}
      <section className="portfolio-hero-banner">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <span className="badge-tag glass">OUR WORK</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <h1 className="portfolio-hero-title">Delivering Impactful Digital Products</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="portfolio-hero-desc">
              Browse our showcase of high-performance web platforms, enterprise applications, mobile solutions, and interactive AR/VR experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PORTFOLIO GRID & FILTERS */}
      <section className="portfolio-content-section">
        <div className="container">
          {/* FILTER TABS */}
          <ScrollReveal animation="fade-up">
            <div className="portfolio-filters-wrap">
              <div className="filter-tabs-container">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className={`filter-tab-btn ${activeFilter === cat.key ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* PROJECT GRID */}
          <div className="portfolio-3col-grid">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} animation="fade-up" delay={idx * 80}>
                <div className="portfolio-card-item">
                  <div className="card-mockup-stage">
                    <div className="card-bg-circle" style={{ background: project.bgAccent }}></div>
                    
                    {project.type === 'mobile' ? (
                      <div className="phone-mockup-frame">
                        <div className="phone-camera-punch"></div>
                        <div className="phone-screen-area" style={{ background: project.screenBg }}>
                          <div className="phone-app-badge">
                            <span className="logo-text-bold">{project.logoText}</span>
                            {project.logoSub && <span className="logo-sub-desc">{project.logoSub}</span>}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="website-mockup-frame">
                        <img src={project.image} alt={project.title} className="website-screen-img" />
                      </div>
                    )}
                  </div>

                  <h3 className="portfolio-card-title">{project.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* CTA BANNER */}
      <section className="pep-cta-banner">
        <div className="container">
          <ScrollReveal animation="zoom-in">
            <div className="cta-box-live">
              <div className="cta-live-left">
                <h2>Have a Similar Project in Mind?</h2>
              </div>
              <div className="cta-live-right">
                <Link to="/contact-us" className="pep-btn-hero-primary">
                  <span>Start Your Project</span>
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

export default PortfolioPage;
