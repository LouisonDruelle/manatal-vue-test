<template>
  <div>
    <SectionTitle msg='Latest headlines'/>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(headline, index) in headlines" :key="index" >
        <HeadlineCard :headline="headline" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import HeadlineCard from './HeadlineCard.vue';

export default {
  components: {
    SectionTitle,
    HeadlineCard,
  },

  computed: {
    headlines() {
      return this.$store.state.headlines;
    },
  },

  mounted() {
    this.$store.dispatch('getHeadlines');
  },
};
</script>

<style scoped>

</style>
