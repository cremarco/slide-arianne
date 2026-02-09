---
title: Arianne - L'ecosistema digitale per la salute mentale
titleTemplate: '%s'
name: arianne-cover
layout: default
class: relative p-0
routerMode: history
---

<div class="w-full h-full relative cover-animated">
  <div class="cover-animated__bg" aria-hidden="true">
    <svg class="cover-animated__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1080" preserveAspectRatio="none">
      <defs>
        <g id="cover-lines-set">
          <path class="cover-line line-1" d="M0 760 C 300 640 620 860 920 740 C 1220 620 1520 820 1820 720 C 2080 640 2260 730 2400 700" />
          <path class="cover-line line-2" d="M0 690 C 280 560 600 800 900 700 C 1200 600 1500 820 1800 720 C 2050 640 2250 730 2400 700" />
          <path class="cover-line line-3" d="M0 620 C 260 500 560 740 860 660 C 1160 580 1460 780 1760 700 C 2020 630 2240 730 2400 700" />
          <path class="cover-line line-4" d="M0 840 C 320 720 640 920 940 820 C 1240 720 1540 900 1840 800 C 2080 730 2260 860 2400 820" />
          <path class="cover-line line-5" d="M0 900 C 320 780 620 980 920 880 C 1220 780 1520 980 1820 900 C 2060 840 2240 940 2400 920" />
          <path class="cover-line line-6" d="M0 560 C 260 450 560 660 860 600 C 1160 540 1460 700 1760 660 C 2020 620 2240 720 2400 700" />
          <path class="cover-line line-7" d="M0 500 C 300 400 620 620 920 560 C 1220 500 1520 680 1820 640 C 2080 600 2260 700 2400 680" />
        </g>
      </defs>
      <g class="cover-lines-track">
        <use href="#cover-lines-set" class="cover-lines cover-lines--a" />
        <use href="#cover-lines-set" class="cover-lines cover-lines--b" x="2400" />
      </g>
    </svg>
  </div>
  <div class="absolute top-6 right-6 z-10 cover-partner">
    <img src="/img/1/whattadata-unimib-logo.png" class="h-16" alt="Whattadata Unimib" />
  </div>
  <div class="absolute top-[40px] left-[54px] z-10 text-left cover-animated__content">
    <img src="/img/1/arianne-logo.png" class="h-32 mb-8 cover-logo" alt="Arianne" />
    <div class="slide-text cover-tagline" mdc>
      L’<strong>ecosistema digitale</strong> per la <strong>salute mentale</strong>
    </div>
  </div>
</div>

<style scoped>
.cover-animated {
  background: oklch(64.6% 0.222 41.116);
  overflow: hidden;
}

.cover-animated__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.cover-animated__bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 80%,
      color-mix(in srgb, var(--colore-arancio) 18%, transparent) 0%,
      transparent 58%);
  opacity: 0.7;
}

.cover-animated__svg {
  position: absolute;
  inset: 0;
  width: 200%;
  height: 115%;
  opacity: 0.82;
}

.cover-lines-track {
  animation: cover-lines-scroll 15s linear infinite;
}

.cover-lines {
  animation: cover-lines-breathe var(--cluster-duration, 16s) var(--cluster-ease, ease-in-out) infinite;
  transform-origin: center;
  --cluster-shift-x: 0px;
  --cluster-shift-y: -10px;
  --cluster-tilt: 0.35deg;
}

.cover-lines--a {
  --cluster-duration: 17s;
  --cluster-shift-x: -18px;
  --cluster-shift-y: -14px;
  --cluster-tilt: 0.45deg;
  animation-delay: 0s;
}

.cover-lines--b {
  --cluster-duration: 21s;
  --cluster-shift-x: 14px;
  --cluster-shift-y: 11px;
  --cluster-tilt: -0.4deg;
  animation-delay: -4s;
}

.cover-line {
  fill: none;
  stroke: var(--line-color, oklch(75% 0.2 45));
  stroke-linecap: butt;
  stroke-width: var(--line-width, 9);
  opacity: var(--line-opacity, 0.55);
  filter: drop-shadow(0 10px 18px color-mix(in srgb, var(--line-color) 30%, transparent));
  transform-box: fill-box;
  transform-origin: center;
  animation:
    cover-line-drift var(--float-duration, 14s) var(--float-ease, ease-in-out) infinite,
    cover-line-pulse var(--pulse-duration, 8s) ease-in-out infinite;
  animation-delay: var(--float-delay, 0s), var(--pulse-delay, 0s);
}

.line-1 {
  --line-color: oklch(89% 0.12 72);
  --line-width: 17;
  --line-opacity: 0.72;
  --line-opacity-peak: 0.88;
  --float-duration: 10.5s;
  --float-ease: cubic-bezier(0.36, 0.04, 0.22, 1);
  --float-x-1: -26px;
  --float-y-1: -28px;
  --float-tilt-1: 1.9deg;
  --float-scale-1: 1.06;
  --float-x-2: 16px;
  --float-y-2: 8px;
  --float-tilt-2: -1.2deg;
  --float-scale-2: 0.98;
  --float-x-3: -8px;
  --float-y-3: -14px;
  --float-tilt-3: 0.8deg;
  --float-scale-3: 1.03;
  --float-delay: -1.2s;
  --pulse-duration: 6.8s;
}

.line-2 {
  --line-color: oklch(51% 0.17 38);
  --line-width: 6;
  --line-opacity: 0.52;
  --line-opacity-peak: 0.67;
  --float-duration: 20s;
  --float-ease: cubic-bezier(0.45, 0, 0.2, 1);
  --float-x-1: 18px;
  --float-y-1: 10px;
  --float-tilt-1: -1.1deg;
  --float-scale-1: 1.01;
  --float-x-2: -26px;
  --float-y-2: -6px;
  --float-tilt-2: 0.7deg;
  --float-scale-2: 0.97;
  --float-x-3: 12px;
  --float-y-3: 14px;
  --float-tilt-3: -0.5deg;
  --float-scale-3: 1.02;
  --float-delay: -6.3s;
  --pulse-duration: 9s;
  --pulse-delay: -2s;
}

.line-3 {
  --line-color: oklch(77% 0.18 58);
  --line-width: 11;
  --line-opacity: 0.5;
  --line-opacity-peak: 0.66;
  --float-duration: 13.5s;
  --float-ease: cubic-bezier(0.42, 0, 0.19, 1);
  --float-x-1: -10px;
  --float-y-1: -20px;
  --float-tilt-1: 1.1deg;
  --float-scale-1: 1.04;
  --float-x-2: 22px;
  --float-y-2: 5px;
  --float-tilt-2: -0.6deg;
  --float-scale-2: 0.99;
  --float-x-3: -18px;
  --float-y-3: 12px;
  --float-tilt-3: 0.7deg;
  --float-scale-3: 1.02;
  --float-delay: -3s;
  --pulse-duration: 8.4s;
  --pulse-delay: -3s;
}

.line-4 {
  --line-color: oklch(45% 0.16 34);
  --line-width: 20;
  --line-opacity: 0.33;
  --line-opacity-peak: 0.47;
  --float-duration: 24s;
  --float-ease: cubic-bezier(0.4, 0.12, 0.22, 1);
  --float-x-1: 28px;
  --float-y-1: 18px;
  --float-tilt-1: -1.8deg;
  --float-scale-1: 1.04;
  --float-x-2: -18px;
  --float-y-2: -12px;
  --float-tilt-2: 1.2deg;
  --float-scale-2: 0.96;
  --float-x-3: 24px;
  --float-y-3: 8px;
  --float-tilt-3: -0.9deg;
  --float-scale-3: 1.01;
  --float-delay: -7s;
  --pulse-duration: 12s;
  --pulse-delay: -6s;
}

