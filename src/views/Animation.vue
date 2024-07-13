<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import UIMainDetail from "@/components/UI/Main/Detail/index.vue"
import UIMainDetailCarousel from "@/components/UI/Main/Detail/Carousel.vue"
import UIMainDetailContent from "@/components/UI/Main/Detail/Content.vue"
import useGraf from "@/composables/useGraf.js"
import useMediaFile from "@/composables/useMediaFile.js"

const { GetOneGraf } = useGraf()
const { GetAllMediaFiles } = useMediaFile()
const route = useRoute()
const ID = route.params.id
const title = "Animación"
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

watch(() => route.fullPath, () => getItem())
onMounted(() => getItem())
</script>

<template>
  <UIMainDetail :back="{ name: 'Animations' }" :title="title">
    <div class="">

      <UIMainDetailCarousel :images="mediaFiles" />

      <UIMainDetailContent>
        {{ item?.text }}
      </UIMainDetailContent>

    </div>
  </UIMainDetail>
</template>
