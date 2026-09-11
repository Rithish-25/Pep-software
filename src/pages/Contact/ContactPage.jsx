import React, { useState } from 'react';
import { 
  Mail, 
  Building,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../../data/pepData';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="contact-page">
      {/* TOP HEADER */}
      <section className="contact-top-header text-center">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1 className="contact-title-orange">Contact us</h1>
            <p className="contact-sub-header">Let's connect and grow your business together.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* FORM & 3D CHARACTER SECTION */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            {/* LEFT 3D CHARACTER GRAPHIC */}
            <div className="contact-graphic-col">
              <ScrollReveal animation="slide-left">
                <img 
                  src={siteConfig.whyChooseUsGraphic || siteConfig.whoWeAreGraphic} 
                  alt="Pep Software Support Specialist" 
                  className="contact-3d-character float-animation"
                />
              </ScrollReveal>
            </div>

            {/* RIGHT FORM CARD */}
            <div className="contact-card-col">
              <ScrollReveal animation="slide-right">
                <div className="contact-white-card">
                  <h2 className="contact-card-title">Get in Touch with Pep Software</h2>
                  <p className="contact-card-desc">
                    We'd love to hear from you! Whether you're looking for Website designing, Mobile app development, Expert UI/UX design, or complete web development services — <strong>Pep Software</strong> is here to bring your ideas to life.
                  </p>

                  {submitted ? (
                    <div className="form-success-message">
                      <CheckCircle2 size={48} color="#30BD9B" />
                      <h3>Message Sent Successfully!</h3>
                      <p>Thank you for contacting Pep Software. We will respond within 24 hours.</p>
                      <button className="reset-btn" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="pep-contact-form">
                      <div className="form-row-2col">
                        <div className="form-group">
                          <label>Name</label>
                          <input 
                            type="text" 
                            name="name" 
                            required 
                            placeholder="What's your name?" 
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            required 
                            placeholder="Contact Number" 
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row-2col">
                        <div className="form-group">
                          <label>Email</label>
                          <input 
                            type="email" 
                            name="email" 
                            required 
                            placeholder="Drop us your email" 
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Subject</label>
                          <input 
                            type="text" 
                            name="subject" 
                            placeholder="What's the scoop?" 
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Message</label>
                        <textarea 
                          name="message" 
                          rows="4" 
                          required 
                          placeholder="What's on your mind?" 
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <button type="submit" className="send-message-green-btn" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH INFO CARDS SECTION */}
      <section className="contact-info-cards-section text-center">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <span className="badge-tag teal">GET IN TOUCH</span>
            <h2 className="info-section-title">Let's build something exceptional together.</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <div className="contact-3cards-grid">
              {/* CARD 1: HEAD OFFICE */}
              <div className="contact-info-box">
                <div className="contact-icon-badge">
                  <Building size={24} color="#30BD9B" />
                </div>
                <h4>Head Office</h4>
                <p>Marappa Street 1, Surampatti, Erode - 638009.</p>
              </div>

              {/* CARD 2: LET'S TALK */}
              <div className="contact-info-box">
                <div className="contact-icon-badge">
                  <PhoneCall size={24} color="#30BD9B" />
                </div>
                <h4>Let's Talk</h4>
                <p>Phone :<br />+91 98841 41911<br />+91 90800 74141</p>
              </div>

              {/* CARD 3: EMAIL SUPPORT */}
              <div className="contact-info-box">
                <div className="contact-icon-badge">
                  <Mail size={24} color="#30BD9B" />
                </div>
                <h4>Email Support</h4>
                <p>contact@pepsoftwares.com</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
