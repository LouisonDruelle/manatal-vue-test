<template>
  <div>
    <SectionTitle msg='Latest headlines'/>
    <Spinner v-if="loading && headlines.length == 0"/>
    <ErrorAlert v-if="error" :error="error"/>
    <v-row v-else>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(headline, index) in headlines" :key="index" >
        <HeadlineCard :headline="headline" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue';
import ErrorAlert from '../ErrorAlert.vue';
import Spinner from '../Spinner.vue';
import HeadlineCard from './HeadlineCard.vue';

export default {
  components: {
    SectionTitle,
    ErrorAlert,
    Spinner,
    HeadlineCard,
  },

  data() {
    return {
      loading: false,
      error: '',
    };
  },
  computed: {
    headlines() {
      return this.$store.state.headlines;
    },
  },

  async mounted() {
    this.loading = true;
    this.error = '';
    try {
      await setTimeout(() => {
        this.$store.dispatch('getHeadlines');
        this.loading = false;
      }, 3000);
    } catch (e) {
      this.error = e;
    }
  },
};
</script>

<style scoped>

</style>
