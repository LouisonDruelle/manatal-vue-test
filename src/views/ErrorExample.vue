<template>
  <div>
    <ErrorAlert :error="error"/>
  </div>
</template>

<script>
import ErrorAlert from '@/components/ErrorAlert.vue';

export default {
  name: 'ErrorExample',
  components: {
    ErrorAlert,
  },
  data() {
    return {
      error: '',
    };
  },
  async mounted() {
    this.error = '';
    try {
      await this.$store.dispatch('getError');
    } catch (e) {
      this.error = e;
    }
  },
};
</script>
