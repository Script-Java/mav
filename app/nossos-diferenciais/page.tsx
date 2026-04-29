import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ServiceCardReveal } from "@/components/FramerReveal";
import { Zap, Users, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Nossos Diferenciais | Mavericks Collision",
  description: "Tecnologia, expertise e uma abordagem consultiva que coloca o seu veículo no centro de cada decisão.",
};

const differentiators = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Equipamentos de Última Geração",
    description:
      "Cabines de pintura pressurizadas, espectrofotômetros para acerto de cor e ferramentas PDR em aço cirúrgico.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Técnicos Especializados",
    description:
      "Nossa equipe passa por treinamentos constantes e possui certificação internacional em aplicação de PPF e Vitrificação.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Atendimento Consultivo",
    description:
      "Não empurramos serviços. Avaliamos a real necessidade do seu carro e criamos um projeto sob medida para ele.",
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
              <div className="h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#ff4500]/30 hover:bg-white/[0.05] transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-[#ff4500]/10 border border-[#ff4500]/20 flex items-center justify-center text-[#ff4500] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </ServiceCardReveal>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
