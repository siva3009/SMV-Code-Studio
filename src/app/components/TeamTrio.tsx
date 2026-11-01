import { useState, useRef, MouseEvent } from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  badge: string;
  image: string;
  bio: string;
  coreStack: string[];
  keyHighlight: string;
  github: string;
  linkedin: string;
  isCenter?: boolean;
}

const MEMBERS: TeamMember[] = [
  {
    name: 'Sivaram',
    role: 'Lead UI/UX Designer & Frontend Engineer',
    badge: '01 / CREATIVE & DESIGN LEAD',
    image: '/images/siva.jpg',
    bio: 'Master of creative visual aesthetics, design systems, and responsive interactive web experiences. Bridges the gap between high-level editorial design and performant TypeScript frontend architecture.',
    coreStack: ['TypeScript', 'React', 'Tailwind CSS', 'Figma', 'WebAssembly', 'UI/UX'],
    keyHighlight: 'Designed Nebula Workspace AI & SQL Tutor Bot',
    github: 'https://github.com/siva3009',
    linkedin: 'https://www.linkedin.com/in/sivaram-dev/'
  },
  {
    name: 'Mohammed Shameem',
    role: 'Full Stack & AI Product Architect',
    badge: '02 / FOUNDING PARTNER • FULL STACK & AI',
    image: '/images/Shameem.jpeg',
    bio: 'Specializes in engineering complete end-to-end digital products with advanced, fluid UI/UX and rigorous problem solving. Proven track record in full stack enterprise systems, offline speech AI, and spatial GIS pipelines.',
    coreStack: ['React', 'Angular', 'Node.js', 'Python', 'Java', 'MySQL'],
    keyHighlight: 'Architected Aethon Assessment Platform, Palash AI & DeviceCensus',
    github: 'https://github.com/Shameem1105',
    linkedin: 'https://www.linkedin.com/in/shameem1105/',
    isCenter: true
  },
  {
    name: 'Vasiharan',
    role: 'Backend Architect & Full Stack Engineer',
    badge: '03 / BACKEND & SYSTEMS LEAD',
    image: '/images/vasiharan.jpeg',
    bio: 'Backend specialist focused on high-throughput Python and Django architectures, vector similarity search systems, real-time WebSocket state synchronization, and secure database infrastructures.',
    coreStack: ['Python', 'Django', 'FAISS Vector Search', 'WebSockets', 'REST APIs', 'PostgreSQL'],
    keyHighlight: 'Engineered Smart Issue Tracker AI & SlabSense AI',
    github: 'https://github.com/VasiharanB',
    linkedin: 'https://www.linkedin.com/in/vasiharan-dev/'
  }
];

function TeamCard({ member }: { member: TeamMember }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Smooth 3D perspective tilt
    setRotation({
      x: -normY * 6,
      y: normX * 6
    });

    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setSpotlight(prev => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
      className={`relative rounded-3xl bg-[#15151A] border transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-2xl ${
        member.isCenter 
          ? 'border-[#CCFF00]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(204,255,0,0.08)] ring-1 ring-[#CCFF00]/20' 
          : 'border-white/[0.08] hover:border-white/[0.2]'
      }`}
    >
      {/* Pointer Spotlight Flare */}
      {spotlight.active && (
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${spotlight.x}% ${spotlight.y}%, rgba(204, 255, 0, 0.08), transparent 80%)`
          }}
        />
      )}

      <div>
        {/* Large Portrait Presentation */}
        <div className="relative h-88 overflow-hidden bg-[#0F0F12]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=15151A&color=CCFF00&size=400`;
            }}
          />

          {/* Bottom Gradient Fade into Card Surface */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#15151A] via-[#15151A]/40 to-transparent" />

          {/* Top Floating Badge & Social Pills */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-[#09090B]/85 backdrop-blur-md text-white/90 border border-white/[0.12] shadow-lg">
              {member.badge}
            </span>

            <div className="flex items-center gap-2">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#09090B]/85 backdrop-blur-md border border-white/[0.15] flex items-center justify-center text-white/80 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors shadow-lg"
                title={`${member.name} GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#09090B]/85 backdrop-blur-md border border-white/[0.15] flex items-center justify-center text-white/80 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors shadow-lg"
                title={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Founder Name & Role Overlay */}
          <div className="absolute bottom-4 left-6 right-6 z-20">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#F4F4F6] tracking-tight">
                {member.name}
              </h3>
              {member.isCenter && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#CCFF00]/20 text-[#CCFF00] border border-[#CCFF00]/40">
                  LEAD ARCHITECT
                </span>
              )}
            </div>
            <p className="text-[#CCFF00] text-xs font-mono tracking-wider mt-1 uppercase">
              {member.role}
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 font-light">
            {member.bio}
          </p>

          {/* Verified Highlight Box */}
          <div className="mb-6 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">
              Verified Project Highlight:
            </span>
            <span className="text-xs text-[#F4F4F6] font-medium block leading-snug">
              {member.keyHighlight}
            </span>
          </div>

          {/* Core Technologies Badges */}
          <div className="flex flex-wrap gap-1.5">
            {member.coreStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] bg-white/[0.04] border border-white/[0.08] text-[#9CA3AF] font-mono group-hover:text-[#F4F4F6] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 py-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono bg-white/[0.01]">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#CCFF00] hover:text-[#D4FF3F] transition-colors font-medium"
        >
          CONNECT ON LINKEDIN
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#F4F4F6] transition-colors"
        >
          VIEW REPOSITORIES
          <Github className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export function TeamTrio() {
  return (
    <section id="team" className="relative py-32 px-6 bg-transparent overflow-hidden">
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
                02 / LEADERSHIP & ENGINEERING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              The Minds Behind <span className="font-semibold text-white">TriCodeX</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            A cohesive engineering trio uniting advanced UI/UX design, resilient Python architectures, and end-to-end full-stack problem solving.
          </p>
        </div>

        {/* 3-Column Profile Cards Grid with Mohammed Shameem in the Center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERS.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
