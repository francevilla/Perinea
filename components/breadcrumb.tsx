import Link from "next/link";
import JsonLd from "./json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type BreadcrumbItem = { name: string; path: string };

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  label?: string;
};

export default function Breadcrumb({
  items,
  label = "Ti trovi qui",
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Briciole di pane"
      className="container-site mt-6 mb-8 text-xs text-ink/50"
    >
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap gap-2 text-ink/50 sm:text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="text-ink/70 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition hover:text-terracotta-600"
                  aria-current={i === 0 ? "page" : undefined}
                >
                  {item.name}
                </Link>
              )}
              {!last && <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
