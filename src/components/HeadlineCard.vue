<template>
  <div>
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
      <v-card
        class="mx-auto mb-6"
        max-width="800"
        @click="addHeadlineToHistory()"
      >
        <v-img
          height="200px"
          :src="headline.urlToImage"
        >
        </v-img>

        <v-card-subtitle class="pb-0">
          Number 10
        </v-card-subtitle>

        <v-card-text class="text--primary py-3">
          <div>{{ headline.title }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            Read more
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-lazy>
  </div>
</template>

<script>
export default {
  props: ['headline'],

  data: () => ({
    isActive: false,
  }),

  methods: {
    addHeadlineToHistory() {
      this.$store.dispatch('addHeadlineToHistory', {
        headline: this.headline,
      });
    },
  },
};
</script>
