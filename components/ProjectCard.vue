<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start h-full border border-gray-100">
    <div class="mb-4 p-3 bg-orange-100 rounded-lg">
      <div :class="icon" class="text-2xl text-orange-500" />
    </div>
    <div class="mb-2 leading-tight font-semibold text-lg text-gray-900 min-h-[3.5rem]">
      {{ title }}
    </div>
    <div class="leading-relaxed text-left text-sm text-gray-700">
      <slot />
    </div>
  </div>
</template>
