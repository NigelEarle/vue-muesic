<template>
  <v-layout cloumns>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <v-text-field
          name="password"
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
        <div class="error" v-html="err"/>
        <br>
        <v-btn class="cyan"
          @click="login">
          Log in
        </v-btn>
      </panel>
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
import Panel from '@/components/Panel';

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
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (err) {
        this.err = err.response.data.error;
      }
    },
  },
  components: {
    Panel
  }
};
</script>
