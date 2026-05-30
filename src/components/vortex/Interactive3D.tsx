import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { WHATSAPP_URL } from "./whatsapp";
import { FlowButton } from "@/components/ui/flow-button";
import { WaveText } from "@/components/ui/wave-text";

export function Interactive3D() {
  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Imersão</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Experiências <span className="text-gradient"><WaveText text="3D interativas" /></span>
          </h2>
        </div>

        <Card className="w-full bg-black/[0.96] relative overflow-hidden border-white/10">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#ff2a2a" />

          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-6 md:p-10 relative z-10 flex flex-col justify-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white">
                Interfaces que <br /> <span className="text-gradient"><WaveText text="impressionam" /></span>
              </h3>
              <p className="mt-4 text-neutral-300 max-w-lg text-sm md:text-base">
                Trazemos suas ideias à vida com cenas 3D imersivas, animações fluidas e interações que capturam
                atenção desde o primeiro segundo.
              </p>
              <p className="mt-3 text-xs text-white/40 md:hidden">
                Toque e arraste no robô abaixo para interagir.
              </p>
              <div className="mt-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <FlowButton text="Quero meu site nesse nível" variant="primary" />
                </a>
              </div>
            </div>

            <div className="flex-1 relative h-[360px] sm:h-[420px] md:h-[560px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
