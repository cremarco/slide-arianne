---
title: Arianne - L'ecosistema digitale per la salute mentale
titleTemplate: '%s'
---

---
name: cover
layout: default
class: relative p-0
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
    <!-- Body copy uses slide-text for consistent sizing and rhythm. -->
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
  animation: cover-lines-breathe 16s ease-in-out infinite;
  transform-origin: center;
  --cluster-shift: -10px;
  --cluster-tilt: 0.35deg;
}

.cover-lines--a {
  animation-delay: 0s;
}

.cover-lines--b {
  animation-delay: 0s;
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
    cover-line-float var(--float-duration, 14s) ease-in-out infinite,
    cover-line-pulse var(--pulse-duration, 8s) ease-in-out infinite;
  animation-delay: var(--float-delay, 0s), var(--pulse-delay, 0s);
}

.line-1 {
  --line-color: oklch(89% 0.12 72);
  --line-width: 17;
  --line-opacity: 0.72;
  --line-opacity-peak: 0.88;
  --float-duration: 11s;
  --float-shift: -24px;
  --float-tilt: 1.6deg;
  --pulse-duration: 7s;
}

.line-2 {
  --line-color: oklch(51% 0.17 38);
  --line-width: 6;
  --line-opacity: 0.52;
  --line-opacity-peak: 0.67;
  --float-duration: 19s;
  --float-shift: 12px;
  --float-tilt: -1deg;
  --float-delay: -5s;
  --pulse-duration: 9s;
  --pulse-delay: -2s;
}

.line-3 {
  --line-color: oklch(77% 0.18 58);
  --line-width: 11;
  --line-opacity: 0.5;
  --line-opacity-peak: 0.66;
  --float-duration: 14s;
  --float-shift: -18px;
  --float-tilt: 0.9deg;
  --float-delay: -2.5s;
  --pulse-duration: 8s;
  --pulse-delay: -3s;
}

.line-4 {
  --line-color: oklch(45% 0.16 34);
  --line-width: 20;
  --line-opacity: 0.33;
  --line-opacity-peak: 0.47;
  --float-duration: 23s;
  --float-shift: 20px;
  --float-tilt: -1.4deg;
  --float-delay: -7s;
  --pulse-duration: 12s;
  --pulse-delay: -6s;
}

.line-5 {
  --line-color: oklch(94% 0.07 80);
  --line-width: 5;
  --line-opacity: 0.42;
  --line-opacity-peak: 0.58;
  --float-duration: 17s;
  --float-shift: -10px;
  --float-tilt: 1.2deg;
  --float-delay: -3.5s;
  --pulse-duration: 6.5s;
  --pulse-delay: -1.5s;
}

.line-6 {
  --line-color: oklch(60% 0.19 46);
  --line-width: 8;
  --line-opacity: 0.3;
  --line-opacity-peak: 0.45;
  --float-duration: 27s;
  --float-shift: 8px;
  --float-tilt: -0.85deg;
  --float-delay: -8s;
  --pulse-duration: 11s;
  --pulse-delay: -4s;
}

.line-7 {
  --line-color: oklch(70% 0.23 41);
  --line-width: 13;
  --line-opacity: 0.4;
  --line-opacity-peak: 0.56;
  --float-duration: 15s;
  --float-shift: -16px;
  --float-tilt: 1.3deg;
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
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(var(--cluster-shift, -12px)) rotate(var(--cluster-tilt, 0deg));
  }
}

