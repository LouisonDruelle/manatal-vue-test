<template>
  <div class="history pa-8">
    <SectionTitle msg='Visited headlines'/>
    <HistoryList />
    <BackButton />
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import HistoryList from '@/components/history/HistoryList.vue';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'History',
  components: {
    SectionTitle,
    HistoryList,
    BackButton,
  },
};
</script>
