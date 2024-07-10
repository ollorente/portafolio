<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
import UIMainHeader from '@/components/UI/Main/Header.vue'
import DefaultLayout from '@/layouts/Default.vue'
import useGraf from "@/composables/useGraf.js"

const route = useRoute()
useTailwindConfig()
const { GetOneGraf } = useGraf()
const ID = route.params.id
const title = "Proyecto"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const item = ref()

const getItem = async () => {
  isLoading.value = true

  try {
    const data = await GetOneGraf(ID)

    item.value = data
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getItem())
</script>

<template>
  <DefaultLayout class="">
    <UIMainHeader>
      <RouterLink :to="{ name: 'Projects' }" class="text-red-700 font-bold px-1">O</RouterLink>
      {{ title }}
    </UIMainHeader>

    <div class="">
      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-hite p-3">
        {{ item?.text }}
      </p>

      <!-- <div v-for="image in item.mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor">
        <img :src="image.url" class="w-full rounded-2xl" />
      </div> -->

    </div>

  </DefaultLayout>
</template>
