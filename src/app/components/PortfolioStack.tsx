import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TOP_PROJECTS, Project } from '../data/projects';
import { 
  Github, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Cpu, 
  Orbit, 
  RotateCw,
  FolderGit2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function PortfolioStack() {
  const containerRef = useRef<HTMLElement | null>(null);
  const spindleRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [radius, setRadius] = useState(580);
  const [isMobile, setIsMobile] = useState(false);
  const totalCards = TOP_PROJECTS.length; // 10 verified projects
  const anglePerCard = 360 / totalCards; // 36 degrees per card

  // Calculate responsive 3D cylinder radius based on viewport width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 640) {
        setRadius(340);
      } else if (width < 1024) {
        setRadius(460);
      } else {
        setRadius(580);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rotate spindle to specific index
  const rotateTo = useCallback((index: number) => {
    const normalized = (index + totalCards) % totalCards;
    setActiveIndex(normalized);
  }, [totalCards]);

  const handlePrev = () => rotateTo(activeIndex - 1);
  const handleNext = () => rotateTo(activeIndex + 1);

  // GSAP ScrollTrigger Integration: scroll rotates the 3D spindle smoothly through projects
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalCards * 320}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const targetIndex = Math.min(
            totalCards - 1,
            Math.floor(progress * totalCards)
          );
          setActiveIndex(targetIndex);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile, totalCards]);

  // Handle escape key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Current rotation of the 3D spindle
  const spindleRotation = -activeIndex * anglePerCard;

  return (
    <section 
      id="portfolio" 
      ref={containerRef}
      className="relative min-h-screen py-28 px-6 bg-transparent overflow-hidden flex flex-col justify-center"
    >
      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]" />
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase flex items-center gap-2">
                <Orbit className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                04 // 3D SPINAL ROTATING PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Spinal Rotating Projects // <span className="font-semibold text-white">10 Verified Systems</span>
            </h2>
          </div>

          {/* Spindle Rotation Controls */}
          <div className="flex items-center gap-4">
            <div className="text-xs font-mono text-[#CCFF00] px-4 py-2 rounded-full bg-[#15151A] border border-[#CCFF00]/30 shadow-md">
              CYLINDER ANGLE: <span className="font-bold">{activeIndex + 1} / {totalCards}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#15151A] border border-white/[0.12] hover:border-[#CCFF00] hover:text-[#CCFF00] flex items-center justify-center text-white/80 transition-all hover:scale-110 shadow-lg"
                title="Rotate to Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#15151A] border border-white/[0.12] hover:border-[#CCFF00] hover:text-[#CCFF00] flex items-center justify-center text-white/80 transition-all hover:scale-110 shadow-lg"
                title="Rotate to Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Selector Dial / Horizontal Spine Navigator */}
        <div className="mb-10 overflow-x-auto pb-3 scrollbar-none flex items-center gap-2">
          {TOP_PROJECTS.map((proj, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={proj.id}
                onClick={() => rotateTo(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-300 flex items-center gap-2 border ${
                  isCurrent
                    ? 'bg-[#CCFF00] text-[#09090B] font-bold border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.4)] scale-105'
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
        {/* 3D SPINAL ROTATING CYLINDER / CAROUSEL STAGE                   */}
        {/* ============================================================== */}
        <div 
          className="relative w-full h-[580px] sm:h-[620px] flex items-center justify-center"
          style={{
            perspective: '1400px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          {/* Central Rotating Spindle Axis */}
          <div
            ref={spindleRef}
            className="relative w-full max-w-2xl h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${spindleRotation}deg)`,
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {TOP_PROJECTS.map((project, idx) => {
              const cardAngle = idx * anglePerCard;
              // Angle distance from active center card (normalized -180 to 180)
              let delta = (cardAngle + spindleRotation) % 360;
              if (delta > 180) delta -= 360;
              if (delta < -180) delta += 360;
              const isFront = Math.abs(delta) < 15;
              const isAdjacent = Math.abs(delta) < 55;
              const isFarBack = Math.abs(delta) > 95;

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (!isFront) rotateTo(idx);
                  }}
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                    opacity: isFront ? 1 : isAdjacent ? 0.45 : isFarBack ? 0.08 : 0.25,
                    pointerEvents: isFront ? 'auto' : 'auto',
                    cursor: isFront ? 'default' : 'pointer'
                  }}
                  className={`absolute inset-0 w-full h-full rounded-3xl p-8 sm:p-10 flex flex-col justify-between border transition-opacity duration-500 shadow-2xl ${
                    isFront
                      ? 'bg-[#15151A] border-[#CCFF00]/50 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(204,255,0,0.1)] ring-1 ring-[#CCFF00]/30'
                      : 'bg-[#111116] border-white/[0.1] hover:border-[#CCFF00]/40'
                  }`}
                >
                  {/* Subtle Top Meta */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#CCFF00]">
                        PROJECT {project.projectNumber} // 10
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#CCFF00] hover:text-black flex items-center justify-center text-white/80 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Main Project Details */}
                  <div className="my-auto py-4 space-y-4">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#F4F4F6] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-mono text-[#CCFF00]">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>

                    {/* Architecture Specs Highlight Pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                      {project.architectureHighlights.map((arch, aIdx) => (
                        <div key={aIdx} className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                          <span className="text-[9px] font-mono text-[#CCFF00] block mb-0.5">
                            SPEC 0{aIdx + 1}
                          </span>
                          <span className="text-[11px] text-zinc-200 block leading-tight font-light line-clamp-2">
                            {arch}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Verified Technology Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#09090B] font-semibold text-xs tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                    >
                      <span>OPEN CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
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

        {/* Spindle Hint Footer */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <RotateCw className="w-3.5 h-3.5 text-[#CCFF00]" />
            SCROLL DOWN OR USE ARROWS TO SPIN THE 3D SPINDLE
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="hidden sm:inline text-zinc-400">
            CLICK ANY CURVED CARD TO ROTATE DIRECTLY
          </span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* FULL PROJECT CASE STUDY MODAL                                  */}
      {/* ============================================================== */}
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

            {/* Modal Header */}
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

            {/* Problem & Solution Grid */}
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

            {/* Verified Tech Stack */}
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
                <span>Verified Contributors: </span>
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
