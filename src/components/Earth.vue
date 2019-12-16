<template>
  <div class="earth">
    <div class="text">
      <h2>{{ data.title }}</h2>
      <div class="description" v-if="ratio > 0.3">{{ data.description }}</div>
      <div class="readbutton" v-if="ratio > 0.4">GO TO HEART</div>
    </div>
    <div class="globe"></div>
  </div>
</template>

<script>
export default {
  props: ["data", "ratio"]
};
</script>

<style scoped></style>
