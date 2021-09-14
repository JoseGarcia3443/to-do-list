<template lang="pug">
section.sign-up-form
  .container
    .row.no-gutters
      sign-up-form
</template>

<script>
export default {
  name: "SignUp",
  components: {
    "sign-up-form": () => import("@/components/forms/SignUpForm.vue"),
  },
};
</script>

<style lang="scss" scoped>
section.sign-up-form {
  padding: 5rem 0;
  .container {
    .row {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>