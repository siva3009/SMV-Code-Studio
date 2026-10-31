import { useState, MouseEvent } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Network, 
  Cloud, 
  Cpu, 
  Zap, 
  GitBranch, 
  Check, 
  Layers 
} from 'lucide-react';

interface BentoCardProps {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  specs: string[];
  icon: typeof Code2;
  className?: string;
  badge?: string;
}

function BentoCard({ number, title, subtitle, category, specs, icon: Icon, className = '', badge }: BentoCardProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setSpotlight(prev => ({ ...prev, active: false }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl bg-[#15151A] border border-white/[0.08] hover:border-[#CCFF00]/40 p-8 transition-colors overflow-hidden group flex flex-col justify-between ${className}`}
    >
      {/* Pointer Spotlight Flare */}
      {spotlight.active && (
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${spotlight.x}% ${spotlight.y}%, rgba(204, 255, 0, 0.08), transparent 80%)`
          }}
        />
      )}

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#CCFF00]">{number} //</span>
            <span className="text-[11px] font-mono text-[#9CA3AF] uppercase">{category}</span>
          </div>
          <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]/40 transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-[#F4F4F6] mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6 font-light">
          {subtitle}
        </p>
      </div>

      <div>
        <div className="space-y-2 pt-4 border-t border-white/[0.06]">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
              <Check className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
              <span className="truncate">{spec}</span>
            </div>
          ))}
        </div>

        {badge && (
          <div className="mt-6 pt-2">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/20">
              {badge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function CapabilitiesBento() {
  return (
    <section id="capabilities" className="relative py-32 px-6 bg-[#09090B]/80 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
                05 / TECHNICAL ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Engineering <span className="font-semibold text-white">Capabilities Bento</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            A comprehensive matrix of verified proficiencies powering the digital applications, backend engines, and AI integrations we deliver.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Frontend (Large 2 cols) */}
          <BentoCard
            number="01"
            title="Frontend Engineering"
            subtitle="Component-driven React and TypeScript architectures with strict typing, zero runtime errors, and 60fps micro-interactions."
            category="CLIENT-SIDE SYSTEMS"
            specs={[
              'React 18/19 & Next.js App Router',
              'TypeScript Type-Safety & Interfaces',
              'Tailwind CSS Token Design Systems',
              'GSAP & Motion Animation Orchestration'
            ]}
            icon={Code2}
            badge="60 FPS FLUID RENDERING"
            className="md:col-span-2"
          />

          {/* Card 2: Backend (1 col) */}
          <BentoCard
            number="02"
            title="Backend Systems"
            subtitle="Python, Django, and Node.js microservices engineered for high throughput."
            category="SERVER ARCHITECTURE"
            specs={[
              'Django REST Framework',
              'FastAPI Async Endpoints',
              'Node.js & WebSocket Concurrency',
              'Role-Based Access Control (RBAC)'
            ]}
            icon={Terminal}
            className="md:col-span-1 lg:col-span-2"
          />

          {/* Card 3: AI & Vector Embeddings (1 col) */}
          <BentoCard
            number="03"
            title="AI & Vector Engines"
            subtitle="FAISS vector similarity search, Google Gemini LLM pipelines, and automated deduplication."
            category="APPLIED INTELLIGENCE"
            specs={[
              'FAISS Vector Similarity Indexing',
              'Google Gemini & OpenAI Integration',
              'NLP Token Classification Pipelines',
              'Offline Speech Translation Models'
            ]}
            icon={Cpu}
            badge="SEMANTIC VECTOR SEARCH"
            className="md:col-span-1 lg:col-span-2"
          />

          {/* Card 4: Database Engineering (1 col) */}
          <BentoCard
            number="04"
            title="Database Architecture"
            subtitle="Relational schemas, ACID transactions, and sub-10ms query execution."
            category="DATA PERSISTENCE"
            specs={[
              'PostgreSQL & MySQL Optimization',
              'Index Tuning & Query Execution Plans',
              'WASM In-Browser SQLite (SQL.js)',
              'Transactional Integrity & Ledgers'
            ]}
            icon={Database}
            className="md:col-span-1"
          />

          {/* Card 5: Performance & Web Vitals (1 col) */}
          <BentoCard
            number="05"
            title="Performance Auditing"
            subtitle="Lighthouse 95+ scores, Core Web Vitals compliance, and zero layout shift."
            category="RUNTIME EFFICIENCY"
            specs={[
              'Sub-second Largest Contentful Paint',
              'Zero Cumulative Layout Shift (CLS)',
              'Tree-Shaking & Bundle Trimming',
              'Edge Caching & Compression'
            ]}
            icon={Zap}
            className="md:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}

