import { ShieldCheck, Award, Clock, Star } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionWrapper } from "./SectionWrapper";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: <Award className="w-8 h-8 text-[#ff4500]" />,
      title: "15+ Anos de Experiência",
      description: "Tradição e excelência em funilaria e estética automotiva em Curitiba."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#ff4500]" />,
      title: "Garantia Absoluta",
      description: "Serviços com garantia estendida e materiais de primeira linha mundial."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff4500]" />,
      title: "Agilidade no Reparo",
      description: "Processos otimizados para devolver seu carro de luxo no menor tempo possível."
    },
    {
      icon: <Star className="w-8 h-8 text-[#ff4500]" />,
      title: "Acabamento Nível Concessionária",
      description: "Restauramos seu veículo aos padrões originais de fábrica."
    }
  ];

  return (
    <SectionWrapper id="trust" className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {indicators.map((item, index) => (
          <FadeIn key={index} delay={0.1 * index}>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
              <div className="mb-4 p-3 rounded-full bg-white/5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
