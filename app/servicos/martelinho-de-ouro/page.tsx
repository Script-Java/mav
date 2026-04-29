import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";
import SafeImage from "@/components/ClientImage";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Martelinho de Ouro em Curitiba | Mavericks Collision",
  description: "Especialistas em Martelinho de Ouro em Curitiba. Remoção de amassados preservando 100% da pintura original. Serviço rápido e técnica cirúrgica para carros premium.",
  keywords: ["martelinho de ouro Curitiba", "PDR Curitiba", "remoção de amassados", "estética automotiva Curitiba"],
};

export default function MartelinhoPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Martelinho de Ouro Premium (PDR)
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              A verdadeira arte da restauração automotiva. Remoção milimétrica de amassados que preserva a alma do seu veículo: a pintura original de fábrica.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10">
            <SafeImage
              src="/assets/11.20.08.jpeg"
              alt="Técnico realizando serviço de martelinho de ouro"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-bold text-white mb-6">Preservação Impecável</h2>
            <div className="prose prose-invert prose-lg text-zinc-400 font-light">
              <p>
                O Martelinho de Ouro, não é apenas uma técnica; é um trabalho de altíssima precisão e paciência.
              </p>
              <p>
                Utilizando ferramentas especializadas em aço cirúrgico, nossos técnicos acessam a parte interna da lataria e, através de micropressões calculadas, massageiam o metal até que ele retorne à sua memória estrutural original.
              </p>
              <p>
                A grande vantagem deste serviço é a <strong>manutenção de 100% da pintura e verniz originais</strong>. Não há necessidade de massas, lixamentos ou repintura. Isso significa que o seu veículo mantém seu valor de mercado intacto, com um reparo imperceptível.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ideal Para:</h3>
              <ul className="space-y-4">
                {[
                  "Danos causados por Chuva de Granizo",
                  "Amassados de batidas de porta em estacionamentos",
                  "Pequenos e médios impactos sem rompimento do verniz",
                  "Vincos complexos em capôs e portas",
                  "Reparos rápidos no mesmo dia (dependendo da gravidade)"
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
              Avaliar Meu Veículo
            </Link>
          </div>
        </FadeIn>

      </SectionWrapper>
    </div>
  );
}