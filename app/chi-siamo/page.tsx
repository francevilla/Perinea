import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import CtaBanner from "@/components/cta-banner";
import SectionHeading from "@/components/section-heading";
import { IconCheck, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Il percorso di Dott.ssa Isabel Lombardini, ostetrica: laurea con lode a Parma, ospedali di Rimini e Bologna, ASL e specializzazione in salute pelvica.",
};

const milestones = [
  {
    year: "2006",
    title: "Laurea con lode in Ostetricia",
    text: "Università di Parma, 110/110 con lode. Tesi sperimentale: «Il dolore del travaglio: competenza biologica, metodiche non farmacologiche e ruolo dell'ostetrica».",
  },
  {
    year: "2006 – 2008",
    title: "Tirocinio clinico, Università di Parma",
    text: "Clinica ostetrica: degenza, sala parto, degenza ginecologica, ambulatorio Pap test e colposcopia, ambulatori ecografici e sala operatoria.",
  },
  {
    year: "2008",
    title: "Volontariato a Bentivoglio",
    text: "Attività di volontariato come ostetrica presso degenza e sala parto dell'ospedale di Bentivoglio (Bologna).",
  },
  {
    year: "2008 – 2011",
    title: "Ospedale «Infermi», Rimini",
    text: "Reparto di degenza, sala parto, nido e sala operatoria.",
  },
  {
    year: "2011 – 2019",
    title: "Sant'Orsola-Malpighi, Bologna",
    text: "Degenza, PMA, ambulatori prenatali e partecipazione alle indagini prenatali invasive.",
  },
  {
    year: "2015 – 2019",
    title: "Corsi di preparazione alla nascita",
    text: "Conduzione dei corsi di preparazione alla nascita presso l'Università di Bologna.",
  },
  {
    year: "2019",
    title: "ASL Bologna · Casa della Salute di San Lazzaro",
    text: "Seguimento delle gravidanze fisiologiche, screening e colposcopia, «Spazio Giovani», consulenze allattamento, corsi pre-parto individuali e di coppia, «Spazio Mamme» e progetto «Casa con Te» — un'ostetrica a domicilio.",
  },
  {
    year: "2025",
    title: "Specializzazione in salute pelvica",
    text: "Titolo di «ostetrica esperta in salute pelvica della donna, rieducazione post-parto e riabilitazione del pavimento pelvico femminile», con votazione di 30/30.",
  },
  {
    year: "2025 →",
    title: "Ambulatorio Native Medica",
    text: "Attività ambulatoriale a Casalecchio di Reno e San Lazzaro di Savena: rieducazione e riabilitazione del pavimento pelvico, sostegno all'allattamento, visite ostetriche nelle gravidanze a basso rischio e corsi pre-parto di coppia.",
  },
];

const todayFocus = [
  "Rieducazione e riabilitazione del pavimento pelvico",
  "Sostegno all'allattamento",
  "Visite ostetriche nelle gravidanze a basso rischio",
  "Corsi pre-parto di coppia",
];

export default function ChiSiamoPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <SectionHeading
          eyebrow="Chi sono"
          title="Il mio percorso, la mia passione"
        />
      </section>

      <section className="container-site pt-8 sm:pt-10">
        <div className="card grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-12">
          <div className="mx-auto max-w-xs lg:max-w-none">
            <img
              src="/images/Perinea2.jpeg"
              alt="Ritratto professionale della Dott.ssa Isabel Lombardini"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
          <div>
            <p className="eyebrow">Ostetrica · Salute pelvica della donna</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-sage-900 sm:text-4xl">
              Dott.ssa Isabel Lombardini
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">
              Sono ostetrica da oltre 15 anni, con esperienza tra ospedale e
              ASL: dall&apos;Ospedale &laquo;Infermi&raquo; di Rimini al
              Sant&apos;Orsola-Malpighi di Bologna e alla Casa della Salute di
              San Lazzaro, dove ho seguito gravidanze fisiologiche,
              allattamento e corsi di preparazione alla nascita. Nel 2025 ho
              conseguito con 30/30 la specializzazione come ostetrica esperta
              in salute pelvica della donna, rieducazione post-parto e
              riabilitazione del pavimento pelvico femminile.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              {site.bookingNote} Ricevo presso Native Medica in Via Bazzanese
              32/4 a Casalecchio di Reno e in Via Emilia 239 a San Lazzaro di
              Savena, su appuntamento, per percorsi di rieducazione del
              pavimento pelvico, visite ostetriche a basso rischio e sostegno
              all&apos;allattamento.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <IconPhone className="h-4 w-4" />
                Chiamami · {site.phone}
              </a>
              <Link href="/contatti" className="btn-outline">
                Contattami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-10 py-14 sm:py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ol className="relative space-y-8 border-l-2 border-sage-200 pl-8">
            {milestones.map((milestone) => (
              <li key={milestone.year} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-cream bg-terracotta-500"
                />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta-600">
                  {milestone.year}
                </p>
                <h3 className="mt-1.5 font-serif text-xl font-semibold text-sage-900">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {milestone.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6">
          <div className="card p-7">
            <p className="eyebrow">Oggi</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-sage-900">
              Clinica Native Medica
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {site.bookingNote} Ricevo a Casalecchio di Reno (Via Bazzanese
              32/4) e a San Lazzaro di Savena (Via Emilia 239).
            </p>
            <ul className="mt-5 space-y-3">
              {todayFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink/80"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-sage-800 p-7 text-cream">
            <p className="eyebrow text-terracotta-300">La mia filosofia</p>
            <p className="mt-4 font-serif text-xl italic leading-relaxed">
              «Credo in un&apos;ostetricia di prossimità: il tuo corpo conosce
              già come fare, il mio lavoro è darti informazioni, fiducia e
              tempo.»
            </p>
          </div>
        </aside>
      </section>

      <CtaBanner
        title="Vogliamo conoscerci?"
        text="Raccontami come stai e cosa ti porta qui: ti rispondo io, senza filtri e senza fretta."
      />
    </>
  );
}
