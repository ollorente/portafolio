<script setup>
import { computed, onMounted, ref } from "vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
import useLink from "@/composables/useLink.js"

const { twitterBorderColor } = useTailwindConfig()
const { GetAllLinks } = useLink()
const props = defineProps({
  post: {
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
const links = ref()

const getLinks = async () => {
  const data = await GetAllLinks(props.post.id, { limit: 1, page: 0 })
  links.value = data
}

const textSize = computed(() => props.compact ? "text-base" : "text-2xl")

onMounted(() => getLinks())
</script>

<template>
  <RouterLink :to="props.post.url">

    <div class="">

      <div v-for="image in links" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor">
        <img :src="image.url" class="w-full rounded-2xl aspect-video object-cover" />
      </div>

      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-gray-100 pe-3" :class="textSize">
        {{ props.post.excerpt }}
      </p>

    </div>

  </RouterLink>
</template>
