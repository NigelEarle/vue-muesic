<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
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
    <button
      @click="register">
      Register
    </button>

  </div>
</template>

<script>
import AuthService from '@/services/auth';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      const { email, password } = this;
      try {
        const response = await AuthService.register({ email, password });
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
