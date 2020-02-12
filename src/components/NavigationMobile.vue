<template>
  <div
    class="container"
    @click="click"
    :class="[{open}, activePortal && activePortal.path]"
    v-if="activePortal && activePortal.path !== 'intro'"
  >
    <div class="info">{{activePortal && activePortal.mainTopic}}</div>
    <div class="content">
      <!-- <div class="title">Policy Portal</div> -->
      <div class="position">
        <div class="portal">{{activePortal && activePortal.mainTopic}}</div>
        <div class="circle"></div>
      </div>
      <img src="mobile/navigation.svg" class="naviImage" />
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
      return this.navigationOpen;
    }
  },
  methods: {
    click: function() {
      this.$store.state.navigationOpen = !this.navigationOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  box-shadow: 0px 4px 0px 1px #99e2c49c;
  position: fixed;
  top: 41px;
  border: 1px solid #0bbfb0;
  border-radius: 20px;
  color: #0bbfb0;
  text-transform: uppercase;
  font-size: 12px;
  width: 100%;
  overflow: hidden;
  background: #DEF7ED;
  height: 60px;
  top: 41px;
  display: flex;
  // align-items: center;
  // justify-content: center;
  z-index: 10;
  overflow: hidden;

  &.open {
    height: 180px;
  }
}

.title {
  font-size: 9px;
}

.content {
  display: none;
  margin: 40px;
  width: 100%;

  .open & {
    display: block;
  }
}

.info {
  display: block;
  font-size: 1.5em;
  font-weight: 450;
  letter-spacing: 0.03571em;
  margin-top: 25px;
  width: 100%;
  text-align: center;
  // pointer-events: all;

  .open & {
    display: none;
  }
}

.naviImage {
  width: 100%;
  pointer-events: none;
  vector-effect: non-scaling-stroke;
  margin-top: 48px;
}

.position {
  position: absolute;
  top: 60px;
  left: 67px;
  // transition: top 1s, left 1s;

  .stocktake-1 & {
    top: 53px;
    left: 111px;
  }

  .stocktake-2 & {
    top: 70px;
    left: 134px;
  }

  .transition-path-1 & {
    top: 53px;
    left: 163px;
  }

  .transition-path-2 & {
    top: 53px;
    left: 163px;
  }

  .primary-energy & {
    top: 67px;
    left: 199px;
  }

  .land-transitions & {
    top: 67px;
    left: 228px;
  }

  .land-affected & {
    top: 67px;
    left: 228px;
  }

  .earth & {
    top:53px;
    left: 294px;
  }

  .end & {
    top:95px;
    left: 294px;
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
