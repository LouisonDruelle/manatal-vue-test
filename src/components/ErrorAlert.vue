<template>
  <div class="pa-10">
    <v-alert v-if="error" type="error" class="mx-auto" max-width="600">
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'ErrorAlert',
  props: ['error'],
};
</script>
