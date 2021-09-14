<template lang="pug">
form.login__wrapper.col-12.col-md-8.col-lg-5(@submit.prevent="doLogin")
  .form__group
    logo
  .form__group
    label(for="email") Your Email:
    input#email(
      type="email",
      v-model="login.email",
      placeholder="Your email: example@example.com"
    )
    .error(v-if="$v.login.email.$model && $v.login.email.$invalid") Valid email is required
  .form__group
    label(for="password") Your Password:
    input#password(
      type="password",
      v-model="login.password",
      placeholder="Your password: **********"
    )
    .error(v-if="$v.login.password.$model && !$v.login.password.required") Password is required
    .error(v-if="$v.login.password.$model && !$v.login.password.minLength") Password must contain at least 8 characters
  .form__group
    button(type="submit", :disabled="$v.login.$invalid") Login
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Auth");
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "LoginForm",
  mixins: [validationMixin],
  components: {
    logo: () => import("@/components/Logo.vue"),
  },
  validations: {
    login: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  data: () => ({
    login: {
      email: "",
      password: "",
    },
  }),
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["userLogin"]),
    doLogin() {
        this.userLogin(this.login)
    }
  },
};
</script>

<style>
</style>