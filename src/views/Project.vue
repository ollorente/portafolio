<script setup>
const title = "Proyecto"
</script>

<template>
  <h1>{{ title }}</h1>
  <router-link :to="{ name: 'Projects' }" class="font-bold m-1 p-3">Volver</router-link>
</template>
