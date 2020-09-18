<template>
  <div class="container earth" :class="{mobile}">
    <div class="introduction">
      The warming of the atmosphere has a multitude of effects on social and
      natural systems such as agriculture, forests and rivers. These effects
      are known as climate impacts. In order to investigate climate impacts,
      scientists use computer models of these systems (“climate impact models”)
      and drive them with a warming climate. An important category of climate
      impacts are changes in the frequency and severity of extreme events like
      heatwaves, floods, droughts, and storms.  The following module
      shows scenarios of extreme events under climate change, as projected by impact models.
    </div>
    <div class="items-container">
    <div class="item first-item" :class="{visible: true}">
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
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/"><h2>Explore Crops</h2></a>
        <!-- <div class="description">
          Discover how different regions will be impacted by
          <span class="dotted">crop failures</span> in 100 years.
        </div>
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/">GO TO SENSES EARTH</a> -->
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
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/"><h2>Explore Floods</h2></a>
        <!-- <div class="description">
          Discover how different regions will be impacted by
          <span class="dotted">floodings</span> in 100 years.
        </div>
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/">GO TO SENSES EARTH</a> -->
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
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/"><h2>Explore Wildfires</h2></a>
        <!-- <div class="description">
          Discover how different regions will be impacted by
          <span class="dotted">wildfires</span> in 100 years.
        </div>
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/">GO TO SENSES EARTH</a> -->
      </div>
    </div>
  </div>
  <img class="backgroundPath" src="desktop/background/earth-ok.svg" v-if="{mobile}"/>
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
  .backgroundPath {
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0px;
    top: 40px;
    pointer-events: none;
    vector-effect: non-scaling-stroke;
    z-index: 0;

    .mobile & {
      display: none;
    }
  }

  align-items: center;
  justify-content: space-evenly;
  width: 60%;

  .introduction {
    font-size: 14px;
    margin-left: 0 auto;
    padding-bottom: 30px;
    z-index: 2;
  }

  &.mobile {
    flex-flow: column;
    width: 100%;
    margin-left: 0;
  }
}

/* .backgroundPath {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  pointer-events: none;
} */

.items-container {
  display: flex;
}

.item {
  min-width: 250px;
  height: auto;
  opacity: 0.1;
  transition: opacity 0.5s;
  z-index: 1;
  padding: 2em;
  text-align: center;

  &.first-item {
    padding-left: 0;
  }

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
  h2 {
    font-size: 1em;
  }
  padding-top: 10px;

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
  font-size: 18px;
  // text-align: right;
  line-height: 26px;
  letter-spacing: 0.555803px;
  color: #524DFF;
  margin-top: 30px !important;

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
