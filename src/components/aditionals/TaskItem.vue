<template lang="pug">
li.item__wrapper(:style="`background-color: ${colorTask}`")
  .actions__wrapper
    button(@click="setUndoTask(task)", v-if="task.status === 2")
        i.fas.fa-arrow-left
  span {{ task.task }}
  .actions__wrapper
    button(@click="setDoneTask(task)", v-if="task.status === 1")
      i.fas.fa-arrow-right
    button(@click="editTask(task)", v-if="task.status === 1")
      i.fas.fa-edit
    button(@click="deleteTask(task)")
      i.fas.fa-trash-alt
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Task");

export default {
  name: "TaskItem",
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    colorTask() {
      return this.task.status === 1 ? "#1273eb" : "#13ad3c";
    },
  },
  methods: {
    ...mapActions(["doneTask", "undoDoneTask", "deleteRecord"]),
    setDoneTask(task) {
      task.status = 2;
      this.doneTask(task);
    },
    setUndoTask(task) {
      task.status = 1;
      this.undoDoneTask(task);
    },
    deleteTask(task) {
      this.deleteRecord(task);
    },
    editTask(task) {
      this.$emit("onEdit", task);
    },
  },
};
</script>

<style lang="scss" scoped>
li.item__wrapper {
  padding: 10px;
  border-radius: 0.5em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
  span {
    font-size: 1.2rem;
    color: #ffffff;
  }
  .actions__wrapper {
    button {
      background: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
      i {
        color: #ffffff;
      }
    }
  }
}
</style>