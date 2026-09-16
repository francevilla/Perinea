import Link from "next/link";
import {
  IconArrowRight,
  IconBookOpen,
  IconHeart,
  IconShieldCheck,
  IconSparkles,
} from "./icons";

const icons = {
  sparkles: IconSparkles,
  heart: IconHeart,
  shield: IconShieldCheck,
  book: IconBookOpen,
} as const;

export type ServiceIconKey = keyof typeof icons;

type ServiceCardProps = {
  icon: ServiceIconKey;
  title: string;
  description: string;
  price?: string;
  href?: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  price,
  href,
}: ServiceCardProps) {
  const Icon = icons[icon];

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
          <Icon className="h-6 w-6" />
        </span>
        {price ? (
          <span className="rounded-full bg-terracotta-50 px-3 py-1 text-xs font-bold text-terracotta-700">
            {price}
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 font-serif text-xl font-semibold text-sage-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">
        {description}
      </p>
      {href ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-terracotta-600 transition group-hover:gap-2.5">
          Scopri di più
          <IconArrowRight className="h-4 w-4" />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="card group block h-full p-6 transition hover:-translate-y-1 hover:shadow-soft sm:p-7"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="card h-full p-6 transition hover:-translate-y-1 hover:shadow-soft sm:p-7">
      {content}
    </div>
  );
}
