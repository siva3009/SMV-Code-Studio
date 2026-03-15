import { Search, Pen, Code2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discover',
      description: 'We dive deep into your business goals, target audience, and project requirements to craft the perfect strategy.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Pen,
      number: '02',
      title: 'Design',
      description: 'Our designers create beautiful, intuitive interfaces that bring your vision to life with pixel-perfect precision.',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: Code2,
      number: '03',
      title: 'Develop',
      description: 'We build your website with clean, optimized code using the latest technologies for peak performance.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch',
      description: 'After rigorous testing, we deploy your website and provide ongoing support to ensure continued success.',
      gradient: 'from-pink-600 to-cyan-500'
    }
  ];

  return (
    <section id="process" className="relative py-32 px-6 bg-black overflow-hidden gsap-section">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-radial from-purple-600/10 via-blue-600/5 to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Process
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: '-0.02em' }}>
            How We Work
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            A proven process that delivers exceptional results every time
          </p>
        </div>

        {/* Process Steps - Desktop Horizontal Layout */}
        <div className="hidden md:block relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-600 via-purple-600 to-pink-600 opacity-20"></div>
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group gsap-stagger">
                  {/* Step number badge */}
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-500/30`}>
                    <span className="text-white text-lg font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="mt-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 h-full group-hover:transform group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl text-white mb-4 font-semibold group-hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      {step.description}
                    </p>

                    {/* Decorative glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 blur-xl`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps - Mobile Vertical Layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group gsap-stagger">
                {/* Connection line for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-20"></div>
                )}

                <div className="flex gap-6">
                  {/* Step number badge */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-500/30`}>
                    <span className="text-white text-lg font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-500">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl text-white mb-3 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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