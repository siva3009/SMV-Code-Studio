import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, -5]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-500"
      style={{ y: navY }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`relative w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-lg shadow-cyan-500/10 flex items-center justify-center transition-all duration-500 ${
            isScrolled ? 'scale-95' : 'scale-100'
          }`}>
            <img 
              src="/images/logo.jpeg" 
              alt="TriCodeX Logo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 blur-md opacity-30 pointer-events-none"></div>
          </div>
          <span className="text-white text-xl font-bold tracking-tight hidden md:block group-hover:text-cyan-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            TriCodeX
          </span>
        </a>
        
        {/* Navigation Links - Glass Effect Dynamic Island */}
        <div className={`hidden lg:flex items-center gap-1 backdrop-blur-2xl rounded-full px-2 py-1.5 border transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/60 border-white/20 shadow-2xl shadow-black/40' 
            : 'bg-black/40 border-white/10 shadow-lg shadow-black/20'
        }`}>
          {/* Glass reflection effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
          
          {/* Subtle glow */}
          <div className={`absolute -inset-[1px] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 transition-opacity duration-500 -z-10 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}></div>

          <a href="#about" className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            About
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <a href="#team" className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            Team
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <a href="#services" className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            Services
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <a href="#portfolio" className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            Portfolio
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <a href="#capabilities" className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            Capabilities
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <a href="#process" className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            Process
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <a href="#testimonials" className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            Testimonials
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </div>
        
        {/* CTA Button */}
        <a href="#contact" className="relative group px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full text-sm font-semibold text-white transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 overflow-hidden inline-flex items-center justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span className="relative z-10">Get Started</span>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </a>
      </div>
    </motion.nav>
  );
}