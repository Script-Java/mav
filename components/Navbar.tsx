import Link from 'next/link';
import Image from 'next/image';

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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Início
              </Link>
              <Link href="/servicos" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Serviços
              </Link>
              <Link href="/projetos" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Projetos
              </Link>
              <Link href="/contato" className="hover:text-[#ff4500] transition-colors text-sm font-medium">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
