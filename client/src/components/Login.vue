<template>
  <v-layout cloumns>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">

          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            name="password"
            label="Password"
            v-model="password"
          ></v-text-field>
          <div class="error" v-html="err"/>
          <br>
          <v-btn class="cyan"
            @click="login">
            Log in
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<style scoped>
  .error {
    color: red;
  }
</style>
<script>
import AuthService from '@/services/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      err: null,
    };
  },
  methods: {
    async login() {
      const { email, password } = this;
      try {
        const response = await AuthService.login({ email, password });
        console.log(response);
      } catch (err) {
        this.err = err.response.data.error;
      }
    },
  },
};
</script>
