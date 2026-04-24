import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";
import SafeImage from "@/components/ClientImage";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Polimento Técnico em Curitiba | Mavericks Collision",
  description: "Correção de pintura e polimento técnico avançado em Curitiba. Remoção de riscos, hologramas e marcas de chuva ácida. Devolvemos o brilho espelhado do seu carro.",
  keywords: ["polimento técnico Curitiba", "correção de pintura", "espelhamento automotivo", "detalhamento Curitiba"],
};

export default function PolimentoTecnicoPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Polimento Técnico & Correção de Pintura
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Muito além do espelhamento tradicional. O polimento técnico remove imperfeições e nivela o verniz, garantindo um brilho de showroom genuíno e duradouro.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10">
            <SafeImage
              src="/assets/b1.jpeg"
              alt="Polimento técnico automotivo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-bold text-white mb-6">A Verdade Sobre o Verniz</h2>
            <div className="prose prose-invert prose-lg text-zinc-400 font-light">
              <p>
                No dia a dia, a pintura do seu carro é atacada por lavagens incorretas, seiva de árvores, fezes de pássaros e poeira. Isso cria as temidas &quot;teias de aranha&quot; (swirls) e micro-riscos que ofuscam o brilho e a cor do veículo.
              </p>
              <p>
                O polimento técnico na Mavericks Collision atua de forma cirúrgica. Medimos a espessura do verniz antes de qualquer procedimento. Em seguida, iniciamos um processo de múltiplas etapas: corte (remoção de defeitos profundos), refino (suavização) e lustro (maximização do brilho).
              </p>
              <p>
                Diferente de enceramentos comerciais que apenas &quot;escondem&quot; os riscos temporariamente, nossa correção elimina o problema pela raiz, deixando a superfície preparada e ancorada para receber uma proteção permanente, como Vitrificação ou PPF.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">O Processo Completo</h3>
              <ul className="space-y-4">
                {[
                  "Lavagem Detalhada de Assepsia",
                  "Descontaminação Química e Mecânica (Clay Bar)",
                  "Medição de Espessura do Verniz (Micragem)",
                  "Isolamento Técnico de Borrachas e Plásticos",
                  "Correção Multi-Etapas (Corte, Refino, Lustro)",
                  "Remoção de Hologramas e Marcas D'água"
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
              Agendar Avaliação do Verniz
            </Link>
          </div>
        </FadeIn>

      </SectionWrapper>
    </div>
  );
}