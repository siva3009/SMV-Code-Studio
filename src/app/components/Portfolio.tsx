import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern online shopping experience with seamless checkout and stunning product galleries.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Creative Agency Site',
      category: 'UI/UX Design',
      description: 'Bold portfolio website with interactive animations and immersive storytelling.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web App',
      description: 'Intuitive analytics platform with real-time data visualization and custom reports.',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Tech Startup Landing',
      category: 'Marketing',
      description: 'High-converting landing page with dynamic animations and compelling CTAs.',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      title: 'Restaurant Website',
      category: 'Hospitality',
      description: 'Beautiful food showcase with online reservations and interactive menu.',
      gradient: 'from-orange-500 to-pink-600'
    },
    {
      title: 'Finance App',
      category: 'FinTech',
      description: 'Secure banking interface with smooth UX and advanced transaction features.',
      gradient: 'from-blue-500 to-cyan-400'
    }
  ];

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-black overflow-hidden gsap-section">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Portfolio
            </span>
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" 
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto" 
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our latest work and see how we transform ideas into digital reality
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-square gsap-stagger"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                style={{ 
                  opacity: hoveredIndex === index ? 0.8 : 0.6,
                  transition: 'opacity 300ms ease-out'
                }}
              ></div>

              {/* Glassmorphism overlay */}
              <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                style={{
                  opacity: hoveredIndex === index ? 0.2 : 0.4,
                  transition: 'opacity 300ms ease-out'
                }}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Category badge */}
                <div 
                  className="inline-flex self-start px-3 py-1 rounded-full text-xs font-medium border mb-4 bg-white/10 border-white/20 text-white/80 backdrop-blur-sm"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    opacity: hoveredIndex === index ? 1 : 0.7,
                    transition: 'opacity 300ms ease-out'
                  }}
                >
                  {project.category}
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl md:text-3xl text-white mb-3 font-semibold" 
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-gray-200 leading-relaxed"
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontWeight: 300,
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: 'opacity 300ms ease-out',
                    height: hoveredIndex === index ? 'auto' : 0,
                    overflow: 'hidden'
                  }}
                >
                  {project.description}
                </p>

                {/* View project button */}
                <div 
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: 'opacity 300ms ease-out',
                    marginTop: 16
                  }}
                >
                  <button 
                    className="inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all duration-300" 
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Border gradient effect */}
              <div 
                className="absolute inset-0 rounded-3xl border-2 pointer-events-none"
                style={{
                  borderColor: hoveredIndex === index ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0)',
                  boxShadow: hoveredIndex === index ? '0 0 30px rgba(6, 182, 212, 0.3)' : 'none',
                  transition: 'all 300ms ease-out'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}