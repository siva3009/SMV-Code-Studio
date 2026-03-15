import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CallToAction() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Dramatic background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-600/5 to-transparent"></div>
      </div>

      {/* Animated particles/grid in background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </motion.div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Main Content */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight" 
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Amazing Together
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12" 
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to transform your digital presence? Let's collaborate and create 
            a website that stands out and drives results.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button 
            className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden" 
            style={{ fontFamily: "'Inter', sans-serif" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button 
            className="group px-12 py-5 bg-transparent rounded-full font-medium text-white text-lg border-2 border-white/30 hover:border-cyan-400/80 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm relative overflow-hidden" 
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Schedule a Call
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.7
              }
            }
          }}
        >
          {[
            { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Email Us', info: 'hello@smvcode.studio', gradient: 'from-cyan-500/20 to-blue-600/20', borderColor: 'border-cyan-500/30', iconColor: 'text-cyan-400' },
            { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Call Us', info: '+1 (555) 123-4567', gradient: 'from-blue-600/20 to-purple-600/20', borderColor: 'border-blue-500/30', iconColor: 'text-blue-400' },
            { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', title: 'Visit Us', info: 'San Francisco, CA', gradient: 'from-purple-600/20 to-pink-600/20', borderColor: 'border-purple-500/30', iconColor: 'text-purple-400' }
          ].map((card, index) => (
            <motion.div 
              key={index}
              className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} border ${card.borderColor} flex items-center justify-center mb-4 mx-auto`}>
                <svg className={`w-6 h-6 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{card.title}</h4>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                {card.info}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}