import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Recognition } from './components/Recognition';
import { AiTwinWidget } from './components/AiTwinWidget';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [isAiWidgetOpen, setIsAiWidgetOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Dynamic Background Particle Canvas */}
      <BackgroundCanvas />

      {/* Fixed Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        toggleAiWidget={() => setIsAiWidgetOpen(!isAiWidgetOpen)}
      />

      {/* Main Page Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <SkillsMatrix />
        <Experience />
        <Projects />
        <Recognition />
        <Contact />
      </main>

      {/* AI Assistant Drawer Widget */}
      <AiTwinWidget
        isOpen={isAiWidgetOpen}
        onClose={() => setIsAiWidgetOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
