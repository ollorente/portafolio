<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import IconSpinner from "@/components/Icon/Spinner.vue"
import UISidebarLeft from "@/components/UI/Sidebar/Left/index.vue"
import UISidebarRight from "@/components/UI/Sidebar/Right/index.vue"

const route = useRoute()
const title = "Home"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const items = ref()
const twitterBorderColor = ""
const user = ref(true)
const AuthPage = ref(true)
const UIModal = ref()
const GrafForm = ref()
const UISidebarRight = ref()

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

watch(() => route.fullPath, () => getItems())
onMounted(() => getItems())
</script>

<template>
  <div class="bg-white dark:bg-dim-900" @toggleDarkMode="onToggleDarkMode">

    <div v-if="user" class="min-h-full">

      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

        <!-- Left sidebar -->
        <div class="hidden md:block xs-col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <UISidebarLeft :user="user" @onGraf="handleOpenGrafModal" @onLogout="hndleUserLogout" />
          </div>
        </div>

        <!-- MainContent -->
        <main class="col-span-12 md:col-span-8 xl:col-span-6">
          <div class="border-l border-r">

            <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
              <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
            </div>

            <div v-if="isLoading" class="p-4" :class="twitterBorderColor">
              <IconSpinner />
            </div>

            <div v-else class="">

              <slot></slot>
            </div>

          </div>
        </main>

        <!-- Right sidebar -->
        <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
          <div class="sticky top-0">
            <UISidebarRight />
          </div>
        </div>

      </div>

    </div>

    <AuthPage v-else />

    <UIModal :isOpen="postGrafModal" @onClose="handelModalClose">
      <GrafForm :replyTo="replyGraf" showReply :user="user" @onSuccess="handleFormSuccess" />
    </UIModal>

  </div>
</template>
