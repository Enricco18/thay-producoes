import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import Parallax from "@/components/parallax";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thayná Vergara | Produções ",
  description: "Venha conhecer meus trabalhos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} overscroll-none`}>
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
