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
                <p className="text-xs text-muted">Orari: {site.bookingHours}</p>
                {site.schedulingUrl && (
                  <a
                    href={site.schedulingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-sage-700 px-5 py-2.5 text-sm font-bold text-sage-800 transition hover:bg-sage-700 hover:text-cream"
                  >
                    <IconClock className="h-4 w-4" />
                    Prenota online
                  </a>
                )}
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
            <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-sand/80 px-4 py-3 text-base leading-relaxed text-meta">
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

        <section id="privacy" className="mt-10 pt-8 border-t border-sage-900/5">
          <SectionHeading eyebrow="Privacy" title="Informativa privacy" />
          <p className="mt-4 text-sm leading-relaxed text-ink/70 max-w-xl">
            Il modulo di contatto non invia né archivia dati sul sito: prepara
            un messaggio e lo apre in WhatsApp, dove puoi rileggerlo prima di
            inviarlo. WhatsApp è un soggetto terzo: per questo ti chiediamo di
            non inserire dettagli sanitari non necessari nella prima richiesta.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            I dati che inserisci (nome, telefono facoltativo, messaggio)
            restano sul tuo dispositivo finché non decidi di inviare la chat.
            Non usiamo cookie di tracciamento di terze parti.
          </p>
          <p className="mt-3 text-xs text-ink/50">
            Informativa completa in pubblicazione. Per esercitare i tuoi
            diritti o chiedere la cancellazione, scrivimi su WhatsApp o chiama
            direttamente lo studio.
          </p>
        </section>
      </section>
    </>
  );
}
