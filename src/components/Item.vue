<template>
  <div>
    <figure>
      <div class="info">
        <div class="credits">
          <div class="icon"></div>
          <div class="content">{{ data.authors.join(" / ")}}</div>
        </div>
        <div class="read">
          <div class="icon"></div>
          <div class="content">{{ data.readingTime }}</div>
        </div>
        <div class="tags">
          <div class="icon"></div>
          <div class="content">{{ data.tags.join(", ")}}</div>
        </div>
      </div>
      <div class="text">
        <h2>{{ data.title }}</h2>
        <div class="description" v-if="ratio > 0.3">{{ data.description }}</div>
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
    console.log(this.data);
  },
  props: ["data"]
};
</script>

<style lang="stylus" scoped>
.text {
  position: absolute;
  width: 350px;
  left: 52%;
  top: 33%;

  h2 {
    font-size: 40px;
    font-family: 'IBM Plex Mono', serif;
    line-height: 1.1em;
    width: 300px;

    figure:hover & {
      font-style: italic;
    }
  }

  .description {
    font-size: 14px;
    line-height: 1.2em;
  }
}

.info {
  position: absolute;
  left: 52%;
  font-size: 12px;
  text-transform: uppercase;
  top: 100px;

  > div {
    clear: both;
    float: left;
    border-radius: 10px;
    background: #9be8c7;
    margin: 5px 0 0 0;

    .content {
      padding: 0 10px 0 10px;
      float: left;
    }
  }

  .icon {
    border-radius: 10px;
    border: 1px solid #3bccb7;
    width: 15px;
    height: 15px;
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
