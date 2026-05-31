import {
  Palette,
  Zap,
  Search,
  MessageCircle,
  Smartphone,
  ShieldCheck,
  Bot,
  Workflow,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CountUp } from "@/components/ui/count-up";
import vortexLogoClean from "@/assets/vortex-logo-clean.png";
import { WaveText } from "@/components/ui/wave-text";

const features = [
  {
    icon: Palette,
    title: "Design exclusivo e personalizado",
    desc: "Identidade visual sob medida, sem templates. Cada projeto reflete o posicionamento da sua marca.",
    variant: "red" as const,
  },
  {
    icon: Zap,
    title: "Sites extremamente rápidos",
    desc: "Carregamento abaixo de 1 segundo. Performance que retém visitantes e melhora seu ranqueamento.",
    variant: "default" as const,
  },
  {
    icon: Search,
    title: "Estrutura otimizada para SEO",
    desc: "Código semântico, meta tags e arquitetura pensada para o Google posicionar sua marca no topo.",
    variant: "white" as const,
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
    desc: "Leads vão direto para o seu WhatsApp comercial. Sem formulários frios, sem perda de oportunidade.",
    variant: "red" as const,
  },
  {
    icon: Smartphone,
    title: "Responsividade completa",
    desc: "Experiência impecável em qualquer dispositivo. Mobile-first, sem ajustes de última hora.",
    variant: "default" as const,
  },
  {
    icon: ShieldCheck,
    title: "Segurança e estabilidade",
    desc: "Infraestrutura robusta, certificado SSL e monitoramento 24/7. Seu site sempre no ar.",
    variant: "white" as const,
  },
  {
    icon: Bot,
    title: "Automações inteligentes",
    desc: "Fluxos automatizados de atendimento, captação de leads e nutrição que trabalham por você.",
    variant: "red" as const,
  },
  {
    icon: Workflow,
    title: "Integrações estratégicas",
    desc: "CRM, e-mail marketing, pagamentos, ERPs e ferramentas que potencializam sua operação.",
    variant: "default" as const,
  },
  {
    icon: Headphones,
    title: "Suporte contínuo",
    desc: "Acompanhamento próximo após o lançamento. Ajustes, evoluções e parceria de longo prazo.",
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
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Diferenciais</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Por que escolher a <span className="text-gradient"><WaveText text="VORTEX" /></span>?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-base md:text-lg">
            Estratégia, design e tecnologia trabalhando juntos para entregar uma presença digital que gera resultado real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/10 bg-card/40 p-6 md:p-8 min-h-[260px] flex flex-col"
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} variant={f.variant} />
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="h-12 w-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-6">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-white">{f.title}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
