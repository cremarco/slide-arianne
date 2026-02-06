---
name: cover
layout: default
class: relative p-0
---

<div class="w-full h-full absolute inset-0 animated-bg ribbon-theme ribbon-theme--cover overflow-hidden">
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
      L’<strong>ecosistema digitale</strong> per la <strong>salute mentale</strong>
    </div>
  </div>
</div>

<!--
Arianne nasce dall’incontro tra **ricerca clinica** e **innovazione tecnologica**.
Un ecosistema digitale per rendere la **psicoterapia** più **accessibile**, **continua** e **misurabile**, a beneficio di **pazienti** e **professionisti**.
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
      Una <strong>piattaforma digitale</strong> che unisce <strong>ricerca</strong> e <strong>tecnologia</strong> per rendere la <strong>psicoterapia</strong>—online e in presenza—più accessibile, continua e <strong>centrata sui bisogni di pazienti e terapeuti</strong>
    </div>
  </div>

  <!-- Image Column (2/5) -->
  <div class="w-2/5 relative flex items-center justify-start h-full">
    <!-- Image wrapper shifted right to be partially off-screen -->
    <div class="w-[600px] flex-shrink-0 computer-image flex justify-center relative translate-x-[150px]">
      <div class="relative w-full z-10">
        <img src="/img/imac.png" class="w-full relative z-20 pointer-events-none" alt="iMac" />
        <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
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
Arianne connette **pazienti** e **terapeuti** lungo tutto il percorso: dalla **presa in carico** alla **continuità** tra una seduta e l’altra.
Due ambienti dedicati—**professionista** e **paziente**—integrano strumenti per **comunicare**, **assegnare attività** e **monitorare i progressi** in modo strutturato.
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
Il sistema rende più semplice la **collaborazione** tra professionista e paziente, con due interfacce dedicate ma un flusso condiviso.
Tra una seduta e l’altra Arianne garantisce **continuità** con **compiti** e **monitoraggio**, aiutando anche a intercettare **segnali precoci** e variazioni nel percorso.
-->

---
layout: default
name: target-users
class: relative
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
Arianne si rivolge a due gruppi principali.
Per i professionisti: più **organizzazione**, meno tempo **amministrativo** e **continuità** tra una seduta e l’altra, con un canale per **nuove richieste**.
Per i pazienti: un’esperienza **guidata**, **sicura** e **flessibile**, che integra la terapia in presenza o supporta il **primo accesso** alla psicoterapia.
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
    <h1 class="text-white text-5xl font-bold text-center" style="color: white !important; text-align: center;">La piattaforma <br/> per il professionista</h1>
  </div>
</div>

<!--
Da qui entriamo nella **vista del professionista**: **dashboard**, **cartella clinica**, **compiti** e strumenti di lettura.
L’obiettivo è ridurre il tempo **amministrativo** e aumentare **continuità** e qualità della **presa in carico**.
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
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
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
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
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
      <div class="absolute top-[4.6%] left-[4%] w-[92.5%] h-[91%] z-30 overflow-hidden flex items-center justify-center rounded-[4px]">
        <!-- <img src="/img/6/dashboard-3.png" class="w-full h-full object-contain" /> -->
      </div>
    </div>
  </div>
</div>

<!--
La dashboard offre una **vista d’insieme** su **pazienti**, **appuntamenti**, **assegnazioni** e **messaggi**.
In pochi secondi il professionista capisce cosa richiede attenzione e può dare priorità alla **cura**, riducendo il carico **amministrativo**.
-->

---
layout: default
name: clinical-records
class: relative p-0
---

