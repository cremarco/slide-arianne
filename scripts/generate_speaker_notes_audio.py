#!/usr/bin/env python3
"""Generate slide speaker-notes audio files with ElevenLabs SDK."""

from __future__ import annotations

import argparse
import os
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable

DEFAULT_IT_VOICE_ID = "kAzI34nYjizE0zON6rXv"
DEFAULT_EN_VOICE_ID = "xjlfQQ3ynqiEyRpArrT8"
DEFAULT_MODEL_ID = "eleven_multilingual_v2"
DEFAULT_OUTPUT_FORMAT = "mp3_44100_128"

SLIDE_SEPARATOR = "---"
MULTILINE_NOTE_RE = re.compile(r"<!--\s*\n(.*?)\n\s*-->", re.DOTALL)
YAML_TOP_LEVEL_KEY_RE = re.compile(r"^[A-Za-z_][A-Za-z0-9_-]*\s*:")
YAML_NESTED_KEY_RE = re.compile(r"^\s+[A-Za-z_][A-Za-z0-9_-]*\s*:")
YAML_LIST_ITEM_RE = re.compile(r"^\s*-\s+")
LANG_CODE_TOKEN = r"[a-z]{2}(?:-[a-z]{2})?"
LANG_ALIAS_TOKEN = r"italiano|italian|english|inglese"
LANG_TOKEN = rf"(?:{LANG_CODE_TOKEN}|{LANG_ALIAS_TOKEN})"
LANG_PREFIX_RE = re.compile(
    rf"^\s*(?:\[(?:lang(?:uage)?\s*[:=]\s*)?({LANG_TOKEN})\]|({LANG_TOKEN})\s*[:\-]|(?:lang|language)\s*[:=]\s*({LANG_TOKEN}))\s*",
    re.IGNORECASE,
)
LANG_SECTION_RE = re.compile(
    rf"^\s*\[(?:lang(?:uage)?\s*[:=]\s*)?({LANG_TOKEN})\]\s*$",
    re.IGNORECASE,
)

ITALIAN_HINT_WORDS = {
    "il", "lo", "la", "gli", "le", "un", "uno", "una", "che", "con",
    "per", "tra", "fra", "del", "della", "delle", "dello", "degli", "dei",
    "nel", "nello", "nella", "nelle", "sul", "sulla", "sulle", "sono", "era",
    "come", "dove", "quindi", "anche", "mentre", "poi", "questo", "questa",
    "quello", "quella", "paziente", "terapeuta", "seduta", "cartella", "oggi",
    "perche", "perché",
}

ENGLISH_HINT_WORDS = {
    "the", "and", "with", "for", "between", "of", "to", "from", "into",
    "about", "through", "while", "because", "therefore", "however", "this",
    "that", "these", "those", "is", "are", "was", "were", "session", "patient",
    "therapist", "dashboard", "workflow", "insights", "more", "less", "today",
}

ENGLISH_CONTRACTIONS_RE = re.compile(
    r"\b(?:i'm|you're|we're|they're|it's|that's|there's|don't|can't|won't|isn't|aren't|didn't|doesn't)\b",
    re.IGNORECASE,
)
ITALIAN_ACCENTS_RE = re.compile(r"[àèéìòù]", re.IGNORECASE)


@dataclass
class SlideNote:
    slide_number: int
    text: str


