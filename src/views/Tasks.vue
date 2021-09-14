<template lang="pug">
section.tasks__wrapper
  task-modal(:form="form")
  .container
    .row.no-gutters.justify-content-center.justify-content-between
      .action__wrapper.col-12
        button(@click="setModalTaskVisible(true)") Add Task
      .col-12.col-md-5
        .tasks__in__process
      .col-12.col-md-5
        .tasks_done
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('Task')

export default {
  name: "Tasks",
  components: {
    'task-modal': () => import('@/components/modals/TaskModal.vue')
  },
  data: () => ({
    form: {}
  }),
  created() {
    !this.isAuthenticated ? this.$router.push('/login') : this.loadRecords()
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
    ...mapActions(['loadRecords', 'setModalTaskVisible'])
  }
}
</script>

<style lang="scss" scoped>
section.tasks__wrapper {
  padding: 5rem 0;
  .container {
    .row {
      min-height: 100vh;
      .action__wrapper {
        padding: 3rem 0;
      }
      .tasks__in__process,
      .tasks_done {
        min-height: 100vh;
        width: 100%;
        border: 1px solid #e1e1e1;
        border-radius: 0.5em;
      }
    }
  }
}
</style>