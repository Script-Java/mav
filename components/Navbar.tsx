"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { 
    href: "/servicos", 
    label: "Serviços",
    subLinks: [
      { href: "/servicos/estetica-automotiva", label: "Estética Automotiva" },
      { href: "/servicos/funilaria-e-pintura", label: "Funilaria e Pintura" },
      { href: "/servicos/martelinho-de-ouro", label: "Martelinho de Ouro" },
      { href: "/servicos/pintura-automotiva-premium", label: "Pintura Automotiva Premium" },
      { href: "/servicos/polimento-tecnico", label: "Polimento Técnico" },
      { href: "/servicos/ppf", label: "PPF" },
      { href: "/servicos/vitrificacao-ceramica", label: "Vitrificação Cerâmica" },
    ]
  },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full glass-panel border-b border-t-0 border-l-0 border-r-0 transition-all duration-300 ${
          scrolled ? "bg-black/60" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt="Mavericks Collision Logo"
                  width={220}
                  height={65}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-row items-center space-x-8">
              <div className="flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className="hover:text-[#ff4500] transition-colors text-sm font-medium py-4 flex items-center gap-1"
                    >
                      {link.label}
                      {link.subLinks && (
                        <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    {link.subLinks && (
                      <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col mt-2">
                          {link.subLinks.map(subLink => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
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

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[280px] bg-[#0a0a0a] border-l border-white/10 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6 gap-2 h-full overflow-y-auto pb-8">
          {navLinks.map((link) => (
            <div key={link.href} className="flex flex-col">
              <Link
                href={link.href}
                onClick={() => !link.subLinks && setIsOpen(false)}
                className="py-3 px-4 rounded-xl text-white font-medium hover:bg-white/5 hover:text-[#ff4500] transition-colors flex items-center justify-between"
              >
                {link.label}
              </Link>
              {link.subLinks && (
                <div className="flex flex-col pl-4 mt-1 mb-2 border-l border-white/10 ml-6 gap-1">
                  {link.subLinks.map(sub => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 px-4 rounded-lg text-zinc-400 text-sm hover:bg-white/5 hover:text-[#ff4500] transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 pt-6 border-t border-white/10">
            <a
              href="https://www.google.com/maps?rlz=1C1HKFL_enUS1199US1199&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGJIDGLEDGMkDGIAEMgYIAhBFGDkyCAgDEEUYJxg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxNTc3ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYdbOwqc5dyUMY6t6x2v-dts&daddr=R.+Jo%C3%A3o+Parolin,+720+-+Prado+Velho,+Curitiba+-+PR,+80220-290,+Brazil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#ff4500] hover:bg-[#e03d00] text-white px-5 py-3 rounded-full font-semibold text-sm transition-all shadow-lg shadow-[#ff4500]/25"
            >
              <MapPin size={16} />
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
