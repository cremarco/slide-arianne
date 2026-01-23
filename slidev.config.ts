import { defineConfig } from 'slidev'

export default defineConfig({
  title: "Arianne - L'ecosistema digitale per la salute mentale",
  theme: 'seriph',
  transition: 'slide-left',
  mdc: true,
  drawings: {
    persist: false,
  },
  fonts: {
    sans: 'Inter',
    serif: 'Inter',
  },
})
