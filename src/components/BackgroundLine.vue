<template>
  <div class="svg" ref="svg">
    <svg
      width="100%"
      height="20000px"
      preserveAspectRatio="xMinYMax slice"
      viewBox="0 0 674 4511"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M151 0V230.251C151 248.93 166.069 264.112 184.748 264.25L387.051 265.75C405.73 265.888 420.799 281.07 420.799 299.749V660C420.799 678.778 436.022 694 454.799 694H637C655.778 694 671 709.222 671 728V1062.5C671 1081.28 655.778 1096.5 637 1096.5H454.799C436.022 1096.5 420.799 1111.72 420.799 1130.5V1562.24C420.799 1580.93 405.726 1596.11 387.044 1596.24L36.7559 1598.76C18.0739 1598.89 3 1614.07 3 1632.76V2140L6.81575 2833.51C6.91796 2852.09 21.9109 2867.14 40.4866 2867.32L387.41 2870.68C405.947 2870.86 420.924 2885.85 421.08 2904.39L424.625 3326.2L420.799 3755V4149V4320V4511"
        stroke="url(#paint0_linear)"
        strokes="#000"
        stroke-width="1"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="129.479"
          y1="1723.14"
          x2="169.746"
          y2="4513.41"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CBF5E5" />
          <stop offset="0.268825" stop-color="#00643B" />
          <stop offset="0.339653" stop-color="#8BDEBB" />
          <stop offset="0.929892" stop-color="#97E6C4" />
          <stop offset="1" stop-color="#B035C9" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  watch: {
    ratio: function(ratio) {}
  },
  props: ["ratio"],
  mounted: function() {}
};
</script>

<style scoped>
.svg {
  /* position: absolute; */
  position: absolute;
  width: 100vw;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  /* pointer-events: none; */

  /* max-width: 1000px; */
}
</style>
