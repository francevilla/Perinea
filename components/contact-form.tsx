"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { IconCheck, IconWhatsApp } from "./icons";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [`Ciao Isabel, sono ${name || "..."}.`, "", message].filter(
      (line) => line !== ""
    );
    if (phone) lines.push("", `Il mio numero di telefono: ${phone}`);
    const text = lines.join("\n");
    window.open(
      `${site.whatsappHref}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  const inputClasses =
    "w-full rounded-2xl border border-sage-200 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200";

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <h2 className="font-serif text-2xl font-semibold text-sage-900">
        Scrivimi
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">
        Compila il modulo: apriro una chat WhatsApp con il tuo messaggio già
        pronto, così potrai inviarlo quando preferisci.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-sage-800"
          >
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Il tuo nome"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-sage-800"
          >
            Telefono <span className="font-normal normal-case text-ink/50">(facoltativo)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Come raggiungerti"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-sage-800"
          >
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Dimmi come posso aiutarti: gravidanza, pavimento pelvico, allattamento…"
            className={`${inputClasses} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="btn-accent w-full"
        >
          <IconWhatsApp className="h-4 w-4" />
          Invia via WhatsApp
        </button>

        {sent && (
          <p className="flex items-center gap-2 rounded-2xl bg-sage-50 px-4 py-3 text-sm font-semibold text-sage-800">
            <IconCheck className="h-4 w-4 shrink-0" />
            Ho aperto la chat WhatsApp: puoi adesso inviare il messaggio.
          </p>
        )}
      </div>
    </form>
  );
}
