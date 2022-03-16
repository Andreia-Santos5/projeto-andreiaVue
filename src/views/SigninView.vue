<template>
  <div class="signin">
    <SignInForm msg=" Sign-in Form"/>
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


