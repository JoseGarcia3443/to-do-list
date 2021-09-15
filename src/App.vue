<template lang="pug">
#app
  nav-bar
  transition(
    mode="out-in",
    enter-active-class="animate__animated animate__fadeIn",
    leave-active-class="animate__animated animate__fadeOut"
  )
    router-view
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "./style/simple-grid/bootstrap-grid.css";
@import "./style/inputForms.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Work+Sans:wght@200;300;400&display=swap");

::-webkit-scrollbar {
  display: none;
}

#app {
  min-height: 100vh;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  // font-family: 'Work Sans', sans-serif;
}

.swal2-title {
  font-size: 1rem !important;
  font-family: "Roboto", sans-serif !important;
  color: #000000 !important;
}
</style>
