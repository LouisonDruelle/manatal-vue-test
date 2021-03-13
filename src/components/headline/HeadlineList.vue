<template>
  <div>
    <v-row >
      <v-col v-for="headline in headlines" cols="12" sm="6" md="4" lg="3" :key="headline.url">
        <HeadlineCard :headline="headline" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeadlineCard from './HeadlineCard.vue';

export default {
  props: ['headlines'],

  components: {
    HeadlineCard,
  },
};
</script>

<style scoped>

</style>
