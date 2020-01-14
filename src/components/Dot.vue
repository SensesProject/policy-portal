<template>
  <svg width="40" height="40" viewBox="0 0 192 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle :cx="55" :cy="25" r="40" fill="#b035c9"/>
    <circle :cx="55" :cy="25" r="40" fill="#b035c9">
        <animate
          attributeName="r"
          from="1"
          to="60"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
          />
        <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
        />
    </circle>
  </svg>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
