import { lazy, Suspense } from "react";
import { FlowButton } from "@/components/ui/flow-button";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { WHATSAPP_URL } from "./whatsapp";

const WaveText = lazy(() =>
  import("@/components/ui/wave-text").then((m) => ({ default: m.WaveText })),
);

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-40 px-6 overflow-hidden cv-auto">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
      <div className="hidden md:block">
        <BackgroundPaths className="opacity-90" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95]">
          Pronto para virar a chave
          <br />
          <span className="text-gradient">
            <Suspense fallback={<span>do seu negócio?</span>}>
              <WaveText text="do seu negócio?" />
            </Suspense>
          </span>
        </h2>
        <p className="mt-6 text-white/65 text-base md:text-lg max-w-xl mx-auto">
          Em uma conversa de 10 minutos no WhatsApp eu te mostro exatamente como seu novo site vai gerar mais vendas.
        </p>
        <div className="mt-10 flex justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <FlowButton text="Inicie seu Projeto Agora" variant="primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
