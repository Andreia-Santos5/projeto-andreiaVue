<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="login-wrap">
      <div class="login-html">
        <label> Sign Up  </label>
        <div class="login-form">
          <br>
          <form class="cmxform" id="signupForm" method="get" action="About.html">
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">Username</label>
                <input id="user" name="name2" minlenght="6" type="text" class="input" required>
              </div>
              <div class="group">
                <br>
                <label for="password" class="label">Password</label>
                <input id="password" type="password" name= "password" minlength="6" class="input"  data-type= "password" required>
              </div>
              <div class="group">
                <br>
                <label for="password_confirmation" class="label">Repeat Password</label>
                <input id="password_confirmation" type="password" name="password_confirmation"  minlength= "6" class="input"   data-type="password" required >
              </div>
              <div class="group">
                <br>
                <label for="email" class="label">Email Address</label>
                <input id="email" type="text" class="input" name="email" required>
              </div>
              <br>
              <br>
              <div class="group">
                <input type="submit" class="button" value="Sign Up">
              </div>
              <div class="hr"></div>
            </div>
        </form>
        </div> 
      </div> 
    </div>    
  </div>
 <footer>
  <h5>TropLand, 2022 &copy;</h5>
  </footer>
</template>

<script>


import firebase from "firebase";
export default{
  name:"SignupForm",
  data(){
    return {
      email: "",
      password:"",
    }
  },
  methods:{
    signupRequest(){
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(
        ()=>{
          this.successMessage="Register Successfully.";
        },
        error=> {
          let errorResponse=JSON.parse(error.message);
          this.errorMessage=errorResponse.error.message;
        }

      );
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
