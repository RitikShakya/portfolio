import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import './Coursework.css';

const Coursework = () => {
  const courses = [
    { title: "NodeJS - The Complete Guide", details: "(MVC, REST APIs, GraphQL)", Platform: "Udemy", Year: "2024" },
    { title: "DevOps CI/CD", details: "Multi-Project Pipelines and Advanced Troublesh", Platform: "Online", Year: "2024" },
    { title: "Full Stack Java Developer", details: "Java + JSP + Restful WS + Spring", Platform: "Udemy", Year: "2022" },
    { title: "Flutter And Dart", details: "The Complete Guide", Platform: "Udemy", Year: "2022" },
    { title: "Java Course for Android", details: "App Development", Platform: "Udemy", Year: "2022" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" } }
  };

  return (
    <section id="certifications" className="section-container">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono gradient-text">05.</span> Certifications & Learning
      </motion.h2>

      <motion.div 
        className="coursework-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {courses.map((course, idx) => (
          <motion.div key={idx} variants={itemVariants} className="course-card glass-panel">
            <div className="course-header">
              <Award className="course-icon" size={28} />
              <div className="course-year font-mono">{course.Year}</div>
            </div>
            
            <h4 className="course-title">{course.title}</h4>
            <p className="course-details">{course.details}</p>
            
            <div className="course-footer">
              <BookOpen size={16} />
              <span className="font-mono">{course.Platform}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Coursework;
