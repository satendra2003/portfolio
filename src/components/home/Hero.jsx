import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'

function Hero() {
  return (
    <section className="min-h-screen flex items-center py-16 md:py-0">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-600 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Satendra Kulshrestha
              </h1>
              <h2 className="text-xl md:text-2xl text-base-content/80 mb-6">
                Frontend Developer & Aspiring Software Engineer
              </h2>
              <p className="text-base-content/70 max-w-lg mb-8">
                I'm a passionate frontend developer currently pursuing my B.Tech degree. 
                With experience in React, JavaScript, and modern CSS frameworks, I build 
                responsive and user-friendly web applications.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://drive.google.com/file/d/1VWlmhy1kDf4rl3rkOpZsCjbwp8Urdx5z/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Resume
                </a>
                <a 
                  href="#projects" 
                  className="btn-outline"
                >
                  View Projects
                </a>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/satendra2003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base-content hover:text-primary-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/satendra-kulshrestha-6b670627a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base-content hover:text-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 mx-auto">
                <img 
                  src="https://drive.google.com/file/d/1lC_XSRsih1kgJw2x6uVy--4jygsdoahz/view?usp=drive_link"
                  alt="Satendra Kulshrestha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white py-2 px-4 rounded-lg">
                <span className="font-medium">Frontend Developer</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-base-content/70 mb-2">Scroll Down</span>
          <FiArrowDown className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero