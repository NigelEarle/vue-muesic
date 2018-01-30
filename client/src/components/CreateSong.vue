<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Tile"
          v-model="song.title"
        ></v-text-field>
        <v-text-field
          label="Artist"
          v-model="song.artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          v-model="song.genre"
        ></v-text-field>
        <v-text-field
          label="Album"
          v-model="song.album"
        ></v-text-field>
        <v-text-field
          label="Album Image URL"
          v-model="song.albumImageUrl"
        ></v-text-field>
        <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
          label="Tab"
          multi-line
          v-model="song.tab"
        ></v-text-field>
        <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics"
        ></v-text-field>
      </panel>
      <v-btn class="cyan"
        @click="create">
        Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/songs';

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
    };
  },
  components: {
    Panel,
  },
  methods: {
    async create() {
      try{
        const { data } = await SongsService.createSong(this.song);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>

</style>
