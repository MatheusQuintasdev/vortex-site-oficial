import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FlowButton } from "@/components/ui/flow-button";
import { WHATSAPP_URL } from "./whatsapp";

const WaveText = lazy(() =>
  import("@/components/ui/wave-text").then((m) => ({ default: m.WaveText })),
);

const TITLES = ["sites que vendem", "design premium", "alta conversão", "velocidade brutal"];

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const longest = useMemo(() => TITLES.reduce((a, b) => (a.length > b.length ? a : b)), []);
  const bgRef = useRef<HTMLDivElement>(null);

  // Rotate headline (paused while tab is hidden)
  useEffect(() => {
    let t: number | undefined;
    const schedule = () => {
      t = window.setTimeout(() => {
        setTitleNumber((n) => (n + 1) % TITLES.length);
      }, 2400);
    };
    const onVisibility = () => {
      if (t) window.clearTimeout(t);
      if (!document.hidden) schedule();
    };
    schedule();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      if (t) window.clearTimeout(t);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [titleNumber]);

  // Pause background animations when Hero is offscreen
  useEffect(() => {
    const el = bgRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        el.dataset.paused = entry.isIntersecting ? "false" : "true";
      },
      { rootMargin: "100px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center pt-16">
      {/* Background — desktop only, paused when offscreen */}
      <div
        ref={bgRef}
        data-paused="false"
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px]">
          <div
            className="pausable-anim absolute inset-0 rounded-full opacity-40 will-change-transform"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(255,0,0,0.35) 90deg, transparent 180deg, rgba(255,0,0,0.25) 270deg, transparent 360deg)",
              animation: "spin 22s linear infinite",
              filter: "blur(48px)",
              transform: "translateZ(0)",
            }}
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>
      {/* Mobile-only lightweight glow (static, no paint cost) */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(211,0,32,0.25), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] uppercase tracking-[0.25em] text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          vortex.webdesign
        </motion.div>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-white">
          <Suspense fallback={<span>Sua vitrine digital</span>}>
            <WaveText text="Sua vitrine digital" />
          </Suspense>
          <br />
          precisa de{" "}
          <span className="relative inline-flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2 min-h-[1.1em]">
            <span className="opacity-0 select-none" aria-hidden>
              {longest}
            </span>
            {TITLES.map((title, index) => (
              <motion.span
                key={index}
                className="absolute left-0 right-0 font-bold text-gradient will-change-transform"
                initial={false}
                transition={{ type: "spring", stiffness: 60, damping: 14 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : { y: titleNumber > index ? -120 : 120, opacity: 0 }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/65 leading-relaxed"
        >
          O seu site atual está matando suas vendas. Nós construímos estruturas digitais focadas em performance e lucro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <FlowButton text="Chamar no WhatsApp" variant="primary" />
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em]"
          >
            Ver diferenciais ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
