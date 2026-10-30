import { useState, useRef, MouseEvent } from 'react';
import { 
  Code2, 
  Terminal, 
  ShoppingBag, 
  Layout, 
  Gauge, 
  Cpu, 
  ArrowUpRight, 
  CheckCircle2, 
  X, 
  Sparkles 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  icon: typeof Code2;
  fullDesc: string;
  capabilities: string[];
  deliverables: string[];
  architectureFocus: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    category: 'FULL-STACK ENGINEERING',
    shortDesc: 'Custom web platforms, SaaS applications, and interactive portals built with modern TypeScript, React, and modular backend APIs.',
    icon: Code2,
    fullDesc: 'We develop bespoke web applications engineered for speed, clean code maintenance, and long-term scalability. Every application is built with modern component architectures, type-safe APIs, and responsive layouts.',
    capabilities: [
      'React & Next.js Single Page Applications',
      'RESTful & GraphQL API Integrations',
      'Complex State Management & Caching',
      'Server-Side Rendering (SSR) & Static Generation'
    ],
    deliverables: [
      'Production-Ready Web Application',
      'Comprehensive Component Library',
      'Automated CI/CD Deployment Pipelines',
      'Developer Documentation & API Specs'
    ],
    architectureFocus: 'Component modularity, sub-second TTFB, and zero-redundancy dependency graphs.'
  },
  {
    id: 'custom-software',
    number: '02',
    title: 'Custom Software',
    category: 'ENTERPRISE SYSTEMS',
    shortDesc: 'Tailor-made software solutions, internal ERPs, spatial GIS engines, and automation systems aligned with operational workflows.',
    icon: Terminal,
    fullDesc: 'When off-the-shelf software falls short, we engineer tailor-made enterprise systems that automate internal business workflows, process complex domain data (e.g. GIS spatial vectors), and streamline operations.',
    capabilities: [
      'Domain-Specific Enterprise ERPs',
      'Microservice & REST API Systems',
      'Spatial & Geospatial Vector Engines',
      'Role-Based Access Control (RBAC)'
    ],
    deliverables: [
      'Custom Enterprise Web Platform',
      'Database Architecture & Migrations',
      'Secure User Authentication & Roles',
      'Operational Dashboards & Audit Logging'
    ],
    architectureFocus: 'Transactional data integrity, audit trails, and resilient service boundaries.'
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-commerce Solutions',
    category: 'COMMERCE ARCHITECTURE',
    shortDesc: 'High-converting digital storefronts, customized checkout funnels, payment integrations, and live inventory sync.',
    icon: ShoppingBag,
    fullDesc: 'We architect frictionless online commerce experiences with lightning-fast catalog search, dynamic cart state management, secure payment gateway integrations, and real-time inventory management.',
    capabilities: [
      'High-Speed Storefronts & Catalogs',
      'Secure Multi-Gateway Payment Processing',
      'Real-Time Inventory Synchronization',
      'Custom Checkout & Promo Code Engines'
    ],
    deliverables: [
      'Fully Branded Digital Storefront',
      'Payment Gateway Integrations (Stripe/Razorpay)',
      'Admin Inventory & Order Management Dashboard',
      'Automated Transactional Emails & Receipts'
    ],
    architectureFocus: 'Sub-second checkout transactions and PCI-compliant security architectures.'
  },
  {
    id: 'ui-ux',
    number: '04',
    title: 'UI/UX Engineering',
    category: 'PRODUCT DESIGN SYSTEMS',
    shortDesc: 'Distinctive visual identities, design systems, wireframing, and interactive prototypes built for intuitive digital experiences.',
    icon: Layout,
    fullDesc: 'Great design is engineering made visible. We produce complete design systems, high-fidelity prototypes in Figma, and micro-interaction specifications that prioritize clarity, brand personality, and usability.',
    capabilities: [
      'Figma Design Systems & Token Architecture',
      'Wireframing & Interactive Prototyping',
      'Mobile-First Responsive Layouts',
      'Motion Design & Micro-Interaction Guidelines'
    ],
    deliverables: [
      'Complete Figma Component Design System',
      'High-Fidelity Interactive Prototypes',
      'Typography & Color Palette Guidelines',
      'Asset Packages & Production SVGs'
    ],
    architectureFocus: 'Atomic design tokens, strict typographic grids, and accessibility standards (WCAG AA).'
  },
  {
    id: 'maintenance-optimization',
    number: '05',
    title: 'Maintenance & Optimization',
    category: 'PERFORMANCE & RELIABILITY',
    shortDesc: 'Core Web Vitals acceleration, database indexing, refactoring legacy codebases, and ongoing security audits.',
    icon: Gauge,
    fullDesc: 'We transform slow, outdated websites into ultra-fast, high-converting platforms. We diagnose performance bottlenecks, eliminate render-blocking code, audit dependencies, and ensure 99.9% uptime reliability.',
    capabilities: [
      'Core Web Vitals Optimization (LCP, INP, CLS)',
      'Bundle Size Reduction & Code Splitting',
      'Database Query Profiling & Indexing',
      'Security Vulnerability Remediation'
    ],
    deliverables: [
      'Comprehensive Lighthouse & Web Vitals Audit',
      'Accelerated Codebase & Asset Optimization',
      'Database Performance Tuning Report',
      'Monthly Maintenance & Monitoring Schedule'
    ],
    architectureFocus: '90+ Google PageSpeed score targets and zero layout shift.'
  },
  {
    id: 'ai-automation',
    number: '06',
    title: 'AI & Automation',
    category: 'INTELLIGENT SYSTEMS',
    shortDesc: 'Custom AI agent workflows, vector search similarity engines, LLM integrations, and automated operational pipelines.',
    icon: Cpu,
    fullDesc: 'We integrate cutting-edge machine learning and generative AI into real-world applications. From FAISS vector databases for semantic ticket deduplication to custom NLP pipelines, we make AI practical and reliable.',
    capabilities: [
      'FAISS Vector Embeddings & Similarity Search',
      'Google Gemini & OpenAI LLM Integration',
      'NLP Classification & Phishing Detection',
      'Automated Background Task Orchestration'
    ],
    deliverables: [
      'Trained/Fine-Tuned AI Microservices',
      'Vector Search Query Endpoints',
      'Agentic Workflow Automation Pipelines',
      'API Integration Middleware & Fallbacks'
    ],
    architectureFocus: 'Deterministic AI execution, rate-limit resilience, and minimal token latency.'
  }
];

