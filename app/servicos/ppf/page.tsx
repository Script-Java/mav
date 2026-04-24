import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";
import SafeImage from "@/components/ClientImage";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "PPF (Paint Protection Film) em Curitiba | Preço e Aplicação",
  description: "Proteja seu carro com a melhor película PPF em Curitiba. Blindagem auto-regenerativa contra pedras, riscos e sol. Estúdio certificado Mavericks Collision.",
  keywords: ["PPF Curitiba", "película proteção pintura", "paint protection film Curitiba", "PPF auto healing", "envelopamento transparente"],
};

export default function PPFPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              PPF (Paint Protection Film)
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              A blindagem definitiva e invisível para a pintura do seu veículo. Tecnologia aeroespacial com capacidade de auto-regeneração térmica.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10">
            <SafeImage
              src="/assets/11.21.39.jpeg"
              alt="Aplicação de PPF automotivo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-bold text-white mb-6">A Proteção Absoluta</h2>
            <div className="prose prose-invert prose-lg text-zinc-400 font-light">
              <p>
                O PPF (Paint Protection Film) é uma película transparente de poliuretano (TPU) alifático, aplicada sobre a carroceria para proteger a pintura original. Ele age como um escudo de sacrifício contra os perigos da estrada.
              </p>
              <p>
                <strong>Tecnologia Auto-Healing:</strong> O grande diferencial dos nossos filmes é a auto-regeneração. Micro-riscos (causados por lavagens incorretas ou esbarrões leves) desaparecem sozinhos com a exposição ao sol ou calor do motor.
              </p>
              <p>
                A aplicação do PPF requer extrema habilidade. Na Mavericks Collision, os cortes são precisos, feitos com plotters digitais ou bisturis por técnicos certificados. As bordas são cuidadosamente dobradas (wrapped edges) para garantir que a película fique absolutamente invisível.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">O que o PPF Protege?</h3>
              <ul className="space-y-4">
                {[
                  "Impacto de pedras na estrada (Stone Chips)",
                  "Riscos de chaves e esbarrões no estacionamento",
                  "Manchas de seiva de árvore e fezes de aves",
                  "Abrasão por pó e areia",
                  "Danos causados por insetos em alta velocidade",
                  "Desbotamento pelo sol (Proteção UV Premium)"
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
              Consultar Valores para Aplicação de PPF
            </Link>
          </div>
        </FadeIn>

      </SectionWrapper>
    </div>
  );
}