.line-5 {
  --line-color: oklch(94% 0.07 80);
  --line-width: 5;
  --line-opacity: 0.42;
  --line-opacity-peak: 0.58;
  --float-duration: 16.5s;
  --float-ease: cubic-bezier(0.34, 0.18, 0.18, 1);
  --float-x-1: -14px;
  --float-y-1: -9px;
  --float-tilt-1: 1.4deg;
  --float-scale-1: 1.05;
  --float-x-2: 9px;
  --float-y-2: 15px;
  --float-tilt-2: -1.6deg;
  --float-scale-2: 0.95;
  --float-x-3: -22px;
  --float-y-3: 4px;
  --float-tilt-3: 0.9deg;
  --float-scale-3: 1.03;
  --float-delay: -4.1s;
  --pulse-duration: 6.5s;
  --pulse-delay: -1.5s;
}

.line-6 {
  --line-color: oklch(60% 0.19 46);
  --line-width: 8;
  --line-opacity: 0.3;
  --line-opacity-peak: 0.45;
  --float-duration: 29s;
  --float-ease: cubic-bezier(0.5, 0, 0.22, 1);
  --float-x-1: 12px;
  --float-y-1: 6px;
  --float-tilt-1: -0.5deg;
  --float-scale-1: 1.01;
  --float-x-2: -8px;
  --float-y-2: -14px;
  --float-tilt-2: 0.4deg;
  --float-scale-2: 0.99;
  --float-x-3: 16px;
  --float-y-3: -4px;
  --float-tilt-3: -0.3deg;
  --float-scale-3: 1.01;
  --float-delay: -8s;
  --pulse-duration: 12.5s;
  --pulse-delay: -4s;
}

.line-7 {
  --line-color: oklch(70% 0.23 41);
  --line-width: 13;
  --line-opacity: 0.4;
  --line-opacity-peak: 0.56;
  --float-duration: 15.5s;
  --float-ease: cubic-bezier(0.35, 0.08, 0.2, 1);
  --float-x-1: -20px;
  --float-y-1: -18px;
  --float-tilt-1: 1.5deg;
  --float-scale-1: 1.05;
  --float-x-2: 14px;
  --float-y-2: 9px;
  --float-tilt-2: -1.1deg;
  --float-scale-2: 0.98;
  --float-x-3: -6px;
  --float-y-3: 16px;
  --float-tilt-3: 0.6deg;
  --float-scale-3: 1.02;
  --float-delay: -5.5s;
  --pulse-duration: 9.5s;
  --pulse-delay: -2.5s;
}

.cover-animated__content .slide-text {
  color: #1b1b1b;
  text-shadow: none;
}

.cover-animated__content .cover-logo {
  filter: none;
}

.cover-animated__content .cover-audio-note {
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.95rem;
  padding: 0.45rem 0.78rem;
  border-radius: 9999px;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;
  color: #1b1b1b;
  background: color-mix(in srgb, white 72%, transparent);
  border: 1px solid color-mix(in srgb, #1b1b1b 22%, transparent);
  backdrop-filter: blur(2px);
}

@keyframes cover-lines-scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes cover-lines-breathe {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform:
      translate3d(var(--cluster-shift-x, 0px), var(--cluster-shift-y, -12px), 0)
      rotate(var(--cluster-tilt, 0deg));
  }
}

@keyframes cover-line-drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scaleX(1) rotate(0deg);
  }

  22% {
    transform:
      translate3d(var(--float-x-1, -10px), var(--float-y-1, -12px), 0)
      scaleX(var(--float-scale-1, 1.03))
      rotate(var(--float-tilt-1, 0deg));
  }

  53% {
    transform:
      translate3d(var(--float-x-2, 8px), var(--float-y-2, 10px), 0)
      scaleX(var(--float-scale-2, 0.98))
      rotate(var(--float-tilt-2, 0deg));
  }

  79% {
    transform:
      translate3d(var(--float-x-3, -6px), var(--float-y-3, -6px), 0)
      scaleX(var(--float-scale-3, 1.02))
      rotate(var(--float-tilt-3, 0deg));
  }
}

