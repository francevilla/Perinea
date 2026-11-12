import type { Metadata } from "next";
import { site } from "@/lib/site";
import AddressCard from "@/components/address-card";
import ContactForm from "@/components/contact-form";
import SectionHeading from "@/components/section-heading";
import Breadcrumb from "@/components/breadcrumb";
import { IconClock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contatti e prenotazioni | Ostetrica a Casalecchio",
  alternates: { canonical: "/contatti" },
  description:
    "Contattami tramite il modulo per prenotare una visita ostetrica o di riabilitazione del pavimento pelvico a Casalecchio e San Lazzaro.",
};

export default function ContattiPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <SectionHeading
          eyebrow="Contatti"
          title="Sono qui per ascoltarti"
          description="Usa il modulo per contattarmi: rispondo personalmente a ogni messaggio."
          level={1}
        />
      </section>

      <Breadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Contatti", path: "/contatti" },
        ]}
      />

      <section className="container-site grid gap-8 py-14 sm:py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card p-6 sm:p-8">
            <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-sand/80 px-4 py-3 text-base leading-relaxed text-meta">
              <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-600" />
              {site.bookingNote} Pagamenti accettati: {site.payment.join(", ")}.
            </p>
          </div>

          <div className="space-y-5">
            {site.addresses.map((address) => (
              <AddressCard key={address.id} address={address} headingLevel={2} />
            ))}
          </div>
        </div>

        <div>
          <ContactForm />
        </div>

        <section id="privacy" className="mt-10 pt-8 border-t border-sage-900/5">
          <SectionHeading eyebrow="Privacy" title="Informativa privacy" />
          <p className="mt-4 text-sm leading-relaxed text-ink/70 max-w-xl">
            Il modulo di contatto trasmette nome, email, telefono (facoltativo)
            e messaggio alla mia casella email tramite Web3Forms, un servizio di
            terze parti che inoltra le submission per email. Il sito non
            archivia i dati del modulo e non imposta cookie di tracciamento di
            terze parti. Per proteggere la tua riservatezza, evita di inserire
            dettagli sanitari non necessari nella prima richiesta.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            I dati che inserisci vengono trattati per rispondere alla tua
            richiesta e fissare un appuntamento. Puoi accedere, rettificare,
            cancellare o limitare il trattamento, e opporti in qualsiasi
            momento: scrivimi tramite il modulo dei contatti.
          </p>
          <p className="mt-3 text-xs text-ink/50">
            Informativa completa: <a href="/privacy">Privacy · Perinea</a>.
          </p>
        </section>
      </section>
    </>
  );
}
