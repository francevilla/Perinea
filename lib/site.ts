export type Address = {
  id: string;
  structure: string;
  street: string;
  city: string;
  cap: string;
  mapUrl: string;
};

export const site = {
  name: "Perinea",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://perinea-ashy.vercel.app",
  doctorName: "Isabel Lombardini",
  doctorFullName: "Dott.ssa Isabel Lombardini",
  role: "Ostetrica",
  specialization:
    "Esperta in salute pelvica della donna, rieducazione post-parto e riabilitazione del pavimento pelvico femminile",
  tagline:
    "Al fianco delle donne: gravidanza, parto, post-parto e salute del pavimento pelvico.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "347 093 1701",
  phoneHref: "tel:+393470931701",
  whatsappHref: "https://wa.me/393470931701",
  bookingNote: "Ricevo su appuntamento presso la clinica Native Medica.",
  payment: ["Contanti", "Carta di debito"],
  addresses: [
    {
      id: "casalecchio",
      structure: "Native Medica",
      street: "Via Bazzanese, 32/4",
      city: "Casalecchio di Reno (BO)",
      cap: "40033",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=44.4799004,11.2625771",
    },
    {
      id: "san-lazzaro",
      structure: "Native Medica",
      street: "Via Emilia, 239",
      city: "San Lazzaro di Savena (BO)",
      cap: "40068",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=44.4692917,11.4127731",
    },
  ] as Address[],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi sono" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
] as const;
