<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/outline"
import UIMainHeader from "@/components/UI/Main/Header.vue"
import DefaultLayout from "@/layouts/Default.vue"

const props = defineProps({
  back: {
    type: String,
    required: true,
  },
  graf: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <DefaultLayout class="">

    <UIMainHeader>
      <RouterLink :to="props.back" class="text-red-700 font-bold px-1">
        <ArrowLeftIcon class="w-8 h-8 m-0 p-0" />
      </RouterLink>
      {{ props.title }}
    </UIMainHeader>

    <slot></slot>

  </DefaultLayout>
</template>
