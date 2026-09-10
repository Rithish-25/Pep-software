import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Send,
  Sparkles 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to PEP Software newsletter!');
  };

  return (
    <footer className="footer-section">
      <div className="footer-glow-top"></div>
      
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand">
              <img src="/logo.png" alt="PEP Software Logo" className="footer-logo-img" />
              <div className="footer-brand-text">
                <span className="footer-brand-title">PEP <span className="brand-accent">SOFTWARE</span></span>
              </div>
            </Link>
            <p className="footer-about">
              Empowering global enterprises with bespoke software solutions, high-performance web platforms, and scalable mobile applications built for sustainable growth.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">
              Quick Links
              <span className="heading-line"></span>
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/"><ArrowRight size={14} className="link-arrow" /> Home</Link>
              </li>
              <li>
                <Link to="/services"><ArrowRight size={14} className="link-arrow" /> Services</Link>
              </li>
              <li>
                <Link to="/portfolio"><ArrowRight size={14} className="link-arrow" /> Portfolio</Link>
              </li>
              <li>
                <Link to="/about"><ArrowRight size={14} className="link-arrow" /> About Us</Link>
              </li>
              <li>
                <Link to="/contact"><ArrowRight size={14} className="link-arrow" /> Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">
              Our Services
              <span className="heading-line"></span>
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/services#website-development"><ArrowRight size={14} className="link-arrow" /> Website Development</Link>
              </li>
              <li>
                <Link to="/services#mobile-app-development"><ArrowRight size={14} className="link-arrow" /> Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services#customized-software"><ArrowRight size={14} className="link-arrow" /> Customized Software</Link>
              </li>
              <li>
                <Link to="/services"><ArrowRight size={14} className="link-arrow" /> Cloud Architecture</Link>
              </li>
              <li>
                <Link to="/services"><ArrowRight size={14} className="link-arrow" /> UI/UX Design</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">
              Connect With Us
              <span className="heading-line"></span>
            </h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>100 Tech Park Way, Silicon Valley, CA</span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href="mailto:contact@pepsoftware.com">contact@pepsoftware.com</a>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href="tel:+18005557377">+1 (800) 555-PEP1</a>
              </div>
            </div>

            <div className="newsletter-box">
              <span className="newsletter-title">
                <Sparkles size={14} className="gold-icon" /> Subscribe to Updates
              </span>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PEP Software. All Rights Reserved. Built with React.js & Deep Purple branding.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
