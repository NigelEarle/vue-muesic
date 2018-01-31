<template>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"/>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>
    <!-- <v-flex xs6 class="ml-2">
      <panel title="Lyrics">
        <textarea
        readonly
        v-model="song.lyrics"
        >
        </textarea>
      </panel>
    </v-flex> -->
</template>
<script>
import SongsService from '@/services/songs';
import Panel from '@/components/Panel';
import SongMetadata from './SongMetadata';
import YouTube from './YouTube';


export default {
  data() {
    return {
      song: null,
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    const { data: [song] } = await SongsService.fetchSong(songId);
    this.song = song;
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style:none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}

</style>
