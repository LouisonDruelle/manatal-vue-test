<template>
  <div class="source pa-8">
    <SourceList />
    <BackButton />
  </div>
</template>

<script>
import SourceList from '@/components/source/SourceList.vue';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'Source',
  components: {
    SourceList,
    BackButton,
  },
};
</script>
