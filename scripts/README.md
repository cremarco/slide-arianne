# Generazione Audio Dalle Note Relatore

Lo script `generate_speaker_notes_audio.py` genera i file audio partendo dalle note relatore (`<!-- ... -->`) in `slides.md`.

## Prerequisiti

- Python 3.10+
- API key ElevenLabs

## Setup rapido

```bash
cd scripts
python3 -m venv .venv
source .venv/bin/activate
pip install elevenlabs python-dotenv
```

In `.env` (root progetto o cartella `scripts`):

```env
ELEVENLABS_API_KEY=la_tua_api_key
```

## Uso base

Dalla root del progetto:

```bash
python3 scripts/generate_speaker_notes_audio.py
```

Preview senza chiamate API:

```bash
python3 scripts/generate_speaker_notes_audio.py --dry-run
```

## Comportamento

- Processa solo slide con note relatore non vuote.
- Usa il campo `name` del frontmatter per creare il path output:
  - `public/audio/<name>/audio.mp3` (default)
- Se rileva limiti piano free, attiva fallback automatico:
  - voce free-tier
  - output in `public/audio_test` (se `--audio-dir` non è specificato)
- Non sovrascrive file già presenti: li marca come `SKIP`.
- Rileva lingua automaticamente (`it`/`en`) con supporto a marker:
  - prefisso riga, es. `[IT]`, `[EN]`, `language: it`
  - sezioni dedicate, es. `[IT] ... [EN] ...`

## Opzioni CLI

| Opzione | Descrizione |
| --- | --- |
| `--slides` | File markdown slide (default: `slides.md`) |
| `--audio-dir` | Cartella output audio (default: `public/audio`) |
| `--api-key` | API key ElevenLabs (priorità su `.env`) |
| `--model-id` | Modello ElevenLabs (default: `eleven_multilingual_v2`) |
| `--output-format` | Formato output (default: `mp3_44100_128`) |
| `--language` | `auto`, `it`, `en` |
| `--default-language` | Fallback lingua per auto-detect (`it`/`en`) |
| `--no-language-code` | Non invia `language_code` alla API |
| `--stability` | Voice setting stability |
| `--similarity-boost` | Voice setting similarity boost |
| `--style` | Voice setting style |
| `--speed` | Voice setting speed |
| `--no-speaker-boost` | Disabilita `use_speaker_boost` |
| `--enable-logging` | Abilita logging ElevenLabs lato API |
| `--dry-run` | Simulazione senza generare audio |

## Esempi

Forzare lingua italiana:

```bash
python3 scripts/generate_speaker_notes_audio.py --language it
```

Output custom:

```bash
python3 scripts/generate_speaker_notes_audio.py --audio-dir public/audio_custom
```

Controllo veloce pipeline:

```bash
python3 scripts/generate_speaker_notes_audio.py --dry-run --default-language en
```
