import React, { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const { addElement } = useScrollAnimation();
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span>Hi，I'm Qight.</span>
            <span className="smiley-icon">😊</span>
          </div>
          {!selectedProject && <Navigation activeTab={activeTab} setActiveTab={setActiveTab} scrollToSection={scrollToSection} />}
        </div>
      </header>

      <main className="main">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            <section 
              id="about"
              ref={(el) => {
                aboutRef.current = el;
                if (el) addElement(el);
              }} 
              className="fade-in-section"
            >
              <About />
            </section>
            <section 
              id="resume"
              ref={(el) => {
                resumeRef.current = el;
                if (el) addElement(el);
              }} 
              className="fade-in-section"
            >
              <Resume />
            </section>
            <section 
              id="work"
              ref={(el) => {
                workRef.current = el;
                if (el) addElement(el);
              }} 
              className="fade-in-section"
            >
              <Work onProjectSelect={handleProjectSelect} />
            </section>
            <section className="contact">
              <div className="section">
                <h3>Get In Touch</h3>
                <div className="contact-links">
                  <a href="mailto:3068231536@qq.com" className="contact-link">
                    📧 3068231536@qq.com
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Qight. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;