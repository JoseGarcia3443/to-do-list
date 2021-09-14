<template lang="pug">
form.signup__wrapper.col-12.col-md-8.col-lg-5
  .form__group
    logo
  .form__group
    h4 Complete the information below
  .form__group
    label(for="name") Your Name
    input#name(
      type="text",
      v-model="form.name",
      placeholder="Your Name: Jose Garcia"
    )
  .form__group
    label(for="email") Your Email
    input#email(
      type="email",
      v-model="form.email",
      placeholder="Your email: example@example.com"
    )
  .form__group
    label(for="password") Your Password
    input#password(
      type="password",
      v-model="form.password",
      placeholder="Your password: **********"
    )
  .form__group
    label(for="password_confirmed") Confirm Your Password
    input#password_confirmed(
      type="password",
      v-model="form.password_confirmed",
      placeholder="Confirm Your password: **********"
    )
</template>

<script>
export default {
  name: "SignUpForm",
  components: {
    logo: () => import("@/components/Logo.vue"),
  },
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      password_confirmed: "",
    },
  }),
};
</script>

<style lang="scss" scoped>
form.signup__wrapper {
  .form__group {
    h4 {
      font-family: "Work Sans", sans-serif;
      font-size: 1.5rem;
    }
  }
}
</style>