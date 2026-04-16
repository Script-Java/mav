import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata = {
  title: "Sobre Nós | Mavericks Collision",
  description: "Conheça a história e o compromisso da Mavericks com a excelência.",
};

export default function SobreNosPage() {
  return (
    <div className="pt-24 min-h-screen">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Nossa História: Maverick Collision
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Elevando o paradigma da estética e repintura automotiva com uma fusão impecável de expertise técnica e tecnologia de ponta.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <FadeIn delay={0.2}>
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Nossas Origens</h2>
              <p className="text-zinc-400 leading-relaxed font-light">
                Fundada por especialistas profundamente apaixonados pela perfeição visual, a Maverick Collision nasceu com um propósito bem definido: redefinir o mercado automotivo. O que começou como uma obsessão genuína por grandes carros evoluiu rapidamente para um laboratório tecnológico de estética e restauração avançada, preparado para clientes que exigem nada menos que a máxima qualidade e absoluto rigor técnico em todos os projetos.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">O Manifesto Maverick</h2>
              <p className="text-zinc-400 leading-relaxed font-light">
                Na Maverick Collision, nós não fazemos reparos comuns — nós realizamos restaurações cirúrgicas de alto padrão. Mantemos o compromisso inegociável de empregar apenas materiais, tintas premium (como AkzoNobel Sikkens) e o maquinário mais moderno do mercado automotivo mundial. A nossa grande promessa e missão diária é entregar o seu veículo reestruturado, protegido e com um acabamento ainda mais brilhante e imponente do que quando saiu da própria concessionária.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
}
