<template>
  <div class="slide" ref="svg"></div>
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
    console.log(this.svg);
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
.slide {
  width: 934px;
  height: 432px;
}
svg {
  position: absolute;
}
</style>
