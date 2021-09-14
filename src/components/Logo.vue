<template lang="pug">
router-link.logo__wrapper(to="/")
  h2 M
    span Y
    | T.
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.logo__wrapper {
  text-decoration: none;
  h2 {
    font-size: 1.2rem;
    color: #000000;
    letter-spacing: 3px;
    span {
      color: #1273eb;
    }
  }
}
</style>