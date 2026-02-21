import { defineConfig, presetWind, presetIcons } from 'unocss'

export default defineConfig({
    presets: [
        presetWind(),
        presetIcons(),
    ],
    safelist: [
        'i-heroicons-chevron-right-20-solid',
    ],
})
