import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import ContactForm from '../components/contact/ContactForm'

function Contact() {
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: "Email",
      value: "satendrakul786@gmail.com",
      link: "mailto:satendrakul786@gmail.com"
    },
    {
      icon: <FiPhone size={24} />,
      title: "Phone",
      value: "+91 7898510736",
      link: "tel:7898510736"
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Location",
      value: "Morena, India",
      link: null
    },
    {
      icon: <FiGithub size={24} />,
      title: "GitHub",
      value: "github.com/satendra2003",
      link: "https://github.com/satendra2003"
    },
    {
      icon: <FiLinkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/satendra-kulshrestha",
      link: "https://www.linkedin.com/in/satendra-kulshrestha-6b670627a/"
    }
  ]

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
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to contact me through the form
              below or using any of my contact information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-base-100 rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="text-primary-600 mt-1 mr-4">{item.icon}</div>
                      <div>
                        <h4 className="text-base font-medium">{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target={item.link.startsWith('http') ? "_blank" : undefined}
                            rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="text-base-content/70 hover:text-primary-600 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base-content/70">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact