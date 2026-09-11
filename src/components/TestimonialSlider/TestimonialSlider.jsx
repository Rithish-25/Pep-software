import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/pepData';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="pep-testimonials-section">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="badge-tag teal">Testimonials</span>
            <h2>Client Feedback & Reviews</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <div className="testimonial-wrapper">
            <button onClick={prevSlide} className="testimonial-arrow-btn left" aria-label="Previous Testimonial">
              <ChevronLeft size={22} />
            </button>

            <div className="testimonial-card">
              <div className="quote-badge">
                <Quote size={24} className="quote-icon" />
              </div>

              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
                ))}
              </div>

              <p className="testimonial-quote">"{current.text}"</p>

              <div className="testimonial-author-row">
                <img src={current.avatar} alt={current.name} className="testimonial-avatar-img" />
                <div className="author-info">
                  <h4 className="author-name">{current.name}</h4>
                  <span className="author-verified">Verified Client</span>
                </div>
              </div>
            </div>

            <button onClick={nextSlide} className="testimonial-arrow-btn right" aria-label="Next Testimonial">
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="slider-dots">
            {testimonials.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialSlider;
