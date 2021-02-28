<template>
  <div class="history pa-8">
    <HistoryList />
  </div>
</template>

<script>
import HistoryList from '@/components/HistoryList.vue';

export default {
  name: 'History',
  components: {
    HistoryList,
  },
};
</script>
