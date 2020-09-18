<template>
  <div class="container" :class="isMobile ? 'mobile' : 'desktop'">
    <div class="inner">
      <a id="primer" href="https://www.climatescenarios.org/primer/">
      <img :src="(isMobile ? 'mobile' : 'desktop') + '/primer.svg'" class="plan primer" />
      </a>
      <h1>This is the Policy Portal.</h1>
      <div class="text">
        <span>
          Climate change scenarios can inform policy makers about the risks of
          human-induced climate change, how to mitigate it and limit global
          warming and how to adapt to residual warming. Strategies include a
          transformation to climate neutral economies and measures to increase
          resilience and adaptive capacity to climate change.
        </span>
      </div>
    </div>
    <div class="down_arrow">↓</div>
    <!-- <HomeMap v-if="isMobile === false"/> -->
    <img v-if="mobile" :src="(isMobile ? 'mobile' : 'desktop') + '/home.svg'" class="plan"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeMap from "./HomeMap.vue";

export default {
  components: {
    HomeMap
  },
  computed: {
    ...mapState(["isMobile"])
  }
};
</script>

<style scoped lang="scss">
.container {
  justify-content: center;
  align-items: center;
  display: flex;
  /* height: 100vh; */
  flex-flow: column;
  margin-bottom: 100px;
  max-width: 1050px;
  margin: 0 4em;
  margin-bottom: 7em;
}

#primer {
  background: none;
}

.inner {

}

img {
  max-width: 100%;
}

h1 {
  // font-weight: 700;
  color: #0bbfb0;
  font-size: 140px;
  line-height: 1.1em;
  margin-bottom: 60px;
  margin-top: 60px;

  @media screen and (max-width: 700px)  {
    font-size: 3em;
  }
}

.text {
  width: 100%;
  font-size: 25px;
  // width: 60%;
  color: #037c72;
  // display: inline-flex;

  // span {
  //   width: 80%;
  // }
}

.senses {
  color: #5263FF;
}

.down_arrow {
  color: #037c72;
  font-size: 50px;
  margin-top: 60px;
  margin-bottom: 20px;
  // align-self: baseline;
}

.plan {
  // margin-top: 40px;

  &.primer {
    width: 40%;
    position: absolute;
    padding-left: 30px;
    right: 10px;
    top: 20%;
    // align-content: end;
    // -ms-transform: translateY(20%);
    // transform: translateY(20%);
  }
}

.mobile {

  h1 {
    font-size: 40px;
  }

  .plan & {
    visibility: none;
  }
}
</style>
