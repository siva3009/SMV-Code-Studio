import { useState, useRef, MouseEvent } from 'react';
import { Github, Linkedin, ExternalLink, Cpu, Terminal, Shield, Sparkles, Binary } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  unitCode: string;
  badge: string;
  image: string;
  bio: string;
  coreStack: string[];
  keyHighlight: string;
  serialNumber: string;
  firmware: string;
  github: string;
  linkedin: string;
}

const MEMBERS: TeamMember[] = [
  {
    name: 'Sivaram',
    role: 'Lead UI/UX Designer & Frontend Engineer',
    unitCode: 'UNIT // TCX-MOD-01',
    badge: 'CREATIVE & DESIGN LEAD',
    serialNumber: 'SN: 884-SVR-UX',
    firmware: 'V4.2 // DESIGN SYSTEM ENGINE',
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
    unitCode: 'UNIT // TCX-MOD-02',
    badge: 'END-TO-END SYSTEMS ARCHITECT',
    serialNumber: 'SN: 902-MSH-AI',
    firmware: 'V5.0 // NEURAL & ENTERPRISE CORE',
    image: '/images/Shameem.jpeg',
    bio: 'Specializes in engineering complete end-to-end digital products with advanced, fluid UI/UX and rigorous problem solving. Proven track record in full stack enterprise systems, offline speech AI, and spatial GIS pipelines.',
    coreStack: ['React', 'Angular', 'Node.js', 'Python', 'Java', 'MySQL'],
    keyHighlight: 'Architected Aethon Assessment Platform, Palash AI & DeviceCensus',
    github: 'https://github.com/Shameem1105',
    linkedin: 'https://www.linkedin.com/in/shameem1105/'
  },
  {
    name: 'Vasiharan',
    role: 'Backend Architect & Full Stack Engineer',
    unitCode: 'UNIT // TCX-MOD-03',
    badge: 'BACKEND & SYSTEMS LEAD',
    serialNumber: 'SN: 715-VSH-SYS',
    firmware: 'V4.8 // DISTRIBUTED BACKEND RUNTIME',
    image: '/images/vasiharan.jpeg',
    bio: 'Backend specialist focused on high-throughput Python and Django architectures, vector similarity search systems, real-time WebSocket state synchronization, and secure database infrastructures.',
    coreStack: ['Python', 'Django', 'FAISS Vector Search', 'WebSockets', 'REST APIs', 'PostgreSQL'],
    keyHighlight: 'Engineered Smart Issue Tracker AI & SlabSense AI',
    github: 'https://github.com/VasiharanB',
    linkedin: 'https://www.linkedin.com/in/vasiharan-dev/'
  }
];

