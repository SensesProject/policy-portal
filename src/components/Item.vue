<template>
  <div class="item" :class="{scroller: !data.simple}">
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
      return Math.min(
        (Math.min(Math.max(this.scrollY - this.offsetTop, 0), this.height) /
          this.height) *
          1.5,
        1
      );
    },
    ...mapState(["scrollY", "screenHeight", "loaded"])
  },
  methods: {
    reflow: function() {
      this.offsetTop = this.$el.offsetTop;
      this.height = this.$el.getBoundingClientRect().height;
    }
  },
  watch: {
    ratio: function(ratio) {
      if (this.$store.state.activePortalPath !== this.data.path) {
        this.$store.state.activePortalPath = this.data.path;
      }
    },
    loaded: function() {
      this.reflow();
    }
  },
  mounted() {
    setTimeout(this.reflow, 1);
  },
  props: ["data", "simple"]
};
</script>

<style lang="stylus" scoped>
.item {
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.scroller {
  figure {
    position: sticky;
    left: 0;
    width: 100%;
    margin: 0;
    transform: translate3d(0, 0, 0);
    /* background-color: #8a8a8a; */
    z-index: 0;
    height: calc(100vh);
    top: 0;
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
    // background: #7fffd43d;
    pointer-events: none;
  }

  .step {
    margin: 0 auto 2rem auto;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
