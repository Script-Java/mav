import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";
import SafeImage from "@/components/ClientImage";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Vitrificação Cerâmica em Curitiba | Mavericks Collision",
  description: "Proteja a pintura do seu carro com Vitrificação Cerâmica de Alta Durabilidade em Curitiba. Brilho intenso, efeito hidrofóbico e facilidade na lavagem.",
  keywords: ["vitrificação cerâmica Curitiba", "ceramic coating Curitiba", "proteção de pintura", "cristalização automotiva"],
};

export default function VitrificacaoPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Vitrificação Cerâmica (Ceramic Coating)
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              O selamento definitivo do verniz. Aumentamos a proteção, repelimos sujeira e garantimos o brilho espelhado intenso do seu carro de luxo.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10">
            <SafeImage
              src="/assets/b2.jpeg"
              alt="Efeito de repelência de água após vitrificação cerâmica"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-bold text-white mb-6">Nano-Tecnologia Protetora</h2>
            <div className="prose prose-invert prose-lg text-zinc-400 font-light">
              <p>
                A vitrificação cerâmica atua a nível microscópico (nano-revestimento). Ela preenche os poros do verniz automotivo, criando uma camada sólida e transparente de dióxido de silício (SiO2) que se funde quimicamente com a pintura.
              </p>
              <p>
                Diferente de ceras convencionais ou selantes sintéticos que evaporam em semanas, o revestimento cerâmico oferece proteção que dura de anos.
              </p>
              <p>
                O principal efeito visível — além do brilho vítreo profundo — é a extrema <strong>hidrofobia</strong>. A água bate na lataria e escorre instantaneamente, carregando a sujeira consigo. Isso reduz o tempo de lavagem e evita que contaminantes grudem na superfície.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Benefícios da Vitrificação</h3>
              <ul className="space-y-4">
                {[
                  "Brilho Profundo com efeito 'Candy' e molhado",
                  "Extrema Repelência à Água e Sujeira",
                  "Proteção Química (Contra chuvas ácidas)",
                  "Proteção UV contra desbotamento",
                  "Resistência superior a arranhões leves",
                  "Facilita a limpeza de rodas, plásticos e lataria"
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
              Agendar Polimento e Vitrificação
            </Link>
          </div>
        </FadeIn>

      </SectionWrapper>
    </div>
  );
}