<template lang="pug">
header
  .container
    .row.no-gutters.justify-content-center.align-items-center.flex-column
      h1 Welcome to
        span M
        | anagement
        span Y
        | our
        span T
        | asks ! Join and discover the best tool to management your tasks
      router-link.main__buton(to="/sign-up")
        span Start Now
        i.fas.fa-mouse-pointer
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<style lang="scss" scoped>
header {
  background: url("../assets/wave.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .container {
    .row {
      min-height: 100vh;
      h1 {
        text-align: center;
        letter-spacing: 2px;
        font-size: 1.5rem;
        @media (min-width: 768px) {
          font-size: 2.2rem;
        }
        span {
          margin-left: 5px;
          color: #1273eb;
        }
      }
      .main__buton {
        text-decoration: none;
        font-size: 1.2rem;
        padding: 10px 20px;
        background-color: #1273eb;
        color: #ffffff;
        border-radius: 0.5em;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        &:hover {
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
          -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
          -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
        }
        @media (min-width: 768px) {
          font-size: 1.3rem;
        }
        i {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>