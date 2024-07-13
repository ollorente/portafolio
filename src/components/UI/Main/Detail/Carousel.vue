<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: [],
  }
})
</script>

<template>
  <div v-for="image in props.images" :key="image.id" class="w-full bg-gray-950 aspect-square flex flex-row m-0"
    :class="twitterBorderColor">
    <div class="w-full h-full">
      <img :src="image.url" class="w-full aspect-square object-contain rounded-2xl" />
    </div>
  </div>
</template>