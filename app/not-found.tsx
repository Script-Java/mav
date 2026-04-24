import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Página Não Encontrada | Mavericks Collision",
  description:
    "A página que você procura não foi encontrada. Volte para a página inicial da Mavericks Collision.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6">
      <SectionWrapper>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-8xl md:text-9xl font-bold text-[#ff4500]/20 tracking-tighter mb-6">
              404
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-5">
              Página Não Encontrada
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
              Parece que você se perdeu no caminho. A página que você procura
              não existe ou foi movida. Deixe-nos guiá-lo de volta.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#ff4500] hover:bg-[#e03d00] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-lg shadow-[#ff4500]/25 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Início
            </Link>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}
