<template>
  <div>
    <v-col cols="12" sm="6" md="5" lg="4" class="ml-auto">
      <v-text-field
        solo
        light
        dense
        hide-details
        v-model="keyword"
        @keydown="searchHeadlines"
        placeholder="Filter by content"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    keyword: '',
  }),
  methods: {
    async searchHeadlines() {
      try {
        await this.$store.dispatch('searchHeadlines', {
          keyword: this.keyword,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
