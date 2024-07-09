<script setup>
import PageLayout from '@/layouts/Page.vue'

const title = "Página no encontrada"
</script>

<template>
  <PageLayout class="">
    <h1 class="text-2xl font-semiblod">{{ title }}</h1>
    <p class="py-3">
      <router-link :to="{ name: 'Home' }"
        class="bg-red-700 text-white font-bold rounded-full m-1 py-1 px-4">Home</router-link>
    </p>
  </PageLayout>
</template>
