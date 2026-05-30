import iconOnly from "@/assets/vortex-icon.png";
import fullLogo from "@/assets/vortex-mark.png";

export function VortexLogo({ className = "", variant = "icon" }: { className?: string; variant?: "icon" | "full" }) {
  return (
    <img
      src={variant === "full" ? fullLogo : iconOnly}
      alt="Vortex Digital Innovations"
      className={className}
      width={variant === "full" ? 160 : 48}
      height={48}
      decoding="async"
      style={{ objectFit: "contain" }}
    />
  );
}
