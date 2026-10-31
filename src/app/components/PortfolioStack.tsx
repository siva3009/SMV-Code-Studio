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
// SECONDARY PROJECT CARD COMPONENT
// ==========================================
function SecondaryProjectCard({ 
  project, 
  onOpenCaseStudy 
}: { 
  project: Project; 
  onOpenCaseStudy: (p: Project) => void; 
}) {
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

    setRotation({
      x: -normY * 5,
      y: normX * 5
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
      onClick={() => onOpenCaseStudy(project)}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
      className="relative rounded-3xl bg-[#15151A] border border-white/[0.08] hover:border-[#CCFF00]/40 p-7 flex flex-col justify-between shadow-xl cursor-pointer group transition-colors duration-300"
    >
      <div>
        {/* Top Meta */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
          <span className="text-xs font-mono font-bold text-[#CCFF00]">
            PROJECT {project.projectNumber}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#9CA3AF]">
            {project.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h4 className="text-xl font-bold text-[#F4F4F6] tracking-tight mb-2 group-hover:text-[#CCFF00] transition-colors">
          {project.title}
        </h4>
        <p className="text-xs font-mono text-[#CCFF00] mb-3">
          {project.tagline}
        </p>
        <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6 font-light line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#9CA3AF]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#9CA3AF]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
        <span className="text-[#CCFF00] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          CASE STUDY <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-[#CCFF00] transition-colors p-1"
              title="Live Deployment"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] hover:text-[#CCFF00] transition-colors p-1"
            title="GitHub Repository"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
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

      // Initial state: Card 0 in foreground, Card 1 & 2 hidden offscreen below
      gsap.set(cards[0], { yPercent: 0, scale: 1, opacity: 1, zIndex: 1 });
      gsap.set(cards[1], { yPercent: 120, scale: 0.95, opacity: 0, zIndex: 2 });
      if (cards[2]) {
        gsap.set(cards[2], { yPercent: 120, scale: 0.90, opacity: 0, zIndex: 3 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: deckRef.current,
          start: 'top top+=90',
          end: '+=2000',
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Transition 1: Card 0 recedes, Card 1 rises into foreground
      tl.to(cards[0], {
        scale: 0.92,
        yPercent: -4,
        opacity: 0.35,
        duration: 1,
        ease: 'none'
      }, 'step1')
      .to(cards[1], {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'none'
      }, 'step1');

      // Transition 2: Card 0 recedes further, Card 1 recedes, Card 2 rises
      if (cards[2]) {
        tl.to(cards[0], {
          scale: 0.85,
          yPercent: -8,
          opacity: 0.15,
          duration: 1,
          ease: 'none'
        }, 'step2')
        .to(cards[1], {
          scale: 0.92,
          yPercent: -4,
          opacity: 0.35,
          duration: 1,
          ease: 'none'
        }, 'step2')
        .to(cards[2], {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'none'
        }, 'step2');
      }
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
                04 // SELECTED WORK & CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Genuine Projects <span className="font-semibold text-white">Engineered by TriCodeX</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            Every showcased project is backed by verified GitHub repositories created by Mohammed Shameem, Sivaram, and Vasiharan.
          </p>
        </div>

        {/* TOP 3 FEATURED: Cinematic 3D Deck */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono tracking-wider text-[#9CA3AF] uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#CCFF00]" />
              FEATURED SYSTEMS // 3D SCROLL EXPERIENCE
            </span>
            <span className="text-xs font-mono text-[#CCFF00]">
              [01 — 03 OF 10]
            </span>
          </div>

          <div 
            ref={deckRef}
            className={`relative w-full ${isMobile ? 'flex flex-col gap-8' : 'h-[620px] preserve-3d perspective-1200'}`}
          >
            {FEATURED_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className={`portfolio-stacked-card rounded-3xl bg-[#15151A] border border-white/[0.12] p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col justify-between ${
                  isMobile 
                    ? 'relative w-full' 
                    : 'absolute inset-0 w-full h-full preserve-3d'
                }`}
              >
                {/* Background Ambient Radial Flare */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background: `radial-gradient(ellipse at 80% 20%, rgba(204, 255, 0, 0.05) 0%, transparent 60%)`
                  }}
                />

                {/* Top Meta Bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-[#CCFF00]">
                      PROJECT {project.projectNumber}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#9CA3AF] uppercase">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.status}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#CCFF00] hover:text-[#09090B] flex items-center justify-center text-white/80 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="relative z-10 my-auto py-6">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#F4F4F6] tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#CCFF00] font-mono mb-6">
                    {project.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-[#9CA3AF] max-w-3xl leading-relaxed mb-8 font-light">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {project.architectureHighlights.map((arch, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[10px] font-mono text-[#CCFF00] block mb-1">
                          ARCH SPEC 0{i + 1}
                        </span>
                        <span className="text-xs text-gray-200 font-light block leading-snug">
                          {arch}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md text-xs bg-white/[0.04] border border-white/[0.08] text-[#F4F4F6] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="relative z-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#09090B] font-semibold text-xs tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>OPEN CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-[#F4F4F6] transition-colors inline-flex items-center gap-2 border border-white/[0.1]"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-[#F4F4F6] transition-colors inline-flex items-center gap-2 border border-white/[0.1]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>SOURCE CODE</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ADDITIONAL VERIFIED PROJECTS: Clean 3-Column Grid */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <span className="text-xs font-mono tracking-wider text-[#9CA3AF] uppercase flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-[#CCFF00]" />
              ADDITIONAL VERIFIED REPOSITORIES
            </span>
            <span className="text-xs font-mono text-[#CCFF00]">
              [04 — 10 OF 10]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECONDARY_PROJECTS.map((project) => (
              <SecondaryProjectCard
                key={project.id}
                project={project}
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
