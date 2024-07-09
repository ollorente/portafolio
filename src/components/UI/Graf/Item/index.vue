<script setup lang="ts">
import { computed } from "vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
import UIGrafItemHeader from "@/components/UI/Graf/Item/Header.vue"

const { twitterBorderColor } = useTailwindConfig()
// const emitter = useEmitter()
const props = defineProps({
  graf: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  hideActions : {
    type: Boolean,
    default: false
  }
})

const grafBodyWapper = computed(() => props.compact ? "ml-16" : "ml-2 mt-4")

const textSize = computed(() => props.compact ? "text-base" : "text-2xl")

function handleCommentClick() {
  // emitter.$emit("replyGraf", props.graf)
}
</script>

<template>
  <div>

    <UIGrafItemHeader :graf="props.graf" />

    <div :class="grafBodyWapper">
      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-hite" :class="textSize">
        {{ props.graf.text }}
      </p>

      <div v-for="image in props.graf.mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor">
        <img :src="image.url" class="w-full rounded-2xl" />
      </div>

      <div class="mt-2" v-if="!$props.hideActions">
        <GrafItemActions :graf="props.graf" :compact="props.compact" @onCommentClick="handleCommentClick" />
      </div>

    </div>

  </div>
</template>
