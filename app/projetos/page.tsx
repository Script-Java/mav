import SafeImage from "@/components/ClientImage";
import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata = {
  title: "Projetos | Mavericks Collision",
  description: "Galeria de projetos de estética e repintura automotiva de alto padrão.",
};

const projetos = [
  {
    id: "proj-1",
    titulo: "Restauração Porsche 911",
    descricao: "Polimento técnico e vitrificação completa.",
    imgAntes: "/placeholder-car.jpg", // Mock images
    imgDepois: "/placeholder-car.jpg"
  },
  {
    id: "proj-2",
    titulo: "Pintura Premium BMW M3",
    descricao: "Pintura completa com tonalidade original de fábrica.",
    imgAntes: "/placeholder-car.jpg",
    imgDepois: "/placeholder-car.jpg"
  }
];

export default function ProjetosPage() {
  return (
    <div className="pt-24 min-h-screen">
      <SectionWrapper>
        <FadeIn>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Nossos Projetos
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              O resultado da nossa obsessão pela perfeição. Arraste para comparar o antes e depois.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          {projetos.map((projeto, index) => (
            <FadeIn key={projeto.id} delay={0.2 + (index * 0.1)}>
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="w-full lg:w-1/3">
                  <h3 className="text-3xl font-bold text-white mb-4">{projeto.titulo}</h3>
                  <p className="text-zinc-400">{projeto.descricao}</p>
                </div>
                
                <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-white tracking-wider uppercase">Antes</div>
                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-500">
                      {/* Placeholder fallbacks since actual imagery might be missing */}
                      <SafeImage 
                        src={projeto.imgAntes} 
                        alt={`${projeto.titulo} Antes`} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-50"
                      />
                      <span>Imagem Pré-Operação</span>
                    </div>
                  </div>
                  
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#ff4500]/80 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-white tracking-wider uppercase">Depois</div>
                    <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-zinc-500">
                      <SafeImage 
                        src={projeto.imgDepois} 
                        alt={`${projeto.titulo} Depois`} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-50"
                      />
                      <span>Resultado Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
