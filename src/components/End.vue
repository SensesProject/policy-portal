<template>
  <div class="container" :class="{mobile}">
    <!-- <Dot class="dot"/> -->
    <div class="dot"></div>
    <div class="inner">
      <h1>
        <a href="#" target="_blank">
        Continue on the Finance Portal.
          <span class="right_arrow">→</span>
        </a>
      </h1>
    </div>
    <img class="backgroundPath" src="desktop/background/end.svg" />
  </div>
</template>

<script>
export default {
  props: ["mobile"]
};
</script>

<style scoped lang="scss">
.container {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  flex-flow: column;
}
.inner {
  width: 600px;
  z-index: 1;
  margin: 0 4em;

  .mobile & {
    width: auto;
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

.dot {
  top: 35%;
  position: absolute;
  border-radius: 500px;
  width: 15px;
  height: 15px;
  background-color: #b035c9;
}

a {
  color: #fff;
  text-decoration: none;
  background:none;
  :hover & {
    color: #fff;
   text-decoration: none;
   background:none;
  }
}

h1 {
  font-weight: 700;
  /* text-shadow: -1px 0 #0bbfb0, 0 1px #0bbfb0, 1px 0 #0bbfb0, 0 -1px #0bbfb0; */
  color: #fff;
  font-size: 60px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #b035c9;
  line-height: 1em;
  margin-bottom: 40px;
  margin-top: 60px;

  .mobile & {
    font-size: 30px;
  }

}

.right_arrow {
  font-weight: normal;
  color: #b035c9;
  font-size: 50px;
  padding-left: 30px;
  transition: padding-left 1s;

  :hover & {
    padding-left: 50px;
  }
}
</style>
