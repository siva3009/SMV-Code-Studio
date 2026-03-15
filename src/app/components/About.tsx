import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-black overflow-hidden gsap-section">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
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
              About Us
            </span>
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight" 
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We Build Digital Experiences That
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Transform Businesses
              </span>
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed" 
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              SMV Code Studio is a creative web development agency specializing in crafting 
              stunning, high-performance websites that captivate audiences and drive results.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed" 
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We combine cutting-edge technology with artistic vision to create digital 
              experiences that stand out in today's competitive landscape. From interactive 
              animations to seamless user experiences, every project is a masterpiece.
            </motion.p>
            <motion.button 
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden" 
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Learn More About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
          
          {/* Right: Animated Abstract Shapes */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 backdrop-blur-xl p-10">
              <div className="absolute inset-0 aurora-glow"></div>
              
              {/* Floating geometric shapes */}
              <div className="relative h-full flex items-center justify-center">
                {/* Large circle */}
                <motion.div 
                  className="absolute w-64 h-64 rounded-full border-2 border-cyan-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                {/* Medium circle */}
                <motion.div 
                  className="absolute w-48 h-48 rounded-full border-2 border-blue-500/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                {/* Small circle */}
                <motion.div 
                  className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                
                {/* Decorative dots */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-cyan-400"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-blue-500"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                ></motion.div>
                <motion.div 
                  className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-purple-500"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                ></motion.div>
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .aurora-glow {
          background: radial-gradient(
            ellipse at 30% 30%,
            rgba(6, 182, 212, 0.15) 0%,
            rgba(59, 130, 246, 0.1) 40%,
            transparent 70%
          );
          animation: pulse-glow 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}