<template lang="pug">
section.tasks__wrapper
  task-modal(:form="form" :isAdd="isModalAdd")
  .container
    .row.no-gutters.justify-content-center.justify-content-between
      .action__wrapper
        button(@click="addRecord")
          span Add Task
          i.fas.fa-plus
      .column__task.col-12.col-md-5
        span In proccess
        .tasks__in__process
          transition-group(
            appear,
            mode="out-in",
            enter-active-class="animate__animated animate__fadeInRight",
            leave-active-class="animate__animated animate__fadeOutRight"
            tag="ul"
            class="list__tasks"
          )
            task-item(
              v-for="(task, index) in userTasks",
              :key="index",
              :task="task"
              :style="`--animate-duration: ${(index + 1)*200}ms`"
              @onEdit="editRecord"
          )
      .column__task.col-12.col-md-5
        span Done
        .tasks_done
          transition-group(
            appear,
            mode="out-in",
            enter-active-class="animate__animated animate__fadeInLeft",
            leave-active-class="animate__animated animate__fadeOutLeft"
            tag="ul"
            class="list__tasks"
          )
            task-item(
              v-for="(task, index) in userDoneTasks",
              :key="index",
              :task="task"
              :style="`--animate-duration: ${(index + 1)*200}ms`"
            )
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Task");

export default {
  name: "Tasks",
  components: {
    "task-modal": () => import("@/components/modals/TaskModal.vue"),
    "task-item": () => import("@/components/aditionals/TaskItem.vue"),
  },
  data: () => ({
    form: {
      task: ''
    },
    isModalAdd: true
  }),
  created() {
    !this.isAuthenticated ? this.$router.push("/login") : this.loadRecords();
  },
  watch: {
    isAuthenticated(bool) {
      if (!bool) this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "userTasks", 'userDoneTasks']),
  },
  methods: {
    ...mapActions(["loadRecords", "setModalTaskVisible"]),
    addRecord() {
      this.isModalAdd = true
      this.form = {task: ''}
      this.setModalTaskVisible(true)
    },
    editRecord(task) {
      this.isModalAdd = false
      this.form = task
      this.setModalTaskVisible(true)
    }
  },
};
</script>

<style lang="scss" scoped>
section.tasks__wrapper {
  margin-top: 50px;
  padding: 5rem 0;
  .container {
    .row {
      min-height: 100vh;
      .action__wrapper {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 3;
        button {
          border: none;
          background-color: #1273eb;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 0.5em;
          cursor: pointer;
          span {
            margin-right: 10px;
          }
        }
      }
      .column__task {
        span {
          display: block;
          width: 100%;
          font-size: 1.2rem;
          text-align: center;
          margin-bottom: 20px;
          letter-spacing: 3px;
          font-weight: bold;
        }
        .tasks__in__process,
        .tasks_done {
          min-height: 100vh;
          width: 100%;
          border: 1px solid #e1e1e1;
          border-radius: 0.5em;
          padding: 10px;
          overflow-x: hidden;
          .list__tasks {
            padding: 0;
            margin: 0;
            list-style: none;
          }
        }
      }
    }
  }
}
</style>