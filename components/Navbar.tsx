import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo.png" alt="Mavericks Collision Logo" width={220} height={65} className="object-contain" priority />
            </Link>
          </div>
          <div className="hidden md:flex flex-row items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <Link href="/" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Início
              </Link>
              <Link href="/sobre-nos" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Serviços
              </Link>
              <Link href="/projetos" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Portfólio
              </Link>
              <Link href="/contato" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Agendar Avaliação
              </Link>
            </div>
            <a 
              href="https://www.google.com/maps?rlz=1C1HKFL_enUS1199US1199&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGJIDGLEDGMkDGIAEMgYIAhBFGDkyCAgDEEUYJxg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxNTc3ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYdbOwqc5dyUMY6t6x2v-dts&daddr=R.+Jo%C3%A3o+Parolin,+720+-+Prado+Velho,+Curitiba+-+PR,+80220-290,+Brazil" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#ff4500] hover:bg-[#e03d00] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-[#ff4500]/25 flex items-center gap-2 hover:scale-105"
            >
              <MapPin size={16} />
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
