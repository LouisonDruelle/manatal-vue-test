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

  computed: {
    headline() {
      return this.$store.state.headline.headlines[this.$route.params.id - 1];
    },
  },

  mounted() {
    this.$store.dispatch('getHeadlines');
  },
};
</script>
