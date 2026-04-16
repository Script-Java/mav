import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import { Wrench, Paintbrush, Sparkles, Hammer } from "lucide-react";

// Data passed as props representing potential CMS data
const heroSlides = [
  {
    title: "Estética Automotiva de Alta Performance",
    subtitle: "Elevando o padrão automotivo com tecnologia, precisão e acabamento impecável para clientes exigentes.",
    backgroundImageSrc: "/hero-bg.png"
  },
  {
    title: "Repintura Premium",
    subtitle: "Vernizes importados e cura em laboratório para perfeição tridimensional incomparável.",
    backgroundImageSrc: "/placeholder-car.jpg"
  },
  {
    title: "Funilaria de Precisão",
    subtitle: "Recuperação estrutural definitiva. Manutenção 100% da originalidade garantida.",
    backgroundImageSrc: "/placeholder-car.jpg"
  }
];

const servicesData = {
  title: "Nossos Serviços",
  subtitle: "Especialidade premium para o cuidado absoluto do seu veículo.",
  items: [
    {
      id: "funilaria",
      title: "Funilaria de Precisão",
      description: "Restauração estrutural milimétrica, mantendo a originalidade e segurança do seu veículo com equipamentos de última geração.",
      icon: <Wrench className="w-7 h-7" />,
      imageSrc: "/placeholder-car.jpg"
    },
    {
      id: "pintura",
      title: "Pintura Premium",
      description: "Acabamento de alto brilho e durabilidade utilizando tintas e vernizes importados, garantindo a tonalidade perfeita original.",
      icon: <Paintbrush className="w-7 h-7" />,
      imageSrc: "/placeholder-car.jpg"
    },
    {
      id: "polimento",
      title: "Polimento Técnico",
      description: "Correção de pintura detalhada em múltiplos estágios para um brilho vitrificado, eliminando riscos e imperfeições.",
      icon: <Sparkles className="w-7 h-7" />,
      imageSrc: "/placeholder-car.jpg"
    },
    {
      id: "martelinho",
      title: "Martelinho de Ouro",
      description: "Remoção de desgastes e amassados mantendo a pintura original 100% intacta, ideal para pequenos reparos com rápidez.",
      icon: <Hammer className="w-7 h-7" />,
      imageSrc: "/placeholder-car.jpg"
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
