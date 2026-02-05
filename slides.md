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

<!--
Arianne nasce dall’incontro tra ricerca e innovazione tecnologica.
Una piattaforma pensata per rendere la psicoterapia più efficace, accessibile e continua.
-->

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
      Arianne è un <strong>ecosistema</strong> per la salute mentale
      <br />
      <br />
      Una piattaforma digitale
      che unisce <strong>ricerca e innovazione tecnologica</strong> per rendere la psicoterapia online e in presenza accessibile
      e <strong>incentrata sui bisogni di pazienti e terapeuti</strong>
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
Arianne è una piattaforma digitale che connette pazienti e terapeuti, supportandoli in ogni fase del percorso terapeutico.
Due ambienti dedicati, uno per il professionista della salute mentale e uno per il paziente, integrano strumenti avanzati per comunicare, monitorare e gestire l’intero iter terapeutico.
-->

---
layout: default
name: project
class: relative h-full flex flex-col
---

# Il progetto

La piattaforma è sviluppata per terapeuti e pazienti 

<div v-click class="hidden"></div>

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
    title: 'Collaborazione',
    icon: 'i-heroicons-users',
    description:
      'Sistema progettato per facilitare la collaborazione tra il professionista e il paziente con interfacce dedicate',
  },
  {
    title: 'Supporto continuo',
    icon: 'i-heroicons-chart-bar',
    description:
      'Funzionalità per supportare il paziente tra le sedute attraverso compiti e test',
  },
  {
    title: 'Prevenzione',
    icon: 'i-heroicons-shield-check',
    description:
      'Particolare attenzione alla prevenzione e al tracciamento del piano terapeutico',
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
Il sistema è progettato per favorire una collaborazione continua tra terapeuta e paziente, grazie a interfacce semplici e funzionali.
Arianne offre un supporto continuo e pone grande attenzione alla prevenzione e all’identificazione precoce dei bisogni, facilitando la definizione del piano terapeutico più adeguato.
-->

---
layout: default
name: system
class: relative
---

# L'utenza target

La piattaforma è sviluppata per professionisti del benessere mentale e pazienti 

<div v-click class="hidden"></div>


<div class="grid grid-cols-2 gap-6 mt-12 text-left flex-1 content-center">
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
    title: 'Psicologi, psicoterapeuti e professionisti del benessere mentale',
    icon: 'i-heroicons-briefcase',
    description:
      'Professionisti già attivi che desiderano aumentare il proprio seguito, lavorare in modo più flessibile, da qualsiasi luogo e accedere a un flusso di nuove richieste grazie a una piattaforma strutturata',
  },
  {
    title: 'Pazienti già in terapia o al primo contatto',
    icon: 'i-heroicons-heart',
    description:
      'Persone che desiderano accedere a un percorso terapeutico guidato, sicuro e flessibile, sia come integrazione alla terapia in presenza, che come primo contatto con il mondo della psicologia',
  }
]
</script>

<!--
Arianne è pensata per psicologi e psicoterapeuti che desiderano ampliare la propria visibilità, lavorare con maggiore flessibilità ed efficienza e accedere a un flusso costante di nuovi pazienti.
Offre inoltre un percorso guidato e sicuro a utenti che si avvicinano per la prima volta alla terapia. 
È ideale per chi cerca una soluzione digitale moderna, sia come integrazione alla terapia in presenza, sia come primo contatto con il mondo della psicologia. 
-->

---
layout: default
name: professionista-intro
class: relative p-0
---

<div class="w-full h-full absolute inset-0 animated-bg-teal overflow-hidden">
  <div class="ribbons-container">
    <div class="ribbon ribbon-teal-1"></div>
    <div class="ribbon ribbon-teal-2"></div>
    <div class="ribbon ribbon-teal-3"></div>
    <div class="ribbon ribbon-teal-4"></div>
  </div>
  
  <div class="absolute inset-0 flex items-center justify-center z-10 text-center">
    <h1 class="text-white text-5xl font-bold text-center" style="color: white !important; text-align: center;">La piattaforma <br/> per il professionista</h1>
  </div>
</div>

