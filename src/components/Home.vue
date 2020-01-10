<template>
  <div class="container">
    <div class="inner">
      <h1>Welcome to the Senses Policy Portal.</h1>
      <div class="text">
        Here you can explore a curated sets of learning module regarding
        Policy related aspects of Climate Change.<br>
        You can scroll three different chapters:
        <span class="dotted">Budgets</span>,
        <span class="dotted">Transitions</span>
        and <span class="dotted">Extreme Events</span>.<br>
        In the <span class="dotted">Budgets</span> chapter you will be introduced
        to the near and long-term plans to reach Net Zero emissions in the next
        century. The <span class="dotted">Transitions</span> section is dedicated
        to different kind of transitions that might occur. From energetic transitisions
        to land transitions, you will be provided with a complete overview of how
        our future will look like.
        The <span class="dotted">Extreme Events</span> chapter is dedicated to the extent
        and impact of Climate Change according to the predictions.
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
  /* height: 100vh; */
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
