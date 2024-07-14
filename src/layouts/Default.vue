<script setup>
import { ref } from "vue"
import UISidebarLeft from "@/components/UI/Sidebar/Left/index.vue"
import UISidebarRight from "@/components/UI/Sidebar/Right/index.vue"

const user = ref({})
</script>

<template>
  <div class="bg-white dark:bg-gray-950 min-h-screen">

    <div class="min-h-full">

      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

        <!-- Left sidebar -->
        <div class="hidden md:block xs-col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <UISidebarLeft :user="user" />
          </div>
        </div>

        <!-- MainContent -->
        <main class="col-span-12 md:col-span-8 xl:col-span-6 border-l border-r">
          <slot></slot>
        </main>

        <!-- Right sidebar -->
        <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
          <div class="sticky top-0">
            <UISidebarRight />
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
