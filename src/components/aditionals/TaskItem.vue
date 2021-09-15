<template lang="pug">
li.item__wrapper
  button(@click="setUndoTask(task)", v-if="task.status === 2")
    i.fas.fa-arrow-left
  span {{ task.task }}
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

<style>
</style>