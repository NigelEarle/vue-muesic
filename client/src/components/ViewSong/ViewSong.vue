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
import { mapState } from 'vuex';
import SongsService from '@/services/songs';
import SongHistoryService from '@/services/history';
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
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route',
    ]),
  },
  async mounted() {
    const songId = this.route.params.songId;
    const { data: [song] } = await SongsService.fetchSong(songId);
    this.song = song;

    if (this.isUserLoggedIn) {
      await SongHistoryService.postSong({
        songId,
        userId: this.user.id,
      });
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab,
  },
};
</script>

<style scoped>

</style>
