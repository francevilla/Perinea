"use client";

import { useCallback, useRef, useState } from "react";
import { buildPayload, submitWeb3Form } from "@/lib/web3forms";
import { IconCheck, IconMail } from "./icons";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  const inputClasses =
    "w-full rounded-2xl border border-sage-200 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200";

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setState("submitting");
      setErrorMessage("");

      const formData = new FormData(event.currentTarget);

      let ok = false;
      let success = false;
      let message = "";

      try {
        const result = await submitWeb3Form(buildPayload(formData));
        ok = result.ok;
        success = result.success;
        message = result.message || "";
      } catch {
        success = false;
        message = "Rete non disponibile: riprova tra un momento.";
      }

      if (success) {
        setState("success");
        if (formRef.current) {
          formRef.current.reset();
        }
        if (statusRef.current) {
          statusRef.current.focus();
        }
      } else {
        setState("error");
        setErrorMessage(
          message ||
            (ok ? "Non è stato possibile inviare il messaggio." : message),
        );
      }
    },
    [],
  );

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="card p-6 sm:p-8 space-y-4"
    >
      {state === "success" ? (
        <>
          <h2 className="font-serif text-2xl font-semibold text-sage-900">
            Messaggio inviato
          </h2>
          <p
            ref={statusRef}
            id="form-status"
            role="status"
            aria-live="polite"
            className="mt-2 rounded-2xl bg-sage-50 px-4 py-3 text-sm font-semibold text-sage-800"
          >
            Grazie, ho ricevuto il tuo messaggio. Ti risponderò al più presto
            all’indirizzo email che hai indicato.
          </p>

        </>
      ) : (
        <>
          <h2 className="font-serif text-2xl font-semibold text-sage-900">
            Scrivimi
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            Invio il messaggio direttamente alla mia casella email: rispondo
            personalmente a ogni richiesta.
          </p>

          <div className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
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
                  placeholder="Il tuo nome"
                  autoComplete="name"
                  className={inputClasses}
                  disabled={state === "submitting"}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-sage-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tua@email.com"
                  autoComplete="email"
                  className={inputClasses}
                  disabled={state === "submitting"}
                />
              </div>
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
                placeholder="Come raggiungerti"
                autoComplete="tel"
                inputMode="tel"
                className={inputClasses}
                disabled={state === "submitting"}
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
                placeholder="Dimmi come posso aiutarti: gravidanza, pavimento pelvico, allattamento…"
                autoComplete="off"
                className={`${inputClasses} resize-y`}
                disabled={state === "submitting"}
              />
            </div>

            {/* Honeypot anti-spam di Web3Forms: nascosto agli utenti. */}
            <input
              name="botcheck"
              type="checkbox"
              hidden
              aria-hidden="true"
              tabIndex={-1}
              defaultChecked={false}
            />

            <div className="flex items-start gap-3">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="mt-0.5 rounded border-sage-300 bg-cream text-sage-700 focus:ring-sage-500 disabled:opacity-50"
                disabled={state === "submitting"}
              />
              <label
                htmlFor="privacy"
                className="text-xs leading-relaxed text-ink/70 cursor-pointer select-none disabled:opacity-50"
              >
                Ho letto l’{" "}
                <a
                  href="/privacy"
                  className="font-bold text-terracotta-600 underline underline-offset-2 hover:text-terracotta-700"
                >
                  informativa privacy
                </a>{" "}
                e acconsento al trattamento dei miei dati per rispondere a questa
                richiesta.
              </label>
            </div>

            {state === "error" && (
              <p
                id="form-error"
                role="alert"
                aria-live="assertive"
                className="mt-2 rounded-2xl bg-sand px-4 py-3 text-sm leading-relaxed text-ink/80"
              >
                {errorMessage || "Riprova più tardi."}

              </p>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="btn-accent w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "submitting" ? (
                <>
                  <IconMail className="h-4 w-4" /> Invio in corso…
                </>
              ) : (
                <>
                  <IconMail className="h-4 w-4" /> Invia via email
                </>
              )}
            </button>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-ink/60">
            I dati arrivano alla mia email tramite Web3Forms: il sito non li
            archivia e non imposta cookie di tracciamento di terze parti. Non
            inserire dettagli sanitari non necessari.{" "}
            <a
              href="/privacy"
              className="font-bold text-terracotta-600 underline underline-offset-2 hover:text-terracotta-700"
            >
              Leggi l’informativa completa
            </a>
            .
          </p>
        </>
      )}
    </form>
  );
}
