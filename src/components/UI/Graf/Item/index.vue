<script setup>
import { computed, onMounted, ref } from "vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
import useMediaFile from "@/composables/useMediaFile.js"

const { twitterBorderColor } = useTailwindConfig()
const { GetAllMediaFiles } = useMediaFile()
const props = defineProps({
  graf: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  hideActions: {
    type: Boolean,
    default: false
  }
})
const mediaFiles = ref()

const getMediaFiles = async () => {
  const data = await GetAllMediaFiles(props.graf.id, { limit: 1, page: 0 })
  mediaFiles.value = data
}

const textSize = computed(() => props.compact ? "text-base" : "text-2xl")

onMounted(() => getMediaFiles())
</script>

<template>
  <RouterLink :to="{ name: 'Project', params: { id: props.graf.id } }">

    <div class="">

      <div v-for="image in mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor">
        <img :src="image.url" class="w-full rounded-2xl aspect-video object-cover" />
      </div>

      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-hite pe-3" :class="textSize">
        {{ props.graf.text }}
      </p>

    </div>

  </RouterLink>
</template>
