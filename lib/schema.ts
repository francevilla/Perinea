import { site } from "./site";

const URL_BASE = site.url;
const PHONE = site.phoneHref.replace("tel:", "");
const ID_PRACTICE = `${URL_BASE}/#practice`;
const ID_PERSON = `${URL_BASE}/#isabel`;
const ID_WEBSITE = `${URL_BASE}/#website`;

const SAME_AS = [
  "https://ostetrichebologna.it/index.php/direttivo/isabel-lombardini/",
  "https://www.miodottore.it/profilo/isabel-lombardini",
  "https://www.doctolib.it/ostetrico/bologna/isabel-lombardini",
  "https://www.instagram.com/isabellombardini/",
];

const SERVICES = [
  "Riabilitazione del pavimento pelvico",
  "Visite ostetriche per gravidanze a basso rischio",
  "Consulenza allattamento",
  "Corsi pre-parto di coppia",
];

const GEO: Record<string, { lat: number; lng: number }> = {
  casalecchio: { lat: 44.4799004, lng: 11.2625771 },
  "san-lazzaro": { lat: 44.4692917, lng: 11.4127731 },
};

export function organizationSchema() {
  const clinics = site.addresses.map((a) => ({
    "@type": "MedicalClinic",
    "@id": `${URL_BASE}/#${a.id}`,
    name: `${a.structure} · ${a.city}`,
    url: URL_BASE,
    telephone: PHONE,
    medicalSpecialty: "https://schema.org/Obstetrics",
    parentOrganization: { "@id": ID_PRACTICE },
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city.replace(/\s*\(BO\)$/, ""),
      addressRegion: "Emilia-Romagna",
      postalCode: a.cap,
      addressCountry: "IT",
    },
    geo: { "@type": "GeoCoordinates", ...GEO[a.id] },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": ID_PRACTICE,
        name: "Perinea",
        alternateName: "Perinea – Dott.ssa Isabel Lombardini",
        url: URL_BASE,
        telephone: PHONE,
        ...(site.professional.email ? { email: site.professional.email } : {}),
        image: `${URL_BASE}/images/og-image.png`,
        description: site.specialization,
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: site.payment,
        medicalSpecialty: "https://schema.org/Obstetrics",
        availableService: SERVICES,
        areaServed: ["Casalecchio di Reno", "San Lazzaro di Savena", "Bologna"],
        location: site.addresses.map((a) => ({ "@id": `${URL_BASE}/#${a.id}` })),
        founder: { "@id": ID_PERSON },
      },
      ...clinics,
      {
        "@type": "Person",
        "@id": ID_PERSON,
        name: site.doctorFullName,
        alternateName: "Isabel Lombardini",
        jobTitle: "Ostetrica",
        description: site.specialization,
        worksFor: { "@id": ID_PRACTICE },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Università di Parma",
        },
        knowsAbout: [
          "Riabilitazione del pavimento pelvico femminile",
          "Salute pelvica della donna",
          "Ostetricia",
          "Allattamento al seno",
          "Preparazione al parto",
        ],
        sameAs: SAME_AS,
      },
      {
        "@type": "WebSite",
        "@id": ID_WEBSITE,
        name: "Perinea",
        url: URL_BASE,
        inLanguage: "it-IT",
        publisher: { "@id": ID_PRACTICE },
      },
    ],
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, URL_BASE).toString(),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
