import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig, servicesData } from '../../data/pepData';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`pep-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* LOGO */}
        <Link to="/" className="pep-logo-link" aria-label="Pep Software Home">
          <img 
            src={siteConfig.logo} 
            alt="Pep Software Logo" 
            className="pep-header-logo"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="pep-desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/about-us" className={`nav-link ${isActive('/about-us') || isActive('/about') ? 'active' : ''}`}>
                About us
              </Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li 
              className="nav-item has-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link 
                to="/services" 
                className={`nav-link dropdown-trigger ${isActive('/services') || servicesData.some(s => isActive('/' + s.slug)) ? 'active' : ''}`}
              >
                Services <ChevronDown size={15} className={`dropdown-icon ${servicesDropdownOpen ? 'open' : ''}`} />
              </Link>

              <div className={`pep-dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                <div className="dropdown-grid">
                  {servicesData.map((service) => (
                    <Link 
                      key={service.id} 
                      to={`/${service.slug}`} 
                      className="dropdown-item"
                    >
                      <span className="dropdown-item-title">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/our-portfolio" className={`nav-link ${isActive('/our-portfolio') || isActive('/portfolio') ? 'active' : ''}`}>
                Our Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact-us" className={`nav-link ${isActive('/contact-us') || isActive('/contact') ? 'active' : ''}`}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA BUTTON */}
        <div className="pep-header-cta">
          <Link to="/contact-us" className="pep-btn-get-started">
            <span>Get Started</span>
            <ArrowRight size={15} />
          </Link>

          {/* MOBILE TOGGLE */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} color="#151620" /> : <Menu size={28} color="#151620" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      <div className={`pep-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            <li>
              <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className={`mobile-nav-link ${isActive('/about-us') ? 'active' : ''}`}>
                About us
              </Link>
            </li>
            
            <li className="mobile-services-section">
              <div 
                className="mobile-services-header"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown size={18} className={`dropdown-icon ${mobileServicesOpen ? 'open' : ''}`} />
              </div>
              
              <ul className={`mobile-sub-list ${mobileServicesOpen ? 'show' : ''}`}>
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link to={`/${service.slug}`} className="mobile-sub-link">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/our-portfolio" className={`mobile-nav-link ${isActive('/our-portfolio') ? 'active' : ''}`}>
                Our Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className={`mobile-nav-link ${isActive('/contact-us') ? 'active' : ''}`}>
                Contact us
              </Link>
            </li>
          </ul>

          <div className="mobile-drawer-cta">
            <Link to="/contact-us" className="pep-btn-get-started w-full">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
