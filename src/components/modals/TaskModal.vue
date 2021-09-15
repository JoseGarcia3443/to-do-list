<template lang="pug">
.modal__wrapper
  transition(
    mode="out-in",
    enter-active-class="animate__animated animate__fadeIn",
    leave-active-class="animate__animated animate__fadeOut"
  )
    .overlay__wrapper(
      v-if="isModalTaskVisible",
      @click="setModalTaskVisible(false)"
    )
  transition(
    mode="out-in",
    enter-active-class="animate__animated animate__fadeIn",
    leave-active-class="animate__animated animate__fadeOut"
  )
  .modal(v-if="isModalTaskVisible")
    form.tasks__form(@submit.prevent="saveRecord")
      .form__group
        label(for="task") Your Task:
        input#task(
          type="text",
          v-model="form.task",
          placeholder="example: Watch TV"
        )
        //- .error(v-if="$v.login.email.$model && $v.login.email.$invalid") Valid email is required
      .form__group
        button(type="submit" :disabled="!hasText") {{ label }}
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Task");

export default {
  name: "TaskModal",
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    isAdd: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters(["isModalTaskVisible", "user"]),
    label() {
      return this.isAdd ? "Save" : "Update";
    },
    hasText() {
      return this.form.task.length > 0;
    },
  },
  methods: {
    ...mapActions(["setModalTaskVisible", "addRecord", "updateRecord"]),
    saveRecord() {
      this.isAdd
        ? this.addRecord({ user_id: this.user.id, status: 1, ...this.form })
        : this.updateRecord(this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal__wrapper {
  .overlay__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    z-index: 11;
    padding: 25px;
    border-radius: 0.5em;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
    @media (min-width: 768px) {
      width: 60%;
    }
  }
}
</style>