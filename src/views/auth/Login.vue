<template lang="pug">
section.login
  .container
    .row.no-gutters
      login-form
</template>

<script>
export default {
  name: "Login",
  components: {
    'login-form': () => import('@/components/forms/LoginForm.vue'),
  }
};
</script>

<style lang="scss" scoped>
section.login {
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