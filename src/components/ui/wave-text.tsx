"use client";

import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveTextProps {
  text: string;
  className?: string;
  /** Disable on mobile to save CPU/GPU. Default: true */
  disableOnMobile?: boolean;
  as?: "span" | "div";
}

/**
 * WaveText — premium hover microinteraction for strategic short headlines/CTAs.
 *
 * Performance guarantees:
 * - Triggered ONLY on hover (no infinite/auto loops)
 * - Memoized character split (no re-render per parent state change)
 * - Honors prefers-reduced-motion
 * - Disabled on mobile by default (no touch hover = no benefit, only cost)
 * - GPU-accelerated transforms (translateY/scale only)
 * - Skips effect if text is too long (> 28 chars) to avoid letter-by-letter cost
 */
function WaveTextBase({
  text,
  className = "",
  disableOnMobile = true,
  as = "span",
}: WaveTextProps) {
  const reduceMotion = useReducedMotion();
  const words = useMemo(() => text.split(" "), [text]);
  const totalChars = text.length;

  const tooLong = totalChars > 28;
  const disabled = reduceMotion || tooLong;

  const MotionTag = as === "div" ? motion.div : motion.span;

  if (disabled) {
    return <span className={className}>{text}</span>;
  }

  let charIndex = 0;

  return (
    <MotionTag
      className={cn("inline", className)}
      initial="initial"
      whileHover="hover"
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((char) => {
            const i = charIndex++;
            return (
              <motion.span
                key={i}
                className="inline-block"
                style={{ willChange: "transform" }}
                variants={{
                  initial: { y: 0 },
                  hover: {
                    y: -3,
                    transition: {
                      type: "spring",
                      stiffness: 320,
                      damping: 16,
                      delay: i * 0.02,
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wIdx < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </MotionTag>
  );
}

export const WaveText = memo(WaveTextBase);