@keyframes cover-line-pulse {
  0%,
  100% {
    opacity: var(--line-opacity, 0.55);
  }

  50% {
    opacity: var(--line-opacity-peak, 0.72);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cover-lines-track {
    animation: none;
  }

  .cover-lines {
    animation: none;
  }

  .cover-line {
    animation: none;
  }
}
</style>

<!--
[IT]
Secondo l'Organizzazione Mondiale della Sanità, una persona su otto nel mondo convive con un disturbo mentale.
La domanda di supporto cresce, ma l'esperienza digitale spesso è frammentata: videochiamate, chat, documenti e questionari sparsi in strumenti diversi.
Arianne nasce per rimettere ordine: un ecosistema clinico digitale che rende la psicoterapia, online o in presenza, più accessibile, continua e misurabile.
Come il filo di Arianna, guida pazienti e terapeuti con un percorso chiaro, seduta dopo seduta.
[EN-GB]
According to the World Health Organization, one in eight people worldwide live with a mental health condition.
The need for support is rising, but the digital journey is often fragmented: video calls, chat, documents and questionnaires scattered across different tools.
Arianne brings it all together: a clinical digital ecosystem that makes psychotherapy, online or in-person, more accessible, continuous and measurable.
Like Ariadne's thread, it guides patients and therapists along a clear path, session after session.
-->

---
name: product-vision
layout: default
class: relative overflow-hidden p-0
---

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const audioStarted = ref(false)
let stopAudioListener: (() => void) | null = null

onSlideEnter(() => {
  const enteredAt = performance.now()
  audioStarted.value = false
  stopAudioListener = onAudioStartedFor('product-vision', () => {
    audioStarted.value = true
  }, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  audioStarted.value = false
})
</script>

<div class="flex h-full" :class="{ 'product-vision--audio-started': audioStarted }">
  <!-- Text Column (3/5) -->
  <div class="w-3/5 relative px-14 pt-32 pb-10 flex flex-col justify-center h-full">
    <img src="/img/2/arianne-logo-orange.svg" class="absolute top-[40px] left-[54px] h-10 logo-animation" alt="Logo Arianne" />
    <div class="slide-text mb-6">
      Arianne è un <strong>ecosistema</strong> per la <strong>salute mentale.</strong>
      <br />
      <br />
      Una <strong>piattaforma digitale</strong> che unisce <strong>ricerca</strong> e <strong>tecnologia</strong> per rendere la <strong>psicoterapia</strong> online e in presenza più <strong>accessibile</strong>, <strong>continua</strong> e <strong>centrata sui bisogni di pazienti e terapeuti</strong>.
    </div>
  </div>

  <!-- Image Column (2/5) -->
  <div class="w-2/5 relative flex items-center justify-start h-full">
    <!-- Image wrapper offset to balance text and visual weight -->
    <div class="w-[600px] flex-shrink-0 computer-image flex justify-center relative translate-x-[88px]">
      <div class="relative w-full z-10">
        <img src="/img/imac.png" class="w-full relative z-20 pointer-events-none" alt="iMac" />
        <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
          <img src="/img/2/home.jpeg" class="w-full h-full object-cover object-top scrolling-image" alt="Schermata home Arianne" />
        </div>
      </div>
      <div class="device-shadow"></div>
    </div>
  </div>
</div>

<style scoped>
.logo-animation {
  opacity: 0;
}

.product-vision--audio-started .logo-animation {
  animation: logo-entry v-bind('timings.slide2.logoEntryDuration + "ms"') ease-out forwards;
}

.computer-image {
  opacity: 0;
}

.product-vision--audio-started .computer-image {
  animation: slide-in-right v-bind('timings.slide2.computerSlideInDuration + "ms"') ease-out forwards v-bind('timings.slide2.computerSlideInDelay + "ms"');
}

.scrolling-image {
  object-position: top;
}

.product-vision--audio-started .scrolling-image {
  animation: scroll-vertical v-bind('timings.slide2.scrollingImageDuration + "ms"') ease-in-out infinite alternate;
}

@keyframes scroll-vertical {
  0% {
    object-position: top;
  }
  100% {
    object-position: bottom;
  }
}

@keyframes logo-entry {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

<!--
[IT]
Che la seduta sia online o in studio, pazienti e terapeuti lavorano nello stesso percorso, dalla presa in carico alla continuità tra le sedute.
Non è solo una videochiamata: è un ecosistema che integra comunicazione sicura, strumenti clinici e monitoraggio tra un incontro e l'altro.
Così il percorso resta ordinato, più sostenibile nel tempo, e davvero personalizzabile.
[EN-GB]
Whether the session is online or in the clinic, patients and therapists follow one shared journey, from intake to continuity between sessions.
It's not just a video call: it's an ecosystem that combines secure communication, clinical tools and monitoring between appointments.
So the journey stays organised, sustainable over time, and genuinely tailored.
-->

---
layout: default
name: project-overview
class: relative h-full flex flex-col
---

# Il progetto

**Due ambienti**, un **percorso condiviso**.



<div v-if="contentTimelineStarted" class="grid grid-cols-3 gap-6 mt-12 text-left flex-1 content-center">
  <ProjectCard
    v-for="(card, index) in projectCards"
    :key="card.title"
    :title="card.title"
    :icon="card.icon"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 20,
        delay: timings.slide3.cardBaseDelay + (index * timings.slide3.cardStagger)
      }
    }"
  >
    <span v-html="card.description"></span>
  </ProjectCard>
</div>

<script setup lang="ts">
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { ref } from 'vue'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const curtainOpen = ref(false)
const contentTimelineStarted = ref(false)
let curtainTimer: ReturnType<typeof setTimeout> | null = null
let stopAudioListener: (() => void) | null = null

const startContentTimeline = () => {
  if (contentTimelineStarted.value) return

  contentTimelineStarted.value = true
  if (curtainTimer) clearTimeout(curtainTimer)
  curtainTimer = setTimeout(() => {
    curtainOpen.value = true
  }, timings.slide3.curtainOpenDelay)
}

onSlideEnter(() => {
  const enteredAt = performance.now()
  curtainOpen.value = false
  contentTimelineStarted.value = false
  if (curtainTimer) clearTimeout(curtainTimer)
  curtainTimer = null
  stopAudioListener = onAudioStartedFor('project-overview', startContentTimeline, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  if (curtainTimer) clearTimeout(curtainTimer)
  curtainTimer = null
  curtainOpen.value = false
  contentTimelineStarted.value = false
})

const projectCards = [
  {
    title: 'Collaborazione',
    icon: 'i-heroicons-users',
    description:
      'Interfacce dedicate per una <strong>collaborazione continua</strong> tra professionista e paziente.',
  },
  {
    title: 'Supporto continuo',
    icon: 'i-heroicons-chart-bar',
    description:
      'Strumenti per garantire <strong>continuità</strong> tra una seduta e l’altra, con <strong>compiti</strong> e <strong>test</strong>.',
  },
  {
    title: 'Prevenzione',
    icon: 'i-heroicons-shield-check',
    description:
      'Monitoraggio del <strong>piano terapeutico</strong> e attenzione ai <strong>segnali precoci</strong>, per intervenire in tempo.',
  },
]
</script>

<div class="absolute inset-0 z-50 flex pointer-events-none">
  <!-- EnzoWrapper -->
  <div 
    class="relative w-1/2 h-full transition-transform ease-in-out"
    :style="{ transitionDuration: timings.slide3.curtainTransitionDuration + 'ms' }"
    :class="curtainOpen ? '-translate-x-full' : 'translate-x-0'"
  >
    <div class="absolute bottom-12 w-full flex justify-center z-20">
      <div class="bg-[#ff8c42] bg-opacity-100 text-white text-center px-6 py-2 rounded-lg shadow-lg leading-tight">
        <span class="block text-xs font-semibold uppercase tracking-wider mb-0.5">Paziente</span>
        <span class="block text-lg font-bold">Enzo Ferri</span>
      </div>
    </div>
    <img 
      src="/img/3/enzo-pc.png" 
      class="w-full h-full object-cover"
      alt="Enzo"
    />
  </div>
  
  <!-- AnnaRitaWrapper -->
  <div 
    class="relative w-1/2 h-full transition-transform ease-in-out"
    :style="{ transitionDuration: timings.slide3.curtainTransitionDuration + 'ms' }"
    :class="curtainOpen ? 'translate-x-full' : 'translate-x-0'"
  >
    <div class="absolute bottom-12 w-full flex justify-center z-20">
      <div class="bg-[#006279] bg-opacity-100 text-white text-center px-6 py-2 rounded-lg shadow-lg leading-tight">
        <span class="block text-xs font-semibold uppercase tracking-wider mb-0.5">Terapeuta</span>
        <span class="block text-lg font-bold">Anna Rita Fumagalli</span>
      </div>
    </div>
    <img 
      src="/img/3/anna-rita-pc.jpg" 
      class="w-full h-full object-cover"
      alt="Anna Rita"
    />
  </div>
</div>

<!--
[IT]
Due ambienti distinti, uno per il terapeuta e uno per il paziente, ma un unico percorso condiviso.
Il clinico assegna attività e strumenti, il paziente compila e tiene traccia, e tutto resta nello stesso flusso.
Questo abilita collaborazione, supporto continuo e intercettazione precoce dei segnali lungo il percorso.
[EN-GB]
Two distinct environments, one for the therapist and one for the patient, but a single shared journey.
The clinician assigns activities and tools, the patient completes them and keeps track, and everything stays in the same flow.
That enables collaboration, continuous support, and spotting early signals along the journey.
-->

---
layout: default
name: target-users
class: relative h-full flex flex-col
---

# A chi si rivolge

Pensata per **professionisti della salute mentale** e **pazienti**, in **presenza** o **online**.




<div v-if="contentTimelineStarted" class="grid grid-cols-2 gap-6 mt-12 text-left flex-1 content-center">
  <ProjectCard
    v-for="(card, index) in projectCards"
    :key="card.title"
    :title="card.title"
    :icon="card.icon"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 20,
        delay: timings.slide4.cardBaseDelay + (index * timings.slide4.cardStagger)
      }
    }"
  >
    <span v-html="card.description"></span>
  </ProjectCard>
</div>

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const contentTimelineStarted = ref(false)
let stopAudioListener: (() => void) | null = null

