<script setup lang="ts">
import { computed } from "vue"
import UIGrafItem from "@/components/UI/Graf/Item/index.vue"

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

const graf = computed(() => props.graf)
</script>

<template>
  <div class="">

    <UIGrafItem :graf="graf" />

    <!-- <UIGrafForm placeholder="Replica el grafo" :reply-to="props.graf" :user="props.user" @On-success="handleFormSuccess" /> -->

    <!-- <UIGrafListFeed :grafs="replies" /> -->

  </div>
</template>
