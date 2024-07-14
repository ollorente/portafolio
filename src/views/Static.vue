<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import UIMainPost from "@/components/UI/Main/Post.vue"
import usePost from "@/composables/usePost.js"

const { SearchOnePost } = usePost()
const route = useRoute()
const router = useRouter()
const title = ref("TITLE")
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const item = ref({})

const getItem = async () => {
  isLoading.value = true

  try {
    const data = await SearchOnePost(route.params.id)

    if (data === null) {
      await router.push({ name: 'NotFound' })
    }

    item.value = data
    title.value = data.title
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

watch(() => route.fullPath, () => getItem())
onMounted(() => getItem())
</script>

<template>
  <UIMainPost :title="title">

    <div v-if="item.mimeType" class="text-gray-900 dark:text-gray-100 p-4">{{ item.mimeType }}</div>

    <div v-if="item.content" class="text-gray-900 dark:text-gray-100 p-4" v-html="item.content"></div>

  </UIMainPost>
</template>
