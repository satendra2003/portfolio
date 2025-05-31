import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import Skills from '../components/home/Skills'
import FeaturedProjects from '../components/home/FeaturedProjects'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Skills />
      <FeaturedProjects />
      
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              I'm currently looking for new opportunities to work on exciting projects and grow
              my skills as a developer. If you're looking for a dedicated developer, let's connect!
            </p>
          </div>
          <div className="flex justify-center">
            <a href="/contact" className="btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home