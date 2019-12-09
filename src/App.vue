<template>
  <div id="app">
    <section></section>
    <section>
      <figure>
        <Slide1 />
      </figure>
    </section>
    <section ref="slide">
      <figure>
        <Slide2 :ratio="ratio" />
      </figure>

      <article></article>
    </section>
    <section>
      <!-- <intersect @start="start" @leave="leave"> -->
      <figure>
        <Slide1 />
      </figure>
      <!-- </intersect> -->
      <article></article>
    </section>
    <section>
      <!-- <intersect @start="start" @leave="leave"> -->
      <figure>
        <Slide2 />
      </figure>
      <!-- </intersect> -->
      <article></article>
    </section>
    <section>
      <h1>headline blalallalal</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  </div>
</template>

<script>
import Slide1 from "./components/Slide1.vue";
import Slide2 from "./components/Slide2.vue";
let scrollY = 0;
let ticking = false;

export default {
  name: "app",
  components: { Slide1, Slide2 },
  data: function() {
    return {
      ratio: 0
    };
  },
  methods: {
    start: function(e) {
      // console.log("start", e);
    },
    throttledScroll: function(scrollY) {
      const { height, y } = this.$refs.slide.getBoundingClientRect();
      const screenHeight = screen.height;
      const ratio =
        Math.min(Math.max(-1 * y, 0), height - screenHeight) /
        (height - screenHeight);

      console.log("throttledScroll", ratio);
      this.ratio = ratio;
    },
    onScroll: function(e) {
      scrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.throttledScroll(scrollY);
          ticking = false;
        });
        ticking = true;
      }
    }
  },
  mounted: function() {
    //this.createObserver();
    // window.addEventListener("scroll", this.onScroll);
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|IBM+Plex+Serif&display=swap");

* {
  box-sizing: border-box;
}

#app {
  font-family: "IBM Plex Sans", sans-serif;
}

.intersecter {
  position: relative;
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
