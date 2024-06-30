<script setup lang="ts"></script>

<template>
  <div class="w-full min-h-screen bg-gray-50 text-gray-900">

    <UIHeader></UIHeader>

    <div class="container mx-auto">
      <slot></slot>
    </div>

    <UIFooter></UIFooter>

  </div>
</template>
