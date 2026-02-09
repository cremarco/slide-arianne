import { defineAppSetup } from '@slidev/types'
import slidesMarkdown from '../slides.md?raw'
import { emitAudioStart } from './audio-sync'
import { buildSlideNameByNumberMap } from './slide-name-map'

const PRIMARY_AUDIO_DIR = 'audio_test'
const FALLBACK_AUDIO_DIR = 'audio'
const AUDIO_HINT_ID = 'audio-activation-hint'
const AUDIO_HINT_CLASS = 'audio-activation-hint'

const slideNameByNumber = buildSlideNameByNumberMap(slidesMarkdown)

const resolveSlideNumber = (path: string): string | null => {
  const normalizedPath = path === '/' ? '/1' : path.replace(/\/+$/, '')
  const match = normalizedPath.match(/^\/(\d+)$/)
  return match ? match[1] : null
}

const resolveAudioFolderName = (slideNumber: string): string | null => {
  return slideNameByNumber.get(slideNumber) ?? null
}

const buildPathWithBase = (baseUrl: string, relativePath: string): string => {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const normalizedRelative = relativePath.replace(/^\/+/, '')
  return `${normalizedBase}${normalizedRelative}`
}

const isAutoplayBlockError = (error: unknown): boolean => {
  return error instanceof DOMException && error.name === 'NotAllowedError'
}

export default defineAppSetup(({ router }) => {
  if (typeof window === 'undefined') return

  const baseUrl = import.meta.env.BASE_URL || '/'
  const buildAudioPath = (directory: string, audioFolderName: string) => {
    return buildPathWithBase(baseUrl, `${directory}/${audioFolderName}/audio.mp3`)
  }

  let currentAudio: HTMLAudioElement | null = null
  let playbackRequestId = 0
  let hasUserInteracted = false
  let pendingSlideNumber: string | null = null
  let lastPlayedSlideNumber: string | null = null

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
      if (isAutoplayBlockError(error)) return

      if (audio.error) {
        console.log(
          `No audio found for slide ${slideNumber} in /${PRIMARY_AUDIO_DIR} or /${FALLBACK_AUDIO_DIR}`,
        )
        return
      }

      console.log(
        `Audio play prevented for slide ${slideNumber} ` +
          `(audio folder: ${audioFolderName}, fallback path: ${audioPath}):`,
        error,
      )
    })
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

    if (currentAudio) {
      currentAudio.pause()
      currentAudio = null
    }

    playAudio(
      buildAudioPath(PRIMARY_AUDIO_DIR, audioFolderName),
      slideNumber,
      audioFolderName,
      requestId,
    )
  }

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

  window.addEventListener('pointerdown', unlockAudioOnFirstInteraction, {
    once: true,
    passive: true,
  })
  window.addEventListener('keydown', unlockAudioOnFirstInteraction, { once: true })
  window.addEventListener('touchstart', unlockAudioOnFirstInteraction, {
    once: true,
    passive: true,
  })

  router.isReady().then(() => {
    const initialSlideNumber = resolveSlideNumber(router.currentRoute.value.path)
    if (initialSlideNumber) {
      attemptPlay(initialSlideNumber)
    }
  })
})
