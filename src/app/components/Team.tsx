import { motion } from 'motion/react';
import { Github, Linkedin, Sparkles, Layers, Cpu, Code2, ExternalLink } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  badge: string;
  image: string;
  bio: string;
  specialties: string[];
  github?: string;
  linkedin: string;
  gradient: string;
  borderColor: string;
  glowColor: string;
}

export function Team() {
  const members: TeamMember[] = [
    {
      name: 'Mohammed Shameem',
      role: 'Full Stack & AI Product Architect',
      badge: 'End-to-End Specialist',
      image: '/images/Shameem.jpeg',
      bio: 'Excels at building complete end-to-end digital products with advanced, fluid UI/UX and rigorous problem solving. Experienced in building full stack systems and intelligent AI applications spanning React, Angular, Node.js, Java, Python, and MySQL.',
      specialties: ['End-to-End Products', 'Advanced UI/UX', 'AI Applications', 'Problem Solving', 'React / Node / Python'],
      github: 'https://github.com/Shameem1105',
      linkedin: 'https://www.linkedin.com/in/shameem1105/',
      gradient: 'from-cyan-500/20 via-blue-600/20 to-purple-600/20',
      borderColor: 'border-cyan-500/40 hover:border-cyan-400',
      glowColor: 'rgba(6, 182, 212, 0.25)'
    },
    {
      name: 'Sivaram',
      role: 'Lead UI/UX Designer & Frontend Engineer',
      badge: 'Creative Design Lead',
      image: '/images/siva.jpg',
      bio: 'Master of visual aesthetics and modern frontend craft. Known for delivering unique, captivating designs, design systems, and responsive interactive web experiences that make products stand out in any industry.',
      specialties: ['Unique Visual Design', 'Modern UI/UX', 'Interactive Frontend', 'TypeScript', 'Design Systems'],
      github: 'https://github.com/siva3009',
      linkedin: 'https://www.linkedin.com/in/sivaram-dev/',
      gradient: 'from-purple-500/20 via-pink-600/20 to-rose-600/20',
      borderColor: 'border-purple-500/40 hover:border-purple-400',
      glowColor: 'rgba(168, 85, 247, 0.25)'
    },
    {
      name: 'Vasiharan',
      role: 'Backend Architect & Full Stack Engineer',
      badge: 'Backend & Systems Lead',
      image: '/images/vasiharan.jpeg',
      bio: 'Full-stack & Python backend engineer specializing in building high-performance scalable server architectures, Django platforms, AI vector search integrations, and resilient APIs powering intelligent digital solutions.',
      specialties: ['Python & Django', 'Full-Stack Web', 'AI & Vector Search', 'Scalable APIs', 'System Architecture'],
      github: 'https://github.com/VasiharanB',
      linkedin: 'https://www.linkedin.com/in/vasiharan-dev/',
      gradient: 'from-blue-500/20 via-emerald-600/20 to-teal-600/20',
      borderColor: 'border-blue-500/40 hover:border-blue-400',
      glowColor: 'rgba(59, 130, 246, 0.25)'
    }
  ];

  return (
    <section id="team" className="relative py-32 px-6 bg-black overflow-hidden gsap-section">
      {/* Background Aurora Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              <Sparkles className="w-4 h-4" />
              The Minds Behind TriCodeX
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>

          <h2 
            className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            Meet the Builders & Designers
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
              Transforming Ideas Into Reality
            </span>
          </h2>
          <p 
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            A trio of passionate technologists combining world-class UI/UX design, scalable Python backend systems, and end-to-end full-stack execution.
          </p>
        </motion.div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Ambient Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${member.glowColor} 0%, transparent 70%)`
                }}
              ></div>

              <div>
                {/* Photo Header */}
                <div className="relative h-80 overflow-hidden bg-slate-900/60">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      // Fallback placeholder if image fails to render
                      const target = e.currentTarget;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f172a&color=06b6d4&size=400`;
                    }}
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-cyan-300 bg-black/60 backdrop-blur-md border border-cyan-500/30">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {member.badge}
                    </span>
                  </div>

                  {/* Social Links on Image */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
                        title="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-blue-500/30 hover:border-blue-400 transition-all duration-300"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Name and Role Overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {member.bio}
                  </p>

                  {/* Specialties / Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-gray-300 font-mono"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Connect on LinkedIn
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    View Repos
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Synergy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/40 to-purple-950/40 border border-white/10 p-8 text-center backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="font-medium text-white">Full-Cycle Product Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span className="font-medium text-white">Bespoke UI/UX & Motion</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="font-medium text-white">Python Backend Architecture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

