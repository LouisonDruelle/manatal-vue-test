<template>
  <div>
    <v-list-item :key="source.id">
      <v-list-item-content>
        <v-list-item-title v-html="source.name"></v-list-item-title>
        <v-list-item-subtitle v-html="source.description"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ['source'],
};
</script>
