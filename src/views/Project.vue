<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import UIMainDetail from "@/components/UI/Main/Detail/index.vue"
import UIMainDetailContent from "@/components/UI/Main/Detail/Content.vue"
import useGraf from "@/composables/useGraf.js"
import useMediaFile from "@/composables/useMediaFile.js"
import useTailwindConfig from "@/composables/useTailwindConfig.js"

const route = useRoute()
const { twitterBorderColor } = useTailwindConfig()
const { GetOneGraf } = useGraf()
const { GetAllMediaFiles } = useMediaFile()
const ID = route.params.id
const title = "Proyecto"
const Error = ref()
const isError = ref(false)
const isLoading = ref(true)
const limit = ref(10)
const page = ref(0)
const item = ref()
const mediaFiles = ref()

const getItem = async () => {
  isLoading.value = true

  try {
    const data = await GetOneGraf(ID)

    item.value = data
    await getMediaFiles()
  } catch (error) {
    isError.value = true
    Error.value = error
  } finally {
    isLoading.value = false
  }
}

const getMediaFiles = async () => {
  const data = await GetAllMediaFiles(ID, { limit: limit.value, page: page.value })
  mediaFiles.value = data
}

watch(() => useRoute().fullPath, () => getItem())
onMounted(() => getItem())
</script>

<template>
  <UIMainDetail :back="{ name: 'Projects' }" :title="title">
    <div class="">

      <div v-for="image in mediaFiles" :key="image.id" class="flex mt-4 mx-4 border-2 rounded-2xl"
        :class="twitterBorderColor">
        <img :src="image.url" class="w-full rounded-2xl" />
      </div>

      <UIMainDetailContent>
        {{ item?.text }}
      </UIMainDetailContent>

    </div>
  </UIMainDetail>
</template>
@/components/UI/Main/Detail/Detail.vue