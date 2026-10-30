import { ShieldCheck, Layers, Cpu, Smartphone, Users2, ArrowUpRight } from 'lucide-react';

interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof ShieldCheck;
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Purpose-Driven Engineering',
    tagline: 'Solving real operational friction over building vanity fluff.',
    description: 'We prioritize software architecture that directly moves business metrics: reducing operational overhead, accelerating checkout speeds, and eliminating duplicate customer support tickets.',
    icon: ShieldCheck
  },
  {
    number: '02',
    title: 'Maintainable Architecture',
    tagline: 'Codebases your team can understand, maintain, and extend.',
    description: 'We adhere to strict modular design principles, comprehensive TypeScript typing, and clean directory hierarchies. You receive an asset you own completely with zero proprietary lock-in.',
    icon: Layers
  },
  {
    number: '03',
    title: 'Scalable Systems',
    tagline: 'Engineered to handle sudden demand spikes without breaking.',
    description: 'From relational PostgreSQL databases with indexed execution plans to Python FastAPI microservices, we build platforms designed to support business expansion without costly rewrites.',
    icon: Cpu
  },
  {
    number: '04',
    title: 'Responsive & Fluid by Default',
    tagline: 'Desktop immersion harmonized with mobile speed.',
    description: 'Every application is tested across real mobile viewports, touch gestures, and varied network bandwidths. High-performance caching and lightweight assets ensure sub-second first loads.',
    icon: Smartphone
  },
  {
    number: '05',
    title: 'Transparent Technical Collaboration',
    tagline: 'Direct communication with the engineers building your product.',
    description: 'No account managers or diluted communication chains. You collaborate directly with Mohammed Shameem, Sivaram, and Vasiharan with complete Git transparency and regular sprint milestones.',
    icon: Users2
  }
];

export function WhyTriCodeX() {
  return (
    <section id="why-us" className="relative py-32 px-6 bg-[#09090B] border-t border-white/[0.06] overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
                07 / VALUE PROPOSITION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Why Partner with <span className="font-semibold text-white">TriCodeX</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            We are not a bloated agency with junior handoffs. We are an agile, dedicated engineering studio delivering elite software craftsmanship.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="rounded-3xl bg-[#15151A] border border-white/[0.08] hover:border-[#CCFF00]/40 p-8 transition-colors flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#CCFF00]">
                      {pillar.number} //
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#F4F4F6] mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-[#CCFF00] mb-4">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
                  <span>STANDARD AT TRICODEX</span>
                  <span className="text-[#CCFF00]">✓ VERIFIED</span>
                </div>
              </div>
            );
          })}

          {/* Callout Box (Filling 6th spot) */}
          <div className="rounded-3xl bg-gradient-to-br from-[#15151A] to-[#1C1C22] border border-[#CCFF00]/30 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono text-[#CCFF00] tracking-widest uppercase block mb-4">
                FOUNDER COMMITMENT
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                Direct Founder Ownership
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed font-light">
                Every project is architected and built directly by Mohammed Shameem, Sivaram, and Vasiharan. Zero junior delegation. Absolute technical accountability.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.1]">
              <a
                href="#contact"
                className="w-full py-3 rounded-full bg-[#CCFF00] text-[#09090B] font-semibold text-xs tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-colors inline-flex items-center justify-center gap-2"
              >
                DISCUSS YOUR PROJECT
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

