import React from 'react';
import { clientLogos } from '../../data/mockData';
import './ClientMarquee.css';

const ClientMarquee = () => {
  // Duplicate logos for seamless infinite scroll loop
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <section className="pep-client-section">
      <div className="container">
        <h3 className="client-section-title">
          A few of the amazing clients we’ve worked with.
        </h3>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeItems.map((logo, index) => (
            <div key={index} className="client-logo-card">
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`} 
                className="client-logo-img" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
