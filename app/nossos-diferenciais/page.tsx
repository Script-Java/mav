import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ServiceCardReveal } from "@/components/FramerReveal";
import { Zap, Users, MessageCircle, Factory, Palette, Brush } from "lucide-react";

export const metadata = {
  title: "Nossos Diferenciais | Mavericks Collision",
  description: "Tecnologia, expertise e uma abordagem consultiva que coloca o seu veículo no centro de cada decisão.",
};

const differentiators = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Estrutura de Alta Performance",
    description:
      "Trabalhamos com o que há de mais avançado no mercado global de reparação automotiva. Contamos com ferramentas importadas em aço cirúrgico e espectrofotômetros de altíssima precisão para um acerto de cor absolutamente perfeito.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Técnicos Especializados",
    description:
      "Nossa equipe passa por rigorosos treinamentos constantes e possui certificação internacional chancelada pelas maiores marcas do setor. Somos especialistas dedicados em detalhamento, aplicação de PPF e Vitrificação Cerâmica.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Atendimento Consultivo",
    description:
      "Acreditamos na transparência absoluta. Não empurramos serviços desnecessários. Avaliamos a real necessidade técnica do seu carro e desenvolvemos um projeto de estética totalmente sob medida para o seu objetivo final.",
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Cabine de Pintura Usi Itália",
    description:
      "Tecnologia de nível mundial aplicada no seu veículo. Quando cada detalhe importa, não há espaço para improviso. Utilizamos cabines Usi Italia, presentes na Fórmula 1, elevando a precisão e o acabamento final ao limite absoluto.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Sistema AkzoNobel Sikkens",
    description:
      "Quando se trata de acabamento premium, o padrão é global. A AkzoNobel Sikkens, parceira tecnológica de equipes como a McLaren na F1, garante fidelidade de cor extrema, brilho intenso e uma durabilidade incomparável para a pintura.",
  },
  {
    icon: <Brush className="w-6 h-6" />,
    title: "Pistolas de Pintura SATA",
    description:
      "Equipadas com o mais alto nível de tecnologia alemã, as pistolas SATA são a grande referência definitiva no mercado mundial. Elas asseguram uma pulverização impecável, resultando em um acabamento perfeitamente liso e espelhado.",
  },
];

export default function DiferenciaisPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden pt-32 pb-20">
      <SectionWrapper className="py-16">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Nossos Diferenciais
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
              Tecnologia, expertise e uma abordagem consultiva que coloca o seu
              veículo no centro de cada decisão.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <ServiceCardReveal key={index} delay={index * 0.1}>
              <div className="h-full flex flex-col p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#ff4500]/30 hover:bg-white/[0.05] transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-[#ff4500]/10 border border-[#ff4500]/20 flex items-center justify-center text-[#ff4500] mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 shrink-0">
                  {item.title}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed text-lg flex-grow">
                  {item.description}
                </p>
              </div>
            </ServiceCardReveal>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-24 text-center">
            <p className="text-sm md:text-base font-medium text-zinc-500 uppercase tracking-[0.3em] opacity-80">
              Qualidade. Idoneidade. Transparência.
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}
