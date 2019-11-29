<template>
  <div id="app">
    <section></section>
    <section>
      <figure>
        <Slide1 />
      </figure>
    </section>
    <intersect @ratio="onratio">
      <section>
        <figure>
          <slot name="slide">
            <Slide2 :ratio="ratio" />
          </slot>
        </figure>

        <article></article>
      </section>
    </intersect>

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

import Intersect from "./components/Intersect";

export default {
  name: "app",
  components: { Intersect, Slide1, Slide2 },
  data: function() {
    return {
      ratio: 0
    };
  },
  methods: {
    start: function(e) {
      // console.log("start", e);
    },
    leave: function(e) {
      // console.log("leave", e);
    },
    onratio: function(e) {
      this.ratio = e;
    }
  },
  mounted: function() {
    //this.createObserver();
  },
  beforeDestroy: function() {
    //this.observer.disconnect();
  }
};
</script>

<style scoped>
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
