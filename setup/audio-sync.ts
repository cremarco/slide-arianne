export const AUDIO_STARTED_EVENT = 'arianne:audio-started'
export const AUDIO_ENDED_EVENT = 'arianne:audio-ended'

const AUDIO_START_STATE_KEY = '__arianneAudioStartState'
const AUDIO_END_STATE_KEY = '__arianneAudioEndState'

export type AudioStartDetail = {
    slideNumber: string
    audioFolderName: string
    startedAt: number
    requestId: number
}

export type AudioEndDetail = {
    slideNumber: string
    audioFolderName: string
    endedAt: number
    requestId: number
}

type WindowWithAudioState = Window & {
    [AUDIO_START_STATE_KEY]?: AudioStartDetail
    [AUDIO_END_STATE_KEY]?: AudioEndDetail
}

const getWindowWithAudioState = (): WindowWithAudioState | null => {
    if (typeof window === 'undefined') return null
    return window as WindowWithAudioState
}

export const getLastAudioStart = (): AudioStartDetail | null => {
    const win = getWindowWithAudioState()
    if (!win) return null
    return win[AUDIO_START_STATE_KEY] ?? null
}

export const getLastAudioEnd = (): AudioEndDetail | null => {
    const win = getWindowWithAudioState()
    if (!win) return null
    return win[AUDIO_END_STATE_KEY] ?? null
}

export const emitAudioStart = (detail: AudioStartDetail) => {
    const win = getWindowWithAudioState()
    if (!win) return

    win[AUDIO_START_STATE_KEY] = detail
    win.dispatchEvent(new CustomEvent<AudioStartDetail>(AUDIO_STARTED_EVENT, { detail }))
}

export const emitAudioEnd = (detail: AudioEndDetail) => {
    const win = getWindowWithAudioState()
    if (!win) return

    win[AUDIO_END_STATE_KEY] = detail
    win.dispatchEvent(new CustomEvent<AudioEndDetail>(AUDIO_ENDED_EVENT, { detail }))
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

export const onAudioEndedFor = (
    audioFolderName: string,
    onEnd: () => void,
    minEndedAt = Number.NEGATIVE_INFINITY,
): (() => void) => {
    const win = getWindowWithAudioState()
    if (!win) return () => {}

    const current = getLastAudioEnd()
    if (
        current?.audioFolderName === audioFolderName &&
        current.endedAt >= minEndedAt
    ) {
        onEnd()
        return () => {}
    }

    const handler = (event: Event) => {
        const detail = (event as CustomEvent<AudioEndDetail>).detail
        if (
            !detail ||
            detail.audioFolderName !== audioFolderName ||
            detail.endedAt < minEndedAt
        ) {
            return
        }
        win.removeEventListener(AUDIO_ENDED_EVENT, handler as EventListener)
        onEnd()
    }

    win.addEventListener(AUDIO_ENDED_EVENT, handler as EventListener)
    return () => {
        win.removeEventListener(AUDIO_ENDED_EVENT, handler as EventListener)
    }
}
