import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-heading">
        <span className="font-mono gradient-text">06.</span> Get In Touch
      </h2>
      
      <div className="contact-wrapper">
        <div className="contact-info glass-panel">
          <h3 className="contact-title">Let's Connect</h3>
          <p className="contact-desc">
            Currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-links">
            <a href="mailto:ritikshakya101@gmail.com" className="contact-link">
              <Mail className="contact-icon" />
              <span>ritikshakya101@gmail.com</span>
            </a>
            <a href="tel:+919650373038" className="contact-link">
              <Phone className="contact-icon" />
              <span>+91 9650373038</span>
            </a>
            <a href="https://linkedin.com/in/ritik-shakya-0784a81b6" target="_blank" rel="noreferrer" className="contact-link">
              <Linkedin className="contact-icon" />
              <span>linkedin.com/in/ritik-shakya-0784a81b6</span>
            </a>
            <div className="contact-link">
              <MapPin className="contact-icon" />
              <span>India</span>
            </div>
          </div>
        </div>

        <div className="contact-cta glass-panel">
            <h3 style={{marginBottom: '1rem', color: 'var(--text-primary)'}}>Send a Message</h3>
            <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>Prefer email directly? Click below.</p>
            <a href="mailto:ritikshakya101@gmail.com" className="btn btn-primary" style={{width: '100%'}}>
              Say Hello <Send size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
