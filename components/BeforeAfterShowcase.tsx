import SafeImage from "./ClientImage";
import { FadeIn } from "./FadeIn";
import { SectionWrapper } from "./SectionWrapper";
import Link from "next/link";

export default function BeforeAfterShowcase() {
  return (
    <SectionWrapper className="bg-[#050505]">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Resultados Impecáveis
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A excelência não é apenas prometida, é demonstrada. Veja como transformamos veículos em verdadeiras obras de arte.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <FadeIn delay={0.2}>
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-white tracking-wider uppercase">
              Antes
            </div>
            <div className="aspect-video relative overflow-hidden">
              <SafeImage src="/assets/b1.jpeg" alt="Pintura danificada antes do reparo" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#ff4500]/80 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-white tracking-wider uppercase">
              Depois
            </div>
            <div className="aspect-video relative overflow-hidden">
              <SafeImage src="/assets/a1.jpeg" alt="Pintura restaurada com polimento e vitrificação" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <div className="mt-12 text-center">
          <Link href="/projetos" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200">
            Ver Portfólio Completo
          </Link>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
