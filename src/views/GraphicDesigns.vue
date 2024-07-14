<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import UIMainPost from "@/components/UI/Main/Post.vue"
import UIPostListFeed from "@/components/UI/Post/ListFeed.vue"
import usePost from "@/composables/usePost.js"

const { SearchAllPosts } = usePost()
const route = useRoute()
const title = "Diseños Gráficos"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const limit = ref(10)
const page = ref(0)
const items = ref()

const getItems = async () => {
  isLoading.value = true

  try {
    const data = await SearchAllPosts(route.path.split("/")[1], { limit: limit.value, page: page.value })

    items.value = data.map((e) => {
      return {
        ...e,
        url: { name: 'GraphicDesign', params: { id: e.id } }
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

    <UIPostListFeed :posts="items" compact />

  </UIMainPost>
</template>
