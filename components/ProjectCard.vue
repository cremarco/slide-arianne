<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
}>()
</script>

<template>
  <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/40 p-6 flex flex-col items-start h-full relative overflow-hidden">
    <!-- Decorative Icon Background -->
    <div 
      :class="icon" 
      class="absolute -right-8 -top-8 text-9xl text-orange-500/10 dark:text-orange-400/10 pointer-events-none transform rotate-12" 
    />
    
    <!-- Content -->
    <div class="relative z-10 w-full">
      <div class="mb-4 leading-tight font-semibold text-xl text-gray-900 dark:text-gray-100 min-h-[3.5rem]">
        {{ title }}
      </div>
      <div class="leading-relaxed text-left text-sm text-gray-600 dark:text-gray-300">
        <slot />
      </div>
    </div>
  </div>
</template>
