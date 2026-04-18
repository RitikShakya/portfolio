import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "IDream Education Private Ltd",
      role: "Software Developer",
      period: "Jan 26-Present",
      details: [
        "Domain Driven Design, Clean Architecture, Bloc, Offline Support with multiple databases, Flutter Flavours.",
        "Cross Platform Development – Windows, Web, Android, IOS, AI Integrations, CI/CD Pipelines, Unit Tests.",
        "Handling 5-6 projects, Basics - Node JS, MVC, Authentication & Authorisation, Rate Limiters, REST, Express."
      ]
    },
    {
      company: "Inspiring Seniors Foundation",
      role: "Senior Software Developer",
      period: "Nov 24–Dec 25",
      details: [
        "CRM, Webapp & App in Flutter – Independent development on all projects from scratch.",
        "NodeJs, Meta (WhatsApp), Twilio, and EmailJS, Firebase for hosting, authentication, database, cloud functions.",
        "Project - Documentation, Building architectures, Testing, Deployment, Management."
      ]
    },
    {
      company: "Harvesting Farmers Network (HFN)",
      role: "Senior Software Developer / Associate",
      period: "Jun 23–Nov 24",
      details: [
        "Integrated end-to-end Firebase, Moengage, Amplitude, Deeplinking ,Global Theming, Localisation.",
        "Optimised app’s performance Isolates, Profiling using DevTools, API Refactoring, Raster Janks, Sizing.",
        "Frameworks – Dio, Deeplink, Responsive UI, RBAC, Webview, CoachMarks, Location Tracking, Offline Support",
        "Building App from Scratch, Documentation of APIs, Modules, Optimising Backend APIs."
      ]
    },
    {
      company: "Infigon Futures and Zobox Retails",
      role: "Mobile Application Intern",
      period: "Jan 23–Jun 23",
      details: [
        "Integrated Payments through Razorpay, Migrated API handling structure from Firebase to NodeJs.",
        "App migration from Native Android to Flutter."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="font-mono gradient-text">03.</span> Experience
      </motion.h2>
      
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            viewport={{ once: false, amount: 0.4 }} 
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3>{exp.role} <span className="company-name">@ {exp.company}</span></h3>
                <span className="period font-mono">{exp.period}</span>
              </div>
              <ul className="timeline-details">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
