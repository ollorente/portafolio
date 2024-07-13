<script setup lang="ts">
import useTailwindConfig from "@/composables/useTailwindConfig.js"
const { defaultTransition, twitterBorderColor } = useTailwindConfig()
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="m-2 border border-transparent rounded-2xl bg-gray-100 dark:bg-gray-800 overflow-hidden" :class="twitterBorderColor">
    
    <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b border-white dark:text-white">{{ props.title }}</h1>

    <slot></slot>

    <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 flex hidden" :class="defaultTransition">
      <RouterLink to="/siguiendo" class="w-full h-full">Mostrar más</RouterLink>
    </div>
  </div>
</template>