<template>
  <v-layout>
    <v-flex xs6>
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/songs';
import SongsPanel from './SongsPanel';
import SongsSearchPanel from './SongsSearchPanel';
import SongsBookmarks from './SongsBookmarks';
import RecentlyViewedSongs from './RecentlyViewedSongs';


export default {
  data() {
    return {
      songs: null,
    };
  },
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs,
  },
  async mounted() {
    const { data } = await SongsService.fetchAllSongs();
    this.songs = data;
  },
};
</script>
<style scoped>

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}


</style>
