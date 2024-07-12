<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid"
import { ChevronDownIcon, ClipboardDocumentCheckIcon, FilmIcon, PhotoIcon, UserIcon, VideoCameraIcon } from "@heroicons/vue/24/outline"
import IconOllorente from "@/components/Icon/Ollorente.vue"
import UISidebarLeftTab from "@/components/UI/Sidebar/Left/Tab.vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"

const { defaultTransition } = useTailwindConfig()
const emits = defineEmits(["onGraf", "onLogout"])

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col h-screen">

    <div class="p-0 my-2 hover:bg-blue-50 hover:rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
      <RouterLink to="/"
        class="flex items-center p-3 text-black w-min rounded-full dark:hover:bg-dim-200 dark:text-white">
        <div class="w-12 h-12">
          <IconOllorente />
        </div>
        <div class="hidden ml-4 text-2xl xl:block font-bold" :class="textClasses">
          Ollorente
        </div>
      </RouterLink>
    </div>

    <div class="mt-2 space-y-3">

      <UISidebarLeftTab :url="{ name: 'Home' }" active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name>
          Home
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab :url="{ name: 'Animations' }">
        <template v-slot:icon>
          <FilmIcon />
        </template>
        <template v-slot:name>
          Animaciones
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab :url="{ name: 'GraphicDesigns' }">
        <template v-slot:icon>
          <PhotoIcon />
        </template>
        <template v-slot:name>
          Diseños
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab :url="{ name: 'Projects' }">
        <template v-slot:icon>
          <ClipboardDocumentCheckIcon />
        </template>
        <template v-slot:name>
          Proyectos
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab :url="{ name: 'Videos' }">
        <template v-slot:icon>
          <VideoCameraIcon />
        </template>
        <template v-slot:name>
          Videos
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab :url="{ name: 'Profile' }" class="hidden">
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name>
          Perfil
        </template>
      </UISidebarLeftTab>

    </div>

    <RouterLink :to="{ name: 'Profile' }"
      class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800 my-4"
      :class="defaultTransition">

      <div class="flex flex-row">
        <UserIcon class="w-10 h-10 text-red-600 rounded-full" />

        <div class="flex-col hidden ml-2 xl:block">
          <h3 class="text-sm font-bold text-gray-800 dark:text-white">
            Perfil
          </h3>
          <p class="text-sm text-gray-400">
            Oscar Llorente
          </p>
        </div>
      </div>

      <div class="hidden ml-auto xl:block">
        <div class="w-6 h-6">
          <ChevronDownIcon />
        </div>
      </div>

    </RouterLink>

  </div>
</template>