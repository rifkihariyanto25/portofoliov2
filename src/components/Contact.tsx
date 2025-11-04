import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "hariyantorifki25@gmail.com",
      color: "text-accent-purple"
    },
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      value: "+62 81391740311",
      color: "text-accent-blue"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Purwokerto, Indonesia",
      color: "text-accent-cyan"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-20 bg-secondary-dark/50 relative overflow-hidden" id="kontak">
      <div className="absolute inset-0 mesh-gradient opacity-50"></div>
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div data-aos="fade-up">
          <p className="text-accent-purple font-medium mb-2 text-sm tracking-wider uppercase">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together!</span>
          </h2>
          <p className="text-lg text-text-gray mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and create something amazing together!
          </p>
          <a 
            href="mailto:hariyantorifki25@gmail.com" 
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold text-lg hover:shadow-2xl hover:shadow-accent-purple/50 transition duration-300 transform hover:scale-105 mb-16"
          >
            <i className="fas fa-envelope"></i>
            Send Me an Email
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {contactInfo.map((contact, index) => (
            <div 
              key={contact.title}
              className="gradient-border p-8 hover-lift" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
                <i className={`${contact.icon} ${contact.color} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
              <p className="text-text-gray">{contact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;