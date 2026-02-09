# Audio Generation Script

Questo script (`generate_speaker_notes_audio.py`) permette di generare automaticamente i file audio per le slide a partire dalle note del relatore, utilizzando le API di ElevenLabs.

## Prerequisiti

1.  **Python 3.10+** installato.
2.  Chiave API di **ElevenLabs**.

## Installazione Dipendenze

È consigliato creare un virtual environment ed installare le dipendenze:

```bash
cd scripts
python3 -m venv venv
source venv/bin/activate  # Su Windows: venv\Scripts\activate
pip install elevenlabs python-dotenv
```

## Configurazione

Crea un file `.env` nella cartella root del progetto (o nella cartella scripts) con la tua API Key:

```env
ELEVENLABS_API_KEY=tue_api_key_qui
```

In alternativa puoi passare la chiave via riga di comando con `--api-key`.

## Utilizzo

Esegui lo script dalla root del progetto:

```bash
python3 scripts/generate_speaker_notes_audio.py
```

### Argomenti Principali

-   `--slides`: Percorso al file markdown delle slide (default: `slides.md`).
-   `--audio-dir`: Cartella di output (default: `audio` o `public/audio`).
-   `--dry-run`: Esegui senza chiamare le API (stampa solo cosa farebbe).
-   `--overwrite`: Sovrascrivi i file audio esistenti.
-   `--language`: Forza una lingua (`it`, `en` o `auto`).
-   `--it-voice-id`: ID voce per l'italiano.
-   `--en-voice-id`: ID voce per l'inglese.

### Esempi

**Preview delle operazioni (Dry Run):**

```bash
python3 scripts/generate_speaker_notes_audio.py --dry-run
```

**Generazione audio forzando la sovrascrittura:**

```bash
python3 scripts/generate_speaker_notes_audio.py --overwrite
```

**Specificare una voce diversa per l'italiano:**

```bash
python3 scripts/generate_speaker_notes_audio.py --it-voice-id "ID_VOCE_ALTERNATIVA"
```
