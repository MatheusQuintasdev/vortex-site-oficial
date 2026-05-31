import { ArrowRight, Check, Sparkles, Rocket, MapPin, Megaphone, Wrench } from "lucide-react";
import {
  Card,
  Header,
  Plan,
  PlanName,
  Badge,
  Body,
  List,
  ListItem,
  Description,
} from "@/components/ui/pricing-card";
import { FlowButton } from "@/components/ui/flow-button";
import { whatsappWithPlan } from "./whatsapp";
import { WaveText } from "@/components/ui/wave-text";

const plans = [
  {
    id: "essencial",
    icon: Sparkles,
    name: "Plano Essencial",
    description: "Para empresas que querem uma presença digital profissional e geradora de leads qualificados.",
    features: [
      "Site profissional sob medida",
      "Totalmente responsivo (mobile-first)",
      "SEO básico configurado",
      "Integração direta com WhatsApp",
      "Performance otimizada",
      "Entrega ágil e revisões inclusas",
    ],
    cta: "Solicitar Orçamento",
    highlight: false,
  },
  {
    id: "premium",
    icon: Rocket,
    name: "Plano Premium",
    description: "Para marcas que precisam de uma estrutura digital robusta, escalável e preparada para crescer.",
    features: [
      "Tudo do plano Essencial",
      "E-commerce ou múltiplas páginas",
      "SEO avançado e estratégico",
      "Estrutura escalável e modular",
      "Recursos avançados e integrações",
      "Maior nível de personalização",
      "Suporte prioritário",
    ],
    cta: "Solicitar Orçamento",
    highlight: true,
  },
];

const addOns = [
  {
    id: "gmn",
    icon: MapPin,
    name: "Google Meu Negócio",
    description: "Perfil profissional configurado, otimizado e verificado para sua marca aparecer no Google Maps.",
  },
  {
    id: "ads",
    icon: Megaphone,
    name: "Tráfego Pago",
    description: "Campanhas estratégicas no Google e Meta Ads para escalar a geração de oportunidades.",
  },
  {
    id: "manutencao",
    icon: Wrench,
    name: "Manutenção e Evolução",
    description: "Acompanhamento contínuo, ajustes, otimizações e melhorias mensais no seu site.",
  },
];

function PlanButton({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full border border-primary/70 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-500 ease-out hover:rounded-xl hover:border-primary/90 active:scale-[0.98]"
    >
      <span className="absolute left-5 top-1/2 z-10 flex -translate-y-1/2 -translate-x-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowRight aria-hidden className="h-4 w-4" />
      </span>
      <span aria-hidden className="absolute inset-y-0 left-1/2 w-0 -translate-x-1/2 rounded-full bg-background/90 transition-all duration-700 ease-out group-hover:w-[120%]" />
      <span className="relative z-10 whitespace-nowrap transition-transform duration-500 ease-out group-hover:translate-x-2">
        {text}
      </span>
      <span className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 transition-all duration-500 ease-out group-hover:translate-x-5 group-hover:opacity-0">
        <ArrowRight aria-hidden className="h-4 w-4" />
      </span>
    </a>
  );
}

export function Pricing() {
  return (
    <section id="planos" className="relative py-24 md:py-32 px-6 cv-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Planos</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Escolha sua <span className="text-gradient"><WaveText text="estrutura" /></span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/65 text-base md:text-lg">
            Cada projeto possui necessidades únicas. Solicite um orçamento personalizado e receba uma proposta sob medida para a sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.id} className={p.highlight ? "border-primary/50 shadow-glow" : ""}>
                <Header className={p.highlight ? "border-primary/30 bg-primary/[0.04]" : ""}>
                  <Plan>
                    <PlanName className={p.highlight ? "text-white" : ""}>
                      <Icon className={p.highlight ? "text-primary" : "text-white/70"} /> {p.name}
                    </PlanName>
                    {p.highlight && <Badge>Mais procurado</Badge>}
                  </Plan>
                  <Description>{p.description}</Description>
                </Header>
                <Body>
                  <List>
                    {p.features.map((f) => (
                      <ListItem key={f}>
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </ListItem>
                    ))}
                  </List>
                  <PlanButton text={p.cta} href={whatsappWithPlan(p.name)} />
                </Body>
              </Card>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">Serviços adicionais</span>
            <h3 className="mt-3 text-2xl md:text-4xl font-bold tracking-tighter text-white">
              Some ao seu plano <span className="text-gradient"><WaveText text="e escale mais rápido" /></span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {addOns.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.id}
                  className="relative rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{a.name}</h4>
                  <p className="mt-1 text-sm text-white/60">{a.description}</p>
                  <a
                    href={whatsappWithPlan(a.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block"
                  >
                    <FlowButton text="Solicitar Orçamento" className="w-full justify-center" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
