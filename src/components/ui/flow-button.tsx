import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "default" | "primary";
}

export function FlowButton({
  text = "Modern Button",
  variant = "default",
  className,
  ...props
}: FlowButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border-[1.5px] px-8 py-3 text-sm font-semibold cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:rounded-xl active:scale-[0.97]",
        isPrimary
          ? "border-primary/60 bg-primary text-white"
          : "border-white/30 bg-transparent text-white",
        className,
      )}
    >
      {/* Left arrow — hidden via translate so overflow-hidden always clips it */}
      <ArrowRight
        aria-hidden
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 stroke-current fill-none z-[9] -translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-[700ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      />

      {/* Text */}
      <span className="relative z-[1] whitespace-nowrap transition-transform duration-[700ms] ease-out group-hover:translate-x-2">
        {text}
      </span>

      {/* Expanding circle */}
      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full opacity-0 group-hover:w-[260px] group-hover:h-[260px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
          isPrimary ? "bg-black" : "bg-primary",
        )}
      />

      {/* Right arrow */}
      <ArrowRight
        aria-hidden
        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 stroke-current fill-none z-[9] opacity-100 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-[700ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      />
    </button>
  );
}
