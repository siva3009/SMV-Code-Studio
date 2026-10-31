import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent gsap-section">
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
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#070709]/20 to-[#070709]/50 z-[5] pointer-events-none"></div>
      
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
            radial-gradient(1.2px 1.2px at 15px 25px, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 60%, transparent 100%),
            radial-gradient(1px 1px at 45px 65px, rgba(255, 255, 255, 0.95) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85px 35px, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
            radial-gradient(1px 1px at 110px 145px, rgba(255, 255, 255, 0.9) 0%, transparent 100%),
            radial-gradient(1.8px 1.8px at 145px 70px, rgba(255, 255, 255, 1) 0%, rgba(200, 240, 255, 0.8) 40%, transparent 100%),
            radial-gradient(1px 1px at 175px 115px, rgba(255, 255, 255, 0.9) 0%, transparent 100%),
            radial-gradient(1.2px 1.2px at 190px 185px, rgba(255, 255, 255, 0.95) 0%, transparent 100%);
          background-repeat: repeat;
          background-size: 210px 210px;
          animation: twinkle-bright-1 3.2s ease-in-out infinite;
          opacity: 0.85;
        }
        
        .stars2 {
          background-image: 
            radial-gradient(1.5px 1.5px at 35px 85px, rgba(34, 211, 238, 1) 0%, rgba(34, 211, 238, 0.5) 50%, transparent 100%),
            radial-gradient(1.2px 1.2px at 95px 15px, rgba(16, 185, 129, 0.95) 0%, transparent 100%),
            radial-gradient(2px 2px at 160px 130px, rgba(255, 255, 255, 1) 0%, rgba(56, 189, 248, 0.8) 50%, transparent 100%),
            radial-gradient(1.2px 1.2px at 215px 45px, rgba(96, 165, 250, 0.9) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 240px 195px, rgba(204, 255, 0, 0.85) 0%, transparent 100%),
            radial-gradient(1px 1px at 70px 220px, rgba(255, 255, 255, 0.9) 0%, transparent 100%);
          background-repeat: repeat;
          background-size: 270px 270px;
          animation: twinkle-bright-2 4.4s ease-in-out infinite reverse;
          opacity: 0.9;
        }
        
        .stars3 {
          background-image: 
            radial-gradient(2.2px 2.2px at 50px 160px, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.85) 30%, rgba(168, 85, 247, 0.4) 65%, transparent 100%),
            radial-gradient(1.4px 1.4px at 125px 95px, rgba(255, 255, 255, 1) 0%, transparent 100%),
            radial-gradient(2.4px 2.4px at 220px 260px, rgba(255, 255, 255, 1) 0%, rgba(34, 211, 238, 0.8) 40%, transparent 100%),
            radial-gradient(1.2px 1.2px at 290px 40px, rgba(255, 255, 255, 0.95) 0%, transparent 100%),
            radial-gradient(1.8px 1.8px at 180px 20px, rgba(255, 255, 255, 1) 0%, rgba(192, 132, 252, 0.7) 45%, transparent 100%);
          background-repeat: repeat;
          background-size: 330px 330px;
          animation: twinkle-bright-3 5.2s ease-in-out infinite;
          opacity: 0.85;
        }
        
        .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        
        /* Aurora Ribbons - Wider spread, softer blur & balanced opacity */
        .aurora-ribbon {
          position: absolute;
          width: 750px;
          height: 200%;
          top: -50%;
          filter: blur(140px);
          opacity: 0.38;
          mix-blend-mode: screen;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        .ribbon-1 {
          left: 2%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(16, 185, 129, 0.55) 15%,
            rgba(5, 150, 105, 0.45) 30%,
            rgba(16, 185, 129, 0.4) 45%,
            rgba(6, 182, 212, 0.35) 60%,
            rgba(16, 185, 129, 0.2) 75%,
            transparent 100%
          );
          animation: aurora-flow-1 12s ease-in-out infinite, aurora-sway-1 8s ease-in-out infinite;
          transform: skewX(-12deg);
        }
        
        .ribbon-2 {
          left: 18%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(6, 182, 212, 0.6) 10%,
            rgba(34, 211, 238, 0.5) 25%,
            rgba(6, 182, 212, 0.45) 40%,
            rgba(59, 130, 246, 0.4) 55%,
            rgba(6, 182, 212, 0.25) 70%,
            transparent 100%
          );
          animation: aurora-flow-2 14s ease-in-out infinite, aurora-sway-2 10s ease-in-out infinite;
          transform: skewX(10deg);
        }
        
        .ribbon-3 {
          left: 38%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(59, 130, 246, 0.55) 20%,
            rgba(37, 99, 235, 0.45) 35%,
            rgba(99, 102, 241, 0.4) 50%,
            rgba(139, 92, 246, 0.35) 65%,
            rgba(59, 130, 246, 0.25) 80%,
            transparent 100%
          );
          animation: aurora-flow-3 16s ease-in-out infinite, aurora-sway-3 9s ease-in-out infinite;
          transform: skewX(-18deg);
        }
        
        .ribbon-4 {
          right: 18%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(168, 85, 247, 0.55) 12%,
            rgba(139, 92, 246, 0.45) 28%,
            rgba(99, 102, 241, 0.4) 44%,
            rgba(59, 130, 246, 0.35) 60%,
            rgba(168, 85, 247, 0.25) 76%,
            transparent 100%
          );
          animation: aurora-flow-4 15s ease-in-out infinite, aurora-sway-4 11s ease-in-out infinite;
          transform: skewX(15deg);
        }
        
        .ribbon-5 {
          right: 2%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(6, 182, 212, 0.55) 15%,
            rgba(34, 211, 238, 0.45) 30%,
            rgba(16, 185, 129, 0.4) 45%,
            rgba(168, 85, 247, 0.35) 60%,
            rgba(6, 182, 212, 0.25) 75%,
            transparent 100%
          );
          animation: aurora-flow-5 13s ease-in-out infinite, aurora-sway-5 7s ease-in-out infinite;
          transform: skewX(-10deg);
        }
        
        /* Aurora Glows - Expanded Spread, Silky Luminous Glow & Subtle Opacity */
        .aurora-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(190px);
          opacity: 0.36;
          mix-blend-mode: screen;
          pointer-events: none;
        }
        
        /* Glowing Neon Color 1: Emerald & Cyan (Left / Center) */
        .glow-1 {
          width: 1200px;
          height: 1200px;
          top: 5%;
          left: 8%;
          background: radial-gradient(
            circle at 45% 45%,
            rgba(16, 185, 129, 0.55) 0%,
            rgba(6, 182, 212, 0.38) 28%,
            rgba(5, 150, 105, 0.18) 50%,
            rgba(16, 185, 129, 0.06) 70%,
            transparent 82%
          );
          animation: glow-pulse-1 11s ease-in-out infinite, glow-drift-1 22s ease-in-out infinite;
        }
        
        /* Glowing Neon Color 2: Blue & Purple (Right / Center) */
        .glow-2 {
          width: 1300px;
          height: 1300px;
          top: 2%;
          right: 5%;
          background: radial-gradient(
            circle at 55% 45%,
            rgba(59, 130, 246, 0.52) 0%,
            rgba(139, 92, 246, 0.38) 28%,
            rgba(168, 85, 247, 0.2) 52%,
            rgba(99, 102, 241, 0.06) 72%,
            transparent 84%
          );
          animation: glow-pulse-2 13s ease-in-out infinite, glow-drift-2 26s ease-in-out infinite;
        }
        
        /* Ambient Connector Glow */
        .glow-3 {
          width: 1100px;
          height: 850px;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse at 50% 50%,
            rgba(6, 182, 212, 0.4) 0%,
            rgba(16, 185, 129, 0.22) 35%,
            rgba(34, 211, 238, 0.08) 60%,
            transparent 75%
          );
          animation: glow-pulse-3 12s ease-in-out infinite;
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
        
        /* Sway Animations - Subtle wave drift with refined opacity */
        @keyframes aurora-sway-1 {
          0%, 100% {
            transform: skewX(-12deg) translateX(0) scaleX(1);
            opacity: 0.35;
          }
          25% {
            transform: skewX(-8deg) translateX(40px) scaleX(1.08);
            opacity: 0.42;
          }
          50% {
            transform: skewX(-16deg) translateX(0) scaleX(0.96);
            opacity: 0.32;
          }
          75% {
            transform: skewX(-10deg) translateX(-30px) scaleX(1.04);
            opacity: 0.4;
          }
        }
        
        @keyframes aurora-sway-2 {
          0%, 100% {
            transform: skewX(10deg) translateX(0) scaleX(1);
            opacity: 0.36;
          }
          30% {
            transform: skewX(14deg) translateX(-35px) scaleX(1.06);
            opacity: 0.44;
          }
          60% {
            transform: skewX(6deg) translateX(25px) scaleX(0.98);
            opacity: 0.32;
          }
          80% {
            transform: skewX(12deg) translateX(-15px) scaleX(1.03);
            opacity: 0.4;
          }
        }
        
        @keyframes aurora-sway-3 {
          0%, 100% {
            transform: skewX(-18deg) translateX(0) scaleX(1);
            opacity: 0.38;
          }
          35% {
            transform: skewX(-14deg) translateX(45px) scaleX(1.08);
            opacity: 0.46;
          }
          65% {
            transform: skewX(-22deg) translateX(-35px) scaleX(0.94);
            opacity: 0.33;
          }
        }
        
        @keyframes aurora-sway-4 {
          0%, 100% {
            transform: skewX(15deg) translateX(0) scaleX(1);
            opacity: 0.36;
          }
          40% {
            transform: skewX(19deg) translateX(-40px) scaleX(1.08);
            opacity: 0.44;
          }
          70% {
            transform: skewX(11deg) translateX(30px) scaleX(0.96);
            opacity: 0.32;
          }
        }
        
        @keyframes aurora-sway-5 {
          0%, 100% {
            transform: skewX(-10deg) translateX(0) scaleX(1);
            opacity: 0.35;
          }
          33% {
            transform: skewX(-6deg) translateX(35px) scaleX(1.06);
            opacity: 0.42;
          }
          66% {
            transform: skewX(-14deg) translateX(-25px) scaleX(0.95);
            opacity: 0.32;
          }
        }
        
        /* Glow Pulse Animations - Silky ambient breathing */
        @keyframes glow-pulse-1 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.32;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.44;
          }
        }
        
        @keyframes glow-pulse-2 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.30;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.42;
          }
        }
        
        @keyframes glow-pulse-3 {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.28;
          }
          50% {
            transform: translateX(-50%) scale(1.2);
            opacity: 0.38;
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