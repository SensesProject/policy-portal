<template>
  <div>
    <figure>
      <slot name="figure" :ratio="ratio" :data="data"></slot>
    </figure>
    <article></article>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "item",
  data() {
    return { offsetTop: 0, height: 0 };
  },
  computed: {
    ratio: function() {
      return (
        Math.min(
          Math.max(this.scrollY - this.offsetTop, 0),
          this.height - this.screenHeight * 1.2
        ) /
        (this.height - this.screenHeight * 1.2)
      );
    },
    ...mapState(["scrollY", "screenHeight"])
  },
  watch: {
    ratio: function(ratio) {
      if (this.$store.state.active !== this.data.path)
        this.$store.state.active = this.data.path;
    }
  },
  mounted() {
    this.offsetTop = this.$el.offsetTop;
    this.height = this.$el.getBoundingClientRect().height;
  },
  props: ["data"]
};
</script>

<style lang="stylus" scoped>
figure {
  position: sticky;
  left: 0;
  width: 100%;
  margin: 0;
  transform: translate3d(0, 0, 0);
  /* background-color: #8a8a8a; */
  z-index: 0;
  height: 90vh;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

article {
  position: relative;
  padding: 0;
  width: 10px;
  height: 300vh;
  margin: 0 auto;
  top: -90vh;
  // background: #7fffd43d;
  pointer-events: none;
}

.step {
  margin: 0 auto 2rem auto;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
