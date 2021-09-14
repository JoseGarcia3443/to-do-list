<template lang="pug">
nav
  .container
    .row.no-gutters.justify-content-between.align-items-center
      logo
      navigation-menu(v-if="!isAuthenticated")
</template>

<script>
export default {
  name: "NavBar",
  components: {
    logo: () => import("@/components/Logo.vue"),
    'navigation-menu': () => import("@/components/aditionals/NavigationMenu.vue")
  }
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #ffffff;
  padding: 20px 0;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
</style>
