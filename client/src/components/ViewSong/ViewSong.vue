<template>
  <div>

    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2 mt-2">
        <lyrics :song="song"/>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import SongsService from '@/services/songs';
import Panel from '@/components/Panel';
import SongMetadata from './SongMetadata';
import YouTube from './YouTube';
import Lyrics from './Lyrics';
import Tab from './Tab';

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
    Lyrics,
    Tab,
  },
};
</script>

<style scoped>

</style>
