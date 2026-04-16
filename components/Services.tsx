import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./FadeIn";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

interface ServicesProps {
  title: string;
  subtitle: string;
  services: ServiceData[];
}

export default function Services({ title, subtitle, services }: ServicesProps) {
  const ambientGlows = (
    <>
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"></div>
    </>
  );

  return (
    <SectionWrapper id="servicos" className="overflow-hidden bg-[#050505]" background={ambientGlows}>
      <FadeIn delay={0.1}>
        <div className="mb-20 flex flex-col md:flex-row gap-10 items-end">
          <div className="flex-1">
            <div className="inline-block py-1 px-3 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">Excelência em Detalhes</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              {title}
            </h2>
          </div>
          <div className="flex-1 md:text-right">
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg md:ml-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.id} delay={0.2 + (index * 0.1)}>
            <ServiceCard 
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
            />
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
