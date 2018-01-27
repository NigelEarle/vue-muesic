<template>
  <v-layout cloumns>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div
          v-for="song in songs"
          :key="song.title">
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
  components: {
    Panel,
  },
  async mounted() {
    this.songs = await SongsService.fetchAllSongs();
  },
};
</script>
<style scoped></style>
