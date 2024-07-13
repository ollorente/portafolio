<script setup lang="ts">
import { computed } from "vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
const { defaultTransition, twitterBorderColor } = useTailwindConfig()

const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)
</script>

<template>
  <div class="p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 border-b border-white" :class="wrapperClasses">
    <slot></slot>
  </div>
</template>