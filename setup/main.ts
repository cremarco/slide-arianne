import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ router }) => {
    if (typeof window === 'undefined') return

    let currentAudio: HTMLAudioElement | null = null
    let playbackRequestId = 0

    const playAudio = (audioPath: string, slideNumber: string, requestId: number, isFallback = false) => {
        if (requestId !== playbackRequestId) return

        const audio = new Audio(audioPath)
        currentAudio = audio

        if (!isFallback) {
            let fallbackTriggered = false
            const triggerFallback = () => {
                if (fallbackTriggered || requestId !== playbackRequestId) return
                fallbackTriggered = true
                playAudio(`/audio_test/${slideNumber}/audio.mp3`, slideNumber, requestId, true)
            }

            audio.addEventListener('error', triggerFallback, { once: true })

            // We intentionally do not wait for 'canplay' to play() to be as fast as possible,
            // maximizing chances to be considered part of an interaction chain if one exists.
            audio.play().catch((e) => {
                if (audio.error) {
                    triggerFallback()
                    return
                }

                console.log(`Audio play prevented for slide ${slideNumber} (path: ${audioPath}):`, e)
            })
            return
        }

        audio.play().catch((e) => {
            if (audio.error) {
                console.log(`No audio found for slide ${slideNumber} in /audio or /audio_test`)
                return
            }

            console.log(`Audio play prevented for slide ${slideNumber} (fallback path: ${audioPath}):`, e)
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

    const attemptPlay = (slideNumber: string) => {
        const requestId = ++playbackRequestId

        // 1. Stop existing
        if (currentAudio) {
            currentAudio.pause()
            currentAudio = null
        }

        // 2. Play
        playAudio(`/audio/${slideNumber}/audio.mp3`, slideNumber, requestId)
    }

    // Handle navigation changes
    router.afterEach((to, from) => {
        const toSlideNumber = resolveSlideNumber(to.path)
        if (!toSlideNumber) return

        const fromSlideNumber = resolveSlideNumber(from.path)
        if (toSlideNumber === fromSlideNumber) return

        attemptPlay(toSlideNumber)
    })

    // Handle initial page load
    router.isReady().then(() => {
        const initialSlideNumber = resolveSlideNumber(router.currentRoute.value.path)
        if (initialSlideNumber) {
            attemptPlay(initialSlideNumber)
        }
    })
})
