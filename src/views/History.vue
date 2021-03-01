<template>
  <div class="history pa-8">
    <HistoryList />
  </div>
</template>

<script>
import HistoryList from '@/components/history/HistoryList.vue';

export default {
  name: 'History',
  components: {
    HistoryList,
  },
};
</script>
