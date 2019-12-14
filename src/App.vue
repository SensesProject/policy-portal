<template>
  <div id="app" ref="app">
    <Item>
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="final-svg-portal/global-stocktake-1.svg" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="final-svg-portal/global-stocktake-2.svg" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="final-svg-portal/land-transitions.svg" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="final-svg-portal/extreme-events.svg" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="final-svg-portal/primary-energy.svg" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="final-svg-portal/sector-transition-1.svg" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="final-svg-portal/sector-transitions2.svg" />
      </template>
    </Item>
  </div>
</template>

<script>
import Item from "./components/Item.vue";
import AnimatedSvg from "./components/AnimatedSvg.vue";

let ticking = false;

export default {
  name: "app",
  components: { Item, AnimatedSvg },
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
