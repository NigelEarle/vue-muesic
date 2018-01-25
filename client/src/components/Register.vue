<template>

  <v-layout cloumns>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input
            type="text"
            name="email"
            v-model="email"
            placeholder="Email">
          <br>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password">
          <br>
          <div class="error" v-html="err"/>
          <br>
          <v-btn class="cyan"
            @click="register">
            Register
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
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      err: null,
    };
  },
  methods: {
    async register() {
      const { email, password } = this;
      try {
        const response = await AuthService.register({ email, password });
        console.log(response);
      } catch (err) {
        this.err = err.response.data.error;
      }
    },
  },
};
</script>
