<template>
  <div id="app" ref="app">
    <SensesMenu />
    <Home />
    <Item :data="modulesData['stocktake-1']">
      <template v-slot:figure="props">
        <Layout :data="props.data" :ratio="props.ratio" />
        <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
      </template>
    </Item>
    <Item :data="modulesData['stocktake-2']">
      <template v-slot:figure="props">
        <Layout :data="props.data" :ratio="props.ratio" />
        <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
      </template>
    </Item>
    <Item :data="modulesData['land-affected']">
      <template v-slot:figure="props">
        <Layout :data="props.data" :ratio="props.ratio" />
        <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
      </template>
    </Item>
    <Item :data="modulesData['transition-path-1']">
      <template v-slot:figure="props">
        <Layout :data="props.data" :ratio="props.ratio" />
        <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
      </template>
    </Item>
    <Item :data="modulesData['transition-path-2']">
      <template v-slot:figure="props">
        <Layout :data="props.data" :ratio="props.ratio" />
        <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
      </template>
    </Item>
    <Item :data="modulesData['primary-energy']">
      <template v-slot:figure="props">
        <Layout :data="props.data" :ratio="props.ratio" />
        <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
      </template>
    </Item>
    <Item :data="modulesData['land-transitions']">
      <template v-slot:figure="props">
        <Layout :data="props.data" :ratio="props.ratio" />
        <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <Earth :ratio="props.ratio"></Earth>
      </template>
    </Item>
  </div>
</template>

<script>
import SensesMenu from "library/src/components/SensesMenu.vue";
import Item from "./components/Item.vue";
import Home from "./components/Home.vue";
import AnimatedSvg from "./components/AnimatedSvg.vue";
import Layout from "./components/Layout.vue";
import Earth from "./components/Earth.vue";
import moduleData from "./assets/modules.json";
import { mapState } from "vuex";

let ticking = false;

export default {
  name: "app",
  components: { Home, Item, AnimatedSvg, Layout, Earth, SensesMenu },
  computed: {
    modulesData: function() {
      return moduleData.modules.reduce((a, b) => ((a[b.path] = b), a), {});
    },
    ...mapState(["isMobile"])
  },
  methods: {
    getSvgPath: function(path) {
      const p = this.isMobile ? "mobile/" : "desktop/";
      return p + path + ".svg";
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

<style lang="scss">
// @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700i|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|IBM+Plex+Serif&display=swap");
@import "library/src/style/base.scss";

* {
  box-sizing: border-box;
}

#app {
  font-family: "IBM Plex Sans", sans-serif;
}
</style>
