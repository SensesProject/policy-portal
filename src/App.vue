<template>
  <div id="app" ref="app">
    <SensesMenu />
    <Navigation v-if="!isMobile" />
    <NavigationMobile v-if="isMobile" /> 
    <!-- <BackgroundLine /> -->
    <Item v-for="data in modulesData" v-bind:key="data.path + '-' + reflowTime" :data="data" :id="'to-' + data.path">
      <template v-slot:figure="props">
        <Home v-if="props.data.path === 'intro'" :mobile="isMobile"  />
        <Earth v-else-if="props.data.path === 'earth'" :ratio="props.ratio" :mobile="isMobile" />
        <End v-else-if="props.data.path === 'end'" :mobile="isMobile" />
        <div v-else>
          <ModuleText :data="props.data" :ratio="props.ratio" :mobile="isMobile" />
          <AnimatedSvg :ratio="props.ratio" :svg="getSvgPath(props.data.path)"/>
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
import NavigationMobile from "./components/NavigationMobile.vue";
import End from "./components/End.vue";
import BackgroundLine from "./components/BackgroundLine.vue";
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
    BackgroundLine,
    SensesMenu,
    NavigationMobile
  },
  computed: {
    ...mapState(["isMobile", "activePortal", "reflowTime"]),
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
    reflow: function(e) {
      this.$store.state.isMobile = window.innerWidth < 700;
      this.$store.state.reflowTime = Date.now()
      if (e.type === "load") {
        setTimeout(() => {
          this.$store.state.activePortalPath = "intro";
        }, 100);
      }
    },
    hashchange: function(){
      // console.log(location.hash)
      const top = document
        .getElementById(location.hash.replace("#/", "to-"))
        .offsetTop + 10

      window.scrollTo({
        top: top,
        behavior: 'smooth',
      })
    }
  },
  mounted: function() {
    console.log(this.modulesData);
    // this.modulesData.forEach(d => console.log(d.path));
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", this.reflow);
    window.addEventListener("resize", this.reflow);
    window.addEventListener("hashchange", this.hashchange);
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("load", this.reflow);
    window.removeEventListener("resize", this.reflow);
    window.removeEventListener("hashchange", this.hashchange);
  }
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700i|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|IBM+Plex+Serif&display=swap");
@import "library/src/style/base.scss";

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: "IBM Plex Sans", sans-serif;
}

svg text {
  font-size: 0.6em;
}
</style>
