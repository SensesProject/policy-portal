<template>
  <div class="svg" ref="svg"></div>
</template>

<script>
import vivus from "vivus";

export default {
  watch: {
    ratio: function(ratio) {
      this.vivus.setFrameProgress(ratio);
      this.vivus.stop();
    }
  },
  props: ["ratio", "svg"],
  mounted: function() {
    this.vivus = new vivus(this.$refs.svg, {
      type: "oneByOne",
      start: "manual",
      file: this.svg
    });
    this.vivus.stop();
  }
};
</script>

<style scoped>
.svg {
  /* position: absolute; */
  max-width: 1200px;
}
</style>
