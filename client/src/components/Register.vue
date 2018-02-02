<template>
  <v-layout cloumns>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="vue-music-form" autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            name="password"
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <div class="danger-alert" v-html="err"/>
        <br>
        <v-btn class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>
<style scoped>
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
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({ name: 'songs' })
      } catch (err) {
        this.err = err.response.data;
      }
    },
  },
};
</script>
