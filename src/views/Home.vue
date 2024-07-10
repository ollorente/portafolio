<script setup>
import { onMounted, ref } from "vue"
import UIMainHeader from '@/components/UI/Main/Header.vue'
import UIGrafListFeed from "@/components/UI/Graf/ListFeed.vue"
import DefaultLayout from '@/layouts/Default.vue'
import useGraf from "@/composables/useGraf.js"

const { GetAllGrafs } = useGraf()
const title = "Home"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const limit = ref(10)
const page = ref(0)
const items = ref([])

const getItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllGrafs({ limit: limit.value, page: page.value })

    items.value = data
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
  <DefaultLayout class="">
    <UIMainHeader>{{ title }}</UIMainHeader>

    <UIGrafListFeed :grafs="items" />

  </DefaultLayout>
</template>
