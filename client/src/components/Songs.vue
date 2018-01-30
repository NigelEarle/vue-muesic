<template>
  <v-layout cloumns>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          @click="navigateTo({name: 'songs-create'})"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div
          v-for="song in songs"
          :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/songs';
import Panel from '@/components/Panel';

export default {
  data() {
    return {
      songs: null,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  components: {
    Panel,
  },
  async mounted() {
    const { data } = await SongsService.fetchAllSongs();
    this.songs = data;
  },
};
</script>
<style scoped></style>
