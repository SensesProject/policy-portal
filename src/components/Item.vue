<template scope="props">
  <div>
    <figure>
      <slot name="figure" :ratio="ratio"></slot>
    </figure>
    <article></article>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return { offsetTop: 0, height: 0 };
  },
  computed: {
    ratio: function() {
      const ratio =
        Math.min(
          Math.max(this.scrollY - this.offsetTop, 0),
          this.height - this.screenHeight
        ) /
        (this.height - this.screenHeight);

      return ratio;
    }
  },
  props: ["scrollY", "screenHeight"],
  mounted() {
    this.offsetTop = this.$el.offsetTop;
    this.height = this.$el.getBoundingClientRect().height;
  }
};
</script>

<style scoped>
figure {
  position: sticky;
  left: 0;
  width: 100%;
  margin: 0;
  transform: translate3d(0, 0, 0);
  /*background-color: #8a8a8a;*/
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
  height: 200vh;
  margin: 0 auto;
  top: -90vh;
  background: #7fffd43d;
  pointer-events: none;
}

.step {
  margin: 0 auto 2rem auto;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
