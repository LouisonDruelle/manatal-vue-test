<template>
  <div>
    <ErrorAlert :error="error"/>
    <BackButton />
  </div>
</template>

<script>
import ErrorAlert from '@/components/ErrorAlert.vue';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'ErrorExample',
  components: {
    ErrorAlert,
    BackButton,
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
