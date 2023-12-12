<template>
    <v-app>
      <Navbar />
      <v-main>
        <NuxtPage />
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Navbar from '~/components/Navbar.vue';
  
  export default {
    components: {
      Navbar
    }
  };
  </script>
  