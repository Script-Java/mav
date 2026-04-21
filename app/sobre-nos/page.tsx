import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";
import SafeImage from "@/components/ClientImage";
import { Shield, Target, Award, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sobre a Mavericks Collision | Oficina Premium em Curitiba",
  description: "Conheça a história e o compromisso da Mavericks Collision. Somos especialistas em funilaria de alto padrão e estética automotiva para carros de luxo em Curitiba.",
  keywords: ["sobre a mavericks collision", "oficina premium curitiba", "história mavericks collision", "funilaria alto padrão"],
};

export default function SobreNosPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <SectionWrapper>
        {/* Header Section */}
        <FadeIn>
          <div className="mb-20 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Nossa História: <span className="text-[#ff4500]">Mavericks Collision</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              Elevando o paradigma da estética automotiva em Curitiba com uma fusão impecável de expertise técnica, paixão por carros e tecnologia de ponta.
            </p>
          </div>
        </FadeIn>

        {/* Studio Image */}
        <FadeIn delay={0.2}>
          <div className="relative aspect-video md:aspect-[21/9] w-full rounded-3xl overflow-hidden mb-24 border border-white/10 shadow-2xl shadow-[#ff4500]/10">
            <SafeImage
              src="/assets/11.22.21.jpeg"
              alt="Instalações premium da Mavericks Collision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
          </div>
        </FadeIn>

        {/* History and Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <FadeIn delay={0.3}>
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02] h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target className="w-48 h-48" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 relative z-10">A Gênese da Excelência</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed font-light relative z-10">
                <p>
                  Localizada no coração de Curitiba, a Mavericks Collision nasceu de uma insatisfação com o mercado tradicional de funilaria. Fundada por especialistas profundamente apaixonados por hipercarros e veículos de luxo, nosso propósito desde o dia um foi bem definido: redefinir o que os clientes esperam de um reparo automotivo.
                </p>
                <p>
                  O que começou como uma obsessão genuína por detalhes evoluiu rapidamente para um estúdio tecnológico de estética e restauração avançada. Nossa infraestrutura foi projetada especificamente para atender clientes exigentes que não aceitam remendos, mas exigem a máxima qualidade e absoluto rigor técnico.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02] h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute bottom-0 right-0 p-8 opacity-5">
                <Shield className="w-48 h-48" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 relative z-10">O Manifesto Mavericks</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed font-light relative z-10">
                <p>
                  Na Mavericks Collision, nós não fazemos reparos comuns — nós realizamos <strong>restaurações cirúrgicas de alto padrão</strong>.
                </p>
                <p>
                  Mantemos o compromisso inegociável de empregar apenas os melhores materiais do mundo, tintas importadas (como AkzoNobel Sikkens) e maquinário de última geração. A nossa promessa é simples, porém audaciosa: entregar o seu veículo reestruturado, protegido e com um acabamento ainda mais brilhante e imponente do que quando saiu da própria concessionária.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Diferenciais Section */}
        <FadeIn delay={0.5}>
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">O Que Nos Diferencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8 text-[#ff4500]" />,
                  title: "Equipamentos de Última Geração",
                  description: "Cabines de pintura pressurizadas, espectrofotômetros para acerto de cor e ferramentas PDR em aço cirúrgico."
                },
                {
                  icon: <Users className="w-8 h-8 text-[#ff4500]" />,
                  title: "Técnicos Especializados",
                  description: "Nossa equipe passa por treinamentos constantes e possui certificação internacional em aplicação de PPF e Vitrificação."
                },
                {
                  icon: <Shield className="w-8 h-8 text-[#ff4500]" />,
                  title: "Atendimento Consultivo",
                  description: "Não empurramos serviços. Avaliamos a real necessidade do seu carro e criamos um projeto sob medida para ele."
                }
              ].map((diff, i) => (
                <div key={i} className="text-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#ff4500]/30 transition-colors">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#ff4500]/10 flex items-center justify-center mb-6">
                    {diff.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{diff.title}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Social Proof CTA */}
        <FadeIn delay={0.6}>
          <div className="rounded-3xl bg-gradient-to-br from-[#ff4500]/20 to-transparent border border-[#ff4500]/30 p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Pronto para a Experiência Mavericks?</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto font-light">
              Junte-se ao seleto grupo de proprietários em Curitiba que confiam seus veículos de luxo apenas aos melhores. O padrão concessionária é apenas o nosso ponto de partida.
            </p>
            <Link href="/contato" className="inline-block px-8 py-4 bg-[#ff4500] hover:bg-[#e03d00] text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:scale-105">
              Agendar uma Visita ao Estúdio
            </Link>
          </div>
        </FadeIn>

      </SectionWrapper>
    </div>
  );
}
