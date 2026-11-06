import type { Metadata } from "next";
import { site } from "./site";

const IMAGE = { url: "/images/og-image.png", width: 1200, height: 630 };

export function pageMetadata(opts: {
  title: string; // senza " · Perinea": lo aggiunge il template
  description: string; // ≤ 155 char
  path: string; // "/servizi"
  imageAlt: string;
}): Metadata {
  const url = new URL(opts.path, site.url).toString();
  const fullTitle = `${opts.title} · Perinea`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: "Perinea",
      locale: "it_IT",
      type: "website",
      images: [{ ...IMAGE, alt: opts.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: [IMAGE.url],
    },
  };
}
