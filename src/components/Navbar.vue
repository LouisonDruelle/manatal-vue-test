<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-toolbar-title>SqwaNews.</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-col
        cols="5"
        sm="6"
        md="4"
      >
      <v-text-field
        solo
        light
        dense
        hide-details
        v-model="keyword"
        @keydown="searchHeadline"
      ></v-text-field>
      </v-col>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link class="px-10">
            <v-list-item-title @click="$router.push('history')">History</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    keyword: '',
  }),
  methods: {
    searchHeadline() {
      this.$store.dispatch('searchHeadlines', {
        keyword: this.keyword,
      });
    },
  },
};
</script>
