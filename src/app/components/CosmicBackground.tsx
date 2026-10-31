import { useEffect, useState } from 'react';

interface ShootingStarData {
  id: number;
  top: number;
  left: number;
  angle: number;
  length: number;
  speed: number;
}

export function CosmicBackground() {
  const [activeStar, setActiveStar] = useState<ShootingStarData | null>(null);

  // Periodically spawn shooting stars one by one from random locations and angles
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const spawnStar = () => {
      // Random starting coordinates across top & mid sections of viewport
      const top = Math.random() * 65; // 0% to 65% of viewport height
      const left = Math.random() * 85; // 0% to 85% of viewport width
      const angle = 35 + Math.random() * 30; // 35 to 65 degrees diagonal
      const length = 120 + Math.random() * 100; // 120px to 220px streak length
      const speed = 0.8 + Math.random() * 0.7; // 0.8s to 1.5s duration

      setActiveStar({
        id: Date.now(),
        top,
        left,
        angle,
        length,
        speed
      });

      // Clear star after streak animation finishes, and schedule the next shooting star
      const nextDelay = 3000 + Math.random() * 4500; // Next star fires 3 to 7.5 seconds later
      timeoutId = setTimeout(() => {
        setActiveStar(null);
        timeoutId = setTimeout(spawnStar, 600);
      }, speed * 1000 + 400);
    };

    // Initial shooting star spawns 1.5 seconds after load
    timeoutId = setTimeout(spawnStar, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* ============================================================== */}
      {/* 1. THREE-TIER HIGH-BRIGHTNESS CONTINUOUS TWINKLING STARS       */}
      {/* ============================================================== */}
      <div className="stars-layer-1" />
      <div className="stars-layer-2" />
      <div className="stars-layer-3" />

      {/* ============================================================== */}
      {/* 2. DEEP SPACE GALAXIES IN THE BACKGROUND                       */}
      {/* ============================================================== */}
      {/* GALAXY 1: Majestic Andromeda Spiral Galaxy (Upper Right) */}
      <div 
        className="absolute top-[8%] right-[5%] w-[580px] h-[360px] pointer-events-none opacity-45 mix-blend-screen"
        style={{
          transform: 'rotate(-25deg)',
          animation: 'galaxy-slow-spin 180s linear infinite'
        }}
      >
        {/* Core Luminous Nucleus */}
        <div 
          className="absolute inset-0 rounded-[50%]"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(186,230,253,0.7) 12%, rgba(56,189,248,0.35) 30%, rgba(99,102,241,0.18) 55%, transparent 75%)'
          }}
        />

        {/* Spiral Dust Arms SVG */}
        <svg className="w-full h-full filter blur-[1px] opacity-75" viewBox="0 0 580 360">
          <ellipse cx="290" cy="180" rx="270" ry="140" fill="none" stroke="rgba(147, 197, 253, 0.2)" strokeWidth="18" />
          <ellipse cx="290" cy="180" rx="210" ry="105" fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="24" />
          <ellipse cx="290" cy="180" rx="140" ry="70" fill="none" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="20" />
          <ellipse cx="290" cy="180" rx="70" ry="35" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="12" />
        </svg>
      </div>

      {/* GALAXY 2: Violet Pinwheel Galaxy (Mid-Lower Sector) */}
      <div 
        className="absolute top-[52%] left-[-5%] w-[640px] h-[420px] pointer-events-none opacity-35 mix-blend-screen"
        style={{
          transform: 'rotate(35deg)',
          animation: 'galaxy-slow-spin 220s linear infinite reverse'
        }}
      >
        {/* Violet Core */}
        <div 
          className="absolute inset-0 rounded-[50%]"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(244,114,182,0.65) 15%, rgba(168,85,247,0.3) 38%, rgba(79,70,229,0.15) 60%, transparent 75%)'
          }}
        />

        {/* Outer Cosmic Dust Ring */}
        <svg className="w-full h-full filter blur-[1.5px] opacity-65" viewBox="0 0 640 420">
          <ellipse cx="320" cy="210" rx="290" ry="160" fill="none" stroke="rgba(192, 132, 252, 0.22)" strokeWidth="25" />
          <ellipse cx="320" cy="210" rx="200" ry="110" fill="none" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="18" />
          <ellipse cx="320" cy="210" rx="110" ry="60" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="14" />
        </svg>
      </div>

      {/* GALAXY 3: Distant Emerald Nebular Cluster (Bottom Right) */}
      <div 
        className="absolute top-[82%] right-[2%] w-[480px] h-[320px] pointer-events-none opacity-30 mix-blend-screen"
        style={{
          transform: 'rotate(-15deg)',
          animation: 'galaxy-slow-spin 190s linear infinite'
        }}
      >
        <div 
          className="absolute inset-0 rounded-[50%]"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.85) 0%, rgba(52,211,153,0.5) 18%, rgba(6,182,212,0.25) 45%, transparent 75%)'
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* 3. DYNAMIC SHOOTING STARS (LOAD ONE BY ONE FROM RANDOM PLACES)  */}
      {/* ============================================================== */}
      {activeStar && (
        <div
          key={activeStar.id}
          className="absolute pointer-events-none"
          style={{
            top: `${activeStar.top}%`,
            left: `${activeStar.left}%`,
            transform: `rotate(${activeStar.angle}deg)`,
            transformOrigin: '0% 0%'
          }}
        >
          {/* Shooting Star Head & Trail Streak */}
          <div
            className="relative flex items-center"
            style={{
              animation: `shooting-star-anim ${activeStar.speed}s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`
            }}
          >
            {/* Trailing Tail Streak */}
            <div
              className="h-[2px] rounded-l-full bg-gradient-to-r from-transparent via-cyan-300 via-sky-200 to-white"
              style={{
                width: `${activeStar.length}px`,
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 8px rgba(56, 189, 248, 0.7))'
              }}
            />
            {/* Glowing Meteor Head */}
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_16px_#38bdf8,0_0_24px_#38bdf8]" />
          </div>
        </div>
      )}

      {/* Fallback CSS Staggered Shooting Stars (Continuous Ambient Cascade) */}
      <div className="ambient-meteor ambient-meteor-1" />
      <div className="ambient-meteor ambient-meteor-2" />
      <div className="ambient-meteor ambient-meteor-3" />
    </div>
  );
}
