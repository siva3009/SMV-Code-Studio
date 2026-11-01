import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { 
  RotateCw, 
  Play, 
  Pause, 
  Layers, 
  Cpu, 
  Database, 
  Terminal, 
  Sparkles, 
  Activity, 
  Code2, 
  Server, 
  Brain, 
  Boxes, 
  Wrench,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'database' | 'devops';
  role: string;
  projects: string[];
  color: string;
  glow: string;
  connections: string[];
}

const TECHNOLOGIES: TechItem[] = [
  // FRONTEND & INTERACTION
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    role: 'Type-Safe Architecture & Rigorous Interfaces',
    projects: ['Aethon Sentinel', 'Nouf\' X Architects', 'SQL Tutor Bot'],
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    connections: ['react', 'nextjs', 'vite', 'nodejs']
  },
  {
    id: 'react',
    name: 'React 18/19',
    category: 'frontend',
    role: 'Component Architecture & State Orchestration',
    projects: ['Aethon Sentinel', 'Construction ERP', 'Palash AI'],
    color: '#22D3EE',
    glow: 'rgba(34, 211, 238, 0.45)',
    connections: ['typescript', 'tailwindcss', 'vite', 'nextjs']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    role: 'Server-Side Rendering & Edge Optimization',
    projects: ['Nouf\' X Architects', 'DeviceCensus'],
    color: '#F4F4F6',
    glow: 'rgba(244, 244, 246, 0.35)',
    connections: ['react', 'typescript', 'vercel']
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    role: 'Design Tokens & High-Fidelity Fluid Layouts',
    projects: ['Aethon Sentinel', 'Nouf\' X Architects', 'Cricket Conquest'],
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    connections: ['react', 'figma']
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    role: 'Sub-Second HMR & Production Rollup Bundling',
    projects: ['Aethon Sentinel', 'TriCodeX Core Studio'],
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.4)',
    connections: ['react', 'typescript']
  },
  {
    id: 'figma',
    name: 'Figma UI/UX',
    category: 'frontend',
    role: 'Design Systems, Micro-Interactions & Prototyping',
    projects: ['Nebula Workspace', 'Nouf\' X Architects'],
    color: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.4)',
    connections: ['tailwindcss', 'react']
  },
  {
    id: 'webassembly',
    name: 'WebAssembly',
    category: 'frontend',
    role: 'High-Performance Client-Side Sandboxing',
    projects: ['Aethon Sentinel Proctoring'],
    color: '#818CF8',
    glow: 'rgba(129, 140, 248, 0.4)',
    connections: ['typescript', 'python']
  },

  // BACKEND & SYSTEMS
  {
    id: 'python',
    name: 'Python 3.11+',
    category: 'backend',
    role: 'Resilient Microservices, Math & AI Pipelines',
    projects: ['Smart Issue Tracker AI', 'SlabSense AI', 'Palash AI'],
    color: '#CCFF00',
    glow: 'rgba(204, 255, 0, 0.45)',
    connections: ['django', 'fastapi', 'gemini', 'faiss', 'scikit']
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    role: 'Robust ORM, Auth Protocols & Enterprise APIs',
    projects: ['Construction Management ERP', 'Smart Issue Tracker AI'],
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.4)',
    connections: ['python', 'postgresql', 'websockets']
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    role: 'Asynchronous Vector & Model Inference Endpoints',
    projects: ['Palash AI Engine', 'SlabSense AI'],
    color: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.4)',
    connections: ['python', 'faiss', 'gemini']
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    role: 'Event-Driven Real-Time Runtimes & Orchestration',
    projects: ['Cricket Conquest Auction', 'Symposium Live'],
    color: '#22C55E',
    glow: 'rgba(34, 197, 94, 0.4)',
    connections: ['typescript', 'mysql', 'websockets']
  },
  {
    id: 'websockets',
    name: 'WebSockets',
    category: 'backend',
    role: 'Sub-50ms Bidirectional State Synchronization',
    projects: ['Cricket Conquest Real-Time Auction', 'Symposium Live'],
    color: '#EAB308',
    glow: 'rgba(234, 179, 8, 0.4)',
    connections: ['django', 'nodejs', 'react']
  },

  // AI & NEURAL SYSTEMS
  {
    id: 'gemini',
    name: 'Google Gemini API',
    category: 'ai',
    role: 'Multimodal LLM Reasoning & Code Generation',
    projects: ['SQL Tutor Bot', 'Smart Issue Tracker AI'],
    color: '#60A5FA',
    glow: 'rgba(96, 165, 250, 0.45)',
    connections: ['python', 'fastapi', 'faiss']
  },
  {
    id: 'faiss',
    name: 'FAISS Vector DB',
    category: 'ai',
    role: 'Sub-Millisecond Dense Semantic Vector Indexing',
    projects: ['Smart Issue Tracker AI', 'SQL Tutor Bot'],
    color: '#CCFF00',
    glow: 'rgba(204, 255, 0, 0.45)',
    connections: ['python', 'gemini', 'django']
  },
  {
    id: 'speechai',
    name: 'Offline Speech AI',
    category: 'ai',
    role: 'Edge Speech-to-Speech & Neural Phoneme Parsing',
    projects: ['Palash AI Translator'],
    color: '#F43F5E',
    glow: 'rgba(244, 63, 94, 0.45)',
    connections: ['python', 'scikit']
  },
  {
    id: 'scikit',
    name: 'scikit-learn NLP',
    category: 'ai',
    role: 'Statistical Regression, Tokenization & Feature Engineering',
    projects: ['SlabSense Deflection AI', 'Palash AI'],
    color: '#FB923C',
    glow: 'rgba(251, 146, 60, 0.4)',
    connections: ['python', 'speechai']
  },

  // DATABASES & STORAGE
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    role: 'ACID Relational Architecture & Complex Indexing',
    projects: ['Smart Issue Tracker AI', 'SlabSense AI'],
    color: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.4)',
    connections: ['django', 'python']
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    role: 'High-Throughput Relational Storage & Multi-Tenant Data',
    projects: ['Construction Management ERP', 'Aethon Sentinel'],
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.4)',
    connections: ['nodejs', 'python']
  },
  {
    id: 'gis',
    name: 'Spatial GIS DB',
    category: 'database',
    role: 'Geospatial Node Clustering & Hardware Topology',
    projects: ['DeviceCensus Network Map'],
    color: '#14B8A6',
    glow: 'rgba(20, 184, 166, 0.4)',
    connections: ['python', 'postgresql']
  },

  // INFRASTRUCTURE & DEVOPS
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    role: 'Containerized Reproducibility & Multi-Stage Builds',
    projects: ['Palash AI', 'Smart Issue Tracker AI', 'SlabSense AI'],
    color: '#0EA5E9',
    glow: 'rgba(14, 165, 233, 0.4)',
    connections: ['python', 'django', 'nodejs']
  },
  {
    id: 'vercel',
    name: 'Vercel Edge',
    category: 'devops',
    role: 'Global Edge CDN, Serverless Runtimes & Zero-Config CI/CD',
    projects: ['Aethon Sentinel', 'Nouf\' X Architects', 'TriCodeX'],
    color: '#F4F4F6',
    glow: 'rgba(244, 244, 246, 0.35)',
    connections: ['nextjs', 'react']
  },
  {
    id: 'git',
    name: 'Git & GitHub CI',
    category: 'devops',
    role: 'Trunk-Based Collaboration & Automated Quality Gates',
    projects: ['All 10 Verified Studio Repositories'],
    color: '#CCFF00',
    glow: 'rgba(204, 255, 0, 0.45)',
    connections: ['typescript', 'python', 'docker']
  }
];

