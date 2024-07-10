<script setup>
import UIMainHeader from '@/components/UI/Main/Header.vue'
import PageLayout from '@/layouts/Page.vue'

const title = "Página no encontrada"
</script>

<template>
  <PageLayout class="">
    <UIMainHeader>{{ title }}</UIMainHeader>

    <p class="p-3">
      <router-link :to="{ name: 'Home' }"
        class="bg-red-700 text-white font-bold rounded-full m-1 py-1 px-4">Home</router-link>
    </p>
  </PageLayout>
</template>
