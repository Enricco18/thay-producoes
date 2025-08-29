import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import Parallax from "@/components/parallax";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Thayná Vergara - Fotografia e Produções Audiovisuais Profissionais",
    template: "%s | Thayná Vergara Produções",
  },
  description:
    "Fotógrafa profissional especializada em ensaios, eventos, gastronomia e produtos. Portfolio completo de Thayná Vergara com trabalhos em Santos, São Paulo, Guarujá, São Vicente e região.",
  keywords: [
    "fotografia profissional",
    "ensaios fotográficos",
    "eventos",
    "produtos",
    "Guarujá",
    "São Vicente",
    "Santos",
    "São Paulo",
    "Reels",
    "Stories",
    "Propagandas",
    "Thayná Vergara",
    "fotógrafa",
    "produções audiovisuais",
  ],
  authors: [
    { name: "Thayná Vergara", url: "https://www.instagram.com/vergarathay" },
  ],
  developer: "EDLA",
  creator: "Thayná Vergara",
  publisher: "Thayná Vergara Produções",
  metadataBase: new URL("https://www.thaynavergara.com"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.thaynavergara.com",
    title: "Thayná Vergara - Fotografia e Produções Audiovisuais Profissionais",
    description:
      "Fotógrafa profissional especializada em ensaios, eventos, gastronomia e produtos. Portfolio completo de Thayná Vergara com trabalhos em Santos, São Paulo, Guarujá, São Vicente  e região.",
    siteName: "Thayná Vergara Produções",
    images: [
      {
        url: "/logo-h-black.png",
        width: 1200,
        height: 630,
        alt: "Thayná Vergara - Portfolio de Fotografia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thayná Vergara - Fotografia e Produções Audiovisuais",
    description:
      "Fotógrafa profissional especializada em ensaios, eventos, gastronomia e produtos.",
    images: ["/logo-h-black.png"],
    creator: "@vergarathay",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  other: {
    'referrer-policy': 'no-referrer-when-downgrade',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} overscroll-none`}>
        <Analytics />
        <SidebarProvider>
          <main className="w-dvw flex flex-col min-h-dvh">
            <Header />
            <Parallax />
            <div className="z-10">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
