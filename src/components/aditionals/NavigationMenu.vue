<template lang="pug">
.navigation
  ul.navigation__wrapper
    li.navigation__item(v-if="!isAuthenticated")
      router-link(to="/login")
        span Login
        i.far.fa-user
    li.navigation__item(v-if="!isAuthenticated")
      router-link(to="/sign-up")
        span SignUp
        i.fas.fa-sign-in-alt 
  .authenticated(v-if="isAuthenticated")
    span Hi! {{ user.name }}
    a(href="#", @click.prevent="doLogout")
      span Logout
      i.fas.fa-sign-out-alt
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Auth");

export default {
  name: "NavigationMenu",
  computed: {
    ...mapGetters(["isAuthenticated", "user"]),
  },
  methods: {
    ...mapActions(["logOut"]),
    doLogout() {
      this.logOut();
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  ul.navigation__wrapper {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li.navigation__item {
      padding: 5px 15px;
      border-radius: 0.5em;
      cursor: pointer;
      margin: 0 10px;
      opacity: 0.75;
      transition: all 0.3s ease-in-out;
      @media (min-width: 768px) {
        padding: 10px 30px;
      }
      &:first-child {
        opacity: 1;
        background-color: #1273eb;
        a {
          color: #ffffff;
        }
      }
      &:hover {
        transform: scale(1.05);
        opacity: 1;
      }
      a {
        font-size: 1.2rem;
        text-decoration: none;
        color: #000000;
        span {
          display: none;
          @media (min-width: 768px) {
            display: inline-block;
          }
        }
        i {
          font-size: 1rem;
          transition: all 0.3s ease-in-out;
          @media (min-width: 768px) {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .authenticated {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
      text-transform: capitalize;
    }
    a {
      text-decoration: none;
      padding: 10px 20px;
      background-color: #1273eb;
      color: #ffffff;
      border-radius: 0.5em;
    }
  }
}
</style>