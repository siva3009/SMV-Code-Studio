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
      {/* 2. DYNAMIC SHOOTING STARS (LOAD ONE BY ONE FROM RANDOM PLACES)  */}
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
