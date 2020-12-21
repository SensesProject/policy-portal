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
    <div class="item" :class="{visible: true}">
      <div class="text">
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/"><h2>Explore Crops</h2></a>
      </div>
      <div class="earths">
        <VisEarth :grid="grids[0][0]" :scale="{domain: [0, 100], range: [0, grids[0][1]]}"
        :colors="colors" prevent-interaction :yaw="ratio" x-pitch="camera.pitch" :zoom="1.25"/>
      </div>
    </div>
    <div class="item" :class="{visible: ratio > 0.3}">
      <div class="text">
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/"><h2>Explore Floods</h2></a>
      </div>
      <div class="earths">
        <VisEarth :grid="grids[1][0]" :scale="{domain: [0, 100], range: [0, grids[1][1]]}"
        :colors="colors" prevent-interaction :yaw="ratio" x-pitch="camera.pitch" :zoom="1.25"/>
      </div>
    </div>
    <div class="item" :class="{visible: ratio > 0.6}">
      <div class="text">
        <a class="readbutton" href="https://dev.climatescenarios.org/earth/"><h2>Explore Wildfires</h2></a>
      </div>
      <div class="earths">
        <VisEarth :grid="grids[2][0]" :scale="{domain: [0, 100], range: [0, grids[2][1]]}"
        :colors="colors" prevent-interaction :yaw="ratio" x-pitch="camera.pitch" :zoom="1.25"/>
      </div>
    </div>
  <!-- </div> -->
  <img class="backgroundPath" src="desktop/background/earth-ok.svg" v-if="{mobile}"/>
  </div>
</template>

<script>
import heatwave from 'raw-loader!earth/public/grids/heatwave_median_HWMId-humidex_2.0.txt' // eslint-disable-line import/no-webpack-loader-syntax
import cropFailure from 'raw-loader!earth/public/grids/crop-failure_median_median_2.0.txt' // eslint-disable-line import/no-webpack-loader-syntax
// import drought from 'raw-loader!earth/public/grids/drought_median_median_2.0.txt' // eslint-disable-line import/no-webpack-loader-syntax
// import riverFlood from 'raw-loader!earth/public/grids/river-flood_median_median_2.0.txt' // eslint-disable-line import/no-webpack-loader-syntax
// import wildfire from 'raw-loader!earth/public/grids/wildfire_median_median_2.0.txt' // eslint-disable-line import/no-webpack-loader-syntax
import tropical from 'raw-loader!earth/public/grids/tropical-cyclone_median_KE-TG-meanfield_2.0.txt' // eslint-disable-line import/no-webpack-loader-syntax
import VisEarth from 'earth/src/components/VisEarth.vue'

export default {
  props: ["ratio", "mobile"],
  components: {
    VisEarth
  },
  data () {
    return {
      grids: [
        [heatwave, 100],
        // [drought, 20],
        [tropical, 40],
        [cropFailure, 20]
        // [riverFlood, 40],
        // [wildfire, 20]
      ],
      colors: {
        background: '#FFFFFF',
        text: '#48484c',
        borderColor: '#0bbfb0',
        colorScale: ['#9be8c7', '#7B91E8', '#D13E9D']
      }
    }
  },
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

    .mobile & {
      display: none;
    }
  }

  align-items: center;
  justify-content: space-evenly;
  width: 60%;

  .introduction {
    width: 400px;
    position: absolute;
    font-size: 14px;
    left: 55%;
    top: 35%;
    z-index: 2;
    color: #0bbfb0;
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

.item {
  padding-left: 10px;
  width: 300px;
  opacity: 0.1;
  transition: opacity 0.5s;
  z-index: 1;
  padding-top: 50px;
  padding-left: 1em;
  /* text-align: center; */
  display: flex;

  .earths {
    width: 150px;
    height 150px;

    ::v-deep {
      .VisEarth {
        width: 150px;
        height: 150px;
        position relative;

        .three-scene {
          width: 300px !important;
        }

        .key {
          display: none;
        }
      }
    }
    img {
      width: 150px;
    }
  }

  .mobile & {
    opacity 1;
    margin-top: 2em;
    padding: 3em;
    width: 100%;
  }
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
  width: 300px;

  .VisEarth {
    .three-scene {
    }
  }
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
