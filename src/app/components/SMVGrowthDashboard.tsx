import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Star, TrendingUp, Zap } from 'lucide-react';

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const metricData = [
  {
    key: 'projects',
    label: 'Projects Completed',
    icon: CheckCircle2,
    value: 156,
    gradient: 'from-cyan-500 to-blue-600',
    sparkline: [18, 26, 22, 32, 28, 34, 40]
  },
  {
    key: 'clients',
    label: 'Happy Clients',
    icon: Star,
    value: 89,
    gradient: 'from-blue-500 to-purple-600',
    sparkline: [8, 14, 12, 18, 14, 20, 24]
  },
  {
    key: 'rating',
    label: 'Client Rating',
    icon: TrendingUp,
    value: 4.9,
    gradient: 'from-purple-500 to-pink-600',
    sparkline: [3.5, 3.8, 4.0, 4.2, 4.4, 4.7, 4.9]
  },
  {
    key: 'active',
    label: 'Active Projects',
    icon: Zap,
    value: 24,
    gradient: 'from-emerald-500 to-cyan-500',
    sparkline: [14, 16, 18, 20, 22, 24, 24]
  }
];

const recentProjects = [
  { name: 'E-Commerce Platform', status: 'Completed', color: '#10b981' },
  { name: 'Mobile App Design', status: 'In Progress', color: '#06b6d4' },
  { name: 'SaaS Dashboard', status: 'In Progress', color: '#06b6d4' },
  { name: 'Brand Identity', status: 'Completed', color: '#10b981' },
  { name: 'Website Redesign', status: 'Planning', color: '#f59e0b' }
];

const monthlyGrowth = [
  { month: 'Jan', value: 12 },
  { month: 'Feb', value: 15 },
  { month: 'Mar', value: 18 },
  { month: 'Apr', value: 24 },
  { month: 'May', value: 28 },
  { month: 'Jun', value: 32 }
];

