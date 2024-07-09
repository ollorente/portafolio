<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
  graf: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  },
})

async function handleFormSuccess(graf: any) {
  // await navigateTo(`/status/${graf.id}`)
}

 const replies = computed(() => props.graf?.replies || [])
</script>

<template>
  <div class="">
    
    <GrafItem :graf="props.graf" />

    <GrafForm placeholder="Replica el grafo" :reply-to="props.graf" :user="props.user" @On-success="handleFormSuccess" />

    <GrafListFeed :grafs="replies" />

  </div>
</template>
