<template>
  <div>
    <v-col cols="12" sm="6" md="5" lg="4" class="ml-auto">
    <v-select
      chips
      v-model="selectedSources"
      :items="sources"
      multiple
      clearable
      placeholder="Filter by sources"
    ></v-select>
    </v-col>
    <Spinner v-if="loading && headlines.length == 0"/>
    <ErrorAlert v-if="error" :error="error"/>
    <v-row v-else-if="selectedSources.length > 0">
    <template v-for="headline in headlines">
      <v-col v-if="filter(headline.source.name)" cols="12" sm="6" md="4" lg="3" :key="headline.url">
        <HeadlineCard :headline="headline" />
      </v-col>
    </template>
    </v-row>
    <v-row v-else>
    <template v-for="headline in headlines">
      <v-col cols="12" sm="6" md="4" lg="3" :key="headline.url">
        <HeadlineCard :headline="headline" />
      </v-col>
    </template>
    </v-row>
  </div>
</template>

<script>
import ErrorAlert from '../ErrorAlert.vue';
import Spinner from '../Spinner.vue';
import HeadlineCard from './HeadlineCard.vue';

export default {
  components: {
    ErrorAlert,
    Spinner,
    HeadlineCard,
  },

  data() {
    return {
      loading: false,
      error: '',
      selectedSources: [],
    };
  },
  computed: {
    headlines() {
      return this.$store.state.headline.headlines;
    },
    sources() {
      return this.$store.state.source.sources;
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

  methods: {
    filter(source) {
      return this.selectedSources.filter((n) => n === source).length !== 0;
    },
  },
};
</script>

<style scoped>

</style>
