import { useState, useRef, MouseEvent } from 'react';
import { Github, Linkedin, ExternalLink, Cpu, Terminal, Radio, ShieldCheck, Sparkles } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  clearance: string;
  idCode: string;
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
    clearance: 'CLEARANCE // L-01',
    idCode: 'TCX-884-SVR',
    image: '/images/siva.jpg',
    bio: 'Master of creative visual aesthetics, design systems, and responsive interactive web experiences. Bridges the gap between high-level editorial design and performant TypeScript frontend architecture.',
    coreStack: ['TypeScript', 'React', 'Tailwind CSS', 'Figma', 'WebAssembly'],
    keyHighlight: 'Designed Nebula Workspace AI & SQL Tutor Bot',
    github: 'https://github.com/siva3009',
    linkedin: 'https://www.linkedin.com/in/sivaram-dev/'
  },
  {
    name: 'Mohammed Shameem',
    role: 'Full Stack & AI Product Architect',
    clearance: 'FOUNDER // DIRECTIVE CORE',
    idCode: 'TCX-902-MSH',
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
    clearance: 'CLEARANCE // L-01',
    idCode: 'TCX-715-VSH',
    image: '/images/vasiharan.jpeg',
    bio: 'Backend specialist focused on high-throughput Python and Django architectures, vector similarity search systems, real-time WebSocket state synchronization, and secure database infrastructures.',
    coreStack: ['Python', 'Django', 'FAISS Vector Search', 'WebSockets', 'PostgreSQL'],
    keyHighlight: 'Engineered Smart Issue Tracker AI & SlabSense AI',
    github: 'https://github.com/VasiharanB',
    linkedin: 'https://www.linkedin.com/in/vasiharan-dev/'
  }
];

