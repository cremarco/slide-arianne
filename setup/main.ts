import { defineAppSetup } from '@slidev/types'
import slidesMarkdown from '../slides.md?raw'
import { emitAudioEnd, emitAudioStart } from './audio-sync'

const SLIDE_SEPARATOR = '---'
const YAML_TOP_LEVEL_KEY_RE = /^[A-Za-z_][A-Za-z0-9_-]*\s*:/
const YAML_NESTED_KEY_RE = /^\s+['"]?[A-Za-z0-9_* -]+['"]?\s*:/
const YAML_LIST_ITEM_RE = /^\s*-\s+/
const FRONTMATTER_NAME_RE = /^name\s*:\s*(.+?)\s*$/i
const FRONTMATTER_ACCESS_RE = /^access\s*:\s*(.*)$/i
const PRIMARY_AUDIO_DIR = 'audio_test'
const FALLBACK_AUDIO_DIR = 'audio'
const AUDIO_HINT_ID = 'audio-activation-hint'
const AUDIO_HINT_CLASS = 'audio-activation-hint'
const NEXT_SLIDE_HINT_ID = 'audio-next-slide-hint'
const NEXT_SLIDE_HINT_CLASS = 'audio-next-slide-hint'
const NEXT_SLIDE_HINT_VISIBLE_CLASS = 'is-visible'
const NEXT_SLIDE_HINT_ICON_CLASS =
    'audio-next-slide-hint__icon i-heroicons-chevron-right-20-solid'

type SlideAccessMap = Record<string, boolean>

type SlideFrontmatter = {
    name: string | null
    access: SlideAccessMap | null
}

type SlideMetadata = {
    audioFolderName: string | null
    access: SlideAccessMap | null
}

type DeckPasswordProfile = {
    key: string
    value: string
}

const unquote = (value: string): string => {
    if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
    ) {
        return value.slice(1, -1).trim()
    }

    return value
}

const parseFrontmatterName = (frontmatterLines: string[]): string | null => {
    for (const rawLine of frontmatterLines) {
        if (!rawLine || /^\s/.test(rawLine)) continue

        const stripped = rawLine.trim()
        if (!stripped || stripped.startsWith('#')) continue

        const match = stripped.match(FRONTMATTER_NAME_RE)
        if (!match) continue

        const value = unquote(match[1].trim())
        if (!value) return null

        return value || null
    }

    return null
}

const sanitizeSlug = (name: string): string => {
    const compact = unquote(name.trim()).toLowerCase().replace(/\s+/g, '-')
    const normalized = compact.replace(/[^a-z0-9_-]+/g, '-').replace(/-{2,}/g, '-')
    return normalized.replace(/^[-_]+|[-_]+$/g, '')
}

const sanitizeSlideName = (name: string): string => sanitizeSlug(name)
const sanitizePasswordKey = (key: string): string => sanitizeSlug(key)

const parseBooleanLiteral = (rawValue: string): boolean | null => {
    let value = rawValue.trim().replace(/,$/, '')
    value = value.replace(/\s+#.*$/, '').trim()
    value = unquote(value)
    if (!value) return null

    const lowered = value.toLowerCase()
    if (lowered === 'true' || lowered === 'yes' || lowered === 'on' || lowered === '1') {
        return true
    }
    if (lowered === 'false' || lowered === 'no' || lowered === 'off' || lowered === '0') {
        return false
    }

    return null
}

const normalizeAccessKey = (rawKey: string): string | null => {
    const stripped = unquote(rawKey.trim())
    if (!stripped) return null
    if (stripped === '*') return '*'

    const sanitized = sanitizePasswordKey(stripped)
    return sanitized || null
}

const parseInlineAccessMap = (rawValue: string): SlideAccessMap | null => {
    const trimmed = rawValue.trim()
    if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) return null

    const map: SlideAccessMap = {}
    const body = trimmed.slice(1, -1).trim()
    if (!body) return map

    for (const chunk of body.split(',')) {
        const entry = chunk.trim()
        if (!entry) continue

        const separatorIndex = entry.indexOf(':')
        if (separatorIndex <= 0) continue

        const key = normalizeAccessKey(entry.slice(0, separatorIndex))
        const value = parseBooleanLiteral(entry.slice(separatorIndex + 1))
        if (!key || value === null) continue

        map[key] = value
    }

    return map
}

