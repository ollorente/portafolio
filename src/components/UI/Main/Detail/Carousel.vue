<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: [],
  }
})
</script>

<template>
  <div v-for="image in props.images" :key="image.id" class="w-full bg-gray-900 flex flex-row m-0"
    :class="twitterBorderColor">
    <div class="w-full h-full">
      <img :src="image.url" class="w-full aspect-square object-contain" />
    </div>
  </div>
</template>