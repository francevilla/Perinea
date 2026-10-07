import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import CtaBanner from "@/components/cta-banner";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import {
  IconArrowRight,
  IconCheck,
  IconPhone,
  IconWhatsApp,
} from "@/components/icons";

const highlights = [
  {
    value: "15+",
    label: "anni di esperienza in ospedale e ASL",
  },
  {
    value: "30/30",
    label: "Votazione nella specializzazione in salute pelvica · 2025",
  },
  {
    value: "VTONE",
    label: "Biofeedback e riabilitazione con tecnologia non invasiva",
  },
  {
    value: "Su appuntamento",
    label: "Native Medica · Casalecchio di Reno e San Lazzaro di Savena",
  },
];

const homeServices = [
  {
    icon: "sparkles" as const,
    title: "Riabilitazione del pavimento pelvico",
    description:
      "Incontinenza, pesantezza, discomfort post-parto: un percorso personalizzato con biofeedback e tecnologia VTONE.",
  },
  {
    icon: "heart" as const,
    title: "Visite ostetriche",
    description:
      "Accompagno le gravidanze a basso rischio, dalla prima visita al post-parto, con ascolto e competenza.",
  },
  {
    icon: "heart" as const,
    title: "Sostegno all'allattamento",
    description:
      "Supporto pratico per affrontare le prime settimane con serenità: presa, frequenza, difficoltà comuni.",
  },
  {
    icon: "book" as const,
    title: "Corsi pre-parto di coppia",
    description:
      "Percorsi per prepararsi alla nascita insieme: respirazione, posizioni, accompagnamento al parto.",
  },
];

const pelvicSignals = [
  "Perdite di urina con tosse, risate, corsa o sport",
  "Sensazione di pesantezza o discomfort nella zona pelvica",
  "Difficoltà e discomfort nel post-parto",
  "Prevenzione e benessere nella post-menopausa",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <div className="container-site grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">
              {site.doctorFullName} · {site.role}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-sage-900 sm:text-5xl lg:text-[3.4rem]">
              Salute pelvica e assistenza ostetrica, con te in ogni fase
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              Sono la Dott.ssa Isabel Lombardini, ostetrica con oltre
              quindici anni di esperienza tra ospedale e ASL. Nel 2025 ho
              conseguito il titolo di ostetrica{" "}
              <strong className="font-bold text-sage-900">
                esperta in salute pelvica della donna
              </strong>
              . Ricevo a Casalecchio di Reno e San Lazzaro di Savena.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.whatsappHref} className="btn-accent">
                <IconWhatsApp className="h-4 w-4" />
                Scrivimi su WhatsApp
              </a>
              <a href={site.phoneHref} className="btn-outline">
                <IconPhone className="h-4 w-4" />
                {site.phone}
              </a>
              <Link href="/servizi#prima-visita" className="btn-outline">
                Come funziona la prima visita
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] bg-sand sm:-left-6 sm:-top-6"
            />
            <Image
              src="/images/Perineaprof.jpg"
              width={848}
              height={1264}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Dott.ssa Isabel Lombardini, ostetrica, nel suo studio professionale"
              className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover object-[center_58%] shadow-soft"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-white/95 px-5 py-3.5 shadow-soft ring-1 ring-sage-900/5 backdrop-blur sm:left-10">
              <p className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
                Clinica Native Medica
              </p>
              <p className="mt-0.5 text-sm font-semibold text-sage-900">
                Casalecchio di Reno · San Lazzaro di Savena
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-sage-900/5 bg-sand/60">
        <div className="container-site grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.value}>
              <p className="font-serif text-2xl font-semibold text-sage-800 sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/65 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="prima-visita" className="container-site scroll-mt-24 py-16 sm:py-20">
        <SectionHeading
          eyebrow="La prima visita"
          title="Un primo incontro per capire insieme da dove partire"
          description="Hai tempo per raccontare cosa ti porta qui, fare domande e concordare i prossimi passi con chiarezza."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Ci conosciamo",
              text: "Mi racconti cosa ti porta qui; ascolto le tue esigenze e le tue domande.",
            },
            {
              number: "02",
              title: "Valutiamo insieme",
              text: "In base al motivo della visita, concordiamo la valutazione più adatta e i suoi obiettivi.",
            },
            {
              number: "03",
              title: "Definiamo i prossimi passi",
              text: "Ti spiego le possibilità e scegliamo insieme come proseguire, senza impegno a iniziare un percorso.",
            },
          ].map((step) => (
            <li key={step.number} className="card p-6 sm:p-7">
              <p className="font-serif text-3xl font-semibold text-terracotta-600">
                {step.number}
              </p>
              <h3 className="mt-3 font-serif text-xl font-semibold text-sage-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-ink/60">
          La durata indicativa del primo colloquio è di circa un’ora. La
          valutazione e gli eventuali trattamenti vengono concordati in base
          alla tua situazione.
        </p>
      </section>

      {/* Services */}
      <section className="container-site py-16 sm:py-24">
        <SectionHeading
          eyebrow="Cosa offro"
          title="Un percorso completo, con le tue esigenze al centro"
          description="Dalla riabilitazione del pavimento pelvico all'accompagnamento della gravidanza fisiologica: servizi pensati per prendersi cura di te a ogni fase."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href="/servizi"
            />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-white/60">
        <div className="container-site grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div className="relative order-2 mx-auto w-full max-w-lg lg:order-1 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[2.5rem] bg-sage-100 sm:-bottom-6 sm:-right-6"
            />
            <Image
              src="/images/gravidanza.jpg"
              width={1408}
              height={768}
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Mani di una coppia in attesa, luce naturale e toni caldi"
              className="relative aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-soft"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Chi sono"
              title="Dalla sala parto alla riabilitazione"
            />
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              Laureata con lode in Ostetricia all'Università di Parma, ho
              lavorato per anni in reparto tra Rimini e Bologna —
              Sant'Orsola-Malpighi in testa — e presso la Casa della Salute di
              San Lazzaro, dove ho seguito gravidanze fisiologiche, allattamento
              e i corsi di preparazione alla nascita.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Oggi ricevo presso la clinica Native Medica, dedicandomi con
              particolare attenzione alla{" "}
              <strong className="font-bold text-sage-900">
                salute del pavimento pelvico
              </strong>
              : un lavoro delicato, che richiede ascolto, fiducia e una
              tecnologia che rende visibile ciò che non si vede.
            </p>
            <Link
              href="/chi-siamo"
              className="btn-outline mt-8"
            >
              Il mio percorso completo
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pelvic floor */}
      <section className="container-site py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pavimento pelvico"
              title="Quando il pavimento pelvico chiede aiuto"
              description="Il pavimento pelvico sostiene gli organi pelvici e accompagna ogni tappa della vita di una donna. Se una di queste situazioni ti risuona, può valere la pena parlarne."
            />
            <ul className="mt-7 space-y-3.5">
              {pelvicSignals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink/80 sm:text-base"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {signal}
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl bg-sand/80 p-5 text-sm leading-relaxed text-ink/75">
              Con il <strong className="font-bold text-sage-900">biofeedback</strong>{" "}
              e la tecnologia <strong className="font-bold text-sage-900">VTONE</strong>{" "}
              lavoriamo insieme su un percorso mirato, non invasivo e su
              misura: il tuo corpo impara a ritrovare il suo equilibrio.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src="/images/pavimento-pelvico.jpg"
              width={1408}
              height={768}
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Illustrazione della zona pelvica della donna, stile morbido e botanico"
              className="aspect-square w-full rounded-[2.5rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

