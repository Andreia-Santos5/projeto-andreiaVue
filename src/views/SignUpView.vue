<template>
<br>
<br>
<div class="formstyle">
  <form class="login">
    <label> Sign-up form </label>
    <br>
    <br>
    <label> Email </label>
    <br>
    <input class="formcontrol" type="text" placeholder="email" v-model="email">
    <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
    <br>
    <br>
    <label> Password </label>
    <br>
    <input class="formcontrol" type="password" placeholder="password" v-model="password">
    <span v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
    <br>
    <br>
    <label> Password confirmation </label>
    <br>
    <input class="formcontrol" type="password" placeholder="password" v-model="passwordConfirm">
    <span v-if="v$.passwordConfirm.$error">{{ v$.passwordConfirm.$errors[0].$message }}</span>
    <br>
    <br>
    <button class="button" @click="submitSignUpForm()">Sign-up</button>
  </form>
  <br>
  <br>
  <p class="pstyle"> <router-link to= "/signin">Already Member?</router-link> </p>
</div>
<br>
<br>
  <footer class="footer">
    <h5>TropLand, 2022 &copy;</h5>
  </footer>
</template>

<script>
import useValidate from "@vuelidate/core";
import {required, email, minLength, sameAs} from "@vuelidate/validators";
import firebase from 'firebase';

export default {
  name: 'SignUpView',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
      passwordConfirm:""
    };
  },
  validations() {
    return{
      email:{required, email},
      password:{required, minLength: minLength(6)},
      passwordConfirm:{required, minLength: minLength(6), sameAs:sameAs(this.password)}
    };
  },
  methods: {
    submitSignUpForm() {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) { // if ANY fail validation
        alert('Form successfully submitted.')
        this.signupRequest();
        this.$router.push('/')
      } 
      else {
        alert('Form failed validation')
      } 
    },
    signupRequest() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.successMessage="Sign up Successfully.";
        })
        .catch((error) => {
          let errorResponse=JSON.parse(error.message);
          this.errorMessage=errorResponse.error.message;
        });
    },
  },
}
</script>


<style scoped>

.formstyle{
  background-color: rgba(180, 216, 182, 0.836);
  font-family: Quicksand;
  width:100%;
  height: 100%;
  margin:auto;
  max-width:525px;
  min-height:530px;
  position:relative;
  box-shadow:0 12px 15px 0;
  padding:30px;
  padding-top: 40px;
  font-size:18px;
  padding-bottom:5px;
  border-bottom:2px solid transparent;
 
}
.button:hover{
  color: cornflowerblue;
}
.button{
  background-color:#eee;
  color: #2c3e50;
  border:1px solid #25692A;
  border-radius:25px;
  padding:6px 10px;
  font-weight:bold;
  font-size:13px;
  display:inline-block;

}
.formcontrol{
  border:none;
  padding:15px 20px;
  border-radius:25px;
  background:rgba(255,255,255,.1);
  width: 300px;
}
.pstyle{
  text-align: center;
  font-size: 14px;
}
</style>