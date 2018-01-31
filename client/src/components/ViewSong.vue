<template>
  <panel title="Song Metadata">
    {{song}}
  </panel>
</template>
<script>
import SongsService from '@/services/songs';
import Panel from '@/components/Panel';
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
  },
};
</script>

<style scoped>

</style>
