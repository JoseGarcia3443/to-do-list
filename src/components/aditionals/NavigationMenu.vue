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
    li.navigation__item(v-if="isAuthenticated")
      a(href="#" @click.prevent="doLogout")
        span Logout
        i.fas.fa-sign-out-alt
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('Auth')

export default {
  name: 'NavigationMenu',
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logOut']),
    doLogout() {
      this.logOut()
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  ul.navigation__wrapper {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li.navigation__item {
      padding: 10px 30px;
      border-radius: 0.5em;
      cursor: pointer;
      margin: 0 10px;
      opacity: 0.75;
      transition: all 0.3s ease-in-out;
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
        i {
          font-size: 1rem;
          margin-left: 10px;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>