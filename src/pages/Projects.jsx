import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMusic, FiCloud, FiLayout } from 'react-icons/fi'
import ProjectCard from '../components/projects/ProjectCard'

function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Music Player",
      description: "A web-based music player with play/pause and UI features",
      icon: <FiMusic size={24} />,
      tech: ["React", "CSS", "JavaScript"],
      role: "Frontend",
      image: "https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg",
      github: "https://github.com/satendra2003",
      demo: "https://music-player-vert-seven.vercel.app/",
      category: "React"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Displays real-time weather info based on user input",
      icon: <FiCloud size={24} />,
      tech: ["React", "OpenWeatherMap API", "Tailwind CSS"],
      role: "Frontend + API integration",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      github: "https://github.com/satendra2003",
      demo: "https://weather-app-amber-six-77.vercel.app/",
      category: "React"
    },
    {
      id: 3,
      title: "Landing Page",
      description: "Responsive marketing landing page",
      icon: <FiLayout size={24} />,
      tech: ["HTML", "CSS", "Tailwind CSS"],
      role: "Frontend",
      image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg",
      github: "https://github.com/satendra2003",
      demo: "https://kds-landing-page-zeta.vercel.app/",
      category: "HTML/CSS"
    }
  ]

  const categories = ["All", ...new Set(allProjects.map(project => project.category))]
  const [activeCategory, setActiveCategory] = useState("All")
  const [projects, setProjects] = useState(allProjects)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === "All") {
      setProjects(allProjects)
    } else {
      setProjects(allProjects.filter(project => project.category === category))
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Here's a collection of projects I've worked on. Each project has helped me grow
              as a developer and learn new technologies.
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-base-200 hover:bg-base-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects