<script setup lang="ts">
import { computed } from "vue"

const props = defineProps({
  graf: {
    type: Object,
    required: true
  }
})

const author = props.graf.userId
const replyToGrafYrl = computed(() => {
  return { name: 'Project', params: { id: props.graf?.id } }
})
</script>

<template>
  <div class="flex p-4">

    <div class="">
      <img :src="author?.logo" alt="" class="w-10 h-10 rounded-full" />
    </div>

    <div class="ml-3">
      <span class="font-medium text-gray-800 dark:text-white">{{ author?.name }}</span>

      <span class="ml-3 text-sm font-medium text-gray-400">
        <RouterLink :to="`/${author?.username}`">
          {{ author?.handle }}
        </RouterLink>
        . {{ props.graf?.posttedAtHuman }}
      </span>

      <p v-if="props.graf.replyTo" class="text-sm">
        <span clsaa="text-gray-500">
          Regrafitear
        </span>

        <RouterLink :to="replyToGrafYrl" class="text.blue-400">
          {{ props.graf.replyTo.author.handle }}
        </RouterLink>
      </p>
    </div>

  </div>
</template>
