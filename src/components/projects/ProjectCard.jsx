import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.div 
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
        
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="text-xs bg-base-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-sm text-base-content/70"><strong>Role:</strong> {project.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard