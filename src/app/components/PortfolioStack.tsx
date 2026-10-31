import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TOP_PROJECTS, Project } from '../data/projects';
import { 
  Github, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Cpu, 
  Sparkles,
  Layers,
  ArrowDown,
  RotateCw,
  Orbit
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function PortfolioStack() {
  const containerRef = useRef<HTMLElement | null>(null);
  const deckRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const totalCards = TOP_PROJECTS.length; // 10 verified projects

  // Setup GSAP ScrollTrigger: 3D Spinal Rotation where cards rotate and descend down one by one!
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length < 2) return;

    const ctx = gsap.context(() => {
      // Set initial positions:
      // Card 0 is in the active front position
      gsap.set(cards[0], {
        yPercent: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        opacity: 1,
        transformPerspective: 1400
      });

      // Subsequent cards are positioned slightly coiled on the spine above/behind
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], {
          yPercent: -15,
          rotateX: -14,
          rotateY: 20,
          rotateZ: 2,
          scale: 0.92,
          opacity: i === 1 ? 0.35 : 0,
          transformPerspective: 1400
        });
      }

      // Pinned scrub timeline along the spine
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${(totalCards - 1) * 900}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const step = Math.min(
              totalCards - 1,
              Math.floor(self.progress * (totalCards - 0.05))
            );
            setCurrentIndex(step);
          }
        }
      });

      // Animate each card rotating down along the spine one by one
      for (let i = 0; i < cards.length - 1; i++) {
        const currentCard = cards[i];
        const nextCard = cards[i + 1];

        // 1. Current card rotates and spirals DOWN out of view
        tl.to(
          currentCard,
          {
            yPercent: 125,
            rotateX: 24,
            rotateY: -22,
            rotateZ: -6,
            scale: 0.88,
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut'
          },
          `step-${i}`
        );

        // 2. Next card rotates down into the center foreground
        tl.to(
          nextCard,
          {
            yPercent: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut'
          },
          `step-${i}`
        );

        // 3. The card after next becomes partially visible in the queue
        if (i + 2 < cards.length) {
          tl.to(
            cards[i + 2],
            {
              opacity: 0.35,
              duration: 1,
              ease: 'power1.inOut'
            },
            `step-${i}`
          );
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [totalCards]);

  // Jump smoothly to a specific project on the spine
  const jumpTo = (targetIdx: number) => {
    if (!containerRef.current) return;
    const start = containerRef.current.offsetTop;
    const totalDist = (totalCards - 1) * 900;
    const targetScroll = start + (targetIdx / (totalCards - 1)) * totalDist;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) jumpTo(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) jumpTo(currentIndex - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
      if (e.key === 'ArrowDown') handleNext();
      if (e.key === 'ArrowUp') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section 
      id="portfolio" 
      ref={containerRef}
      className="relative min-h-screen py-24 px-6 bg-transparent overflow-hidden flex flex-col justify-center"
    >
      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-6 mb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]" />
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase flex items-center gap-2">
                <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
                04 // 3D SPINAL ROTATING CAROUSEL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Spinal Rotating Projects // <span className="font-semibold text-white">One by One Descending</span>
            </h2>
          </div>

          {/* Spine Progress Counter & Controls */}
          <div className="flex items-center gap-4">
            <div className="text-xs font-mono text-[#CCFF00] px-4 py-2 rounded-full bg-[#15151A] border border-[#CCFF00]/30 shadow-md flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
              <span>SPINE // {currentIndex + 1} OF {totalCards}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-[#15151A] border border-white/[0.12] hover:border-[#CCFF00] hover:text-[#CCFF00] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white/80 transition-all shadow-lg"
                title="Rotate to Previous Project"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === totalCards - 1}
                className="w-10 h-10 rounded-full bg-[#15151A] border border-white/[0.12] hover:border-[#CCFF00] hover:text-[#CCFF00] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white/80 transition-all shadow-lg"
                title="Rotate to Next Project"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Selector Pills Dial */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none flex items-center gap-2">
          {TOP_PROJECTS.map((proj, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => jumpTo(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-300 flex items-center gap-2 border ${
                  isCurrent
                    ? 'bg-[#CCFF00] text-[#09090B] font-bold border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.35)] scale-105'
                    : 'bg-[#15151A]/80 text-zinc-400 border-white/[0.08] hover:border-white/[0.25] hover:text-white'
                }`}
              >
                <span>{proj.projectNumber}</span>
                <span className="font-sans font-medium">{proj.title}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* SPINAL ROTATING STACK: CARDS ROTATE AND GO DOWN ONE BY ONE     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* LEFT: VISUAL 3D SPINAL COLUMN TRACK (VERTEBRAE RAIL) */}
          <div className="hidden lg:flex col-span-1 flex-col items-center justify-between h-[540px] py-4 relative">
            {/* Glowing Spinal Rail Cable */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#CCFF00]/40 to-transparent" />

            {/* 10 Vertebrae Nodes */}
            {TOP_PROJECTS.map((p, idx) => {
              const isActive = idx === currentIndex;
              const isPast = idx < currentIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => jumpTo(idx)}
                  className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-[#CCFF00] text-[#09090B] font-bold text-[10px] scale-125 shadow-[0_0_12px_#CCFF00] ring-2 ring-[#CCFF00]/50'
                      : isPast
                      ? 'bg-zinc-800 text-zinc-400 border border-white/20 text-[9px]'
                      : 'bg-[#15151A] text-zinc-500 border border-white/10 text-[9px] hover:border-[#CCFF00]/60 hover:text-white'
                  }`}
                  title={`Spine Node 0${idx + 1}: ${p.title}`}
                >
                  <span>{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: 3D SPINAL ROTATING CARD DECK */}
          <div 
            ref={deckRef}
            className="col-span-12 lg:col-span-11 relative w-full h-[580px] sm:h-[620px] rounded-3xl"
            style={{ 
              perspective: '1400px',
              transformStyle: 'preserve-3d'
            }}
          >
            {TOP_PROJECTS.map((project, index) => {
              // Inverse z-index so top card is on top
              const zIndex = totalCards - index;

              return (
                <div
                  key={project.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  style={{ 
                    zIndex,
                    transformStyle: 'preserve-3d'
                  }}
                  className="absolute inset-0 w-full h-full rounded-3xl bg-[#15151A] border border-white/[0.14] p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden will-change-transform"
                >
                  {/* Subtle Background Radial Ambient Light */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                      background: `radial-gradient(ellipse at 80% 20%, rgba(204, 255, 0, 0.06) 0%, transparent 60%)`
                    }}
                  />

                  {/* Top Meta Bar */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#CCFF00]">
                        PROJECT {project.projectNumber} // 10
                      </span>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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

                  {/* Main Project Details */}
                  <div className="relative z-10 my-auto py-4 space-y-4">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#F4F4F6] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#CCFF00] font-mono">
                      {project.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-[#9CA3AF] max-w-3xl leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Architecture Specs Highlight Pills */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                      {project.architectureHighlights.map((arch, aIdx) => (
                        <div key={aIdx} className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                          <span className="text-[10px] font-mono text-[#CCFF00] block mb-1">
                            ARCH SPEC 0{aIdx + 1}
                          </span>
                          <span className="text-xs text-zinc-200 font-light block leading-snug">
                            {arch}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Verified Technology Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
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
                      className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#09090B] font-semibold text-xs tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
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
              );
            })}
          </div>
        </div>

        {/* Scroll Spine Hint */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
          <ArrowDown className="w-3.5 h-3.5 text-[#CCFF00] animate-bounce" />
          <span>SCROLL DOWN — CARDS ROTATE AND GO DOWN ONE BY ONE ALONG THE SPINAL RAIL</span>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  THE PROBLEM
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {activeProject.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase text-[#CCFF00] mb-2 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
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

            {/* Authors & Actions */}
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
