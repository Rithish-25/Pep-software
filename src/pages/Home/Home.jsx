import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { servicesData, portfolioProjects, whyChooseUs, companyStats } from '../../data/mockData';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-purple"></div>
          <div className="shape shape-gold"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} className="gold-icon" />
              <span>Next-Gen Enterprise Engineering</span>
            </div>

            <h1 className="hero-title">
              Engineering <span className="text-gradient-gold">Digital Excellence</span> For Modern Enterprises
            </h1>

            <p className="hero-description">
              PEP Software crafts high-performance web applications, scalable mobile apps, and bespoke enterprise software engineered to propel your brand into the future.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="home-btn-primary">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="home-btn-outline">
                View Portfolio
              </Link>
            </div>

            <div className="hero-highlights">
              <div className="highlight-item">
                <CheckCircle size={18} className="gold-icon" />
                <span>Custom Built Codebase</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={18} className="gold-icon" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={18} className="gold-icon" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="card-top-bar">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
                <span className="window-title">PEP Software Platform v2.5</span>
              </div>
              <div className="visual-hero-brand">
                <img src="/logo.png" alt="PEP Software Logo" className="hero-card-logo" />
                <div className="hero-badge-pill">
                  <span className="live-dot"></span> Active Suite
                </div>
              </div>

              <div className="hero-code-snippet">
                <pre>
                  <code>
                    <span className="token-purple">const</span> software = <span className="token-gold">new</span> PEP_Suite(&#123;<br/>
                    &nbsp;&nbsp;architecture: <span className="token-str">'Cloud Native'</span>,<br/>
                    &nbsp;&nbsp;performance: <span className="token-str">'Lightning Fast'</span>,<br/>
                    &nbsp;&nbsp;security: <span className="token-str">'Enterprise Grade'</span><br/>
                    &#125;);<br/>
                    <span className="token-purple">await</span> software.<span className="token-gold">deploy</span>();
                  </code>
                </pre>
              </div>

              <div className="floating-stat-widget">
                <div className="stat-widget-icon">
                  <Award size={20} />
                </div>
                <div>
                  <div className="stat-widget-value">150+</div>
                  <div className="stat-widget-label">Global Deliveries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-strip-section">
        <div className="container">
          <div className="stats-grid">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3 className="stat-number text-gradient-gold">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="services-overview-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-purple">What We Do</span>
            <h2>Innovative Services Engineered For Growth</h2>
            <p>We combine design elegance with software robustness to create digital experiences that drive real business impact.</p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => {
              const iconMap = { Globe, Smartphone, Cpu };
              const IconComp = iconMap[service.iconName] || Globe;
              return (
                <div key={index} className="service-card">
                  <div className="service-card-header">
                    <div className="service-icon-box">
                      <IconComp size={28} />
                    </div>
                    <span className="service-badge">{service.badge}</span>
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.shortDesc}</p>
                  
                  <ul className="service-feature-list">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle size={15} className="gold-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={`/services#${service.id}`} className="service-learn-more">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-layout">
            <div className="why-choose-content">
              <span className="badge-gold">Why PEP Software</span>
              <h2>Built For Speed, Security & Scalability</h2>
              <p>
                Our team brings together top-tier software engineers, UI designers, and solution architects to turn complex business needs into seamless digital solutions.
              </p>

              <div className="why-features-grid">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="why-feature-item">
                    <div className="why-icon-wrapper">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-visual-side">
              <div className="brand-focus-card">
                <img src="/logo.png" alt="PEP Brand Highlight" className="brand-focus-logo" />
                <h3>Your Trusted Technology Partner</h3>
                <p>Delivering cutting-edge web, mobile, and custom enterprise software for forward-thinking companies worldwide.</p>
                <div className="guarantee-badge">
                  <ShieldCheck size={22} className="gold-icon" />
                  <span>100% Code Ownership & Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section className="portfolio-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-purple">Our Work</span>
            <h2>Featured Client Success Stories</h2>
            <p>Explore some of our recent web applications, mobile platforms, and customized software systems.</p>
          </div>

          <div className="portfolio-grid">
            {portfolioProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-image-wrapper">
                  <img src={project.image} alt={project.title} className="portfolio-img" />
                  <span className="category-pill">{project.category}</span>
                </div>
                <div className="portfolio-card-body">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">{project.description}</p>
                  <div className="tech-stack-tags">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="portfolio-card-action">
                    <Link to="/portfolio" className="home-btn-primary sm btn-card-link">
                      View Project <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-cta-center">
            <Link to="/portfolio" className="home-btn-secondary">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-content">
              <span className="cta-tag">Let's Build Together</span>
              <h2>Ready To Elevate Your Software Infrastructure?</h2>
              <p>Contact our experts today for a free technical consultation and tailored project quote.</p>
            </div>
            <div className="cta-action">
              <Link to="/contact" className="home-btn-primary lg">
                Schedule a Call <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
