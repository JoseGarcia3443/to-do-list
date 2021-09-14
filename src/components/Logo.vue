<template lang="pug">
router-link.logo__wrapper(to="/")
  h2 MYT.
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
  }
}
</style>