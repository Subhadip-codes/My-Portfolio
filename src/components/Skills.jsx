import React, { useState, useEffect } from 'react'
import { Code, Database, Globe, Server, Smartphone, Palette } from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const skills = [
    { name: 'React.js', icon: <Code className="w-6 h-6" />, level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: <Server className="w-6 h-6" />, level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Express.js', icon: <Database className="w-6 h-6" />, level: 80, color: 'from-yellow-400 to-yellow-600' },    
    { name: 'Tailwind CSS', icon: <Palette className="w-6 h-6" />, level: 85, color: 'from-teal-400 to-teal-600' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, level: 75, color: 'from-green-400 to-green-600' },
    { name: 'EJS', icon: <Smartphone className="w-6 h-6" />, level: 88, color: 'from-pink-400 to-pink-600' },
    { name: 'MySQL', icon: <Database className="w-6 h-6" />, level: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'TypeScript', icon: <Globe className="w-6 h-6" />, level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'PostgreSQL', icon: <Globe className="w-6 h-6" />, level: 80, color: 'from-gray-400 to-gray-600' },
    { name: 'JavaScript', icon: <Globe className="w-6 h-6" />, level: 95, color: 'from-purple-400 to-purple-600' },
    { name: 'HTML/CSS', icon: <Palette className="w-6 h-6" />, level: 90, color: 'from-red-400 to-red-600' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div 
                  className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">{skill.level}% Proficiency</p>
                <div className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skill categories */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">8+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
              <p className="text-gray-300">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills