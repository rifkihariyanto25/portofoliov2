import React from 'react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-20 bg-secondary-dark/50 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 mesh-gradient opacity-50"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent-purple font-medium mb-2 text-sm tracking-wider uppercase" data-aos="fade-up">Career Journey</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
            A timeline of roles and contributions showcasing growth in software development and systems analysis.
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="300">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="flex flex-col md:flex-row items-center gap-8">
                {experience.isLeft ? (
                  <>
                    <div className="w-full md:w-1/2 md:pr-12" data-aos="fade-right" data-aos-delay={400 + index * 100}>
                      <div className="gradient-border p-8 hover-lift">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-full ${
                            index === 0 ? 'bg-accent-cyan/20 text-accent-cyan' :
                            index === 1 ? 'bg-accent-blue/20 text-accent-blue' :
                            'bg-accent-purple/20 text-accent-purple'
                          } text-xs font-medium`}>
                            {experience.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                        <p className={`font-medium mb-2 ${
                          index === 0 ? 'text-accent-cyan' :
                          index === 1 ? 'text-accent-blue' :
                          'text-accent-purple'
                        }`}>
                          {experience.company} · {experience.type}
                        </p>
                        <p className="text-text-gray text-sm mb-4">{experience.location}</p>
                        <ul className="space-y-2 text-text-gray">
                          {experience.description.map((desc, descIndex) => (
                            <li key={descIndex} className="flex gap-3">
                              <i className={`fas fa-check-circle mt-1 flex-shrink-0 ${
                                index === 0 ? 'text-accent-cyan' :
                                index === 1 ? 'text-accent-blue' :
                                'text-accent-purple'
                              }`}></i>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={`hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r ${
                      index === 0 ? 'from-accent-cyan to-accent-purple shadow-accent-cyan/50' :
                      index === 1 ? 'from-accent-blue to-accent-cyan shadow-accent-blue/50' :
                      'from-accent-purple to-accent-blue shadow-accent-purple/50'
                    } border-4 border-primary-dark shadow-lg timeline-dot flex-shrink-0`}></div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className={`hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r ${
                      index === 0 ? 'from-accent-cyan to-accent-purple shadow-accent-cyan/50' :
                      index === 1 ? 'from-accent-blue to-accent-cyan shadow-accent-blue/50' :
                      'from-accent-purple to-accent-blue shadow-accent-purple/50'
                    } border-4 border-primary-dark shadow-lg timeline-dot flex-shrink-0`}></div>
                    <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left" data-aos-delay={400 + index * 100}>
                      <div className="gradient-border p-8 hover-lift">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-full ${
                            index === 0 ? 'bg-accent-cyan/20 text-accent-cyan' :
                            index === 1 ? 'bg-accent-blue/20 text-accent-blue' :
                            'bg-accent-purple/20 text-accent-purple'
                          } text-xs font-medium`}>
                            {experience.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                        <p className={`font-medium mb-2 ${
                          index === 0 ? 'text-accent-cyan' :
                          index === 1 ? 'text-accent-blue' :
                          'text-accent-purple'
                        }`}>
                          {experience.company} · {experience.type}
                        </p>
                        <p className="text-text-gray text-sm mb-4">{experience.location}</p>
                        <ul className="space-y-2 text-text-gray">
                          {experience.description.map((desc, descIndex) => (
                            <li key={descIndex} className="flex gap-3">
                              <i className={`fas fa-check-circle mt-1 flex-shrink-0 ${
                                index === 0 ? 'text-accent-cyan' :
                                index === 1 ? 'text-accent-blue' :
                                'text-accent-purple'
                              }`}></i>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;