import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MonitorSmartphone } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "RIDAL",
      description: (
        <>
          <strong>"Why ride alone, when you can ride along?"</strong><br/><br/>
          Conceptualized and built an early-stage startup ride-sharing application prototype focusing on intuitive UX, safety tracking, and real-time data handling. Website coming soon.
        </>
      ),
      tech: ["Full Ownership (Frontend & Backend)", "Conceptualization", "UI/UX", "Firebase"],
      liveLink: "#",
      type: "Startup Ideation",
      image: "/ridal_taglines.png"
    },
    {
      title: "Inspiring Seniors Web App",
      description: "A complete responsive web application for an NGO featuring user and admin dashboards. Integrated Firebase for backend services and automated onboarding.",
      tech: ["React", "Firebase", "Twilio", "Meta API"],
      liveLink: "https://inspiringseniors.org/homepage",
      type: "Web Platform",
      image: "/inspiringseniors_ss.png"
    },
    {
      title: "HFN Kisaan Saarthi App",
      description: "A comprehensive Flutter application for farmers with advanced offline capabilities, deep-linking, and complete analytics integration.",
      tech: ["Flutter", "Dart", "Firebase", "Amplitude"],
      liveLink: "https://play.google.com/store/apps/details?id=com.hfn.kisaan_app.hfn_kisaan_app",
      type: "Mobile App",
      image: "/HFN_what.png"
    },
    {
      title: "iDream Educational Suite",
      description: "The core suite including iPrep Superapp (public bilingual education platform) and secure Enterprise B2B Apps (iPrep Pal, Digital Library, Content Creation) powered by Hive offline-sync.",
      tech: ["Flutter", "BLoC", "SQLite", "Hive", "REST APIs"],
      liveLink: "https://play.google.com/store/apps/details?id=org.idreameducation.iprepapp",
      type: "Ecosystem / Mobile Apps",
      image: "/iprep_superappss.png"
    },
    {
      title: "Infigon Futures",
      description: "Internship project where I natively migrated their entire Firebase backend architectures to Node.js, and converted their native application into a unified highly-performant Flutter platform.",
      tech: ["Flutter", "Node.js", "Firebase"],
      liveLink: "",
      type: "Internship Project",
      image: "/infigon_landing_page.png"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono gradient-text">04.</span> Featured Projects
      </motion.h2>

      <motion.div 
        className="scroll-affordance font-mono text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        ← Scroll horizontally to explore →
      </motion.div>
      
      <div className="horizontal-scroll-container pb-4" ref={scrollRef}>
        <div className="projects-slider">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card-v2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="project-image-container glass-panel p-0 overflow-hidden">
                <div className="project-count font-mono">
                  0{index + 1} <span className="slash">/</span> 0{projects.length}
                </div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`project-image ${project.secondaryImage ? 'split-img' : ''}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {project.secondaryImage && (
                  <img 
                    src={project.secondaryImage} 
                    alt={`${project.title} secondary`} 
                    className="project-image split-img secondary-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}

                <div className="project-image-fallback" style={{ display: 'none' }}>
                  <MonitorSmartphone size={48} className="text-muted" />
                  <span>Loading Image...</span>
                </div>
              </div>
              
              <div className="project-info p-4">
                <div className="project-top-bar">
                  <p className="project-type font-mono">{project.type}</p>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label="External Link" className="external-link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech-list font-mono">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag glass-panel">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
