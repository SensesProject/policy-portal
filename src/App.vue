<template>
  <div id="app" ref="app">
    <Item :data="modulesData['stocktake-1']">
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="stocktake-1.svg" />
      </template>
    </Item>
    <Item :data="modulesData['stocktake-2']">
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="stocktake-2.svg" />
      </template>
    </Item>
    <Item :data="modulesData['transition-path-1']">
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="transition-path-1.svg" />
      </template>
    </Item>
    <Item :data="modulesData['transition-path-2']">
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="transition-path-2.svg" />
      </template>
    </Item>
    <Item :data="modulesData['primary-energy']">
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="primary-energy.svg" />
      </template>
    </Item>
    <Item :data="modulesData['land-transitions']">
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="land-transitions.svg" />
      </template>
    </Item>
    <Item :data="modulesData['land-affected']">
      <template v-slot:figure="props">
        <AnimatedSvg :ratio="props.ratio" svg="land-affected.svg" />
      </template>
    </Item>
  </div>
</template>

<script>
import Item from "./components/Item.vue";
import AnimatedSvg from "./components/AnimatedSvg.vue";
import moduleData from "./assets/modules.json";

let ticking = false;

export default {
  name: "app",
  components: { Item, AnimatedSvg },
  computed: {
    modulesData: function() {
      return moduleData.modules.reduce((a, b) => ((a[b.path] = b), a), {});
    }
  },
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
    console.log(this.modulesData);
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700i|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|IBM+Plex+Serif&display=swap");

* {
  box-sizing: border-box;
}

#app {
  font-family: "IBM Plex Sans", sans-serif;
}
</style>
