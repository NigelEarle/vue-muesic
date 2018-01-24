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
    <button>Register</button>

  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: 'abc',
      password: '123',
    };
  },
  watch: {
    email(value) {

    },
    password(value) {
    },
  },
  mounted() {
    setTimeout(() => {
      this.email = 'bound to input';
    }, 2000);
  },
};
</script>
