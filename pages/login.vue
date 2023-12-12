<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field
                v-model="email"
          label="Email"
          type="email"
          required
                ></v-text-field>
                <v-btn color="primary" type="submit">Login</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      login() {
        if (process.client) {
        window.localStorage.setItem("userEmail", this.email);
        this.$router.push("/students").catch(err => {
          console.error(err);
        });
      }
      this.$router.push("/students");

      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling for your login page here */
  </style>
  