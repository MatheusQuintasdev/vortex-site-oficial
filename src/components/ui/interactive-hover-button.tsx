import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = "Button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-56 cursor-pointer overflow-hidden rounded-full border border-white/15 bg-background p-3 text-center font-semibold text-white",
          className,
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2 transition-all duration-300 group-hover:opacity-0">
          {text}
        </span>
        <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight className="h-4 w-4" />
        </span>
        <span className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 transition-all duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:opacity-100" />
      </button>
    );
  },
);
InteractiveHoverButton.displayName = "InteractiveHoverButton";
export { InteractiveHoverButton };
