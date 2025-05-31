import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi'

function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const skillCategories = [
    {
      icon: <FiCode size={24} />,
      title: "Core Languages",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: <FiLayout size={24} />,
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "DaisyUI"]
    },
    {
      icon: <FiServer size={24} />,
      title: "Backend",
      skills: ["Node.js", "Express.js"]
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Database",
      skills: ["MongoDB"]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-base-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are my key skills and technologies I'm proficient with.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="card-custom p-6"
            >
              <div className="text-primary-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills