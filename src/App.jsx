import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Coursework from './components/Coursework';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* 
        Alternating themes architecture:
        Hero: White (light)
        About: Black (dark)
        Skills: White (light)
        Experience: Black (dark)
        Projects: White (light)
        Coursework: Black (dark)
        Contact/Footer: White (light)
      */}
      
      <main>
        <div className="theme-section theme-light">
          <Hero />
        </div>
        
        <div className="theme-section theme-dark">
          <About />
        </div>
        
        <div className="theme-section theme-light">
          <Skills />
        </div>
        
        <div className="theme-section theme-dark">
          <Experience />
        </div>
        
        <div className="theme-section theme-light">
          <Projects />
        </div>
        
        <div className="theme-section theme-dark">
          <Coursework />
        </div>
        
        <div className="theme-section theme-light">
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
