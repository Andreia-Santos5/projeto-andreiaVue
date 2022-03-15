<template>
  <div class="signin">
    <img alt="Vue logo" src="../assets/logo.png">
    <SignInForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignInForm from '@/components/SignInForm.vue'

export default {
  name: 'SigninView',
  components: {
    SignInForm
  }
}
</script>
