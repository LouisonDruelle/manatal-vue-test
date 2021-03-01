<template>
  <div>
    <SectionTitle msg='Latest headlines'/>
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
import HeadlineCard from './HeadlineCard.vue';

export default {
  components: {
    SectionTitle,
    ErrorAlert,
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
      await this.$store.dispatch('getHeadlines');
    } catch (e) {
      this.error = e;
    }
    this.loading = false;
  },
};
</script>

<style scoped>

</style>