function MetallicIdentityCard({ member, isCenter }: { member: TeamMember; isCenter: boolean }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, active: false });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Controlled 3D perspective tilt
    setRotation({
      x: -normY * 7,
      y: normX * 7
    });

    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setMousePos(prev => ({ ...prev, active: false }));
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1)'
      }}
      className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden preserve-3d transition-all duration-300 shadow-2xl ${
        isCenter 
          ? 'bg-gradient-to-b from-[#22252e] via-[#16181f] to-[#121317] border-2 border-zinc-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(204,255,0,0.06)]' 
          : 'bg-gradient-to-b from-[#1e2027] via-[#14151a] to-[#0f1013] border border-zinc-600/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
      }`}
    >
      {/* Machined Corner Rivets / Hex Hardware Fasteners */}
      <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 border border-zinc-400/50 shadow-inner">
        <div className="w-1 h-1 mx-auto mt-0.5 rounded-full bg-black/70"></div>
      </div>
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 border border-zinc-400/50 shadow-inner">
        <div className="w-1 h-1 mx-auto mt-0.5 rounded-full bg-black/70"></div>
      </div>
      <div className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 border border-zinc-400/50 shadow-inner">
        <div className="w-1 h-1 mx-auto mt-0.5 rounded-full bg-black/70"></div>
      </div>
      <div className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 border border-zinc-400/50 shadow-inner">
        <div className="w-1 h-1 mx-auto mt-0.5 rounded-full bg-black/70"></div>
      </div>

      {/* Brushed Titanium Hairline Sheen Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 4px)`
        }}
      />

      {/* Dynamic Specular Metallic Light Sweep */}
      {mousePos.active && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.22) 0%, rgba(204, 255, 0, 0.10) 30%, transparent 70%)`
          }}
        />
      )}

      {/* Ambient Edge Reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200/40 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-zinc-400/20 to-transparent" />

      {/* MODULE CHASSIS HEADER (Engraved Metadata) */}
      <div 
        style={{ transform: 'translateZ(30px)' }}
        className="relative z-10 flex items-center justify-between pb-4 mb-5 border-b border-zinc-700/50 font-mono text-[11px]"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00] animate-pulse"></span>
          <span className="text-[#F4F4F6] font-bold tracking-wider">{member.unitCode}</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-[10px] tracking-widest uppercase">{member.serialNumber}</span>
          <Binary className="w-3.5 h-3.5 text-zinc-500" />
        </div>
      </div>

      {/* METALLIC BEVELED PORTRAIT FRAME (Elevated Chassis Layer) */}
      <div
        style={{
          transform: isHovered ? 'translateZ(45px)' : 'translateZ(25px)',
          transition: 'transform 0.25s ease-out'
        }}
        className="relative z-10 mb-6 p-2 rounded-2xl bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 border border-zinc-500/50 shadow-[0_12px_32px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.4)]"
      >
        <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-black/60">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
            style={{
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.4s ease-out'
            }}
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=14151a&color=CCFF00&size=400`;
            }}
          />

          {/* Precision Crosshair / Calibrated Framing Overlay */}
          <div className="absolute inset-0 pointer-events-none border border-white/[0.08] m-2 rounded-lg" />
          <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest text-[#CCFF00]/80 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-[#CCFF00]/30">
            {member.badge}
          </div>

          {/* Social Telemetry Trigger Buttons */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-500/60 flex items-center justify-center text-zinc-300 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors shadow-lg"
              title="GitHub Engineering Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-500/60 flex items-center justify-center text-zinc-300 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors shadow-lg"
              title="LinkedIn Verified Credentials"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Bottom Vignette Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* METALLIC IDENTITY ENGRAVING (Names & Technical Dossier) */}
      <div 
        style={{ transform: 'translateZ(35px)' }}
        className="relative z-10 space-y-4"
      >
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-2xl font-bold tracking-tight text-[#F4F4F6] font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {member.name}
            </h3>
            {isCenter && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00]">
                FOUNDER // CORE
              </span>
            )}
          </div>
          <p className="text-xs font-mono text-[#CCFF00] tracking-wider uppercase">
            {member.role}
          </p>
        </div>

        <p className="text-xs text-[#9CA3AF] leading-relaxed font-light line-clamp-3">
          {member.bio}
        </p>

        {/* Machined Hardware Tag: Verified Project Highlight */}
        <div className="p-3 rounded-xl bg-black/40 border border-zinc-700/50 shadow-inner">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
            <span className="uppercase tracking-widest text-[#CCFF00]">✦ SYSTEM MILESTONE:</span>
            <span>VERIFIED</span>
          </div>
          <p className="text-xs text-zinc-200 font-sans font-medium">
            {member.keyHighlight}
          </p>
        </div>

        {/* Skill Badges (Chiseled Metallic Chips) */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {member.coreStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-600/40 text-zinc-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* MODULE CHASSIS BASE (Action Connectors) */}
      <div 
        style={{ transform: 'translateZ(25px)' }}
        className="relative z-10 mt-6 pt-4 border-t border-zinc-700/60 flex items-center justify-between font-mono text-xs"
      >
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
          {member.firmware}
        </span>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#CCFF00] hover:text-white transition-colors font-medium tracking-wider uppercase"
        >
          CONNECT
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export function TeamTrio() {
  return (
    <section id="team" className="relative py-32 px-6 bg-[#09090B] border-t border-white/[0.06] overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(#F4F4F6 1px, transparent 1px), linear-gradient(90deg, #F4F4F6 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
                02 // METALLIC IDENTITY MODULES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              The Leadership Trio // <span className="font-semibold text-white">Engineering Modules</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed font-sans">
            Precision-engineered metallic identity profiles for the TriCodeX founding trio. Mohammed Shameem anchored in the center between design leadership and backend systems.
          </p>
        </div>

        {/* 3-Column Metallic Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERS.map((member, idx) => (
            <MetallicIdentityCard 
              key={member.name} 
              member={member} 
              isCenter={idx === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
