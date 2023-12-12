<template>
    <v-app-bar app dark v-if="!isLoginRoute">
      <v-toolbar-title>Hi, {{ userEmail }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/students">Students</v-btn>
      <v-btn text to="/teachers">Teachers</v-btn>
      <v-btn text to="/classes">Classes</v-btn>
      <v-btn text @click="logout" color="error">Logout</v-btn>

    </v-app-bar>
  </template>
  
  <script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();

  let userEmail;

  if (process.client) {
    userEmail = window.localStorage.getItem('userEmail')
  }

  const isLoginRoute = computed(() => route.path === '/login');

  const logout = () => {
    try {
    if (process.client) {
      window.localStorage.removeItem('userEmail');
      router.push('/login');
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
  </script>
  