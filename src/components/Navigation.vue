<template>
  <div
    class="container"
    @click="click"
    :class="[{open}, activePortal && activePortal.path]"
  >
    <div class="info">{{activePortal && activePortal.mainTopic}}</div>
    <div class="content">
      <div class="title">Policy Portal</div>
      <div class="position">
        <div class="portal">{{activePortal && activePortal.mainTopic}}</div>
        <div class="circle"></div>
      </div>
      <div class="link">
        <a class="intro" href="#/intro"></a>
        <a class="earth" href="#/earth"></a>
        <a class="film" href="#/film"></a>
        <a class="emissions-gap" href="#/emissions-gap"></a>
        <a class="stocktake-2" href="#/stocktake-2"></a>
        <a class="transition-path-1" href="#/transition-path-1"></a>
        <a class="land-use" href="#/land-use"></a>
        <a class="countries-pathways" href="#/countries-pathways"></a>
        <a class="end" href="#/end"></a>
      </div>
      <img src="desktop/navigation.svg" class="naviImage" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["activePortal"]),
    ...mapState(["navigationOpen", "reflowTime"]),
    open: function() {
      return this.activePortal && this.activePortal.path !== "intro" && this.activePortal.path !== "end";
    }
  },
  // watch: {
  //   activePortal: function(n,o){
  //     if(o.path === "intro" && n.path === "stocktake-1") {
  //       this.$store.state.navigationOpen = true;
  //     } else if(n.path === "intro") {
  //       this.$store.state.navigationOpen = false;
  //     }
  //   }
  // },
  methods: {
    click: function() {
      //this.$store.state.navigationOpen = !this.navigationOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 131px;
  padding: 20px;
  padding-left: 40px;
  border: 1px solid #0bbfb0;
  border-radius: 20px;
  left: -20px;
  color: #0bbfb0;
  text-transform: uppercase;
  font-size: 12px;

  width: 110px;
  overflow: hidden;
  background: #fff;
  z-index: 100;

  &.open {
    height: 450px;
    width: 190px;
  }
}

.title {
  font-size: 9px;
}

.content {
  display: none;

  .open & {
    display: block;
  }
}

.info {
  display: block;

  .navigationOpen & {
    display: none;
  }
}

.naviImage {
  position: absolute;
  top: 90px;
  left: 50px;
  pointer-events: none;
}

.link {
  position: absolute;
  margin:0;
  padding:0;
  top: 33px;
  left: 10px;

  a {
    cursor: pointer;
    pointer-events: all;
    margin:0;
    padding:0;
    list-style: none;
    width: 20px;
    height: 20px;
    text-decoration: none;
    position: absolute;
    background:none;
  }

  .intro {
    top: -10px;
    left: 20px;
  }

  .earth {
    top: 100px;
    left: 57px;
  }

  .film {
    top: 140px;
    left: 62px;
  }


  .emissions-gap {
    top: 173px;
    left: 88px;
  }

  .transition-path-1 {
    top: 210px;
    left: 61px;
  }

  .land-use {
    top: 235px;
    left: 75px;
  }

  .countries-pathways {
    top: 285px;
    left: 63px;
  }

  .end {
    top: 350px;
    left: 85px;
  }
}

.position {
  position: absolute;
  top: 60px;
  left: 67px;
  transition: top 1s, left 1s;

  .earth & {
    top: 100px;
    left: 57px;
  }

  .film & {
    top: 140px;
    left: 62px;
  }


  .emissions-gap & {
    top: 173px;
    left: 88px;
  }

  .stocktake-2 & {
    top: 154px;
    left: 62px;
  }

  .transition-path-1 & {
    top: 210px;
    left: 61px;
  }

  .land-use & {
    top: 235px;
    left: 75px;
  }

  .countries-pathways & {
    top: 285px;
    left: 63px;
  }

  .end & {
    top: 320px;
    left: 81px;
  }
}

.portal {
  position: absolute;
  left: 27px;
  transform: rotate(-45deg);
  width: 100px;
  font-size: 0.7em;
  top: -16px;

  .end & {
    color: #b035c9;
  }
}

.circle {
  background: #9be8c7;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  top: 22px;
  left: 0;
  position: absolute;

  .end & {
    background: #f3baff;
  }
}
</style>
