import React from 'react';
import './About.css';
import { Terminal, Database, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="about" className="section-container">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono gradient-text">01.</span> About Me
      </motion.h2>
      
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="about-text glass-panel">
          <p>
            Hello! I'm Ritik, a Software Developer based in India with a bachelor's degree in Computer Science from Dehradun Institute of Technology. I enjoy building things that live on the internet, from robust backend architectures to pixel-perfect mobile applications.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an edtech startup, NGOs, and agile software agencies. My main focus these days is building inclusive, offline-first educational platforms and highly scalable mobile solutions at iDream Education.
          </p>
          <p className="education-note">
            🎓 B.E. in Computer Science • Dehradun Institute of Technology (2019–2023)
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="about-cards">
          <motion.div variants={itemVariants} className="feature-card glass-panel">
            <Smartphone className="feature-icon" size={32} />
            <h3>Mobile First</h3>
            <p>Specializing in Flutter and Native Android. I build performant cross-platform applications.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="feature-card glass-panel">
            <Database className="feature-icon" size={32} />
            <h3>Offline Support</h3>
            <p>Expertise in local-first apps with Hive, SQLite, and offline sync pipelines.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="feature-card glass-panel">
            <Terminal className="feature-icon" size={32} />
            <h3>Full Stack</h3>
            <p>End-to-end development bridging complex cloud microservices with reactive frontends.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
