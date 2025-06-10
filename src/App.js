import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import SkillsSection from './pages/SkillsSection';
import ExperienceSection from './pages/ExperienceSection';
import EducationSection from './pages/EducationSection';
import ProjectsSection from './pages/ProjectsSection';
import ContactSection from './pages/ContactSection';
import Footer from './components/Footer';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const nodeRef = useRef(null); // 👈 create a ref for CSSTransition

 const renderSection = () => {
  switch (activePage) {
    case 'home':
      return <HeroSection />;
    case 'skills':
      return <SkillsSection />;
    case 'experience':
      return <ExperienceSection />;
    case 'education':
      return <EducationSection />;
    case 'projects':
      return <ProjectsSection />;
      case 'contact':
  return <ContactSection />;

  }
};

useEffect(() => {
  const progressBar = document.getElementById('scroll-progress');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="app-container bg-dark text-light">
      <div id="scroll-progress" style={{
  position: 'fixed',
  top: 0,
  left: 0,
  height: '4px',
  backgroundColor: '#0d6efd',
  width: '0%',
  zIndex: 2000,
  transition: 'width 0.25s ease'
}}></div>

      <Navbar onNavigate={setActivePage} activePage={activePage} />

      <main className="main-content container py-4">
        <SwitchTransition>
          <CSSTransition
            key={activePage}
            nodeRef={nodeRef}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div ref={nodeRef}>
              {renderSection()}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>

      <Footer />
    </div>
  );
}

export default App;
