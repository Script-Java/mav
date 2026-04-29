import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FramerReveal } from "@/components/FramerReveal";
import { ServiceCardReveal } from "@/components/FramerReveal";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Users,
  MessageCircle,
  ArrowRight,
  MapPin,
  Target,
  Award,
  ShieldCheck,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Sobre Nós | Mavericks Collision",
  description:
    "Conheça a história, o manifesto e o compromisso da Mavericks Collision com a excelência em estética automotiva premium em Curitiba.",
};

const differentiators = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Equipamentos de Última Geração",
    description:
      "Cabines de pintura pressurizadas, espectrofotômetros para acerto de cor e ferramentas PDR em aço cirúrgico.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Técnicos Especializados",
    description:
      "Nossa equipe passa por treinamentos constantes e possui certificação internacional em aplicação de PPF e Vitrificação.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Atendimento Consultivo",
    description:
      "Não empurramos serviços. Avaliamos a real necessidade do seu carro e criamos um projeto sob medida para ele.",
  },
];

export default function SobreNosPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ff4500]/[0.07] rounded-full blur-[140px] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4500]/10 border border-[#ff4500]/20 text-[#ff4500] text-sm font-medium mb-8">
                <Target className="w-4 h-4" />
                Nossa Essência
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
                Nossa História:{" "}
                <span className="text-[#ff4500]">Mavericks Collision</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                Elevando o paradigma da estética automotiva em Curitiba com uma
                fusão impecável de expertise técnica, paixão por carros e
                tecnologia de ponta.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Genesis Section */}
      <SectionWrapper className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ff4500]/20 to-transparent rounded-3xl blur-2xl opacity-40" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3]">
                <Image
                  src="/assets/b1.jpeg"
                  alt="Instalações premium da Mavericks Collision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-zinc-300 font-medium">
                    Instalações premium da Mavericks Collision
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div>
              <div className="inline-flex items-center gap-2 text-[#ff4500] text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                A Gênese da Excelência
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Localizada no coração de Curitiba
              </h2>
              <div className="space-y-4 text-zinc-400 font-light leading-relaxed text-lg">
                <p>
                  A Mavericks Collision nasceu de uma insatisfação com o mercado
                  tradicional de funilaria. Fundada por especialistas
                  profundamente apaixonados por hipercarros e veículos de luxo,
                  nosso propósito desde o dia um foi bem definido: redefinir o
                  que os clientes esperam de um reparo automotivo.
                </p>
                <p>
                  O que começou como uma obsessão genuína por detalhes evoluiu
                  rapidamente para um estúdio tecnológico de estética e
                  restauração avançada. Nossa infraestrutura foi projetada
                  especificamente para atender clientes exigentes que não aceitam
                  remendos, mas exigem a máxima qualidade e absoluto rigor
                  técnico.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Manifesto Section */}
      <section className="w-full py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ff4500]/[0.02]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ff4500]/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4 text-[#ff4500]" />
                O Manifesto Mavericks
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative p-8 md:p-14 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff4500] to-transparent opacity-40" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff4500]/10 rounded-full blur-[80px] pointer-events-none" />

              <blockquote className="relative z-10">
                <p className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-8">
                  Na Mavericks Collision, nós não fazemos reparos comuns —{" "}
                  <span className="text-[#ff4500]">
                    nós realizamos restaurações cirúrgicas de alto padrão.
                  </span>
                </p>
                <div className="w-16 h-1 bg-[#ff4500] rounded-full mb-8" />
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
                  Mantemos o compromisso inegociável de empregar apenas os
                  melhores materiais do mundo, tintas importadas (como AkzoNobel
                  Sikkens) e maquinário de última geração. A nossa promessa é
                  simples, porém audaciosa: entregar o seu veículo
                  reestruturado, protegido e com um acabamento ainda mais
                  brilhante e imponente do que quando saiu da própria
                  concessionária.
                </p>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Differentiators Section */}
      <SectionWrapper className="py-16">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-5">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Tecnologia, expertise e uma abordagem consultiva que coloca o seu
              veículo no centro de cada decisão.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <ServiceCardReveal key={index} delay={index * 0.1}>
              <div className="h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#ff4500]/30 hover:bg-white/[0.05] transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-[#ff4500]/10 border border-[#ff4500]/20 flex items-center justify-center text-[#ff4500] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ServiceCardReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats / Trust strip */}
      <section className="w-full py-16 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Anos de Experiência" },
              { value: "2.500+", label: "Veículos Atendidos" },
              { value: "100%", label: "Satisfação Garantida" },
              { value: "5★", label: "Avaliação Média" },
            ].map((stat, index) => (
              <FramerReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#ff4500] tracking-tighter mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              </FramerReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff4500]/[0.08] rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-8">
              <Clock className="w-4 h-4 text-[#ff4500]" />
              Pronto para a Experiência Mavericks?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
              Junte-se ao seleto grupo de proprietários em Curitiba
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Que confiam seus veículos de luxo apenas aos melhores. O padrão
              concessionária é apenas o nosso ponto de partida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-[#ff4500] hover:bg-[#e03d00] text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-[#ff4500]/25 hover:scale-105"
              >
                Agendar uma Visita
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://www.google.com/maps?rlz=1C1HKFL_enUS1199US1199&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGJIDGLEDGMkDGIAEMgYIAhBFGDkyCAgDEEUYJxg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxNTc3ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYdbOwqc5dyUMY6t6x2v-dts&daddr=R.+Jo%C3%A3o+Parolin,+720+-+Prado+Velho,+Curitiba+-+PR,+80220-290,+Brazil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-white"
              >
                <MapPin className="w-5 h-5" />
                Como Chegar
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
