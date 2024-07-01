<script setup></script>

<template>
  <div class="container mx-auto">
    <div class="text-center p-4">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Projects' }">Proyectos</router-link> |
      <router-link :to="{ name: 'Contact' }">Contacto</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>
