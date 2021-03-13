<template>
  <div class="home pa-8">
    <PresentationCard />
    <SectionTitle msg='Latest headlines'/>
    <SearchBar />
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
    <FilteredHeadlineList
      v-if="selectedSources.length > 0"
      :headlines="headlines"
      :selectedSources="selectedSources"
    />
    <HeadlineList v-else :headlines="headlines"/>
  </div>
</template>

<script>
import PresentationCard from '@/components/PresentationCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SearchBar from '@/components/SearchBar.vue';
import HeadlineList from '@/components/headline/HeadlineList.vue';
import FilteredHeadlineList from '@/components/headline/FilteredHeadlineList.vue';
import ErrorAlert from '@/components/ErrorAlert.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'Home',
  components: {
    PresentationCard,
    SectionTitle,
    SearchBar,
    HeadlineList,
    FilteredHeadlineList,
    ErrorAlert,
    Spinner,
  },
  data() {
    return {
      selectedSources: [],
      loading: false,
      error: '',
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
};
</script>
