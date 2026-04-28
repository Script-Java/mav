import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto glass-panel border border-b-0 border-r-0 border-l-0 rounded-t-xl mx-4 sm:mx-6 lg:mx-8 mb-4">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400 flex flex-col items-start gap-4">
          <Image src="/assets/logo.png" alt="Mavericks Collision Logo" width={180} height={50} className="object-contain" />
          <span>&copy; {new Date().getFullYear()} Mavericks. Todos os direitos reservados.</span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-4 md:mt-0 text-sm">
          <Link href="/servicos/funilaria-e-pintura" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Funilaria e Pintura
          </Link>
          <Link href="/servicos/ppf" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            PPF
          </Link>
          <Link href="/servicos/vitrificacao-ceramica" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Vitrificação
          </Link>
          <Link href="/servicos/martelinho-de-ouro" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Martelinho de Ouro
          </Link>
          <Link href="/sobre-nos" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Sobre Nós
          </Link>
          <Link href="/contato" className="text-gray-400 hover:text-[#ff4500] transition-colors">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
