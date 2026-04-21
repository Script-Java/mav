import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mavericks Collision | Oficina Premium de Funilaria e Estética Automotiva em Curitiba',
  description: 'Especialistas em funilaria e pintura premium, estética automotiva, PPF e martelinho de ouro em Curitiba. Atendimento de alto padrão para clientes exigentes.',
  keywords: ['funilaria e pintura Curitiba', 'estética automotiva Curitiba', 'PPF Curitiba preço', 'martelinho de ouro Curitiba', 'pintura automotiva Curitiba', 'oficina premium', 'vitrificação cerâmica Curitiba'],
  authors: [{ name: 'Mavericks Collision' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Mavericks Collision | Oficina Premium em Curitiba',
    description: 'Especialistas em funilaria e pintura premium, estética automotiva, PPF e martelinho de ouro. Excelência e tecnologia para o seu veículo em Curitiba.',
    url: 'https://mavscollision.com.br',
    siteName: 'Mavericks Collision',
    images: [
      {
        url: '/assets/logo.png',
        width: 800,
        height: 600,
        alt: 'Mavericks Collision Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-background text-white antialiased relative`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
