<template>
  <div>
    <v-row>
    <template v-for="headline in headlines">
      <v-col v-if="filter(headline.source.name)" cols="12" sm="6" md="4" lg="3" :key="headline.url">
        <HeadlineCard :headline="headline" />
      </v-col>
    </template>
    </v-row>
  </div>
</template>

<script>
import HeadlineCard from './HeadlineCard.vue';

export default {
  props: ['headlines', 'selectedSources'],

  components: {
    HeadlineCard,
  },

  methods: {
    filter(source) {
      return this.selectedSources.filter((n) => n === source).length !== 0;
    },
  },
};
</script>

<style scoped>

</style>
