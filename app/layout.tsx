import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/800.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Perinea · Dott.ssa Isabel Lombardini, Ostetrica",
    template: "%s · Perinea",
  },
  description:
    "Dott.ssa Isabel Lombardini, ostetrica a Casalecchio di Reno e San Lazzaro di Savena: riabilitazione del pavimento pelvico, gravidanze a basso rischio, allattamento e corsi pre-parto di coppia. Clinica Native Medica.",
  openGraph: {
    title: "Perinea · Dott.ssa Isabel Lombardini, Ostetrica",
    description:
      "Riabilitazione del pavimento pelvico, ostetricia, allattamento e corsi pre-parto a Casalecchio di Reno e San Lazzaro di Savena.",
    url: site.url,
    siteName: "Perinea",
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
