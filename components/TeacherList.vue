<template>
    <v-container>
      <v-data-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Avatar</th>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Course</th>
              <th class="text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="teacher in teachers" :key="teacher.id">
              <td><v-img :src="teacher.avatar" height="40" width="40" /></td>
              <td>{{ teacher.name }}</td>
              <td>{{ teacher.email }}</td>
              <td>{{ teacher.course }}</td>
              <td>{{ teacher.phone }}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script lang="ts">
  import axios from 'axios';
  
  export default {
    data() {
      return {
        teachers: [],
        isLoading: true,
        error: null
      };
    },
    mounted() {
      this.fetchTeachers();
    },
    methods: {
      async fetchTeachers() {
        try {
          const response = await axios.get('https://65782652f08799dc80446105.mockapi.io/api/teachers');
          this.teachers = response.data;
        } catch (error) {
          this.error = error.toString();
        } finally {
          this.isLoading = false;
        }
      }
    }
  };
  </script>
  