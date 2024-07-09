<script setup lang="ts">
import { computed } from "vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
const { defaultTransition, twitterBorderColor } = useTailwindConfig()

const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)
</script>

<template>
  <div class="p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 border-b border-white" :class="wrapperClasses">
    <slot></slot>
  </div>
</template>