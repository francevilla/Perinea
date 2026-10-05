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

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: `${site.doctorFullName} · ${site.role}`,
  url: site.url,
  telephone: site.phoneHref.replace("tel:", ""),
  description: site.specialization,
  address: site.addresses.map((address) => ({
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city.replace(/\s*\(BO\)$/, ""),
    postalCode: address.cap,
    addressCountry: "IT",
  })),
  availableService: [
    "Riabilitazione del pavimento pelvico",
    "Visite ostetriche per gravidanze a basso rischio",
    "Consulenza allattamento",
    "Corsi pre-parto di coppia",
  ],
}).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

