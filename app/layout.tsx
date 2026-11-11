import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/nunito-sans/latin-400.css";
import "@fontsource/nunito-sans/latin-600.css";
import "@fontsource/nunito-sans/latin-700.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { site } from "@/lib/site";
import JsonLd from "@/components/json-ld";
import { organizationSchema } from "@/lib/schema";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Perinea – Ostetrica salute pelvica e ostetricia",
    template: "%s · Perinea",
  },
  description:
    "Riabilitazione del pavimento pelvico, visite ostetriche e corsi pre-parto a Casalecchio di Reno e San Lazzaro di Savena. Prenota con la Dott.ssa Isabel Lombardini.",
  openGraph: {
    title: "Perinea · Dott.ssa Isabel Lombardini, Ostetrica",
    description:
      "Riabilitazione del pavimento pelvico, ostetricia, allattamento e corsi pre-parto a Casalecchio di Reno e San Lazzaro di Savena.",
    url: site.url,
    siteName: "Perinea",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Perinea — Dott.ssa Isabel Lombardini, ostetrica, salute pelvica della donna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perinea · Dott.ssa Isabel Lombardini, Ostetrica",
    description:
      "Riabilitazione del pavimento pelvico, ostetricia, allattamento e corsi pre-parto a Casalecchio di Reno e San Lazzaro di Savena.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/favicon.svg",
  },
  alternates: { canonical: "/" },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationSchema()} />
        <a href="#main" className="skip-link">
          Vai al contenuto
        </a>
        <Header />
        <main className="flex-1" id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

