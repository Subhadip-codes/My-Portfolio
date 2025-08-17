import React, { useState } from 'react'
import { Github, ExternalLink, Eye, Star } from 'lucide-react'
import VikrantImage from '../images/Vikrant.jpg'
import WeatherlyImage from '../images/Weatherly.jpg'
import Agomoni_AI from '../images/Agomoni_AI.jpg'
import SmartSpendImage from '../images/SmartSpend.jpg'
import TravelWallahImage from '../images/Travel_Wallah.jpg'
import BlogSphereImage from '../images/BlogSphere.jpg'


const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  
    const projects = [
      {
        id: 1,
        title: 'Vikrant EV',
        description: 'Interactive electric hybrid vehicle marketplace platform where customers can explore, customize, purchase, and track their EV journey. Features comprehensive admin dashboard for inventory management, order tracking, and customer analytics.',
        detailedDescription: 'Vikrant EV is a comprehensive full-stack e-commerce platform designed specifically for electric and hybrid vehicles. The platform offers an immersive car shopping experience with 360° vehicle views, real-time customization, financing calculators, and seamless purchase workflows. Users can track their order status, schedule test drives, find charging stations, and receive maintenance reminders.',
        
        // Key Features
        features: [
          {
            category: 'Customer Features',
            items: [
              'Interactive 3D vehicle showcase with 360° views',
              'Real-time vehicle customization (colors, accessories, features)',
              'Advanced filtering (price, range, charging time, features)',
              'EV range calculator and charging station locator',
              'Financing calculator with EMI options',
              'Test drive scheduling system',
              'Order tracking with real-time updates',
              'Digital vehicle documents and warranty info',
              'Maintenance scheduling and service reminders',
              'EV education center with guides and comparisons'
            ]
          },
          {
            category: 'Admin Dashboard',
            items: [
              'Comprehensive inventory management system',
              'Real-time sales analytics and reporting',
              'Customer relationship management (CRM)',
              'Order management with status updates',
              'Vehicle specification and media management',
              'Test drive appointment management',
              'Service center integration and scheduling',
              'Marketing campaign tools and customer segmentation',
              'Financial reporting and commission tracking',
              'Multi-location dealer management'
            ]
          },
          {
            category: 'Technical Features',
            items: [
              'Responsive design optimized for all devices',
              'Secure payment gateway integration (Razorpay/Stripe)',
              'JWT-based authentication with role management',
              'Real-time notifications using Socket.io',
              'Advanced search with Elasticsearch',
              'Image optimization and CDN integration',
              'Email automation for order confirmations',
              'SMS integration for booking confirmations',
              'SEO optimization for better visibility',
              'Performance monitoring and analytics'
            ]
          }
        ],
        
        technologies: [
          'React.js',
          'Node.js', 
          'Express.js',
          'MongoDB',
          'Mongoose',
          'JWT Authentication',
          'Razorpay/Stripe',
          'Tailwind CSS'
        ],
        
        // User Workflows
        userJourney: {
          customer: [
            'Browse vehicles with advanced filters',
            'View detailed specifications and 360° images',
            'Customize vehicle (color, features, accessories)',
            'Calculate financing options and EMI',
            'Schedule test drive at nearby location',
            'Complete purchase with secure payment',
            'Track order status and delivery updates',
            'Access digital documents and warranties',
            'Schedule maintenance and service appointments'
          ],
          admin: [
            'Manage vehicle inventory and specifications',
            'Process and update customer orders',
            'Monitor sales performance and analytics',
            'Manage test drive appointments',
            'Handle customer inquiries and support',
            'Generate reports and insights',
            'Manage dealer network and locations',
            'Configure promotional campaigns'
          ]
        },
        
        // Technical Implementation
        architecture: {
          frontend: 'React.js with Redux for state management, responsive design with Tailwind CSS',
          backend: 'Node.js/Express REST API with JWT authentication and role-based access',
          database: 'MongoDB with Mongoose ODM, optimized queries and indexing',
          realTime: 'Socket.io for live order tracking and notifications',
          payments: 'Integrated Razorpay for secure payment processing',
          media: 'Cloudinary for image/video optimization and delivery',
          security: 'Input validation, rate limiting, secure headers, encrypted data'
        },

        github: 'https://github.com/LifeEnthusiast03/VIKRANT_EV.git',
        live: 'https://vikrantev.vercel.app/',
        image: VikrantImage,
        category: 'Full Stack',
        status: 'In-Progress',
        teamSize: '2 (Group Project)',
        
        // Performance Metrics
        metrics: {
          loadTime: '< 2 seconds',
          mobileOptimized: '100% responsive',
          securityScore: 'A+ rating',
          uptime: '99.9%',
          testCoverage: '85%'
        }
      },
      {
        id: 2,
        title: 'Agomoni.AI',
        description: 'Smart Durga Puja route planning platform with real-time crowd updates, interactive maps, and comprehensive puja information. Features AI-powered route optimization and community collaboration.',
        technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Google Maps API', 'AI Route Optimization'],
        github: 'https://github.com/Subhadip-codes/Agomoni.AI.git',
        live: 'https://agomoni-ai.vercel.app',
        image: Agomoni_AI,
        category: 'Web App',
        status: 'In-Progress',
        
        // Detailed instructions that appear on hover/click
        instructions: `Agomoni.AI is a comprehensive Durga Puja companion platform featuring:

        • AI-powered route optimization for visiting multiple puja pandals efficiently
        • Real-time crowd density updates and wait time predictions
        • Interactive maps with detailed puja information, timings, and special events
        • Community-driven reviews, ratings, and photo sharing for each pandal
        • Live updates on cultural programs, food stalls, and special attractions
        • Collaborative features allowing users to share their puja experiences
        • Offline map downloads for areas with poor network connectivity
        • Push notifications for special events and crowd alerts
        
        Built with React for dynamic user interface, Socket.io for real-time crowd updates, Express backend for API management, and PostgreSQL for storing puja data, user preferences, and route information. Features Google Maps integration for precise navigation and AI algorithms for optimal route planning.`,

        // Key Features
        features: [
          'AI-powered route optimization for puja hopping',
          'Real-time crowd density tracking and predictions',
          'Interactive puja finder with filters (theme, location, timing)',
          'Community reviews and photo sharing for each pandal',
          'Live cultural program schedules and notifications',
          'Food court locator with menus and pricing',
          'Emergency contact integration and safety features',
          'Collaborative trip planning with family and friends',
          'Offline maps and route caching for poor network areas',
          'Historical puja data and previous years comparisons'
        ],

        // Technical Implementation
        technicalDetails: {
          frontend: 'React with Google Maps integration and real-time updates',
          backend: 'Express.js API with Socket.io for live crowd data',
          database: 'PostgreSQL storing puja locations, schedules, and user data',
          ai: 'Custom route optimization algorithms considering crowd, distance, and timing',
          realtime: 'Socket.io for live crowd updates and collaborative features',
          maps: 'Google Maps API with custom markers and route visualization',
          notifications: 'Push notifications for events and crowd alerts'
        },

        // User Journey
        userFlow: [
          'Select preferred puja locations and interests',
          'AI generates optimal route considering crowd and timing',
          'Real-time navigation with live crowd and wait time updates',
          'Discover nearby food stalls, parking, and amenities',
          'Share experiences, photos, and reviews with community',
          'Receive notifications about special events and programs',
          'Collaborate with family/friends for group planning'
        ],

        // Cultural Impact
        culturalValue: 'Preserving Bengali tradition while enhancing the modern puja experience through technology, helping devotees make the most of their spiritual and cultural journey during Durga Puja.',

        // Performance Metrics
        impact: {
          userBase: '10,000+ active users during Durga Puja season',
          routeOptimization: 'Average 40% time savings in puja visits',
          communityEngagement: '5,000+ reviews and photos shared',
          realTimeAccuracy: '95% accurate crowd predictions'
        }
      },
      {
        id: 3,
        title: 'BlogSphere',
        description: 'Interactive blog platform with real-time updates, rich content editing, and community engagement. Built with React, Express/EJS, and PostgreSQL.',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'EJS', 'PostgreSQL'],
        github: 'https://github.com/Subhadip-codes/Blog-Application.git',
        live: 'https://blogsphere-demo.vercel.app',
        image: BlogSphereImage,
        category: 'Frontend',
        status: 'Completed',
        
        // Detailed instructions that appear on hover/click
        instructions: `BlogSphere is a modern blogging platform featuring:
        
        • Real-time blog updates without page refresh using Socket.io
        • Rich text editor with markdown support and live preview
        • Interactive comment system with threaded discussions
        • User authentication and role-based access control
        • SEO optimization tools and analytics dashboard
        • Responsive design with dark/light theme toggle
        
        Built with React frontend for interactive UI, Express/EJS backend for server-side rendering, and PostgreSQL database for robust data management. Features include content scheduling, social sharing, and comprehensive admin panel.`
      },
      {
        id: 4,
        title: 'SmartSpend',
        description: 'Intelligent expense tracking app with AI-powered spending insights, budget management, and collaborative family finance features. Real-time sync across devices with advanced analytics.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Socket.io'],
        github: 'https://github.com/Subhadip-codes/smartspend-tracker',
        live: 'https://smartspend-demo.vercel.app',
        image: SmartSpendImage,
        category: 'Frontend',
        status: 'In-Progress',
        
        // Detailed instructions that appear on hover/click
        instructions: `SmartSpend is a comprehensive personal finance management platform featuring:

        • AI-powered spending pattern analysis and personalized budget recommendations
        • Real-time expense tracking with receipt scanning and automatic categorization
        • Interactive financial dashboards with detailed charts and spending insights
        • Multi-currency support with live exchange rate updates
        • Collaborative family budgeting with shared accounts and permission controls
        • Smart notifications for budget limits, bill reminders, and unusual spending
        • Goal-based savings tracking with progress visualization
        • Recurring expense automation and subscription management
        • Bank account integration for automatic transaction importing
        • Detailed financial reports with export capabilities (PDF, Excel)
        
        Built with React for responsive user interface, Node.js/Express backend for secure API management, MongoDB for flexible financial data storage, and Socket.io for real-time updates across devices. Features Chart.js for beautiful data visualization and AI algorithms for spending insights.`,

        // Key Features
        features: [
          'AI-powered spending analysis and budget suggestions',
          'Receipt scanning with OCR for automatic expense entry',
          'Real-time budget tracking with visual progress indicators',
          'Multi-category expense organization with custom tags',
          'Family sharing with role-based access and spending limits',
          'Bill reminders and subscription tracking automation',
          'Goal-based savings with milestone celebrations',
          'Interactive charts and financial trend analysis',
          'Bank integration for automatic transaction sync',
          'Comprehensive reporting with data export options'
        ],

        // Technical Implementation
        technicalDetails: {
          frontend: 'React with Chart.js for data visualization and responsive design',
          backend: 'Express.js REST API with JWT authentication and role management',
          database: 'MongoDB with optimized schemas for financial data and user preferences',
          realtime: 'Socket.io for live budget updates and family collaboration',
          ai: 'Machine learning algorithms for spending pattern recognition',
          security: 'Bank-level encryption and secure financial data handling',
          integration: 'Third-party APIs for currency rates and bank connections'
        },

        // User Journey
        userFlow: [
          'Quick expense entry via manual input, receipt scan, or bank sync',
          'Automatic categorization using AI and custom rules',
          'Real-time budget tracking with visual spending indicators',
          'Smart notifications when approaching budget limits',
          'Weekly/monthly financial insights and recommendations',
          'Goal setting with automated savings tracking',
          'Family collaboration for shared household expenses',
          'Detailed reporting for tax preparation and financial planning'
        ],

        // Core Functionalities
        coreFeatures: {
          expenseTracking: 'Multiple input methods including manual entry, photo capture, and bank integration',
          budgetManagement: 'Flexible budget creation with category-wise allocation and smart alerts',
          analytics: 'Comprehensive spending analysis with AI-powered insights and trend predictions',
          collaboration: 'Family accounts with shared budgets and individual spending controls',
          automation: 'Recurring expense handling and intelligent expense categorization',
          reporting: 'Detailed financial reports with customizable date ranges and export options'
        },

        // Financial Impact
        userBenefits: {
          savings: 'Users report average 25% reduction in unnecessary spending',
          awareness: 'Increased financial consciousness through detailed tracking',
          budgeting: '90% of users successfully meet their monthly budget goals',
          timeEfficiency: 'Automated features save 2+ hours per week on financial management'
        },

        // Advanced Features
        premiumFeatures: [
          'Advanced AI spending predictions and anomaly detection',
          'Investment portfolio integration and net worth tracking',
          'Tax optimization suggestions and deduction tracking',
          'Financial advisor consultation booking',
          'Custom financial dashboard creation',
          'API access for third-party integrations'
        ],

        // Security & Privacy
        security: {
          encryption: 'End-to-end encryption for all financial data',
          compliance: 'GDPR and financial regulation compliant',
          backup: 'Automated secure cloud backups with recovery options',
          privacy: 'User data never shared with third parties without consent'
        }
      },
      {
        id: 5,
        title: 'Travel-Wallah',
        description: 'Comprehensive travel booking platform offering seamless bus, hotel, flight, and train reservations with real-time availability, price comparison, and integrated payment solutions.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment Gateway', 'Travel APIs'],
        github: 'https://github.com/Subhadip-codes/Travel-Wallah.git',
        live: 'https://travel-wallah.vercel.app',
        image: TravelWallahImage,
        category: 'Full Stack',
        status: 'In-Progress',
        
        instructions: `Travel-Wallah is an all-in-one travel booking platform featuring:

        • Multi-service booking for buses, hotels, flights, and trains
        • Real-time availability and dynamic pricing across all services
        • Advanced search filters and price comparison tools
        • Secure payment integration with multiple gateway options
        • User dashboard for booking management and travel history
        • Mobile-responsive design for booking on-the-go
        • Email confirmations and booking notifications
        • Customer review system for hotels and travel experiences
        
        Built with React frontend, Node.js/Express backend, MongoDB for data management, and integrated with multiple travel APIs for real-time booking capabilities.`,

        features: [
          'Multi-service travel booking in one platform',
          'Real-time price comparison across providers',
          'Advanced search with date, location, and budget filters',
          'Secure payment processing with multiple options',
          'User account with booking history and management',
          'Mobile-responsive design for all devices',
          'Email/SMS booking confirmations and updates',
          'Review and rating system for services'
        ],

        technicalDetails: {
          frontend: 'React with responsive UI and real-time search',
          backend: 'Node.js/Express API with travel service integrations',
          database: 'MongoDB storing user data, bookings, and reviews',
          payment: 'Integrated payment gateway with secure transactions',
          apis: 'Third-party travel APIs for live availability and pricing',
          notifications: 'Email/SMS service for booking confirmations'
        },

        userFlow: [
          'Search and compare prices across travel services',
          'Select preferred options with detailed information',
          'Secure booking with integrated payment processing',
          'Receive instant confirmation and booking details',
          'Manage bookings through user dashboard',
          'Leave reviews and ratings post-travel'
        ],

        impact: {
          bookingVolume: '1,000+ successful bookings processed',
          priceComparison: 'Average 20% savings through price optimization',
          userSatisfaction: '4.5/5 average rating from travelers',
          platformReliability: '99.5% uptime for booking services'
        }
      },
      {
        id: 6,
        title: 'Weatherly',
        description: 'Clean and intuitive weather application providing real-time forecasts, location-based updates, and detailed meteorological data with a modern user interface.',
        technologies: ['React', 'Weather API', 'Geolocation API', 'CSS3'],
        github: 'https://github.com/Subhadip-codes/Weather_app.git',
        live: 'https://weatherly-app.vercel.app',
        image: WeatherlyImage,
        category: 'Frontend',
        status: 'Completed',
        
        instructions: `Weatherly is a modern weather application featuring:

        • Real-time weather data with hourly and 7-day forecasts
        • Location-based automatic weather updates
        • Search functionality for any city worldwide
        • Detailed weather metrics including humidity, wind speed, and UV index
        • Responsive design with clean, intuitive interface
        • Weather condition icons and dynamic backgrounds`,

        features: [
          'Real-time weather updates and forecasts',
          'Auto-location detection with manual search option',
          'Hourly and weekly weather predictions',
          'Comprehensive weather details and metrics',
          'Clean, responsive UI with weather-themed design',
          'Search history and favorite locations'
        ],

        technicalDetails: {
          frontend: 'React with responsive CSS design',
          api: 'Weather API integration for real-time data',
          location: 'Geolocation API for automatic positioning',
          ui: 'Modern interface with dynamic weather themes'
        },

        userFlow: [
          'Auto-detect location or search for city',
          'View current weather and detailed metrics',
          'Check hourly and weekly forecasts',
          'Save favorite locations for quick access'
        ],

        impact: {
          accuracy: '95% accurate weather predictions',
          performance: 'Sub-2 second load times',
          usage: '500+ daily active users'
        }
      }
    ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Web App']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-white/5 rounded-xl backdrop-blur-lg border border-white/10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                
                {/* Project Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-600/80 hover:bg-purple-700/80 rounded-full transition-colors duration-300"
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-400/30 hover:bg-purple-600/40 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more projects?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub for more exciting projects and contributions
            </p>
            <a 
              href="https://github.com/Subhadip-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects