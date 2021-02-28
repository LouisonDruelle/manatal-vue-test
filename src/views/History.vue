<template>
  <div class="history pa-8">
    <HistoryList />
  </div>
</template>

<script>
import HistoryList from '@/components/HistoryList.vue';

export default {
  name: 'Home',
  components: {
    HistoryList,
  },
};
</script>
