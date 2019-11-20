<template>
  <div id="app">
    <section>
      <h1>headline blalallalal</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
    <section id="scrolly">
      <figure style="height: 234.5px;top: 167.25px;">
        <p>1</p>
      </figure>

      <article>
        <div
          class="step"
          data-step="1"
          data-scrollama-index="0"
          style="height: 351px;"
        >
          <p>STEP 1</p>
        </div>
        <div
          class="step"
          data-step="2"
          data-scrollama-index="1"
          style="height: 351px;"
        >
          <p>STEP 2</p>
        </div>
      </article>
    </section>
    <section>
      <h1>headline blalallalal</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
    <section id="scrolly">
      <figure style="height: 234.5px;top: 167.25px;">
        <p>1</p>
      </figure>

      <article>
        <div
          class="step"
          data-step="1"
          data-scrollama-index="0"
          style="height: 351px;"
        >
          <p>STEP 1</p>
        </div>
        <div
          class="step"
          data-step="2"
          data-scrollama-index="1"
          style="height: 351px;"
        >
          <p>STEP 2</p>
        </div>
      </article>
    </section>
    <section>
      <h1>headline blalallalal</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#app {
}

#scrolly {
  position: relative;
  background-color: #f3f3f3;
  padding: 1rem;
}

figure {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  width: 100%;
  margin: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  background-color: #8a8a8a;
  z-index: 0;
}

article {
  position: relative;
  padding: 0;
  max-width: 20rem;
  margin: 0 auto;
}

.step {
  margin: 0 auto 2rem auto;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