def parse_arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Genera audio dalle note relatore delle slide mancanti "
            "usando ElevenLabs."
        )
    )
    parser.add_argument(
        "--slides",
        default="slides.md",
        help="Percorso al file markdown delle slide (default: slides.md)",
    )
    parser.add_argument(
        "--audio-dir",
        default=None,
        help=(
            "Cartella output audio. Se omessa usa 'audio' se esiste, "
            "altrimenti 'public/audio' se esiste, altrimenti crea 'audio'."
        ),
    )
    parser.add_argument(
        "--api-key",
        default=None,
        help=(
            "API key ElevenLabs. Priorita: argomento CLI > ELEVENLABS_API_KEY."
        ),
    )
    parser.add_argument(
        "--it-voice-id",
        default=DEFAULT_IT_VOICE_ID,
        help=f"Voice ID per italiano (default: {DEFAULT_IT_VOICE_ID})",
    )
    parser.add_argument(
        "--en-voice-id",
        default=DEFAULT_EN_VOICE_ID,
        help=f"Voice ID per inglese (default: {DEFAULT_EN_VOICE_ID})",
    )
    parser.add_argument(
        "--model-id",
        default=DEFAULT_MODEL_ID,
        help=f"Model ID ElevenLabs (default: {DEFAULT_MODEL_ID})",
    )
    parser.add_argument(
        "--output-format",
        default=DEFAULT_OUTPUT_FORMAT,
        help=(
            "Formato audio ElevenLabs, es. mp3_44100_128 "
            f"(default: {DEFAULT_OUTPUT_FORMAT})"
        ),
    )
    parser.add_argument(
        "--language",
        choices=("auto", "it", "en"),
        default="auto",
        help=(
            "Forza lingua per tutte le note o usa auto-rilevamento "
            "(default: auto)."
        ),
    )
    parser.add_argument(
        "--default-language",
        choices=("it", "en"),
        default="it",
        help=(
            "Lingua fallback quando auto-rilevamento e ambiguo "
            "(default: it)."
        ),
    )
    parser.add_argument(
        "--no-language-code",
        action="store_true",
        help=(
            "Non inviare language_code alla API. "
            "Per default viene inviato 'it' o 'en' in base alla lingua rilevata."
        ),
    )
    parser.add_argument(
        "--stability",
        type=float,
        default=0.35,
        help="Voice setting stability (default: 0.35)",
    )
    parser.add_argument(
        "--similarity-boost",
        type=float,
        default=0.8,
        help="Voice setting similarity_boost (default: 0.8)",
    )
    parser.add_argument(
        "--style",
        type=float,
        default=0.0,
        help="Voice setting style (default: 0.0)",
    )
    parser.add_argument(
        "--speed",
        type=float,
        default=1.0,
        help="Voice setting speed (default: 1.0)",
    )
    parser.add_argument(
        "--no-speaker-boost",
        action="store_true",
        help="Disabilita voice setting use_speaker_boost.",
    )
    parser.add_argument(
        "--enable-logging",
        action="store_true",
        help=(
            "Abilita enable_logging lato ElevenLabs (default: disabilitato "
            "per minimizzare retention)."
        ),
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Non chiama ElevenLabs; mostra solo cosa verrebbe generato.",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Rigenera anche gli audio gia presenti.",
    )
    return parser.parse_args()


def choose_default_audio_dir(explicit: str | None) -> Path:
    if explicit:
        return Path(explicit)

    audio_dir = Path("audio")
    public_audio_dir = Path("public/audio")
    if audio_dir.exists():
        return audio_dir
    if public_audio_dir.exists():
        return public_audio_dir
    return audio_dir


def normalize_text(text: str) -> str:
    lines = [line.rstrip() for line in text.strip().splitlines()]
    compact_lines = [line for line in lines if line]
    return "\n".join(compact_lines).strip()


def strip_headmatter(markdown: str) -> str:
    lines = markdown.splitlines(keepends=True)
    if not lines or lines[0].strip() != SLIDE_SEPARATOR:
        return markdown

    idx = 1
    while idx < len(lines):
        if lines[idx].strip() == SLIDE_SEPARATOR:
            return "".join(lines[idx + 1 :])
        idx += 1
    return markdown


