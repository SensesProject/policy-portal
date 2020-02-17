<template>
  <div class="container earth" :class="{mobile}">
    <div class="item" :class="{visible: true}">
      <div class="earths" v-if="!mobile">
        <img
          v-for="i in 9"
          :src="'desktop/earth/crops/' + i + '.png'"
          v-show="earthVisible(i, [0, 0.3])"
          :key="'crops'+i"
          alt="Earth"
         />
      </div>
      <div class="earths" v-if="mobile">
        <img
          src="mobile/earth/crops/1.png"
          v-if="mobile"
          alt="Earth"
         />
      </div>
      <div class="text">
        <h2>Crops</h2>
        <div class="description">
          Discover how different regions will be impacted by
          <span class="dotted">crop failures</span> in the next 100 years.
        </div>
        <div class="readbutton">GO TO SENSES EARTH</div>
      </div>
    </div>
    <div class="item" :class="{visible: ratio > 0.3}">
      <div class="earths" v-if="!mobile">
        <img
          v-for="i in 9"
          :src="'desktop/earth/floodings/' + i + '.png'"
          v-show="earthVisible(i, [0.3, 0.6])"
          :key="'crops'+i"
          alt="Earth"
         />
      </div>
      <div class="earths" v-if="mobile">
        <img
          src="mobile/earth/floodings/1.png"
          v-if="mobile"
          alt="Earth"
         />
      </div>
      <div class="text">
        <h2>Floodings</h2>
        <div class="description">
          Discover how different regions will be impacted by
          <span class="dotted">floodings</span> in the next 100 years.
        </div>
        <div class="readbutton">GO TO SENSES EARTH</div>
      </div>
    </div>
    <div class="item" :class="{visible: ratio > 0.6}">
      <div class="earths" v-if="!mobile">
        <img
          v-for="i in 9"
          :src="'desktop/earth/wildfires/' + i + '.png'"
          v-show="earthVisible(i, [0.6, 0.9])"
          :key="'crops'+i"
          alt="Earth"
         />
      </div>
      <div class="earths" v-if="mobile">
        <img
          src="mobile/earth/wildfires/1.png"
          v-if="mobile"
          alt="Earth"
         />
      </div>
      <div class="text">
        <h2>Wildfires</h2>
        <div class="description">
          Discover how different regions will be impacted by
          <span class="dotted">wildfires</span> in the next 100 years.
        </div>
        <div class="readbutton">GO TO SENSES EARTH</div>
      </div>
    </div>
    <img class="backgroundPath" src="desktop/background/earth.svg" v-if="!{mobile}"/>
  </div>
</template>

<script>
export default {
  props: ["ratio", "mobile"],
  methods: {
    earthVisible: function (i, range) {
      const domain = [1, 9]

      const percent = (this.ratio - range[0]) / (range[1] - range[0])
      const clamped = Math.min(Math.max(percent, 0), 1)
      const id = Math.floor(domain[0] + (domain[1] - domain[0]) * clamped)

      return i === id;
    }
  }
};
</script>
<style lang="stylus" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: calc(100% - 180px);
  margin-left: 180px;

  &.mobile {
    flex-flow: column;
    width: 100%;
    margin-left: 0;
  }
}

.backgroundPath {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  pointer-events: none;
}

.item {
  width: 250px;
  opacity: 0.1;
  transition: opacity 0.5s;
  z-index: 1;
  padding: 1em;

  .mobile & {
    opacity 1;
    margin-top: 2em;
    padding: 3em;
    width: 100%;
  }

  // @media screen and (min-width: 1000px)  {
  //   margin: 1vw;
  // }
  // @media screen and (min-width: 1200px)  {
  //   margin: 2vw;
  // }
  // @media screen and (min-width: 1300px)  {
  //   margin: 3vw;
  // }
}

.visible {
  opacity: 1;
}

.text {
  padding-top: 2em;

  .mobile & {
    h2 {
      padding-bottom: 10px;
    }
  }
}

.readbutton {
  font-family: IBM Plex Mono;
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  // text-align: right;
  line-height: 26px;
  letter-spacing: 0.555803px;
  color: #524DFF;
  margin-top: 30px;

  .mobile & {
    text-align: center;
  }
}

.earths {
  position: relative;
  
  img {
    position: relative;
    width: 100%;
  }
}

h2 {
  font-family: 'IBM Plex Mono', serif;
  font-weight: normal;
  color: #0BBFB0;
  font-size: 35px;
}
</style>
