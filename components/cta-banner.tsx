import { site } from "@/lib/site";
import { IconPhone, IconWhatsApp } from "./icons";

type CtaBannerProps = {
  title?: string;
  text?: string;
};

export default function CtaBanner({
  title = "Pronta a iniziare il tuo percorso?",
  text = "Chiamami o scrivimi su WhatsApp: insieme troveremo il momento e il percorso giusti per te.",
}: CtaBannerProps) {
  return (
    <section className="container-site pb-16 sm:pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-sage-800 px-6 py-14 text-center sm:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-terracotta-500/20 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-sage-500/25 blur-2xl"
        />
        <div className="relative">
          <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {text}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={site.phoneHref} className="btn-accent">
              <IconPhone className="h-4 w-4" />
              Chiamami · {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-light"
            >
              <IconWhatsApp className="h-4 w-4" />
              Scrivi su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
