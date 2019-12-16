<template>
  <div class="containter" :class="[data.path]">
    <div class="info">
      <div class="credits">
        <div class="icon"></div>
        <div class="content">{{ data.authors.join(" / ") }}</div>
      </div>
      <div class="read">
        <div class="icon"></div>
        <div class="content">{{ data.readingTime }}</div>
      </div>
      <div class="tags">
        <div class="icon"></div>
        <div class="content">{{ data.tags.join(", ") }}</div>
      </div>
    </div>
    <div class="text">
      <h2 :style="{ left: ratio * 20 + 'px' }">{{ data.title }}</h2>
      <div
        class="description"
        :style="{ left: ratio * 7 + 'px' }"
        v-show="ratio > 0.3"
      >
        {{ data.description }}
      </div>
      <div class="readbutton" v-show="ratio > 0.5">READ</div>
    </div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  props: ["data", "ratio"]
};
</script>

<style lang="stylus" scoped>

.circle {
  position: absolute;
  border-radius: 500px;
  width: 300px;
  height: 300px;
  mix-blend-mode: multiply;
  border: 2px solid #E6FFFE;
  transition: background 1s;
  pointer-events: none;
  left: calc(50% - 150px);
  top: 34%;
  cursor: pointer;

  .containter:hover & {
    background: #E6FFFE;
  }

  .stocktake-2 & {
    left: 55%;
  }

  .transition-path-2 & {
    left: 40%;
  }
}

.text {
  position: absolute;
  width: 350px;
  left: 52%;
  top: 33%;
  cursor: pointer;

  .stocktake-2 & {
    left: 20%;
  }

  .transition-path-2 & {
    left: 15%;

    h2 {
      width: 500px;
    }
  }

  .land-transitions & {
    left: 20%;
    top: 50%;
    h2 {
      width: 600px;
    }
  }

  h2 {
    font-size: 40px;
    font-family: 'IBM Plex Mono', serif;
    line-height: 1.1em;
    width: 300px;
    position: relative;

    .containter:hover & {
      font-style: italic;
      font-weigh: 700;
    }
  }

  .description {
    font-size: 14px;
    line-height: 1.2em;
    position: relative;
    margin-top: 20px;
  }

  .readbutton {
    font-family: IBM Plex Mono;
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.555803px;
    color: #1A1A1A;
    margin-top: 40px;
  }
}

.info {
  position: absolute;
  left: 52%;
  font-size: 12px;
  text-transform: uppercase;
  top: 100px;

  > div {
    clear: both;
    float: left;
    border-radius: 10px;
    // background: #9be8c7;
    margin: 5px 0 0 0;

    .content {
      padding: 0 10px 0 10px;
      float: left;
    }
  }

  .icon {
    border-radius: 10px;
    border: 1px solid #3bccb7;
    width: 15px;
    height: 15px;
    float: left;
  }

  .credits {
  }
}
</style>
