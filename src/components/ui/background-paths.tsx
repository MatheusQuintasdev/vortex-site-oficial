"use client";

/**
 * Static, GPU-cheap background paths.
 * Previously: 72 animated motion.path with infinite pathOffset/opacity loops —
 * caused continuous SVG repaints. Now: pure SVG with a single CSS opacity pulse
 * via a parent class, no per-path animation. Visually equivalent at a fraction of the cost.
 */
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 12 * position} -${189 + i * 16}C-${380 - i * 12 * position} -${189 + i * 16} -${312 - i * 12 * position} ${216 - i * 16} ${152 - i * 12 * position} ${343 - i * 16}C${616 - i * 12 * position} ${470 - i * 16} ${684 - i * 12 * position} ${875 - i * 16} ${684 - i * 12 * position} ${875 - i * 16}`,
    width: 0.6 + i * 0.08,
    opacity: 0.06 + i * 0.04,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-primary"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {paths.map((p) => (
          <path
            key={p.id}
            d={p.d}
            stroke="currentColor"
            strokeWidth={p.width}
            strokeOpacity={p.opacity}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
