import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full glass z-50 transition-all duration-300 px-6 sm:px-8 lg:px-24 ${isScrolled ? 'shadow-2xl' : ''}`}>
      <div className="flex justify-between items-center h-20">
        {/* Logo with Glow Effect */}
        <div className="logo gradient-text font-bold text-2xl tracking-wider cursor-pointer hover-logo">
          RAH
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn text-white text-xl md:hidden focus:outline-none"
        >
          <i className="fas fa-bars"></i>
        </button>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <button 
            onClick={() => scrollToSection('home')}
            className="nav-link text-text-gray hover:text-white transition duration-300 py-2 font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('project')}
            className="nav-link text-text-gray hover:text-white transition duration-300 py-2 font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="nav-link text-text-gray hover:text-white transition duration-300 py-2 font-medium"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('skill')}
            className="nav-link text-text-gray hover:text-white transition duration-300 py-2 font-medium"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('kontak')}
            className="cta-btn px-7 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold hover:shadow-xl hover:shadow-accent-purple/50 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col space-y-3 pb-6 px-4`}>
        <button 
          onClick={() => scrollToSection('home')}
          className="text-text-gray hover:text-white transition duration-300 block py-2 text-left"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('project')}
          className="text-text-gray hover:text-white transition duration-300 block py-2 text-left"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="text-text-gray hover:text-white transition duration-300 block py-2 text-left"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('skill')}
          className="text-text-gray hover:text-white transition duration-300 block py-2 text-left"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('kontak')}
          className="cta-btn px-7 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold inline-block mt-2 text-center"
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;