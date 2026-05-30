"use client";
import React from "react";

/**
 * Pure-CSS vertical marquee. Previously used framer-motion with an infinite
 * translateY tween — that ran a JS RAF loop per column and forced layout work.
 * Now: a single CSS keyframe driven entirely on the compositor (transform only).
 */
export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
  duration?: number;
}) => {
  const duration = props.duration || 15;
  return (
    <div className={props.className}>
      <div
        className="flex flex-col gap-6 pb-6 bg-transparent will-change-transform animate-marquee-y motion-reduce:animate-none"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-none border border-white/10 bg-[#0a0a0a] shadow-lg max-w-xs w-full"
                key={i}
              >
                <div className="text-white/80 text-sm leading-relaxed">"{text}"</div>
                <div className="flex items-center gap-3 mt-6">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 rounded-full grayscale opacity-80 object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="text-white font-bold uppercase tracking-tight text-xs">
                      {name}
                    </div>
                    <div className="text-[#D30020] uppercase text-[10px] tracking-widest">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
