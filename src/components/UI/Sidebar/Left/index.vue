<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid"
import { BellIcon, BookmarkIcon, ChevronDownIcon, DocumentTextIcon, EllipsisHorizontalIcon, InboxIcon, MagnifyingGlassIcon, PencilIcon, UserIcon, UserGroupIcon } from "@heroicons/vue/24/outline"
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

      <UISidebarLeftTab :url="{ name: 'Projects' }">
        <template v-slot:icon>
          <MagnifyingGlassIcon />
        </template>
        <template v-slot:name>
          Proyectos
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab url="/notificaciones">
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name>
          Notificaciones
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab url="/mensajes">
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name>
          Mensajes
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab url="/listas">
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name>
          Listas
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab url="/marcadores">
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name>
          Marcadores
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab url="/comunidades">
        <template v-slot:icon>
          <UserGroupIcon />
        </template>
        <template v-slot:name>
          Comunidades
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab url="/perfil">
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name>
          Perfil
        </template>
      </UISidebarLeftTab>

      <UISidebarLeftTab url="/mas">
        <template v-slot:icon>
          <EllipsisHorizontalIcon />
        </template>
        <template v-slot:name>
          Más
        </template>
      </UISidebarLeftTab>

      <!-- <div class="hidden xl:block">
        <UIButton liquid size="lg" @click="emits('onGraf')">
          <span class="font-bold">
            Grafo
          </span>
        </UIButton>
      </div>

      <div class="block xl:hidden">
        <UIButton @click="emits('onGraf')">
          <div class="w-6 h-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div> -->

    </div>

    <!-- <div
      class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800 my-4"
      :class="defaultTransition" @click="emits('onLogout')">

      <div class="flex flex-row">
        <img :src="props.user.logo" alt="" class="w-10 h-10 rounded-full" />

        <div class="flex-col hidden ml-2 xl:block">
          <h1 class="text-sm font-bold text-gray-800 dark:text-white">
            {{ user.name }}
          </h1>
          <p class="text-sm text-gray-400">
            {{ user.handle }}
          </p>
        </div>
      </div>

      <div class="hidden ml-auto xl:block">
        <div class="w-6 h-6">
          <ChevronDownIcon />
        </div>
      </div>

    </div> -->

  </div>
</template>