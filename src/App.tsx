import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="bg-primary-dark text-slate-200 overflow-x-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
        <div className="blob blob-cyan"></div>
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;