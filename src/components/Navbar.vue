<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-toolbar-title @click="$router.push('/')">SqwaNews.</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-col
        cols="5"
        sm="6"
        md="4"
      >
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
          <v-list-item
            v-for="(item, i) in routes"
            :key="i"
            link
            @click="$router.push(item.route)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    routes: [
      { title: 'History', route: '/history' },
      { title: 'Error example', route: '/error' },
    ],
  }),
};
</script>