<style scoped>
.animated-bg-teal {
  background: linear-gradient(-45deg, #006279, #00819c, #005063, #003542);
  background-size: 400% 400%;
  animation: gradient-shift-teal 8s ease infinite;
}

@keyframes gradient-shift-teal {
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

/* Ribbon 1 */
.ribbon-teal-1 {
  background: #00819c;
  bottom: 120px;
  height: 50px;
  animation: ribbon-wave-teal 15s ease-in-out infinite;
}

/* Ribbon 2 */
.ribbon-teal-2 {
  background: #006279;
  bottom: 80px;
  height: 55px;
  animation: ribbon-wave-teal 18s ease-in-out infinite -3s;
}

/* Ribbon 3 */
.ribbon-teal-3 {
  background: #005063;
  bottom: 40px;
  height: 60px;
  animation: ribbon-wave-teal 16s ease-in-out infinite -5s;
}

/* Ribbon 4 */
.ribbon-teal-4 {
  background: #003542;
  bottom: 0;
  height: 65px;
  animation: ribbon-wave-teal 13s ease-in-out infinite -2s;
}

@keyframes ribbon-wave-teal {
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
layout: default
name: system
class: relative
---

# Dashboard

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
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20" />
      <div class="absolute top-[2.8%] left-[2.6%] w-[94.8%] h-[64%] overflow-hidden z-30">
       <!-- <img src="/img/6/dashboard-1.png" class="w-full h-full object-cover" />-->
      </div>
    </div>
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
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20" />
      <div class="absolute top-[2.8%] left-[2.6%] w-[94.8%] h-[64%] overflow-hidden z-30">
        <!-- <img src="/img/6/dashboard-2.png" class="w-full h-full object-cover" /> -->
      </div>
    </div>
    <div class="absolute -bottom-6 w-[80%] h-8 bg-black/30 blur-xl rounded-[100%]"></div>
  </div>
  
  <!-- iPad -->
  <div class="absolute inset-0 flex justify-center items-center z-50 pointer-events-none">
    <div 
      class="relative w-[30%]"
      v-click="3"
      v-motion
      :initial="{ y: 110, opacity: 0, scale: 0.9 }"
      :enter="{ y: 60, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
    >
      <img src="/img/ipad.png" class="w-full relative z-20" />
      <div class="absolute top-[4.9%] left-[3.8%] w-[92.6%] h-[90.3%] z-30 overflow-hidden flex items-center justify-center">
        <!-- <img src="/img/6/dashboard-3.png" class="w-full h-full object-contain" /> -->
      </div>
    </div>
  </div>
</div>

<!--
La dashboard offre una panoramica immediata su pazienti, appuntamenti, assegnazioni e attività recenti.
Ogni elemento è progettato per semplificare l’organizzazione quotidiana del professionista, migliorando efficienza e qualità della presa in carico.
-->

---
layout: default
name: system
class: relative p-0
---

<div class="h-full w-full relative">
  <div class="w-[65%] h-full pl-14 pt-14 pr-4 relative z-10 flex flex-col justify-between pb-10">
    <div>
      <h1 class="mb-4">La cartella clinica</h1>
      <div class="slide-text opacity-90">
        Panoramica immediata su pazienti, attività e comunicazioni: <br />meno tempo amministrativo, più cura
      </div>
    </div>
    
  <div class="relative w-[70%] self-center mt-4">
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20 pointer-events-none" alt="iMac" />
      <div class="absolute top-[2.8%] left-[2.6%] w-[94.8%] h-[64%] overflow-hidden z-30">
      </div>
    </div>
    <!-- Reflection/Shadow effect -->
    <div class="absolute -bottom-6 w-[80%] h-8 bg-black/30 blur-xl rounded-[100%] left-[10%]"></div>
  </div>
  </div>
  <div class="absolute top-0 right-0 h-full w-auto overflow-hidden z-0">
    <video src="/img/6/anna-rita-scrive.mp4" autoplay loop muted playsinline class="h-full w-auto object-cover scale-[1.2]"></video>
  </div>
</div>

<!--
Il professionista può accedere facilmente alla cartella clinica digitale e gestire in modo centralizzato anamnesi, compiti, note, referti, compiti e attività dei pazienti.
Offre un accesso rapido allo stato del percorso.
-->

---
layout: default
name: compiti
class: relative overflow-hidden
---
# Attività tra le sedute

Nella sezione compiti il terapeuta può assegnare diversi tipi di attività al paziente, tra cui la compilazione di diari e la somministrazione di questionari

<div class="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[700px]">
  <img src="/img/imac.png" alt="iMac" class="w-full" />
</div>

<!--
La sezione Compiti permette di assegnare attività personalizzate: questionari, esercizi, diari strutturati.
I diari includono metriche avanzate, utili per analizzare contenuti, emozioni e trend nel tempo.
Le somministrazioni sono rapide e intuitive, adatte anche durante la seduta.
Lo scoring offre una doppia visualizzazione — grafica o dettagliata — e la comparazione consente di confrontare più test nel tempo, evidenziando pattern e variazioni cliniche.
Attualmente la piattaforma integra 29 questionari psicometrici. L'obiettivo delle prossime release è una copertura capillare capace di integrare test specifici per il maggior numero di casistiche.
-->

---
layout: default
name: note e agenda
class: relative overflow-hidden
---
# Agenda e note

Appuntamenti, eventi e visione ordinata degli impegni grazie all'agenda sincronizzabile con calendari digitali
<br />
Nella sezione note è possibile registrare appunti e informazioni

<div class="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[700px]">
  <img src="/img/imac.png" alt="iMac" class="w-full" />
</div>

<!-- 
L’agenda integrata consente di controllare rapidamente gli appuntamenti, filtrare gli eventi e mantenere una visione chiara e organizzata degli impegni.
La sezione Note consente al terapeuta di registrare appunti personalizzati e di accedere facilmente a quelli salvati in precedenza.
-->

---
layout: default
name: metriche
class: relative overflow-hidden
---
# Insight leggibili

Ogni diario, questionario, attività e strumento diagnostico dispone di analisi automatiche che permettono di estrapolare metriche utili per monitorare l'andamento del percorso terapeutico

<div class="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[700px]">
  <img src="/img/imac.png" alt="iMac" class="w-full" />
</div>

---
layout: default
name: utente-intro
class: relative p-0
---

<div class="w-full h-full absolute inset-0 animated-bg overflow-hidden">
  <div class="ribbons-container">
    <div class="ribbon ribbon-1"></div>
    <div class="ribbon ribbon-2"></div>
    <div class="ribbon ribbon-3"></div>
    <div class="ribbon ribbon-4"></div>
  </div>
  
  <div class="absolute inset-0 flex items-center justify-center z-10 text-center">
    <h1 class="text-white text-5xl font-bold text-center" style="color: white !important; text-align: center;">La piattaforma <br/> per l'utente</h1>
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

Marco.
