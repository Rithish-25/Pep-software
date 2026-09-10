import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ChevronDown, 
  HelpCircle
} from 'lucide-react';
import { faqs } from '../../data/mockData';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({
        ...formData,
        phone: numericValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Website Development',
        message: ''
      });
    }, 4000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* PAGE HERO */}
      <section className="contact-hero">
        <div className="container text-center">
          <span className="contact-badge-gold">Get In Touch</span>
          <h1 className="contact-hero-title">
            Let's Build Something <span className="contact-gradient-gold">Extraordinary</span>
          </h1>
          <p className="contact-hero-desc">
            Ready to initiate your custom software, mobile app, or website development project? Contact our engineering team today.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Contact Cards */}
            <div className="contact-info-column">
              <span className="contact-badge-purple">Contact Details</span>
              <h2>We'd Love To Hear From You</h2>
              <p className="contact-intro">
                Reach out to us via email, phone, or by scheduling an in-person consultation at our tech hub.
              </p>

              <div className="info-cards-list">
                <div className="info-card">
                  <div className="info-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Headquarters Office</h4>
                    <p>100 Tech Park Way, Suite 400, Silicon Valley, CA 94025</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-box">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4>Email Inquiries</h4>
                    <p><a href="mailto:contact@pepsoftware.com">contact@pepsoftware.com</a></p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-box">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4>Direct Phone Call</h4>
                    <p><a href="tel:+18005557377">+1 (800) 555-PEP1</a></p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-box">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-column">
              <div className="form-card">
                <h3 className="form-title">Send Us A Message</h3>
                <p className="form-subtitle">Fill out the form below and our lead engineer will respond within 24 hours.</p>

                {submitted && (
                  <div className="form-success-banner">
                    <CheckCircle size={24} className="gold-icon" />
                    <div>
                      <h4>Thank You, {formData.name || 'Client'}!</h4>
                      <p>Your message has been received. We will be in touch shortly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="e.g. Alexander Wright" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="example@gmail.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="Enter 10-digit phone number" 
                        maxLength={10}
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Required Service *</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Customized Software">Customized Software</option>
                      <option value="General Consultation">General Technical Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details / Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      placeholder="Describe your project..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-btn-primary btn-submit">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="faq-section">
        <div className="container">
          <div className="contact-section-header">
            <span className="contact-badge-gold">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Here are quick answers to some of the most common questions our clients ask.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <div className="faq-title">
                    <HelpCircle size={20} className="gold-icon" />
                    <h3>{faq.question}</h3>
                  </div>
                  <ChevronDown size={20} className={`faq-arrow ${activeFaq === idx ? 'rotate' : ''}`} />
                </div>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
