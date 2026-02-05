---
name: intro
layout: default
class: relative p-0
---

<div class="w-full h-full absolute inset-0 animated-bg overflow-hidden">
  <div class="ribbons-container">
    <div class="ribbon ribbon-1"></div>
    <div class="ribbon ribbon-2"></div>
    <div class="ribbon ribbon-3"></div>
    <div class="ribbon ribbon-4"></div>
  </div>
  <div class="absolute top-6 right-6 z-20">
    <img src="/img/1/whattadata-unimib-logo.png" class="h-16" alt="Whattadata Unimib" />
  </div>
  <div class="absolute top-[40px] left-[54px] z-10 text-left">
    <img src="/img/1/arianne-logo.png" class="h-32 mb-8" alt="Arianne" />
    <!-- Body copy uses slide-text for consistent sizing and rhythm. -->
    <div class="slide-text text-white" mdc>
      L'ecosistema digitale per la salute mentale
    </div>
  </div>
</div>

<style scoped>
.animated-bg {
  background: linear-gradient(-45deg, #f97316, #fb923c, #ea580c, #c2410c);
  background-size: 400% 400%;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Ribbons Container */
.ribbons-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45%;
  z-index: 1;
  overflow: hidden;
}

/* Base ribbon style */
.ribbon {
  position: absolute;
  left: -10%;
  width: 120%;
  height: 60px;
  border-radius: 30px 30px 0 0;
}

/* Ribbon 1 - orange-600 */
.ribbon-1 {
  background: #ea580c;
  bottom: 120px;
  height: 50px;
  animation: ribbon-wave 15s ease-in-out infinite;
}

/* Ribbon 2 - orange-700 */
.ribbon-2 {
  background: #c2410c;
  bottom: 80px;
  height: 55px;
  animation: ribbon-wave 18s ease-in-out infinite -3s;
}

/* Ribbon 3 - orange-800 */
.ribbon-3 {
  background: #9a3412;
  bottom: 40px;
  height: 60px;
  animation: ribbon-wave 16s ease-in-out infinite -5s;
}

/* Ribbon 4 - orange-900 */
.ribbon-4 {
  background: #7c2d12;
  bottom: 0;
  height: 65px;
  animation: ribbon-wave 13s ease-in-out infinite -2s;
}

@keyframes ribbon-wave {
  0%, 100% { 
    transform: translateX(0) translateY(0) skewY(-1deg);
  }
  25% { 
    transform: translateX(3%) translateY(-8px) skewY(0.5deg);
  }
  50% { 
    transform: translateX(0) translateY(0) skewY(1deg);
  }
  75% { 
    transform: translateX(-3%) translateY(-5px) skewY(-0.5deg);
  }
}
</style>

---
name: solution
layout: default
class: relative overflow-hidden p-0
---

<div class="flex h-full">
  <!-- Text Column (3/5) -->
  <div class="w-3/5 relative px-14 pt-32 pb-10 flex flex-col justify-center h-full">
    <img src="/img/2/arianne-logo-orange.svg" class="absolute top-[40px] left-[54px] h-10 logo-animation" alt="Logo Arianne" />
    <div class="slide-text mb-6">
      Arianne è un <strong>ecosistema</strong> per la salute mentale.
      <br />
      <br />
      Una piattaforma digitale
      che unisce <strong>ricerca clinica e innovazione tecnologica</strong> per rendere la psicoterapia online e in presenza accessibile
      e <strong>incentrata sui bisogni di pazienti e terapeuti</strong>.
    </div>
  </div>

  <!-- Image Column (2/5) -->
  <div class="w-2/5 relative flex items-center justify-start h-full">
    <!-- Image wrapper shifted right to be partially off-screen -->
    <div class="w-[600px] flex-shrink-0 computer-image flex justify-center relative translate-x-[150px]">
      <div class="relative w-full z-10">
        <img src="/img/imac.png" class="w-full relative z-20 pointer-events-none" alt="iMac" />
        <div class="absolute top-[2.8%] left-[2.6%] w-[94.8%] h-[64%] overflow-hidden z-30">
          <img src="/img/2/home.jpeg" class="w-full h-full object-cover object-top scrolling-image" alt="Schermata home Arianne" />
        </div>
      </div>
      <div class="absolute -bottom-6 w-[80%] h-8 bg-black/30 blur-xl rounded-[100%]"></div>
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
  15% {
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

---
layout: default
name: project
class: relative h-full flex flex-col
---

# Il progetto

La piattaforma è sviluppata per terapeuti e pazienti 

<!-- Dummy v-click to register a step so nav.clicks increments (Curtain open) -->
<div v-click class="hidden"></div>

<!-- ProjectCard inherits slide text styles; avoid per-card typography overrides. -->
<div class="grid grid-cols-3 gap-6 mt-12 text-left flex-1 content-center">
  <ProjectCard
    v-for="card in projectCards"
    :key="card.title"
    :title="card.title"
    :icon="card.icon"
    v-click
    :v-motion="{
      initial: { 
        y: 50, 
        opacity: 0, 
        scale: 0.9 
      },
      enter: { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        transition: { 
          type: 'spring', 
          stiffness: 250, 
          damping: 20 
        } 
      }
    }"
  >
    {{ card.description }}
  </ProjectCard>
</div>

<script setup lang="ts">
const projectCards = [
  {
    title: 'Collaborazione Terapeuta-Paziente',
    icon: 'i-heroicons-users',
    description:
      'Sistema progettato per facilitare la collaborazione tra il terapeuta e il paziente con interfacce dedicate',
  },
  {
    title: 'Supporto continuo',
    icon: 'i-heroicons-chart-bar',
    description:
      'funzionalità per supportare il paziente tra le sedute attraverso compiti e test',
  },
  {
    title: 'Prevenzione e Identificazione Precoce',
    icon: 'i-heroicons-shield-check',
    description:
      'Particolare attenzione alla prevenzione e al tracciamento del piano terapeutico più adatto',
  },
]
</script>

<div class="absolute inset-0 z-50 flex pointer-events-none">
  <img 
    src="/img/3/enzo-pc.png" 
    class="w-1/2 h-full object-cover transition-transform duration-1000 ease-in-out"
    :class="$slidev.nav.clicks > 0 ? '-translate-x-full' : 'translate-x-0'"
    alt="Enzo"
  />
  <img 
    src="/img/3/anna-rita-pc.jpg" 
    class="w-1/2 h-full object-cover transition-transform duration-1000 ease-in-out"
    :class="$slidev.nav.clicks > 0 ? 'translate-x-full' : 'translate-x-0'"
    alt="Anna Rita"
  />
</div>

---
layout: default
name: system
class: relative
---

# Tutto in un unico sistema

Panoramica immediata su pazienti, attività e comunicazioni: meno tempo amministrativo, più cura

<div class="relative mt-8 flex justify-center items-center gap-6">
  <!-- iMac 1 -->
  <div 
    class="relative w-[45%] flex justify-center"
    v-click="1"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
  >
    <img src="/img/imac.png" class="w-full relative z-10" />
    <div class="absolute -bottom-6 w-[80%] h-8 bg-black/30 blur-xl rounded-[100%]"></div>
  </div>

  <!-- iMac 2 -->
  <div 
    class="relative w-[45%] flex justify-center"
    v-click="2"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
  >
    <img src="/img/imac.png" class="w-full relative z-10" />
    <div class="absolute -bottom-6 w-[80%] h-8 bg-black/30 blur-xl rounded-[100%]"></div>
  </div>
  
  <div class="absolute inset-0 flex justify-center items-center z-50 pointer-events-none">
    <img 
      src="/img/tablet.png" 
      class="w-[30%]"
      v-click="2"
      v-motion
      :initial="{ y: 110, opacity: 0, scale: 0.9 }"
      :enter="{ y: 60, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
    />
  </div>
</div>

---
layout: default
name: activities-pro
class: relative
---

# Attività tra le sedute - professionisti

All’interno della piattaforma, il professionista dispone di un’area dedicata per progettare e monitorare le attività terapeutiche

- Assegnazione di compiti personalizzati (diari, esercizi, questionari)
- Definizione degli obiettivi terapeutici tra una seduta e l’altra
- Monitoraggio strutturato dei progressi del paziente nel tempo

Tutto avviene all’interno di Arianne, senza l’utilizzo di strumenti esterni
 <div 
    class="relative top-60 flex left-20 justify-center"
    v-click="1"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }"
  >
