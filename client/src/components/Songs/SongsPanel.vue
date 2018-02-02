<template>
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
      class="song"
      v-for="song in songs"
      :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
        </v-flex>
        <v-flex xs6>
          <img :src="song.albumImageUrl" alt="" class="album-image">
        </v-flex>

        <v-btn class="cyan"
          @click="navigateTo({
            name: 'song',
            params: {
              songId: song.id
            }
          })">
          View
        </v-btn>
      </v-layout>
    </div>
  </panel>

</template>
<script>
import SongsService from '@/services/songs';

export default {
  data() {
    return {
      songs: null,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  async mounted() {
    const { data } = await SongsService.fetchAllSongs();
    this.songs = data;
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        try {
          const { data } = await SongsService.fetchAllSongs(value);
          this.songs = data;
        } catch (err) {
          console.log(err);
        }
      },
    },
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
