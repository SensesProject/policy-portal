<template>
  <div class="container">
    <div class="inner">
      <h1>Discover Policy related scenarios.</h1>
      <div class="text">
        Here some introductory text for the portal. How the portal will work and
        how to access and use it. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
    <img src="desktop/home.svg" class="plan" />
    <img src="desktop/primer.svg" class="plan" />
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
  margin-bottom: 100px;
}
.inner {
  width: 815px;
}

h1 {
  font-weight: 700;
  /* text-shadow: -1px 0 #0bbfb0, 0 1px #0bbfb0, 1px 0 #0bbfb0, 0 -1px #0bbfb0; */
  color: #fff;
  font-size: 60px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0bbfb0;
  line-height: 1em;
  margin-bottom: 40px;
  margin-top: 60px;
}

.plan {
  margin-top: 40px;
}
</style>
