<template>
  <div>
    <v-list-item :key="headline.title">
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
};
</script>