onSlideEnter(() => {
  const enteredAt = performance.now()
  contentTimelineStarted.value = false
  stopAudioListener = onAudioStartedFor('target-users', () => {
    contentTimelineStarted.value = true
  }, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  contentTimelineStarted.value = false
})

const projectCards = [
  {
    title: 'Professionisti della salute mentale',
    icon: 'i-heroicons-briefcase',
    description:
      'Per ampliare la propria attività, lavorare con maggiore <strong>flessibilità</strong> e ricevere <strong>nuove richieste</strong> tramite una piattaforma strutturata.',
  },
  {
    title: 'Pazienti: in terapia o al primo accesso',
    icon: 'i-heroicons-heart',
    description:
      'Per seguire un <strong>percorso guidato</strong>, <strong>sicuro</strong> e <strong>flessibile</strong>: come integrazione alla terapia in presenza o come <strong>primo accesso</strong> alla psicoterapia.',
  }
]
</script>

<!--
[IT]
Professionisti e pazienti hanno bisogni diversi, ma un'esperienza coerente.
Per i professionisti il valore è ridurre burocrazia e frammentazione, con strumenti clinici pronti e pazienti sempre sotto controllo.
Per i pazienti è un accesso guidato, flessibile e rassicurante, con trasparenza su privacy, costi e percorso.
Funziona sia per terapia online che in presenza: cambia il setting, non cambia il percorso.
[EN-GB]
Professionals and patients have different needs, but one coherent experience.
For professionals, the value is less bureaucracy and less fragmentation, with ready-to-use clinical tools and patients always in view.
For patients, it's guided access that feels flexible and reassuring, with clarity on privacy, costs and the journey.
It works for online therapy and for in-person care: the setting changes, the journey doesn't.
-->

---
layout: default
name: professional-intro
class: relative p-0
---

<div class="w-full h-full absolute inset-0 animated-bg ribbon-theme ribbon-theme--teal overflow-hidden">
  <div class="ribbons-container">
    <div class="ribbon ribbon-1"></div>
    <div class="ribbon ribbon-2"></div>
    <div class="ribbon ribbon-3"></div>
    <div class="ribbon ribbon-4"></div>
  </div>
  
  <div class="absolute inset-0 flex items-center justify-center z-10 text-center">
    <h1 class="section-splash-title">La piattaforma <br /> per il professionista</h1>
  </div>
</div>

<!--
[IT]
Per il terapeuta, Arianne è un gestionale clinico: centralizza pazienti, agenda, cartelle cliniche e amministrazione.
Dashboard, note, questionari, diari, pagamenti e ricevute: tutto integrato, senza saltare tra strumenti diversi.
Così si dedica meno energia all'organizzazione e più tempo alla cura.
[EN-GB]
For the therapist, Arianne is a clinical management system: it centralises patients, scheduling, clinical records and administration.
Dashboard, notes, questionnaires, diaries, payments and receipts: everything is integrated, without jumping between tools.
So you spend less energy on organisation and more time on care.
-->

---
layout: default
name: dashboard-overview
class: relative
---

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const contentTimelineStarted = ref(false)
let stopAudioListener: (() => void) | null = null

onSlideEnter(() => {
  const enteredAt = performance.now()
  contentTimelineStarted.value = false
  stopAudioListener = onAudioStartedFor('dashboard-overview', () => {
    contentTimelineStarted.value = true
  }, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  contentTimelineStarted.value = false
})
</script>

# Dashboard

Una **panoramica immediata** su pazienti, attività e comunicazioni: **meno amministrazione**, **più tempo per la cura**.

<div v-if="contentTimelineStarted" class="dashboard-showcase relative mt-8 flex justify-center items-center gap-6">
  <!-- iMac 1 -->
  <div 
    class="dashboard-shell relative flex justify-center"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20, delay: timings.slide6.desktopBaseDelay } }"
  >
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20" />
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
        <img src="/img/7/therapist-dashboard.png" alt="Dashboard terapeuta 1" class="dashboard-shot dashboard-shot--left" />
      </div>
    </div>
    <div class="device-shadow"></div>
  </div>

  <!-- iMac 2 -->
  <div 
    class="dashboard-shell relative flex justify-center"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20, delay: timings.slide6.desktopBaseDelay + timings.slide6.desktopStagger } }"
  >
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20" />
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
        <img src="/img/7/therapist-dashboard-2.png" alt="Dashboard terapeuta 2" class="dashboard-shot dashboard-shot--right" />
      </div>
    </div>
    <div class="device-shadow"></div>
  </div>
  
  <!-- iPad -->
  <div class="absolute inset-0 flex justify-center items-center z-50 pointer-events-none">
    <div 
      class="dashboard-tablet relative"
      v-motion
      :initial="{ y: 110, opacity: 0, scale: 0.9 }"
      :enter="{ y: 60, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20, delay: timings.slide6.tabletDelay } }"
    >
      <img src="/img/ipad.png" class="w-full relative z-20" />
      <div class="absolute top-[4.6%] left-[4%] w-[92.5%] h-[91%] z-30 overflow-hidden flex items-start justify-start rounded-[4px] device-screen bg-white">
        <img src="/img/7/therapist-dashboard-3.png" alt="Dashboard terapeuta 3" class="dashboard-shot dashboard-shot--tablet" />
      </div>
    </div>
  </div>
</div>

<style scoped>
.dashboard-showcase {
  margin-top: 1.25rem;
  gap: 1rem;
}

.dashboard-shell {
  width: 46%;
}

.dashboard-tablet {
  width: 37%;
}

.dashboard-shot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  image-rendering: auto;
  transform: none;
}

.dashboard-shot--left {
  object-position: top left;
}

.dashboard-shot--right {
  object-position: top right;
}

.dashboard-shot--tablet {
  object-fit: cover;
  object-position: top left;
}
</style>

<!--
[IT]
La dashboard è il punto di controllo quotidiano.
In un colpo d'occhio vedi pazienti, appuntamenti, attività e comunicazioni.
L'interfaccia è semplice e guidata, quindi è utilizzabile con naturalezza anche da chi ha meno dimestichezza con la tecnologia.
Capisci cosa richiede attenzione e arrivi alla seduta con più contesto e meno frizione.
[EN-GB]
The dashboard is your daily control centre.
At a glance you see patients, appointments, activities and communications.
The interface is simple and guided, so it feels natural to use even for people with less confidence with technology.
You can tell what needs attention, and you go into each session with more context and less friction.
-->

---
layout: default
name: clinical-records
class: relative p-0
---

<div class="h-full w-full relative">
  <div class="w-[65%] h-full pl-14 pt-11 pr-4 relative z-10 flex flex-col justify-between pb-10">
    <div>
      <h1 class="mb-4">La cartella clinica</h1>
      <div class="slide-text opacity-90">
        Tutto lo <strong>storico clinico</strong> in un unico spazio: <br /><strong>anamnesi</strong>, <strong>note</strong>, <strong>referti</strong> e <strong>attività</strong>.
      </div>
    </div>
    
  <div class="relative w-[70%] self-center mt-4">
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20 pointer-events-none" alt="iMac" />
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
        <img src="/img/8/clinical-record.png" alt="Cartella clinica" class="w-full h-full object-cover object-top" />
      </div>
    </div>
    <!-- Reflection/Shadow effect -->
    <div class="device-shadow device-shadow--soft"></div>
  </div>
  </div>
  <div class="absolute top-0 right-0 h-full w-auto overflow-hidden z-0">
    <video src="/img/6/anna-rita-scrive-2.mp4" autoplay loop muted playsinline class="h-full w-auto object-cover scale-[1.2]"></video>
  </div>
</div>

<!--
[IT]
La cartella clinica è il riferimento unico: anamnesi, note, referti, somministrazioni e materiali.
Le informazioni non restano disperse in file o chat separate, e diventano sempre recuperabili.
Questo migliora continuità, qualità della documentazione e sicurezza del dato.
[EN-GB]
The clinical record is the single place where everything lives: history, notes, reports, assessments and materials.
Nothing is scattered across files or separate chats, and everything stays easy to retrieve.
That improves continuity, the quality of documentation, and data security.
-->

---
layout: default
name: assignments
class: relative overflow-hidden
---
# Attività tra le sedute

Nella sezione **Compiti**, il terapeuta assegna **attività personalizzate** tra una seduta e l’altra: **diari**, **esercizi** e **questionari**.

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const activeShotIndex = ref(0)
let stopAudioListener: (() => void) | null = null
let shotTimers: ReturnType<typeof setTimeout>[] = []

const clearShotTimers = () => {
  for (const timer of shotTimers) clearTimeout(timer)
  shotTimers = []
}

const scheduleShots = () => {
  clearShotTimers()
  activeShotIndex.value = 0

  for (let step = 1; step <= 5; step += 1) {
    const delay = timings.slide8.shotBaseDelay + ((step - 1) * timings.slide8.shotStagger)
    const timer = setTimeout(() => {
      activeShotIndex.value = step
    }, delay)
    shotTimers.push(timer)
  }
}

