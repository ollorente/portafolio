<script setup lang="ts">
const { baseURL } = useRuntimeConfig()
</script>

<template>
  <header class="container mx-auto">
    <p class="text-3xl font-semibold text-gray-900 p-4">
      <NuxtLink :to="baseURL">Ollorente</NuxtLink>
    </p>
  </header>
</template>
