<script setup lang="ts">
const props = defineProps({
  error: {
    type: String,
    default: "",
  },
  isError: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-if="props.isLoading" class="p-4">Loading...</div>

  <div v-else-if="props.isError" class="p-4">{{ props.error }}</div>

  <div v-else class="p-4">
    <slot></slot>
  </div>
</template>