interface Point3D {
  x: number;
  y: number;
  z: number;
  item: TechItem;
}

export function TechEcosystem() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECHNOLOGIES[0]);
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // 3D Rotation angles and velocities
  const rotationRef = useRef({ x: 0.25, y: 0.35 });
  const velocityRef = useRef({ x: 0, y: 0.0035 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  // Generate 3D Spherical Distribution using Fibonacci Lattice
  const points3D = useMemo<Point3D[]>(() => {
    const count = TECHNOLOGIES.length;
    const radius = 230;
    const points: Point3D[] = [];

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i + 1) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      points.push({
        x,
        y,
        z,
        item: TECHNOLOGIES[i]
      });
    }
    return points;
  }, []);

  // Set category filter and adjust camera angle to highlight relevant nodes
  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    if (catId !== 'all') {
      const match = TECHNOLOGIES.find(t => t.category === catId);
      if (match) setSelectedTech(match);
    }
  };

  // Main 3D Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Main 3D Render Loop
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 480;

      // Update rotation
      if (autoRotate && !isDraggingRef.current) {
        rotationRef.current.y += velocityRef.current.y;
      } else if (!isDraggingRef.current) {
        // Friction dampening
        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
      }

      const rx = rotationRef.current.x;
      const ry = rotationRef.current.y;

      const cosRx = Math.cos(rx);
      const sinRx = Math.sin(rx);
      const cosRy = Math.cos(ry);
      const sinRy = Math.sin(ry);

      ctx.clearRect(0, 0, width, height);

      // ==============================================================
      // 1. DRAW 3D AMBIENT ORBITAL RINGS & CENTRAL TRICODEX CORE
      // ==============================================================
      ctx.save();
      // Glowing Central Studio Core
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 70);
      coreGrad.addColorStop(0, 'rgba(204, 255, 0, 0.35)');
      coreGrad.addColorStop(0.3, 'rgba(56, 189, 248, 0.15)');
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 70, 0, Math.PI * 2);
      ctx.fill();

      // Core Solid Emblem
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 14, 0, Math.PI * 2);
      ctx.stroke();

      // Central core pulsing dot
      ctx.fillStyle = '#CCFF00';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fill();

      // 3D Orbital Gyroscope Inclination Rings
      const ringRadius = 240;
      const ringSteps = 60;
      const drawRing = (tiltAngle: number, strokeColor: string) => {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;
        ctx.beginPath();

        for (let s = 0; s <= ringSteps; s++) {
          const theta = (s / ringSteps) * Math.PI * 2;
          const origX = ringRadius * Math.cos(theta);
          const origY = ringRadius * Math.sin(theta) * Math.sin(tiltAngle);
          const origZ = ringRadius * Math.sin(theta) * Math.cos(tiltAngle);

          // Apply rotation
          const y1 = origY * cosRx - origZ * sinRx;
          const z1 = origY * sinRx + origZ * cosRx;
          const x2 = origX * cosRy + z1 * sinRy;
          const z2 = -origX * sinRy + z1 * cosRy;

          const scale = fov / (fov + z2 + 300);
          const px = centerX + x2 * scale;
          const py = centerY + y1 * scale;

          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      };

      drawRing(0, 'rgba(255, 255, 255, 0.05)');
      drawRing(Math.PI / 4, 'rgba(56, 189, 248, 0.07)');
      drawRing(-Math.PI / 4, 'rgba(204, 255, 0, 0.07)');
      ctx.restore();

      // ==============================================================
      // 2. PROJECT ALL 3D POINTS & SORT BY DEPTH (Z-BUFFER)
      // ==============================================================
      interface ProjectedNode {
        point: Point3D;
        x2d: number;
        y2d: number;
        z3d: number;
        scale: number;
        alpha: number;
        isTarget: boolean;
        isHighlighted: boolean;
      }

      const projected: ProjectedNode[] = points3D.map(pt => {
        // 3D rotation transform
        const y1 = pt.y * cosRx - pt.z * sinRx;
        const z1 = pt.y * sinRx + pt.z * cosRx;
        const x2 = pt.x * cosRy + z1 * sinRy;
        const z2 = -pt.x * sinRy + z1 * cosRy;

        const scale = fov / (fov + z2 + 300);
        const x2d = centerX + x2 * scale;
        const y2d = centerY + y1 * scale;

        // Depth fogging
        const alpha = Math.max(0.18, Math.min(1.0, (z2 + 250) / 480));
        const isTarget = selectedTech.id === pt.item.id || (hoveredTech !== null && hoveredTech.id === pt.item.id);
        const isCategoryMatch = activeCategory === 'all' || pt.item.category === activeCategory;
        const isConnection = 
          selectedTech.connections.includes(pt.item.id) || 
          (hoveredTech !== null && hoveredTech.connections.includes(pt.item.id));

        return {
          point: pt,
          x2d,
          y2d,
          z3d: z2,
          scale,
          alpha: isCategoryMatch ? alpha : alpha * 0.25,
          isTarget,
          isHighlighted: isTarget || isConnection
        };
      });

      // Sort by depth (back nodes first, front nodes last)
      projected.sort((a, b) => a.z3d - b.z3d);

      // ==============================================================
      // 3. DRAW 3D LASER CONNECTIONS BETWEEN NODES
      // ==============================================================
      const nodeMap = new Map<string, ProjectedNode>();
      projected.forEach(p => nodeMap.set(p.point.item.id, p));

      projected.forEach(node => {
        node.point.item.connections.forEach(targetId => {
          const target = nodeMap.get(targetId);
          if (!target) return;

          // Only draw each connection once (when node id is alphabetically lower)
          if (node.point.item.id < targetId) {
            const isConnectionActive = node.isHighlighted && target.isHighlighted;
            const avgAlpha = (node.alpha + target.alpha) / 2;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(node.x2d, node.y2d);
            ctx.lineTo(target.x2d, target.y2d);

            if (isConnectionActive) {
              ctx.strokeStyle = '#CCFF00';
              ctx.lineWidth = 1.8;
              ctx.shadowColor = '#CCFF00';
              ctx.shadowBlur = 8;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${avgAlpha * 0.12})`;
              ctx.lineWidth = 0.75;
            }
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // ==============================================================
      // 4. DRAW 3D FLOATING TECH CHIPS & HOLOGRAPHIC BADGES
      // ==============================================================
      projected.forEach(node => {
        const item = node.point.item;
        const isHovered = hoveredTech?.id === item.id;
        const isSelected = selectedTech.id === item.id;
        const isFocus = isHovered || isSelected;

        ctx.save();

        // Dynamic badge size based on 3D distance and focus state
        const baseWidth = 86;
        const baseHeight = 28;
        const nodeWidth = baseWidth * node.scale * (isFocus ? 1.25 : 1.0);
        const nodeHeight = baseHeight * node.scale * (isFocus ? 1.25 : 1.0);
        const x = node.x2d - nodeWidth / 2;
        const y = node.y2d - nodeHeight / 2;

        // Background chip
        ctx.beginPath();
        ctx.roundRect(x, y, nodeWidth, nodeHeight, 14 * node.scale);

        if (isFocus) {
          ctx.fillStyle = '#1C1C24';
          ctx.strokeStyle = '#CCFF00';
          ctx.lineWidth = 2 * node.scale;
          ctx.shadowColor = '#CCFF00';
          ctx.shadowBlur = 14;
        } else if (node.isHighlighted) {
          ctx.fillStyle = '#15151A';
          ctx.strokeStyle = item.color;
          ctx.lineWidth = 1.2 * node.scale;
          ctx.shadowColor = item.color;
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(21, 21, 26, ${node.alpha * 0.95})`;
          ctx.strokeStyle = `rgba(255, 255, 255, ${node.alpha * 0.2})`;
          ctx.lineWidth = 1 * node.scale;
        }

        ctx.fill();
        ctx.stroke();

        // Category Color Indicator Dot
        const dotRadius = 3.5 * node.scale;
        const dotX = x + 12 * node.scale;
        const dotY = node.y2d;
        ctx.beginPath();
        ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = item.color;
        ctx.fill();

        // Node Label
        const fontSize = Math.max(9, Math.round(11 * node.scale * (isFocus ? 1.15 : 1.0)));
        ctx.font = `${isFocus ? 'bold' : 'normal'} ${fontSize}px 'Inter', monospace, sans-serif`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isFocus ? '#CCFF00' : (node.alpha < 0.35 ? '#71717A' : '#F4F4F6');
        ctx.fillText(item.name, dotX + 7 * node.scale, dotY);

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [points3D, selectedTech, hoveredTech, activeCategory, autoRotate]);

  // Pointer Interaction Handlers for 3D Orbit Drag & Hover Detection
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDraggingRef.current) {
      const dx = e.clientX - lastMousePosRef.current.x;
      const dy = e.clientY - lastMousePosRef.current.y;

      velocityRef.current = {
        x: -dy * 0.005,
        y: dx * 0.005
      };

      rotationRef.current.x += velocityRef.current.x;
      rotationRef.current.y += velocityRef.current.y;

      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      return;
    }

    // Raycast hit testing for 3D node hovering
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const fov = 480;

    const rx = rotationRef.current.x;
    const ry = rotationRef.current.y;
    const cosRx = Math.cos(rx);
    const sinRx = Math.sin(rx);
    const cosRy = Math.cos(ry);
    const sinRy = Math.sin(ry);

    let found: TechItem | null = null;
    let closestZ = -Infinity;

    for (const pt of points3D) {
      const y1 = pt.y * cosRx - pt.z * sinRx;
      const z1 = pt.y * sinRx + pt.z * cosRx;
      const x2 = pt.x * cosRy + z1 * sinRy;
      const z2 = -pt.x * sinRy + z1 * cosRy;

      const scale = fov / (fov + z2 + 300);
      const x2d = centerX + x2 * scale;
      const y2d = centerY + y1 * scale;

      const hitRadius = 38 * scale;
      const dist = Math.hypot(mouseX - x2d, mouseY - y2d);

      if (dist < hitRadius && z2 > closestZ) {
        closestZ = z2;
        found = pt.item;
      }
    }

    setHoveredTech(found);
  }, [points3D]);

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleCanvasClick = () => {
    if (hoveredTech) {
      setSelectedTech(hoveredTech);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (isDraggingRef.current && e.touches.length === 1) {
      const dx = e.touches[0].clientX - lastMousePosRef.current.x;
      const dy = e.touches[0].clientY - lastMousePosRef.current.y;

      velocityRef.current = {
        x: -dy * 0.005,
        y: dx * 0.005
      };

      rotationRef.current.x += velocityRef.current.x;
      rotationRef.current.y += velocityRef.current.y;

      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const activeDisplayTech = hoveredTech || selectedTech;

  return (
    <section 
      id="ecosystem" 
      ref={containerRef}
      className="relative py-32 px-6 bg-transparent text-[#F4F4F6] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] uppercase flex items-center gap-2">
                <Boxes className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '12s' }} />
                08 // 3D INTERACTIVE TECHNOLOGY ECOSYSTEM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F4F6] tracking-tight">
              3D Orbital <span className="font-semibold text-white">Technology Sphere</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed font-sans">
            A real-time 3D planetary matrix representing TriCodeX's verified tech stack. Drag to orbit the 3D globe or click nodes to inspect architectural roles and repository linkages.
          </p>
        </div>

        {/* 3D Category Filter Pills & Orbit Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {[
              { id: 'all', label: 'All Constellation (22)' },
              { id: 'frontend', label: 'Frontend & UI' },
              { id: 'backend', label: 'Backends & Systems' },
              { id: 'ai', label: 'AI & Neural Search' },
              { id: 'database', label: 'Databases & GIS' },
              { id: 'devops', label: 'Cloud & DevOps' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 font-mono text-xs flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#CCFF00] text-[#09090B] border-[#CCFF00] font-bold shadow-[0_0_15px_rgba(204,255,0,0.35)] scale-105'
                    : 'bg-[#15151A]/90 text-zinc-400 border-white/[0.08] hover:border-white/30 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* 3D Motion Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono border flex items-center gap-1.5 transition-colors ${
                autoRotate 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                  : 'bg-zinc-800 text-zinc-400 border-white/10'
              }`}
              title="Toggle Auto Orbit"
            >
              {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{autoRotate ? 'ORBIT ACTIVE' : 'ORBIT PAUSED'}</span>
            </button>

            <button
              onClick={() => {
                rotationRef.current = { x: 0.25, y: 0.35 };
                velocityRef.current = { x: 0, y: 0.0035 };
              }}
              className="p-2 rounded-full bg-[#15151A] border border-white/10 text-zinc-400 hover:text-white hover:border-[#CCFF00] transition-colors"
              title="Reset 3D Orientation"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3D SPATIAL CANVAS VISUALIZER + LIVE TELEMETRY INSPECTOR HUD    */}
        {/* ============================================================== */}
        <div className="grid grid-cols-12 gap-8 items-stretch">
          {/* LEFT 8 COLS: 3D INTERACTIVE SPHERE CANVAS */}
          <div className="col-span-12 lg:col-span-8 relative rounded-3xl bg-[#0E0E12] border border-white/[0.12] overflow-hidden shadow-2xl min-h-[520px] flex items-center justify-center group">
            {/* Ambient Nebula Glow Behind Sphere */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: `radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, rgba(204, 255, 0, 0.08) 35%, transparent 70%)`
              }}
            />

            {/* 3D Canvas */}
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onClick={handleCanvasClick}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="w-full h-full min-h-[520px] cursor-grab active:cursor-grabbing block"
            />

            {/* Interactive Overlay Hints */}
            <div className="absolute top-4 left-6 pointer-events-none flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                3D SPATIAL GYROSCOPE // 22 NODES
              </span>
            </div>

            <div className="absolute bottom-4 right-6 pointer-events-none text-right">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                ✦ Click & Drag to Orbit 360° // Click Node to Inspect
              </span>
            </div>
          </div>

          {/* RIGHT 4 COLS: TELEMETRY INSPECTOR HUD */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#131318] border border-white/[0.12] shadow-2xl relative overflow-hidden">
            {/* Top Chip Accent */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeDisplayTech.color }} />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  NODE // {activeDisplayTech.category.toUpperCase()}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.04] border border-white/[0.1] text-zinc-300">
                VERIFIED STACK
              </span>
            </div>

            {/* Selected Tech Identity */}
            <div className="space-y-4 my-auto">
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {activeDisplayTech.name}
                </h3>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.08]">
                <span className="text-[10px] font-mono text-[#CCFF00] uppercase block mb-1">
                  ARCHITECTURAL ROLE
                </span>
                <p className="text-xs text-zinc-200 leading-relaxed font-light">
                  {activeDisplayTech.role}
                </p>
              </div>

              {/* Linked Projects in TriCodeX */}
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                  VERIFIED IN TRICODEX PROJECTS ({activeDisplayTech.projects.length})
                </span>
                <div className="space-y-2">
                  {activeDisplayTech.projects.map((proj) => (
                    <div 
                      key={proj}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-300"
                    >
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{proj}</span>
                      </span>
                      <span className="text-[10px] text-zinc-500">LIVE</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline Laser Interconnects */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                  3D PIPELINE INTERCONNECTS ({activeDisplayTech.connections.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeDisplayTech.connections.map((cId) => {
                    const connItem = TECHNOLOGIES.find(t => t.id === cId);
                    if (!connItem) return null;
                    return (
                      <button
                        key={cId}
                        onClick={() => setSelectedTech(connItem)}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#1E1E26] hover:bg-[#CCFF00] hover:text-[#09090B] text-zinc-300 border border-white/[0.08] transition-colors"
                      >
                        {connItem.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Studio Signature */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>LATENCY: &lt;12ms</span>
              <span className="text-[#CCFF00]">PRODUCTION READY</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4 PERSPECTIVE 3D ARCHITECTURAL PILLAR CARDS                   */}
        {/* ============================================================== */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Code2,
              title: 'Frontend Systems',
              badge: 'LAYER 01',
              desc: 'High-performance React & TypeScript architectures with sub-second paint benchmarks, WebAssembly sandboxing, and design-system fidelity.',
              tools: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Vite', 'Figma']
            },
            {
              icon: Server,
              title: 'Backend Platforms',
              badge: 'LAYER 02',
              desc: 'Resilient Python and Django enterprise infrastructures, asynchronous FastAPI microservices, and sub-50ms WebSocket telemetry.',
              tools: ['Python 3.11', 'Django', 'FastAPI', 'Node.js', 'WebSockets']
            },
            {
              icon: Brain,
              title: 'Neural & AI Engines',
              badge: 'LAYER 03',
              desc: 'Custom offline neural speech pipelines, Google Gemini LLM reasoning agents, and sub-millisecond FAISS vector similarity search.',
              tools: ['Gemini API', 'FAISS Vector DB', 'Offline Speech AI', 'scikit-learn']
            },
            {
              icon: Database,
              title: 'Databases & Cloud',
              badge: 'LAYER 04',
              desc: 'ACID-compliant PostgreSQL, multi-tenant MySQL databases, Spatial GIS clustering, Docker containers, and edge deployment on Vercel.',
              tools: ['PostgreSQL', 'MySQL', 'Spatial GIS', 'Docker', 'Vercel']
            }
          ].map((pillar, pIdx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-3xl bg-[#131318] border border-white/[0.08] hover:border-[#CCFF00]/40 transition-all duration-300 shadow-xl group hover:-translate-y-1"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#CCFF00]/50 flex items-center justify-center text-[#CCFF00] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    {pillar.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#CCFF00] transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6 font-sans">
                  {pillar.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                  {pillar.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
