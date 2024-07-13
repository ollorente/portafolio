<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import UIMainPost from "@/components/UI/Main/Post.vue"
import UIGrafListFeed from "@/components/UI/Graf/ListFeed.vue"
import useGraf from "@/composables/useGraf.js"

const { GetAllGrafs } = useGraf()
const route = useRoute()
const title = "Videos"
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

    items.value = data.map((e) => {
      return {
        ...e,
        url: { name: 'Video', params: { id: e.id } }
      }
    })
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
  <UIMainPost :title="title">

    <UIGrafListFeed :grafs="items" compact />

  </UIMainPost>
</template>
