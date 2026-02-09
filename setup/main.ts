import { defineAppSetup } from '@slidev/types'
import slidesMarkdown from '../slides.md?raw'
import { emitAudioStart } from './audio-sync'

const SLIDE_SEPARATOR = '---'
const YAML_TOP_LEVEL_KEY_RE = /^[A-Za-z_][A-Za-z0-9_-]*\s*:/
const YAML_NESTED_KEY_RE = /^\s+[A-Za-z_][A-Za-z0-9_-]*\s*:/
const YAML_LIST_ITEM_RE = /^\s*-\s+/
const FRONTMATTER_NAME_RE = /^name\s*:\s*(.+?)\s*$/i

const parseFrontmatterName = (frontmatterLines: string[]): string | null => {
    for (const rawLine of frontmatterLines) {
        if (!rawLine || /^\s/.test(rawLine)) continue

        const stripped = rawLine.trim()
        if (!stripped || stripped.startsWith('#')) continue

        const match = stripped.match(FRONTMATTER_NAME_RE)
        if (!match) continue

        let value = match[1].trim()
        if (!value) return null

        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1).trim()
        }

        return value || null
    }

    return null
}

const sanitizeSlideName = (name: string): string => {
    const compact = name.trim().toLowerCase().replace(/\s+/g, '-')
    const normalized = compact.replace(/[^a-z0-9_-]+/g, '-').replace(/-{2,}/g, '-')
    return normalized.replace(/^[-_]+|[-_]+$/g, '')
}

const splitHeadmatter = (markdown: string): { headmatterName: string | null; body: string } => {
    const lines = markdown.split(/\r?\n/)
    if (!lines.length || lines[0].trim() !== SLIDE_SEPARATOR) {
        return { headmatterName: null, body: markdown }
    }

    for (let index = 1; index < lines.length; index += 1) {
        if (lines[index].trim() !== SLIDE_SEPARATOR) continue

        const headmatterLines = lines.slice(1, index)
        return {
            headmatterName: parseFrontmatterName(headmatterLines),
            body: lines.slice(index + 1).join('\n'),
        }
    }

    return { headmatterName: null, body: markdown }
}

const isYamlLikeFrontmatterLine = (line: string): boolean => {
    const stripped = line.trim()
    if (!stripped) return true
    if (stripped.startsWith('#')) return true
    if (YAML_TOP_LEVEL_KEY_RE.test(stripped)) return true
    if (YAML_NESTED_KEY_RE.test(line)) return true
    if (YAML_LIST_ITEM_RE.test(line)) return true
    return false
}

const consumeSlideFrontmatter = (
    lines: string[],
    startIdx: number,
): { nextIndex: number; name: string | null } => {
    let probeIdx = startIdx
    while (probeIdx < lines.length && !lines[probeIdx].trim()) {
        probeIdx += 1
    }

    if (probeIdx >= lines.length) {
        return { nextIndex: startIdx, name: null }
    }

    let closingIdx = probeIdx
    while (closingIdx < lines.length && lines[closingIdx].trim() !== SLIDE_SEPARATOR) {
        closingIdx += 1
    }

    if (closingIdx >= lines.length) {
        return { nextIndex: startIdx, name: null }
    }

    const frontmatterLines = lines.slice(probeIdx, closingIdx)
    if (!frontmatterLines.length) {
        return { nextIndex: startIdx, name: null }
    }

    let hasKey = false
    for (const rawLine of frontmatterLines) {
        if (!isYamlLikeFrontmatterLine(rawLine)) {
            return { nextIndex: startIdx, name: null }
        }
        if (YAML_TOP_LEVEL_KEY_RE.test(rawLine.trim()) || YAML_NESTED_KEY_RE.test(rawLine)) {
            hasKey = true
        }
    }

    if (!hasKey) {
        return { nextIndex: startIdx, name: null }
    }

    return {
        nextIndex: closingIdx + 1,
        name: parseFrontmatterName(frontmatterLines),
    }
}

