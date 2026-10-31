import { Github, Linkedin, ArrowUp } from 'lucide-react';

export function FooterTechnical() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-transparent text-[#9CA3AF] pt-20 pb-12 px-6 overflow-hidden font-mono text-xs">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Colophon (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/20 bg-[#15151A] flex items-center justify-center">
                <img 
                  src="/images/logo.jpeg" 
                  alt="TriCodeX Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                TriCodeX
              </span>
            </div>

            <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed font-sans font-light">
              Digital product engineering studio combining creative design, advanced engineering, and scalable software architecture.
            </p>

            <div className="pt-2 text-[11px] text-[#CCFF00] space-y-1">
              <div>✦ Mohammed Shameem — Full Stack & AI</div>
              <div>✦ Sivaram — Lead UI/UX & Frontend</div>
              <div>✦ Vasiharan — Backend & Python Systems</div>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-white uppercase font-semibold tracking-wider block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              <li><a href="#about" className="hover:text-[#CCFF00] transition-colors">01 // Philosophy</a></li>
              <li><a href="#team" className="hover:text-[#CCFF00] transition-colors">02 // The Team</a></li>
              <li><a href="#services" className="hover:text-[#CCFF00] transition-colors">03 // Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#CCFF00] transition-colors">04 // Portfolio</a></li>
              <li><a href="#capabilities" className="hover:text-[#CCFF00] transition-colors">05 // Capabilities</a></li>
              <li><a href="#process" className="hover:text-[#CCFF00] transition-colors">06 // Process</a></li>
              <li><a href="#why-us" className="hover:text-[#CCFF00] transition-colors">07 // Why TriCodeX</a></li>
              <li><a href="#ecosystem" className="hover:text-[#CCFF00] transition-colors">08 // Tech Stack</a></li>
              <li><a href="#contact" className="hover:text-[#CCFF00] transition-colors">09 // Contact</a></li>
            </ul>
          </div>

          {/* Core Services (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-white uppercase font-semibold tracking-wider block mb-4">
              Services
            </span>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-[#CCFF00] transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-[#CCFF00] transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-[#CCFF00] transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-[#CCFF00] transition-colors">UI/UX Systems</a></li>
              <li><a href="#services" className="hover:text-[#CCFF00] transition-colors">AI & Automation</a></li>
              <li><a href="#services" className="hover:text-[#CCFF00] transition-colors">Optimization</a></li>
            </ul>
          </div>

          {/* Contact & Verified Profiles (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-white uppercase font-semibold tracking-wider block mb-4">
              Direct Contact
            </span>
            <p className="text-gray-300">
              WhatsApp: <a href="https://wa.me/917305794294" target="_blank" rel="noopener noreferrer" className="text-[#CCFF00] hover:underline">+91 7305794294</a>
            </p>
            <p className="text-gray-300">
              Email: <a href="mailto:smvcreators43@gmail.com" className="text-[#CCFF00] hover:underline">smvcreators43@gmail.com</a>
            </p>
            <p className="text-gray-400 text-[11px] pt-2">
              Studio: TriCodeX Digital Lab
            </p>

            {/* Social Links Matrix */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://github.com/Shameem1105"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#CCFF00]/40 hover:text-[#CCFF00] flex items-center justify-center transition-colors"
                title="Mohammed Shameem GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/siva3009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#CCFF00]/40 hover:text-[#CCFF00] flex items-center justify-center transition-colors"
                title="Sivaram GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/VasiharanB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#CCFF00]/40 hover:text-[#CCFF00] flex items-center justify-center transition-colors"
                title="Vasiharan GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © 2026 TriCodeX Studio. All rights reserved. Built with React, TypeScript & GSAP.
          </div>

          <div className="flex items-center gap-6">
            <span>Status: <strong className="text-emerald-400 font-semibold">ALL SYSTEMS OPERATIONAL</strong></span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#CCFF00] hover:text-white transition-colors uppercase tracking-wider"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