function ServiceCard({ 
  service, 
  onSelect 
}: { 
  service: ServiceItem; 
  onSelect: (s: ServiceItem) => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

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

    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setSpotlight(prev => ({ ...prev, active: false }));
  };

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(service)}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
      className="relative rounded-3xl bg-[#15151A] border border-white/[0.08] hover:border-[#CCFF00]/40 p-8 transition-colors cursor-pointer group flex flex-col justify-between overflow-hidden shadow-lg"
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
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-mono tracking-widest text-[#CCFF00] font-semibold">
            {service.number} //
          </span>
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]/40 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <span className="text-[11px] font-mono tracking-wider text-[#9CA3AF] uppercase block mb-2">
          {service.category}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-[#F4F4F6] mb-4 tracking-tight group-hover:text-white">
          {service.title}
        </h3>
        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 font-light">
          {service.shortDesc}
        </p>

        {/* Feature Badges */}
        <div className="space-y-2 mb-6">
          {service.capabilities.slice(0, 2).map((cap, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
              <span className="truncate">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9CA3AF] group-hover:text-[#CCFF00] transition-colors">
        <span>VIEW CAPABILITY SPECS</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  );
}

export function ServicesMatrix() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-32 px-6 bg-[#09090B] border-t border-white/[0.06] overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
                03 / CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Engineering <span className="font-semibold text-white">Services Matrix</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            Architectural software solutions tailored to ambitious startups and operational businesses requiring dependable technical execution.
          </p>
        </div>

        {/* 3-Column x 2-Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onSelect={setSelectedService} 
            />
          ))}
        </div>
      </div>

      {/* Detail Modal / Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div 
            className="relative w-full max-w-2xl rounded-3xl bg-[#15151A] border border-white/[0.12] p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-[#F4F4F6]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#CCFF00] font-semibold tracking-wider">
                {selectedService.number} // SPECIFICATION
              </span>
              <span className="text-xs font-mono text-[#9CA3AF] tracking-wider uppercase">
                {selectedService.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {selectedService.title}
            </h3>

            <p className="text-base text-[#9CA3AF] leading-relaxed mb-8 font-light">
              {selectedService.fullDesc}
            </p>

            {/* Architectural Focus */}
            <div className="mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-xs font-mono uppercase text-[#CCFF00] block mb-1">
                Architectural Focus:
              </span>
              <p className="text-sm text-gray-300 font-light">
                {selectedService.architectureFocus}
              </p>
            </div>

            {/* Dual Grid: Capabilities & Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xs font-mono uppercase text-[#9CA3AF] mb-3 tracking-wider">
                  Core Engineering Scope
                </h4>
                <ul className="space-y-2">
                  {selectedService.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#9CA3AF] mb-3 tracking-wider">
                  Client Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <Sparkles className="w-4 h-4 text-[#D4FF3F] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#9CA3AF]">
                Ready to scope this service for your business?
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#09090B] font-semibold text-xs tracking-wider uppercase font-mono hover:bg-[#D4FF3F] transition-colors text-center"
              >
                REQUEST SCOPE CONSULTATION
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