@keyframes cover-line-float {
  0%,
  100% {
    transform: translateY(0) scaleX(1) rotate(0deg);
  }

  50% {
    transform:
      translateY(var(--float-shift, -12px))
      scaleX(var(--float-scale, 1.03))
      rotate(var(--float-tilt, 0deg));
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
Apertura: Arianne nasce dall’incontro tra **ricerca clinica** e **innovazione tecnologica**.
Messaggio iniziale: rendere la **psicoterapia** più **accessibile**, **continua** e **misurabile** per **pazienti** e **professionisti**.
-->

---
name: product-vision
layout: default
class: relative overflow-hidden p-0
---

<div class="flex h-full">
  <!-- Text Column (3/5) -->
  <div class="w-3/5 relative px-14 pt-32 pb-10 flex flex-col justify-center h-full">
    <img src="/img/2/arianne-logo-orange.svg" class="absolute top-[40px] left-[54px] h-10 logo-animation" alt="Logo Arianne" />
    <div class="slide-text mb-6">
      Arianne è un <strong>ecosistema</strong> per la <strong>salute mentale</strong>
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
  animation: logo-entry 0.8s ease-out forwards;
}

.computer-image {
  opacity: 0;
  animation: slide-in-right 1s ease-out forwards 0.3s;
}

.scrolling-image {
  animation: scroll-vertical 40s ease-in-out infinite alternate;
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
Arianne mette in relazione **pazienti** e **terapeuti** lungo l’intero percorso, dalla **presa in carico** alla **continuità** tra le sedute.
Messaggio chiave: due ambienti dedicati, un unico flusso con strumenti per **comunicare**, **assegnare attività** e **monitorare i progressi**.
-->

---
layout: default
name: project-overview
class: relative h-full flex flex-col
---

# Il progetto

**Due ambienti**, un **percorso condiviso**.

<div v-click class="hidden"></div>

<div class="grid grid-cols-3 gap-6 mt-12 text-left flex-1 content-center">
  <ProjectCard
    v-for="card in projectCards"
    :key="card.title"
    :title="card.title"
    :icon="card.icon"
    v-click
    :v-motion="cardMotion"
  >
    <span v-html="card.description"></span>
  </ProjectCard>
</div>

<script setup lang="ts">
const cardMotion = {
  initial: {
    y: 50,
    opacity: 0,
    scale: 0.9,
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 20,
    },
  },
}

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
    class="relative w-1/2 h-full transition-transform duration-1000 ease-in-out"
    :class="$slidev.nav.clicks > 0 ? '-translate-x-full' : 'translate-x-0'"
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
    class="relative w-1/2 h-full transition-transform duration-1000 ease-in-out"
    :class="$slidev.nav.clicks > 0 ? 'translate-x-full' : 'translate-x-0'"
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
Questa slide introduce la struttura del prodotto: due ambienti distinti, un solo **percorso terapeutico** condiviso.
Evidenzia i tre pilastri: **collaborazione**, **supporto continuo** e **prevenzione precoce**.
-->

---
layout: default
name: target-users
class: relative h-full flex flex-col
---

# A chi si rivolge

Pensata per **professionisti della salute mentale** e **pazienti**, in **presenza** o **online**.

<div v-click class="hidden"></div>


<div class="grid grid-cols-2 gap-6 mt-12 text-left flex-1 content-center">
  <ProjectCard
    v-for="card in projectCards"
    :key="card.title"
    :title="card.title"
    :icon="card.icon"
    v-click
    :v-motion="cardMotion"
  >
    <span v-html="card.description"></span>
  </ProjectCard>
</div>

<script setup lang="ts">
const cardMotion = {
  initial: {
    y: 50,
    opacity: 0,
    scale: 0.9,
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 20,
    },
  },
}

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
Segmentazione chiara: **professionisti** e **pazienti**, con bisogni diversi ma un’esperienza coerente.
Per i professionisti, il valore è più **efficienza clinica**; per i pazienti è un accesso **guidato**, **sicuro** e **flessibile**.
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
Da qui inizia il blocco dedicato al **professionista**: dashboard, cartella clinica, compiti e lettura dati.
Obiettivo narrativo: mostrare come la piattaforma riduca il **carico amministrativo** e migliori la **qualità clinica**.
-->

---
layout: default
name: dashboard-overview
class: relative
---

# Dashboard

Una **panoramica immediata** su pazienti, attività e comunicazioni: **meno amministrazione**, **più tempo per la cura**.

