import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative w-full max-w-sm rounded-2xl bg-card/40",
        "p-1.5 shadow-xl backdrop-blur-xl",
        "border border-white/10",
        className,
      )}
      {...props}
    />
  );
}

export function Header({
  className,
  children,
  glassEffect = true,
  ...props
}: React.ComponentProps<"div"> & { glassEffect?: boolean }) {
  return (
    <div className={cn("relative mb-4 rounded-xl border border-white/10 bg-white/[0.03] p-4", className)} {...props}>
      {glassEffect && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 rounded-[inherit] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)",
          }}
        />
      )}
      {children}
    </div>
  );
}

export function Plan(props: React.ComponentProps<"div">) {
  return <div {...props} className={cn("mb-8 flex items-center justify-between", props.className)} />;
}
export function Description(props: React.ComponentProps<"p">) {
  return <p {...props} className={cn("text-muted-foreground text-xs", props.className)} />;
}
export function PlanName(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4",
        props.className,
      )}
    />
  );
}
export function Badge(props: React.ComponentProps<"span">) {
  return (
    <span
      {...props}
      className={cn("border-primary/40 text-primary rounded-full border px-2 py-0.5 text-xs", props.className)}
    />
  );
}
export function Price(props: React.ComponentProps<"div">) {
  return <div {...props} className={cn("mb-3 flex items-end gap-1", props.className)} />;
}
export function MainPrice(props: React.ComponentProps<"span">) {
  return <span {...props} className={cn("text-4xl font-extrabold tracking-tight text-white", props.className)} />;
}
export function Period(props: React.ComponentProps<"span">) {
  return <span {...props} className={cn("text-white/80 pb-1 text-sm", props.className)} />;
}
export function OriginalPrice(props: React.ComponentProps<"span">) {
  return <span {...props} className={cn("text-muted-foreground mr-1 ml-auto text-lg line-through", props.className)} />;
}
export function Body(props: React.ComponentProps<"div">) {
  return <div {...props} className={cn("space-y-6 p-3", props.className)} />;
}
export function List(props: React.ComponentProps<"ul">) {
  return <ul {...props} className={cn("space-y-3", props.className)} />;
}
export function ListItem(props: React.ComponentProps<"li">) {
  return <li {...props} className={cn("text-white/85 flex items-start gap-3 text-sm", props.className)} />;
}
