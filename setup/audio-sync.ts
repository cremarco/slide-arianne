export const AUDIO_STARTED_EVENT = 'arianne:audio-started'
const AUDIO_STATE_KEY = '__arianneAudioStartState'

export type AudioStartDetail = {
    slideNumber: string
    audioFolderName: string
    startedAt: number
    requestId: number
}

type WindowWithAudioState = Window & {
    [AUDIO_STATE_KEY]?: AudioStartDetail
}

const getWindowWithAudioState = (): WindowWithAudioState | null => {
    if (typeof window === 'undefined') return null
    return window as WindowWithAudioState
}

export const getLastAudioStart = (): AudioStartDetail | null => {
    const win = getWindowWithAudioState()
    if (!win) return null
    return win[AUDIO_STATE_KEY] ?? null
}

export const emitAudioStart = (detail: AudioStartDetail) => {
    const win = getWindowWithAudioState()
    if (!win) return

    win[AUDIO_STATE_KEY] = detail
    win.dispatchEvent(new CustomEvent<AudioStartDetail>(AUDIO_STARTED_EVENT, { detail }))
}

export const onAudioStartedFor = (
    audioFolderName: string,
    onStart: () => void,
    minStartedAt = Number.NEGATIVE_INFINITY,
): (() => void) => {
    const win = getWindowWithAudioState()
    if (!win) return () => {}

    const current = getLastAudioStart()
    if (
        current?.audioFolderName === audioFolderName &&
        current.startedAt >= minStartedAt
    ) {
        onStart()
        return () => {}
    }

    const handler = (event: Event) => {
        const detail = (event as CustomEvent<AudioStartDetail>).detail
        if (
            !detail ||
            detail.audioFolderName !== audioFolderName ||
            detail.startedAt < minStartedAt
        ) {
            return
        }
        win.removeEventListener(AUDIO_STARTED_EVENT, handler as EventListener)
        onStart()
    }

    win.addEventListener(AUDIO_STARTED_EVENT, handler as EventListener)
    return () => {
        win.removeEventListener(AUDIO_STARTED_EVENT, handler as EventListener)
    }
}