onSlideEnter(() => {
  const enteredAt = performance.now()
  activeShotIndex.value = 0
  clearShotTimers()
  stopAudioListener = onAudioStartedFor('assignments', scheduleShots, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  clearShotTimers()
  activeShotIndex.value = 0
})
</script>

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
      <img
        v-show="activeShotIndex === 0"
        src="/img/9/01-therapist-diaries.png"
        alt="Compiti - diari"
        class="assignments-shot"
      />
      <img
        v-show="activeShotIndex === 1"
        src="/img/9/02-open-therapist-diary.png"
        alt="Compiti - dettaglio diario"
        class="assignments-shot"
      />
      <img
        v-show="activeShotIndex === 2"
        src="/img/9/03-therapist-exercises-to-assign-list.png"
        alt="Compiti - lista esercizi"
        class="assignments-shot"
      />
      <img
        v-show="activeShotIndex === 3"
        src="/img/9/04-assessments.png"
        alt="Compiti - valutazioni"
        class="assignments-shot"
      />
      <img
        v-show="activeShotIndex === 4"
        src="/img/9/05-bipolar-disorders.png"
        alt="Compiti - questionario specifico"
        class="assignments-shot"
      />
      <img
        v-show="activeShotIndex >= 5"
        src="/img/9/06-therapist-assessment-questions-and-answers.png"
        alt="Compiti - domande e risposte"
        class="assignments-shot"
      />
    </div>
  </div>
</div>

<style scoped>
.assignments-shot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
</style>

<!--
[IT]
La terapia continua anche tra le sedute.
Il terapeuta assegna diari, esercizi e questionari, e riceve risposte in modo ordinato.
Le compilazioni diventano dati longitudinali, utili per preparare la seduta e personalizzare il lavoro clinico nel tempo.
[EN-GB]
Therapy continues between sessions.
The therapist assigns diaries, exercises and questionnaires, and receives responses in an organised way.
Those completions become longitudinal data, useful to prepare the next session and tailor clinical work over time.
-->

---
layout: default
name: agenda-and-notes
class: relative overflow-hidden
---
# Agenda e note

Agenda **sincronizzabile** con calendari digitali e **note cliniche** in un unico flusso: **appuntamenti**, **eventi** e **appunti** sempre disponibili.

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const activeShotIndex = ref(0)
let stopAudioListener: (() => void) | null = null
let shotTimer: ReturnType<typeof setTimeout> | null = null

const clearShotTimer = () => {
  if (shotTimer) clearTimeout(shotTimer)
  shotTimer = null
}

const scheduleShots = () => {
  clearShotTimer()
  activeShotIndex.value = 0
  shotTimer = setTimeout(() => {
    activeShotIndex.value = 1
  }, timings.slide9.shotDelay)
}

onSlideEnter(() => {
  const enteredAt = performance.now()
  activeShotIndex.value = 0
  clearShotTimer()
  stopAudioListener = onAudioStartedFor('agenda-and-notes', scheduleShots, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  clearShotTimer()
  activeShotIndex.value = 0
})
</script>

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
      <img
        v-show="activeShotIndex === 0"
        src="/img/10/01-therapist-agenda.png"
        alt="Agenda terapeuta"
        class="agenda-shot"
      />
      <img
        v-show="activeShotIndex >= 1"
        src="/img/10/02-therapist-notes.png"
        alt="Note terapeuta"
        class="agenda-shot"
      />
    </div>
  </div>
</div>

<style scoped>
.agenda-shot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
</style>

<!--
[IT]
Agenda e note cliniche stanno nello stesso flusso.
Appuntamenti, promemoria e appunti sono sempre disponibili e aggiornati.
Meno passaggi tra strumenti, più tracciabilità e recupero rapido delle informazioni.
[EN-GB]
Your diary and clinical notes live in the same flow.
Appointments, reminders and notes are always available and up to date.
Fewer tool switches, more traceability, and faster access to the information you need.
-->

---
layout: default
name: clinical-insights
class: relative overflow-hidden
---
# Insight leggibili

Ogni diario, questionario e attività genera **analisi automatiche** e **metriche chiare** per monitorare l’andamento del **percorso terapeutico**.

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
      <img
        src="/img/11/01-assessment-metrics.png"
        alt="Insight e metriche cliniche"
        class="insights-shot"
      />
    </div>
  </div>
</div>

<style scoped>
.insights-shot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
</style>

<!--
[IT]
Gli insight trasformano dati grezzi in segnali leggibili.
Mostrano trend, progressi e segnali che meritano attenzione.
Supportano decisioni più informate e rendono la terapia più personalizzata.
[EN-GB]
Insights turn raw data into clear signals.
They show trends, progress and signals that deserve attention.
They support better-informed decisions and make therapy more personalised.
-->

---
layout: default
name: patient-intro
class: relative p-0
---

<div class="w-full h-full absolute inset-0 animated-bg ribbon-theme ribbon-theme--orange overflow-hidden">
  <div class="ribbons-container">
    <div class="ribbon ribbon-1"></div>
    <div class="ribbon ribbon-2"></div>
    <div class="ribbon ribbon-3"></div>
    <div class="ribbon ribbon-4"></div>
  </div>
  
  <div class="absolute inset-0 flex items-center justify-center z-10 text-center">
    <h1 class="section-splash-title">La piattaforma <br /> per il paziente</h1>
  </div>
</div>

<!--
[IT]
Dal lato paziente l'esperienza è semplice, guidata e senza attrito.
Riduce ansia e indecisione, e rende chiaro cosa fare e cosa aspettarsi.
Così aumenta aderenza, coinvolgimento e continuità, senza aggiungere complessità.
[EN-GB]
On the patient side, the experience is simple, guided and frictionless.
It reduces anxiety and hesitation, and makes it clear what to do and what to expect.
That improves adherence, engagement and continuity, without adding complexity.
-->

---
layout: default
name: onboarding-matching
class: relative
---

# Onboarding e abbinamento guidato

Questionario iniziale e preferenze: il percorso parte dalle informazioni **clinicamente rilevanti**.

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const activeShotIndex = ref(0)
let stopAudioListener: (() => void) | null = null
let shotTimer: ReturnType<typeof setTimeout> | null = null

const clearShotTimer = () => {
  if (shotTimer) clearTimeout(shotTimer)
  shotTimer = null
}

const scheduleShots = () => {
  clearShotTimer()
  activeShotIndex.value = 0
  shotTimer = setTimeout(() => {
    activeShotIndex.value = 1
  }, timings.slide12.shotDelay)
}

onSlideEnter(() => {
  const enteredAt = performance.now()
  activeShotIndex.value = 0
  clearShotTimer()
  stopAudioListener = onAudioStartedFor('onboarding-matching', scheduleShots, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  clearShotTimer()
  activeShotIndex.value = 0
})
</script>

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
      <img
        v-show="activeShotIndex === 0"
        src="/img/13/01-question.png"
        alt="Onboarding - questionario iniziale"
        class="matching-shot"
      />
      <img
        v-show="activeShotIndex >= 1"
        src="/img/13/02-question.png"
        alt="Onboarding - domanda successiva"
        class="matching-shot"
      />
    </div>
  </div>
</div>

<style scoped>
.matching-shot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
</style>

<!--
[IT]
L'onboarding avviene in pochi passaggi.
Raccoglie bisogni, preferenze e disponibilità e propone un abbinamento guidato con professionisti qualificati.
Questo riduce il sovraccarico di scegliere da soli e aumenta la probabilità di trovare la giusta compatibilità terapeutica.
E fin dall'inizio mette al centro fiducia, trasparenza e tutela della privacy.
[EN-GB]
Onboarding takes just a few steps.
It captures needs, preferences and availability, then provides guided matching with qualified professionals.
That reduces the burden of choosing alone and increases the chance of finding the right therapeutic match.
And from day one it prioritises trust, transparency and privacy protection.
-->

---
layout: default
name: patient-web-overview
class: relative h-full flex flex-col
---

# Applicazione web dell'utente

Compiti, sedute e reminder in un’unica vista: **attività assegnate**, **promemoria** e **azioni rapide** sempre disponibili.

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const contentTimelineStarted = ref(false)
let stopAudioListener: (() => void) | null = null

onSlideEnter(() => {
  const enteredAt = performance.now()
  contentTimelineStarted.value = false
  stopAudioListener = onAudioStartedFor('patient-web-overview', () => {
    contentTimelineStarted.value = true
  }, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  contentTimelineStarted.value = false
})
</script>

<div v-if="contentTimelineStarted" class="relative mt-8 flex justify-center items-center gap-6">
  <!-- iMac 1 -->
  <div 
    class="relative w-[45%] flex justify-center"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20, delay: timings.slide13.desktopBaseDelay } }"
  >
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20" />
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
        <img src="/img/14/patient-dashboard-home.png" alt="Dashboard paziente" class="w-full h-full object-cover object-top" />
      </div>
    </div>
    <div class="device-shadow"></div>
  </div>

  <!-- iMac 2 -->
  <div 
    class="relative w-[45%] flex justify-center"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20, delay: timings.slide13.desktopBaseDelay + timings.slide13.desktopStagger } }"
  >
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20" />
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
        <img src="/img/14/patient-calendar.png" alt="Calendario paziente" class="w-full h-full object-cover object-top" />
      </div>
    </div>
    <div class="device-shadow"></div>
  </div>
</div>

<!--
[IT]
Compiti, sedute, messaggi e strumenti sono nello stesso punto.
Il percorso resta visibile e comprensibile, e il paziente non si sente lasciato solo tra un incontro e l'altro.
Questo aumenta il coinvolgimento e la continuità del percorso.
[EN-GB]
Tasks, sessions, messages and tools are all in one place.
The journey stays visible and understandable, and the patient doesn't feel left alone between sessions.
That boosts engagement and continuity.
-->

