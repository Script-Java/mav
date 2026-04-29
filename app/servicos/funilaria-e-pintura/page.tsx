import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";
import SafeImage from "@/components/ClientImage";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Funilaria e Pintura em Curitiba | Mavericks Collision",
  description: "Serviço de funilaria e pintura premium em Curitiba. Restauramos seu veículo com alinhamento a laser, peças originais e estufa controlada. Acabamento nível concessionária.",
  keywords: ["funilaria e pintura Curitiba", "reparo automotivo Curitiba", "oficina premium", "funilaria de precisão"],
};

export default function FunilariaPinturaPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Funilaria e Pintura Premium em Curitiba
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Restituição absoluta da originalidade estrutural e estética do seu veículo.
              Na Mavericks Collision, combinamos engenharia de precisão com artesanato automotivo para resultados inquestionáveis.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10">
            <SafeImage
              src="/services/2.png"
              alt="Processo de Funilaria e Pintura Premium"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-bold text-white mb-6">Pintura e Funilaria</h2>
            <div className="prose prose-invert prose-lg text-zinc-400 font-light">
              <p>Nosso serviço de pintura automotiva premium restaura a originalidade e o brilho de fábrica do seu veículo com técnicas de ponta. Inclui preparação minuciosa, uso de tintas de alta qualidade, aplicação de verniz (clear coat) de alta resistência, cura em cabine e polimento final. Garantimos acabamento impecável, durabilidade e cor uniforme</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">O Padrão Mavericks</h3>
              <ul className="space-y-4">
                {[
                  "Alinhamento Estrutural a Laser 3D",
                  "Soldagem Ponto a Ponto (Padrão Montadora)",
                  "Substituição de Peças Genuínas",
                  "Tratamento Anticorrosivo Completo",
                  "Preparação de Superfície a Seco",
                  "Estufa de Pintura Pressurizada"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff4500] flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-12 mb-8">
            <Link href="/contato" className="inline-block px-10 py-5 bg-[#ff4500] hover:bg-[#e03d00] text-white font-semibold rounded-full transition-colors shadow-lg shadow-[#ff4500]/25">
              Agendar Avaliação Estrutural
            </Link>
          </div>
        </FadeIn>

      </SectionWrapper>
    </div>
  );
}