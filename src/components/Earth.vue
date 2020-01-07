<template>
  <div class="container">
    <div class="item" :class="{visible: true}">
      <img src="desktop/earth-1.svg" alt="Earth" class="earthsvg" />
      <div class="text">
        <h2>Crop Failures</h2>
        <div
          class="description"
        >The percentage of wildfires will increase of 50% in the next 30 years due to temperature increasing.</div>
        <div class="readbutton">GO TO HEART</div>
      </div>
    </div>
    <div class="item" :class="{visible: ratio > 0.4}">
      <img src="desktop/earth-2.svg" alt="Earth" class="earthsvg" />
      <div class="text">
        <h2>Floodings</h2>
        <div
          class="description"
        >The percentage of wildfires will increase of 50% in the next 30 years due to temperature increasing.</div>
        <div class="readbutton">GO TO HEART</div>
      </div>
    </div>
    <div class="item" :class="{visible: ratio > 0.6}">
      <img src="desktop/earth-3.svg" alt="Earth" class="earthsvg" />
      <div class="text">
        <h2>Wildfires</h2>
        <div
          class="description"
        >The percentage of wildfires will increase of 50% in the next 30 years due to temperature increasing.</div>
        <div class="readbutton">GO TO HEART</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ratio"]
};
</script>
<style lang="stylus" scoped>
.container {
  display: flex;
}

.item {
  width: 341px;
  opacity: 0.1;
  transition: opacity 0.5s;
}

.visible {
  opacity: 1;
}

.text {
  padding-top: 250px;
  padding-left: 40px;
  padding-right: 40px;
}

.readbutton {
  font-family: IBM Plex Mono;
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.555803px;
  color: #524DFF;
  margin-top: 40px;
}

.earthsvg {
  position: absolute;
}

h2 {
  font-family: 'IBM Plex Mono', serif;
  font-weight: normal;
  color: #0BBFB0;
  font-size: 35px;
}
</style>
