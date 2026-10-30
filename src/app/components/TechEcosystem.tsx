import { useState, useRef, useEffect } from 'react';
import { Layers, Terminal, Database, Cpu, Wrench } from 'lucide-react';

interface TechNode {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'tooling';
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const TECHNOLOGIES = [
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'Python', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'WebSockets', category: 'backend' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'FAISS Vector DB', category: 'ai' },
  { name: 'Google Gemini API', category: 'ai' },
  { name: 'scikit-learn NLP', category: 'ai' },
  { name: 'Speech AI / TTS', category: 'ai' },
  { name: 'Figma', category: 'tooling' },
  { name: 'Docker', category: 'tooling' },
  { name: 'Git & GitHub', category: 'tooling' },
  { name: 'Vercel Edge', category: 'tooling' }
];

export function TechEcosystem() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = 480);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 480;
    };
    window.addEventListener('resize', handleResize);

    // Initialize nodes with random positions and gentle velocities
    const nodes: TechNode[] = TECHNOLOGIES.map((tech) => ({
      name: tech.name,
      category: tech.category as any,
      x: Math.random() * (width - 120) + 60,
      y: Math.random() * (height - 120) + 60,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: 24
    }));

    // Pointer coordinates for gentle repulsion
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes within proximity radius
      const connectionRadius = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionRadius) {
            const alpha = (1 - dist / connectionRadius) * 0.15;
            const isHighlighted = 
              (activeCategory === 'all' || 
               nodes[i].category === activeCategory || 
               nodes[j].category === activeCategory);

            ctx.strokeStyle = isHighlighted ? `rgba(204, 255, 0, ${alpha * 2})` : `rgba(255, 255, 255, ${alpha * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        // Pointer repulsion
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          node.x += (dx / dist) * force * 2.5;
          node.y += (dy / dist) * force * 2.5;
        }

        // Velocity motion
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundary
        if (node.x < 50 || node.x > width - 50) node.vx *= -1;
        if (node.y < 40 || node.y > height - 40) node.vy *= -1;

        const isFiltered = activeCategory !== 'all' && node.category !== activeCategory;

        // Draw node pill/circle
        ctx.save();
        ctx.font = '11px monospace';
        const textWidth = ctx.measureText(node.name).width;
        const pillWidth = textWidth + 24;
        const pillHeight = 26;

        ctx.fillStyle = isFiltered ? '#121216' : '#1C1C22';
        ctx.strokeStyle = isFiltered 
          ? 'rgba(255, 255, 255, 0.05)' 
          : node.category === activeCategory 
            ? '#CCFF00' 
            : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;

        // Draw rounded pill
        ctx.beginPath();
        ctx.roundRect(node.x - pillWidth / 2, node.y - pillHeight / 2, pillWidth, pillHeight, 13);
        ctx.fill();
        ctx.stroke();

        // Draw node label
        ctx.fillStyle = isFiltered ? '#52525B' : (node.category === activeCategory ? '#CCFF00' : '#F4F4F6');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.x, node.y);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeCategory]);

  return (
    <section id="ecosystem" className="relative py-32 px-6 bg-[#09090B] border-t border-white/[0.06] overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase">
                08 / TECHNOLOGY STACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              Interactive <span className="font-semibold text-white">Technology Ecosystem</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            Move your cursor through the node constellation to inspect TriCodeX's verified technology stack.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' },
            { id: 'database', label: 'Database' },
            { id: 'ai', label: 'AI & ML' },
            { id: 'tooling', label: 'Infrastructure & Tools' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#CCFF00] text-[#09090B] border-[#CCFF00] font-semibold'
                  : 'bg-white/[0.04] text-[#9CA3AF] border-white/[0.08] hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Canvas Constellation Visualizer */}
        <div className="relative rounded-3xl bg-[#0F0F12] border border-white/[0.08] overflow-hidden shadow-2xl p-4">
          <canvas 
            ref={canvasRef} 
            className="w-full block cursor-crosshair"
            height={480}
          />

          {/* Hint Overlay */}
          <div className="absolute bottom-4 right-6 pointer-events-none">
            <span className="text-[11px] font-mono text-[#9CA3AF]/60 tracking-wider uppercase">
              ✦ Interactive Physics Constellation // Proximity Reactive
            </span>
          </div>
        </div>

        {/* Mobile / Screen Reader Accessible Category Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { title: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Vite'] },
            { title: 'Backend', items: ['Python', 'Django', 'Node.js', 'FastAPI', 'WebSockets'] },
            { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'FAISS', 'SQL.js'] },
            { title: 'AI & ML', items: ['Gemini LLM', 'scikit-learn', 'Vector Search', 'NLP'] },
            { title: 'Infrastructure', items: ['Docker', 'Vercel', 'Git / GitHub', 'Figma'] }
          ].map((grp) => (
            <div key={grp.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-[#CCFF00] font-semibold block mb-2 uppercase">
                {grp.title}
              </span>
              <ul className="space-y-1 text-xs text-[#9CA3AF] font-mono">
                {grp.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

