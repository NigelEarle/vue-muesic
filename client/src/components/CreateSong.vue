<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Tile"
          :rules="[value => !!value || 'Required']"
          required
          v-model="song.title"
        ></v-text-field>
        <v-text-field
          label="Artist"
          :rules="[value => !!value || 'Required']"
          required
          v-model="song.artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          :rules="[value => !!value || 'Required']"
          required
          v-model="song.genre"
        ></v-text-field>
        <v-text-field
          label="Album"
          :rules="[value => !!value || 'Required']"
          required
          v-model="song.album"
        ></v-text-field>
        <v-text-field
          label="Album Image URL"
          :rules="[value => !!value || 'Required']"
          required
          v-model="song.albumImageUrl"
        ></v-text-field>
        <v-text-field
          label="YouTube ID"
          :rules="[value => !!value || 'Required']"
          required
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
          label="Tab"
          multi-line
          :rules="[value => !!value || 'Required']"
          required
          v-model="song.tab"
        ></v-text-field>
        <v-text-field
          label="Lyrics"
          multi-line
          :rules="[value => !!value || 'Required']"
          required
          v-model="song.lyrics"
        ></v-text-field>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn class="cyan"
        @click="create">
        Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
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
      error: null,
    };
  },
  methods: {
    async create() {
      const fieldValidation = Object.keys(this.song)
        .every(key => !!this.song[key]);

      if (!fieldValidation) {
        this.error = 'Please fill in all fields';
        return;
      }
      try {
        await SongsService.createSong(this.song);
        this.$router.push({
          name: 'songs',
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>

</style>
