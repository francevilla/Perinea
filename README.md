# Perinea

Sito personale di **Dott.ssa Isabel Lombardini**, ostetrica e esperta in salute pelvica della donna (riabilitazione del pavimento pelvico, rieducazione post-parto, gravidanze a basso rischio, allattamento, corsi pre-parto di coppia).

Attività ambulatoriale presso la clinica **Native Medica** — Via Bazzanese 32/4, Casalecchio di Reno (BO) e Via Emilia 239, San Lazzaro di Savena (BO).

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- Font: Cormorant Garamond + Nunito Sans (self-hosted via Fontsource, nessuna dipendenza da CDN)

## Sviluppo

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
npm start
```

## Struttura

```
app/            # pagine (layout, home, chi-siamo, servizi, contatti)
components/     # header, footer, card, icone, modulo contatti
lib/            # dati del sito (site.ts) e listino servizi (services.ts)
public/images/  # immagini
```

## Configurazione

- I dati del sito (telefono, indirizzi, recapiti) sono centralizzati in [`lib/site.ts`](lib/site.ts).
- Le variabili d'ambiente sono documentate in [`.env.example`](.env.example).
- Le tariffe del listino sono quelle pubblicate su MioDottore; vanno aggiornate in [`lib/services.ts`](lib/services.ts) quando cambiano.
