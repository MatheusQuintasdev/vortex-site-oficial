import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { VortexLogo } from "./VortexLogo";
import { WHATSAPP_URL } from "./whatsapp";
import { FlowButton } from "@/components/ui/flow-button";

const links = [
  { href: "#home", label: "Início" },
  { href: "#showcase", label: "Trabalhos" },
  { href: "#features", label: "Diferenciais" },
  { href: "#planos", label: "Planos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 min-w-0 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <VortexLogo className="h-9 w-9 shrink-0 relative" />
          </div>
          <div className="flex items-baseline gap-2 min-w-0">
            <span className="text-sm font-black tracking-[0.18em] text-white leading-none">
              VORTEX
            </span>
            <span className="hidden sm:inline-block h-3 w-px bg-white/25" />
            <span className="hidden sm:inline text-[10px] font-medium tracking-[0.32em] text-white/50 uppercase leading-none">
              Digital Innovations
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <FlowButton text="WhatsApp" variant="primary" />
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block">
            <FlowButton text="WhatsApp" variant="primary" className="w-full justify-center" />
          </a>
        </div>
      )}
    </header>
  );
}