export function SMVGrowthDashboard() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const glowRef1 = useRef<HTMLDivElement | null>(null);
  const glowRef2 = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, rating: 0, active: 0 });

  const maxSpark = useMemo(() => {
    return metricData.reduce((max, metric) => Math.max(max, ...metric.sparkline), 0);
  }, []);

  const line1Ref = useRef<SVGPathElement | null>(null);
  const line2Ref = useRef<SVGPathElement | null>(null);
  const tooltipRef = useRef<SVGGElement | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    label: string;
    value: number;
    color: string;
  } | null>(null);

  useEffect(() => {
    if (!tooltip) return;
    const tooltipEl = tooltipRef.current;
    if (!tooltipEl) return;

    gsap.fromTo(
      tooltipEl,
      { opacity: 0, y: 10, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.24, ease: 'power2.out' }
    );
  }, [tooltip]);

  const chartConfig = useMemo(() => {
    const width = 400;
    const height = 300;
    const padding = 32;
    const maxValue = Math.max(
      ...monthlyGrowth.map((m) => m.value),
      ...[12, 15, 18, 24, 28, 32].map((v) => v * 1.1) // projects dataset assumption
    );
    const xStep = (width - padding * 2) / (monthlyGrowth.length - 1);
    const yRange = height - padding * 2;

    const points = monthlyGrowth.map((point, index) => {
      const x = padding + xStep * index;
      const y = padding + yRange - (point.value / maxValue) * yRange;
      return { ...point, x, y };
    });

    const projects = [12, 15, 18, 24, 28, 32];
    const clients = [10, 14, 17, 20, 22, 26];

    const series1 = projects.map((value, index) => ({
      month: monthlyGrowth[index].month,
      value,
      x: points[index].x,
      y: padding + yRange - (value / maxValue) * yRange
    }));

    const series2 = clients.map((value, index) => ({
      month: monthlyGrowth[index].month,
      value,
      x: points[index].x,
      y: padding + yRange - (value / maxValue) * yRange
    }));

    const yTicks = Array.from({ length: 5 }, (_, i) => {
      const val = Math.round((maxValue / 4) * (4 - i));
      const y = padding + (yRange / 4) * i;
      return { value: val, y };
    });

    return { width, height, padding, points, series1, series2, yTicks };
  }, []);

  const getSmoothPath = (points: Array<{ x: number; y: number }>) => {
    if (!points.length) return '';
    const curve = (p1: any, p2: any, t = 0.2) => {
      const d = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      return {
        x: p1.x + (p2.x - p1.x) * t,
        y: p1.y + (p2.y - p1.y) * t
      };
    };

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const current = points[i];
      const next = points[i + 1] || current;
      const cp1 = curve(prev, current, 0.35);
      const cp2 = curve(current, next, 0.35);
      d += ` C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${current.x} ${current.y}`;
    }
    return d;
  };


  const animateCounters = useCallback(() => {
    const targets = { projects: 0, clients: 0, rating: 0, active: 0 };
    gsap.to(targets, {
      projects: 156,
      clients: 89,
      rating: 4.9,
      active: 24,
      duration: 2.3,
      ease: 'power2.out',
      onUpdate: () => {
        setCounts({
          projects: Math.floor(targets.projects),
          clients: Math.floor(targets.clients),
          rating: parseFloat(targets.rating.toFixed(1)),
          active: Math.floor(targets.active)
        });
      }
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const chart = chartRef.current;
    const path1 = line1Ref.current;
    const path2 = line2Ref.current;
    if (!section || !chart || !path1 || !path2) return;

    const cardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'bottom 20%',
        once: true
      }
    });

    cardTimeline.from(section.querySelectorAll('.dashboard-card'), {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power3.out',
      immediateRender: false
    });

    // Ensure chart fills container on resize
    const updateViewBox = () => {
      const chart = chartRef.current;
      if (!chart) return;
      const svg = chart.querySelector('svg');
      if (!svg) return;

      const rect = chart.getBoundingClientRect();
      svg.setAttribute('viewBox', `0 0 ${Math.round(rect.width)} ${Math.round(rect.height)}`);
    };

    const resizeObserver = new ResizeObserver(updateViewBox);
    updateViewBox();
    resizeObserver.observe(chart);

    const points = chart.querySelectorAll<SVGCircleElement>('.data-point');
    const lineLength1 = path1.getTotalLength();
    const lineLength2 = path2.getTotalLength();

    gsap.set(path1, { strokeDasharray: lineLength1, strokeDashoffset: lineLength1 });
    gsap.set(path2, { strokeDasharray: lineLength2, strokeDashoffset: lineLength2 });
    gsap.set(points, { scale: 0, opacity: 0, transformOrigin: 'center center' });
    gsap.set(chart, { opacity: 0, y: 20 });

    const chartTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: chart,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          if (!hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateCounters();
          }
        }
      },
      defaults: { ease: 'power2.out' }
    });

    chartTimeline
      .to(chart, { opacity: 1, y: 0, duration: 0.8 })
      .to(path1, { strokeDashoffset: 0, duration: 1.0 }, '<')
      .to(path2, { strokeDashoffset: 0, duration: 1.0 }, '<0.1')
      .to(points, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.08 }, '<0.2');

    return () => {
      cardTimeline.kill();
      chartTimeline.kill();
      resizeObserver.disconnect();
    };
  }, [animateCounters]);

  // Parallax glow effect on mouse move
  useEffect(() => {
    const section = sectionRef.current;
    const glow1 = glowRef1.current;
    const glow2 = glowRef2.current;
    if (!section || !glow1 || !glow2) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      gsap.to(glow1, {
        x: deltaX * 20,
        y: deltaY * 20,
        duration: 0.5,
        ease: 'power2.out'
      });

      gsap.to(glow2, {
        x: deltaX * -15,
        y: deltaY * -15,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-black overflow-visible gsap-section" id="smv-dashboard">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div ref={glowRef1} className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl opacity-30"></div>
        <div ref={glowRef2} className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              SMV Growth Dashboard
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: '-0.02em' }}>
            Studio Performance Metrics
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Real-time insights into our growth and client success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {metricData.map((metric, index) => {
            const Icon = metric.icon;
            const isRating = metric.key === 'rating';
            const displayValue = isRating
              ? counts.rating.toFixed(1)
              : counts[metric.key as 'projects' | 'clients' | 'active'];

            return (
              <div
                key={index}
                className="dashboard-card group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)] hover:bg-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl rounded-2xl`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {metric.label}
                    </div>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${metric.gradient} bg-opacity-20`}>
                      <Icon className="w-4 h-4 text-white opacity-70" />
                    </div>
                  </div>
                  <div className="text-4xl font-semibold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {displayValue}
                    {isRating && <span className="text-lg font-medium">/5</span>}
                  </div>
                  <div className="h-8 flex items-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {metric.sparkline.map((level, idx) => (
                      <div
                        key={idx}
                        className="sparkline-bar flex-1 rounded-t-lg bg-gradient-to-t from-cyan-400 to-blue-300"
                        data-target-height={`${(level / maxSpark) * 100}%`}
                        style={{
                          height: '0%',
                          minHeight: '2px'
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-cyan-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    ↗ +12% this month
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="dashboard-card lg:col-span-1 relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-6">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Recent Projects
              </h3>
              <div className="space-y-3">
                {recentProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                    <div>
                      <p className="text-sm text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.status}
                      </p>
                    </div>
                    <span className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="dashboard-card lg:col-span-2 relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 flex flex-col min-h-[450px]">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Monthly Growth
              </h3>
            </div>
              <div ref={chartRef} className="relative w-full h-64 opacity-0 translate-y-5">
                <svg viewBox="0 0 400 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="lineGradient1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="areaGradient1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                      <stop offset="80%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="areaGradient2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                      <stop offset="80%" stopColor="#a855f7" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid lines + Y labels */}
                  {chartConfig.yTicks.map((tick) => (
                    <g key={tick.value}>
                      <line
                        x1={chartConfig.padding}
                        x2={chartConfig.width - chartConfig.padding}
                        y1={tick.y}
                        y2={tick.y}
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="1"
                      />
                      <text
                        x={chartConfig.padding - 10}
                        y={tick.y + 4}
                        textAnchor="end"
                        fill="rgba(255,255,255,0.55)"
                        fontSize="10"
                        fontFamily="Inter, sans-serif"
                      >
                        {tick.value}
                      </text>
                    </g>
                  ))}

                  {/* X axis labels */}
                  {chartConfig.series1.map((point) => (
                    <text
                      key={point.month}
                      x={point.x}
                      y={chartConfig.height - chartConfig.padding + 18}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.55)"
                      fontSize="10"
                      fontFamily="Inter, sans-serif"
                    >
                      {point.month}
                    </text>
                  ))}

                  {/* Area fills */}
                  <path
                    d={`${getSmoothPath(chartConfig.series1)} L ${chartConfig.series1[chartConfig.series1.length - 1].x} ${chartConfig.height - chartConfig.padding} L ${chartConfig.series1[0].x} ${chartConfig.height - chartConfig.padding} Z`}
                    fill="url(#areaGradient1)"
                  />
                  <path
                    d={`${getSmoothPath(chartConfig.series2)} L ${chartConfig.series2[chartConfig.series2.length - 1].x} ${chartConfig.height - chartConfig.padding} L ${chartConfig.series2[0].x} ${chartConfig.height - chartConfig.padding} Z`}
                    fill="url(#areaGradient2)"
                  />

                  {/* Line paths */}
                  <path
                    ref={line1Ref}
                    d={getSmoothPath(chartConfig.series1)}
                    fill="none"
                    stroke="url(#lineGradient1)"
                    strokeWidth="2.5"
                    style={{ filter: 'drop-shadow(0 0 18px rgba(34, 211, 238, 0.6))' }}
                  />
                  <path
                    ref={line2Ref}
                    d={getSmoothPath(chartConfig.series2)}
                    fill="none"
                    stroke="url(#lineGradient2)"
                    strokeWidth="2.5"
                    style={{ filter: 'drop-shadow(0 0 18px rgba(168, 85, 247, 0.55))' }}
                  />

                  {/* Data points */}
                  {chartConfig.series1.map((point) => (
                    <circle
                      key={`p1-${point.month}`}
                      className="data-point cursor-pointer"
                      cx={point.x}
                      cy={point.y}
                      r="5"
                      fill="#22d3ee"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="1.5"
                      style={{
                        filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.55))',
                        transformOrigin: `${point.x}px ${point.y}px`
                      }}
                      onMouseEnter={(e) => {
                        setTooltip({ x: point.x, y: point.y, label: point.month, value: point.value, color: '#22d3ee' });
                        gsap.to(e.currentTarget, { scale: 1.3, duration: 0.2, ease: 'power2.out' });
                      }}
                      onMouseLeave={(e) => {
                        setTooltip(null);
                        gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: 'power2.out' });
                      }}
                    />
                  ))}
                  {chartConfig.series2.map((point) => (
                    <circle
                      key={`p2-${point.month}`}
                      className="data-point cursor-pointer"
                      cx={point.x}
                      cy={point.y}
                      r="5"
                      fill="#a855f7"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="1.5"
                      style={{
                        filter: 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.55))',
                        transformOrigin: `${point.x}px ${point.y}px`
                      }}
                      onMouseEnter={(e) => {
                        setTooltip({ x: point.x, y: point.y, label: point.month, value: point.value, color: '#a855f7' });
                        gsap.to(e.currentTarget, { scale: 1.3, duration: 0.2, ease: 'power2.out' });
                      }}
                      onMouseLeave={(e) => {
                        setTooltip(null);
                        gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: 'power2.out' });
                      }}
                    />
                  ))}

                  {tooltip && (
                    <g
                      ref={tooltipRef}
                      className="pointer-events-none"
                      style={{ opacity: 0, transform: `translate(${tooltip.x}px, ${tooltip.y - 18}px) scale(0.8)` }}
                    >
                      <rect x={-36} y={-30} width={72} height={24} rx={10} fill="rgba(0,0,0,0.85)" />
                      <text x="0" y="-14" fill={tooltip.color} fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">
                        {tooltip.label}
                      </text>
                      <text x="0" y="-4" fill="#fff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="Inter, sans-serif">
                        {tooltip.value}
                      </text>
                    </g>
                  )}
                </svg>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
