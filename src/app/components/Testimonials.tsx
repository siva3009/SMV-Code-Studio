import { useEffect, useRef, useState } from 'react';
import { Star, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'bottom 20%',
        once: true
      }
    });

    // Animate cards into view
    tl.from(section.querySelectorAll('.testimonial-card'), {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      immediateRender: false
    });

    // Count-up animation for clients stat
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to({ count: 0 }, {
              count: 120,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                setClientsCount(Math.floor(this.targets()[0].count));
              }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => {
      tl.kill();
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-black overflow-hidden gsap-section">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-radial from-cyan-500/5 via-blue-600/5 to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
              TESTIMONIALS & STATS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}>
            Client Success Stories
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Trusted by clients worldwide with exceptional results
          </p>
        </div>

        {/* Grid Layout (2 columns) */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT: Large Card */}
          <div className="testimonial-card lg:col-span-2 relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.18)]">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-black/40 to-black/80"></div>
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80"
              alt="Project collaboration"
              className="absolute inset-x-0 bottom-0 w-full h-56 object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 p-8 md:p-10">
              <p className="text-sm text-cyan-300 uppercase tracking-wider mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Available for worldwide projects
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Based in Chennai, India
              </h3>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Start a Project
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* RIGHT TOP: Stats Card */}
            <div className="testimonial-card relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.18)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <p className="text-sm text-gray-300 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Trusted by 120+ clients across industries
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {clientsCount}+
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Client-focused solutions backed by results.
                </p>
              </div>
            </div>

            {/* RIGHT BOTTOM: Testimonial Card */}
            <div className="testimonial-card relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.18)]">
              <div className="relative z-10">
                <div className="text-4xl text-cyan-500/40 mb-4 font-serif">"</div>
                <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  The team at TriCodeX delivered a stunning, modern website that elevated our brand presence and boosted engagement across the board.
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1603415526960-f7e0328ed9fe?auto=format&fit=crop&w=200&q=80"
                    alt="Client portrait"
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="text-white font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Alex Collins
                    </h4>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Design Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}