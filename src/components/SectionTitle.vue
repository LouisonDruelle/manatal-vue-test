<template>
  <div>
    <h1 class="mb-8 section-title">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.section-title {
  font-size: 20px;
  border-bottom: 1px solid #dddddd;
}
</style>