---
layout: default
name: secure-call-system
class: relative p-0
---

<div class="h-full w-full relative">
  <div class="w-[58%] h-full pl-14 pt-9 pr-12 relative z-10 flex flex-col pb-16">
    <h1 class="mb-4">Sistema di call sicuro</h1>
    <div class="slide-text opacity-90 mb-6 max-w-[38rem]">
      <strong>Videochiamate cliniche integrate</strong>, completamente <strong>sicure</strong> e senza passare da piattaforme terze.
    </div>
    <div class="grid grid-cols-1 gap-4 max-w-[44rem]">
      <ProjectCard
        class="secure-call-card !p-5"
        title="Sicurezza"
        icon="i-heroicons-shield-check"
      >
        <strong>Connessioni protette</strong> e sessioni private, progettate per garantire la massima tutela durante la call.
      </ProjectCard>
      <ProjectCard
        class="secure-call-card !p-5"
        title="Nessun intermediario"
        icon="i-heroicons-lock-closed"
      >
        Il traffico non passa da servizi esterni di terze parti: tutto resta nel <strong>perimetro della piattaforma</strong>.
      </ProjectCard>
    </div>
  </div>
  <div class="absolute top-0 right-0 h-full w-auto overflow-hidden z-0">
    <video src="/img/15/call.mp4" autoplay loop muted playsinline class="h-full w-auto object-cover scale-[1.2]"></video>
  </div>
</div>

<style scoped>
.secure-call-card :deep(.slide-card-title) {
  min-height: 2.8rem;
  margin-bottom: 0.65rem;
}

.secure-call-card :deep(.slide-text) {
  line-height: 1.45;
}
</style>

<!--
[IT]
Le videochiamate sono integrate e progettate per il contesto clinico.
Non devi usare link esterni o piattaforme terze: la sessione resta nel perimetro di Arianne, con connessioni protette.
Questo migliora privacy e sicurezza, ma anche stabilità ed efficienza, riducendo i punti di rottura del percorso.
[EN-GB]
Video calls are built in and designed for clinical use.
You don't need external links or third-party platforms: the session stays within Arianne, with protected connections.
That strengthens privacy and security, and also improves stability and efficiency by reducing points of failure along the journey.
-->

---
layout: default
name: patient-mobile-app
class: relative h-full flex flex-col
---

# App mobile dell'utente

Compiti, diario e notifiche sempre a portata di mano: la **continuità terapeutica** prosegue anche da smartphone.

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const contentTimelineStarted = ref(false)
let stopAudioListener: (() => void) | null = null

onSlideEnter(() => {
  const enteredAt = performance.now()
  contentTimelineStarted.value = false
  stopAudioListener = onAudioStartedFor('patient-mobile-app', () => {
    contentTimelineStarted.value = true
  }, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  contentTimelineStarted.value = false
})

const mobileScreens = [
  { src: `${import.meta.env.BASE_URL}img/16/01-home.png`, alt: 'App mobile - Home' },
  { src: `${import.meta.env.BASE_URL}img/16/02-diary.png`, alt: 'App mobile - Diario 1' },
  { src: `${import.meta.env.BASE_URL}img/16/04-psycoeducation.png`, alt: 'App mobile - Psicoeducazione' },
  { src: `${import.meta.env.BASE_URL}img/16/05-exercises.png`, alt: 'App mobile - Esercizi' },
]
</script>

<div v-if="contentTimelineStarted" class="relative mt-6 flex justify-center items-end gap-2">
  <div
    v-for="(screen, idx) in mobileScreens"
    :key="screen.src"
    class="relative w-[19%] flex justify-center"
    v-motion
    :initial="{ y: 40, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 22, delay: idx * timings.slide16.stagger } }"
  >
    <div class="relative w-full z-10">
      <img src="/img/iphone.png" class="w-full relative z-20" />
      <div class="absolute top-[2%] left-[4.6%] w-[90%] h-[96.1%] z-30 rounded-[1.2rem] device-screen overflow-hidden">
        <img :src="screen.src" :alt="screen.alt" class="mobile-shot" />
      </div>
    </div>
    <div class="device-shadow device-shadow--soft"></div>
  </div>
</div>

<style scoped>
.mobile-shot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
</style>

<!--
[IT]
L'app mobile mantiene il percorso vivo ogni giorno.
Oltre ai diari, offre contenuti di psicoeducazione ed esercizi guidati: conoscenze e competenze pratiche per lavorare in modo attivo con il terapeuta, tra una seduta e l'altra.
La ricerca sulle app di salute mentale mostra che psicoeducazione e meccaniche di ingaggio, come progressi visibili e feedback, aumentano l'aderenza, soprattutto nei più giovani.
Così la continuità terapeutica diventa davvero portatile, senza aumentare lo sforzo.
[EN-GB]
The mobile app keeps the journey alive every day.
Beyond diaries, it offers psychoeducation content and guided exercises: practical knowledge and skills to work actively with your therapist between sessions.
Research on mental health apps shows that psychoeducation and engagement mechanisms, such as visible progress and feedback, increase adherence, especially for younger users.
So therapeutic continuity becomes genuinely portable, without adding extra effort.
-->

---
layout: default
name: integrated-assessments
---

# Implementazioni

<div class="slide-text opacity-90 mb-8">
  <strong>29 questionari integrati</strong>, diario cognitivo, comportamentale, del sonno, del mattino e molto altro.
</div>

<div class="implementations-grid grid grid-cols-2 lg:grid-cols-3 gap-4 text-left mt-4">

  <ProjectCard title="Screening e Valutazione" icon="i-heroicons-clipboard-document-list" class="implementations-card !p-4">
    CBA-VE • PQ-16 • ERIraos-CL • GAF/SOFAS • GAD-7 • PSWQ-16
  </ProjectCard>

  <ProjectCard title="Ansia e Stress" icon="i-heroicons-heart" class="implementations-card !p-4">
    IUS-R • DASS-21 • PDSS • ASI-3 • PTSQ • GSS
  </ProjectCard>

  <ProjectCard title="Umore e Personalità" icon="i-heroicons-face-smile" class="implementations-card !p-4">
    ASRM • BHA • HADS • PHQ-9 • PID-5 • PID-5-SF • PID-5-BF
  </ProjectCard>

  <ProjectCard title="Disturbi Alimentari" icon="i-heroicons-scale" class="implementations-card !p-4">
    MEC-10 • EAT-26 • AEBS • TFEQ-18 • EDE-Q
  </ProjectCard>

  <ProjectCard title="Outcome e Follow-up" icon="i-heroicons-check-circle" class="implementations-card !p-4">
    HAQ • SPS • MOGS • CORE-OM • HONOSCA
  </ProjectCard>

  <ProjectCard title="Diari implementati" icon="i-heroicons-book-open" class="implementations-card !p-4">
    Alimentare • Cognitivo-comportamentale • Sonno-Mattina • Sonno-Sera
  </ProjectCard>

</div>

<style scoped>
.implementations-card {
  min-height: 10.5rem;
}

.implementations-card :deep(.slide-card-title) {
  min-height: 2.6rem;
  margin-bottom: 0.75rem;
}
</style>

<!--
[IT]
Qui si vede la profondità clinica: 29 questionari integrati e diari strutturati, già pronti all'uso.
Il flusso è semplice: il clinico assegna, il paziente compila, la piattaforma calcola e organizza i risultati.
Così la misurazione diventa parte naturale del percorso: non solo monitori, ma misuri anche l'efficacia, confrontando i risultati nel tempo.
[EN-GB]
Here you see the clinical depth: 29 integrated questionnaires and structured diaries, ready to use.
The flow is simple: the clinician assigns, the patient completes, the platform scores and organises the results.
So measurement becomes part of the journey: you don't just monitor, you also measure effectiveness by comparing results over time.
-->

---
layout: default
name: competitor-analysis
class: relative
---

<div class="relative h-full min-h-0 flex flex-col items-center justify-start px-4 pt-0.5 pb-0 gap-0.5">
  <div class="flex-1 min-h-0 w-full max-w-[95%] bg-white dark:bg-slate-900 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/40 overflow-hidden">
    <div class="comparison-scale">
      <table class="w-full h-full table-fixed comparison-matrix border-collapse">
      <colgroup>
        <col class="w-[18%]">
        <col class="w-[22.5%]">
        <col class="w-[8.5%]" v-for="i in 7" :key="i">
      </colgroup>
      <thead class="bg-slate-100 dark:bg-slate-800">
        <tr>
          <th class="px-2 py-1 text-left text-[0.58rem] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Ambito
          </th>
          <th class="px-2 py-1 text-left text-[0.58rem] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Feature
          </th>
          <th class="px-1 py-1 text-center border-b border-orange-500/10">
            <img src="/img/2/arianne-logo-orange.svg" class="h-3.5 mx-auto object-contain" alt="Arianne" />
          </th>
          <th class="px-1 py-1 text-center"><span class="header-text">Serenis</span></th>
          <th class="px-1 py-1 text-center"><span class="header-text">UnoBravo</span></th>
          <th class="px-1 py-1 text-center"><span class="header-text">MyMentis</span></th>
          <th class="px-1 py-1 text-center"><span class="header-text">Terapeuta.it</span></th>
          <th class="px-1 py-1 text-center"><span class="header-text">Sant'Agostino</span></th>
          <th class="px-1 py-1 text-center"><span class="header-text">MioDottore</span></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200/60 dark:divide-slate-700/60 text-[0.55rem]">
      <tr>
        <td rowspan="7" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-magnifying-glass-circle"></span>
            <span>Accesso & matching</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Questionario iniziale</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Matching guidato</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Scelta manuale terapeuta</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Filtri ricerca terapeuta</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Profilo strutturato</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Recensioni / reputazione</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Cambio terapeuta</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td rowspan="4" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-chat-bubble-left-right"></span>
            <span>Seduta & comunicazione</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Videoseduta integrata</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Chat asincrona</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Allegati / materiali</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Reminder appuntamenti</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td rowspan="5" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-chart-bar-square"></span>
            <span>Strumenti clinici</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Test / questionari</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Mood tracker</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Diario / journaling</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Compiti strutturati</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Psicoeducazione</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td rowspan="4" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-briefcase"></span>
            <span>Amministrazione</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Pagamenti</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Ricevute automatiche</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Booking / slot reali</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Disdetta / spostamento</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td rowspan="4" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-shield-check"></span>
            <span>Sicurezza & accessibilità</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Privacy / GDPR</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Verifica professionisti</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">App mobile nativa</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100 font-medium">Emergenze / limiti</td>
        <td class="px-1 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-1 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      </tbody>
      </table>
    </div>
  </div>

  <div class="slide-text opacity-75 flex items-center justify-center gap-2.5 text-[0.44rem] leading-none shrink-0">
    <div class="flex items-center gap-1">
      <span class="status i-heroicons-check-circle !text-[0.62rem]"></span>
      <span>Presente</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="status status--partial i-heroicons-minus-circle !text-[0.62rem]"></span>
      <span>Parziale</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="status status--no i-heroicons-x-circle !text-[0.62rem]"></span>
      <span>Assente</span>
    </div>
  </div>
</div>

<style scoped>
.comparison-scale {
  width: 100%;
  height: 100%;
}

.comparison-matrix {
  width: 100%;
  height: 100%;
}

.comparison-matrix th,
.comparison-matrix td {
  padding-top: 0.05rem;
  padding-bottom: 0.05rem;
  vertical-align: middle;
  line-height: 1.02;
}

.comparison-matrix thead th {
  height: 1.6rem;
  vertical-align: middle;
}

.comparison-matrix tbody td {
  /* Keep rows readable without forcing a fixed height that can clip lines. */
  padding-top: clamp(0.02rem, 0.06vh, 0.05rem) !important;
  padding-bottom: clamp(0.02rem, 0.06vh, 0.05rem) !important;
}

.comparison-matrix tbody td:not(.cat-cell):not(.text-center) {
  white-space: nowrap;
}

.header-pill {
  @apply inline-flex items-center justify-center rounded-md px-1.5 py-0.5 bg-white/95 border border-slate-200/70 shadow-sm;
}

.header-text {
  @apply inline-flex w-full min-h-[1rem] items-center justify-center rounded-md px-1 py-0 text-center text-[0.49rem] font-semibold uppercase tracking-wide leading-tight text-slate-600 dark:text-slate-200;
  white-space: nowrap;
}

.cat-cell {
  @apply px-2 py-1 align-top;
  overflow: hidden;
}

.cat-badge {
  @apply grid grid-cols-[auto,1fr] items-start gap-1.5 text-[0.52rem] font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200;
  width: 100%;
  white-space: nowrap;
  line-height: 1.05;
}

.cat-badge > span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
}

