import type { Metadata } from "next";
import { site } from "@/lib/site";
import Breadcrumb from "@/components/breadcrumb";
import SectionHeading from "@/components/section-heading";
import CtaBanner from "@/components/cta-banner";
import { IconArrowRight, IconMapPin, IconPhone, IconWhatsApp } from "@/components/icons";
import JsonLd from "@/components/json-ld";

const address = site.addresses.find((a) => a.id === "san-lazzaro")!;

export const metadata: Metadata = {
  title: "Riabilitazione pavimento pelvico San Lazzaro di Savena | Perinea",
  alternates: { canonical: "/local/san-lazzaro" },
  description:
    "Riabilitazione del pavimento pelvico a San Lazzaro di Savena con la Dott.ssa Isabel Lombardini. Ricevo presso la clinica Native Medica in Via Emilia 239. Prenota la tua visita.",
  openGraph: {
    title: "Riabilitazione pavimento pelvico San Lazzaro di Savena · Perinea",
    description:
      "Riabilitazione del pavimento pelvico a San Lazzaro di Savena con la Dott.ssa Isabel Lombardini. Ricevo presso la clinica Native Medica in Via Emilia 239.",
    url: `${site.url}/local/san-lazzaro`,
    siteName: "Perinea",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Perinea — Riabilitazione pavimento pelvico a San Lazzaro di Savena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riabilitazione pavimento pelvico San Lazzaro di Savena · Perinea",
    description:
      "Riabilitazione del pavimento pelvico a San Lazzaro di Savena con la Dott.ssa Isabel Lombardini.",
    images: ["/images/og-image.png"],
  },
};

export default function LocalSanLazzaroPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
          { name: "San Lazzaro di Savena", path: "/local/san-lazzaro" },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: `${address.structure} · San Lazzaro di Savena`,
          "@id": `${site.url}/#san-lazzaro`,
          url: `${site.url}/local/san-lazzaro`,
          telephone: site.phoneHref.replace("tel:", ""),
          medicalSpecialty: "https://schema.org/Obstetrics",
          parentOrganization: { "@id": `${site.url}/#practice` },
          address: {
            "@type": "PostalAddress",
            streetAddress: address.street,
            addressLocality: address.city.replace(/\s*\(BO\)$/, ""),
            postalCode: address.cap,
            addressCountry: "IT",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 44.4692917,
            longitude: 11.4127731,
          },
        }}
      />
      <section className="container-site pt-14 sm:pt-20">
        <SectionHeading
          eyebrow="Sede di San Lazzaro di Savena"
          title="Riabilitazione del pavimento pelvico a San Lazzaro di Savena"
          description="Ricevo presso la clinica Native Medica in Via Emilia 239. Percorsi per incontinenza, pesantezza pelvica, discomfort post-parto e benessere in menopausa."
          level={1}
        />
      </section>

      <section className="container-site grid gap-8 py-14 sm:py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600">
                <IconMapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-sage-900">
                  Clinica Native Medica — San Lazzaro di Savena
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">
                  {address.structure}<br />
                  {address.street}<br />
                  {address.city} {address.cap}
                </p>
              </div>
            </div>
            <a
              href={address.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sage-300 px-4 py-2 text-xs font-bold text-sage-800 transition hover:bg-sage-700 hover:text-cream"
            >
              Apri su Google Maps
              <IconArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                <IconPhone className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-sage-900">
                  Telefono
                </h3>
                <a
                  href={site.phoneHref}
                  className="font-serif text-2xl font-semibold text-sage-900 transition hover:text-terracotta-600"
                >
                  {site.phone}
                </a>
                <p className="mt-1 text-sm text-muted">
                  Ricevo su appuntamento
                </p>
              </div>
            </div>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn-accent shrink-0"
            >
              <IconWhatsApp className="h-4 w-4" />
              Scrivi su WhatsApp
            </a>
          </div>
        </div>

        <div>
          <section className="card p-6 sm:p-8 mb-6">
            <h3 className="font-serif text-xl font-semibold text-sage-900 mb-4">
              Cosa offro in questa sede
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-ink/75">
              <li>Riabilitazione del pavimento pelvico con biofeedback e VTONE</li>
              <li>Visite ostetriche per gravidanze a basso rischio</li>
              <li>Consulenza allattamento</li>
              <li>Corsi pre-parto di coppia</li>
              <li>Pap test e screening prevenzione</li>
            </ul>
          </section>

          <CtaBanner
            title="Prenota a San Lazzaro di Savena"
            text="Chiamami o scrivimi su WhatsApp per fissare il tuo primo colloquio presso la clinica Native Medica."
          />
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Hai domande?</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-sage-900 mb-6">
            Non sai da dove iniziare?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-ink/75 sm:text-lg">
            Descrivimi brevemente la tua situazione: ti suggerisco io il
            percorso più adatto, senza impegno.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={site.phoneHref} className="btn-accent">
              <IconPhone className="h-4 w-4" />
              Chiamami
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn-outline">
              <IconWhatsApp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
