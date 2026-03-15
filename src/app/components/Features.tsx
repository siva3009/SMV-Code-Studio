import { Sparkles, Zap, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: 'Simplify and empower your financial management with Aurion',
      description: "In today's fast-paced business world, keeping up with financial management can be overwhelming."
    },
    {
      icon: Zap,
      title: 'How real-time analytics can revolutionize your financial strategy',
      description: 'Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease.'
    },
    {
      icon: Globe,
      title: 'The importance of streamlining business payments',
      description: 'In this blog, discuss how businesses can improve efficiency by using automated payment solutions.'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <span className="px-4 py-1.5 rounded-full text-sm border border-white/20 bg-white/5 backdrop-blur-sm text-white/80" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              Blog
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: '-0.02em' }}>
            Articles for you
          </h2>
        </div>
        
        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
              >
                {/* Glowing card effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex flex-col md:flex-row gap-8 p-8">
                  {/* Icon/Image Placeholder with Aurora Glow */}
                  <div className="flex-shrink-0">
                    <div className="relative w-full md:w-48 h-48 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 overflow-hidden">
                      {/* Aurora glow effect in card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-transparent opacity-60 blur-2xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
                          <Icon className="w-10 h-10 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl text-white mb-4 leading-snug" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      {feature.description}
                    </p>
                    
                    <div>
                      <button className="px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 hover:scale-105" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