.cat-icon {
  @apply text-sm text-orange-500;
}

.status {
  @apply inline-flex items-center justify-center text-sm leading-none text-emerald-600 dark:text-emerald-500;
}

.comparison-matrix tbody td.text-center {
  text-align: center;
  vertical-align: middle;
  padding-left: 0;
  padding-right: 0;
}

.comparison-matrix tbody td.text-center .status {
  margin: 0 auto;
  width: 0.85rem;
  height: 0.85rem;
}

.status--partial {
  @apply text-amber-500 dark:text-amber-400;
}

.status--no {
  @apply text-slate-400 dark:text-slate-500;
}
</style>

<!--
[IT]
Nel mercato esistono soluzioni che facilitano l'accesso, ma riducono la terapia a prenotazione e videochiamata.
Altre usano strumenti generici o pezzi separati: funzionano per parlare, ma lasciano fuori dati clinici, documentazione, pagamenti e lavoro tra le sedute.
Il risultato è frammentazione, più attrito e meno continuità percepita.
Arianne unisce accesso, relazione e strumenti clinici in un ecosistema unico, con più misurazione e un percorso più solido per paziente e terapeuta.
[EN-GB]
In the market there are solutions that make access easier, but reduce therapy to booking and video calls.
Others rely on generic tools or disconnected pieces: they let you talk, but they leave out clinical data, documentation, payments and the work between sessions.
The result is fragmentation, more friction, and less perceived continuity.
Arianne combines access, the therapeutic relationship and clinical tools in a single ecosystem, with stronger measurement and a more solid journey for both patient and therapist.
-->

---
layout: default
name: pricing-model
class: relative
---

# Come funziona Arianne

<div class="slide-text opacity-80">
  A differenza delle altre piattaforme, il costo resta <strong>trasparente</strong> e <strong>prevedibile</strong>.
</div>

<div class="grid grid-cols-2 gap-6 mt-10 text-left flex-1 content-center">
  <ProjectCard title="Prova gratuita" icon="i-heroicons-sparkles">
    <div class="mb-4 text-sm opacity-70"><strong>14 giorni</strong> per testare tutto</div>
    <ul class="feature-list">
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span><strong>Accesso completo</strong></span>
      </li>
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span><strong>Nessun pagamento</strong></span>
      </li>
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span><strong>Disdetta senza costi</strong></span>
      </li>
    </ul>
  </ProjectCard>

  <ProjectCard title="Piano mensile" icon="i-heroicons-calendar-days">
    <div class="mb-4 text-sm opacity-70"><strong>Canone fisso</strong> in base al numero di pazienti</div>
    <ul class="feature-list">
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span><strong>Tariffa per numero di pazienti</strong></span>
      </li>
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span><strong>Disdici quando vuoi</strong></span>
      </li>
    </ul>
      </ProjectCard>
</div>

<!--
[IT]
Il modello è semplice e trasparente.
Ci sono 14 giorni di prova gratuita per testare tutto, senza rischio.
Poi un canone mensile prevedibile, calibrato sul numero di pazienti, con disdetta quando vuoi.
[EN-GB]
The model is simple and transparent.
You get 14 days of free trial to test everything, with no risk.
Then a predictable monthly fee, scaled to the number of patients, with the freedom to cancel at any time.
-->

