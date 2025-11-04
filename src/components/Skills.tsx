import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-20 relative" id="skill">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <p className="text-accent-purple font-medium mb-2 text-sm tracking-wider uppercase" data-aos="fade-up">Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
            <span className="gradient-text">Skills & Capabilities</span>
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
            Technical proficiencies and core competencies that drive successful project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.id} 
              className="skill-card gradient-border p-10 text-center hover-lift group" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
                <i className={`${skill.icon} skill-icon ${skill.iconColor} text-4xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{skill.title}</h3>
              <p className="text-text-gray leading-relaxed mb-6">
                {skill.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 text-xs rounded-full ${
                      tagIndex % 3 === 0
                        ? 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20'
                        : tagIndex % 3 === 1
                        ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20'
                        : 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;