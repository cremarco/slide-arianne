import { reactive } from 'vue'

export const timings = reactive({
    slide2: {
        logoEntryDuration: 800,
        computerSlideInDuration: 1000,
        computerSlideInDelay: 300,
        scrollingImageDuration: 40000,
    },
    slide3: {
        cardBaseDelay: 16000,
        cardStagger: 800,
        curtainOpenDelay: 15000,
        curtainTransitionDuration: 1000,
    },
    slide4: {
        cardBaseDelay: 5000,
        cardStagger: 8000,
    },
    slide6: {
        desktopBaseDelay: 3000,
        desktopStagger: 3000,
        tabletDelay: 7500,
    },
    slide8: {
        shotBaseDelay: 3000,
        shotStagger: 2500,
    },
    slide9: {
        shotDelay: 4500,
    },
    slide12: {
        shotDelay: 4500,
    },
    slide13: {
        desktopBaseDelay: 3000,
        desktopStagger: 2500,
    },
    slide20: {
        revealBaseDelay: 3000,
        revealStagger: 2500,
    },
    slide16: {
        stagger: 80,
    },
})
