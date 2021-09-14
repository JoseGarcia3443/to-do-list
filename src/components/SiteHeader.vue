<template lang="pug">
header
  .container
    .row.no-gutters.justify-content-center.align-items-center
      h1 Welcome to
        span M
        | anagement
        span Y
        | our
        span T
        | asks ! Join and discover the best tool to management your tasks
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<style lang="scss" scoped>
header {
  .container {
    .row {
      min-height: 100vh;
      h1 {
        text-align: center;
        span {
          color: #1273eb;
        }
      }
    }
  }
}
</style>