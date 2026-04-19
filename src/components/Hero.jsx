import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const PROJECT_IMAGES = [
  'ridal_taglines.png',
  'inspiringseniors_ss.png',
  'HFN_what.png',
  'iprep_superappss.png',
  'infigon_landing_page.png',
];

const preloadProjectImages = () => {
  PROJECT_IMAGES.forEach((filename) => {
    const img = new Image();
    img.src = `${import.meta.env.BASE_URL}${filename}`;
  });
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Continuous Full-Stack Learner.",
    "App Developer & Aspiring Expert.",
    "Highly Adaptive Learner."
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum]);

  const tick = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

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
    <section id="home" className="hero-section section-container">
      <div className="hero-content">
        <motion.div 
          className="hero-text-area"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="greeting font-mono">Hi, my name is</motion.div>
          <motion.h1 variants={itemVariants} className="name">Ritik Shakya.</motion.h1>
          <motion.h2 variants={itemVariants} className="animated-title">
            I'm a <span className="gradient-text">{text}</span>
            <span className="cursor">|</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="hero-description">
            Software Developer with extensive experience in building scalable mobile and web applications. Passionate about problem-solving, performance optimization, and creating intuitive user experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" className="btn btn-outline">
              Resume <Download size={18} />
            </a>
            <a href="#contact" className="btn btn-icon btn-outline">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-area"
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <motion.div 
            className="image-wrapper glass-panel"
            animate={{ 
              y: [0, -20, 0], 
              rotateZ: [0, 2, -1, 0],
              boxShadow: [
                "0px 0px 0px rgba(6,182,212,0)", 
                "0px 20px 40px rgba(6,182,212,0.2)", 
                "0px 0px 0px rgba(6,182,212,0)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotateZ: 0 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt="Ritik Shakya"
              decoding="async"
              fetchpriority="high"
              className="profile-img"
              onLoad={(e) => { e.target.classList.add('loaded'); preloadProjectImages(); }}
              onError={(e) => {
                e.target.src = `${import.meta.env.BASE_URL}profile.jpg`;
                e.target.onerror = () => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Ritik+Shakya&size=400&background=000&color=fff';
                };
              }}
            />
            <div className="image-glow"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
