import { Instagram, MessageCircle } from "lucide-react";
import { VortexLogo } from "./VortexLogo";
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "./whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <VortexLogo className="h-9 w-9" />
          <span className="text-sm font-bold tracking-[0.25em] text-white">
            VORTEX <span className="text-primary">·</span> DIGITAL INNOVATIONS
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary/40 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-9 px-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-primary/40 transition-colors"
            aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
          >
            <Instagram className="h-4 w-4" />
            <span className="text-xs font-medium">{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <p className="text-xs text-white/40 text-center">
          © {new Date().getFullYear()} Vortex Digital Innovations. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
