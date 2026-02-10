import { defineAppSetup } from '@slidev/types'
import slidesMarkdown from '../slides.md?raw'
import { emitAudioEnd, emitAudioStart } from './audio-sync'
import { buildSlideNameByNumberMap } from './slide-name-map'

const PRIMARY_AUDIO_DIR = 'audio_test'
const FALLBACK_AUDIO_DIR = 'audio'
const AUDIO_HINT_ID = 'audio-activation-hint'
const AUDIO_HINT_CLASS = 'audio-activation-hint'
const NEXT_SLIDE_HINT_ID = 'audio-next-slide-hint'
const NEXT_SLIDE_HINT_CLASS = 'audio-next-slide-hint'
const NEXT_SLIDE_HINT_VISIBLE_CLASS = 'is-visible'
const NEXT_SLIDE_HINT_ICON_CLASS =
  'audio-next-slide-hint__icon i-heroicons-chevron-right-20-solid'

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
  hideNextSlideHint()

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
