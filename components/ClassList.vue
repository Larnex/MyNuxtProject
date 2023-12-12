<template>
    <v-container>
      <v-data-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Class Name</th>
              <th class="text-left">Professor</th>
              <th class="text-left">Department</th>
              <th class="text-left">Classroom</th>
              <th class="text-left">Schedule</th>
              <th class="text-left">Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="classItem in classes" :key="classItem.id">
              <td>{{ classItem.className }}</td>
              <td>{{ classItem.professor }}</td>
              <td>{{ classItem.department }}</td>
              <td>{{ classItem.classroom }}</td>
              <td>{{ classItem.schedule }}</td>
              <td>{{ classItem.courseCredits }}</td>
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
        classes: [],
        isLoading: true,
        error: null
      };
    },
    mounted() {
      this.fetchClasses();
    },
    methods: {
      async fetchClasses() {
        try {
          const response = await axios.get('https://university.free.beeceptor.com/classes');
          this.classes = response.data;
        } catch (error) {
          this.error = error.toString();
        } finally {
          this.isLoading = false;
        }
      }
    }
  };
  </script>
  