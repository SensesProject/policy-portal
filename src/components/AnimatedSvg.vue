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

<style scoped lang="scss">
.svg {
  /* position: absolute; */
  position: absolute;
  width: 80%;
  left: 20%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  pointer-events: none;
  max-width: 1000px;

  @media screen and (max-width: 700px) {
    left: 0;
    width: 100%;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1400px;
  }
}
svg text {
  font-size: inherit;
}
</style>
