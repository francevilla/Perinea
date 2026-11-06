import type { Metadata } from "next";
import Link from "next/link";
import { priceDisclaimer, serviceGroups } from "@/lib/services";
import CtaBanner from "@/components/cta-banner";
import SectionHeading from "@/components/section-heading";
import Breadcrumb from "@/components/breadcrumb";
import FaqSection from "@/components/faq-section";
import { IconClock, IconSparkles } from "@/components/icons";

export const metadata: Metadata = {
  title: "Servizi e prezzi | Pavimento pelvico e ostetricia",
  alternates: { canonical: "/servizi" },
  description:
    "Riabilitazione del pavimento pelvico, visite ostetriche, screening e corsi pre-parto con prezzi indicativi. Prenota a Casalecchio di Reno.",
};

export default function ServiziPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <SectionHeading
          eyebrow="Servizi"
          title="Prendersi cura di te, con il percorso giusto"
          description="Ogni percorso inizia con un colloquio: capiamo insieme obiettivi, tempi e aspettative, poi definiamo il piano che fa per te."
          level={1}
        />
      </section>

      <Breadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
        ]}
      />

      <section id="prima-visita" className="container-site scroll-mt-24 pt-10">
        <div className="rounded-3xl bg-sand/80 p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-semibold text-sage-900">
            Cosa aspettarti dal primo appuntamento
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75 sm:text-base">
            Il primo colloquio dura indicativamente circa un’ora. Partiamo
            dalla tua storia e dalle tue domande; se pertinente, concordiamo
            una valutazione e definiamo insieme obiettivi e possibili passi
            successivi. Puoi chiedere informazioni prima di decidere se
            iniziare un percorso.
          </p>
        </div>
      </section>

      <section className="container-site space-y-10 py-14 sm:py-20">
        {serviceGroups.map((group) => (
          <div key={group.id} id={group.id} className="card p-6 sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-serif text-2xl font-semibold text-sage-900 sm:text-3xl">
                {group.title}
              </h2>
            </div>
            <p className="mt-2 max-w-2xl body-lg text-ink/70">
              {group.description}
            </p>
            <ul className="mt-7 divide-y divide-sage-900/5">
              {group.services.map((service) => (
                <li
                  key={service.name}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-ink">{service.name}</p>
                    {service.note && (
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">
                        {service.note}
                      </p>
                    )}
                  </div>
                  <span
                    className={`inline-flex w-fit shrink-0 items-center rounded-full px-4 py-1.5 text-sm font-bold ${
                      service.price === "Gratuito"
                        ? "bg-sage-100 text-sage-800"
                        : "bg-terracotta-50 text-terracotta-700"
                    }`}
                  >
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-base leading-relaxed text-meta">
          {priceDisclaimer}
        </p>
      </section>

      <section className="container-site pb-4">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-sand/80 p-7 sm:p-9">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-700">
              <IconSparkles className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-sage-900">
              La tecnologia VTONE
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
              Il VTONE è un sistema di biofeedback e stimolazione pelvica
              non invasiva e può aiutare a osservare l&apos;attività muscolare.
              Indicazione e modalità vengono valutate insieme, in base alla
              situazione individuale.
            </p>
          </div>
          <div className="rounded-3xl bg-sand/80 p-7 sm:p-9">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
              <IconClock className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-sage-900">
              Come avviene l'appuntamento
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
              Ricevo su appuntamento presso la clinica Native Medica, a
              Casalecchio di Reno e San Lazzaro di Savena. Il primo colloquio
              dura circa un'ora: anamnesi, valutazione e, se indicato,
              definizione del percorso con obiettivi e tempi concordati insieme.
            </p>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={[
          {
            question: "Quanto dura la prima visita ostetrica?",
            answer:
              "Il primo colloquio dura indicativamente circa un'ora: anamnesi, ascolto delle tue domande e, se pertinente, definizione del percorso. Valutazione e trattamenti vengono concordati in base alla tua situazione.",
          },
          {
            question: "Quanto costa la riabilitazione del pavimento pelvico?",
            answer:
              "La seduta di riabilitazione del pavimento pelvico con biofeedback e tecnologia VTONE costa € 103. Il Pap test costa € 25, il test HPV € 60. Le tariffe sono indicative, come pubblicate nel listino MioDottore.",
          },
          {
            question: "Dove riceve la Dott.ssa Isabel Lombardini?",
            answer:
              "Riceve presso la clinica Native Medica in due sedi: Via Bazzanese 32/4 a Casalecchio di Reno (40033) e Via Emilia 239 a San Lazzaro di Savena (40068), esclusivamente su appuntamento.",
          },
          {
            question: "Come si prenota una visita?",
            answer:
              "Puoi chiamare al 347 093 1701, scrivere su WhatsApp oppure usare il modulo dei contatti: la Dott.ssa risponde personalmente a ogni messaggio.",
          },
          {
            question: "Il corso pre-parto di coppia è a pagamento?",
            answer:
              "No, il corso pre-parto di coppia è gratuito e copre respirazione, accompagnamento al parto e allattamento.",
          },
          {
            question: "Cos'è il VTONE?",
            answer:
              "Il VTONE è un sistema di biofeedback e stimolazione pelvica non invasiva che aiuta a osservare l'attività muscolare del pavimento pelvico. Indicazione e modalità vengono valutate insieme.",
          },
        ]}
      />
      <nav aria-label="Pagine correlate" className="mt-10 flex flex-wrap gap-3">
        <Link href="/contatti" className="btn-outline">
          Contatti e prenotazioni
        </Link>
        <Link href="/chi-siamo" className="btn-outline">
          Il mio percorso professionale
        </Link>
      </nav>
      <div className="pt-10">
        <CtaBanner
          title="Non sai da dove iniziare?"
          text="Descrivimi brevemente la tua situazione: ti suggerisco io il percorso più adatto, senza impegno."
        />
      </div>
    </>
  );
}

