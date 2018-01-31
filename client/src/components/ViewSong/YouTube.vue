<template>
  <panel title="YouTube Video">
    {{youtubeId}}

    <youtube
      :video-id="youtubeId">
    </youtube>
  </panel>
</template>
<script>
import Panel from '@/components/Panel';

export default {
  props: [
    'youtubeId',
  ],
  components: {
    Panel,
  },
};
</script>
<style scoped>

</style>
