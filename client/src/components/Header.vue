<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <router-link
        class="songs"
        tab="span"
        :to="{name: 'songs'}">
        Vue Muesic
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        :to="{name: 'songs'}"
        flat
        dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        :to="{name: 'login'}"
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark>
        Login
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn
        :to="{name: 'register'}"
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark>
        Sign Up
      </v-btn>
      <v-btn
        @click="logout"
        v-if="$store.state.isUserLoggedIn"
        flat
        dark>
        Log Out
      </v-btn>
    </v-toolbar-items>
   </v-toolbar>
</template>
<style scoped>
</style>
<script>

export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'songs',
      });
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
