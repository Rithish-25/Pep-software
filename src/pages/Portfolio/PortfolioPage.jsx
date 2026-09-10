import React, { useState } from 'react';
import { portfolioProjects } from '../../data/mockData';
import { ExternalLink, X, Calendar, User, ArrowRight } from 'lucide-react';
import './PortfolioPage.css';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'website-development', label: 'Websites' },
  { id: 'mobile-app-development', label: 'Mobile Apps' },
  { id: 'customized-software', label: 'Customized Software' }
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.categoryId === activeFilter);

  return (
    <div className="portfolio-page">
      {/* PAGE HERO */}
      <section className="portfolio-hero">
        <div className="container text-center">
          <span className="portfolio-badge-gold">Proven Track Record</span>
          <h1 className="portfolio-hero-title">
            Our Featured <span className="portfolio-gradient-gold">Portfolio</span>
          </h1>
          <p className="portfolio-hero-desc">
            Discover how PEP Software delivers high-impact web, mobile, and custom enterprise software for industry leaders across the globe.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section className="portfolio-grid-section">
        <div className="container">
          {/* Category Filter Bar */}
          <div className="portfolio-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Items */}
          <div className="portfolio-full-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="portfolio-item-card">
                <div className="portfolio-item-image">
                  <img src={project.image} alt={project.title} />
                  <span className="item-category-tag">{project.category}</span>
                </div>

                <div className="portfolio-item-content">
                  <h3 className="item-title">{project.title}</h3>
                  <p className="item-desc">{project.description}</p>
                  
                  <div className="item-tech-stack">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <div className="item-footer-info">
                    <span className="item-client"><User size={13} /> {project.client}</span>
                    <span className="item-year"><Calendar size={13} /> {project.year}</span>
                  </div>

                  <div className="portfolio-card-action">
                    <button 
                      className="portfolio-btn-primary sm btn-card-link"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <span className="portfolio-badge-gold">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
            </div>

            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              
              <div className="modal-details">
                <div className="modal-meta-grid">
                  <div>
                    <strong>Client:</strong> {selectedProject.client}
                  </div>
                  <div>
                    <strong>Year:</strong> {selectedProject.year}
                  </div>
                  <div>
                    <strong>Category:</strong> {selectedProject.category}
                  </div>
                </div>

                <h3>Project Overview</h3>
                <p>{selectedProject.description}</p>
                <p>Engineered by PEP Software using scalable architecture and responsive user experience design standards.</p>

                <h3>Technologies Used</h3>
                <div className="modal-tech-grid">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="modal-tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="modal-cta-row">
                  <a 
                    href="/contact" 
                    className="portfolio-btn-primary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Build Similar Solution <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
