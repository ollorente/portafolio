<script setup>
const title = "Proyecto"
</script>

<template>
  <h1 class="text-2xl font-semiblod">{{ title }}</h1>
  <p class="py-3">
    <router-link :to="{ name: 'Projects' }" class="bg-red-700 text-white font-bold rounded-full m-1 py-1 px-4">Volver</router-link>
  </p>
</template>
