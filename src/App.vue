<template>
  <div id="app" ref="app">
    <SensesMenu />
    <Navigation />
    <Home />
    <Item v-for="data in modulesData" v-bind:key="data.path" :data="data">
      <template v-slot:figure="props">
        <ModuleText :data="props.data" :ratio="props.ratio" />
        <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)" />
      </template>
    </Item>
    <Item>
      <template v-slot:figure="props">
        <Earth :ratio="props.ratio"></Earth>
      </template>
    </Item>
    <End />
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
import moduleData from "./assets/modules.json";
import { mapState } from "vuex";

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
    modulesData: function() {
      return moduleData.modules.filter(
        m => m.portal === "Policy" && Number.isInteger(m.portalNum)
      );
      // return moduleData.modules.reduce((a, b) => ((a[b.path] = b), a), {});
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
