import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto glass-panel border border-b-0 border-r-0 border-l-0 rounded-t-xl mx-4 sm:mx-6 lg:mx-8 mb-4">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400 flex flex-col items-start gap-4">
          <Image src="/assets/logo.png" alt="Mavericks Collision Logo" width={180} height={50} className="object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          <span>&copy; {new Date().getFullYear()} Mavericks. Todos os direitos reservados.</span>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
          <Link href="/servicos" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Serviços
          </Link>
          <Link href="/projetos" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Projetos
          </Link>
          <Link href="/sobre-nos" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Sobre Nós
          </Link>
          <Link href="/contato" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Contato
          </Link>
          <Link href="/termos" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Termos de Uso
          </Link>
          <Link href="/privacidade" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
