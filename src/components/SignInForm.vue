<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="login-wrap">
      <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>          
        <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
        <div class="login-form">
        <!-- Acrescentei o form; bem como o "required", e o minlenght de letras para password e username-->
          <form class="cmxform" id="signinForm" method="get" action="About.html">  
            <div class="sign-in-htm">
              <div class="group">
                <label for="cname" class="label">Username</label>
                <input id="cname" name="name" minlength="6" type="text" class="input" required>
              </div>
              <div class="group">
                <label for="pass" class="label">Password</label>
                <input id="pass" type="password" name="passaworde" minlength="6" class="input" data-type="password" required>
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked>
                <label for="check"><span class="icon"></span> Keep me Signed in</label>
              </div>
              <div class="group">
                <input type="submit" class="button" value="Sign In">
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          </form>
        </div> 
      </div> 
    </div>    
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  props: {
    msg: String
  }
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