const parseFrontmatterAccess = (frontmatterLines: string[]): SlideAccessMap | null => {
    for (let index = 0; index < frontmatterLines.length; index += 1) {
        const rawLine = frontmatterLines[index]
        const stripped = rawLine.trim()
        if (!stripped || stripped.startsWith('#')) continue

        const match = stripped.match(FRONTMATTER_ACCESS_RE)
        if (!match) continue

        const inlineValue = match[1].trim()
        if (inlineValue) {
            const inlineMap = parseInlineAccessMap(inlineValue)
            if (inlineMap && Object.keys(inlineMap).length > 0) {
                return inlineMap
            }
            return null
        }

        const map: SlideAccessMap = {}
        const baseIndent = rawLine.match(/^\s*/)?.[0].length ?? 0

        for (let nestedIndex = index + 1; nestedIndex < frontmatterLines.length; nestedIndex += 1) {
            const nestedLine = frontmatterLines[nestedIndex]
            const nestedTrimmed = nestedLine.trim()

            if (!nestedTrimmed || nestedTrimmed.startsWith('#')) continue

            const nestedIndent = nestedLine.match(/^\s*/)?.[0].length ?? 0
            if (nestedIndent <= baseIndent) break

            const separatorIndex = nestedTrimmed.indexOf(':')
            if (separatorIndex <= 0) continue

            const key = normalizeAccessKey(nestedTrimmed.slice(0, separatorIndex))
            const value = parseBooleanLiteral(nestedTrimmed.slice(separatorIndex + 1))
            if (!key || value === null) continue

            map[key] = value
        }

        return Object.keys(map).length > 0 ? map : null
    }

    return null
}

const parseFrontmatter = (frontmatterLines: string[]): SlideFrontmatter => ({
    name: parseFrontmatterName(frontmatterLines),
    access: parseFrontmatterAccess(frontmatterLines),
})

const parseDeckPasswordProfiles = (rawValue: string): DeckPasswordProfile[] => {
    const profiles: DeckPasswordProfile[] = []
    const seenKeys = new Set<string>()

    if (!rawValue.trim()) return profiles

    for (const entryRaw of rawValue.split(/[,\n;]+/)) {
        const entry = entryRaw.trim()
        if (!entry) continue

        const equalsIndex = entry.indexOf('=')
        const colonIndex = entry.indexOf(':')
        const separatorIndex = (() => {
            if (equalsIndex === -1) return colonIndex
            if (colonIndex === -1) return equalsIndex
            return Math.min(equalsIndex, colonIndex)
        })()

        if (separatorIndex <= 0) continue

        const key = sanitizePasswordKey(entry.slice(0, separatorIndex))
        const value = entry.slice(separatorIndex + 1).trim()
        if (!key || !value || seenKeys.has(key)) continue

        seenKeys.add(key)
        profiles.push({ key, value })
    }

    return profiles
}

const splitHeadmatter = (markdown: string): { headmatter: SlideFrontmatter; body: string } => {
    const lines = markdown.split(/\r?\n/)
    if (!lines.length || lines[0].trim() !== SLIDE_SEPARATOR) {
        return { headmatter: { name: null, access: null }, body: markdown }
    }

    for (let index = 1; index < lines.length; index += 1) {
        if (lines[index].trim() !== SLIDE_SEPARATOR) continue

        const headmatterLines = lines.slice(1, index)
        return {
            headmatter: parseFrontmatter(headmatterLines),
            body: lines.slice(index + 1).join('\n'),
        }
    }

    return { headmatter: { name: null, access: null }, body: markdown }
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
): { nextIndex: number; frontmatter: SlideFrontmatter } => {
    let probeIdx = startIdx
    while (probeIdx < lines.length && !lines[probeIdx].trim()) {
        probeIdx += 1
    }

    if (probeIdx >= lines.length) {
        return { nextIndex: startIdx, frontmatter: { name: null, access: null } }
    }

    let closingIdx = probeIdx
    while (closingIdx < lines.length && lines[closingIdx].trim() !== SLIDE_SEPARATOR) {
        closingIdx += 1
    }

    if (closingIdx >= lines.length) {
        return { nextIndex: startIdx, frontmatter: { name: null, access: null } }
    }

    const frontmatterLines = lines.slice(probeIdx, closingIdx)
    if (!frontmatterLines.length) {
        return { nextIndex: startIdx, frontmatter: { name: null, access: null } }
    }

    let hasKey = false
    for (const rawLine of frontmatterLines) {
        if (!isYamlLikeFrontmatterLine(rawLine)) {
            return { nextIndex: startIdx, frontmatter: { name: null, access: null } }
        }
        if (YAML_TOP_LEVEL_KEY_RE.test(rawLine.trim()) || YAML_NESTED_KEY_RE.test(rawLine)) {
            hasKey = true
        }
    }

    if (!hasKey) {
        return { nextIndex: startIdx, frontmatter: { name: null, access: null } }
    }

    return {
        nextIndex: closingIdx + 1,
        frontmatter: parseFrontmatter(frontmatterLines),
    }
}

