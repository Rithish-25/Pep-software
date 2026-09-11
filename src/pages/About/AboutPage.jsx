import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  ArrowRight
} from 'lucide-react';
import { companyStats, siteConfig } from '../../data/mockData';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter';
import './AboutPage.css';

const SkillBar = ({ label, percentage, delay = 0, duration = 7000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} className="core-skill-item">
      <div className="core-skill-header">
        <span className="core-skill-label">{label}</span>
        <span className="core-skill-percent">
          <AnimatedCounter value={`${percentage}%`} duration={duration} />
        </span>
      </div>
      <div className="core-skill-track">
        <div 
          className="core-skill-fill" 
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transition: `width ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
            transitionDelay: isVisible ? `${delay}ms` : '0ms'
          }}
        />
      </div>
    </div>
  );
};

const AboutPage = () => {
  const coreSkills = [
    { label: "UI/UX Design", percentage: 94 },
    { label: "Website Designing", percentage: 91 },
    { label: "Mobile App Development", percentage: 83 },
    { label: "AR/VR Designing", percentage: 70 }
  ];

  return (
    <div className="about-page">
      {/* HERO BANNER / TOP HEADER */}
      <section className="about-hero-top-section">
        <div className="container text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="about-us-color-animated">About us</h1>
            <p className="about-us-sub">Get to know Pep Software</p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="about-story-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <span className="badge-tag teal">WHO WE ARE?</span>
            <h2 className="story-main-headline">Designing Experiences. Developing Futures.</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <div className="story-content-body">
              <p>
                Established in 2021, <strong>Pep Software</strong> is a creative and results-driven design and development company that helps startups, enterprises, and agencies bring their digital visions to life.
              </p>
              <p>
                We specialize in <strong>UI/UX design</strong>, <strong>website designing</strong>, <strong>mobile app development</strong>, and <strong>immersive 3D and AR/VR experiences</strong> — blending creativity with technology to craft meaningful and engaging digital solutions.
              </p>
              <p>
                Our expert team combines strategic thinking, cutting-edge tools, and user-centric design to deliver purposeful experiences that not only look great but also perform seamlessly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE STRENGTHS / ANIMATED PERCENTAGE SKILL BARS SECTION */}
      <section className="core-strengths-section">
        <div className="container">
          <div className="strengths-grid">
            <div className="strengths-text-col">
              <ScrollReveal animation="fade-up">
                <span className="badge-tag teal">OUR CORE STRENGTHS</span>
                <h2 className="strengths-headline">Creating Real Value Through Design, Apps & UX</h2>
                <p className="strengths-sub">
                  We combine design thinking, development skill, and immersive technologies to create powerful digital experiences across multiple domains.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="core-skills-list">
                  {coreSkills.map((skill, idx) => (
                    <SkillBar 
                      key={idx} 
                      label={skill.label} 
                      percentage={skill.percentage} 
                      delay={idx * 200}
                      duration={5500}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="strengths-image-col">
              <ScrollReveal animation="slide-right">
                <img 
                  src={siteConfig.whoWeAreGraphic} 
                  alt="Our Core Strengths - Pep Software Team" 
                  className="strengths-3d-img float-animation"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <ScrollReveal animation="slide-left">
              <div className="mv-card">
                <div className="mv-icon-box">
                  <Target size={32} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses worldwide by designing and delivering innovative, reliable, and high-performance digital products.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={150}>
              <div className="mv-card">
                <div className="mv-icon-box gold">
                  <Eye size={32} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be recognized globally as a trusted technology partner known for technical excellence, creative design, and transformative software.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-strip-grid">
            {companyStats.map((stat, idx) => (
              <ScrollReveal key={idx} animation="zoom-in" delay={idx * 100}>
                <div className="about-stat-card">
                  <AnimatedCounter 
                    value={stat.value} 
                    className="stat-number text-gradient-brand" 
                  />
                  <h4 className="stat-title">{stat.label}</h4>
                  <p className="stat-text">{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* CTA BANNER */}
      <section className="pep-cta-banner">
        <div className="container">
          <ScrollReveal animation="zoom-in">
            <div className="cta-box-live">
              <div className="cta-live-left">
                <h2>Let's Build Something Extraordinary Together</h2>
              </div>
              <div className="cta-live-right">
                <Link to="/contact-us" className="pep-btn-hero-primary">
                  <span>Start Your Project</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="cta-bottom-gradient-bar"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
