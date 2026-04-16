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
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
              Agende sua Avaliação na <span className="text-[#ff4500]">Maverick Collision</span>
            </h1>
            <p className="text-lg text-zinc-400 font-light mb-8">
              Sua jornada para um veículo impecável começa aqui. Nossa equipe técnica especializada está pronta para entender as necessidades do seu carro e oferecer soluções sob medida, desde pequenos reparos até projetos de restauração complexos.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full md:w-auto text-left">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Visite Nossa Oficina
                </h3>
                <p className="text-zinc-400 text-sm">
                  R. João Parolin, 720 - Prado Velho<br />
                  Curitiba - PR, 80220-290, Brazil
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full md:w-auto text-left">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Atendimento Direto
                </h3>
                <p className="text-zinc-400 text-sm">
                  +55 41 98458-0071<br />
                  Seg - Sex: 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
      
      <ContactForm />
    </div>
  );
}
