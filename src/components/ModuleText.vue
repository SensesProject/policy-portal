<template>
  <div class="container" :class="[data.path, {mobile}]">
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
      <div class="tags" v-if="data.links">
        <div class="icon"></div>
        <div class="content">
          <a v-for="link in data.links" :href="link.href" :key="link.title">{{link.title}}</a>
        </div>
      </div>
    </div>
    <div class="circle"></div>
    <div class="text">
      <h2 :style="!{mobile} ? { left: ratio * 40 + 'px' } : { left: 10 + 'px' }">{{ data.title }}</h2>
      <div
        class="description"
        :style="!{mobile} ? { left: ratio * 10 + 'px' } : { left: 10 + 'px' }"
        v-show="ratio > 0.3"
      >{{ data.description }}</div>
      <div class="readbutton" v-show="ratio> 0.5">
        <span class="readspan">READ</span>
      </div>
    </div>
    <div class="circle"></div>
    <div class="background" />
    <img class="backgroundPath" :src="'desktop/background/' + data.path + '.svg'" />

    <!-- <img class="microModule" v-if="data.microModule" src="desktop/micromodule.svg" /> -->
  </div>
</template>

<script>
export default {
  props: ["data", "ratio", "mobile"]
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
}

.background {
  position: absolute;
  width: 100%;
  background: #9be8c7;
  height: 60vh;
  left: 0;
  top: 20vh;
  display: none;
  .primary-energy & {
    display: block;
    background-image: linear-gradient(to right, #979797 33%, rgba(255, 255, 255, 0) 0%);
    background-position: top;
    background-size: 10px 1px;
    background-repeat: repeat-x;
  }
}

.backgroundPath {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  pointer-events: none;
  vector-effect: non-scaling-stroke;

  .mobile & {
    display: none;
  }
}

.microModule {
  position: absolute;
  left: 50%;
  top: 30%;
}

.tags a {
  margin-right: 0.3em;
}

.header {
  top: 0px;
  position: absolute;

  width: 100%;
  left: 0px;
  padding-right: 10px;
  // background: #fff;
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

  text-align: right;

  .primary-energy & {
    background: none;
  }

  .stocktake-1 &,
  .transition-path-1 &,
  .land-affected & {
    color: #0bbfb0;
    border-bottom: 1px dotted #0bbfb0;
    background: none;
  }
}

.circle {
  position: absolute;
  border-radius: 500px;
  width: 400px;
  height: 400px;
  mix-blend-mode: multiply;
  border: 2px solid #e6fffe;
  transition: background 1s;
  pointer-events: none;
  left: calc(50% - 150px);
  top: 34%;
  cursor: pointer;
  z-index: 1;

  .container:hover & {
    background: #e6fffe;
  }

  .stocktake-1 & {
    left: 53%;
    top: 23%;
  }

  .stocktake-2 & {
    left: 20%;
    top: 22%;
  }

  .transition-path-1 & {
    left: 33%;
    top: 20%;
  }

  .transition-path-2 & {
    left: 25%;
    top: 25%;
  }

  .primary-energy & {
    left: 25%;
    top: 28%;

    width: 280px;
    height: 280px;
  }

  .land-transitions & {
    left: 25%;
    top: 40%;
  }

  .land-affected & {
    left: 35%;
    top: 25%;
  }

  .mobile & {
    width: 400px;
    height: 400px;
    left: 0%;
    top: 20%;

    background-color: #e6fffe;
  }
}

.text {
  position: absolute;
  width: 350px;
  left: 52%;
  top: 33%;
  cursor: pointer;
  z-index: 1000;

  .stocktake-2 & {
    left: 20%;
    .description {
      width: 500px;
    }
  }

  .primary-energy & {
    left: 20%;
    h2 {
      width: 400px;
    }
    .description {
      width: 500px;
    }
  }

  .transition-path-1 & {
    left: 35%;
    top: 30%;
    h2 {
      width: 400px;
    }
    .description {
      width: 500px;
    }
  }

  .transition-path-2 & {
    left: 25%;
    h2 {
      width: 550px;
    }
    .description {
      width: 450px;
    }
  }

  .primary-energy & {
    left: 25%;
    top: 30%;
    h2 {
      width: 300px;
    }
    .description {
      width: 300px;
    }
    .mobile {
      top: 20%;
    }
  }

  .land-affected & {
    left: 35%;
    top: 40%;

    h2 {
      width: 500px;
    }
    .description {
      width: 550px;
    }
  }

  .land-transitions & {
    left: 25%;
    top: 50%;

    h2 {
      width: 600px;
    }
    .description {
      width: 550px;
    }
  }

  .mobile.primary-energy & {
      top: 22%;
  }

  .mobile & {
    width: 85%;
    top: 20%;
    left: 0;
    margin: 0 2em;
    .description {
      width: 100%;
    }
    h2 {
      width: 100%;
      font-size: 25px;
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
      font-weight: 700;
    }
  }

  .description {
    font-size: 14px;
    line-height: 1.2em;
    position: relative;
    margin-top: 20px;
    .mobile & {
      width: 90%;
      padding: 8px;
      text-shadow: 0px 0px 20px white;
    }
  }

  .readbutton {
    font-family: "IBM Plex Mono", serif;
    transition: background 1s;
    border-radius: 500px;
    width: 75px;
    height: 75px;
    border: 0.5px solid #5263ff;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.5px;
    color: #5263ff;
    margin-top: 40px;
    line-height: 73px;
    -webkit-transform: rotate(-10deg);
    text-align: center;
    .container:hover & {
      background: #5263ff;
      color: white;
    }
    .mobile & {
        margin-left: 38%;
        margin-top: 70px;
        background-color: #5263ff;
        color: white;
    }
  }
}

.info {
  position: absolute;
  left: 52%;
  font-size: 12px;
  text-transform: uppercase;
  top: 100px;
  z-index: 1000;

  .primary-energy & {
    top: 65%;
  }

  .mobile.primary-energy & {
      top: 72%;
      bottom: auto;    
  }

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

  .mobile & {
    left: 0;
    bottom: 30px;
    top: auto;
    font-size: 10px;
    display: grid;
    width: 100%;

    .icon {
      display: none;
    }

    > div {
      clear:none;

      .content {
        width: 100%;
        padding: 0;
        text-align: center;
        margin: 0;
      }
    }
  }

  .icon {
    border-radius: 10px;
    border: 1px solid #3bccb7;
    width: 15px;
    height: 15px;
    float: left;
  }

}
</style>
