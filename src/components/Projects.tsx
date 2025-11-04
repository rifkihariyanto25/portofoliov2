import React, { useState } from 'react';
import { projects, projectCategories, ProjectCategory } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);



  return (
    <section className="py-24 px-4 sm:px-8 lg:px-20 relative" id="project">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-purple font-medium mb-2 text-sm tracking-wider uppercase" data-aos="fade-up">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
            Koleksi karya saya yang mencakup pengembangan backend, desain UI/UX, implementasi IoT, dan dokumentasi teknis.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up" data-aos-delay="300">
          {projectCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`filter-btn px-6 py-2.5 rounded-full border-2 border-accent-purple/30 text-text-gray font-medium transition duration-300 ${
                activeFilter === category.key ? 'active' : ''
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card project-item gradient-border hover-lift"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
                    <i className={`${project.icon} ${project.iconColor} text-2xl`}></i>
                  </div>
                  <span className="text-xs text-text-gray mt-1">{project.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-text-gray mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
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
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <button className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium hover:shadow-xl hover:shadow-accent-purple/50 transition duration-300 transform hover:scale-105">
            View All Projects
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;