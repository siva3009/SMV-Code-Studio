import { useEffect, useRef, useState, MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FEATURED_PROJECTS, 
  SECONDARY_PROJECTS, 
  Project 
} from '../data/projects';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Cpu, 
  FolderGit2,
  Layers,
  Code2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// FLOATING GLASS CARD COMPONENT
// ==========================================
function FloatingGlassCard({ 
  project, 
  isFeatured = false,
  onOpenCaseStudy 
}: { 
  project: Project; 
  isFeatured?: boolean;
  onOpenCaseStudy: (p: Project) => void;
}) {
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

    // Subtle 3D tilt
    setRotation({
      x: -normY * 6,
      y: normX * 6
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
      onClick={() => onOpenCaseStudy(project)}
      style={{
        transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
      }}
      className={`relative rounded-3xl preserve-3d cursor-pointer group transition-all duration-300 ${
        isFeatured 
          ? 'w-full h-full' 
          : 'p-7 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#CCFF00]/40 flex flex-col justify-between shadow-2xl'
      }`}
    >
      {/* LAYER 0: Ambient Back Shadow & Subtle Acid-Lime Glow */}
      <div 
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(204, 255, 0, 0.12) 0%, transparent 70%)`
        }}
      />

      {/* LAYER 1: Base Translucent Glass Slab with Chamfered Reflection */}
      <div 
        style={{
          transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
          transition: 'transform 0.3s ease-out'
        }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-black/60 to-black/80 backdrop-blur-2xl border border-white/[0.14] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden"
      >
        {/* Dynamic Specular Glass Reflection Beam */}
        {mousePos.active && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.18) 0%, rgba(204, 255, 0, 0.06) 30%, transparent 65%)`
            }}
          />
        )}

        {/* Top Edge Prism Highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* FEATURED CARD CONTENT COMPOSITION */}
      {isFeatured ? (
        <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-between preserve-3d">
          {/* LAYER 2: Elevated Header Glass Panel */}
          <div 
            style={{
              transform: isHovered ? 'translateZ(45px)' : 'translateZ(25px)',
              transition: 'transform 0.3s ease-out'
            }}
            className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] preserve-3d"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#CCFF00] tracking-wider">
                PROJECT {project.projectNumber} //
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-zinc-300 uppercase">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {project.status}
              </span>
              {project.liveUrl && (
                <span className="text-xs font-mono text-[#CCFF00] hidden sm:inline-block">
                  [LIVE DEPLOYED]
                </span>
              )}
            </div>
          </div>

          {/* LAYER 3: Elevated Main Body Content (Depth + 50px) */}
          <div 
            style={{
              transform: isHovered ? 'translateZ(65px)' : 'translateZ(40px)',
              transition: 'transform 0.3s ease-out'
            }}
            className="my-auto py-6 preserve-3d"
          >
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#F4F4F6] tracking-tight mb-3 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#CCFF00] font-mono mb-4 font-light">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed mb-8 font-light">
              {project.description}
            </p>

            {/* Architecture Highlights Glass Strips */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {project.architectureHighlights.map((arch, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] shadow-lg"
                >
                  <span className="text-[10px] font-mono text-[#CCFF00] block mb-1">
                    SPEC // 0{i + 1}
                  </span>
                  <span className="text-xs text-zinc-200 font-light block leading-snug">
                    {arch}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LAYER 4: Highest Elevation Footer Chips & Action (Depth + 80px) */}
          <div 
            style={{
              transform: isHovered ? 'translateZ(80px)' : 'translateZ(50px)',
              transition: 'transform 0.3s ease-out'
            }}
            className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08] preserve-3d"
          >
            {/* Parallax Floating Tech Chips */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-black/60 backdrop-blur-md border border-white/[0.12] text-zinc-300 shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCaseStudy(project);
                }}
                className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#09090B] font-bold text-xs tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-all hover:scale-105 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                OPEN CASE STUDY
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* SECONDARY FLOATING GLASS CARD */
        <div 
          style={{
            transform: isHovered ? 'translateZ(40px)' : 'translateZ(20px)',
            transition: 'transform 0.3s ease-out'
          }}
          className="relative z-10 preserve-3d space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#CCFF00]">
              #{project.projectNumber}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-zinc-300 uppercase border border-white/10">
              {project.category}
            </span>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#F4F4F6] group-hover:text-[#CCFF00] transition-colors tracking-tight">
              {project.title}
            </h4>
            <p className="text-xs text-[#CCFF00]/90 font-mono mt-0.5 mb-2 line-clamp-1">
              {project.tagline}
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
            <span>EXPAND SPECIFICATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#CCFF00]" />
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// MAIN PORTFOLIO STACK SECTION
// ==========================================
export function PortfolioStack() {
  const containerRef = useRef<HTMLElement | null>(null);
  const deckRef = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const cards = deckRef.current?.querySelectorAll<HTMLElement>('.portfolio-stacked-card');
      if (!cards || cards.length < 2) return;

      const totalCards = cards.length;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: deckRef.current,
          start: 'top top+=80',
          end: `+=${totalCards * 110}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const prevCard = cards[index - 1];

        // Animate incoming card rising into foreground
        tl.fromTo(
          card,
          { 
            yPercent: 120, 
            scale: 0.95, 
            opacity: 0.2, 
            transformPerspective: 1200 
          },
          { 
            yPercent: 0, 
            scale: 1, 
            opacity: 1, 
            duration: 1, 
            ease: 'none' 
          },
          `card-${index}`
        );

        // Concurrently push previous card deeper into Z-space
        tl.to(
          prevCard,
          {
            scale: 0.92,
            z: -110,
            y: -35,
            opacity: 0.35,
            duration: 1,
            ease: 'none'
          },
          `card-${index}`
        );

        if (index > 1) {
          const olderCard = cards[index - 2];
          tl.to(
            olderCard,
            {
              scale: 0.85,
              z: -190,
              y: -55,
              opacity: 0.15,
              duration: 1,
              ease: 'none'
            },
            `card-${index}`
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={containerRef}
      className="relative py-32 px-6 bg-[#09090B]/80 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
                04 // FLOATING GLASS PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Selected Work // <span className="font-semibold text-white">Floating Glass Stack</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            Multi-layered floating glass panels displaying verified TriCodeX software engineering projects with live deployments and direct source repositories.
          </p>
        </div>

        {/* TOP 3 FEATURED: Pinned Floating Glass Deck */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono tracking-wider text-[#9CA3AF] uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#CCFF00]" />
              FEATURED GLASS STACK // 3D SCROLL PERSPECTIVE
            </span>
            <span className="text-xs font-mono text-[#CCFF00]">
              [01 — 03 OF 10]
            </span>
          </div>

          <div 
            ref={deckRef}
            className={`relative w-full ${isMobile ? 'flex flex-col gap-8' : 'h-[640px] preserve-3d perspective-1200'}`}
          >
            {FEATURED_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                style={!isMobile ? { zIndex: index + 1 } : undefined}
                className={`portfolio-stacked-card ${
                  isMobile 
                    ? 'relative w-full' 
                    : 'absolute inset-0 w-full h-full preserve-3d'
                }`}
              >
                <FloatingGlassCard 
                  project={project} 
                  isFeatured={true}
                  onOpenCaseStudy={setActiveProject}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ADDITIONAL VERIFIED PROJECTS: Floating Glass Grid */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <span className="text-xs font-mono tracking-wider text-[#9CA3AF] uppercase flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-[#CCFF00]" />
              ADDITIONAL VERIFIED REPOSITORIES // FLOATING GLASS PANELS
            </span>
            <span className="text-xs font-mono text-[#CCFF00]">
              [04 — 10 OF 10]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECONDARY_PROJECTS.map((project) => (
              <FloatingGlassCard
                key={project.id}
                project={project}
                isFeatured={false}
                onOpenCaseStudy={setActiveProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FULL PROJECT CASE STUDY MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div 
            className="relative w-full max-w-3xl rounded-3xl bg-[#15151A] border border-white/[0.12] p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl text-[#F4F4F6]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-[#CCFF00] font-semibold">
                PROJECT {activeProject.projectNumber} // SPECIFICATION
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#9CA3AF] uppercase">
                {activeProject.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
              {activeProject.title}
            </h3>
            <p className="text-sm font-mono text-[#CCFF00] mb-8">
              {activeProject.tagline}
            </p>

            {/* The Problem & The Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase text-red-400 mb-2 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  THE PROBLEM
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {activeProject.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase text-[#CCFF00] mb-2 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
                  THE SOLUTION
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {activeProject.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-[#9CA3AF] mb-4 tracking-wider">
                Key Engineering Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Architecture Highlights */}
            <div className="mb-8 p-5 rounded-2xl bg-[#09090B] border border-white/[0.08]">
              <h4 className="text-xs font-mono uppercase text-[#CCFF00] mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Technical Architecture Highlights
              </h4>
              <ul className="space-y-2">
                {activeProject.architectureHighlights.map((arch, i) => (
                  <li key={i} className="text-xs text-gray-300 font-mono flex items-center gap-2">
                    <span className="text-[#CCFF00]">→</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-[#9CA3AF] mb-3 tracking-wider">
                Verified Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs bg-white/[0.05] border border-white/[0.1] text-[#F4F4F6] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Bar */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#9CA3AF]">
                <span>Verified Authors: </span>
                <span className="text-white font-medium">{activeProject.contributors.join(', ')}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs tracking-wider uppercase font-mono hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 border border-white/20"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#CCFF00]" />
                    LIVE DEPLOYMENT
                  </a>
                )}
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#09090B] font-semibold text-xs tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  VIEW ON GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
