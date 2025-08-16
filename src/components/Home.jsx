import React from 'react'

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              {/* Profile picture container */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-2xl shadow-purple-500/20">
                {/* Replace this with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center">
                  {/* Placeholder - replace with <img src="your-image.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                  <div className="text-6xl font-bold text-white"><img src="Subhadip.jpg" alt="Subhadip_Layek" className="w-full h-125 object-cover" /></div>
                </div>
              </div>
              
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-500/40 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="animate-fade-in-up">
                <p className="text-purple-400 text-lg md:text-xl font-medium mb-2">
                  Hello, I'm
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  Subhadip Layek
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
                  Full Stack Web Developer
                </h2>
              </div>

              {/* Description */}
              <div className="animate-fade-in-up animation-delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Passionate about specializing in building modern, scalable, and user-friendly web applications. Skilled in React, HTML, Tailwind CSS, and TypeScript on the frontend, and experienced with Node.js, Express.js, and EJS on the backend. I also have strong expertise in working with databases including MySQL, PostgreSQL, and MongoDB. With a focus on clean code and seamless user experience, I enjoy turning ideas into innovative and functional digital solutions.
                </p>
              </div>

              {/* Skills/Technologies */}
              <div className="animate-fade-in-up animation-delay-400">
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  {['React', 'Tailwind CSS','HTML','CSS', 'Node.js', 'JavaScript', 'MongoDB', 'Express.js','EJS','MySQL','PostgreSQL','TypeScript'].map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Home