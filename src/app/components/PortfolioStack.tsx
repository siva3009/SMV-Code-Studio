import { useEffect, useRef, useState, useCallback } from 'react';
import { TOP_PROJECTS, Project } from '../data/projects';
import { 
  Github, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  RotateCw, 
  ArrowDown
} from 'lucide-react';

export function PortfolioStack() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const totalCards = TOP_PROJECTS.length; // 10 verified projects
  const isThrottledRef = useRef(false);

  // Jump smoothly to a specific project on the spine
  const jumpTo = useCallback((targetIdx: number) => {
    const validIdx = Math.max(0, Math.min(totalCards - 1, targetIdx));
    setCurrentIndex(validIdx);
  }, [totalCards]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(totalCards - 1, prev + 1));
  }, [totalCards]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // High-performance trackpad/mouse wheel gesture on the deck
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isThrottledRef.current) return;

    if (e.deltaY > 25 && currentIndex < totalCards - 1) {
      isThrottledRef.current = true;
      handleNext();
      setTimeout(() => { isThrottledRef.current = false; }, 360);
    } else if (e.deltaY < -25 && currentIndex > 0) {
      isThrottledRef.current = true;
      handlePrev();
      setTimeout(() => { isThrottledRef.current = false; }, 360);
    }
  };

  return (
    <section 
      id="portfolio" 
      ref={containerRef}
      className="relative min-h-screen py-8 sm:py-12 px-4 sm:px-6 bg-transparent overflow-hidden flex flex-col justify-center"
    >
      <div className="relative max-w-5xl mx-auto w-full z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-3 sm:pb-4 mb-4 sm:mb-5 gap-3">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]" />
              <span className="text-[11px] font-mono tracking-widest text-[#CCFF00] uppercase flex items-center gap-1.5">
                <RotateCw className="w-3 h-3 animate-spin" style={{ animationDuration: '10s' }} />
                04 // 3D SPINAL ROTATING CAROUSEL
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F4F4F6] tracking-tight">
              Spinal Rotating Projects // <span className="font-semibold text-white">One by One Descending</span>
            </h2>
          </div>

          {/* Spine Progress Counter & Controls */}
          <div className="flex items-center gap-3">
            <div className="text-[11px] font-mono text-[#CCFF00] px-3 py-1.5 rounded-full bg-[#15151A] border border-[#CCFF00]/30 shadow-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
              <span>SPINE // {currentIndex + 1} OF {totalCards}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-8 h-8 rounded-full bg-[#15151A] border border-white/[0.12] hover:border-[#CCFF00] hover:text-[#CCFF00] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white/80 transition-all shadow-lg active:scale-95"
                title="Rotate to Previous Project"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === totalCards - 1}
                className="w-8 h-8 rounded-full bg-[#15151A] border border-white/[0.12] hover:border-[#CCFF00] hover:text-[#CCFF00] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white/80 transition-all shadow-lg active:scale-95"
                title="Rotate to Next Project"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Selector Pills Dial */}
        <div className="mb-4 sm:mb-5 overflow-x-auto pb-1 scrollbar-none flex items-center gap-1.5">
          {TOP_PROJECTS.map((proj, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => jumpTo(idx)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                  isCurrent
                    ? 'bg-[#CCFF00] text-[#09090B] font-bold border-[#CCFF00] shadow-[0_0_12px_rgba(204,255,0,0.35)] scale-105'
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
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* LEFT: VISUAL 3D SPINAL COLUMN TRACK (VERTEBRAE RAIL) */}
          <div className="hidden lg:flex col-span-1 flex-col items-center justify-between h-[450px] py-2 relative">
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
                  className={`relative z-10 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#CCFF00] text-[#09090B] font-bold text-[9px] scale-125 shadow-[0_0_12px_#CCFF00] ring-2 ring-[#CCFF00]/50'
                      : isPast
                      ? 'bg-zinc-800 text-zinc-400 border border-white/20 text-[8px]'
                      : 'bg-[#15151A] text-zinc-500 border border-white/10 text-[8px] hover:border-[#CCFF00]/60 hover:text-white'
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
            onWheel={handleWheel}
            className="col-span-12 lg:col-span-11 relative w-full h-[460px] sm:h-[480px] rounded-2xl sm:rounded-3xl cursor-default"
            style={{ 
              perspective: '1400px',
              transformStyle: 'preserve-3d'
            }}
          >
            {TOP_PROJECTS.map((project, index) => {
              const isCurrent = index === currentIndex;
              const isPast = index < currentIndex;

              return (
                <div
                  key={project.id}
                  style={{ 
                    zIndex: isCurrent ? 30 : isPast ? 10 : 20,
                    transform: isCurrent
                      ? 'translate3d(0, 0, 0) rotateX(0deg) scale(1)'
                      : isPast
                      ? 'translate3d(0, 75px, 0) rotateX(20deg) scale(0.92)'
                      : 'translate3d(0, -45px, 0) rotateX(-16deg) scale(0.94)',
                    opacity: isCurrent ? 1 : 0,
                    visibility: Math.abs(index - currentIndex) <= 1 ? 'visible' : 'hidden',
                    pointerEvents: isCurrent ? 'auto' : 'none',
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease-out',
                    willChange: 'transform, opacity',
                    backfaceVisibility: 'hidden'
                  }}
                  className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl bg-[#131318] border border-white/[0.14] p-5 sm:p-7 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Background Radial Ambient Light */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                      background: `radial-gradient(ellipse at 80% 20%, rgba(204, 255, 0, 0.06) 0%, transparent 60%)`
                    }}
                  />

                  {/* Top Meta Bar */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3 sm:pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs sm:text-sm font-mono font-bold text-[#CCFF00]">
                        PROJECT {project.projectNumber} // 10
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-white/[0.06] hover:bg-[#CCFF00] hover:text-[#09090B] flex items-center justify-center text-white/80 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Main Project Details */}
                  <div className="relative z-10 my-auto py-2 space-y-2 sm:space-y-3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F4F4F6] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#CCFF00] font-mono">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl leading-relaxed font-light line-clamp-2">
                      {project.description}
                    </p>

                    {/* Architecture Specs Highlight Pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      {project.architectureHighlights.map((arch, aIdx) => (
                        <div key={aIdx} className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-white/[0.06]">
                          <span className="text-[9px] font-mono text-[#CCFF00] block mb-0.5">
                            ARCH SPEC 0{aIdx + 1}
                          </span>
                          <span className="text-[11px] text-zinc-200 font-light block leading-snug line-clamp-2">
                            {arch}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Verified Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] bg-white/[0.04] border border-white/[0.08] text-[#F4F4F6] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="relative z-10 pt-3 sm:pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="px-4 sm:px-5 py-2 rounded-full bg-[#CCFF00] text-[#09090B] font-semibold text-[11px] tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-all hover:scale-105 inline-flex items-center gap-1.5 shadow-lg cursor-pointer"
                    >
                      <span>OPEN CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-[#F4F4F6] transition-colors inline-flex items-center gap-1.5 border border-white/[0.1]"
                        >
                          <span>LIVE DEMO</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-[#F4F4F6] transition-colors inline-flex items-center gap-1.5 border border-white/[0.1]"
                      >
                        <Github className="w-3 h-3" />
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
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-400">
          <ArrowDown className="w-3.5 h-3.5 text-[#CCFF00] animate-bounce" />
          <span>USE CONTROLS, PILLS, ARROW KEYS OR MOUSE WHEEL TO DESCEND THROUGH PROJECTS</span>
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
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-white/[0.08] pb-6 mb-6">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-mono text-[#CCFF00] font-bold">
                  PROJECT {activeProject.projectNumber} // SPECIFICATION
                </span>
                <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 uppercase">
                  {activeProject.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeProject.title}
              </h2>
              <p className="text-sm text-[#CCFF00] font-mono mt-1">
                {activeProject.tagline}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-3">
                Key Architectural Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeProject.architectureHighlights.map((arch, aIdx) => (
                  <div key={aIdx} className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-zinc-500 block mb-1">SPEC 0{aIdx + 1}</span>
                    <span className="text-xs text-zinc-200 font-light block leading-relaxed">{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase text-red-400 mb-2 flex items-center gap-2">
                  <span>The Engineering Problem</span>
                </h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed font-light">
                  {activeProject.problem}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase text-emerald-400 mb-2 flex items-center gap-2">
                  <span>The TriCodeX Solution</span>
                </h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed font-light">
                  {activeProject.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-3">
                Production Capabilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 font-light">
                {activeProject.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6 pt-4 border-t border-white/[0.08]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                Verified Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md text-xs bg-white/[0.04] border border-white/[0.08] text-zinc-200 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-white transition-colors inline-flex items-center gap-2 border border-white/[0.1]"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#09090B] font-semibold text-xs font-mono tracking-wider uppercase hover:bg-[#D4FF3F] transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