---
layout: default
name: unimib-spinoff
class: bg-[#4F46E5] slide-theme-invert
---

<!-- Use slide-theme-invert for dark backgrounds so text stays consistent. -->
<div class="w-full h-full flex flex-col items-center justify-center p-12">
  <div class="slide-text mb-12 text-center max-w-2xl">
    Arianne è un prodotto di <span class="highlight"><strong>Whattadata</strong></span>, <strong>spin-off</strong> dell’<span class="highlight"><strong>Università degli Studi di Milano Bicocca</strong></span>.
  </div>
  <img src="/img/20/whattadata-logo.svg" class="h-48" alt="Logo Whattadata" />
</div>

<style scoped>
.highlight {
  position: relative;
  display: inline-block;
  padding: 0 4px;
  /* Create a stacking context so z-index -1 stays within the span */
  z-index: 1;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.highlight::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 45%;
  background-color: #A3E635;
  /* Stay behind the text but inside the .highlight stacking context */
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  animation: highlight-draw 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards 0.5s;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(163, 230, 53, 0.3);
}

@keyframes highlight-draw {
  to {
    transform: scaleX(1);
  }
}
</style>

<!--
[IT]
Arianne è un prodotto di Whattadata, spin-off universitario.
Questo significa rigore scientifico, validazione e miglioramento continuo.
Portiamo strumenti clinici validati nella pratica quotidiana, senza complicare la relazione terapeutica.
[EN-GB]
Arianne is a Whattadata product, a university spin-out.
That means scientific rigour, validation and continuous improvement.
We bring clinically validated tools into everyday practice, without complicating the therapeutic relationship.
-->

---
layout: default
name: academic-logos
class: relative p-0
---

<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { onAudioStartedFor } from './setup/audio-sync'
import { timings } from './setup/timings'

const activeRevealStep = ref(0)
let stopAudioListener: (() => void) | null = null
let revealTimers: ReturnType<typeof setTimeout>[] = []

const clearRevealTimers = () => {
  for (const timer of revealTimers) clearTimeout(timer)
  revealTimers = []
}

const scheduleReveal = () => {
  clearRevealTimers()
  activeRevealStep.value = 0

  for (let step = 1; step <= 2; step += 1) {
    const delay = timings.slide20.revealBaseDelay + ((step - 1) * timings.slide20.revealStagger)
    const timer = setTimeout(() => {
      activeRevealStep.value = step
    }, delay)
    revealTimers.push(timer)
  }
}

onSlideEnter(() => {
  const enteredAt = performance.now()
  activeRevealStep.value = 0
  clearRevealTimers()
  stopAudioListener = onAudioStartedFor('academic-logos', scheduleReveal, enteredAt)
})

onSlideLeave(() => {
  if (stopAudioListener) stopAudioListener()
  stopAudioListener = null
  clearRevealTimers()
  activeRevealStep.value = 0
})
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="logos-row">
    <div class="logo-slot" :class="{ 'logo-slot--visible': activeRevealStep >= 1 }">
      <img
        src="/img/21/padua/University%20of%20Padova%20UNIPD.svg"
        alt="Università di Padova"
        class="institution-logo"
      />
    </div>
    <div class="logo-slot" :class="{ 'logo-slot--visible': activeRevealStep >= 2 }">
      <img
        src="/img/21/psicology/Psicologia-POS.svg"
        alt="Università di Milano-Bicocca - Psicologia"
        class="institution-logo logo-light"
      />
      <img
        src="/img/21/psicology/Psicologia-POS-dark.svg"
        alt="Università di Milano-Bicocca - Psicologia"
        class="institution-logo logo-dark"
      />
    </div>
    <div class="logo-slot" :class="{ 'logo-slot--visible': activeRevealStep >= 2 }">
      <img
        src="/img/21/informatic/Informatica-Sistemistica-e-Comunicazione-POS.svg"
        alt="Università di Milano-Bicocca - Informatica, Sistemistica e Comunicazione"
        class="institution-logo logo-light"
      />
      <img
        src="/img/21/informatic/Informatica-Sistemistica-e-Comunicazione-POS-dark.svg"
        alt="Università di Milano-Bicocca - Informatica, Sistemistica e Comunicazione"
        class="institution-logo logo-dark"
      />
    </div>
  </div>
</div>

<style scoped>
.logos-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 4vw, 3.2rem);
  width: min(1200px, 100%);
  padding: 0 clamp(1rem, 4vw, 2.5rem);
}

.logo-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(6.5rem, 11vh, 8.5rem);
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 600ms ease, transform 600ms ease;
}

.logo-slot--visible {
  opacity: 1;
  transform: translateY(0);
}

.institution-logo {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: clamp(6.2rem, 10vh, 7.8rem);
  object-fit: contain;
  object-position: center;
}

.logo-dark {
  display: none;
}

:global(.dark .logo-light) {
  display: none;
}

:global(.dark .logo-dark) {
  display: block;
}

</style>

<!--
[IT]
Il progetto è sviluppato con una rete accademica solida.
Collaboriamo con l'Università di Padova e con l'Università di Milano-Bicocca, tra psicologia e informatica.
Questo ci permette di far evolvere il prodotto con metodo: clinica, dati e tecnologia nello stesso percorso.
[EN-GB]
The project is developed with a strong academic network.
We collaborate with the University of Padua and the University of Milano-Bicocca, across psychology and computer science.
That lets the product evolve with method: clinical practice, data and technology in one coherent journey.
-->

---
layout: default
name: academic-research-solutions
class: relative
---

# Collaborazione accademica e ricerca applicata

<div class="slide-text max-w-5xl opacity-95 mb-8">
  Insieme all'accademia stiamo costruendo <strong>soluzioni di ricerca</strong> che miglioreranno ulteriormente Arianne:
  sistemi di <strong>supporto alle decisioni</strong> e sistemi di <strong>IA</strong> progettati per affiancare il professionista.
</div>

<div class="grid grid-cols-3 gap-4 mt-2">
  <ProjectCard title="Supporto decisionale" icon="i-heroicons-light-bulb">
    Analisi strutturata di dati clinici, questionari e diario per evidenziare pattern, priorità e ipotesi da approfondire.
  </ProjectCard>

  <ProjectCard title="Sistemi IA clinici" icon="i-heroicons-cpu-chip">
    Approcci RAG su conoscenza validata (ICD-11), per supportare il ragionamento diagnostico e differenziale in modo contestualizzato.
  </ProjectCard>

  <ProjectCard title="Evoluzione responsabile" icon="i-heroicons-shield-check">
    Supervisione umana, validazione con professionisti e criteri etici per integrare l'IA in modo sicuro nella pratica clinica.
  </ProjectCard>
</div>

<div class="slide-text mt-7 opacity-80">
  Obiettivo: trasformare la ricerca in funzionalità concrete che aumentano qualità, continuità ed efficacia del percorso terapeutico.
</div>

<!--
[IT]
La collaborazione con l'accademia non è solo istituzionale: è un motore di ricerca e sviluppo.
Anche sulla base di articoli scientifici recenti, stiamo costruendo sistemi IA di supporto alle decisioni cliniche, fondati su conoscenza validata come ICD-11 e con supervisione umana.
L'obiettivo è portare nella piattaforma strumenti che aiutino il professionista a leggere meglio i dati, gestire casi complessi e migliorare continuità e qualità del percorso.
In sintesi: ricerca applicata che diventa impatto clinico concreto.
[EN-GB]
Our academic collaboration is not only institutional: it is a research and development engine.
Also building on recent scientific literature, we are developing AI decision-support systems grounded in validated knowledge such as ICD-11 and designed for human oversight.
The goal is to bring tools into the platform that help professionals interpret data better, handle complex cases, and improve continuity and quality of care.
In short: applied research becoming concrete clinical impact.
-->

---
name: arianne-outro
layout: default
class: relative p-0
---

<div
  class="w-full h-full flex items-center justify-center"
  style="background:#ff8c42; background:oklch(64.6% 0.222 41.116);"
>
  <img src="/img/arianne-logo.svg" class="outro-logo" alt="Arianne" />
</div>

<!--
[IT]
Arianne.
Tecnologia al servizio del benessere.
[EN-GB]
Arianne.
Technology in the service of wellbeing.
-->
