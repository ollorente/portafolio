<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import UIMainPost from "@/components/UI/Main/Post.vue"
import UIGrafListFeed from "@/components/UI/Graf/ListFeed.vue"

const title = "Buscar"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const limit = ref(10)
const page = ref(0)
const items = ref([])

const getItems = async () => {
  isLoading.value = true

  try {
    const data = await []

    items.value = data
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

watch(() => useRoute().fullPath, () => getItems())
onMounted(() => getItems())
</script>

<template>
  <UIMainPost :title="title">

    <UIGrafListFeed :grafs="items" compact />

  </UIMainPost>
</template>
