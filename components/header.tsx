"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";
import { IconMenu, IconPhone, IconX } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 shadow-sm backdrop-blur" : "bg-cream"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide text-sage-800 sm:text-3xl"
        >
          Perinea<span className="text-terracotta-500">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-terracotta-600 ${
                pathname === link.href
                  ? "text-terracotta-600"
                  : "text-ink/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-sage-700 px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-sage-800"
          >
            <IconPhone className="h-4 w-4" />
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-sage-800 transition hover:bg-sage-100 md:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
        >
          {open ? (
            <IconX className="h-6 w-6" />
          ) : (
            <IconMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-sage-900/10 bg-cream px-5 pb-6 pt-3 md:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                    pathname === link.href
                      ? "bg-sage-100 text-sage-900"
                      : "text-ink/80 hover:bg-sage-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-700 px-5 py-3 text-sm font-bold text-cream"
          >
            <IconPhone className="h-4 w-4" />
            Chiamami · {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
