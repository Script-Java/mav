import { CheckCircle2, Factory, ShieldCheck, Flag } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./FadeIn";

export default function ProcessSection() {
  const steps = [
    {
      title: "Avaliação",
      description: "Análise minuciosa do veículo para identificar todas as necessidades e garantir um orçamento preciso.",
      icon: <CheckCircle2 className="w-8 h-8 text-neutral-300" />,
      number: "01"
    },
    {
      title: "Execução de Precisão",
      description: "Reparação e estética realizadas com ferramentas de alto nível e profissionais altamente especializados.",
      icon: <Factory className="w-8 h-8 text-neutral-300" />,
      number: "02"
    },
    {
      title: "Controle de Qualidade",
      description: "Inspeção rigorosa de cada detalhe para certificar que o resultado atenda ao nosso padrão.",
      icon: <ShieldCheck className="w-8 h-8 text-neutral-300" />,
      number: "03"
    },
    {
      title: "Entrega",
      description: "O veículo é devolvido em condições imaculadas, superando expectativas e garantindo satisfação.",
      icon: <Flag className="w-8 h-8 text-neutral-300" />,
      number: "04"
    }
  ];

  const ambientRadial = (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff4500]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
  );

  return (
    <SectionWrapper id="processo" className="overflow-hidden" background={ambientRadial}>
      <FadeIn delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Nosso Processo
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Metodologia transparente e de alta precisão do início ao fim.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <FadeIn key={index} delay={0.2 + (index * 0.1)}>
            <div 
              className="relative h-full rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-start overflow-hidden group"
            >
              <span className="absolute -bottom-6 -right-2 text-9xl font-extrabold text-white/5 select-none transition-transform duration-300 group-hover:scale-110">
                {step.number}
              </span>
              
              <div className="mb-6 p-4 rounded-xl bg-white/10 border border-white/5 inline-flex">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed z-10 text-sm flex-grow">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
