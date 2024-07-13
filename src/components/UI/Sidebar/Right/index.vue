<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline"
import UISidebarRightPreviewCard from "@/components/UI/Sidebar/Right/PreviewCard/index.vue"
import UISidebarRightPreviewCardItem from "@/components/UI/Sidebar/Right/PreviewCard/Item.vue"

const router = useRouter()
const search = ref("")
const notifications = ref([
  {
    content: "",
    count: "18.8k Grafos",
    title: "SapceX",
    url: "/",
  },
  {
    content: "",
    count: "8.8k Grafos",
    title: "#CodingIsFun",
    url: "/",
  },
  {
    content: "",
    count: "1.8k Grafos",
    title: "#artforall",
    url: "/",
  },
])

function handleSearch() {
  router.push({ name: 'Search', query: { q: search.value } })
  search.value = ""
}

function handleToggleDarkMode() {
  // emitter.$emit("toggleDarkMode")
}
</script>

<template>
  <div class="flex flex-col">

    <form class="relative m-2" @submit.prevent="handleSearch">
      <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
        <button type="submit" class="w-6 h-6">
          <MagnifyingGlassIcon @click="handleSearch" />
        </button>
      </div>

      <input v-model="search" type="search" placeholder="Buscar proyecto"
        class="flex items-center w-full pl-12 text-sm text-dark font-normal dark:text-gray--100 bg-gray-100 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border-blue-200 h-9">
    </form>

    <UISidebarRightPreviewCard title="Tal vez te guste">

      <UISidebarRightPreviewCardItem v-for="notification in notifications" :key="notification?.id">
        <RouterLink :to="notification?.url" class="">
          <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ notification?.title }}</h2>
          <p class="text-xs text-gray-400">{{ notification?.content }}</p>
        </RouterLink>
      </UISidebarRightPreviewCardItem>

    </UISidebarRightPreviewCard>

    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline" @click="handleToggleDarkMode">Modo oscuro</a>
        </li>
        <li class="inline-block mx-2">
          <RouterLink to="/privacidad" class="hover:underline">Privacidad</RouterLink>
        </li>
        <li class="inline-block mx-2">
          <RouterLink to="/cookies" class="hover:underline">Cookies</RouterLink>
        </li>
        <li class="inline-block mx-2">
          <RouterLink to="/accesibilidad" class="hover:underline">Accesibilidad</RouterLink>
        </li>
        <li class="inline-block mx-2">
          <RouterLink to="/publicidad" class="hover:underline">Publicidad</RouterLink>
        </li>
        <li class="inline-block mx-2">
          <RouterLink to="/mas" class="hover:underline">Más</RouterLink>
        </li>
        <li class="inline-block mx-2">
          © {{ new Date().getFullYear() }} Ollorente
        </li>
      </ul>
    </footer>

  </div>
</template>