<template>
  <div id="app" ref="app">
    <SensesMenu />
    <Navigation />
    <Item v-for="data in modulesData" v-bind:key="data.path" :data="data">
      <template v-slot:figure="props">
        <Home v-if="props.data.path === 'intro'" />
        <Earth v-else-if="props.data.path === 'earth'" :ratio="props.ratio" />
        <End v-else-if="props.data.path === 'end'" />
        <div v-else>
          <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
          <ModuleText :data="props.data" :ratio="props.ratio" />
        </div>
      </template>
    </Item>
  </div>
</template>

<script>
import SensesMenu from "library/src/components/SensesMenu.vue";
import Item from "./components/Item.vue";
import Home from "./components/Home.vue";
import Navigation from "./components/Navigation.vue";
import End from "./components/End.vue";
import AnimatedSvg from "./components/AnimatedSvg.vue";
import ModuleText from "./components/ModuleText.vue";
import Earth from "./components/Earth.vue";
import { mapState, mapGetters } from "vuex";

let ticking = false;

export default {
  name: "app",
  components: {
    Home,
    Navigation,
    End,
    Item,
    AnimatedSvg,
    ModuleText,
    Earth,
    SensesMenu
  },
  computed: {
    ...mapState(["isMobile", "activePortal"]),
    ...mapGetters(["modulesData"])
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
    },
    reflow: function() {
      this.$store.state.reflowTime = Date.now();
    }
  },
  mounted: function() {
    console.log(this.modulesData);
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", this.reflow);
    window.addEventListener("resize", this.reflow);
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("load", this.reflow);
    window.removeEventListener("resize", this.reflow);
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

svg text {
  font-size: 0.6em;
}
</style>
