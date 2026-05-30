"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollExpandHeroProps {
  kicker?: string;
  titleLeft: ReactNode;
  titleRight: ReactNode;
  subtitle?: string;
  scrollHint?: string;
  children: ReactNode;
  bgClassName?: string;
  className?: string;
}

/**
 * Contained scroll-expansion hero. Title sits centered, the media card sits
 * below it at a small starting size, and as the user scrolls through the
 * section the title fades + slides out while the card scales up to fill the
 * viewport. Uses useScroll on the section ref — does NOT hijack window scroll.
 */
export function ScrollExpansionHero({
  kicker,
  titleLeft,
  titleRight,
  subtitle,
  scrollHint = "Role para expandir",
  children,
  bgClassName,
  className,
}: ScrollExpandHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Title animation: slides out and fades during first 50% of scroll
  const titleXLeft = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const titleXRight = useTransform(scrollYProgress, [0, 0.5], [0, 120]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  // Card animation: scales from small → large
  const cardScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.7]);
  const cardY = useTransform(scrollYProgress, [0, 0.7], [0, -40]);
  const cardRadius = useTransform(scrollYProgress, [0, 0.7], [24, 8]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const safeTitleX = reduced ? 0 : titleXLeft;
  const safeTitleXRight = reduced ? 0 : titleXRight;
  const safeTitleScale = reduced ? 1 : titleScale;
  const safeCardScale = reduced ? 1 : cardScale;
  const safeCardY = reduced ? 0 : cardY;

  return (
    <section
      ref={sectionRef}
      className={cn("relative w-full hidden md:block", className)}
      style={{ height: "160vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Background */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-background via-zinc-950 to-background",
            bgClassName,
          )}
        >
          <div className="absolute inset-0 bg-mesh opacity-30" />
        </div>

        {/* Stage: vertical stack — title on top, card below */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center gap-6 md:gap-10">
          {/* Title block */}
          <motion.div
            style={{ opacity: titleOpacity, scale: safeTitleScale }}
            className="flex flex-col items-center text-center pointer-events-none"
          >
            {kicker && (
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
                {kicker}
              </span>
            )}
            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4">
              <motion.h2
                style={{ x: safeTitleX }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05]"
              >
                {titleLeft}
              </motion.h2>
              <motion.h2
                style={{ x: safeTitleXRight }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gradient leading-[1.05]"
              >
                {titleRight}
              </motion.h2>
            </div>
            {subtitle && (
              <p className="mt-4 max-w-xl text-white/60 text-sm md:text-base px-4">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Expanding card — starts as a small device-like preview */}
          <motion.div
            style={{
              scale: safeCardScale,
              y: safeCardY,
              borderRadius: cardRadius,
              willChange: "transform",
            }}
            className={cn(
              "relative origin-center overflow-hidden border border-white/10",
              "shadow-[0_30px_80px_rgba(0,0,0,0.6)]",
              // Responsive base size — card occupies a contained box at scale=1
              "w-[92vw] md:w-[78vw] lg:w-[70vw] max-w-[1100px]",
              "h-[52vh] md:h-[60vh] max-h-[640px]",
            )}
          >
            {children}
          </motion.div>

          {/* Hint */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40"
          >
            <span className="h-px w-6 md:w-8 bg-white/20" />
            {scrollHint}
            <span className="h-px w-6 md:w-8 bg-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
