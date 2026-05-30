import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary shadow-glow flex items-center justify-center text-white hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      <span className="hidden md:block absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
    </a>
  );
}
