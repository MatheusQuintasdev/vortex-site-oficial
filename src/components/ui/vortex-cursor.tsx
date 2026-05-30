"use client";

import { useEffect, useRef } from "react";

/**
 * VortexCursor — a brand-aligned mouse follower.
 * Renders a swirling vortex of red particles that trails the cursor.
 * Hidden on touch / coarse pointer devices.
 */
export function VortexCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const mouse = { x: w / 2, y: h / 2 };
    const target = { x: w / 2, y: h / 2 };

    type P = { angle: number; radius: number; speed: number; size: number; life: number; max: number };
    const particles: P[] = [];

    const spawn = () => {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 4 + Math.random() * 6,
        speed: 0.05 + Math.random() * 0.08,
        size: 1 + Math.random() * 2.2,
        life: 0,
        max: 60 + Math.random() * 40,
      });
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    let raf = 0;
    const loop = () => {
      mouse.x += (target.x - mouse.x) * 0.18;
      mouse.y += (target.y - mouse.y) * 0.18;

      ctx.clearRect(0, 0, w, h);

      // soft outer glow
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 60);
      grad.addColorStop(0, "rgba(255,40,40,0.35)");
      grad.addColorStop(1, "rgba(255,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
      ctx.fill();

      if (particles.length < 80) {
        spawn();
        spawn();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.angle += p.speed;
        p.radius += 0.6;
        const x = mouse.x + Math.cos(p.angle) * p.radius;
        const y = mouse.y + Math.sin(p.angle) * p.radius;
        const alpha = 1 - p.life / p.max;
        if (alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(255, ${30 + p.life}, ${30 + p.life}, ${alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // core dot
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
      ctx.fill();

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
      aria-hidden
    />
  );
}
