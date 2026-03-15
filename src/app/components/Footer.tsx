import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Subtle aurora glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-radial from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center">
                <div className="w-5 h-5 rounded-lg bg-black/20 backdrop-blur-sm border border-white/30"></div>
              </div>
              <h3 className="text-2xl text-white font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                SMV Code Studio
              </h3>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Creating stunning digital experiences with cutting-edge web technologies. 
              We transform your vision into reality with beautiful, high-performance websites.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-400 hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-400 hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-400 hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-3 text-gray-400" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">Process</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Contact</h4>
            <ul className="space-y-3 text-gray-400" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              <li><a href="mailto:hello@smvcode.studio" className="hover:text-cyan-400 transition-colors">hello@smvcode.studio</a></li>
              <li><a href="tel:+15551234567" className="hover:text-cyan-400 transition-colors">+1 (555) 123-4567</a></li>
              <li className="text-gray-500">San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            © 2026 SMV Code Studio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Made with <Heart className="w-4 h-4 text-cyan-400 fill-current" /> and code
          </p>
        </div>
      </div>
      
      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </footer>
  );
}