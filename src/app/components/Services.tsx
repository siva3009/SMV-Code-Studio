import { Code, Palette, Sparkles, ShoppingCart, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom-coded websites built with modern technologies for optimal performance and scalability.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight users and enhance engagement.',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Interactive Web Animations',
      description: 'Engaging micro-interactions and smooth animations that bring your website to life.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'High-converting online stores with seamless checkout experiences and secure payment processing.',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Website Design',
      description: 'Stunning, responsive designs that make your brand stand out and captivate your audience.',
      gradient: 'from-blue-500 to-cyan-400'
    }
  ];

  return (
    <section id="services" className="relative py-32 px-6 bg-black overflow-hidden gsap-section">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 60, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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
              Services
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
            What We Create
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto" 
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From concept to launch, we deliver exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden gsap-stagger"
                initial={{ opacity: 1, y: 0, scale: 1 }}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
                
                {/* Gradient border glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 6,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}