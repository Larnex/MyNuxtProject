<template>
    <v-container>
      <v-data-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Avatar</th>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Album</th>
              <th class="text-left">Phone</th>
              <th class="text-left">Group</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
              <td><v-img :src="student.avatar" height="40" width="40" /></td>
              <td>{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.album }}</td>
              <td>{{ student.phone }}</td>
              <td>{{ student.group }}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        students: [],
        isLoading: true,
        error: null
      };
    },
    mounted() {
      this.fetchStudents();
    },
    methods: {
      async fetchStudents() {
        try {
    const response = await axios.get('https://65782652f08799dc80446105.mockapi.io/api/students');
    this.students = response.data;
  } catch (error) {
    this.error = error.toString();
  } finally {
    this.isLoading = false;
  }
      }
    }
  };
  </script>
  