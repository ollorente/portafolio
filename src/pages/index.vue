<script setup lang="ts">
import { DB } from "~/utils/db"
const { baseURL } = useRuntimeConfig()

const title = "Home"
const error = ref()
const isError = ref(false)
const isLoading = ref(true)
const items = ref<any[]>([])

const getItems = async () => {
  isLoading.value = true

  try {
    items.value = DB
  } catch (error: any) {
    isError.value = true
    error.vlaue = error
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getItems())
</script>

<template>

  <Head>
    <Title>{{ title }}</Title>

  </Head>

  <NuxtLayout>

    <h1 class="text-2xl font-semibold p-4">{{ title }}</h1>

    <LazyUIMain :error="error" :isError="isError" :isLoading="isLoading">
      <div class="flex flex-row">
        <div v-for="item in items" :key="item.id" class="w-1/3 p-2">
          <NuxtLink :to="`${baseURL}${item.slug}`" class="w-full">
            <img :src="item.thumbnail" :alt="item.title" class="w-full aspect-square object-cover rounded">
            <div class="py-2">{{ item.excerpt }}</div>
          </NuxtLink>
        </div>
      </div>
      <pre hidden>{{ items }}</pre>
    </LazyUIMain>

  </NuxtLayout>

</template>
