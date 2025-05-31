import { motion } from 'framer-motion'
import { FiDownload, FiCalendar, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

function About() {
  const education = [
    {
      degree: "B.Tech",
      field: "Computer Science and Engineering",
      school: "Shriram College of Engineering and Management",
      location: "Morena, India",
      period: "2021 - 2025 (Expected)",
      description: "Currently pursuing B.Tech with focus on computer science fundamentals, programming, and web development."
    }
  ]

  const experience = [
    {
      position: "Frontend Developer (Intern)",
      company: "UpToSkills",
      location: "Remote",
      period: "3 months",
      description: "Worked on frontend development projects using HTML, CSS, JavaScript, and React. Collaborated with team members to build responsive user interfaces."
    }
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
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
      <section className="section-padding bg-base-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <motion.div 
              className="md:w-1/3"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="sticky top-24">
                <div className="w-full max-w-xs mx-auto md:mx-0 overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/src/assets/WhatsApp Image 2025-05-31 at 8.37.13 PM.jpeg"
                    alt="Satendra Kulshrestha" 
                    className="w-full aspect-square object-cover"
                  />
                  
                  <div className="p-6 bg-base-100">
                    <h3 className="text-2xl font-semibold mb-2">Satendra Kulshrestha</h3>
                    <p className="text-base-content/70 mb-4">Frontend Developer</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <FiMail className="text-primary-600 mr-3" />
                        <span className="text-sm">satendrakul786@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <FiPhone className="text-primary-600 mr-3" />
                        <span className="text-sm">+91 7898510736</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="text-primary-600 mr-3" />
                        <span className="text-sm">Morena, India</span>
                      </div>
                      <div className="flex items-center">
                        <FiCalendar className="text-primary-600 mr-3" />
                        <span className="text-sm">B.Tech (May 2025)</span>
                      </div>
                    </div>
                    
                    <a 
                      href="https://drive.google.com/file/d/1VWlmhy1kDf4rl3rkOpZsCjbwp8Urdx5z/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      <FiDownload className="mr-2" /> View Resume
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-2/3"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeIn} className="mb-12">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="space-y-4">
                  <p>
                    Hello! I'm Satendra Kulshrestha, a passionate frontend developer with a focus on creating 
                    engaging user experiences through clean, efficient code.
                  </p>
                  <p>
                    I'm currently completing my B.Tech in Computer Science and Engineering at Shriram College of 
                    Engineering and Management, expected to graduate in May 2025.
                  </p>
                  <p>
                    My journey in web development started with HTML, CSS, and JavaScript, and I've since expanded 
                    my skills to include modern frameworks and libraries like React.js, along with CSS frameworks 
                    such as Tailwind CSS, Bootstrap, and Material UI.
                  </p>
                  <p>
                    I have experience working with the MERN stack (MongoDB, Express.js, React, Node.js) 
                    and I'm continuously learning new technologies to enhance my development capabilities.
                  </p>
                  <p>
                    My career goal is to become a software engineer in a reputed company where I can contribute 
                    to meaningful projects while continuing to grow as a developer.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-primary-600">
                      <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary-600"></div>
                      <h3 className="text-xl font-semibold">{item.degree} in {item.field}</h3>
                      <p className="text-base-content/70 mb-1">{item.school}, {item.location}</p>
                      <p className="text-sm text-primary-600 mb-2">{item.period}</p>
                      <p className="text-base-content/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-6">Experience</h2>
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-primary-600">
                      <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary-600"></div>
                      <h3 className="text-xl font-semibold">{item.position}</h3>
                      <p className="text-base-content/70 mb-1">{item.company}, {item.location}</p>
                      <p className="text-sm text-primary-600 mb-2">{item.period}</p>
                      <p className="text-base-content/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About