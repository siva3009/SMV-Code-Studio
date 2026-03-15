export function Technology() {
  const technologies = [
    { name: 'HTML', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', color: 'from-green-500 to-emerald-600' },
    { name: 'GSAP', color: 'from-green-400 to-lime-500' },
    { name: 'Three.js', color: 'from-purple-500 to-pink-500' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-700' }
  ];

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden gsap-section">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
              TECHNOLOGY STACK
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}>
            Powered By Modern Tech
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            We use cutting-edge technologies to build fast, scalable, and stunning websites
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden gsap-stagger"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Animated glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Tech icon placeholder - using first letter as icon */}
              <div className="relative flex flex-col items-center justify-center h-full">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                  <span className="text-white text-2xl font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {tech.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white text-center group-hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {tech.name}
                </h3>
              </div>

              {/* Particle effect on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            And many more technologies to deliver the perfect solution for your project
          </p>
        </div>
      </div>

      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}