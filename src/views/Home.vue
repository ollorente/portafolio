<script setup>
import { onMounted, ref } from "vue"
import UIImgHighlight from "@/components/UI/Img/Highlight.vue"

const title = "Home"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const items = ref()

const getItems = async () => {
  isLoading.value = true

  try {
    items.value = [
      { id: "1", title: "Soporte", slug: "soporte", image: "/img/support-icon.jpg" },
      { id: "2", title: "Ahora tú", slug: "ahora-tu", image: "/img/now-you-icon.jpg" },
      { id: "3", title: "Evento 1M🦐", slug: "evento-1m", image: "/img/support-icon.jpg" },
      { id: "4", title: "Más que s...", slug: "", image: "/img/now-you-icon.jpg" },
      { id: "5", title: "#FWP 2021", slug: "fwp-2021", image: "/img/support-icon.jpg" },
      { id: "6", title: "Tokyo", slug: "tokyo", image: "/img/now-you-icon.jpg" },
    ]
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getItems())
</script>

<template>
  <div class="flex items-center mb-5">
    <img src="/img/samsung-logo.jpg" alt="Samsung Logo" class="w-40 rounded-full me-6">
    <div class="">
      <div class="flex items-center">
        <h1 class="text-3xl">Ollorente</h1>
        <button class="h-fit bg-blue-500 text-white rounded mx-3 py-1 px-4">Seguir</button>
      </div>
      <div class="flex gap-10 mb-5">
        <span><strong>2,625</strong> publicaciones</span>
        <span><strong>1m</strong> seguidores</span>
        <span><strong>255</strong> seguidos</span>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <strong>Óscar Llorente</strong><br>
    Cuenta Oficial en Panamá🇵🇦, Costa Rica🇨🇷 Guatemala🇬🇹 Nicaragua🇳🇮, El Salvador🇸🇻, Honduras🇭🇳,
    Venezuela🇻🇪 PR🇵🇷<br>
    <RouterLink :to="{ name: 'Contact' }" class="text-black font-semibold">Contacto</RouterLink>
  </div>

  <div class="flex gap-3 mb-5">
    <UIImgHighlight v-for="item in items" :key="item.id" :item="item" />

    <div class="text-center">
      <img src="/img/support-icon.jpg" alt="Soporte" class="w-[77px] aspect-square rounded-full border-[3px]">
      <p>Soporte</p>
    </div>
    <div class="text-center">
      <img src="/img/now-you-icon.jpg" alt="Ahora tú" class="w-[77px] aspect-square rounded-full border-[3px]">
      <p>Ahora tú</p>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-7">
    <div class=""><img src="/img/post1.jpg" alt="Post 1" class="w-full aspect-square"></div>
    <div class=""><img src="/img/post2.jpg" alt="Post 2" class="w-full aspect-square"></div>
    <div class=""><img src="/img/post3.jpg" alt="Post 3" class="w-full aspect-square"></div>
    <!-- Añade más posts aquí -->
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  max-width: 935px;
  margin: 0 auto;
  padding: 20px;
}
</style>