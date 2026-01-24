<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
}>()
</script>

<template>
  <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/40 p-6 flex flex-col items-start h-full border border-gray-100 dark:border-slate-700">
    <div class="mb-4 p-3 bg-orange-100 dark:bg-orange-500/20 rounded-lg">
      <div :class="icon" class="text-2xl text-orange-500 dark:text-orange-400" />
    </div>
    <div class="mb-2 leading-tight font-semibold text-lg text-gray-900 dark:text-gray-100 min-h-[3.5rem]">
      {{ title }}
    </div>
    <div class="leading-relaxed text-left text-sm text-gray-700 dark:text-gray-200">
      <slot />
    </div>
  </div>
</template>
