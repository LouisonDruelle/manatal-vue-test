<template>
  <div>
    <v-list-item v-if="headline" :key="headline.title" @click="getHeadlineDetails()">
      <v-list-item-avatar size="70">
        <v-img :src="headline.urlToImage"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="headline.title"></v-list-item-title>
        <v-list-item-subtitle v-html="headline.description"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ['headline'],
  methods: {
    getHeadlineDetails() {
      this.$router.push({ name: 'Headline', params: { id: this.headline.id } });
    },
  },
};
</script>
