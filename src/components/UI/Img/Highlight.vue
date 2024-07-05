<script setup lang="ts">
defineProps(["item"])
</script>

<template>
  <RouterLink :to="{ name: 'Proyect', params: { id: item.slug } }" class="text-center">
    <img :src="item.image" alt="Soporte" class="w-[77px] aspect-square rounded-full border-[3px]">
    <p>
      item.tilte
    </p>
  </RouterLink>
</template>
