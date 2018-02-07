<template>
  <panel title="bookmarks">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{ props.item.title }}
        </td>
        <td class="text-xs-right">
          {{ props.item.artist }}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>
<script>
import { mapState } from 'vuex';
import BookmarksService from '@/services/bookmarks';

export default {
  data() {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Artist',
          value: 'artist',
        },
      ],
      pagination: {
        sortBy: 'date',
        descending: true,
      },
      bookmarks: [
        {
          title: 'Hello world',
          artist: 'testing',
        },
        {
          title: 'Artist',
          artist: 'artist',
        },
      ],
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      const { data } = await BookmarksService.fetchBookmarks({
        userId: this.user.id,
      });

      this.bookmarks = data;
    }
  },
};
</script>
<style scoped>

</style>
