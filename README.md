# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

Prerequisiti:

- Node.js 20+

To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:8080>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).

## Protezione con password

- La presentazione mostra una schermata iniziale di accesso prima delle slide.
- Password di default: `arianne`.
- Compatibilita': puoi ancora usare `VITE_SLIDES_PASSWORD`.
- Multi-password: usa `VITE_SLIDES_PASSWORDS` con formato `chiave=password` separato da `,` o `;`.
  - Inizializzazione attuale: `VITE_SLIDES_PASSWORDS=arianne_full=Ari4nneFull!26,arianne_sa=Ari4nneSa!26`
- Le chiavi (`arianne_full`, `arianne_sa`, ecc.) sono quelle da usare nel campo `access` delle slide.
- Visibilita' slide per password: usa il campo `access` nel frontmatter di ogni slide.

Esempio frontmatter:

```yaml
---
name: product-vision
access:
  default: false
  arianne_full: true
  arianne_sa: true
---
```

Regole di visibilita':

- Se `access` non e' presente, la slide e' visibile a tutte le password.
- Se la chiave della password e' presente (`arianne_full`, `arianne_sa`, ecc.), vale quel booleano.
- Se la chiave non e' presente ma c'e' `default`, viene usato `default`.

Set iniziale del deck:

- `arianne_full` vede tutte le slide.
- `arianne_sa` vede solo le prime tre: `arianne-cover`, `product-vision`, `project-overview`.

## Audio per slide

- L'audio viene risolto dal `name` nel frontmatter della slide (API route metadata di Slidev).
- Path cercati in ordine: `public/audio_test/<name>/audio.mp3`, poi `public/audio/<name>/audio.mp3`.
- Se cambi `name`, aggiorna anche la cartella audio corrispondente.

## Deploy su GitHub Pages

Il progetto include il workflow `/.github/workflows/deploy-pages.yml` che pubblica automaticamente la cartella `dist` su GitHub Pages quando fai push su `main` o `master`.

Passaggi:

- Pusha la repository su GitHub.
- Vai su `Settings > Pages`.
- In `Build and deployment`, imposta `Source: GitHub Actions`.
- Vai su `Settings > Secrets and variables > Actions > New repository secret`.
- Crea il secret `VITE_SLIDES_PASSWORDS` con il valore delle password (esempio: `arianne_full=Ari4nneFull!26,arianne_sa=Ari4nneSa!26`).
- Fai un nuovo push (o avvia il workflow manualmente da `Actions`).

URL finale:

- `https://<username>.github.io/<nome-repo>/`

## Regole tipografiche per le slide

- Titoli: usare sempre `#` (h1). Non aggiungere classi `text-*`, `font-*`, `tracking-*`, `leading-*` o colori ai titoli.
- Testo: usare lo stile base. Per blocchi HTML usare `class="slide-text"` ed evitare classi che cambiano dimensione, font, peso, line-height o colore.
- Enfasi: usare `<strong>`; niente colori custom.
- Card: usare `ProjectCard` senza sovrascrivere dimensioni/colore; il testo segue lo stile base.
- Eccezioni: per slide a fondo scuro usare `slide-theme-invert` sul contenitore mantenendo `slide-text` per dimensioni e line-height.
- Aggiornamenti: se serve cambiare lo stile globale, modificare solo `styles/index.css` (variabili `--slide-*`).

## Slide 2 come prototipo

La slide "solution" (slide 2) e' il riferimento per le slide di contenuto con testo + lista + immagine a destra. Per crearne una nuova:

- Usa `layout: default` e `class: relative overflow-hidden p-0`.
- Contenuto principale dentro un wrapper con padding (`px-14 pt-32 pb-10`).
- Testo a sisnistra con `class="slide-text"`.
- Immagine a destra con `slide-image-right-lg` o `slide-image-right-md`.

## Slide 3 come prototipo

La slide "project" (slide 3) e' il riferimento per le slide con titolo + griglia di card:

- Usa `layout: default` e `class: relative h-full flex flex-col`.
- Titolo con `#` (h1) senza classi tipografiche custom.
- Griglia card con `grid grid-cols-3 gap-6 mt-12 text-left flex-1 content-center`.
- Card realizzate con `ProjectCard` e contenuto via `v-for` su un array locale.
- Testo nelle card: usa solo `ProjectCard` (gia' uniformato).
