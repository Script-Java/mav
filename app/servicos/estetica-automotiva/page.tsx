import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";
import SafeImage from "@/components/ClientImage";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Estética Automotiva de Luxo em Curitiba | Mavericks Collision",
  description: "Serviço completo de estética automotiva, higienização premium e detalhamento interior em Curitiba. Cuidado excepcional para o seu carro.",
  keywords: ["estética automotiva Curitiba", "higienização automotiva", "detalhamento interior", "limpeza de couro de carro", "car detailing Curitiba"],
};

export default function EsteticaAutomotivaPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Estética e Detalhamento Automotivo (Car Detailing)
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              O requinte nos mínimos detalhes. Higienização profunda, restauração de interiores e cuidados premium para que você sinta o prazer do carro zero a cada passeio.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10">
            <SafeImage
              src="/assets/11.23.21.jpeg"
              alt="Processo detalhado de limpeza de interior e painel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-bold text-white mb-6">Redefinindo o Conceito de Limpeza</h2>
            <div className="prose prose-invert prose-lg text-zinc-400 font-light">
              <p>
                O detalhamento automotivo, muito superior a uma lavagem comum, envolve a limpeza sistemática, o rejuvenescimento e a proteção das superfícies do veículo.
              </p>
              <p>
                Tratamos o interior do seu veículo como um lounge de luxo. Couro ressecado é limpo com produtos de pH neutro e hidratado para devolver o toque macio e o cheiro característico. Plásticos opacos são condicionados com produtos que contêm bloqueadores UV, prevenindo trincas.
              </p>
              <p>
                Nossos técnicos usam pincéis de cerdas macias, tornadores e extratoras para garantir que sujeiras escondidas em frestas, dutos de ar e cintos de segurança sejam completamente eliminadas.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Serviços de Detalhamento</h3>
              <ul className="space-y-4">
                {[
                  "Limpeza Técnica do Motor a Seco",
                  "Higienização Profunda de Bancos (Couro e Tecido)",
                  "Condicionamento de Painéis e Guarnições",
                  "Oxi-Sanitização (Remoção de odores e bactérias)",
                  "Revitalização de Faróis",
                  "Lavagem Técnica com Espuma (Snow Foam)"
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
              Agendar Detalhamento Completo
            </Link>
          </div>
        </FadeIn>

      </SectionWrapper>
    </div>
  );
}