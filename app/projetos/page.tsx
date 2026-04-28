import { ZoomableImage } from "@/components/ZoomableImage";
import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata = {
  title: "Projetos | Mavericks Collision",
  description: "Galeria de projetos de estética e repintura automotiva de alto padrão.",
};

const projetos = [
  {
    id: "proj-1",
    titulo: "Restauração Profunda & Vitrificação",
    descricao: "O mais alto rigor da estética automotiva. Correção intensiva do verniz acompanhada de polimento em múltiplas etapas e vitrificação para selar o acabamento, atestando o padrão da Mavericks Collision em proteção e brilho.",
    imgAntes: "/assets/b1.png",
    imgDepois: "/assets/a1.png"
  },
  {
    id: "proj-2",
    titulo: "Pintura Mavericks",
    descricao: "Repintura executada sob rigoroso controle de qualidade e assepsia. Utilização do sistema de cura otimizado e tintas de alto padrão para entregar não apenas a tonalidade original de fábrica, mas um nivelamento e brilho absolutamente perfeitos.",
    imgAntes: "/assets/b2.png",
    imgDepois: "/assets/a2.png"
  }
];

export default function ProjetosPage() {
  return (
    <div className="pt-24 min-h-screen">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Portfólio Mavericks
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              A excelência automotiva não é prometida, ela é demonstrada. Explore a nossa galeria tátil de antes e depois e compreenda como a Mavericks Collision materializa seus conceitos com transformações visuais definitivas.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          {projetos.map((projeto, index) => (
            <FadeIn key={projeto.id} delay={0.2 + (index * 0.1)}>
              <div className="w-full">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-white tracking-wider uppercase pointer-events-none">Antes</div>
                    <ZoomableImage
                      src={projeto.imgAntes}
                      alt={`${projeto.titulo} Antes`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#ff4500]/80 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-white tracking-wider uppercase pointer-events-none">Depois</div>
                    <ZoomableImage
                      src={projeto.imgDepois}
                      alt={`${projeto.titulo} Depois`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
