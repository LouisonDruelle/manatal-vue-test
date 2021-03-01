<template>
  <div class="home pa-8">
    <HeadlineDetailsCard :headline="headline"/>
  </div>
</template>

<script>
import HeadlineDetailsCard from '@/components/headline/HeadlineDetailsCard.vue';

export default {
  name: 'Headline',
  components: {
    HeadlineDetailsCard,
  },

  data: () => ({
    headline: [],
  }),

  mounted() {
    if (!this.$route.params.headline) {
      this.$router.push('/');
    } else {
      this.headline = this.$route.params.headline;
    }
  },
};
</script>
