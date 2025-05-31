import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import { useTheme } from '../../contexts/ThemeContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-base-100/95 backdrop-blur-md shadow-md py-2' 
      : 'bg-transparent py-4'
  }`

  const activeClass = "text-primary-600 font-medium"
  const inactiveClass = "text-base-content hover:text-primary-500 transition-colors"

  return (
    <nav className={navbarClasses}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold">
            Satendra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Projects
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Contact
            </NavLink>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-base-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            
            <a 
              href="https://drive.google.com/file/d/1VWlmhy1kDf4rl3rkOpZsCjbwp8Urdx5z/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center"
            >
              <FiDownload className="mr-2" /> Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-base-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-base-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className="md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
      >
        <div className="container-custom py-4 flex flex-col space-y-4 bg-base-100 border-t">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            Contact
          </NavLink>
          <a 
            href="https://drive.google.com/file/d/1VWlmhy1kDf4rl3rkOpZsCjbwp8Urdx5z/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center self-start"
            onClick={closeMenu}
          >
            <FiDownload className="mr-2" /> Resume
          </a>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar