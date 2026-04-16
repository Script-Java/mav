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
              Sobre a Mavericks
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Mais de uma década elevando o padrão da estética e repintura automotiva no Brasil.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <FadeIn delay={0.2}>
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
              <p className="text-zinc-400 leading-relaxed font-light">
                Fundada por engenheiros automotivos apaixonados pela perfeição visual, a Mavericks nasceu com um único propósito: erradicar a mediocridade do mercado de reparação. Iniciamos como um studio boutique e evoluímos para um laboratório tecnológico de estética avançada.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Manifesto de Qualidade</h2>
              <p className="text-zinc-400 leading-relaxed font-light">
                Não fazemos reparos; realizamos restaurações cirúrgicas. Utilizamos exclusivamente compostos e ferramentas homologadas pelos maiores fabricantes globais. Se não pudermos devolver o seu veículo em um estado melhor do que no dia em que saiu da concessionária, não aceitamos o projeto.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
}
