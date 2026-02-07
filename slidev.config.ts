import { defineConfig } from 'slidev'

export default defineConfig({
  title: "Arianne - L'ecosistema digitale per la salute mentale",
  titleTemplate: '%s',
  theme: 'default',
  colorSchema: 'auto',
  transition: 'slide-left',
  mdc: true,
  drawings: {
    persist: false,
  },
})
