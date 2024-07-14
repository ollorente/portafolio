<script setup>
import { computed } from "vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
import UIPostItem from "@/components/UI/Post/Item/index.vue"

const { defaultTransition, twitterBorderColor } = useTailwindConfig()
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  }
})

const isEmptyArray = computed(() => props?.posts?.length === 0)

function redirect(graf) {
  // navigateTo(`/status/${graf.id}`)
}
</script>

<template>
  <div class="transition">

    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500" :class="defaultTransition">No hay publicaciones 😢</p>
    </div>

    <div v-else v-for="post in props.posts" :key="post?.id"
      class="p-4 border-b hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer dark:hover:bg-dim-300"
      :class="[defaultTransition, twitterBorderColor]" @click.navigate="redirect(post)">
      <UIPostItem :post="post" compact />
    </div>

  </div>
</template>
