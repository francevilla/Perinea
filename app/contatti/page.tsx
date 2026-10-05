import type { Metadata } from "next";
import { site } from "@/lib/site";
import AddressCard from "@/components/address-card";
import ContactForm from "@/components/contact-form";
import SectionHeading from "@/components/section-heading";
import {
  IconClock,
  IconPhone,
  IconWhatsApp,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contatti",
  alternates: { canonical: "/contatti" },
  description:
    "Contatta la Dott.ssa Isabel Lombardini: telefono, WhatsApp e recapiti della clinica Native Medica a Casalecchio di Reno e San Lazzaro di Savena.",
};

export default function ContattiPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <SectionHeading
          eyebrow="Contatti"
          title="Sono qui per ascoltarti"
          description="Chiamami, scrivimi su WhatsApp o usa il modulo: rispondo personalmente a ogni messaggio."
        />
      </section>

      <section className="container-site grid gap-8 py-14 sm:py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <IconPhone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
                    Telefono
                  </p>
                  <a
                    href={site.phoneHref}
                    className="font-serif text-2xl font-semibold text-sage-900 transition hover:text-terracotta-600"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-accent shrink-0"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-sand/80 px-4 py-3 text-sm leading-relaxed text-ink/70">
              <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-600" />
              {site.bookingNote} Pagamenti accettati: {site.payment.join(", ")}.
            </p>
          </div>

          <div className="space-y-5">
            {site.addresses.map((address) => (
              <AddressCard key={address.id} address={address} />
            ))}
          </div>
        </div>

        <div>
          <ContactForm />
          <p className="mt-4 px-2 text-xs leading-relaxed text-ink/60">
            Il modulo non invia né archivia il messaggio sul sito. Dopo averlo
            preparato, si apre WhatsApp: potrai rileggerlo e inviarlo tu. Per
            proteggere la tua riservatezza, evita di inserire dettagli sanitari
            non necessari.
          </p>
        </div>
      </section>
    </>
  );
}

