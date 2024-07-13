<script setup>
import { computed } from "vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
import UIGrafItem from "@/components/UI/Graf/Item/index.vue"

const { defaultTransition, twitterBorderColor } = useTailwindConfig()
const props = defineProps({
  grafs: {
    type: Array,
    required: true,
  }
})

const isEmptyArray = computed(() => props.grafs.length === 0)

function redirect(graf) {
  // navigateTo(`/status/${graf.id}`)
}
</script>

<template>
  <div class="transition">

    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500" :class="defaultTransition">No hay publicaciones 😢</p>
    </div>

    <div v-else v-for="graf in props.grafs" :key="graf?.id"
      class="p-4 border-b hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer dark:hover:bg-dim-300"
      :class="[defaultTransition, twitterBorderColor]" @click.navigate="redirect(graf)">
      <UIGrafItem :graf="graf" compact />
    </div>

  </div>
</template>
