import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ router }) => {
    if (typeof window === 'undefined') return

    let currentAudio: HTMLAudioElement | null = null

    const attemptPlay = (path: string) => {
        // 1. Stop existing
        if (currentAudio) {
            currentAudio.pause()
            currentAudio = null
        }

        // 2. Resolve slide number
        let slideNumber: string | undefined
        // Normalize path: remove trailing slash if present (except root)
        const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path

        if (normalizedPath === '/' || normalizedPath === '/1') {
            slideNumber = '1'
        } else {
            const match = normalizedPath.match(/^\/(\d+)$/)
            if (match) {
                slideNumber = match[1]
            }
        }

        if (!slideNumber) return

        // 3. Play
        const audioPath = `/audio/${slideNumber}/audio.mp3`
        const audio = new Audio(audioPath)
        currentAudio = audio

        // We intentionally do not wait for 'canplay' to play() to be as fast as possible,
        // maximizing chances to be considered part of an interaction chain if one exists.
        audio.play().catch((e) => {
            console.log(`Audio play prevented for slide ${slideNumber} (path: ${audioPath}):`, e)
        })
    }

    // Handle navigation changes
    router.afterEach((to) => {
        attemptPlay(to.path)
    })

    // Handle initial page load
    router.isReady().then(() => {
        attemptPlay(router.currentRoute.value.path)
    })
})
