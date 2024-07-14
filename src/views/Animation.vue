<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import UIMainDetail from "@/components/UI/Main/Detail/index.vue"
import UIMainDetailContent from "@/components/UI/Main/Detail/Content.vue"
import usePost from "@/composables/usePost.js"

const { GetOnePost } = usePost()
const route = useRoute()
const ID = route.params.id
const title = "Animación"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const item = ref()

const getItem = async () => {
  isLoading.value = true

  try {
    const data = await GetOnePost(ID)

    item.value = data
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
  <UIMainDetail :back="{ name: 'Animations' }" :title="title">
    <div class="">

      <UIMainDetailContent>
        <h1 v-if="item?.title" class="text-2xl font-semibold">{{ item?.title }}</h1>
        <div v-html="item?.content"></div>
      </UIMainDetailContent>

    </div>
  </UIMainDetail>
</template>
