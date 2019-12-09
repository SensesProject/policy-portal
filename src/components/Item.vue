<template>
  <div>
    <figure>
      <div class="info">
        <div class="credits">
          <div class="icon"></div>
          <span>PARNOW J., BERTHRAM C.</span>
        </div>
        <div class="read">
          <div class="icon"></div>
          <span>15 MINS.</span>
        </div>
        <div class="tags">
          <div class="icon"></div>
          <span>sdjapsid asdasd</span>
        </div>
      </div>
      <slot name="figure" :ratio="ratio"></slot>
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
  mounted() {
    this.offsetTop = this.$el.offsetTop;
    this.height = this.$el.getBoundingClientRect().height;
  }
};
</script>

<style lang="stylus" scoped>
.info {
    position: absolute;
    left: 52%;
    font-size: 12px;
    top: 100px;

  > div {
      clear both
      float: left;
      border-radius 10px
      background #9be8c7
      margin 5px 0 0 0
      span {
        padding 0 10px 0 10px
        float: left;
      }
    }
  .icon {
    border-radius 10px
    border: 1px solid #3bccb7;
    width 15px
    height 15px
    float: left;
  }
  .credits {

  }
}


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
  height: 400vh;
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
