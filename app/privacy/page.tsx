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

        <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-6 mt-10">
          Modulo di contatto
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-ink/75">
          Quando compili il modulo di contatto, i dati che inserisci (nome,
          email, telefono facoltativo e messaggio) vengono trasmessi alla mia
          casella email tramite Web3Forms, un servizio di terze parti che
          inoltra le submission per email. Il sito non archivia i dati del
          modulo e non imposta cookie di tracciamento di terze parti.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-ink/75">
          Web3Forms dichiara di non conservare le submission: le elabora e le
          inoltra all’email di destinazione. I suoi server sono localizzati
          negli Stati Uniti (regione US-East); i possibili log contenenti dati
          personali vengono cancellati periodicamente (ogni 2 mesi). Per
          questo, ti chiediamo di non inserire dettagli sanitari non
          necessari nella prima richiesta.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-ink/75">
          Informativa completa del fornitore:{" "}
          <a
            href="https://web3forms.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-terracotta-600 underline underline-offset-2 hover:text-terracotta-700"
          >
            web3forms.com
          </a>
          .
        </p>

        <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-6 mt-10">
          Statistica del sito
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-ink/75">
          Questo sito usa Vercel Web Analytics per contare le visite alle
          pagine. Il servizio non usa cookie — né di terze parti né propri — e
          non raccoglie indirizzi IP né altri dati personali: i visitatori
          vengono identificati con un hash della richiesta, scartato dopo 24
          ore. I dati raccolti (URL di visita, referrer, geolocalizzazione a
          livello di città, sistema operativo, browser e tipo di dispositivo)
          sono usati solo in forma aggregata.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-ink/75">
          La pagina di ringraziamento dopo l’invio del modulo
          <code>/grazie</code> non viene indicizzata dai motori di ricerca e
          non contiene i tuoi dati: serve solo a contare quante richieste
          arrivano tramite il modulo di contatto.
        </p>
      </section>
    </>
  );
}
