import { Zap, Target, MessageCircle, Rocket, ShieldCheck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CountUp } from "@/components/ui/count-up";
import vortexLogoClean from "@/assets/vortex-logo-clean.png";
import { WaveText } from "@/components/ui/wave-text";

const features = [
  {
    icon: Zap,
    title: "Performance Extrema",
    desc: "Sites que carregam em menos de 1 segundo. Otimização brutal, código limpo e infra de ponta.",
    variant: "red" as const,
  },
  {
    icon: Target,
    title: "Design Focado em Conversão",
    desc: "Cada pixel pensado para gerar venda. UX/UI premium que guia o cliente até o botão de compra.",
    variant: "default" as const,
  },
  {
    icon: MessageCircle,
    title: "Integração Direta",
    desc: "Leads vão direto para o seu WhatsApp ou CRM. Sem intermediários, sem perda de oportunidade.",
    variant: "white" as const,
  },
  {
    icon: Rocket,
    title: "SEO & Tráfego Pago",
    desc: "Google Ads, Facebook Ads e SEO técnico. Tráfego qualificado batendo na porta todos os dias.",
    variant: "red" as const,
  },
  {
    icon: ShieldCheck,
    title: "Manutenção Premium",
    desc: "Suporte ativo, alterações sob demanda e monitoramento 24/7. Seu site sempre no ar e atualizado.",
    variant: "default" as const,
  },
  {
    icon: BarChart3,
    title: "Dados & Resultado",
    desc: "Analytics, heatmaps e relatórios mensais. Decisões guiadas por dados, não por achismo.",
    variant: "white" as const,
  },
];

const stats: Array<{
  label: string;
  end?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  staticValue?: string;
}> = [
  { end: 0.9, decimals: 1, suffix: "s", label: "Tempo médio de carregamento" },
  { end: 4, suffix: "x", label: "Aumento médio de conversão" },
  { end: 100, suffix: "%", label: "Otimizado para mobile" },
  { staticValue: "24/7", label: "Suporte e monitoramento" },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 px-6 overflow-hidden scroll-mt-20 cv-auto">
      {/* Decorative corner logos — discreet, no black bg */}
      <img
        src={vortexLogoClean}
        alt=""
        aria-hidden
        width={112}
        height={112}
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute top-6 left-6 w-20 md:w-28 opacity-[0.06] mix-blend-screen"
      />
      <img
        src={vortexLogoClean}
        alt=""
        aria-hidden
        width={112}
        height={112}
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute bottom-6 right-6 w-20 md:w-28 opacity-[0.06] mix-blend-screen rotate-180"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">A solução</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Engenharia de <span className="text-gradient"><WaveText text="conversão" /></span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-base md:text-lg">
            Cada projeto é uma estrutura calculada para transformar visitantes em clientes. Sem amadorismo, sem firula.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/10 bg-card/40 p-6 md:p-8 min-h-[280px] flex flex-col"
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} variant={f.variant} />
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="h-12 w-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-6">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">{f.title}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-black p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-black tracking-tighter text-[#D30020] tabular-nums">
                {s.staticValue ? (
                  s.staticValue
                ) : (
                  <CountUp
                    end={s.end ?? 0}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                    decimals={s.decimals ?? 0}
                  />
                )}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/55">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
