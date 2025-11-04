import React from 'react';
import { socialLinks } from '../data/skills';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 sm:px-8 lg:px-20 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="logo gradient-text font-bold text-2xl tracking-wider mb-2">RAH</div>
            <p className="text-sm text-text-gray">
              Built with passion and <span className="text-accent-purple">Tailwind CSS</span>
            </p>
          </div>
          
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                className={`social-icon w-10 h-10 flex items-center justify-center border-2 border-${social.color}/30 text-${social.color} rounded-full hover:border-${social.color} hover:bg-${social.color}/10 transition duration-300 relative z-10`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-text-gray">
            &copy; 2024 Rifki Aditya Hariyanto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;