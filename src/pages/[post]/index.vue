<script setup lang="ts">
import { DB } from "~/utils/db"

const ID = String(useRoute().params.post)
const title = ref("Post")
const error = ref()
const isError = ref(false)
const isLoading = ref(true)
const item = ref<any>({})

const getItem = async () => {
  isLoading.value = true

  try {
    item.value = DB.find((e) => e.slug === ID)
    title.value = item.value.title
  } catch (error: any) {
    isError.value = true
    error.vlaue = error
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getItem())
</script>

<template>

  <Head>
    <Title>{{ title }}</Title>

  </Head>

  <NuxtLayout>

    <h1 class="text-2xl font-semibold p-4">{{ title }}</h1>

    <LazyUIMain :error="error" :isError="isError" :isLoading="isLoading">
      <img :src="item.image" :alt="item.title" class="w-full aspect-video object-cover rounded">
      <div class="py-2">{{ new Date(item.createdAt).toLocaleString('es-CO', { day: "numeric", month: "short", year: "numeric"}) }}</div>
      <div class="py-2">{{ item.content }}</div>

      <pre hidden>{{ item }}</pre>
    </LazyUIMain>

  </NuxtLayout>

</template>
