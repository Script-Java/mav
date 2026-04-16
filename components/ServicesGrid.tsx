import Image from "next/image";
import { ServiceCardReveal } from "./FramerReveal";
import { ReactNode } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
  badge?: string;
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, index) => (
        <ServiceCardReveal key={service.id} delay={index * 0.08}>
          <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 cursor-default">
            
            {/* Image Section */}
            <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                priority={service.priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Glass overlay over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#ff4500]/80 backdrop-blur-md border border-[#ff4500]/30 text-white text-xs font-semibold tracking-widest uppercase">
                  {service.badge}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6 pt-5">
              {/* Icon + Title Row */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/10 text-[#ff4500] group-hover:bg-[#ff4500]/10 group-hover:border-[#ff4500]/20 transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Bottom CTA line */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Saiba mais</span>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#ff4500]/50 group-hover:bg-[#ff4500]/10 transition-all duration-300">
                  <svg className="w-3 h-3 text-zinc-400 group-hover:text-[#ff4500] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </ServiceCardReveal>
      ))}
    </div>
  );
}
