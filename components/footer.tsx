import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { LogoMark } from "./logo";
import { IconMapPin, IconPhone, IconWhatsApp } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-cream">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <LogoMark variant="dark" className="h-11 w-11 shrink-0" />
            <p className="font-serif text-3xl font-semibold tracking-wide">
              Perinea<span className="text-terracotta-400">.</span>
            </p>
          </div>
          <p className="mt-2 text-sm font-semibold text-sage-200">
            {site.doctorFullName} · {site.role}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {site.tagline} {site.bookingNote}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-terracotta-400"
            >
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-cream/10"
            >
              <IconWhatsApp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-sage-300">
            Esplora
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-sage-300">
            Dove trovo lo studio
          </h3>
          <ul className="mt-4 space-y-4">
            {site.addresses.map((address) => (
              <li key={address.id} className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-400" />
                <div className="text-sm leading-relaxed text-cream/80">
                  <p className="font-semibold text-cream">
                    {address.structure}
                  </p>
                  <p>
                    {address.street}, {address.city} {address.cap}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Perinea · {site.doctorFullName} — Tutti i diritti riservati.
          </p>
          <p>
            Prestazioni su appuntamento presso la clinica Native Medica (BO).
          </p>
        </div>
      </div>
    </footer>
  );
}
