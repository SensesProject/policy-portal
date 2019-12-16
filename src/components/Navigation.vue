<template>
  <div class="container">
    <div class="title">mainTopic</div>
    <div class="portal">portal</div>
    <div class="circle"></div>
    <img src="desktop/navigation.svg" class="naviImage" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped style="scss">
.container {
  position: fixed;
  top: 100px;
  padding: 20px;
  padding-left: 40px;
  border: 1px solid #0bbfb0;
  border-radius: 20px;
  left: -20px;
  color: #0bbfb0;
  text-transform: uppercase;
  font-size: 12px;
  height: 380px;
  width: 200px;
  overflow: hidden;
  background: #fff;
  z-index: 100;
}

.portal {
  position: absolute;
  top: 100px;
  left: 130px;
  transform: rotate(-45deg);
}

.naviImage {
  position: absolute;
  top: 60px;
}

.circle {
  background: #9be8c7;
  opacity: 0.5;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  top: 130px;
  left: 90px;
  position: absolute;
}
</style>
