import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  Smartphone, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import './Navbar.css';

const serviceDropdownItems = [
  {
    title: 'Website Development',
    description: 'Modern, responsive and high-performance websites',
    icon: Globe,
    link: '/services#website-development'
  },
  {
    title: 'Mobile App Development',
    description: 'Beautiful and scalable mobile applications',
    icon: Smartphone,
    link: '/services#mobile-app-development'
  },
  {
    title: 'Customized Software',
    description: 'Tailored software solutions built for specific business needs',
    icon: Cpu,
    link: '/services#customized-software'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServiceOpen(false);
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="PEP Software Logo" className="brand-logo-img" />
          <div className="brand-text">
            <span className="brand-title">PEP <span className="brand-accent">SOFTWARE</span></span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>

          {/* Service Dropdown Container */}
          <div 
            className="nav-item-dropdown-wrapper"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <NavLink 
              to="/services" 
              className={({ isActive }) => `nav-item has-dropdown ${isActive ? 'active' : ''}`}
            >
              Service
              <ChevronDown className={`dropdown-icon ${desktopDropdownOpen ? 'rotate' : ''}`} size={16} />
            </NavLink>

            {/* Desktop Service Dropdown Card */}
            {desktopDropdownOpen && (
              <div className="service-dropdown-menu">
                <div className="dropdown-header-badge">
                  <Sparkles size={14} className="gold-icon" />
                  <span>Our Core Expertise</span>
                </div>
                <div className="dropdown-grid">
                  {serviceDropdownItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link 
                        key={index} 
                        to={item.link} 
                        className="dropdown-card"
                        onClick={() => setDesktopDropdownOpen(false)}
                      >
                        <div className="dropdown-card-icon">
                          <IconComponent size={22} />
                        </div>
                        <div className="dropdown-card-content">
                          <h4 className="dropdown-card-title">{item.title}</h4>
                          <p className="dropdown-card-desc">{item.description}</p>
                        </div>
                        <ArrowRight size={16} className="card-hover-arrow" />
                      </Link>
                    );
                  })}
                </div>
                <div className="dropdown-footer">
                  <Link to="/services" className="dropdown-view-all">
                    Explore all solutions & frameworks <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/portfolio" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Portfolio
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Contact Us
          </NavLink>
        </nav>

        {/* Header Right Action Button */}
        <div className="desktop-actions">
          <Link to="/contact" className="navbar-btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>

            {/* Mobile Accordion for Services */}
            <div className="mobile-accordion">
              <button 
                className={`mobile-accordion-trigger ${mobileServiceOpen ? 'open' : ''}`}
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              >
                <span>Service</span>
                <ChevronDown size={18} className={`accordion-arrow ${mobileServiceOpen ? 'rotate' : ''}`} />
              </button>

              {mobileServiceOpen && (
                <div className="mobile-accordion-content">
                  <NavLink 
                    to="/services" 
                    className="mobile-sublink overview-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Services Overview
                  </NavLink>
                  {serviceDropdownItems.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <Link 
                        key={idx}
                        to={item.link} 
                        className="mobile-sublink"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <IconComp size={16} className="sublink-icon" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>

            <div className="mobile-cta-wrapper">
              <Link 
                to="/contact" 
                className="navbar-btn-primary mobile-cta-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started Today
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
