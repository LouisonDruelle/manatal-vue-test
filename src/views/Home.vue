<template>
  <div class="home pa-8">
    <PresentationCard />
    <HeadlineList />
  </div>
</template>

<script>
import PresentationCard from '@/components/PresentationCard.vue';
import HeadlineList from '@/components/HeadlineList.vue';

export default {
  name: 'Home',
  components: {
    PresentationCard,
    HeadlineList,
  },
};
</script>
