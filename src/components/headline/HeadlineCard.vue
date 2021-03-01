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
      >
        <v-img
          v-if="headline.urlToImage"
          height="200px"
          :src="headline.urlToImage"
        >
        </v-img>

        <v-img
          v-else
          height="200px"
          src="https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        >
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ headline.publishedAt | date }}
        </v-card-subtitle>

        <v-card-text class="text--primary py-3">
          <div>{{ headline.title }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="editTitle()"
            color="purple"
            text
          >
            Edit title
          </v-btn>
          <v-btn
            @click="getHeadlineDetails()"
            color="purple"
            text
          >
            Read more
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-lazy>
    <HeadlineDialog :headline="headline" :dialog="dialog" @close="dialog = false"/>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import HeadlineDialog from './HeadlineDialog.vue';

export default {
  props: ['headline'],

  components: {
    HeadlineDialog,
  },

  data: () => ({
    dialog: false,
    isActive: false,
  }),

  methods: {
    getHeadlineDetails() {
      this.$store.dispatch('addHeadlineToHistory', {
        headline: this.headline,
      });
      this.$router.push({ name: 'Headline', params: { headline: this.headline } });
    },
    editTitle() {
      this.dialog = true;
    },
  },

  filters: {
    date(value) {
      if (!value) return null;
      return dayjs(value);
    },
  },
};
</script>