const buildSlideMetadataByNumberMap = (markdown: string): Map<string, SlideMetadata> => {
    const { headmatter, body } = splitHeadmatter(markdown)
    const lines = body.split(/\r?\n/)
    const map = new Map<string, SlideMetadata>()

    let inFence = false
    let fenceMarker = ''
    let inHtmlComment = false
    let currentFrontmatter = headmatter
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

                const folderName = currentFrontmatter.name
                    ? sanitizeSlideName(currentFrontmatter.name)
                    : null

                map.set(String(slideNumber), {
                    audioFolderName: folderName || null,
                    access: currentFrontmatter.access,
                })
            }

            current.length = 0
            const consumedFrontmatter = consumeSlideFrontmatter(lines, index + 1)
            currentFrontmatter = consumedFrontmatter.frontmatter
            index = consumedFrontmatter.nextIndex
            continue
        }

        current.push(line)
        index += 1
    }

    const tailContent = current.join('\n').trim()
    if (tailContent) {
        slideNumber += 1

        const folderName = currentFrontmatter.name
            ? sanitizeSlideName(currentFrontmatter.name)
            : null

        map.set(String(slideNumber), {
            audioFolderName: folderName || null,
            access: currentFrontmatter.access,
        })
    }

    return map
}

const slideMetadataByNumber = buildSlideMetadataByNumberMap(slidesMarkdown)

const buildPathWithBase = (baseUrl: string, relativePath: string): string => {
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
    const normalizedRelative = relativePath.replace(/^\/+/, '')
    return `${normalizedBase}${normalizedRelative}`
}

const isAutoplayBlockError = (error: unknown): boolean => {
    return error instanceof DOMException && error.name === 'NotAllowedError'
}

const resolveSlideNumber = (path: string): string | null => {
    // Normalize path: remove trailing slash if present (except root)
    const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path

    if (normalizedPath === '/' || normalizedPath === '/1') {
        return '1'
    }

    const match = normalizedPath.match(/^\/(\d+)(?:\/.*)?$/)
    if (match) {
        return match[1]
    }

    return null
}

const hasOwnProperty = (record: SlideAccessMap, key: string): boolean =>
    Object.prototype.hasOwnProperty.call(record, key)

const resolveAudioFolderName = (slideNumber: string): string | null => {
    return slideMetadataByNumber.get(slideNumber)?.audioFolderName ?? null
}

