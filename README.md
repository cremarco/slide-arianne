# Arianne Slides (Slidev)

Presentazione Slidev del progetto Arianne.

## Prerequisiti

- Node.js 20+
- pnpm

## Avvio locale

```bash
pnpm install
pnpm dev
```

Apri [http://localhost:8080](http://localhost:8080).

## Build

```bash
pnpm build
```

## Struttura principale

- `slides.md`: contenuto slide + script/style locali.
- `setup/main.ts`: orchestrazione audio in runtime (autoplay dopo interazione utente).
- `setup/slide-name-map.ts`: parser markdown usato per mappare `numero slide -> name` del frontmatter.
- `setup/timings.ts`: timing condivisi delle animazioni (configurazione read-only).
- `scripts/generate_speaker_notes_audio.py`: generazione audio da note relatore.
- `scripts/README.md`: guida completa allo script Python.

## Audio per slide

- L'audio viene risolto dal campo `name` nel frontmatter.
- Ordine lookup audio lato runtime:
  - `public/audio_test/<name>/audio.mp3`
  - `public/audio/<name>/audio.mp3`
- Se cambi `name`, aggiorna anche la cartella audio corrispondente.

## Regole tipografiche

- Titoli: usare `#` (h1) senza utility tipografiche (`text-*`, `font-*`, `tracking-*`, `leading-*`, colori custom).
- Testo: usare stile base; nei blocchi HTML usare `class="slide-text"`.
- Enfasi: usare `<strong>`.
- Card: usare `ProjectCard` senza override di stile tipografico.
- Slide scure: usare `slide-theme-invert`.
- Modifiche globali stile: intervenire in `styles/index.css`.

## Pattern slide riusabili

### Slide tipo "solution" (slide 2)

- `layout: default` e `class: relative overflow-hidden p-0`.
- Wrapper contenuto con padding (`px-14 pt-32 pb-10`).
- Testo a sinistra con `class="slide-text"`.
- Immagine a destra con `slide-image-right-lg` o `slide-image-right-md`.

### Slide tipo "project" (slide 3)

- `layout: default` e `class: relative h-full flex flex-col`.
- Titolo `#` senza classi tipografiche custom.
- Griglia card: `grid grid-cols-3 gap-6 mt-12 text-left flex-1 content-center`.
- Card con `ProjectCard` e contenuto via `v-for`.

## Deploy GitHub Pages

È presente il workflow `/.github/workflows/deploy-pages.yml` che pubblica `dist` su GitHub Pages su push a `main` o `master`.

Passaggi:

1. Pusha il repository su GitHub.
2. Vai su `Settings > Pages`.
3. In `Build and deployment`, imposta `Source: GitHub Actions`.
4. Fai un nuovo push (o avvia il workflow manualmente da `Actions`).

URL finale:

- `https://<username>.github.io/<nome-repo>/`
