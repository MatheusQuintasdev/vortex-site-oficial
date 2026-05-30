import { ArrowRight, Check, Sparkles, Rocket, MapPin, Megaphone, Wrench } from "lucide-react";
import {
  Card,
  Header,
  Plan,
  PlanName,
  Badge,
  Price,
  MainPrice,
  Period,
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
    id: "start",
    icon: Sparkles,
    name: "Landing Page Start",
    originalPrice: "R$ 2.000",
    price: "R$ 850",
    period: "/ projeto",
    description: "Site profissional de uma página, ideal para captar leads pelo Instagram.",
    features: [
      "Landing page de alta conversão",
      "Design 100% personalizado",
      "Totalmente responsivo (mobile-first)",
      "Integração direta com WhatsApp",
      "SEO básico e performance otimizada",
      "Entrega em até 3 dias úteis",
    ],
    cta: "Começar agora",
    highlight: false,
  },
  {
    id: "premium",
    icon: Rocket,
    name: "E-commerce Premium",
    originalPrice: "R$ 4.500",
    price: "R$ 2.890",
    period: "/ projeto",
    description: "Loja virtual completa ou site multi-página com integração de pagamentos.",
    features: [
      "Tudo do plano Start +",
      "Loja virtual / múltiplas páginas",
      "Integração com pagamentos (Stripe/Pix)",
      "Painel administrativo dedicado",
      "Blog e SEO avançado",
      "Domínio + hospedagem inclusos (1º ano)",
      "Suporte prioritário por 90 dias",
    ],
    cta: "Quero o Premium",
    highlight: true,
  },
];

const addOns = [
  {
    id: "gmn",
    icon: MapPin,
    name: "Google Meu Negócio",
    price: "R$ 250",
    period: "único",
    description: "Perfil profissional configurado, otimizado e verificado no Google Maps.",
  },
  {
    id: "ads",
    icon: Megaphone,
    name: "Tráfego Pago",
    price: "Sob consulta",
    period: "mensal",
    description: "Campanhas de Facebook Ads e Google Ads para escalar seus leads.",
  },
  {
    id: "manutencao",
    icon: Wrench,
    name: "Manutenção Mensal",
    price: "R$ 85",
    period: "/ mês",
    description: "Obrigatória — garante todas as alterações e ajustes que você pedir.",
    required: true,
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
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Planos</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Escolha sua <span className="text-gradient"><WaveText text="estrutura" /></span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Sem mensalidades escondidas. Você paga pelo site, recebe pronto em 3 dias úteis.
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
                    {p.highlight && <Badge>Mais vendido</Badge>}
                  </Plan>
                  <Price>
                    {p.originalPrice && (
                      <span className="text-white/40 text-sm line-through mr-2">{p.originalPrice}</span>
                    )}
                    <MainPrice>{p.price}</MainPrice>
                    <Period>{p.period}</Period>
                  </Price>
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

        {/* Add-ons */}
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
                  className={`relative rounded-2xl border p-6 backdrop-blur transition-colors hover:border-primary/40 ${
                    a.required
                      ? "border-primary/40 bg-primary/[0.04]"
                      : "border-white/10 bg-card/60"
                  }`}
                >
                  {a.required && (
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-primary border border-primary/40 px-2 py-0.5 rounded-full">
                      Obrigatório
                    </span>
                  )}
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{a.name}</h4>
                  <p className="mt-1 text-sm text-white/60">{a.description}</p>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-2xl font-bold text-white">{a.price}</span>
                    <span className="text-xs text-white/60 pb-1">{a.period}</span>
                  </div>
                  <a
                    href={whatsappWithPlan(a.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block"
                  >
                    <FlowButton text="Começar agora" className="w-full justify-center" />
                  </a>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-white/40 max-w-2xl mx-auto">
            * A manutenção mensal (R$ 85/mês) é obrigatória para qualquer plano contratado — sem ela não realizamos alterações no site após a entrega.
          </p>
        </div>
      </div>
    </section>
  );
}
