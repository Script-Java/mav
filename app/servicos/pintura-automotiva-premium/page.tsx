import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";
import SafeImage from "@/components/ClientImage";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pintura Automotiva Premium em Curitiba | Mavericks Collision",
  description: "Repintura automotiva de alto padrão em Curitiba. Sistema de acerto de cor computadorizado, tintas importadas e cabine de pintura estufa. Acabamento espelhado e garantia.",
  keywords: ["pintura automotiva Curitiba", "pintura premium", "repintura automotiva", "oficina de pintura Curitiba"],
};

export default function PinturaAutomotivaPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Pintura Automotiva Premium
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Nosso serviço de pintura automotiva premium restaura a profundidade, a cor e o brilho intenso que seu veículo merece. A exatidão da cor original com um acabamento superior.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10">
            <SafeImage
              src="/assets/11.16.52.jpeg"
              alt="Processo de pintura automotiva premium na cabine"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-bold text-white mb-6">Ciência e Arte na Repintura</h2>
            <div className="prose prose-invert prose-lg text-zinc-400 font-light">
              <p>
                A pintura de um carro não é apenas sobre a aplicação de tinta; é sobre física, química e um olhar clínico para o acerto de tons (Color Matching).
              </p>
              <p>
                Na Mavericks Collision, utilizamos um laboratório de colorimetria avançado. Espectrofotômetros realizam a leitura exata da pintura atual do veículo, considerando o desgaste natural pelo tempo e exposição ao sol. Isso garante que a nova pintura seja uma continuação perfeita do painel adjacente, sem diferenças de tonalidade (efeito degradê ou &quot;manchas&quot;).
              </p>
              <p>
                Utilizamos sistemas de pintura à base de água de marcas líderes mundiais, seguidas pela aplicação de vernizes de alto sólido (High Solid Clear Coat). O resultado é uma resistência superior a riscos e intempéries, com um brilho profundo que imita o aspecto &quot;molhado&quot; característico de carros de luxo.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Nosso Diferencial Técnico</h3>
              <ul className="space-y-4">
                {[
                  "Laboratório de Colorimetria Computadorizada",
                  "Leitura por Espectrofotômetro de última geração",
                  "Tintas Importadas (AkzoNobel / Sikkens ou padrão similar)",
                  "Cabine de Pintura Pressurizada (Assepsia total contra poeira)",
                  "Cura Térmica Controlada",
                  "Nivelamento de Verniz e Polimento de Entrega"
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
              Solicitar Orçamento de Pintura
            </Link>
          </div>
        </FadeIn>

      </SectionWrapper>
    </div>
  );
}