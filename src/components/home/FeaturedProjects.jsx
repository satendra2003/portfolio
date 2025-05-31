import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiMusic, FiCloud, FiLayout } from 'react-icons/fi'

function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Music Player",
      description: "A web-based music player with play/pause and UI features",
      icon: <FiMusic size={24} />,
      tech: ["React", "CSS", "JavaScript"],
      image: "https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg",
      github: "https://github.com/satendra2003",
      demo: "https://music-player-vert-seven.vercel.app/"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Displays real-time weather info based on user input",
      icon: <FiCloud size={24} />,
      tech: ["React", "OpenWeatherMap API", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      github: "https://github.com/satendra2003",
      demo: "https://weather-app-amber-six-77.vercel.app/"
    },
    {
      id: 3,
      title: "Landing Page",
      description: "Responsive marketing landing page",
      icon: <FiLayout size={24} />,
      tech: ["HTML", "CSS", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg",
      github: "https://github.com/satendra2003",
      demo: "https://kds-landing-page-zeta.vercel.app/"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="projects" className="section-padding bg-base-200">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project helped me improve my skills and 
            learn new technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="card-custom overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label="View live demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-primary-600 mb-2">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-base-content/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs bg-base-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary inline-flex">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects