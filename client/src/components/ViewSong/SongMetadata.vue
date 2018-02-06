<template>
  <panel title="Song Metadata">
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
        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit',
            params: {
              songId: song.id
            }
          }">
          Edit
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn && !isBookmarked"
          dark
          class="cyan"
          @click="bookmark">
          Bookmark
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn && isBookmarked"
          dark
          class="cyan"
          @click="unbookmark">
          Unbookmark
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img :src="song.albumImageUrl" alt="" class="album-image">
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>
<script>
import { mapState } from 'vuex';
import BookmarkService from '@/services/bookmarks';

export default {
  props: [
    'song',
  ],
  data() {
    return {
      isBookmarked: false,
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
    ]),
  },
  async mounted() {
    if (!this.isUserLoggedIn) {
      return;
    }

    try {
      const { data } = await BookmarkService.fetchBookmarks({
        songId: this.song.id,
        userId: this.$store.state.user.id,
      });
      this.isBookmarked = data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async bookmark() {
      try {
        await BookmarkService.postBookmark({
          songId: this.song.id,
          userId: this.$store.state.user.id,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async unbookmark() {
      try {
        await BookmarkService.deleteBookmark({
          songId: this.song.id,
          userId: this.$store.state.user.id,
        });
      } catch (err) {
        console.log(err);
      }
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
