import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { socialLinks } from '../data/skills';
import Lanyard from './Lanyard';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Backend Developer", "UI/UX Designer", "Tech Enthusiast"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
      });

      return () => typed.destroy();
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative px-4 sm:px-8 lg:px-20 mesh-gradient" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1000">
            <p className="text-accent-purple font-medium mb-4 text-sm tracking-wider uppercase">Hi, my name is</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Rifki Aditya</span><br />
              <span className="gradient-text">Hariyanto</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-gray mb-6">
              <span ref={typedRef}></span>
            </h2>
            
            <p className="text-lg text-text-gray leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
              Passionate Informatics student at <span className="text-accent-cyan font-medium">Telkom University Purwokerto</span>, specializing in <span className="font-medium text-white">UI/UX Design</span>, <span className="font-medium text-white">Backend Development</span>, and Technical Documentation. Experienced in building robust backend systems with Laravel.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mb-10">
              <button 
                onClick={() => scrollToSection('project')}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium hover:shadow-xl hover:shadow-accent-purple/50 transition duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('kontak')}
                className="px-8 py-3.5 rounded-full border-2 border-accent-purple text-white font-medium hover:bg-accent-purple/10 transition duration-300"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex justify-center lg:justify-start gap-5">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className={`social-icon w-12 h-12 flex items-center justify-center border-2 border-${social.color}/50 text-${social.color} rounded-full hover:border-${social.color} transition duration-300 relative z-10`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:w-5/12 relative" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Lanyard 3D Component */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Lanyard 
                  position={[0, 0, 8]}
                  gravity={[0, -9.8, 0]}
                  fov={50}
                  transparent={true}
                />
              </div>
              
              {/* Experience badge overlay */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl rotate-12 transform hover:rotate-0 transition duration-300 z-10">
                <div className="text-center">
                  <div className="text-2xl">3+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;