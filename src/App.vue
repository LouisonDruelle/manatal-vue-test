<template>
  <v-app id="app">
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
#app {
  background-color: #f3f3f3;
}
</style>
