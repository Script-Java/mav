import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import { Wrench, Paintbrush, Sparkles, Hammer } from "lucide-react";

// Data passed as props representing potential CMS data
const heroSlides = [
  {
    title: "Estética Automotiva de Alta Performance",
    subtitle: "Na Maverick Collision, elevamos o padrão da estética automotiva. Combinamos tecnologia de ponta, processos meticulosos e uma verdadeira paixão por carros para entregar resultados impecáveis, superando as expectativas dos clientes mais exigentes.",
    backgroundImageSrc: "/hero-slide-1.jpg"
  },
  {
    title: "Pintura Premium",
    subtitle: "A Maverick Collision orgulha-se de utilizar AkzoNobel Sikkens, uma das linhas mais avançadas do mundo em repintura automotiva. Esse padrão global nos permite garantir fidelidade absoluta de cor, brilho tridimensional e durabilidade incomparável para o seu veículo.",
    backgroundImageSrc: "/hero-slide-2.png"
  },
  {
    title: "Funilaria de Precisão",
    subtitle: "Nossa funilaria é sinônimo de excelência técnica. Na Maverick Collision, utilizamos gabaritos e equipamentos de última geração para realizar a recuperação estrutural milimétrica, preservando a segurança e garantindo a manutenção 100% da originalidade de fábrica.",
    backgroundImageSrc: "/hero-slide-3.jpg"
  }
];

const servicesData = {
  title: "Nossos Serviços",
  subtitle: "Especialidade premium para o cuidado absoluto do seu veículo.",
  items: [
    {
      id: "funilaria",
      title: "Funilaria de Precisão",
      description: "A funilaria de precisão é a base estrutural para a recuperação perfeita de um automóvel. Utilizamos equipamentos de alta tecnologia e gabaritos modernos para realizar o alinhamento tridimensional milimétrico da carroceria. Nosso processo rigoroso garante a reparação de danos complexos enquanto conserva perfeitamente as linhas, vincos e soldas de fábrica, devolvendo a originalidade impecável e a segurança absoluta do seu veículo.",
      icon: <Wrench className="w-7 h-7" />,
      imageSrc: "/service1.jpg"
    },
    {
      id: "pintura",
      title: "Pintura Premium",
      description: "Nosso serviço de pintura automotiva premium restaura a originalidade e o brilho de fábrica do seu veículo com técnicas de ponta. Inclui preparação minuciosa, uso de tintas de alta qualidade, aplicação de verniz (clear coat) de alta resistência, cura em cabine e polimento final. Garantimos acabamento impecável, durabilidade e cor uniforme",
      icon: <Paintbrush className="w-7 h-7" />,
      imageSrc: "/service2.jpg"
    },
    {
      id: "polimento",
      title: "Polimento Técnico",
      description: "A correção de pintura premium é um polimento técnico de alto nível que remove riscos, hologramas e imperfeições do verniz, devolvendo o brilho espelhado e a cor original do veículo. Utilizando compostos técnicos e iluminação especial, o serviço restaura a pintura, eliminando defeitos superficiais e preparando-a para proteção duradoura, como vitrificação.",
      icon: <Sparkles className="w-7 h-7" />,
      imageSrc: "/service3.jpg"
    },
    {
      id: "martelinho",
      title: "Martelinho de Ouro",
      description: "O martelinho de ouro é uma técnica artesanal de funilaria que remove amassados de veículos sem danificar a pintura original. Utilizando ferramentas especiais e alavancas, profissionais moldam a lataria de dentro para fora, devolvendo a forma original com precisão. É ideal para pequenos/médios danos (granizo, batidas de porta), oferecendo reparo rápido, econômico e ecológico",
      icon: <Hammer className="w-7 h-7" />,
      imageSrc: "/service4.jpg"
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-zinc-800 overflow-x-hidden">
      <Hero slides={heroSlides} />
      <main>
        <Services 
          title={servicesData.title}
          subtitle={servicesData.subtitle}
          services={servicesData.items}
        />
        <ProcessSection />
        <ContactForm />
      </main>
    </div>
  );
}
