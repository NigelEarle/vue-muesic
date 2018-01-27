<template>
  <v-layout cloumns>
    <v-flex xs6 offset-xs3>
      <panel/>
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from '@/components/Panel';

export default {
  components: {
    Panel,
  },
};
</script>
<style scoped></style>
