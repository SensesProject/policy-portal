<template>
  <div class="container" :class="[data.path]">
    <div class="header">{{ data.mainTopic }}</div>
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
      >{{ data.description }}</div>
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

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;

  &.primary-energy {
    background: #9be8c7;
    height: 60vh;
    left: 0;
    top: 20vh;
  }
}

.header {
  top: 0px;
  position: absolute;

  width: 100%;
  left: 0px;
  padding-left: 10px;
  background: #fff;
  padding-top: 5px;
  // border-bottom: 1px dashed #979797;
  background-image: linear-gradient(
    to right,
    #979797 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 10px 1px;
  background-repeat: repeat-x;
  color: transparent;

  .stocktake-1 &,
  .transition-path-1 & {
    color: #0bbfb0;
    border-bottom: 1px solid #0bbfb0;
    background: none;
  }
}

.circle {
  position: absolute;
  border-radius: 500px;
  width: 300px;
  height: 300px;
  mix-blend-mode: soft-light;
  border: 2px solid #e6fffe;
  transition: background 1s;
  pointer-events: none;
  left: calc(50% - 150px);
  top: 34%;
  cursor: pointer;

  .container:hover & {
    background: #e6fffe;
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
    font-family: "IBM Plex Mono", serif;
    line-height: 1.1em;
    width: 300px;
    position: relative;

    .container:hover & {
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
    color: #1a1a1a;
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