const buildSlideNameByNumberMap = (markdown: string): Map<string, string> => {
    const { headmatterName, body } = splitHeadmatter(markdown)
    const lines = body.split(/\r?\n/)
    const map = new Map<string, string>()

    let inFence = false
    let fenceMarker = ''
    let inHtmlComment = false
    let currentName = headmatterName
    let slideNumber = 0
    const current: string[] = []

    let index = 0
    while (index < lines.length) {
        const line = lines[index]
        const stripped = line.trim()

        if (!inFence && line.includes('<!--')) {
            const startPos = line.indexOf('<!--')
            const endPos = line.indexOf('-->')
            if (endPos === -1 || startPos > endPos) {
                inHtmlComment = true
            }
        }
        if (inHtmlComment && line.includes('-->')) {
            inHtmlComment = false
        }

        if (stripped.startsWith('```')) {
            const marker = stripped.slice(0, 3)
            if (!inFence) {
                inFence = true
                fenceMarker = marker
            } else if (marker === fenceMarker) {
                inFence = false
                fenceMarker = ''
            }
        }

        if (stripped === SLIDE_SEPARATOR && !inFence && !inHtmlComment) {
            const slideContent = current.join('\n').trim()
            if (slideContent) {
                slideNumber += 1
                if (currentName) {
                    const folderName = sanitizeSlideName(currentName)
                    if (folderName) {
                        map.set(String(slideNumber), folderName)
                    }
                }
            }

            current.length = 0
            const consumedFrontmatter = consumeSlideFrontmatter(lines, index + 1)
            currentName = consumedFrontmatter.name
            index = consumedFrontmatter.nextIndex
            continue
        }

        current.push(line)
        index += 1
    }

    const tailContent = current.join('\n').trim()
    if (tailContent) {
        slideNumber += 1
        if (currentName) {
            const folderName = sanitizeSlideName(currentName)
            if (folderName) {
                map.set(String(slideNumber), folderName)
            }
        }
    }

    return map
}

const slideNameByNumber = buildSlideNameByNumberMap(slidesMarkdown)

