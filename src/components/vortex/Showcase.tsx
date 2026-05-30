import { ScrollExpansionHero } from "@/components/ui/scroll-expansion-hero";
import { CountUp } from "@/components/ui/count-up";
import { WaveText } from "@/components/ui/wave-text";

type Stat = {
  l: string;
  c: string;
  end?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  staticValue?: string;
};

const stats: Stat[] = [
  { l: "Conversão", end: 312, prefix: "+", suffix: "%", c: "text-primary" },
  { l: "Velocidade", end: 0.8, decimals: 1, suffix: "s", c: "text-white" },
  { l: "Leads/mês", end: 1.2, decimals: 1, suffix: "K", c: "text-white" },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden">
      {/* Mobile: static, lightweight version (no heavy scroll-linked animations) */}
      <div className="md:hidden px-6 py-20 bg-gradient-to-b from-background via-zinc-950 to-background">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">O problema</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tighter text-white leading-[1.05]">
            Pare de perder clientes <span className="text-gradient"><WaveText text="por milissegundos." /></span>
          </h2>
          <p className="mt-4 text-white/60 text-sm">
            Cada segundo de carregamento mata 7% das suas conversões. Construímos sites que carregam antes do cliente desistir.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <p className="text-[10px] text-white/50 uppercase tracking-wider">{s.l}</p>
                <p className={`mt-1 text-lg font-bold tabular-nums ${s.c}`}>
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
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollExpansionHero
        kicker="O problema"
        titleLeft={<WaveText text="Pare de perder clientes" />}
        titleRight={<WaveText text="por milissegundos." />}
        subtitle="Cada segundo de carregamento mata 7% das suas conversões. Construímos sites que carregam antes do cliente desistir."
        scrollHint="Role para expandir"
      >
        <div className="h-full w-full bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-60" />
          <div className="relative h-full w-full p-6 md:p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="h-7 w-56 rounded-md bg-white/5 border border-white/10" />
              <div className="h-7 w-20 rounded-md bg-white/5 border border-white/10" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider">{s.l}</p>
                  <p className={`mt-2 text-2xl md:text-3xl font-bold tabular-nums ${s.c}`}>
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
                  </p>
                </div>
              ))}
            </div>
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-6 flex items-end gap-2">
              {[40, 65, 50, 80, 60, 90, 75, 95, 70, 88, 100, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-primary/80 to-primary/20"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </ScrollExpansionHero>
    </section>
  );
}
