"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CountUp } from "@/components/ui/count-up";
import { WaveText } from "@/components/ui/wave-text";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[70vh] md:min-h-screen flex-col items-center justify-center overflow-hidden bg-background w-full rounded-md z-0",
        className,
      )}
      style={{ willChange: "transform" }}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            willChange: "width, opacity",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            willChange: "width, opacity",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-red-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-red-400"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background" />
      </div>

      <div className="relative z-50 flex -translate-y-28 md:-translate-y-56 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export function LampDemo() {
  return (
    <>
      <LampContainer className="min-h-[70vh] md:min-h-[85vh] pt-24 md:pt-16">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
          className="mt-8 py-4 text-center text-4xl font-bold tracking-tight text-white md:text-7xl leading-[1.05]"
        >
          <WaveText text="Sites que iluminam" /> <br />
          <span className="text-gradient"><WaveText text="o seu negócio" /></span>
        </motion.h1>
      </LampContainer>

      <section className="relative -mt-12 md:-mt-24 z-50 px-6 pb-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center text-base md:text-lg text-white/70 leading-relaxed"
          >
            Cada pixel pensado pra converter. Cada animação calculada pra impressionar.
            <br className="hidden md:block" />
            Seu cliente entra curioso — e sai comprando.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-3 gap-6 md:gap-16 w-full max-w-3xl"
          >
            {[
              { prefix: "+", end: 300, suffix: "%", label: "Conversão" },
              { end: 3, suffix: " dias", label: "Entrega" },
              { end: 100, suffix: "/100", label: "Performance" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-red-400 bg-clip-text text-transparent tabular-nums">
                  <CountUp
                    end={stat.end}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                  />
                </div>
                <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/40"
          >
            <span className="h-px w-8 bg-white/20" />
            role para descobrir
            <span className="h-px w-8 bg-white/20" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