<div class="dashboard-showcase relative mt-8 flex justify-center items-center gap-6">
  <!-- iMac 1 -->
  <div 
    class="dashboard-shell relative flex justify-center"
    v-click="1"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
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
    v-click="2"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
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
      v-click="3"
      v-motion
      :initial="{ y: 110, opacity: 0, scale: 0.9 }"
      :enter="{ y: 60, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
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
  width: 33%;
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
  object-fit: contain;
  object-position: top center;
}
</style>

<!--
La dashboard è il punto di controllo operativo: **pazienti**, **attività** e **comunicazioni** in un’unica vista.
In pochi secondi il professionista individua le priorità e dedica più tempo alla **cura**.
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
La cartella clinica diventa il riferimento unico per **anamnesi**, **note**, **referti** e **attività assegnate**.
Sottolinea il vantaggio: uno **storico strutturato** sempre disponibile prima, durante e dopo la seduta.
-->

---
layout: default
name: assignments
class: relative overflow-hidden
---
# Attività tra le sedute

Nella sezione **Compiti**, il terapeuta assegna **attività personalizzate** tra una seduta e l’altra: **diari**, **esercizi** e **questionari**.

<div v-click="1" class="hidden"></div>
<div v-click="2" class="hidden"></div>
<div v-click="3" class="hidden"></div>
<div v-click="4" class="hidden"></div>
<div v-click="5" class="hidden"></div>

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
      <img
        v-show="$slidev.nav.clicks === 0"
        src="/img/9/01-therapist-diaries.png"
        alt="Compiti - diari"
        class="assignments-shot"
      />
      <img
        v-show="$slidev.nav.clicks === 1"
        src="/img/9/02-open-therapist-diary.png"
        alt="Compiti - dettaglio diario"
        class="assignments-shot"
      />
      <img
        v-show="$slidev.nav.clicks === 2"
        src="/img/9/03-therapist-exercises-to-assign-list.png"
        alt="Compiti - lista esercizi"
        class="assignments-shot"
      />
      <img
        v-show="$slidev.nav.clicks === 3"
        src="/img/9/04-assessments.png"
        alt="Compiti - valutazioni"
        class="assignments-shot"
      />
      <img
        v-show="$slidev.nav.clicks === 4"
        src="/img/9/05-bipolar-disorders.png"
        alt="Compiti - questionario specifico"
        class="assignments-shot"
      />
      <img
        v-show="$slidev.nav.clicks >= 5"
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
Qui si gioca la **continuità** tra le sedute: il terapeuta assegna compiti e riceve risposte in modo strutturato.
Diari e questionari producono **analisi longitudinali** utili per leggere l’andamento clinico e preparare la seduta successiva.
Valore da evidenziare: libreria già ampia, con **estensione progressiva** in roadmap.
-->

---
layout: default
name: agenda-and-notes
class: relative overflow-hidden
---
# Agenda e note

Agenda **sincronizzabile** con calendari digitali e **note cliniche** in un unico flusso: **appuntamenti**, **eventi** e **appunti** sempre disponibili.

<div v-click="1" class="hidden"></div>

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
      <img
        v-show="$slidev.nav.clicks === 0"
        src="/img/10/01-therapist-agenda.png"
        alt="Agenda terapeuta"
        class="agenda-shot"
      />
      <img
        v-show="$slidev.nav.clicks >= 1"
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
Questa vista riduce la frammentazione operativa: agenda e note nello stesso ambiente.
Parole chiave in presentazione: **sincronizzazione**, **tracciabilità** e **recupero rapido** delle informazioni cliniche.
-->

---
layout: default
name: insights
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
Gli insight trasformano dati grezzi in segnali leggibili: **trend**, **progressi** e possibili **segnali di attenzione**.
Chiusura del messaggio: decisioni più **informate** e terapia più **personalizzata**.
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
Da qui passiamo alla vista **paziente**, pensata per essere semplice e guidata.
Obiettivo: aumentare **aderenza**, **ingaggio** e **continuità** senza aggiungere complessità.
-->

---
layout: default
name: matching
class: relative
---

# Onboarding e abbinamento guidato

Questionario iniziale e preferenze: il percorso parte dalle informazioni **clinicamente rilevanti**.

