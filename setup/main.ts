import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ router }) => {
    if (typeof window === 'undefined') return

    const AUDIO_FOLDER_OFFSET = 0
    const PRIMARY_AUDIO_DIR = 'audio_test'
    const FALLBACK_AUDIO_DIR = 'audio'
    const baseUrl = import.meta.env.BASE_URL || '/'
    const withBase = (relativePath: string) => {
        const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
        const normalizedRelative = relativePath.replace(/^\/+/, '')
        return `${normalizedBase}${normalizedRelative}`
    }
    const buildAudioPath = (directory: string, audioFolderNumber: string) =>
        withBase(`${directory}/${audioFolderNumber}/audio.mp3`)

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
        audioFolderNumber: string,
        requestId: number,
        isFallback = false,
    ) => {
        if (requestId !== playbackRequestId) return

        const audio = new Audio(audioPath)
        currentAudio = audio

        if (!isFallback) {
            let fallbackTriggered = false
            const triggerFallback = () => {
                if (fallbackTriggered || requestId !== playbackRequestId) return
                fallbackTriggered = true
                playAudio(
                    buildAudioPath(FALLBACK_AUDIO_DIR, audioFolderNumber),
                    slideNumber,
                    audioFolderNumber,
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
                    `(audio folder: ${audioFolderNumber}, path: ${audioPath}):`,
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
                `(audio folder: ${audioFolderNumber}, fallback path: ${audioPath}):`,
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

    const resolveAudioFolderNumber = (slideNumber: string): string | null => {
        const numericSlideNumber = Number(slideNumber)
        if (!Number.isInteger(numericSlideNumber) || numericSlideNumber <= 0) return null
        return String(numericSlideNumber + AUDIO_FOLDER_OFFSET)
    }

    const attemptPlay = (slideNumber: string) => {
        if (!hasUserInteracted) {
            pendingSlideNumber = slideNumber
            return
        }
        if (slideNumber === lastPlayedSlideNumber) return

        const audioFolderNumber = resolveAudioFolderNumber(slideNumber)
        if (!audioFolderNumber) return

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
            buildAudioPath(PRIMARY_AUDIO_DIR, audioFolderNumber),
            slideNumber,
            audioFolderNumber,
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
