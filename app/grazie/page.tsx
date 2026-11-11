import type { Metadata } from "next";
import { site } from "@/lib/site";
import SectionHeading from "@/components/section-heading";
import CtaBanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Grazie per il tuo messaggio · Perinea",
  alternates: { canonical: "/grazie" },
  description:
    "Il tuo messaggio è arrivato alla Dott.ssa Isabel Lombardini: risponderà personalmente entro 24 ore.",
  robots: { index: false, follow: false },
};

export default function GraziePage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <SectionHeading
          eyebrow="Messaggio inviato"
          title="Grazie, il tuo messaggio è arrivato."
          level={1}
        />
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-ink/70 sm:text-lg text-center">
          È nella mia casella email: lo leggo con calma e ti rispondo entro
          <strong className="font-semibold text-sage-900">24 ore</strong>.
        </p>
      </section>

      <section className="container-site py-16 sm:py-24">
        <h2 className="font-serif text-2xl font-semibold text-sage-900 mb-8">
          Cosa succede ora
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-3">
          <li className="card p-6 sm:p-7">
            <p className="font-serif text-3xl font-semibold text-terracotta-600">
              01
            </p>
            <h3 className="mt-3 font-serif text-xl font-semibold text-sage-900">
              Ci conosciamo
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Mi racconti cosa ti porta qui; ascolto le tue esigenze e le tue
              domande.
            </p>
          </li>
          <li className="card p-6 sm:p-7">
            <p className="font-serif text-3xl font-semibold text-terracotta-600">
              02
            </p>
            <h3 className="mt-3 font-serif text-xl font-semibold text-sage-900">
              Valutiamo insieme
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              In base al motivo della visita, concordiamo la valutazione più
              adatta e i suoi obiettivi.
            </p>
          </li>
          <li className="card p-6 sm:p-7">
            <p className="font-serif text-3xl font-semibold text-terracotta-600">
              03
            </p>
            <h3 className="mt-3 font-serif text-xl font-semibold text-sage-900">
              Definiamo i prossimi passi
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Ti spiego le possibilità e scegliamo insieme come proseguire,
              senza impegno a iniziare un percorso.
            </p>
          </li>
        </ol>
        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-meta">
          La durata indicativa del primo colloquio è di circa un’ora. La
          valutazione e gli eventuali trattamenti vengono concordati in base
          alla tua situazione.
        </p>
      </section>

      <CtaBanner />

      <section className="container-site py-14 sm:py-20">
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-ink/70">
          Il tuo messaggio non viene archiviato sul sito: leggo la tua email
          per risponderti. Non inserire dettagli sanitari non necessari.{" "}
          <a
            href="/privacy"
            className="font-bold text-terracotta-600 underline underline-offset-2 hover:text-terracotta-700"
          >
            Leggi l’informativa completa
          </a>
          .
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-ink/70">
          Non hai appena inviato un messaggio? Scrivimi comunque.{" "}
          <a
            href="/contatti"
            className="font-bold text-terracotta-600 underline underline-offset-2 hover:text-terracotta-700"
          >
            Torna ai contatti
          </a>
          .
        </p>
      </section>
    </>
  );
}