<div class="h-full w-full relative">
  <div class="w-[65%] h-full pl-14 pt-14 pr-4 relative z-10 flex flex-col justify-between pb-10">
    <div>
      <h1 class="mb-4">La cartella clinica</h1>
      <div class="slide-text opacity-90">
        Tutto lo <strong>storico clinico</strong> in un unico spazio: <br /><strong>anamnesi</strong>, <strong>note</strong>, <strong>referti</strong> e <strong>attività</strong>.
      </div>
    </div>
    
  <div class="relative w-[70%] self-center mt-4">
    <div class="relative w-full z-10">
      <img src="/img/imac.png" class="w-full relative z-20 pointer-events-none" alt="iMac" />
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
      </div>
    </div>
    <!-- Reflection/Shadow effect -->
    <div class="device-shadow device-shadow--soft"></div>
  </div>
  </div>
  <div class="absolute top-0 right-0 h-full w-auto overflow-hidden z-0">
    <video src="/img/6/anna-rita-scrive.mp4" autoplay loop muted playsinline class="h-full w-auto object-cover scale-[1.2]"></video>
  </div>
</div>

<!--
La **cartella clinica digitale** raccoglie in un unico luogo **anamnesi**, **note**, **referti** e **attività assegnate**.
Lo **storico** è sempre accessibile e consultabile rapidamente, così il professionista può preparare e condurre la seduta con più **continuità**.
-->

---
layout: default
name: assignments
class: relative overflow-hidden
---
# Attività tra le sedute

Nella sezione **Compiti** il terapeuta assegna attività tra una seduta e l’altra: **diari**, **esercizi** e **questionari**.

<div class="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[700px]">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
    </div>
  </div>
</div>

<!--
Qui entra in gioco la **continuità** tra le sedute: il terapeuta assegna **compiti personalizzati** e raccoglie le risposte in modo strutturato.
Diari e questionari generano **analisi** e **scoring** che aiutano a leggere l’**andamento nel tempo** e a preparare la seduta.
Oggi la piattaforma integra **30 questionari psicometrici**; la roadmap prevede un’**estensione progressiva** per coprire un numero sempre maggiore di casistiche.
-->

---
layout: default
name: agenda-and-notes
class: relative overflow-hidden
---
# Agenda e note

Agenda **sincronizzabile** con calendari digitali: **appuntamenti** ed **eventi** sempre sotto controllo.
<br />
**Note** e **appunti clinici** organizzati, sempre disponibili.

<div class="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[700px]">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
    </div>
  </div>
</div>

<!-- 
L’**agenda integrata** permette di gestire appuntamenti ed eventi con una vista chiara, filtri e **sincronizzazione** con i calendari digitali.
Le **Note** aiutano a registrare **appunti clinici** e informazioni rilevanti, e a ritrovarli rapidamente quando serve.
-->

---
layout: default
name: insights
class: relative overflow-hidden
---
# Insight leggibili

Ogni diario, questionario e attività genera **analisi automatiche** e **metriche chiare** per monitorare l’andamento del **percorso terapeutico**.

<div class="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[700px]">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
    </div>
  </div>
</div>

<!--
Gli insight trasformano i dati raccolti in una lettura immediata: **trend**, **progressi** e possibili **segnali di attenzione**.
L’obiettivo è supportare decisioni più **informate** e una **personalizzazione continua** del percorso.
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
    <h1 class="text-white text-5xl font-bold text-center" style="color: white !important; text-align: center;">La piattaforma <br/> per il paziente</h1>
  </div>
</div>

<!--
Passiamo ora alla **vista paziente**: **accesso semplice**, attività tra le sedute e una lettura chiara dei **progressi**.
L’esperienza è progettata per aumentare **ingaggio** e **continuità**, senza appesantire il percorso.
-->

---
layout: default
name: matching
class: relative
---

# Onboarding e abbinamento guidato

Questionario iniziale e preferenze: il percorso parte con le informazioni giuste
<div class="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[700px]">
  <div class="relative w-full z-10">
    <img src="/img/imac.png" alt="iMac" class="w-full relative z-20" />
    <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
    </div>
  </div>
</div>

<!--
L’iscrizione del paziente avviene in pochi passaggi: anagrafica, questionario iniziale, preferenze terapeutiche e disponibilità.
Al termine, il sistema propone una lista di terapeuti compatibili, da cui selezionare il professionista più adatto.
-->

---
layout: default
name: project-overview
class: relative h-full flex flex-col
---

# App dell'utente

