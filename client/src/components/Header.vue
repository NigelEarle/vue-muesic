<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'home'})">
        Vue Muesic
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn @click="navigateTo({name: 'login'})" flat dark>
        Login
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn @click="navigateTo({name: 'register'})" flat dark>
        Sign Up
      </v-btn>
    </v-toolbar-items>
   </v-toolbar>
</template>
<style scoped>
</style>
<script>

export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
  .home {
    cursor: pointer;
  }

  .home:hover {
    color: lightblue;
  }
</style>
