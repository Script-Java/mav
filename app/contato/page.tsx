import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata = {
  title: "Contato | Mavericks Collision",
  description: "Entre em contato conosco e agende sua avaliação técnica.",
};

export default function ContatoPage() {
  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center">
      <SectionWrapper>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
              Agende sua Avaliação
            </h1>
            <p className="text-lg text-zinc-400 font-light">
              Estamos prontos para atender você e transformar o seu veículo.
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>
      
      <ContactForm />
    </div>
  );
}
