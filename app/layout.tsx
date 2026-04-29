import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mavericks Collision | Estética Automotiva Premium em Curitiba",
  description:
    "Especialistas em funilaria de precisão, pintura, PPF, vitrificação cerâmica, polimento técnico e martelinho de ouro em Curitiba. Tecnologia de ponta para veículos de luxo e alto padrão.",
  keywords: [
    "funilaria Curitiba",
    "pintura automotiva Curitiba",
    "PPF Curitiba",
    "vitrificação cerâmica Curitiba",
    "martelinho de ouro Curitiba",
    "estética automotiva premium",
    "detalhamento automotivo",
    "polimento técnico",
    "Mavericks Collision",
    "funilaria e pintura Curitiba",
    "PPF Curitiba preço",
    "oficina premium",
  ],
  authors: [{ name: "Mavericks Collision" }],
  creator: "Mavericks Collision",
  metadataBase: new URL("https://maverickscollision.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Mavericks Collision",
    title: "Mavericks Collision | Estética Automotiva Premium em Curitiba",
    description:
      "Especialistas em funilaria de precisão, pintura, PPF, vitrificação cerâmica e martelinho de ouro em Curitiba. Tecnologia de ponta para veículos de luxo.",
    images: [
      {
        url: "/hero-slide-1.jpg",
        width: 1200,
        height: 630,
        alt: "Mavericks Collision - Estética Automotiva Premium em Curitiba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavericks Collision | Estética Automotiva Premium em Curitiba",
    description:
      "Especialistas em funilaria de precisão, pintura, PPF, vitrificação cerâmica e martelinho de ouro em Curitiba.",
    images: ["/hero-slide-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "Mavericks Collision",
    description:
      "Especialistas em estética automotiva premium, funilaria de precisão, pintura, PPF, vitrificação cerâmica e martelinho de ouro em Curitiba.",
    url: "https://maverickscollision.com.br",
    telephone: "+5541984580071",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. João Parolin, 720",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80220-290",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-25.4482",
      longitude: "-49.2382",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$$$",
    image: "https://maverickscollision.com.br/hero-slide-1.jpg",
  };

  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-background text-white antialiased relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
