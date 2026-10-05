import type { Address } from "@/lib/site";
import { IconArrowRight, IconMapPin } from "./icons";

type AddressCardProps = {
  address: Address;
};

export default function AddressCard({ address }: AddressCardProps) {
  return (
    <div className="card flex items-start justify-between gap-4 p-6">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600">
          <IconMapPin className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-serif text-xl font-semibold text-sage-900">
            {address.structure}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/70">
            {address.street}
            <br />
            {address.city} {address.cap}
          </p>
        </div>
      </div>
      <a
        href={address.mapUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Apri la mappa per ${address.city}`}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sage-300 px-4 py-2 text-xs font-bold text-sage-800 transition hover:bg-sage-700 hover:text-cream"
      >
        Mappa
        <IconArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

