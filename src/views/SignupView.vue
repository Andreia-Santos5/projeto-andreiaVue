<template>
  <div class="signup">
    <img alt="Vue logo" src="../assets/logo.png">
    <SignUpForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from '@/components/SignUpForm.vue'

export default {
  name: 'SignupView',
  components: {
    SignUpForm
  }
}
</script>
