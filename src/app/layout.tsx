import type { Metadata } from "next";
import { Source_Serif_4, Inter, IBM_Plex_Mono, Caveat } from "next/font/google";
import { Topbar } from "@/components/Topbar";
import { PageTransition } from "@/components/PageTransition";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Geraldo Neto",
  description:
    "Analista de sistemas, economista e gestor de operações — tecnologia, liderança e resultado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${sourceSerif.variable} ${inter.variable} ${plexMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col paper-texture">
        <LanguageProvider>
          <Topbar />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
