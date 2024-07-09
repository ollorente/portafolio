<script setup lang="ts">
import { ref } from "vue"
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline"
 import UISidebarRightPreviewCard from "@/components/UI/Sidebar/Right/PreviewCard/index.vue"
 import UISidebarRightPreviewCardItem from "@/components/UI/Sidebar/Right/PreviewCard/Item.vue"

// const { FindAllFollows, FindAllNotifications } = useDbService()
// const emitter = useEmitter()

const search = ref("")
const followers = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200"
  }
])
const notifications = ref([
  {
    title: "SapceX",
    count: "18.8k Grafos"
  },
  {
    title: "#CodingIsFun",
    count: "8.8k Grafos"
  },
  {
    title: "#artforall",
    count: "1.8k Grafos"
  },
])

// const getFollwers = async () => {
//   try {
//     const data = await FindAllFollows(id, { limit: 4 })

//     followers.value = data
//   } catch (error) {
//     console.error(error)
//   }
// }

// const getNotifications = async () => {
//   try {
//     const data = await FindAllNotifications(id, { limit: 4 })

//     notifications.value = data
//   } catch (error) {
//     console.error(error)
//   }
// }

// onMounted(() => {
//   getFollwers()
//   getNotifications()
// })

function handleSearch() {
  // useRouter().push({
  //   path: "/buscar",
  //   query: {
  //     q: search.value
  //   }
  // })
}

function handleToggleDarkMode() {
  // emitter.$emit("toggleDarkMode")
}
</script>

<template>
  <div class="flex flex-col">

    <div class="relative m-2">
      <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
        <div class="w-6 h-6">
          <MagnifyingGlassIcon @click="handleSearch" />
        </div>
      </div>

      <input v-model="search" type="search" placeholder="Buscar proyecto"
        class="flex items-center w-full pl-12 text-sm text-dark font-normal dark:text-gray--100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border-blue-200 h-9">
    </div>

    <UISidebarRightPreviewCard title="Tal vez te guste">

      <UISidebarRightPreviewCardItem v-for="notification in notifications" :key="notification?.id">
        <RouterLink :to="notification?.url" class="">
          <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ notification?.title }}</h2>
          <p class="text-xs text-gray-400">{{ notification?.content }}</p>
        </RouterLink>
      </UISidebarRightPreviewCardItem>

    </UISidebarRightPreviewCard>

    <UISidebarRightPreviewCard title="Siguiendo">
      <UISidebarRightPreviewCardItem>
        <RouterLink v-for="follow in followers" :key="follow.id" :to="`/${follow?.user?.username}`"
          class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row">

            <img :src="follow?.user?.logo" :alt="follow?.user?.title" class="w-10 h-10 rounded-full" />

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ follow?.user?.title }}</h1>
              <p class="text-xs text-gray-400">@{{ follow?.user?.username }}</p>
            </div>

          </div>

          <div class="flex h-full">

            <button
              class="px-4 py-2 text-xs font-bold text-white dark:text-black bg-black dark:bg-white rounded-full">Seguir</button>

          </div>
        </RouterLink>
      </UISidebarRightPreviewCardItem>
    </UISidebarRightPreviewCard>

    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline" @click="handleToggleDarkMode">Modo oscuro</a>
        </li>
        <li class="inline-block mx-2">
          <RouterLink :to="{ name: 'Privacy' }" class="hover:underline">Privacidad</RouterLink>
        </li>
        <li class="inline-block mx-2">
          <RouterLink :to="{ name: 'Cookies' }" class="hover:underline">Cookies</RouterLink>
        </li>
        <li class="inline-block mx-2">
          <RouterLink :to="{ name: 'Accessibility' }" class="hover:underline">Accesibilidad</RouterLink>
        </li>
        <li class="inline-block mx-2">
          <RouterLink :to="{ name: 'Advertising' }" class="hover:underline">Publicidad</RouterLink>
        </li>
        <li class="inline-block mx-2">
          <RouterLink :to="{ name: 'More' }" class="hover:underline">Más</RouterLink>
        </li>
        <li class="inline-block mx-2">
          © {{ new Date().getFullYear() }} Ollorente
        </li>
      </ul>
    </footer>

  </div>
</template>