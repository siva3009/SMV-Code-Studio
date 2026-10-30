import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Compass, 
  Target, 
  PenTool, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Stage {
  number: string;
  name: string;
  phase: string;
  objective: string;
  deliverables: string[];
  executionTime: string;
  icon: typeof Compass;
}

const STAGES: Stage[] = [
  {
    number: '01',
    name: 'Discover',
    phase: 'PHASE 01 // ARCHITECTURAL AUDIT',
    objective: 'We conduct a deep dive into your business model, customer workflows, performance bottlenecks, and technical requirements before writing a line of code.',
    deliverables: [
      'Technical Feasibility Assessment',
      'System Architecture Blueprint',
      'Feature Scope & MoSCoW Prioritization',
      'Risk & Scalability Analysis'
    ],
    executionTime: 'Week 1',
    icon: Compass
  },
  {
    number: '02',
    name: 'Strategize',
    phase: 'PHASE 02 // TECHNICAL ROADMAP',
    objective: 'We define the database schema, API contracts, deployment infrastructure, and performance budgets to ensure a predictable engineering timeline.',
    deliverables: [
      'Database Entity-Relationship Models',
      'REST / GraphQL API Contracts',
      'Hosting & Cloud Infrastructure Plan',
      'Core Web Vitals Target Thresholds'
    ],
    executionTime: 'Week 1–2',
    icon: Target
  },
  {
    number: '03',
    name: 'Design',
    phase: 'PHASE 03 // BESPOKE UI/UX',
    objective: 'We craft high-fidelity Figma design systems with atomic tokens, responsive layouts, and interactive prototypes tested for accessibility and brand identity.',
    deliverables: [
      'Complete Figma Component Design System',
      'Desktop & Mobile Interactive Prototypes',
      'Micro-Interaction & Motion Specs',
      'Design Token Styleguide'
    ],
    executionTime: 'Week 2–3',
    icon: PenTool
  },
  {
    number: '04',
    name: 'Engineer',
    phase: 'PHASE 04 // SPRINT EXECUTION',
    objective: 'We build the application using clean, strictly typed TypeScript, modular React components, and secure Python or Node backends with continuous integration.',
    deliverables: [
      'Modular Full-Stack Codebase',
      'Secure Authentication & RBAC',
      'Third-Party API & Payment Integrations',
      'Automated Test Suites'
    ],
    executionTime: 'Week 3–5',
    icon: Cpu
  },
  {
    number: '05',
    name: 'Launch & Optimize',
    phase: 'PHASE 05 // DEPLOYMENT & SCALING',
    objective: 'We orchestrate zero-downtime deployment, configure CDN edge caching, run lighthouse performance audits, and monitor runtime telemetry.',
    deliverables: [
      'Production Deployment to Cloud/VPS',
      'Domain, SSL & Security Headers Setup',
      '90+ Lighthouse Performance Validation',
      'Post-Launch Telemetry & Monitoring'
    ],
    executionTime: 'Week 5–6',
    icon: Rocket
  }
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Connect each stage card with scroll trigger
      const stageCards = containerRef.current?.querySelectorAll<HTMLElement>('.process-stage-card');
      stageCards?.forEach((card, idx) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActiveStageIndex(idx),
          onEnterBack: () => setActiveStageIndex(idx)
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="process" 
      ref={containerRef}
      className="relative py-32 px-6 bg-[#09090B] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
                06 / METHODOLOGY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              The Engineering <span className="font-semibold text-white">Process Lifecycle</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            A disciplined, five-stage delivery framework eliminating ambiguity and ensuring high-quality software shipped on schedule.
          </p>
        </div>

        {/* Connected Stages Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-0.5 bg-white/[0.08]">
            {/* Active Progress Bar */}
            <div 
              className="w-full bg-[#CCFF00] transition-all duration-500 ease-out shadow-[0_0_8px_#CCFF00]"
              style={{
                height: `${((activeStageIndex + 1) / STAGES.length) * 100}%`
              }}
            />
          </div>

          <div className="space-y-8">
            {STAGES.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = index === activeStageIndex;
              const isPassed = index <= activeStageIndex;

              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStageIndex(index)}
                  className={`process-stage-card relative lg:ml-20 rounded-3xl p-8 transition-all duration-500 cursor-pointer border ${
                    isActive
                      ? 'bg-[#15151A] border-[#CCFF00]/50 shadow-2xl'
                      : 'bg-[#0F0F12] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  {/* Timeline Node Indicator on Desktop */}
                  <div className="hidden lg:flex absolute -left-[5.75rem] top-8 items-center justify-center">
                    <div 
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isPassed 
                          ? 'border-[#CCFF00] bg-[#09090B] shadow-[0_0_10px_#CCFF00]' 
                          : 'border-white/20 bg-[#09090B]'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${isPassed ? 'bg-[#CCFF00]' : 'bg-white/20'}`} />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#CCFF00]' : 'text-[#9CA3AF]'}`}>
                          {stage.phase}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#9CA3AF]">
                          {stage.executionTime}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isActive ? 'bg-[#CCFF00] text-[#09090B]' : 'bg-white/[0.06] text-white/80'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#F4F4F6] tracking-tight">
                          {stage.name}
                        </h3>
                      </div>

                      <p className="text-sm text-[#9CA3AF] leading-relaxed font-light mb-6">
                        {stage.objective}
                      </p>
                    </div>

                    {/* Deliverables Column */}
                    <div className="lg:w-80 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <span className="text-[11px] font-mono uppercase text-[#CCFF00] block mb-3 font-medium">
                        Stage Deliverables:
                      </span>
                      <ul className="space-y-2">
                        {stage.deliverables.map((del, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-300 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

