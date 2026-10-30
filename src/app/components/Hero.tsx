import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black gsap-section">
      {/* Starry Background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      {/* Aurora Effect Background */}
      <div className="aurora-container">
        <div className="aurora-ribbon ribbon-1"></div>
        <div className="aurora-ribbon ribbon-2"></div>
        <div className="aurora-ribbon ribbon-3"></div>
        <div className="aurora-ribbon ribbon-4"></div>
        <div className="aurora-ribbon ribbon-5"></div>
        <div className="aurora-glow glow-1"></div>
        <div className="aurora-glow glow-2"></div>
        <div className="aurora-glow glow-3"></div>
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
      
      {/* Gradient Fade Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black z-[5] pointer-events-none"></div>
      
      <style>{`
        /* Starry Background */
        .stars, .stars2, .stars3 {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        
        .stars {
          background-image: 
            radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 60px 70px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 50px 50px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.95), transparent),
            radial-gradient(1px 1px at 90px 10px, rgba(255,255,255,0.9), transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 3s ease-in-out infinite;
          opacity: 0.6;
        }
        
        .stars2 {
          background-image: 
            radial-gradient(1px 1px at 40px 60px, rgba(16, 185, 129, 0.7), transparent),
            radial-gradient(1px 1px at 110px 90px, rgba(6, 182, 212, 0.6), transparent),
            radial-gradient(1px 1px at 70px 20px, rgba(59, 130, 246, 0.6), transparent);
          background-repeat: repeat;
          background-size: 250px 250px;
          animation: twinkle 4s ease-in-out infinite reverse;
          opacity: 0.7;
        }
        
        .stars3 {
          background-image: 
            radial-gradient(1px 1px at 150px 120px, rgba(16, 185, 129, 0.8), transparent),
            radial-gradient(1px 1px at 80px 140px, rgba(168, 85, 247, 0.7), transparent);
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.6;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        
        /* Aurora Ribbons - Vertical flowing streams with neon colors */
        .aurora-ribbon {
          position: absolute;
          width: 400px;
          height: 180%;
          top: -40%;
          filter: blur(70px);
          opacity: 0.6;
          mix-blend-mode: screen;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        .ribbon-1 {
          left: 5%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(16, 185, 129, 0.8) 15%,
            rgba(5, 150, 105, 0.7) 30%,
            rgba(16, 185, 129, 0.6) 45%,
            rgba(6, 182, 212, 0.5) 60%,
            rgba(16, 185, 129, 0.3) 75%,
            transparent 100%
          );
          animation: aurora-flow-1 12s ease-in-out infinite, aurora-sway-1 8s ease-in-out infinite;
          transform: skewX(-12deg);
        }
        
        .ribbon-2 {
          left: 20%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(6, 182, 212, 0.9) 10%,
            rgba(34, 211, 238, 0.8) 25%,
            rgba(6, 182, 212, 0.7) 40%,
            rgba(59, 130, 246, 0.6) 55%,
            rgba(6, 182, 212, 0.4) 70%,
            transparent 100%
          );
          animation: aurora-flow-2 14s ease-in-out infinite, aurora-sway-2 10s ease-in-out infinite;
          transform: skewX(10deg);
        }
        
        .ribbon-3 {
          left: 40%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(59, 130, 246, 0.9) 20%,
            rgba(37, 99, 235, 0.8) 35%,
            rgba(99, 102, 241, 0.7) 50%,
            rgba(139, 92, 246, 0.6) 65%,
            rgba(59, 130, 246, 0.4) 80%,
            transparent 100%
          );
          animation: aurora-flow-3 16s ease-in-out infinite, aurora-sway-3 9s ease-in-out infinite;
          transform: skewX(-18deg);
        }
        
        .ribbon-4 {
          right: 20%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(168, 85, 247, 0.8) 12%,
            rgba(139, 92, 246, 0.7) 28%,
            rgba(99, 102, 241, 0.6) 44%,
            rgba(59, 130, 246, 0.5) 60%,
            rgba(168, 85, 247, 0.4) 76%,
            transparent 100%
          );
          animation: aurora-flow-4 15s ease-in-out infinite, aurora-sway-4 11s ease-in-out infinite;
          transform: skewX(15deg);
        }
        
        .ribbon-5 {
          right: 5%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(6, 182, 212, 0.9) 15%,
            rgba(34, 211, 238, 0.8) 30%,
            rgba(16, 185, 129, 0.7) 45%,
            rgba(168, 85, 247, 0.5) 60%,
            rgba(6, 182, 212, 0.4) 75%,
            transparent 100%
          );
          animation: aurora-flow-5 13s ease-in-out infinite, aurora-sway-5 7s ease-in-out infinite;
          transform: skewX(-10deg);
        }
        
        /* Aurora Glows - Additional ambient light */
        .aurora-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.5;
          mix-blend-mode: screen;
        }
        
        .glow-1 {
          width: 700px;
          height: 700px;
          top: 10%;
          left: 15%;
          background: radial-gradient(
            circle,
            rgba(16, 185, 129, 0.6) 0%,
            rgba(6, 182, 212, 0.3) 30%,
            transparent 70%
          );
          animation: glow-pulse-1 10s ease-in-out infinite, glow-drift-1 20s ease-in-out infinite;
        }
        
        .glow-2 {
          width: 800px;
          height: 800px;
          top: 5%;
          right: 10%;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.6) 0%,
            rgba(168, 85, 247, 0.4) 30%,
            transparent 70%
          );
          animation: glow-pulse-2 12s ease-in-out infinite, glow-drift-2 25s ease-in-out infinite;
        }
        
        .glow-3 {
          width: 600px;
          height: 600px;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(
            circle,
            rgba(6, 182, 212, 0.5) 0%,
            rgba(16, 185, 129, 0.3) 30%,
            transparent 70%
          );
          animation: glow-pulse-3 11s ease-in-out infinite;
        }
        
        /* Text Effects */
        .aurora-text-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          background: linear-gradient(
            135deg,
            #10b981 0%,
            #06b6d4 25%,
            #3b82f6 50%,
            #a855f7 75%,
            #06b6d4 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease infinite;
          filter: drop-shadow(0 0 30px rgba(6, 182, 212, 0.6));
        }
        
        .italic-playfair {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
        }
        
        .company-badge {
          display: inline-block;
          position: relative;
          padding: 1rem 2rem;
          border-radius: 9999px;
          background: rgba(6, 182, 212, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .company-badge::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 9999px;
          padding: 1px;
          background: linear-gradient(135deg, #10b981, #06b6d4, #3b82f6, #a855f7);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          animation: border-glow 3s ease infinite;
        }
        
        .company-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          background: linear-gradient(135deg, #10b981, #06b6d4, #3b82f6, #a855f7);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease infinite;
          filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.5));
        }
        
        .company-name-white {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes border-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        /* Flow Animations - Vertical movement */
        @keyframes aurora-flow-1 {
          0% {
            transform: skewX(-12deg) translateY(0%);
          }
          50% {
            transform: skewX(-12deg) translateY(-15%);
          }
          100% {
            transform: skewX(-12deg) translateY(0%);
          }
        }
        
        @keyframes aurora-flow-2 {
          0% {
            transform: skewX(10deg) translateY(0%);
          }
          50% {
            transform: skewX(10deg) translateY(-20%);
          }
          100% {
            transform: skewX(10deg) translateY(0%);
          }
        }
        
        @keyframes aurora-flow-3 {
          0% {
            transform: skewX(-18deg) translateY(0%);
          }
          50% {
            transform: skewX(-18deg) translateY(-18%);
          }
          100% {
            transform: skewX(-18deg) translateY(0%);
          }
        }
        
        @keyframes aurora-flow-4 {
          0% {
            transform: skewX(15deg) translateY(0%);
          }
          50% {
            transform: skewX(15deg) translateY(-22%);
          }
          100% {
            transform: skewX(15deg) translateY(0%);
          }
        }
        
        @keyframes aurora-flow-5 {
          0% {
            transform: skewX(-10deg) translateY(0%);
          }
          50% {
            transform: skewX(-10deg) translateY(-17%);
          }
          100% {
            transform: skewX(-10deg) translateY(0%);
          }
        }
        
        /* Sway Animations - Horizontal wave movement */
        @keyframes aurora-sway-1 {
          0%, 100% {
            transform: skewX(-12deg) translateX(0) scaleX(1);
            opacity: 0.6;
          }
          25% {
            transform: skewX(-8deg) translateX(40px) scaleX(1.1);
            opacity: 0.7;
          }
          50% {
            transform: skewX(-16deg) translateX(0) scaleX(0.95);
            opacity: 0.5;
          }
          75% {
            transform: skewX(-10deg) translateX(-30px) scaleX(1.05);
            opacity: 0.65;
          }
        }
        
        @keyframes aurora-sway-2 {
          0%, 100% {
            transform: skewX(10deg) translateX(0) scaleX(1);
            opacity: 0.6;
          }
          30% {
            transform: skewX(14deg) translateX(-35px) scaleX(1.08);
            opacity: 0.7;
          }
          60% {
            transform: skewX(6deg) translateX(25px) scaleX(0.98);
            opacity: 0.55;
          }
          80% {
            transform: skewX(12deg) translateX(-15px) scaleX(1.03);
            opacity: 0.65;
          }
        }
        
        @keyframes aurora-sway-3 {
          0%, 100% {
            transform: skewX(-18deg) translateX(0) scaleX(1);
            opacity: 0.65;
          }
          35% {
            transform: skewX(-14deg) translateX(45px) scaleX(1.12);
            opacity: 0.75;
          }
          65% {
            transform: skewX(-22deg) translateX(-35px) scaleX(0.92);
            opacity: 0.6;
          }
        }
        
        @keyframes aurora-sway-4 {
          0%, 100% {
            transform: skewX(15deg) translateX(0) scaleX(1);
            opacity: 0.6;
          }
          40% {
            transform: skewX(19deg) translateX(-40px) scaleX(1.1);
            opacity: 0.7;
          }
          70% {
            transform: skewX(11deg) translateX(30px) scaleX(0.96);
            opacity: 0.55;
          }
        }
        
        @keyframes aurora-sway-5 {
          0%, 100% {
            transform: skewX(-10deg) translateX(0) scaleX(1);
            opacity: 0.6;
          }
          33% {
            transform: skewX(-6deg) translateX(35px) scaleX(1.08);
            opacity: 0.7;
          }
          66% {
            transform: skewX(-14deg) translateX(-25px) scaleX(0.94);
            opacity: 0.55;
          }
        }
        
        /* Glow Pulse Animations */
        @keyframes glow-pulse-1 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
        
        @keyframes glow-pulse-2 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.65;
          }
        }
        
        @keyframes glow-pulse-3 {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateX(-50%) scale(1.25);
            opacity: 0.6;
          }
        }
        
        /* Glow Drift Animations */
        @keyframes glow-drift-1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(50px, -30px);
          }
          66% {
            transform: translate(-30px, 40px);
          }
        }
        
        @keyframes glow-drift-2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          40% {
            transform: translate(-60px, 50px);
          }
          70% {
            transform: translate(40px, -35px);
          }
        }
      `}</style>
    </section>
  );
}