import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-base-200 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Satendra Kulshrestha</h3>
            <p className="mb-4">
              A passionate frontend developer and aspiring software engineer based in Morena, India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/satendra2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/satendra-kulshrestha-6b670627a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="mailto:satendrakul786@gmail.com"
                className="text-base-content hover:text-primary-500 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
              <a 
                href="tel:7898510736"
                className="text-base-content hover:text-primary-500 transition-colors"
                aria-label="Phone"
              >
                <FiPhone size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-500 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary-500 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiMail className="mr-2" /> satendrakul786@gmail.com
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" /> +91 7898510736
              </li>
              <li>Morena, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-300 mt-8 pt-8 text-center">
          <p>&copy; {year} Satendra Kulshrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer