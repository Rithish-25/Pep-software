import React, { useState, useEffect } from 'react';
import './PageLoader.css';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // 1.8s initial page load display time before smooth exit
    const timer = setTimeout(() => {
      setExiting(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500); // matches CSS fade-out transition duration

      return () => clearTimeout(removeTimer);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`page-loader ${exiting ? 'loader-exit' : ''}`} aria-hidden={exiting}>
      <div className="loader-ambient-glow"></div>
      
      <div className="loader-center-content">
        {/* Rotating Light Ring */}
        <div className="loader-ring"></div>

        {/* Orbiting Golden Particles */}
        <div className="loader-particles">
          <span className="particle particle-1"></span>
          <span className="particle particle-2"></span>
          <span className="particle particle-3"></span>
          <span className="particle particle-4"></span>
        </div>

        {/* Unchanged Logo Symbol */}
        <div className="loader-logo-wrapper">
          <img src="/logo.png" alt="PEP Software Loading" className="loader-logo-img" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
