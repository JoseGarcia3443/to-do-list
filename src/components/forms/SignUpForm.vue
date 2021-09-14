<template lang="pug">
form.signup__wrapper.col-12.col-md-8.col-lg-5(@submit.prevent="register")
  .form__group
    logo
  .form__group
    h4 Complete the information below
  .form__group
    label(for="name") Your Name:
    input#name(
      type="text",
      v-model="form.name",
      placeholder="Your Name: Jose Garcia"
    )
    .error(v-if="$v.form.name.$model && !$v.form.name.required") Name is required
  .form__group
    label(for="email") Your Email:
    input#email(
      type="email",
      v-model="form.email",
      placeholder="Your email: example@example.com"
    )
    .error(v-if="$v.form.email.$model && $v.form.email.$invalid") Valid email is required
  .form__group
    label(for="password") Your Password:
    input#password(
      type="password",
      v-model="form.password",
      placeholder="Your password: **********"
    )
    .error(v-if="$v.form.password.$model && !$v.form.password.required") Password is required
    .error(v-if="$v.form.password.$model && !$v.form.password.minLength") Password must contain at least 8 characters
  .form__group
    label(for="password_confirmed") Confirm Your Password:
    input#password_confirmed(
      type="password",
      v-model="form.password_confirmed",
      placeholder="Confirm Your password: **********"
    )
    .error(v-if="$v.form.password_confirmed.$model && !$v.form.password_confirmed.sameAsPassword") Passwords do not match
  .form__group
    button(type="submit" :disabled="$v.form.$invalid") Register
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('Auth')
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "SignUpForm",
  mixins: [validationMixin],
  components: {
    logo: () => import("@/components/Logo.vue"),
  },
validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      password_confirmed: {
        sameAsPassword: sameAs("password")
      }
    }
  },
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      password_confirmed: "",
    },
  }),
  created() {
    if (this.isAuthenticated) this.$router.push('/tasks-manager')
  },
  watch: {
    isAuthenticated(bool) {
      if (bool) this.$router.push('/tasks-manager')
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['registerUser']),
    async register() {
      await this.registerUser(this.form)
    }
  }
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