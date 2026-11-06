import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/servizi", priority: 0.9 },
    { path: "/contatti", priority: 0.8 },
    { path: "/chi-siamo", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