<img src="/img/5/therapist.png" class="slide-image-right-md w-[65%]" alt="Schermata area terapeuta" />
</div>
---
layout: default
name: activities-patient
class: relative
---

# Attività tra le sedute - pazienti

Il paziente ha accesso a un’area dedicata in cui può svolgere le attività assegnate dal terapeuta in modo semplice e guidato

- Compilazione di diari ed esercizi direttamente in piattaforma
- Somministrazione di questionari e test clinici
- Continuità del percorso terapeutico anche tra le sedute

Questo approccio favorisce una terapia più completa, efficace e costantemente seguita

 <div 
    class="relative top-60 flex left-20 justify-center"
    v-click="1"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }"
  >

<img src="/img/6/patient.png" class="slide-image-right-md " alt="Schermata area paziente" />
</div>
---
layout: default
name: insights
class: relative
---


# Questionari con insight leggibili
Questionari e test digitali, assegnabili e compilabili in seduta o da remoto

- Risultati strutturati, confrontabili ed esportabili
- Scoring automatico e visualizzazione dei trend nel tempo
- Supporto concreto a follow-up, prevenzione e decisioni cliniche

L’outcome monitoring rende visibile l’efficacia del percorso terapeutico, riducendo la complessità organizzativa.

 <div 
    class="relative top flex left-20 justify-center w-70%"
    v-click="1"
    v-motion
    :initial="{ y: 50, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }"
  >
<img src="/img/7/iMac.png" class="" alt="Schermata questionari" />
</div>
---
layout: default
name: ai
---

# AI & Analytics

Scrivere qualcosa 

---
layout: default
name: competitors
---

# Competitors

Tesi

---
layout: default
name: business
---

# Modello di business

Marco

---
layout: default
name: spinoff
class: bg-[#4F46E5] slide-theme-invert
---

<!-- Use slide-theme-invert for dark backgrounds so text stays consistent. -->
<div class="w-full h-full flex flex-col items-center justify-center p-12">
  <div class="slide-text mb-12 text-center max-w-2xl">
    Arianne è un prodotto <span class="highlight">Whattadata</span>, spin off dell’<span class="highlight">Università degli Studi di Milano Bicocca</span>
  </div>
  <img src="/img/11/whattadata-logo.svg" class="h-48" alt="Logo Whattadata" />
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

---
layout: default
name: conclusion
---

# Slide conclusiva

Marco
