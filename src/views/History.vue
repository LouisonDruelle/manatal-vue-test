<template>
  <div class="history pa-8">
    <HistoryList />
    <BackButton />
  </div>
</template>

<script>
import HistoryList from '@/components/history/HistoryList.vue';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'History',
  components: {
    HistoryList,
    BackButton,
  },
};
</script>
