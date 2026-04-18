import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const row1 = [
    "Dart", "Flutter", "React", "JavaScript", "HTML", "CSS", "Native Android"
  ];
  
  const row2 = [
    "Firebase", "Node.js", "MySQL", "PostgreSQL", "Hive", "SQLite", "Java"
  ];

  const row3 = [
    "Domain Driven Design", "GCP", "CI/CD", "Webviews", "BLoC", "REST APIs", "MVC"
  ];

  return (
    <section id="skills" className="section-container overflow-hidden">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="font-mono gradient-text">02.</span> Technical Arsenal
      </motion.h2>
      
      <div className="marquee-wrapper">
        <div className="marquee marquee-left">
          <div className="marquee-content">
            {/* Duplicated for infinite effect */}
            {[...row1, ...row1, ...row1].map((skill, i) => (
              <span key={`r1-${i}`} className="marquee-item glass-panel">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee marquee-right mt-4">
          <div className="marquee-content">
            {/* Duplicated for infinite effect */}
            {[...row2, ...row2, ...row2].map((skill, i) => (
              <span key={`r2-${i}`} className="marquee-item glass-panel">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee marquee-left mt-4">
          <div className="marquee-content" style={{ animationDuration: '45s' }}>
            {/* Duplicated for infinite effect */}
            {[...row3, ...row3, ...row3].map((skill, i) => (
              <span key={`r3-${i}`} className="marquee-item glass-panel">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
