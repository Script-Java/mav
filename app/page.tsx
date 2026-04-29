import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import TrustIndicators from "@/components/TrustIndicators";
import { Paintbrush, Sparkles, Hammer, Shield, Droplets, Microscope } from "lucide-react";

const heroSlides = [
  {
    title: "Estética Automotiva",
    subtitle: "Na Mavericks Collision, elevamos o padrão da estética automotiva. Combinamos tecnologia de ponta, processos meticulosos e uma verdadeira paixão por carros para entregar resultados impecáveis, superando as expectativas dos clientes mais exigentes.",
    backgroundImageSrc: "/hero-slide-1.jpg"
  },
  {
    title: "Paint Protection Film (PPF)",
    subtitle: "A proteção definitiva para o seu veículo. Aplicamos tecnologia de ponta com filmes autorregenerativos que criam uma barreira invisível contra riscos, impactos e intempéries, preservando o brilho original e a integridade da pintura com máxima durabilidade.",
    backgroundImageSrc: "/hero-slide-2.png"
  },
  {
    title: "Martelinho de Ouro",
    subtitle: "O martelinho de ouro é uma técnica artesanal de funilaria que remove amassados de veículos sem danificar a pintura original. Utilizando ferramentas especiais e alavancas, profissionais moldam a lataria de dentro para fora, devolvendo a forma original com precisão. É ideal para pequenos/médios danos (granizo, batidas de porta), oferecendo reparo rápido, econômico e ecológico",
    backgroundImageSrc: "/hero-slide-3.jpg"
  }
];

const servicesData = {
  title: "Nossos Serviços",
  subtitle: "Especialidade para o cuidado absoluto do seu veículo.",
  items: [
    {
      id: "ppf",
      title: "PPF",
      description: "O serviço de PPF (Paint Protection Film) oferece uma blindagem invisível de poliuretano de alta tecnologia, protegendo a pintura contra riscos, pedras, detritos, marcas de lavagem e raios UV. Com capacidade de autocicatrização (auto-healing) e garantia de longa duração (5 a 10 anos), o PPF mantém o brilho original, valoriza a revenda e facilita a limpeza.",
      icon: <Shield className="w-7 h-7" />,
      imageSrc: "/service1.jpg"
    },
    {
      id: "pintura",
      title: "Pintura",
      description: "Nosso serviço de pintura automotiva restaura a originalidade e o brilho de fábrica do seu veículo com técnicas de ponta. Inclui preparação minuciosa, uso de tintas de alta qualidade, aplicação de verniz (clear coat) de alta resistência, cura em cabine e polimento final. Garantimos acabamento impecável, durabilidade e cor uniforme",
      icon: <Paintbrush className="w-7 h-7" />,
      imageSrc: "/service2.png"
    },
    {
      id: "polimento",
      title: "Polimento Técnico",
      description: "A correção de pintura é um polimento técnico de alto nível que remove riscos, hologramas e imperfeições do verniz, devolvendo o brilho espelhado e a cor original do veículo. Utilizando compostos técnicos e iluminação especial, o serviço restaura a pintura, eliminando defeitos superficiais e preparando-a para proteção duradoura, como vitrificação.",
      icon: <Sparkles className="w-7 h-7" />,
      imageSrc: "/service3.png"
    },
    {
      id: "martelinho",
      title: "Martelinho de Ouro",
      description: "O martelinho de ouro é uma técnica artesanal de funilaria que remove amassados de veículos sem danificar a pintura original. Utilizando ferramentas especiais e alavancas, profissionais moldam a lataria de dentro para fora, devolvendo a forma original com precisão. É ideal para pequenos/médios danos (granizo, batidas de porta), oferecendo reparo rápido, econômico e ecológico",
      icon: <Hammer className="w-7 h-7" />,
      imageSrc: "/service4.png"
    },
    {
      id: "detalhamento",
      title: "Estética Automotiva",
      description: "Serviço completo de estética automotiva de luxo. Realizamos higienização profunda do interior, tratamento de couro e renovação de plásticos. O detalhamento (detail) vai além de uma simples lavagem, focando na restauração minuciosa de cada componente do seu veículo para devolver o aspecto original de showroom.",
      icon: <Microscope className="w-7 h-7" />,
      imageSrc: "/images/detail.png"
    },
    {
      id: "vitrificacao",
      title: "Vitrificação Cerâmica",
      description: "Proteção avançada de longa duração utilizando nano-revestimento cerâmico. O ceramic coat cria uma camada vitrificada invisível e extremamente rígida que protege a pintura contra contaminações, raios UV e micro-riscos, além de proporcionar repelência extrema à água e intensificar profundamente o brilho da cor.",
      icon: <Droplets className="w-7 h-7" />,
      imageSrc: "/images/ceramic.png"
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-zinc-800 overflow-x-hidden">
      <Hero slides={heroSlides} />
      <main>
        <TrustIndicators />
        <Services
          title={servicesData.title}
          subtitle={servicesData.subtitle}
          services={servicesData.items}
        />
        <ProcessSection />
        <FAQSection />
        <ContactForm />
      </main>
    </div>
  );
}
