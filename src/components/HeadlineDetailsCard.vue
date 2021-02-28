<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="800"
      >
        <v-img
          height="300px"
          :src="headline.urlToImage"
        >
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ headline.publishedAt | date }}
        </v-card-subtitle>

        <v-card-title class="text--primary py-3">
          {{ headline.title }}
        </v-card-title>

        <v-card-text class="text--primary py-3">
          <div>{{ headline.content }}</div>
        </v-card-text>
        <v-card-text class="text--primary py-3">
          Author: {{ headline.author }} | Source : {{ headline.source.name }}
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="editTitle()"
            color="purple"
            text
          >
            Edit title
          </v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: ['headline'],

  filters: {
    date(value) {
      if (!value) return null;
      return dayjs(value);
    },
  },
};
</script>
