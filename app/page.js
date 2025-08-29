import { portfolio } from "@/lib/constants";
import List from "@/components/list";
import { CircleHelp, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Thayná Vergara - Fotógrafa Profissional Santos SP",
  description:
    "Descubra o portfolio completo de Thayná Vergara: ensaios fotográficos, eventos, produtos e mais. Fotógrafa profissional em Santos, SP.",
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Thayná Vergara",
      "alternateName": "Thayná Borges Vergara",
      "jobTitle": "Fotógrafa Profissional",
      "description": "Fotógrafa profissional especializada em ensaios, eventos, gastronomia e produtos em Santos, São Paulo, Guarujá, São Vicente e região.",
      "image": "https://www.thaynavergara.com/logo-h-black.png",
      "url": "https://www.thaynavergara.com",
      "sameAs": [
        "https://www.instagram.com/vergarathay",
        "https://wa.me/5513981193045"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-13-98119-3045",
        "contactType": "customer service",
        "email": "thaynaborgesvergara@gmail.com",
        "availableLanguage": ["Portuguese"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santos",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "offers": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Serviços de Fotografia Profissional",
          "description": "Ensaios fotográficos, cobertura de eventos, fotografia gastronômica e de produtos",
          "serviceType": "Photography Services",
          "provider": {
            "@type": "Person",
            "name": "Thayná Vergara"
          }
        }
      }
    })
  }
};

export default function Home() {
  return (
    <main>
      <section className="px-20">
        <h1 className="sr-only">
          Portfolio Thayná Vergara - Fotografia Profissional
        </h1>
        {portfolio.map((item, i) => (
          <List key={`portfolio-id-${item.id}`} portfolio={item} />
        ))}
      </section>
      <footer id="contato" className="min-w-dvw bg-black relative">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center py-20 gap-4">
          <div className="md:w-[350px] md:border-r ">
            <div className="flex flex-col md:block justify-center align-center">
              <h2 className="pb-2 font-bold">Redes sociais</h2>
              <div className="flex md:flex-col gap-2 md:gap-5 justify-between">
                <Link
                  href={"https://www.instagram.com/vergarathay"}
                  className="flex gap-2 text-sm font-light items-center"
                >
                  <Instagram />
                  <h1 className="hidden md:block">@vergarathay</h1>
                </Link>
                <Link
                  href={"mailto:thaynaborgesvergara@gmail.com"}
                  className="flex gap-2 text-sm font-light items-center"
                >
                  <Mail />
                  <h1 className="hidden md:block">
                    thaynaborgesvergara@gmail.com
                  </h1>
                </Link>
                <Link
                  href={
                    "https://wa.me/5513981193045?text=Oi%21%20Vi%20o%20seu%20portfolio%20e%20queria%20fazer%20um%20or%C3%A7amento%21"
                  }
                  className="flex gap-2 text-sm font-light items-center"
                >
                  <Phone />
                  <h1 className="hidden md:block">(13) 98119-3045</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-[350px] justify-center items-center">
            <Link
              href={
                "https://wa.me/5513981193045?text=Oi%21%20Vi%20o%20seu%20portfolio%20e%20queria%20fazer%20um%20or%C3%A7amento%21"
              }
            >
              <Button className="grow-1">Entre em contato</Button>
            </Link>
            <Link
              href={
                "https://www.canva.com/design/DAGbkcFRL5E/8D-KEffZsXsEAVxx-Xo-hA/view?utm_content=DAGbkcFRL5E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h44645e4794gt"
              }
            >
              <Button className="grow-1">
                Preços e FAQ
                <CircleHelp className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
        <p className="font-light text-sm mr-1 text-end">
          EDLA | Thayná Vergara @ 2025
        </p>
      </footer>
    </main>
  );
}
