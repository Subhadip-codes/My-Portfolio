import React, { useState, useEffect, useCallback } from 'react'

const Navbar = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Alternative: Use Intersection Observer for more accurate detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is 20% from top
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (['home', 'skills', 'projects', 'contact'].includes(sectionId)) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Observe all sections
    const sections = ['home', 'skills', 'projects', 'contact']
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (section) => {
    scrollToSection(section)
    setIsMobileMenuOpen(false)
    // Temporarily set active section for immediate feedback
    setActiveSection(section)
  }

  const navItems = [
    { name: 'Home', section: 'home', icon: '🏠' },
    { name: 'Skills', section: 'skills', icon: '⚡' },
    { name: 'Projects', section: 'projects', icon: '💼' },
    { name: 'Contact', section: 'contact', icon: '📧' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-purple-500/10' 
        : 'bg-black/20 backdrop-blur-lg border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with hover effect */}
          <div 
            className="group cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
              Portfolio
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 capitalize rounded-lg overflow-hidden ${
                    activeSection === item.section
                      ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <span className="relative flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    {item.name}
                  </span>

                  {/* Active indicator */}
                  {activeSection === item.section && (
                    <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 animate-pulse"></div>
                  )}

                  {/* Hover indicator */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="relative p-2 text-gray-300 hover:text-white focus:outline-none focus:text-white transition-all duration-300 group"
              aria-label="Toggle mobile menu"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hamburger/X Icon with smooth animation */}
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
                }`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with smooth slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-2 space-y-1 bg-black/30 backdrop-blur-xl rounded-b-xl border-t border-white/10">
            {navItems.map((item, index) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className={`group relative w-full text-left px-6 py-4 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 ${
                  activeSection === item.section ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white' : ''
                } transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' 
                }}
              >
                {/* Mobile item background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                {/* Content */}
                <span className="relative text-xl">{item.icon}</span>
                <span className="relative font-medium">{item.name}</span>
                
                {/* Active indicator for mobile */}
                {activeSection === item.section && (
                  <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                )}

                {/* Hover arrow */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navbar