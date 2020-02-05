<template>
  <div
    class="container"
    @click="click"
    :class="[{open}, activePortal && activePortal.path]"
    v-if="loaded"
  >
    <div class="info">{{activePortal && activePortal.mainTopic}}</div>
    <div class="content">
      <div class="title">Policy Portal</div>
      <div class="position">
        <div class="portal">{{activePortal && activePortal.mainTopic}}</div>
        <div class="circle"></div>
      </div>
      <ul class="link">
        <li class="intro"></li>
        <li class="stocktake-1"></li>
        <li class="stocktake-2"></li>
        <li class="transition-path-1"></li>
        <li class="transition-path-2"></li>
        <li class="primary-energy"></li>
        <li class="land-transitions"></li>
        <li class="land-affected"></li>
        <li class="earth"></li>
        <li class="end"></li>
      </ul>
      <img src="desktop/navigation.svg" class="naviImage" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["activePortal"]),
    ...mapState(["navigationOpen", "loaded"]),
    open: function() {
      return this.activePortal && this.activePortal.path !== "intro";
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
  left: 10px;
  pointer-events: none;
}

.link {
  position: absolute;
  margin:0;
  padding:0;
  top: 33px;
  left: 10px;
  
  li {
    cursor: pointer;
    pointer-events: all;
    margin:0;
    padding:0;
    list-style: none;
    width: 20px;
    height: 20px;
    background: red;
    position: absolute;

  }

  .intro {
    top: 50px;
    left: 50px;
  }

  .stocktake-1 {
    top: 123px;
    left: 81px;
  }

  .stocktake-2 {
    top: 154px;
    left: 62px;
  }

  .transition-path-1 {
    top: 179px;
    left: 81px;
  }

  .transition-path-2 {
    top: 205px;
    left: 62px;
  }

  .primary-energy {
    top: 220px;
    left: 53px;
  }

  .land-transitions {
    top: 235px;
    left: 62px;
  }

  .land-affected {
    top: 260px;
    left: 81px;
  }

  .earth {
    top: 280px;
    left: 97px;
  }

  .end {
    top: 320px;
    left: 81px;
  }
}

.position {
  position: absolute;
  top: 60px;
  left: 67px;
  transition: top 1s, left 1s;

  .stocktake-1 & {
    top: 123px;
    left: 81px;
  }

  .stocktake-2 & {
    top: 154px;
    left: 62px;
  }

  .transition-path-1 & {
    top: 179px;
    left: 81px;
  }

  .transition-path-2 & {
    top: 205px;
    left: 62px;
  }

  .primary-energy & {
    top: 220px;
    left: 53px;
  }

  .land-transitions & {
    top: 235px;
    left: 62px;
  }

  .land-affected & {
    top: 260px;
    left: 81px;
  }

  .earth & {
    top: 280px;
    left: 97px;
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
