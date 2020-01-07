<template>
  <div
    class="container"
    @click="click"
    :class="[{navigationOpen}, activePortal && activePortal.path]"
  >
    <div class="info">{{activePortal && activePortal.title}}</div>
    <div class="content">
      <div class="title">Policy Portal</div>
      <div class="position">
        <div class="portal">{{activePortal && activePortal.title}}</div>
        <div class="circle"></div>
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
    ...mapState(["navigationOpen"])
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
  position: fixed;
  top: 100px;
  padding: 20px;
  padding-left: 40px;
  border: 1px solid #0bbfb0;
  border-radius: 20px;
  left: -20px;
  color: #0bbfb0;
  text-transform: uppercase;
  font-size: 12px;

  width: 230px;
  overflow: hidden;
  background: #fff;
  z-index: 100;
  cursor: pointer;

  &.navigationOpen {
    height: 400px;
  }
}

.content {
  display: none;

  .navigationOpen & {
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
}

.position {
  position: absolute;
  top: 60px;
  left: 67px;
  transition: top 1s, left 1s;

  .stocktake-1 & {
    top: 93px;
    left: 94px;
  }

  .stocktake-2 & {
    top: 120px;
    left: 74px;
  }

  .transition-path-1 & {
    top: 140px;
    left: 94px;
  }

  .transition-path-2 & {
    top: 150px;
    left: 94px;
  }

  .land-transitions & {
    top: 170px;
    left: 94px;
  }

  .land-affected & {
    top: 190px;
    left: 74px;
  }

  .primary-energy & {
    top: 220px;
    left: 94px;
  }
}

.portal {
  position: absolute;
  left: 45px;
  transform: rotate(-45deg);
  width: 100px;
  font-size: 0.7em;
}

.circle {
  background: #9be8c7;
  opacity: 0.5;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  top: 22px;
  left: 0;
  position: absolute;
}
</style>
