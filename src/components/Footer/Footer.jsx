import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/mockData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="pep-footer-light">
      <div className="container">
        <div className="footer-content-grid">
          {/* BRAND COL */}
          <div className="footer-brand-column">
            <Link to="/" className="footer-logo-wrap">
              <img 
                src={siteConfig.footerLogo} 
                alt="Pep Software Logo" 
                className="footer-brand-logo" 
              />
            </Link>
          </div>

          {/* SERVICES COL */}
          <div className="footer-nav-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-nav-links">
              <li><Link to="/ui-ux-design-services">UI UX Design Services</Link></li>
              <li><Link to="/web-design-and-development-services">Website Development</Link></li>
              <li><Link to="/mobile-app-development-services">Mobile app development</Link></li>
              <li><Link to="/ar-vr-design-and-development">AR VR Design</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS COL */}
          <div className="footer-nav-column">
            <h4 className="footer-heading">Quick Link</h4>
            <ul className="footer-nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/our-portfolio">Our Portfolio</Link></li>
              <li><Link to="/contact-us">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright-bar">
          <p>Copyright© {new Date().getFullYear()} Pep Software, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
