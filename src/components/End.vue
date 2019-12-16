<template>
  <div class="container">
    <div class="inner">
      <h1>Continue on the Finance Portal.</h1>
    </div>
    <img src="desktop/arrow.svg" class="arrow" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  flex-flow: column;
}
.inner {
  width: 500px;
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
}

.plan {
  margin-top: 40px;
}
</style>
