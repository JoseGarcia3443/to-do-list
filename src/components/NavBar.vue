<template lang="pug">
nav
  .container
    .row.no-gutters.justify-content-between.align-items-center
      logo
      navigation-menu
</template>

<script>
export default {
  name: "NavBar",
  components: {
    logo: () => import("@/components/Logo.vue"),
    'navigation-menu': () => import("@/components/aditionals/NavigationMenu.vue")
  },
  data: () => ({
    links: [
      {
        name: "home",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
nav {
  padding: 20px 0;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
