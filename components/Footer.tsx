"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="mt-auto border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6">
          <div className="flex-shrink-0">
            <Image src="/assets/logo.png" alt="Mavericks Collision Logo" width={140} height={40} className="object-contain" />
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right">
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-1.5 text-xs text-zinc-400 max-w-3xl">
              <span className="text-zinc-300 font-medium w-full lg:w-auto mb-1 lg:mb-0 lg:mr-2">Serviços:</span>
              <Link href="/servicos/estetica-automotiva" className="hover:text-[#ff4500] transition-colors">Estética Automotiva</Link>
              <Link href="/servicos/funilaria-e-pintura" className="hover:text-[#ff4500] transition-colors">Funilaria e Pintura</Link>
              <Link href="/servicos/martelinho-de-ouro" className="hover:text-[#ff4500] transition-colors">Martelinho de Ouro</Link>
              <Link href="/servicos/pintura-automotiva-premium" className="hover:text-[#ff4500] transition-colors">Pintura Automotiva</Link>
              <Link href="/servicos/polimento-tecnico" className="hover:text-[#ff4500] transition-colors">Polimento Técnico</Link>
              <Link href="/servicos/ppf" className="hover:text-[#ff4500] transition-colors">PPF</Link>
              <Link href="/servicos/vitrificacao-ceramica" className="hover:text-[#ff4500] transition-colors">Vitrificação</Link>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-xs text-zinc-500">
              <Link href="/" className="hover:text-[#ff4500] transition-colors">Início</Link>
              <Link href="/projetos" className="hover:text-[#ff4500] transition-colors">Projetos</Link>
              <Link href="/sobre-nos" className="hover:text-[#ff4500] transition-colors">Sobre Nós</Link>
              <Link href="/contato" className="hover:text-[#ff4500] transition-colors">Contato</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/5 text-center text-[10px] uppercase tracking-widest text-zinc-600">
          &copy; {year || "2026"} Mavericks Collision. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
