---
title: Arianne - L'ecosistema digitale per la salute mentale
titleTemplate: '%s - Arianne'
---

---
name: cover
layout: default
class: relative p-0
---

<div class="w-full h-full absolute inset-0 animated-bg ribbon-theme ribbon-theme--cover ribbon-theme--cover-hero overflow-hidden cover-slide">
  <div class="ribbons-container">
    <div class="ribbon ribbon-1"></div>
    <div class="ribbon ribbon-2"></div>
    <div class="ribbon ribbon-3"></div>
    <div class="ribbon ribbon-4"></div>
  </div>
  <div class="cover-vignette"></div>
  <div class="absolute top-6 right-6 z-20 cover-partner">
    <img src="/img/1/whattadata-unimib-logo.png" class="h-16" alt="Whattadata Unimib" />
  </div>
  <div class="absolute top-[40px] left-[54px] z-10 text-left cover-content">
    <img src="/img/1/arianne-logo.png" class="h-32 mb-8 cover-logo" alt="Arianne" />
    <!-- Body copy uses slide-text for consistent sizing and rhythm. -->
    <div class="slide-text text-white cover-tagline" mdc>
      L’<strong>ecosistema digitale</strong> per la <strong>salute mentale</strong>
    </div>
  </div>
</div>

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
      Una <strong>piattaforma digitale</strong> che unisce <strong>ricerca</strong> e <strong>tecnologia</strong> per rendere la <strong>psicoterapia</strong> online e in presenza più <strong>accessibile</strong>, <strong>continua</strong> e <strong>centrata sui bisogni di pazienti e terapeuti</strong>
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
Per i professionisti il valore è più **efficienza clinica**; per i pazienti è un accesso **guidato**, **sicuro** e **flessibile**.
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
        <!-- <img src="/img/6/dashboard-1.png" class="w-full h-full object-cover" />-->
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
        <!-- <img src="/img/6/dashboard-2.png" class="w-full h-full object-cover" /> -->
      </div>
    </div>
    <div class="device-shadow"></div>
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
      <div class="absolute top-[4.6%] left-[4%] w-[92.5%] h-[91%] z-30 overflow-hidden flex items-center justify-center rounded-[4px] device-screen">
        <!-- <img src="/img/6/dashboard-3.png" class="w-full h-full object-contain" /> -->
      </div>
    </div>
  </div>
</div>

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

Nella sezione **Compiti** il terapeuta assegna **attività personalizzate** tra una seduta e l’altra: **diari**, **esercizi** e **questionari**.

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
    </div>
  </div>
</div>

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

<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
    </div>
  </div>
</div>

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
    </div>
  </div>
</div>

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
<div class="slide-device-stage">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 device-screen">
    </div>
  </div>
</div>

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
       <!-- <img src="/img/6/dashboard-1.png" class="w-full h-full object-cover" />-->
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
        <!-- <img src="/img/6/dashboard-2.png" class="w-full h-full object-cover" /> -->
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
    <video src="/img/14/call.mp4" autoplay loop muted playsinline class="h-full w-auto object-cover scale-[1.2]"></video>
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

<div class="relative mt-8 flex justify-center items-end gap-8">
  <div
    class="relative w-[19%] flex justify-center"
    v-click="1"
    v-motion
    :initial="{ y: 40, opacity: 0, scale: 0.9 }"
    :enter="{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 22 } }"
  >
    <div class="relative w-full z-10">
      <img src="/img/iphone.png" class="w-full relative z-20" />
      <div class="absolute top-[2%] left-[4.6%] w-[90%] h-[96.1%] z-30 rounded-[1.2rem] device-screen overflow-hidden"></div>
    </div>
    <div class="device-shadow device-shadow--soft"></div>
  </div>
</div>

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

<div class="relative h-[calc(100%-7rem)] flex flex-col items-center justify-start px-4 pt-0.5 pb-0 gap-0.5">
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