<div v-click="1" class="hidden"></div>

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
      <img
        v-show="$slidev.nav.clicks === 0"
        src="/img/13/01-question.png"
        alt="Onboarding - questionario iniziale"
        class="matching-shot"
      />
      <img
        v-show="$slidev.nav.clicks >= 1"
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
L’onboarding avviene in pochi passaggi con raccolta di **bisogni**, **preferenze** e **disponibilità**.
Al termine, il matching propone terapeuti compatibili e riduce il tempo di attivazione del percorso.
-->

---
layout: default
name: patient-web-overview
class: relative h-full flex flex-col
---

# Applicazione web dell'utente

Compiti, sedute e reminder in un’unica vista: **attività assegnate**, **promemoria** e **azioni rapide** sempre disponibili.

<div class="relative mt-8 flex justify-center items-center gap-6">
  <!-- iMac 1 -->
  <div 
    class="relative w-[45%] flex justify-center"
    v-click="1"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
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
    v-click="2"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
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
Questa homepage funziona come cockpit operativo del paziente.
Compiti, sedute e messaggi nello stesso punto migliorano **engagement** e continuità del percorso.
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
Le call sono progettate per il contesto clinico, non come semplice add-on.
Valore chiave: **sicurezza**, **privacy** e controllo end-to-end dell’esperienza.
-->

---
layout: default
name: user-mobile-app
class: relative h-full flex flex-col
---

# App mobile dell'utente

Compiti, diario e notifiche sempre a portata di mano: la **continuità terapeutica** prosegue anche da smartphone.

<div class="relative mt-6 flex justify-center items-end gap-3">
  <div
    v-for="(screen, idx) in [
      { src: '/img/16/01-home.png', alt: 'App mobile - Home' },
      { src: '/img/16/02-diary.png', alt: 'App mobile - Diario 1' },
      { src: '/img/16/04-psycoeducation.png', alt: 'App mobile - Psicoeducazione' },
      { src: '/img/16/05-exercises.png', alt: 'App mobile - Esercizi' },
    ]"
    :key="screen.src"
    class="relative w-[17%] flex justify-center"
    v-motion
    :initial="{ y: 40, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 22, delay: idx * 80 } }"
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
La componente mobile mantiene il paziente attivo tra una seduta e l’altra.
Reminder e micro-interazioni aumentano **aderenza** e **completamento delle attività**.
-->

---
layout: default
name: implementations
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
Questa slide quantifica la profondità clinica del prodotto: test validati e diari strutturati già pronti.
Sottolinea il flusso unico: **assegnazione**, **compilazione** e **scoring automatico**.
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
Usa la matrice come sintesi visiva, senza leggerla riga per riga.
Conclusione da portare: Arianne combina meglio **strumenti clinici** e **continuità di percorso** rispetto ai modelli solo marketplace.
-->

---
layout: default
name: business-model
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
Messaggio economico semplice: pricing **trasparente** e senza sorprese.
La prova gratuita riduce il rischio iniziale, mentre il piano mensile mantiene la gestione **flessibile**.
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
Arianne è un prodotto Whattadata, spin-off universitario: questo rafforza la credibilità del progetto.
Evidenzia tre parole chiave: **approccio scientifico**, **validazione** e **miglioramento continuo**.
-->

---
name: outro
layout: default
class: relative p-0
---

<div class="w-full h-full absolute inset-0 animated-bg ribbon-theme ribbon-theme--cover outro-bg overflow-hidden">
  <div class="outro-aurora" aria-hidden="true"></div>
  <div class="outro-grid" aria-hidden="true"></div>
  <div class="outro-sparkle" aria-hidden="true"></div>
  <div class="outro-swirl" aria-hidden="true"></div>

  <div class="outro-stage">
    <div class="outro-logo-wrap">
      <div class="outro-halo" aria-hidden="true"></div>
      <img src="/img/arianne-logo.svg" class="outro-logo" alt="Arianne" />
    </div>
  </div>
</div>

<!--
Slide di chiusura per Q&A: lasciare in pausa durante domande e ringraziamenti.
-->
