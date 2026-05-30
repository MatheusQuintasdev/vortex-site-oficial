import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import maluImg from "@/assets/testimonial-malu.jpg";
import { WaveText } from "@/components/ui/wave-text";

const testimonials = [
  {
    text: "Fui a primeira cliente da Vortex e não poderia ter feito escolha melhor. Meu site (malucarvalho.com.br) ficou exatamente como eu sonhava: profissional, elegante e que transmite confiança pra cada paciente que chega.",
    image: maluImg,
    name: "Malu Carvalho",
    role: "Biomédica Estética @ maluc.estetica",
  },
  {
    text: "Aumentamos em 4x o número de consultas mensais. Procurávamos algo sério, sem firula. O design passa muita autoridade.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Rafael Mendes",
    role: "Diretor",
  },
  {
    text: "O novo posicionamento mudou o jogo. Paramos de atrair curiosos e começamos a fechar com clientes que pagam pelo nosso valor.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Mariana Silva",
    role: "Arquiteta",
  },
  {
    text: "Meu Instagram era apenas uma vitrine bonita. A Vortex construiu a máquina que transforma esses seguidores em contratos fechados.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Diego Costa",
    role: "Personal Trainer",
  },
  {
    text: "Design brutalista, direto ao ponto e que converte de verdade. Nosso faturamento dobrou no primeiro trimestre após o lançamento.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Juliana Becker",
    role: "CEO",
  },
  {
    text: "Finalmente uma agência que entende que seguidor não paga boleto. O fluxo de clientes agora é totalmente previsível.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Thiago Ferraz",
    role: "E-commerce Manager",
  },
  {
    text: "O link na bio antes não servia pra nada. Hoje é nossa principal ferramenta de vendas graças à engenharia do site novo.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Larissa Nogueira",
    role: "Mentora de Negócios",
  },
  {
    text: "Eles não fazem só sites, eles constroem negócios digitais. O investimento se pagou na primeira semana no ar.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Carlos Eduardo",
    role: "Consultor Financeiro",
  },
  {
    text: "Entendimento rápido da nossa necessidade, execução impecável e foco absoluto em conversão. Recomendo de olhos fechados.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Bruno Almeida",
    role: "Infoprodutor",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-black py-24 relative overflow-hidden cv-auto">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <span className="border border-white/20 text-white/70 text-xs font-bold uppercase tracking-[0.2em] py-2 px-6 rounded-none">
              A Verdade Que Ninguém Fala
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center uppercase tracking-tighter leading-[1.05]" style={{ fontFamily: '"Archivo Black", "Space Grotesk", sans-serif', letterSpacing: '-0.04em' }}>
            Empresários que <br /> <span className="text-[#D30020]"><WaveText text="viraram a chave" /></span>
          </h2>
          <p className="text-center mt-6 text-white/60 text-lg max-w-lg">
            Resultados reais de quem trocou o site amador por uma estrutura de alta conversão da Vortex.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