def is_yaml_like_frontmatter_line(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return True
    if stripped.startswith("#"):
        return True
    if YAML_TOP_LEVEL_KEY_RE.match(stripped):
        return True
    if YAML_NESTED_KEY_RE.match(line):
        return True
    if YAML_LIST_ITEM_RE.match(line):
        return True
    return False


def consume_slide_frontmatter(lines: list[str], start_idx: int) -> int:
    probe_idx = start_idx
    while probe_idx < len(lines) and not lines[probe_idx].strip():
        probe_idx += 1

    if probe_idx >= len(lines):
        return start_idx

    closing_idx = probe_idx
    while closing_idx < len(lines):
        if lines[closing_idx].strip() == SLIDE_SEPARATOR:
            break
        closing_idx += 1

    if closing_idx >= len(lines):
        return start_idx

    frontmatter_lines = lines[probe_idx:closing_idx]
    if not frontmatter_lines:
        return start_idx

    has_key = False
    for raw_line in frontmatter_lines:
        if not is_yaml_like_frontmatter_line(raw_line):
            return start_idx
        if (
            YAML_TOP_LEVEL_KEY_RE.match(raw_line.strip())
            or YAML_NESTED_KEY_RE.match(raw_line)
        ):
            has_key = True

    if not has_key:
        return start_idx

    return closing_idx + 1


def split_slides(markdown: str) -> list[str]:
    lines = strip_headmatter(markdown).splitlines(keepends=True)
    slides: list[str] = []
    current: list[str] = []

    in_fence = False
    fence_marker = ""
    in_html_comment = False

    index = 0
    while index < len(lines):
        line = lines[index]
        stripped = line.strip()
        if not in_fence and "<!--" in line:
            if "-->" not in line or line.index("<!--") > line.index("-->"):
                in_html_comment = True
        if in_html_comment and "-->" in line:
            in_html_comment = False

        if stripped.startswith("```"):
            marker = stripped[:3]
            if not in_fence:
                in_fence = True
                fence_marker = marker
            elif marker == fence_marker:
                in_fence = False
                fence_marker = ""

        if (
            stripped == SLIDE_SEPARATOR
            and not in_fence
            and not in_html_comment
        ):
            slide_content = "".join(current).strip()
            if slide_content:
                slides.append(slide_content)
            current = []
            maybe_after_frontmatter = consume_slide_frontmatter(lines, index + 1)
            index = maybe_after_frontmatter
            continue

        current.append(line)
        index += 1

    tail_content = "".join(current).strip()
    if tail_content:
        slides.append(tail_content)
    return slides


def extract_speaker_notes(slides: Iterable[str]) -> list[SlideNote]:
    notes: list[SlideNote] = []
    for slide_number, slide_content in enumerate(slides, start=1):
        matches = list(MULTILINE_NOTE_RE.finditer(slide_content))
        if not matches:
            continue

        note_text = normalize_text(matches[-1].group(1))
        if not note_text:
            continue

        notes.append(SlideNote(slide_number=slide_number, text=note_text))
    return notes


def normalize_language_token(token: str) -> str | None:
    normalized = token.strip().lower().replace("_", "-")
    if normalized in {"it", "italiano", "italian"}:
        return "it"
    if normalized in {"en", "english", "inglese"}:
        return "en"
    if normalized.startswith("it-"):
        return "it"
    if normalized.startswith("en-"):
        return "en"
    return None


def extract_language_hint(note_text: str) -> tuple[str | None, str]:
    lines = note_text.splitlines()
    if not lines:
        return None, note_text

    first_line_index = next(
        (index for index, line in enumerate(lines) if line.strip()),
        None,
    )
    if first_line_index is None:
        return None, note_text

    first_line = lines[first_line_index].strip()
    match = LANG_PREFIX_RE.match(first_line)
    if not match:
        return None, note_text

    token = next((group for group in match.groups() if group), None)
    language = normalize_language_token(token) if token else None
    cleaned_first_line = first_line[match.end() :].strip()

    if cleaned_first_line:
        cleaned_lines = [
            *lines[:first_line_index],
            cleaned_first_line,
            *lines[first_line_index + 1 :],
        ]
    else:
        cleaned_lines = [
            *lines[:first_line_index],
            *lines[first_line_index + 1 :],
        ]

    cleaned_text = normalize_text("\n".join(cleaned_lines))
    return language, cleaned_text


def extract_language_sections(note_text: str) -> tuple[dict[str, str], list[str]]:
    lines = note_text.splitlines()
    if not lines:
        return {}, []

    grouped_lines: dict[str, list[str]] = {}
    language_order: list[str] = []
    current_language: str | None = None
    found_section_marker = False

    for raw_line in lines:
        stripped_line = raw_line.strip()
        section_match = LANG_SECTION_RE.match(stripped_line)
        if section_match:
            language = normalize_language_token(section_match.group(1))
            if language:
                current_language = language
                found_section_marker = True
                if language not in language_order:
                    language_order.append(language)
                grouped_lines.setdefault(language, [])
                continue

        if found_section_marker and current_language:
            grouped_lines.setdefault(current_language, []).append(raw_line.rstrip())

    if not found_section_marker:
        return {}, []

    cleaned_sections: dict[str, str] = {}
    for language in language_order:
        text = normalize_text("\n".join(grouped_lines.get(language, [])))
        if text:
            cleaned_sections[language] = text

    cleaned_order = [language for language in language_order if language in cleaned_sections]
    return cleaned_sections, cleaned_order


def score_language(cleaned_text: str) -> tuple[int, int]:
    lowered = cleaned_text.lower()
    tokens = re.findall(r"[a-zA-ZÀ-ÿ']+", lowered)
    italian_score = sum(1 for token in tokens if token in ITALIAN_HINT_WORDS)
    english_score = sum(1 for token in tokens if token in ENGLISH_HINT_WORDS)

    if ITALIAN_ACCENTS_RE.search(lowered):
        italian_score += 2
    if ENGLISH_CONTRACTIONS_RE.search(lowered):
        english_score += 2

    if re.search(r"\b(?:che|perche|perché|quindi|mentre|sono)\b", lowered):
        italian_score += 1
    if re.search(r"\b(?:because|while|however|therefore|through)\b", lowered):
        english_score += 1

    return italian_score, english_score


def detect_language(
    note_text: str,
    forced_language: str,
    default_language: str,
) -> tuple[str, str]:
    sections, section_order = extract_language_sections(note_text)
    if sections:
        if forced_language in {"it", "en"}:
            chosen_language = (
                forced_language
                if forced_language in sections
                else section_order[0]
            )
            return chosen_language, sections[chosen_language]

        if len(sections) == 1:
            chosen_language = next(iter(sections))
            return chosen_language, sections[chosen_language]

        if default_language in sections:
            return default_language, sections[default_language]

        chosen_language = section_order[0]
        return chosen_language, sections[chosen_language]

    hint_language, cleaned_text = extract_language_hint(note_text)
    if forced_language in {"it", "en"}:
        return forced_language, cleaned_text

    if hint_language:
        return hint_language, cleaned_text

    italian_score, english_score = score_language(cleaned_text)
    if english_score > italian_score:
        return "en", cleaned_text
    if italian_score > english_score:
        return "it", cleaned_text
    return default_language, cleaned_text


def build_output_path(audio_dir: Path, slide_number: int) -> Path:
    return audio_dir / str(slide_number) / "audio.mp3"


def get_elevenlabs_types() -> tuple[Any, Any]:
    try:
        from elevenlabs import VoiceSettings
        from elevenlabs.client import ElevenLabs
    except ImportError as exc:
        raise RuntimeError(
            "SDK ElevenLabs non trovato. Installa con: pip install elevenlabs"
        ) from exc
    return ElevenLabs, VoiceSettings


def build_voice_settings(args: argparse.Namespace) -> Any:
    _, voice_settings_type = get_elevenlabs_types()
    return voice_settings_type(
        stability=args.stability,
        similarity_boost=args.similarity_boost,
        style=args.style,
        use_speaker_boost=not args.no_speaker_boost,
        speed=args.speed,
    )


def synthesize_with_elevenlabs(
    *,
    client: Any,
    voice_settings: Any,
    voice_id: str,
    model_id: str,
    output_format: str,
    text: str,
    language_code: str | None,
    enable_logging: bool,
) -> Any:
    convert_kwargs: dict[str, Any] = {
        "voice_id": voice_id,
        "output_format": output_format,
        "text": text,
        "model_id": model_id,
        "voice_settings": voice_settings,
        "enable_logging": enable_logging,
    }
    if language_code:
        convert_kwargs["language_code"] = language_code

    try:
        return client.text_to_speech.convert(**convert_kwargs)
    except TypeError as exc:
        message = str(exc)
        if "unexpected keyword argument" not in message:
            raise

        fallback_kwargs = dict(convert_kwargs)
        fallback_kwargs.pop("enable_logging", None)
        fallback_kwargs.pop("language_code", None)
        return client.text_to_speech.convert(**fallback_kwargs)


def resolve_api_key(cli_api_key: str | None) -> str:
    if cli_api_key:
        return cli_api_key.strip()

    try:
        from dotenv import load_dotenv

        load_dotenv()
    except ImportError:
        pass

    env_key = os.getenv("ELEVENLABS_API_KEY")
    if env_key:
        return env_key.strip()

    return ""


def main() -> int:
    args = parse_arguments()

    slides_path = Path(args.slides)
    if not slides_path.exists():
        print(f"Errore: file slide non trovato: {slides_path}", file=sys.stderr)
        return 1

    audio_dir = choose_default_audio_dir(args.audio_dir)
    api_key = resolve_api_key(args.api_key)

    markdown = slides_path.read_text(encoding="utf-8")
    slides = split_slides(markdown)
    notes = extract_speaker_notes(slides)

    if not notes:
        print("Nessuna nota relatore trovata.")
        return 0

    generated = 0
    skipped = 0
    failures = 0
    elevenlabs_client = None
    voice_settings = None

    if not args.dry_run:
        if not api_key:
            print(
                "Errore: API key ElevenLabs mancante. "
                "Imposta --api-key o ELEVENLABS_API_KEY.",
                file=sys.stderr,
            )
            return 1

        try:
            elevenlabs_type, _ = get_elevenlabs_types()
            elevenlabs_client = elevenlabs_type(api_key=api_key)
            voice_settings = build_voice_settings(args)
        except Exception as exc:  # noqa: BLE001
            print(f"Errore inizializzazione ElevenLabs: {exc}", file=sys.stderr)
            return 1

    print(f"Slide totali parse: {len(slides)}")
    print(f"Slide con note relatore: {len(notes)}")
    print(f"Output audio: {audio_dir}")

    for item in notes:
        output_path = build_output_path(audio_dir, item.slide_number)
        if output_path.exists() and not args.overwrite:
            print(
                f"[SKIP] slide {item.slide_number}: audio gia presente "
                f"({output_path})"
            )
            skipped += 1
            continue

        language, cleaned_note = detect_language(
            item.text,
            args.language,
            args.default_language,
        )
        voice_id = args.it_voice_id if language == "it" else args.en_voice_id

        if not cleaned_note:
            print(
                f"[SKIP] slide {item.slide_number}: nota vuota dopo cleaning."
            )
            skipped += 1
            continue

        if args.dry_run:
            preview = cleaned_note.replace("\n", " ")
            if len(preview) > 80:
                preview = preview[:77] + "..."
            print(
                f"[DRY-RUN] slide {item.slide_number}: lang={language} "
                f"voice={voice_id} -> {output_path} | \"{preview}\""
            )
            continue

        output_path.parent.mkdir(parents=True, exist_ok=True)

        try:
            language_code = None if args.no_language_code else language
            audio_stream = synthesize_with_elevenlabs(
                client=elevenlabs_client,
                voice_settings=voice_settings,
                voice_id=voice_id,
                model_id=args.model_id,
                output_format=args.output_format,
                text=cleaned_note,
                language_code=language_code,
                enable_logging=args.enable_logging,
            )
            with output_path.open("wb") as output_file:
                if isinstance(audio_stream, (bytes, bytearray)):
                    output_file.write(audio_stream)
                else:
                    for chunk in audio_stream:
                        if isinstance(chunk, (bytes, bytearray)) and chunk:
                            output_file.write(chunk)
            generated += 1
            print(
                f"[OK] slide {item.slide_number}: lang={language} "
                f"voice={voice_id} -> {output_path}"
            )
        except Exception as exc:  # noqa: BLE001
            failures += 1
            print(
                f"[ERROR] slide {item.slide_number}: {exc}",
                file=sys.stderr,
            )

    if args.dry_run:
        print("Dry-run completato.")
        return 0

    print(
        f"Completato. Generati: {generated}, Skippati: {skipped}, Errori: {failures}"
    )
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
