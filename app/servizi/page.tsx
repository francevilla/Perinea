import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import SectionHeading from "@/components/section-heading";
import Breadcrumb from "@/components/breadcrumb";
import { IconMail } from "@/components/icons";

export const metadata: Metadata = {
  title: "Servizi in aggiornamento | Pavimento pelvico e ostetricia",
  alternates: { canonical: "/servizi" },
  description:
    "Stiamo riorganizzando i percorsi di cura: servizi a domicilio e presso la clinica Native Medica. Torna presto per il nuovo listino. Per contatti usa il modulo nella pagina Contatti.",
};

export default function ServiziPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <SectionHeading
          eyebrow="Servizi"
          title="I nostri percorsi sono in aggiornamento"
          description="Stiamo riorganizzando i servizi in due percorsi distinti: prestazioni a domicilio e visite presso la clinica Native Medica (Casalecchio di Reno e San Lazzaro di Savena). Torna presto per scoprire il nuovo listino."
          level={1}
        />
      </section>

      <Breadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
        ]}
      />

      <section className="container-site py-14 sm:py-20">
        <div className="rounded-3xl bg-sand/80 p-6 sm:p-10 text-center sm:text-left">
          <h2 className="font-serif text-3xl font-semibold text-sage-900 sm:text-4xl">
            In aggiornamento
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base sm:mt-6">
            I percorsi di cura della Dott.ssa Isabel Lombardini vengono
            riorganizzati in due ambiti:
          </p>
          <ul className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-ink/80 sm:text-base sm:mt-8 sm:text-left">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                <IconMail className="h-3 w-3" />
              </span>
              <span>
                <strong>Servizi a domicilio</strong> — contattami tramite il
                modulo per fissare un appuntamento.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                <IconMail className="h-3 w-3" />
              </span>
              <span>
                <strong>Visite presso Native Medica</strong> — prenotazione
                esclusivamente dal portale della clinica su MioDottore.
              </span>
            </li>
          </ul>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 justify-center sm:justify-start">
            <Link
              href="/contatti"
              className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-terracotta-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-terracotta-800"
            >
              <IconMail className="h-4 w-4" />
              Scrivimi tramite il modulo
            </Link>
          </div>
        </div>
      </section>

      <nav aria-label="Pagine correlate" className="mt-10 flex flex-wrap gap-3 justify-center">
        <Link href="/contatti" className="btn-outline">
          Contatti e prenotazioni
        </Link>
        <Link href="/chi-siamo" className="btn-outline">
          Il mio percorso professionale
        </Link>
      </nav>
    </>
  );
}
