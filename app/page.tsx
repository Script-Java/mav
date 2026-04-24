import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import TrustIndicators from "@/components/TrustIndicators";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import { Paintbrush, Sparkles, Hammer, Shield } from "lucide-react";

const heroSlides = [
  {
    title: "Especialistas em Funilaria e Pintura em Curitiba",
    subtitle: "A Mavericks Collision é a referência em estética automotiva de alto padrão em Curitiba. Combinamos artesanato premium e tecnologia avançada para carros de luxo e clientes exigentes.",
    backgroundImageSrc: "/assets/a1.jpeg"
  },
  {
    title: "PPF Curitiba: Proteção Absoluta",
    subtitle: "Aplicação premium de Paint Protection Film (PPF) em Curitiba. Uma blindagem invisível que preserva a pintura do seu veículo contra riscos e impactos do dia a dia, com acabamento nível concessionária.",
    backgroundImageSrc: "/assets/11.22.21.jpeg"
  },
  {
    title: "Martelinho de Ouro Premium",
    subtitle: "Remoção cirúrgica de amassados com preservação 100% da pintura original. Nossa equipe técnica especializada em Curitiba garante que a estrutura e estética do seu carro de luxo sejam mantidas impecáveis.",
    backgroundImageSrc: "/assets/11.21.08.jpeg"
  }
];

const servicesData = {
  title: "Excelência em Estética Automotiva",
  subtitle: "Soluções de alto padrão para quem exige a perfeição em cada detalhe.",
  items: [
    {
      id: "funilaria-pintura",
      title: "Funilaria e Pintura Premium",
      description: "Reparo automotivo em Curitiba com alinhamento milimétrico, uso de materiais importados e cabine de pintura de última geração. Acabamento impecável e garantia absoluta.",
      icon: <Paintbrush className="w-7 h-7" />,
      imageSrc: "/assets/a2.jpeg"
    },
    {
      id: "ppf",
      title: "PPF (Paint Protection Film)",
      description: "Blindagem de poliuretano com tecnologia auto-healing (autocicatrizante). Proteção definitiva contra pedras, riscos e marcas de lavagem, mantendo o brilho impecável.",
      icon: <Shield className="w-7 h-7" />,
      imageSrc: "/assets/11.21.39.jpeg"
    },
    {
      id: "martelinho",
      title: "Martelinho de Ouro",
      description: "Técnica artesanal de alta precisão que remove amassados de carros premium sem a necessidade de repintura, preservando a originalidade e o valor de revenda do veículo.",
      icon: <Hammer className="w-7 h-7" />,
      imageSrc: "/assets/11.20.08.jpeg"
    },
    {
      id: "polimento",
      title: "Polimento Técnico e Vitrificação",
      description: "Correção avançada de verniz para remoção de micro-riscos. Selamento da pintura com vitrificação cerâmica, garantindo hidrofobia, proteção UV e brilho espelhado prolongado.",
      icon: <Sparkles className="w-7 h-7" />,
      imageSrc: "/assets/b1.jpeg"
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
        <BeforeAfterShowcase />
        <ProcessSection />
        <FAQSection />
        <ContactForm />
      </main>
    </div>
  );
}
