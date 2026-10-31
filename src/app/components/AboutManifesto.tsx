import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function AboutManifesto() {
  const containerRef = useRef<HTMLElement | null>(null);
  const textLinesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate line masks
      const lines = containerRef.current?.querySelectorAll('.manifesto-line-inner');
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { yPercent: 115, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power4.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Animate metadata badges
      const metaElements = containerRef.current?.querySelectorAll('.manifesto-meta');
      if (metaElements && metaElements.length > 0) {
        gsap.fromTo(
          metaElements,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 65%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-32 md:py-44 px-6 bg-[#09090B]/80 backdrop-blur-[2px] text-[#F4F4F6] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(#F4F4F6 1px, transparent 1px), linear-gradient(90deg, #F4F4F6 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Tag */}
        <div className="manifesto-meta flex items-center justify-between border-b border-white/[0.08] pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
            <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
              01 / PHILOSOPHY
            </span>
          </div>
          <span className="text-xs font-mono text-[#9CA3AF] tracking-wider uppercase hidden sm:block">
            ARCHITECTURAL MANIFESTO
          </span>
        </div>

        {/* Large Editorial Headline with Masked Line Wrappers */}
        <div ref={textLinesRef} className="space-y-2 md:space-y-4 mb-16">
          <div className="overflow-hidden">
            <h2 className="manifesto-line-inner text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F4F4F6] leading-[1.08]">
              We don't just build websites.
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="manifesto-line-inner text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F4F4F6] leading-[1.08]">
              We <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#CCFF00]">engineer digital experiences</span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="manifesto-line-inner text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#9CA3AF] leading-[1.08]">
              that move businesses forward.
            </h2>
          </div>
        </div>

        {/* Editorial Narrative & Capabilities Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t border-white/[0.08]">
          <div className="md:col-span-5 space-y-6">
            <p className="manifesto-meta text-base md:text-lg text-[#9CA3AF] leading-relaxed font-light">
              TriCodeX was founded at the convergence of relentless software engineering and bespoke visual craftsmanship. We discard bloated templates in favor of performant, custom-crafted digital systems.
            </p>
            <p className="manifesto-meta text-base md:text-lg text-[#9CA3AF] leading-relaxed font-light">
              Every interface is architected for fluid micro-interactions, sub-second responses, and resilient backend systems that scale alongside your ambition.
            </p>
            <div className="manifesto-meta pt-2">
              <a 
                href="#team" 
                className="inline-flex items-center gap-2 text-sm font-medium text-[#CCFF00] hover:text-[#D4FF3F] group transition-colors font-mono"
              >
                MEET THE ENGINEERS
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="manifesto-meta p-6 rounded-2xl bg-[#15151A] border border-white/[0.08] hover:border-[#CCFF00]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#CCFF00] mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-[#F4F4F6] mb-2 font-mono">Precision Full-Stack</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Full-cycle execution bridging high-frequency Python APIs, microservices, and reactive TypeScript component architectures.
              </p>
            </div>

            <div className="manifesto-meta p-6 rounded-2xl bg-[#15151A] border border-white/[0.08] hover:border-[#CCFF00]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#CCFF00] mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-[#F4F4F6] mb-2 font-mono">Applied AI & Automation</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Embedding high-utility vector search, LLM orchestration, and machine learning pipelines into operational software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

