import type { Metadata } from "next";
import { site } from "@/lib/site";
import SectionHeading from "@/components/section-heading";
import Breadcrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy – Trattamento dati personali · Perinea",
  alternates: { canonical: "/privacy" },
  description:
    "Informativa privacy della Dott.ssa Isabel Lombardini: come trattiamo i tuoi dati, i tuoi diritti e come esercitarli.",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />
      <section className="container-site pt-14 sm:pt-20">
        <SectionHeading
          eyebrow="Privacy"
          title="Informativa privacy"
          description="Come trattiamo i tuoi dati personali e quali sono i tuoi diritti."
          level={1}
        />
      </section>
      <section className="container-space py-16 sm:py-24 max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-6">
          Titolare del trattamento
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-ink/75">
          Il titolare del trattamento è la{" "}
          <strong className="font-semibold text-sage-900">
            Dott.ssa Isabel Lombardini
          </strong>{" "}
          (Perinea), ostetrica, ricevente presso la clinica Native Medica.
        </p>
        <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-6 mt-10">
          Finalità e base giuridica
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-ink/75">
          I dati raccolti tramite il modulo di contatto servono esclusivamente a
          rispondere alla tua richiesta e fissare un appuntamento. La base
          giuridica è il tuo consenso e l'esecuzione di misure precontrattuali.
        </p>
        <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-6 mt-10">
          I tuoi diritti
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-ink/75">
          Puoi accedere, rettificare, cancellare o limitare il trattamento dei
          tuoi dati, e opporti in qualsiasi momento. Scrivi su WhatsApp o chiama
          direttamente lo studio per esercitare i tuoi diritti.
        </p>
      </section>
    </>
  );
}
