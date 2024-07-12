<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import UIMainPost from "@/components/UI/Main/Post.vue"

const route = useRoute()
const ID = route.params.id
const title = ref("TITLE")
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const item = ref()

const getItem = async () => {
  isLoading.value = true

  try {
    const data = await {}

    item.value = data
    title.value = route.fullPath
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
  </UIMainPost>
</template>
