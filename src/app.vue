<script setup></script>

<template>
  <div class="container mx-auto">
    <div class="text-center p-4 flex flex-row items-center gap-2">
      <router-link :to="{ name: 'Home' }" class="text-xl">Home</router-link> |
      <router-link :to="{ name: 'Projects' }" class="text-xl">Proyectos</router-link> |
      <router-link :to="{ name: 'Contact' }" class="text-xl">Contacto</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>
