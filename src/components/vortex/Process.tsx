import { motion } from "framer-motion";
import { Search, LayoutGrid, Code2, CheckCircle2, Rocket } from "lucide-react";
import { WaveText } from "@/components/ui/wave-text";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico Estratégico",
    desc: "Mergulhamos no seu negócio, público e concorrência para entender exatamente o que sua marca precisa comunicar.",
  },
  {
    icon: LayoutGrid,
    title: "Planejamento e Estrutura",
    desc: "Definimos arquitetura de informação, jornada do usuário e wireframes focados em conversão.",
  },
  {
    icon: Code2,
    title: "Design e Desenvolvimento",
    desc: "Interfaces premium e código limpo, otimizado para performance, SEO e escalabilidade.",
  },
  {
    icon: CheckCircle2,
    title: "Revisões e Aprovação",
    desc: "Refinamento conjunto até cada detalhe estar alinhado com a sua visão e seus objetivos.",
  },
  {
    icon: Rocket,
    title: "Lançamento e Suporte",
    desc: "Publicação, monitoramento e acompanhamento contínuo para garantir resultados sustentáveis.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32 px-6 overflow-hidden cv-auto scroll-mt-20">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Processo</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Como transformamos sua <span className="text-gradient"><WaveText text="presença digital" /></span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-base md:text-lg">
            Um método claro, transparente e orientado a resultado — do briefing ao lançamento.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 md:-translate-x-1/2" />

          <ol className="space-y-12 md:space-y-20">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isRight = i % 2 === 1;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                    isRight ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-6 md:left-1/2 top-3 -translate-x-1/2 z-10">
                    <div className="relative h-4 w-4 rounded-full bg-primary shadow-glow">
                      <div className="absolute inset-0 rounded-full bg-primary/60 animate-ping" />
                    </div>
                  </div>

                  <div className={`pl-16 md:pl-0 ${isRight ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className={`inline-flex items-center gap-3 mb-3 ${isRight ? "md:flex-row-reverse" : ""}`}>
                      <span className="h-10 w-10 rounded-xl border border-primary/30 bg-primary/[0.08] flex items-center justify-center text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                        Etapa {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{s.title}</h3>
                    <p className="mt-3 text-white/65 text-sm md:text-base leading-relaxed">{s.desc}</p>
                  </div>

                  <div className="hidden md:block" />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
