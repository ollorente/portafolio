<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import UIMainPost from "@/components/UI/Main/Post.vue"
import UIPostListFeed from "@/components/UI/Post/ListFeed.vue"
import usePost from "@/composables/usePost.js"

const { GetAllPosts } = usePost()
const route = useRoute()
const title = "Home"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const limit = ref(20)
const page = ref(0)
const items = ref()

const getItems = async () => {
  isLoading.value = true

  try {
    const data = await GetAllPosts({ limit: limit.value, page: page.value })

    items.value = data.map((e) => {
      return {
        ...e,
        url: `/${e.type}/${e.id}`
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
