import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent gsap-section">
      {/* TWO GLOWING NEON LIGHTS — EXCLUSIVE TO HERO SECTION ONLY (CONTAINED & SLOW-MOVING) */}
      <div 
        className="aurora-container pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
        }}
      >
        <div className="aurora-ribbon ribbon-1" />
        <div className="aurora-ribbon ribbon-2" />
        <div className="aurora-ribbon ribbon-3" />
        <div className="aurora-ribbon ribbon-4" />
        <div className="aurora-ribbon ribbon-5" />
        <div className="aurora-glow glow-1" />
        <div className="aurora-glow glow-2" />
        <div className="aurora-glow glow-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto hero-content">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.div>
            <span className="px-4 py-1.5 rounded-full text-sm border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm text-cyan-300 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              TriCodeX • Product Engineering Studio
            </span>
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight text-white font-bold" 
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Engineering Tomorrow's
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Products
            </span>
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className="text-base md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed" 
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          TriCodeX builds high-performance web platforms and digital solutions through unique design systems, robust Python backends, and end-to-end full-stack craftsmanship.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact" 
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 inline-block" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Start Your Project
          </a>
          
          <a
            href="#team" 
            className="px-8 py-3.5 bg-white/5 rounded-full font-medium text-white border border-white/20 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm inline-block" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Meet the Team
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-sm text-cyan-400/80 font-mono tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
            TriCodeX — Mohammed Shameem • Sivaram • Vasiharan
          </span>
        </motion.div>
      </div>
    </section>
  );
}
