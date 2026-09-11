import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PageTransition from './components/PageTransition/PageTransition';

import Home from './pages/Home/Home';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import SubServicePage from './pages/Services/SubServicePage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import ContactPage from './pages/Contact/ContactPage';

import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        {/* HOME ROUTE */}
        <Route path="/" element={<Home />} />

        {/* ABOUT US ROUTES */}
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />

        {/* SERVICES MAIN & SUB-SERVICES ROUTES */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ui-ux-design-services" element={<SubServicePage serviceSlug="ui-ux-design-services" />} />
        <Route path="/web-design-and-development-services" element={<SubServicePage serviceSlug="web-design-and-development-services" />} />
        <Route path="/mobile-app-development-services" element={<SubServicePage serviceSlug="mobile-app-development-services" />} />
        <Route path="/ar-vr-design-and-development" element={<SubServicePage serviceSlug="ar-vr-design-and-development" />} />

        {/* PORTFOLIO ROUTES */}
        <Route path="/our-portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio" element={<Navigate to="/our-portfolio" replace />} />

        {/* CONTACT ROUTES */}
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