Compiti, sedute e reminder in un’unica vista: attività assegnate dal terapeuta, promemoria e azioni rapide, strumenti sempre disponibili

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
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
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
      <div class="absolute top-[2.6%] left-[2.55%] w-[94.9%] h-[63.9%] overflow-hidden z-30 border-2 border-red-500">
        <!-- <img src="/img/6/dashboard-2.png" class="w-full h-full object-cover" /> -->
      </div>
    </div>
    <div class="device-shadow"></div>
  </div>
</div>

<!--
Nella homepage il paziente trova tutte le attività programmate: compiti, diari e appuntamenti.
Un calendario intuitivo mostra impegni e sedute, in modalità settimanale o mensile.
La chat permette di mantenere un dialogo costante e di pianificare con facilità ogni incontro.
-->

---
layout: default
name: implementations
---

# Implementazioni

<div class="slide-text opacity-90 mb-8">
  29 questionari integrati, diario cognitivo, comportamentale, del sonno, del mattino e molto altro.
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
Una vasta libreria di test validati già digitalizzati e pronti all'uso.
Tutto integrato nel flusso di lavoro: assegnazione, compilazione e scoring automatico.
-->

---
layout: default
name: competitor-analysis
class: relative
---

<div class="h-full flex flex-col items-center justify-center gap-1">
  <div class="w-full max-w-[95%] bg-white dark:bg-slate-900 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/40 overflow-hidden">
    <div class="comparison-scale">
      <table class="w-full table-fixed comparison-matrix">
      <thead class="bg-slate-50/80 dark:bg-slate-800/60">
        <tr>
          <th class="px-2 py-1 text-left text-[0.58rem] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-200 w-[16%]">
            Ambito
          </th>
          <th class="px-2 py-1 text-left text-[0.58rem] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-200 w-[24%]">
            Feature
          </th>
          <th class="px-2 py-1 text-center w-[8.6%]">
            <div class="flex justify-center">
                <img src="/img/2/arianne-logo-orange.svg" class="h-3.5 w-auto max-w-[92px] object-contain" alt="Arianne" />
            </div>
          </th>
          <th class="px-2 py-1 text-center w-[8.6%]">
            <div class="flex justify-center">
                <span class="header-text">Serenis</span>
            </div>
          </th>
          <th class="px-2 py-1 text-center w-[8.6%]">
            <div class="flex justify-center">
                <span class="header-text">UnoBravo</span>
            </div>
          </th>
          <th class="px-2 py-1 text-center w-[8.6%]">
            <div class="flex justify-center">
                <span class="header-text">MyMentis</span>
            </div>
          </th>
          <th class="px-2 py-1 text-center w-[8.6%]">
            <div class="flex justify-center">
                <span class="header-text">Terapeuta.it</span>
            </div>
          </th>
          <th class="px-2 py-1 text-center w-[8.6%]">
            <div class="flex justify-center">
                <span class="header-text">Sant'Agostino</span>
            </div>
          </th>
          <th class="px-2 py-1 text-center w-[8.6%]">
            <div class="flex justify-center">
                <span class="header-text">MioDottore</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200/60 dark:divide-slate-700/60 text-[0.62rem]">
      <tr>
        <td rowspan="7" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-user-plus"></span>
            <span>Accesso & matching</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Questionario iniziale</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Matching guidato</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Scelta manuale terapeuta</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Filtri ricerca terapeuta</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Profilo strutturato</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Recensioni / reputazione</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Cambio terapeuta</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td rowspan="4" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-video-camera"></span>
            <span>Seduta & comunicazione</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Videoseduta integrata</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Chat asincrona</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Allegati / materiali</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Reminder appuntamenti</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td rowspan="5" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-clipboard-document-check"></span>
            <span>Strumenti clinici</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Test / questionari</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Mood tracker</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Diario / journaling</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Compiti strutturati</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Psicoeducazione</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td rowspan="4" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-credit-card"></span>
            <span>Amministrazione</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Pagamenti</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Ricevute automatiche</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Booking / slot reali</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Disdetta / spostamento</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      <tr>
        <td rowspan="4" class="cat-cell">
          <div class="cat-badge">
            <span class="cat-icon i-heroicons-shield-check"></span>
            <span>Sicurezza & accessibilità</span>
          </div>
        </td>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Privacy / GDPR</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Verifica professionisti</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">App mobile nativa</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status i-heroicons-check-circle"></span></td>
      </tr>
      <tr>
        <td class="px-2 py-1 text-slate-800 dark:text-slate-100">Emergenze / limiti</td>
        <td class="px-2 py-1 text-center bg-orange-50/60 dark:bg-orange-500/10"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--partial i-heroicons-minus-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
        <td class="px-2 py-1 text-center"><span class="status status--no i-heroicons-x-circle"></span></td>
      </tr>
      </tbody>
      </table>
    </div>
  </div>

  <div class="slide-text opacity-75 flex items-center gap-4 flex-wrap text-[0.66rem]">
    <div class="flex items-center gap-2">
      <span class="status i-heroicons-check-circle"></span>
      <span>Presente</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="status status--partial i-heroicons-minus-circle"></span>
      <span>Parziale</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="status status--no i-heroicons-x-circle"></span>
      <span>Assente</span>
    </div>
  </div>
