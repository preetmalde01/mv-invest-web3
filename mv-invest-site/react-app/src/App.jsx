import React, { useState, useEffect } from 'react';
import GlowCanvas from './components/GlowCanvas';
import Hero from './components/Hero';
import Mandate from './components/Mandate';
import WhyAdvisory from './components/WhyAdvisory';
import Calculator from './components/Calculator';
import Solutions from './components/Solutions';
import HowWeWork from './components/HowWeWork';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('mv_invest_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mv_invest_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-studio-bg text-studio-text transition-colors duration-300">
      {/* Live Interactive Orange Glow Canvas */}
      <GlowCanvas theme={theme} />

      {/* Page Content */}
      <div className="relative z-10">
        <Hero theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Mandate />
          <WhyAdvisory />
          <Calculator />
          <Solutions />
          <HowWeWork />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
