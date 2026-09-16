export type Service = {
  name: string;
  price: string;
  note?: string;
};

export type ServiceGroup = {
  id: string;
  icon: "sparkles" | "heart" | "shield" | "book";
  title: string;
  description: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "pavimento-pelvico",
    icon: "sparkles",
    title: "Pavimento pelvico e salute ginecologica",
    description:
      "Un percorso personalizzato per ritrovare benessere, sicurezza e qualità della vita quotidiana.",
    services: [
      {
        name: "Riabilitazione del pavimento pelvico",
        price: "€ 103",
        note: "Con biofeedback e tecnologia VTONE",
      },
      { name: "Tampone vaginale", price: "€ 25" },
      { name: "Tampone cervicale", price: "€ 25 – 27" },
      { name: "Test HPV", price: "€ 60", note: "Con tipizzazione" },
    ],
  },
  {
    id: "ostetricia",
    icon: "heart",
    title: "Ostetricia e post-parto",
    description:
      "Accompagnamento della gravidanza fisiologica e supporto nelle settimane più importanti.",
    services: [
      {
        name: "Prima visita ostetrica",
        price: "€ 103",
        note: "Gravidanze a basso rischio",
      },
      {
        name: "Consulenza allattamento",
        price: "€ 103",
        note: "Supporto pratico nelle prime settimane",
      },
    ],
  },
  {
    id: "screening",
    icon: "shield",
    title: "Screening e prevenzione",
    description:
      "Controlli regolari per la salute ginecologica, con spiegazioni chiare di ogni risultato.",
    services: [
      { name: "Pap test", price: "€ 25" },
      { name: "Pap test con ThinPrep", price: "€ 40" },
    ],
  },
  {
    id: "corsi",
    icon: "book",
    title: "Corsi",
    description:
      "Percorsi di preparazione alla nascita per affrontarla con serenità, insieme.",
    services: [
      {
        name: "Corso pre-parto di coppia",
        price: "Gratuito",
        note: "Respirazione, accompagnamento al parto, allattamento",
      },
    ],
  },
];

export const priceDisclaimer =
  "Tariffe indicative per visite private, come pubblicate nel listino MioDottore. Per conferme, disponibilità e prenotazioni, contatta direttamente lo studio.";
