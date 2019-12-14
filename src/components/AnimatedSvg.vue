<template>
  <div class="slide" ref="svg"></div>
</template>

<script>
import vivus from "vivus";
import { mapState } from "vuex";

export default {
  watch: {
    ratio: function(ratio) {
      this.vivus.setFrameProgress(ratio);
      this.vivus.stop();
    }
  },
  computed: {
    ...mapState(["isMobile"])
  },
  props: ["ratio", "svg"],
  mounted: function() {
    const path = this.isMobile ? "mobile/" : "desktop/";
    this.vivus = new vivus(this.$refs.svg, {
      type: "oneByOne",
      start: "manual",
      file: path + this.svg
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
