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
  position: absolute;
  width: 100%;
  left: 20%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  pointer-events: none;
}
svg {
  max-width: 1000px;
}
svg text {
  font-size: inherit;
}
</style>
