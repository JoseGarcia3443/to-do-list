<template lang="pug">
section.tasks__wrapper
  .container
    .row.no-gutters
      h1 Tasks
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('Auth')

export default {
  name: "Tasks",
  created() {
    if(!this.isAuthenticated) this.$router.push('/login')
  },
  watch: {
    isAuthenticated(bool) {
      if (!bool) this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions([''])
  }
}
</script>

<style lang="scss" scoped>
section.tasks__wrapper {
  padding: 5rem 0;
  .container {
    .row {
      height: 100vh;
    }
  }
}
</style>