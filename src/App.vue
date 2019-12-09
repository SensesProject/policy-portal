<template>
  <div id="app" ref="app">
    <Item>
      <template v-slot:figure="props">
        <Slide1 :ratio="props.ratio" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <Slide2 :ratio="props.ratio" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <Slide1 :ratio="props.ratio" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <Slide2 :ratio="props.ratio" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <Slide1 :ratio="props.ratio" />
      </template>
    </Item>
    <!-- <Item :scrollY="scrollY" :screenHeight="screenHeight">
      <template slot="figure" scope="props">
        <Slide2 :ratio="props.ratio" />
      </template>
    </Item>
    <Item :scrollY="scrollY" :screenHeight="screenHeight">
      <template slot="figure" scope="props">
        <Slide1 :ratio="props.ratio" />
      </template>
    </Item>-->
    <!-- <Item>
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
    </Item>-->
  </div>
</template>

<script>
import Item from "./components/Item.vue";
import Slide1 from "./components/Slide1.vue";
import Slide2 from "./components/Slide2.vue";

let ticking = false;

export default {
  name: "app",
  components: { Item, Slide1, Slide2 },
  methods: {
    start: function(e) {
      // console.log("start", e);
    },
    onScroll: function(e) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.$store.state.scrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    }
  },
  mounted: function() {
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
</style>
