import { defineConfig } from 'slidev'

export default defineConfig({
  title: "Arianne - L'ecosistema digitale per la salute mentale",
  titleTemplate: '%s',
  theme: 'default',
  colorSchema: 'light',
  transition: 'slide-left',
  mdc: true,
  drawings: {
    persist: false,
  },
})
