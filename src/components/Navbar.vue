<template>
  <div>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title @click="$router.push('/')">SqwaNews.</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <template v-for="(item, i) in routes">
            <v-list-item v-if="$route.name !== item.title"
              :key="i"
              link
              @click="$router.push(item.route)"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    routes: [
      { title: 'Home', route: '/', icon: 'mdi-home' },
      { title: 'History', route: '/history', icon: 'mdi-history' },
      { title: 'ErrorExample', route: '/error', icon: 'mdi-alert' },
    ],
    drawer: false,
    group: null,
  }),
};
</script>