export default defineAppSetup(({ router }) => {
    if (typeof window === 'undefined') return

    const PRIMARY_AUDIO_DIR = 'audio_test'
    const FALLBACK_AUDIO_DIR = 'audio'
    const baseUrl = import.meta.env.BASE_URL || '/'
    const withBase = (relativePath: string) => {
        const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
        const normalizedRelative = relativePath.replace(/^\/+/, '')
        return `${normalizedBase}${normalizedRelative}`
    }
    const buildAudioPath = (directory: string, audioFolderName: string) =>
        withBase(`${directory}/${audioFolderName}/audio.mp3`)

    let currentAudio: HTMLAudioElement | null = null
    let playbackRequestId = 0
    let hasUserInteracted = false
    let pendingSlideNumber: string | null = null
    let lastPlayedSlideNumber: string | null = null
    const AUDIO_HINT_ID = 'audio-activation-hint'
    const AUDIO_HINT_STYLE_ID = 'audio-activation-hint-style'

    const ensureAudioHint = () => {
        if (hasUserInteracted) return
        if (!document.getElementById(AUDIO_HINT_STYLE_ID)) {
            const style = document.createElement('style')
            style.id = AUDIO_HINT_STYLE_ID
            style.textContent = `
#${AUDIO_HINT_ID} {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  z-index: 9999;
  padding: 0.65rem 0.95rem;
  border-radius: 9999px;
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.1;
  color: #111827;
  background: color-mix(in srgb, white 88%, transparent);
  border: 1px solid color-mix(in srgb, #111827 20%, transparent);
  box-shadow: 0 10px 28px color-mix(in srgb, #111827 22%, transparent);
  backdrop-filter: blur(3px);
  pointer-events: none;
}
`
            document.head.appendChild(style)
        }

        if (document.getElementById(AUDIO_HINT_ID)) return
        const hint = document.createElement('div')
        hint.id = AUDIO_HINT_ID
        hint.setAttribute('role', 'status')
        hint.setAttribute('aria-live', 'polite')
        hint.textContent = 'Audio disponibile: fai click o premi un tasto per attivarlo.'
        document.body.appendChild(hint)
    }

    const removeAudioHint = () => {
        const hint = document.getElementById(AUDIO_HINT_ID)
        if (hint) hint.remove()
    }

    const playAudio = (
        audioPath: string,
        slideNumber: string,
        audioFolderName: string,
        requestId: number,
        isFallback = false,
    ) => {
        if (requestId !== playbackRequestId) return

        const audio = new Audio(audioPath)
        currentAudio = audio
        let audioStartNotified = false
        const notifyAudioStart = () => {
            if (audioStartNotified || requestId !== playbackRequestId) return
            audioStartNotified = true
            emitAudioStart({
                slideNumber,
                audioFolderName,
                startedAt: performance.now(),
                requestId,
            })
        }
        audio.addEventListener('playing', notifyAudioStart, { once: true })

        if (!isFallback) {
            let fallbackTriggered = false
            const triggerFallback = () => {
                if (fallbackTriggered || requestId !== playbackRequestId) return
                fallbackTriggered = true
                playAudio(
                    buildAudioPath(FALLBACK_AUDIO_DIR, audioFolderName),
                    slideNumber,
                    audioFolderName,
                    requestId,
                    true,
                )
            }

            audio.addEventListener('error', triggerFallback, { once: true })

            // We intentionally do not wait for 'canplay' to play() to be as fast as possible,
            // maximizing chances to be considered part of an interaction chain if one exists.
            audio.play().catch((e: unknown) => {
                if (e instanceof DOMException && e.name === 'NotAllowedError') return

                if (audio.error) {
                    triggerFallback()
                    return
                }

                console.log(
                    `Audio play prevented for slide ${slideNumber} ` +
                    `(audio folder: ${audioFolderName}, path: ${audioPath}):`,
                    e,
                )
            })
            return
        }

        audio.play().catch((e: unknown) => {
            if (e instanceof DOMException && e.name === 'NotAllowedError') return

            if (audio.error) {
                console.log(
                    `No audio found for slide ${slideNumber} in /${PRIMARY_AUDIO_DIR} or /${FALLBACK_AUDIO_DIR}`,
                )
                return
            }

            console.log(
                `Audio play prevented for slide ${slideNumber} ` +
                `(audio folder: ${audioFolderName}, fallback path: ${audioPath}):`,
                e,
            )
        })
    }

    const resolveSlideNumber = (path: string): string | null => {
        // Normalize path: remove trailing slash if present (except root)
        const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path

        if (normalizedPath === '/' || normalizedPath === '/1') {
            return '1'
        }

        const match = normalizedPath.match(/^\/(\d+)$/)
        if (match) {
            return match[1]
        }

        return null
    }

    const resolveAudioFolderName = (slideNumber: string): string | null => {
        return slideNameByNumber.get(slideNumber) ?? null
    }

    const attemptPlay = (slideNumber: string) => {
        if (!hasUserInteracted) {
            pendingSlideNumber = slideNumber
            return
        }
        if (slideNumber === lastPlayedSlideNumber) return

        const audioFolderName = resolveAudioFolderName(slideNumber)
        if (!audioFolderName) return

        lastPlayedSlideNumber = slideNumber
        pendingSlideNumber = null
        const requestId = ++playbackRequestId

        // 1. Stop existing
        if (currentAudio) {
            currentAudio.pause()
            currentAudio = null
        }

        // 2. Play
        playAudio(
            buildAudioPath(PRIMARY_AUDIO_DIR, audioFolderName),
            slideNumber,
            audioFolderName,
            requestId,
        )
    }

    // Handle navigation changes
    router.afterEach((to, from) => {
        const toSlideNumber = resolveSlideNumber(to.path)
        if (!toSlideNumber) return

        const fromSlideNumber = resolveSlideNumber(from.path)
        if (toSlideNumber === fromSlideNumber) return

        attemptPlay(toSlideNumber)
    })

    const unlockAudioOnFirstInteraction = () => {
        hasUserInteracted = true
        removeAudioHint()

        const slideToPlay = pendingSlideNumber ?? resolveSlideNumber(router.currentRoute.value.path)
        if (slideToPlay) {
            attemptPlay(slideToPlay)
        }
    }

    ensureAudioHint()

    window.addEventListener('pointerdown', unlockAudioOnFirstInteraction, { once: true, passive: true })
    window.addEventListener('keydown', unlockAudioOnFirstInteraction, { once: true })
    window.addEventListener('touchstart', unlockAudioOnFirstInteraction, { once: true, passive: true })

    // Handle initial page load
    router.isReady().then(() => {
        const initialSlideNumber = resolveSlideNumber(router.currentRoute.value.path)
        if (initialSlideNumber) {
            attemptPlay(initialSlideNumber)
        }
    })
})
