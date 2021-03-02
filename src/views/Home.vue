<template>
  <div class="home pa-8">
    <PresentationCard />
    <SectionTitle msg='Latest headlines'/>
    <HeadlineList />
  </div>
</template>

<script>
import PresentationCard from '@/components/PresentationCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import HeadlineList from '@/components/headline/HeadlineList.vue';

export default {
  name: 'Home',
  components: {
    PresentationCard,
    SectionTitle,
    HeadlineList,
  },
};
</script>
