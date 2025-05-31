import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check for theme in localStorage or use system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme
    }
    // Check if user prefers dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  // Update theme attribute on document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const value = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}