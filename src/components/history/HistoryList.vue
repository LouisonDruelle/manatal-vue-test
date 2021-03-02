<template>
  <div>
    <v-card max-width="800" class="mx-auto">
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>History</v-toolbar-title>
      </v-toolbar>

      <v-list three-line class="pa-0">
        <template v-for="(item, index) in history">
          <HistoryItem :key="index" :headline="item.headline"/>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import HistoryItem from './HistoryItem.vue';

export default {
  components: {
    HistoryItem,
  },

  computed: {
    history() {
      return this.$store.state.history;
    },
  },
};
</script>

<style scoped>

</style>
