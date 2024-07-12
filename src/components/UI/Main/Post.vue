<script setup>
import UIMainHeader from "@/components/UI/Main/Header.vue"
import DefaultLayout from "@/layouts/Default.vue"

const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <DefaultLayout class="">

    <UIMainHeader>{{ props.title }}</UIMainHeader>

    <slot></slot>

  </DefaultLayout>
</template>