</div>

<style scoped>
.comparison-scale {
  zoom: 0.84;
  width: 100%;
}

.comparison-matrix th,
.comparison-matrix td {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  vertical-align: middle;
  line-height: 1.1;
}

.header-pill {
  @apply inline-flex items-center justify-center rounded-md px-1.5 py-0.5 bg-white/95 border border-slate-200/70 shadow-sm;
}

.header-text {
  @apply inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-[0.54rem] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-200;
}

.cat-cell {
  @apply px-2 py-1 align-middle;
}

.cat-badge {
  @apply inline-flex items-center gap-2 text-[0.56rem] font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200;
}

.cat-icon {
  @apply text-sm text-orange-500;
}

.status {
  @apply inline-flex items-center justify-center text-sm leading-none text-emerald-600 dark:text-emerald-500;
}

.comparison-matrix td.text-center > span,
.comparison-matrix td.text-center > div,
.comparison-matrix th.text-center > div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.status--partial {
  @apply text-amber-500 dark:text-amber-400;
}

.status--no {
  @apply text-slate-400 dark:text-slate-500;
}
</style>

<!--
Sintesi ispirata alla Benchmark Feature Matrix della tesi: l'obiettivo è mostrare, in modo immediato,
le principali differenze tra i modelli (end-to-end, marketplace, seduta-centrico) e il posizionamento di Arianne.
-->

---
layout: default
name: business-model
class: relative
---

# Come funziona Arianne

<div class="slide-text opacity-80">
  A differenza delle altre piattaforme, paghi sempre la stessa cifra
</div>

<div class="grid grid-cols-2 gap-6 mt-10 text-left flex-1 content-center">
  <ProjectCard title="Prova gratuita" icon="i-heroicons-sparkles">
    <div class="mb-4 text-sm opacity-70">14 giorni per testare tutto</div>
    <ul class="feature-list">
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span>Accesso completo</span>
      </li>
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span>Nessun pagamento</span>
      </li>
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span>Disdici senza nessun costo</span>
      </li>
    </ul>
  </ProjectCard>

  <ProjectCard title="Piano mensile" icon="i-heroicons-calendar-days">
    <div class="mb-4">
    </div>
    <ul class="feature-list">
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span>Tariffa per numero di pazienti</span>
      </li>
      <li class="feature-item">
        <span class="feature-icon i-heroicons-check"></span>
        <span>Disdici quando vuoi</span>
      </li>
    </ul>
      </ProjectCard>
</div>

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
Arianne è un prodotto di Whattadata. Whattadata nasce come **spin-off universitario**: portiamo sul mercato competenze di **ricerca e sviluppo** maturate in ambito accademico.
Questo si traduce in un **approccio scientifico**, attenzione alla **validazione** e **miglioramento continuo** del prodotto.
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
Chiusura: lasciare la slide in pausa per domande o ringraziamenti.
-->
