<template>
  <panel title="Song Metadata">
    <v-text-field
      label="Tile"
      v-model="title"
    ></v-text-field>
    <v-text-field
      label="Artist"
      v-model="artist"
    ></v-text-field>
    <v-text-field
      label="Genre"
      v-model="genre"
    ></v-text-field>
    <v-text-field
      label="Album"
      v-model="album"
    ></v-text-field>
    <v-text-field
      label="Album Image URL"
      v-model="albumImageUrl"
    ></v-text-field>
    <v-text-field
      label="YouTube ID"
      v-model="youtubeId"
    ></v-text-field>
    <v-text-field
      label="Lyrics"
      v-model="lyrics"
    ></v-text-field>
    <v-text-field
      label="Tab"
      v-model="tab"
    ></v-text-field>
  </panel>
</template>
<script>
import Panel from '@/components/Panel';

export default {
  data() {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null,
    };
  },
  components: {
    Panel,
  },
};
</script>
<style scoped>

</style>
