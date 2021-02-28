<template>
  <div>
    <SectionTitle msg='All our sources'/>
    <v-card max-width="800" class="mx-auto">
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>Sources</v-toolbar-title>
      </v-toolbar>

      <v-list three-line class="pa-0">
        <template v-for="(item, index) in sources">
          <SourceItem :key="index" :source="item"/>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import SourceItem from './SourceItem.vue';

export default {
  components: {
    SectionTitle,
    SourceItem,
  },

  computed: {
    sources() {
      return this.$store.state.sources;
    },
  },

  mounted() {
    this.$store.dispatch('getSources');
    console.log(this.$store.state.sources);
  },
};
</script>

<style scoped>

</style>
