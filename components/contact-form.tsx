"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { IconCheck, IconWhatsApp } from "./icons";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [chatOpened, setChatOpened] = useState(false);
  const [chatUrl, setChatUrl] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [`Ciao Isabel, sono ${name || "..."}.`, "", message].filter(
      (line) => line !== ""
    );
    if (phone) lines.push("", `Il mio numero di telefono: ${phone}`);
    const text = lines.join("\n");
    const nextChatUrl = `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
    setChatUrl(nextChatUrl);
    const chatWindow = window.open(nextChatUrl, "_blank");
    if (chatWindow) {
      chatWindow.opener = null;
      setChatOpened(true);
    } else {
      setChatOpened(false);
    }
  };

  const inputClasses =
    "w-full rounded-2xl border border-sage-200 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200";

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <h2 className="font-serif text-2xl font-semibold text-sage-900">
        Scrivimi
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">
        Preparo un messaggio per WhatsApp. Prima di inviarlo potrai rileggerlo
        nella chat.
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

        {chatOpened && (
          <p
            role="status"
            className="flex items-center gap-2 rounded-2xl bg-sage-50 px-4 py-3 text-sm font-semibold text-sage-800"
          >
            <IconCheck className="h-4 w-4 shrink-0" />
            La chat è aperta in una nuova scheda: puoi rivedere e inviare il
            messaggio.
          </p>
        )}
        {!chatOpened && chatUrl && (
          <p
            role="status"
            className="rounded-2xl bg-sand px-4 py-3 text-sm leading-relaxed text-ink/80"
          >
            Il browser ha impedito l&apos;apertura automatica. {" "}
            <a
              href={chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sage-800 underline underline-offset-2"
            >
              Apri WhatsApp con il messaggio
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

