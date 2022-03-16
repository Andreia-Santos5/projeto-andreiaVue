<template>
  <div class="signup">
    <SignUpForm msg=" Sign-up Form"/>
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

