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
          v-if="$store.state.isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Set as Bookmark
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
          Unset as Bookmark
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
      bookmark: null,
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
      const { data: [bookmark] } = await BookmarkService.fetchBookmarks({
        songId: this.song.id,
        userId: this.$store.state.user.id,
      });

      this.bookmark = bookmark;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async setAsBookmark() {
      try {
        const { data: [bookmark] } = await BookmarkService.postBookmark({
          songId: this.song.id,
          userId: this.$store.state.user.id,
        });
        this.bookmark = bookmark;
      } catch (err) {
        console.log(err);
      }
    },
    async unsetAsBookmark() {
      try {
        await BookmarkService.deleteBookmark(this.bookmark.id);
        this.bookmark = null;
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