function MetallicIdentityModule({ member }: { member: TeamMember }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Interactive 3D perspective tilt
    setRotation({
      x: -normY * 8,
      y: normX * 8
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
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
        transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
      }}
      className={`relative w-full rounded-3xl preserve-3d cursor-pointer group transition-all duration-500 ${
        member.isCenter ? 'md:-translate-y-4' : ''
      }`}
    >
      {/* ============================================================== */}
      {/* 1. DARK METALLIC CARD BASE WITH ETCHED CIRCUIT WAFER PATTERN   */}
      {/* ============================================================== */}
      <div 
        className={`relative w-full rounded-3xl overflow-hidden border p-6 transition-all duration-500 shadow-2xl ${
          member.isCenter 
            ? 'bg-gradient-to-br from-[#1C1A14] via-[#12110D] to-[#0A0906] border-amber-400/50 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(245,158,11,0.15)] ring-1 ring-amber-400/30' 
            : 'bg-gradient-to-br from-[#18181D] via-[#101014] to-[#0A0A0D] border-white/[0.12] hover:border-amber-400/40 shadow-[0_25px_50px_rgba(0,0,0,0.9)]'
        }`}
        style={{
          minHeight: '580px'
        }}
      >
        {/* Etched Gold Circuit Silicon Traces SVG */}
        <div className="absolute inset-0 pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity duration-700">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`circuit-${member.name}`} width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 0 60 L 40 60 L 60 40 L 100 40 L 120 60" fill="none" stroke="#F59E0B" strokeWidth="0.75" opacity="0.4" />
                <path d="M 60 0 L 60 40 M 60 80 L 60 120" fill="none" stroke="#F59E0B" strokeWidth="0.75" opacity="0.4" />
                <circle cx="60" cy="40" r="2.5" fill="#FBBF24" opacity="0.6" />
                <circle cx="40" cy="60" r="2" fill="#FBBF24" opacity="0.5" />
                <path d="M 20 120 L 20 100 L 40 80 L 80 80 L 100 100 L 120 100" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#circuit-${member.name})`} />
          </svg>
        </div>

        {/* Ambient Projector Light Cone from NFC Chip */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-45 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, transparent 70%)'
          }}
        />

        {/* ============================================================== */}
        {/* 2. FLOATING AMBER HOLOGRAPHIC HUD IDENTITY PLATE (translateZ)  */}
        {/* ============================================================== */}
        <div 
          style={{
            transform: isHovered ? 'translateZ(55px) scale(1.02)' : 'translateZ(28px)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className={`relative z-20 rounded-2xl p-5 backdrop-blur-xl border transition-all duration-300 ${
            member.isCenter 
              ? 'bg-[#100F0A]/90 border-amber-400/60 shadow-[0_0_35px_rgba(245,158,11,0.22)] ring-1 ring-amber-400/40' 
              : 'bg-[#100F0A]/85 border-amber-400/40 hover:border-amber-400/70 shadow-[0_0_25px_rgba(245,158,11,0.12)]'
          }`}
        >
          {/* Cybernetic Reticle Corner Brackets in Gold/Amber (┌ ┐ └ ┘) */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400" />

          {/* Top Hologram Header Bar */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-400/25 text-[10px] font-mono">
            <span className="text-amber-400 tracking-widest flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              BIO-STATUS // ACTIVE
            </span>
            <span className="text-amber-200/70 tracking-wider">
              {member.idCode}
            </span>
          </div>

          {/* Holographic Layout: Portrait on Left, Technical Readout on Right */}
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* LEFT: Portrait Cutout in Golden Hologram Frame */}
            <div className="col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-amber-400/50 bg-black/60 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:border-amber-300 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0A0906&color=F59E0B&size=300`;
                  }}
                />
                {/* Holographic Scanline Grid */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px)',
                    backgroundSize: '100% 4px'
                  }}
                />
              </div>

              {/* Strong All-Caps Typography Name */}
              <h3 className="mt-3 text-sm font-bold text-white tracking-wider text-center uppercase font-mono group-hover:text-amber-400 transition-colors">
                {member.name}
              </h3>
              <span className="text-[9px] font-mono text-amber-400/80 tracking-tight text-center">
                {member.clearance}
              </span>
            </div>

            {/* RIGHT: Technical Telemetry & Pulsing Audio Equalizer Bars */}
            <div className="col-span-7 flex flex-col justify-between h-full space-y-3">
              {/* Telemetry Audio / Frequency Equalizer Bars in Amber */}
              <div className="p-2.5 rounded-lg bg-black/60 border border-amber-400/25">
                <div className="flex items-center justify-between text-[9px] font-mono text-amber-400 mb-1.5">
                  <span>FREQ // SIGNAL</span>
                  <span>99.8%</span>
                </div>
                {/* 8 Dynamic Frequency Bars matching reference photo */}
                <div className="flex items-end justify-between h-7 gap-1 px-1">
                  {[40, 85, 60, 95, 75, 90, 50, 85].map((height, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.6)]"
                      style={{
                        height: `${height}%`,
                        animation: `eq-bounce 1.${2 + (i % 5)}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Role Readout */}
              <div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider">
                  ROLE ASSIGNMENT
                </span>
                <span className="text-xs font-semibold text-zinc-200 block leading-tight font-mono">
                  {member.role}
                </span>
              </div>

              {/* Verified Key Milestone */}
              <div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider">
                  SYSTEM CORE SPEC
                </span>
                <span className="text-[11px] text-amber-400 font-mono block leading-snug">
                  {member.keyHighlight}
                </span>
              </div>
            </div>
          </div>

          {/* Bio Summary */}
          <p className="mt-4 text-[11px] text-zinc-300 leading-relaxed font-light border-t border-white/[0.08] pt-3">
            {member.bio}
          </p>

          {/* Core Technologies Chips */}
          <div className="mt-3 flex flex-wrap gap-1">
            {member.coreStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/10 border border-amber-400/30 text-amber-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. CENTER ILLUMINATED GOLDEN NFC HARDWARE CHIP ON BASE CARD    */}
        {/* ============================================================== */}
        <div className="relative mt-8 pt-4 flex items-center justify-between border-t border-white/[0.08]">
          {/* Laser-Etched Golden NFC Hardware Plate */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2A2414] via-black to-[#1A160A] border border-amber-400/60 shadow-[0_0_18px_rgba(245,158,11,0.3)] flex flex-col items-center justify-center p-1 group-hover:border-amber-300 transition-colors">
              <span className="text-[11px] font-bold font-mono tracking-widest text-amber-400">
                NFC
              </span>
              <span className="text-[7px] font-mono text-zinc-400">
                CHIP
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                METALLIC IDENTITY MODULE
              </span>
              <span className="text-[11px] font-mono text-amber-400 font-semibold block">
                TRICODEX // SECURE KEY
              </span>
            </div>
          </div>

          {/* Social Profiles Quick Action Links */}
          <div className="flex items-center gap-2">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-amber-400 hover:text-[#09090B] border border-white/[0.12] hover:border-amber-400 flex items-center justify-center text-zinc-300 transition-all shadow-md"
              title="Verified GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-amber-400 hover:text-[#09090B] border border-white/[0.12] hover:border-amber-400 flex items-center justify-center text-zinc-300 transition-all shadow-md"
              title="Verified LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
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
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#F59E0B]" />
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                04. METALLIC IDENTITY MODULES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Minimal Metallic Cards // <span className="font-semibold text-white">Founding Trio</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            Minimal metallic cards with laser-etched silicon wafer tracks, strong typography, high-contrast portrait cutouts, and projecting technical identity HUD telemetry.
          </p>
        </div>

        {/* 3-Column Metallic Identity Modules Grid with Mohammed Shameem in Center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {MEMBERS.map((member) => (
            <MetallicIdentityModule key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
