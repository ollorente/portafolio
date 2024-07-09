<script setup lang="ts">
defineProps(["graf"])
</script>

<template>
  <div class="w-full hover:bg-gray-100 border-b px-3">
    <RouterLink :to="`/${graf?.user?.username}/grafs/${graf.id}`" class="flex flex-row py-3">
      <div class="w-12">
        <RouterLink :to="`/${graf?.user?.username}`"><img
            :src="graf?.user?.logo ? graf?.user?.logo : 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'"
            :alt="graf?.user?.username" class="w-10 h-10 rounded-full object-cover"></RouterLink>
      </div>
      <div class="w-full px-2">
        <div class="w-full"><span class="font-bold">{{ graf?.user?.title }}</span>
          <RouterLink :to="`/${graf?.user?.username}`" class="text-blue-700 font-semibold">@{{ graf?.user?.username }}
          </RouterLink> · {{
      graf?.createdAt?.split('T')[0] }}
        </div>
        <div v-if="graf.content" class="w-full">{{ graf.content }}</div>
        <div v-if="graf.image || graf.video" class="w-full">
          <img v-if="graf.image" :src="graf.image ?? ''" class="w-full aspect-video object-cover rounded-lg my-3">
        </div>
        <div class="w-full flex flex-row justify-between items-center">
          <div class="text-sm text-gray-400 p-3">{{ graf.regrafs }}</div>
          <div class="text-sm text-gray-400 p-3">{{ graf.likes }}</div>
          <div class="text-sm text-gray-400 p-3">{{ graf.comments }}</div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