export default defineAppSetup(({ router }) => {
    if (typeof window === 'undefined') return
    if (import.meta.env.PROD) {
        document.documentElement.classList.add('slidev-public-build')
    }

    const baseUrl = import.meta.env.BASE_URL || '/'
    const withBase = (relativePath: string) => buildPathWithBase(baseUrl, relativePath)
    const buildAudioPath = (directory: string, audioFolderName: string) =>
        withBase(`${directory}/${audioFolderName}/audio.mp3`)

    let currentAudio: HTMLAudioElement | null = null
    let playbackRequestId = 0
    let hasUserInteracted = false
    let pendingSlideNumber: string | null = null
    let lastPlayedSlideNumber: string | null = null
    const DEFAULT_DECK_PASSWORD = 'arianne'
    const DEFAULT_PASSWORD_PROFILE_KEY = 'default'
    const DECK_PASSWORD = String(import.meta.env.VITE_SLIDES_PASSWORD ?? DEFAULT_DECK_PASSWORD).trim()
    const DECK_PASSWORDS = parseDeckPasswordProfiles(String(import.meta.env.VITE_SLIDES_PASSWORDS ?? ''))
    const DECK_PASSWORD_PROFILES: DeckPasswordProfile[] = DECK_PASSWORDS.length > 0
        ? DECK_PASSWORDS
        : DECK_PASSWORD
            ? [{ key: DEFAULT_PASSWORD_PROFILE_KEY, value: DECK_PASSWORD }]
            : []
    const DECK_PASSWORD_ENABLED = DECK_PASSWORD_PROFILES.length > 0
    const ALL_SLIDE_NUMBERS = Array.from(slideMetadataByNumber.keys())
        .map((value) => Number.parseInt(value, 10))
        .filter((value) => Number.isFinite(value))
        .sort((left, right) => left - right)
    let activePasswordKey: string | null = DECK_PASSWORD_ENABLED ? null : DEFAULT_PASSWORD_PROFILE_KEY
    let isDeckUnlocked = !DECK_PASSWORD_ENABLED
    let redirectPathAfterUnlock: string | null = null
    const PASSWORD_GATE_ID = 'slide-password-gate'
    const PASSWORD_INPUT_ID = 'slide-password-input'
    const PASSWORD_ERROR_ID = 'slide-password-error'
    const PASSWORD_LOCK_CLASS = 'slide-password-lock'

    const ensureAudioHint = () => {
        if (hasUserInteracted || document.getElementById(AUDIO_HINT_ID)) return

        const hint = document.createElement('div')
        hint.id = AUDIO_HINT_ID
        hint.className = AUDIO_HINT_CLASS
        hint.setAttribute('role', 'status')
        hint.setAttribute('aria-live', 'polite')
        hint.textContent = 'Audio disponibile: fai click o premi un tasto per attivarlo.'
        document.body.appendChild(hint)
    }

    const removeAudioHint = () => {
        const hint = document.getElementById(AUDIO_HINT_ID)
        if (hint) hint.remove()
    }

    const ensureNextSlideHint = (): HTMLDivElement => {
        const existingHint = document.getElementById(NEXT_SLIDE_HINT_ID)
        if (existingHint instanceof HTMLDivElement) return existingHint

        const hint = document.createElement('div')
        hint.id = NEXT_SLIDE_HINT_ID
        hint.className = NEXT_SLIDE_HINT_CLASS
        hint.setAttribute('role', 'status')
        hint.setAttribute('aria-live', 'polite')
        hint.setAttribute('aria-label', 'Audio terminato, puoi passare alla slide successiva')
        hint.setAttribute('aria-hidden', 'true')

        const icon = document.createElement('span')
        icon.className = NEXT_SLIDE_HINT_ICON_CLASS
        icon.setAttribute('aria-hidden', 'true')
        hint.appendChild(icon)

        document.body.appendChild(hint)
        return hint
    }

    const hideNextSlideHint = () => {
        const hint = ensureNextSlideHint()
        hint.classList.remove(NEXT_SLIDE_HINT_VISIBLE_CLASS)
        hint.setAttribute('aria-hidden', 'true')
    }

    const showNextSlideHint = () => {
        const hint = ensureNextSlideHint()
        hint.classList.add(NEXT_SLIDE_HINT_VISIBLE_CLASS)
        hint.setAttribute('aria-hidden', 'false')
    }

    const removePasswordGate = () => {
        const gate = document.getElementById(PASSWORD_GATE_ID)
        if (!gate) return

        gate.classList.add('password-gate--exit')
        window.setTimeout(() => {
            gate.remove()
            document.body.classList.remove(PASSWORD_LOCK_CLASS)
        }, 180)
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
            hideNextSlideHint()
            emitAudioStart({
                slideNumber,
                audioFolderName,
                startedAt: performance.now(),
                requestId,
            })
        }
        audio.addEventListener('playing', notifyAudioStart, { once: true })

        const notifyAudioEnd = () => {
            if (requestId !== playbackRequestId) return
            showNextSlideHint()
            emitAudioEnd({
                slideNumber,
                audioFolderName,
                endedAt: performance.now(),
                requestId,
            })
        }
        audio.addEventListener('ended', notifyAudioEnd, { once: true })

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

            // Do not wait for canplay: immediate play() keeps autoplay-unlock chances higher.
            audio.play().catch((error: unknown) => {
                if (isAutoplayBlockError(error)) return

                if (audio.error) {
                    triggerFallback()
                    return
                }

                console.log(
                    `Audio play prevented for slide ${slideNumber} ` +
                    `(audio folder: ${audioFolderName}, path: ${audioPath}):`,
                    error,
                )
            })
            return
        }

        audio.play().catch((error: unknown) => {
            if (requestId !== playbackRequestId) return
            if (isAutoplayBlockError(error)) return

            if (audio.error) {
                console.log(
                    `No audio found for slide ${slideNumber} in /${PRIMARY_AUDIO_DIR} or /${FALLBACK_AUDIO_DIR}`,
                )
                showNextSlideHint()
                emitAudioEnd({
                    slideNumber,
                    audioFolderName,
                    endedAt: performance.now(),
                    requestId,
                })
                return
            }

            console.log(
                `Audio play prevented for slide ${slideNumber} ` +
                `(audio folder: ${audioFolderName}, fallback path: ${audioPath}):`,
                error,
            )
        })
    }

    const isSlideVisibleForPassword = (slideNumber: string, passwordKey: string | null): boolean => {
        const accessMap = slideMetadataByNumber.get(slideNumber)?.access
        if (!accessMap || Object.keys(accessMap).length === 0) return true

        if (passwordKey && hasOwnProperty(accessMap, passwordKey)) {
            return accessMap[passwordKey]
        }

        if (hasOwnProperty(accessMap, '*')) {
            return accessMap['*']
        }

        if (hasOwnProperty(accessMap, DEFAULT_PASSWORD_PROFILE_KEY)) {
            return accessMap[DEFAULT_PASSWORD_PROFILE_KEY]
        }

        return true
    }

    const getVisibleSlideNumbersForPassword = (passwordKey: string | null): number[] => {
        return ALL_SLIDE_NUMBERS.filter((slideNumber) =>
            isSlideVisibleForPassword(String(slideNumber), passwordKey),
        )
    }

    const findVisibleFallbackSlideNumber = (
        requestedSlideNumber: string,
        fromSlideNumber: string | null,
    ): string | null => {
        const requested = Number.parseInt(requestedSlideNumber, 10)
        if (!Number.isFinite(requested)) return null

        const visibleSlides = getVisibleSlideNumbersForPassword(activePasswordKey)
        if (!visibleSlides.length) return null

        if (visibleSlides.includes(requested)) {
            return String(requested)
        }

        const from = fromSlideNumber ? Number.parseInt(fromSlideNumber, 10) : Number.NaN
        if (Number.isFinite(from) && from < requested) {
            const nextVisible = visibleSlides.find((slideNumber) => slideNumber > requested)
            return String(nextVisible ?? visibleSlides[visibleSlides.length - 1])
        }

        if (Number.isFinite(from) && from > requested) {
            for (let index = visibleSlides.length - 1; index >= 0; index -= 1) {
                if (visibleSlides[index] < requested) {
                    return String(visibleSlides[index])
                }
            }
            return String(visibleSlides[0])
        }

        const nextVisible = visibleSlides.find((slideNumber) => slideNumber >= requested)
        return String(nextVisible ?? visibleSlides[visibleSlides.length - 1])
    }

    const attemptPlay = (slideNumber: string) => {
        hideNextSlideHint()

        if (!hasUserInteracted) {
            pendingSlideNumber = slideNumber
            return
        }
        if (slideNumber === lastPlayedSlideNumber) return

        const audioFolderName = resolveAudioFolderName(slideNumber)
        if (!audioFolderName) {
            showNextSlideHint()
            return
        }

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
    router.beforeEach((to, from) => {
        const requestedSlideNumber = resolveSlideNumber(to.path)

        if (!isDeckUnlocked) {
            if (!requestedSlideNumber || requestedSlideNumber === '1') return true
            redirectPathAfterUnlock = to.fullPath
            return '/1'
        }

        if (!requestedSlideNumber) return true
        if (isSlideVisibleForPassword(requestedSlideNumber, activePasswordKey)) return true

        const fromSlideNumber = resolveSlideNumber(from.path)
        const fallbackSlideNumber = findVisibleFallbackSlideNumber(requestedSlideNumber, fromSlideNumber)
        if (!fallbackSlideNumber) return false

        return {
            path: `/${fallbackSlideNumber}`,
            query: to.query,
            hash: to.hash,
            replace: true,
        }
    })

    router.afterEach((to, from) => {
        const toSlideNumber = resolveSlideNumber(to.path)
        if (!toSlideNumber) return

        const fromSlideNumber = resolveSlideNumber(from.path)
        if (toSlideNumber === fromSlideNumber) return

        attemptPlay(toSlideNumber)
    })

    const unlockAudioOnFirstInteraction = () => {
        if (hasUserInteracted || !isDeckUnlocked) return

        hasUserInteracted = true
        removeAudioHint()

        const slideToPlay = pendingSlideNumber ?? resolveSlideNumber(router.currentRoute.value.path)
        if (slideToPlay) {
            attemptPlay(slideToPlay)
        }
    }

    const unlockDeck = () => {
        if (isDeckUnlocked) return

        isDeckUnlocked = true
        removePasswordGate()
        unlockAudioOnFirstInteraction()

        if (redirectPathAfterUnlock) {
            const pendingPath = redirectPathAfterUnlock
            redirectPathAfterUnlock = null
            void router.push(pendingPath)
            return
        }

        const currentSlideNumber = resolveSlideNumber(router.currentRoute.value.path) ?? '1'
        if (isSlideVisibleForPassword(currentSlideNumber, activePasswordKey)) {
            return
        }

        const fallbackSlideNumber = findVisibleFallbackSlideNumber(currentSlideNumber, null)
        if (fallbackSlideNumber) {
            void router.replace(`/${fallbackSlideNumber}`)
        }
    }

    const ensurePasswordGate = () => {
        if (isDeckUnlocked || !DECK_PASSWORD_ENABLED) return
        if (document.getElementById(PASSWORD_GATE_ID)) return

        document.body.classList.add(PASSWORD_LOCK_CLASS)

        const gate = document.createElement('div')
        gate.id = PASSWORD_GATE_ID
        gate.className = 'password-gate'
        gate.setAttribute('role', 'dialog')
        gate.setAttribute('aria-modal', 'true')
        gate.setAttribute('aria-labelledby', 'slide-password-title')
        gate.innerHTML = `
<div class="password-gate__bg" aria-hidden="true">
  <div class="password-gate__orb password-gate__orb--teal"></div>
  <div class="password-gate__orb password-gate__orb--orange"></div>
</div>
<form class="password-gate__card" novalidate>
  <img src="${withBase('img/2/arianne-logo-orange.svg')}" class="password-gate__logo" alt="Arianne" />
  <p class="password-gate__eyebrow">Presentazione protetta</p>
  <h1 id="slide-password-title" class="password-gate__title">Inserisci la password</h1>
  <label class="password-gate__label" for="${PASSWORD_INPUT_ID}">Password</label>
  <input
    id="${PASSWORD_INPUT_ID}"
    class="password-gate__input"
    type="password"
    autocomplete="current-password"
    placeholder="Password"
    required
  />
  <p id="${PASSWORD_ERROR_ID}" class="password-gate__error" role="alert" aria-live="polite"></p>
  <button type="submit" class="password-gate__submit">Accedi alle slide</button>
</form>
`
        document.body.appendChild(gate)

        const form = gate.querySelector('form')
        const input = gate.querySelector(`#${PASSWORD_INPUT_ID}`)
        const error = gate.querySelector(`#${PASSWORD_ERROR_ID}`)

        if (!(form instanceof HTMLFormElement)) return
        if (!(input instanceof HTMLInputElement)) return
        if (!(error instanceof HTMLParagraphElement)) return

        const clearError = () => {
            error.textContent = ''
            error.classList.remove('is-visible')
        }

        const showError = (message: string) => {
            error.textContent = message
            error.classList.add('is-visible')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const matchedProfile = DECK_PASSWORD_PROFILES.find(
                (profile) => profile.value === input.value,
            )
            if (matchedProfile) {
                const visibleSlides = getVisibleSlideNumbersForPassword(matchedProfile.key)
                if (!visibleSlides.length) {
                    showError('Questa password non ha slide disponibili.')
                    input.value = ''
                    input.focus()
                    return
                }

                activePasswordKey = matchedProfile.key
                clearError()
                unlockDeck()
                return
            }

            showError('Password non valida. Riprova.')
            input.value = ''
            input.focus()
        })

        input.addEventListener('input', clearError)

        window.requestAnimationFrame(() => {
            input.focus()
        })
    }

    if (isDeckUnlocked) {
        ensureAudioHint()
    } else {
        ensurePasswordGate()
    }
    hideNextSlideHint()

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
