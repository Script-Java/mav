import { SectionWrapper } from "@/components/SectionWrapper";
import ServicesGrid from "@/components/ServicesGrid";
import { FramerReveal } from "@/components/FramerReveal";
import {
  Hammer,
  ShieldCheck,
  Sparkles,
  Microscope,
  Wrench,
  Paintbrush2,
} from "lucide-react";

export const metadata = {
  title: "Serviços | Mavericks Collision",
  description:
    "Conheça nosso portfólio completo: Martelinho de Ouro, PPF, Vitrificação Cerâmica, Detalhamento, Funilaria e Pintura — tudo realizado com precisão absoluta.",
};

const services = [
  {
    id: "martelinho-de-ouro",
    title: "Martelinho de Ouro",
    description:
      "Remoção de amassados e mossas com PDR (Paintless Dent Repair) — sem pintura, sem perda de valor. Técnica milimétrica que preserva 100% o verniz original de fábrica.",
    icon: <Hammer className="w-5 h-5" />,
    imageSrc: "/assets/11.20.08.jpeg",
    imageAlt: "Técnico realizando martelinho de ouro em painel de veículo",
    priority: true,
    badge: "PDR",
  },
  {
    id: "ppf",
    title: "PPF — Película de Proteção",
    description:
      "Paint Protection Film de última geração. Blindagem invisível contra pedriscos, riscos e agentes químicos. Auto-reparação térmica integrada para proteção definitiva.",
    icon: <ShieldCheck className="w-5 h-5" />,
    imageSrc: "/assets/11.21.39.jpeg",
    imageAlt: "Aplicação de PPF Paint Protection Film em capô de veículo",
    priority: true,
    badge: "Proteção Total",
  },
  {
    id: "vitrificacao-ceramica",
    title: "Vitrificação Cerâmica",
    description:
      "Nano-revestimento cerâmico SiO₂ de alta concentração: hidrofobicidade extrema, brilho profundo e proteção UV de longa duração. Superfície virtualmente inatingível.",
    icon: <Sparkles className="w-5 h-5" />,
    imageSrc: "/assets/b2.jpeg",
    imageAlt: "Efeito de hidrofobicidade em pintura vitrificada com cerâmica",
  },
  {
    id: "estetica-automotiva",
    title: "Estética Automotiva de Luxo",
    description:
      "Restauração completa interior e exterior com higienização profunda, renovação de plásticos, polimento de faróis e hidratação de couro. O veículo de volta ao showroom.",
    icon: <Microscope className="w-5 h-5" />,
    imageSrc: "/assets/11.23.21.jpeg",
    imageAlt: "Processo de detalhamento automotivo interior",
  },
  {
    id: "funilaria-e-pintura",
    title: "Funilaria de Precisão",
    description:
      "Reparos estruturais com alinhamento tridimensional por escaneamento a laser. Geometria do veículo 100% restaurada com peças originais e soldagem certificada.",
    icon: <Wrench className="w-5 h-5" />,
    imageSrc: "/assets/a2.jpeg",
    imageAlt: "Funilaria de precisão com alinhamento estrutural em oficina",
  },
  {
    id: "pintura-automotiva-premium",
    title: "Pintura Automotiva Premium",
    description:
      "Mistura computadorizada de tintas importadas com câmara de cura UV para fidelidade total à cor original. Acabamento de concessionária com garantia de brilho estendida.",
    icon: <Paintbrush2 className="w-5 h-5" />,
    imageSrc: "/assets/11.16.52.jpeg",
    imageAlt: "Aplicação de pintura automotiva em cabine de pintura profissional",
    badge: "Especializado",
  },
  {
    id: "polimento-tecnico",
    title: "Polimento Técnico",
    description:
      "Correção avançada de pintura que remove hologramas, micro-riscos e marcas do tempo, nivelando o verniz para um brilho espelhado impecável e duradouro.",
    icon: <Sparkles className="w-5 h-5" />,
    imageSrc: "/assets/b1.jpeg",
    imageAlt: "Polimento técnico em carro esportivo",
  }
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <SectionWrapper className="pt-32 pb-24">

        {/* Header */}
        <FramerReveal>
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
                Padrão Mavericks Collision
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 leading-none">
              Nosso Portfólio
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-[#ff7c00]">
                de Serviços
              </span>
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              Na Mavericks Collision, cada veículo que entra em nossa oficina é tratado como uma verdadeira obra de arte.
              Combinamos artesanato tradicional com tecnologia automotiva de ponta para entregar precisão absoluta, segurança estrutural e um rigor estético incomparável. Descubra o verdadeiro estado da arte automotiva.
            </p>
          </div>
        </FramerReveal>

        {/* Grid */}
        <ServicesGrid services={services} />

        {/* Bottom CTA Strip */}
        <FramerReveal delay={0.3}>
          <div className="mt-24 p-px rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5">
            <div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                  Pronto para elevar seu veículo?
                </h3>
                <p className="text-zinc-400 text-sm">
                  Solicite uma avaliação gratuita com nossos especialistas.
                </p>
              </div>
              <a
                href="/contato"
                className="flex-shrink-0 px-8 py-4 bg-[#ff4500] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#e03e00] transition-all duration-200 shadow-lg shadow-[#ff4500]/20"
              >
                Agendar Avaliação
              </a>
            </div>
          </div>
        </FramerReveal>

      </SectionWrapper>
    </div>
  );
}
