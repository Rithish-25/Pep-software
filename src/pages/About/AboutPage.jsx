import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { whyChooseUs } from '../../data/mockData';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container text-center">
          <span className="about-badge-gold">About PEP Software</span>
          <h1 className="about-hero-title">
            Architecting The Future Of <span className="about-gradient-gold">Enterprise Technology</span>
          </h1>
          <p className="about-hero-desc">
            We are a premier software engineering agency dedicated to transforming complex business ideas into robust, visually stunning, and highly scalable digital solutions.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="about-badge-purple">Our Story</span>
              <h2>Pioneering Innovation With Passion & Precision</h2>
              <p>
                Founded with a mission to elevate standard software engineering into high-art digital experiences, PEP Software brings together world-class developers, UI/UX designers, and cloud architects.
              </p>
              <p>
                From fast-growing tech startups to established enterprise corporations, we engineer custom websites, intuitive mobile apps, and business-critical software solutions tailored to fuel long-term growth.
              </p>

              <div className="story-checklist">
                <div className="check-item">
                  <CheckCircle2 size={18} className="gold-icon" />
                  <span>100% Transparent Agile Sprints</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={18} className="gold-icon" />
                  <span>Enterprise Security & Data Protection</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={18} className="gold-icon" />
                  <span>Dedicated Post-Launch Support</span>
                </div>
              </div>
            </div>

            <div className="story-card-visual">
              <div className="brand-story-card">
                <img src="/logo.png" alt="PEP Software Logo" className="story-logo" />
                <h3>PEP SOFTWARE</h3>
                <span className="story-badge">Established & Scaling</span>
                <p className="story-tagline">"Where Quality Code Meets World-Class Design"</p>
                <div className="story-stats-strip">
                  <div>
                    <h4>150+</h4>
                    <span>Projects</span>
                  </div>
                  <div>
                    <h4>99%</h4>
                    <span>Satisfied</span>
                  </div>
                  <div>
                    <h4>24/7</h4>
                    <span>Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mv-card">
              <div className="mv-header-row">
                <div className="mv-icon-box purple">
                  <Target size={30} />
                </div>
                <span className="about-badge-purple">Our Mission</span>
              </div>
              <h3>Transforming Businesses Through Software Excellence</h3>
              <p>
                To empower global businesses by engineering intuitive, high&#8209;performance web and mobile software solutions that accelerate digital transformation and deliver measurable ROI.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-header-row">
                <div className="mv-icon-box gold">
                  <Eye size={30} />
                </div>
                <span className="about-badge-gold">Our Vision</span>
              </div>
              <h3>Setting The Global Benchmark For Software Innovation</h3>
              <p>
                To be the world’s most trusted software development partner, recognized for setting new standards in aesthetic user interfaces, resilient cloud architecture, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="values-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-badge-purple">Core Pillars</span>
            <h2>Our Engineering Philosophy</h2>
            <p>We adhere to strict quality standards to ensure your software is fast, secure, and built to scale effortlessly.</p>
          </div>

          <div className="values-grid">
            {whyChooseUs.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="val-icon">
                  <Sparkles size={22} />
                </div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container text-center">
          <h2>Ready To Build Your Next Big Project With PEP Software?</h2>
          <p>Partner with a dedicated team of experts obsessed with your success.</p>
          <Link to="/contact" className="about-btn-primary lg">
            Start Your Journey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
