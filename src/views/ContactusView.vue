<template>
    <br>
    <form @submit="checkForm" novalidate="true" method="get">
    <div id="app">
      <h3> Personal Data </h3>
      <div class="group">
            <label>Name</label>
            <input  v-model="name"  placeholder="name" type="text" class="input" required>
             <span v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }}</span>
            </div>
            <div class="group">
            <label>Email</label>
            <input v-model="email" type="email"  placeholder="email" class="input"  required>
             <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }}</span>
      </div>
        <br>
        <h3>Gender</h3>
          <div>
            <input v-model="gender" type="radio" >
            <label>Female</label>
          </div>
          <div >
            <input  type="radio"  v-model="gender" >
            <label>Male</label>
          </div>
          <br>
          <div>
            <label>From where did you hear about us?</label>
            <br>
            <br>
            <textarea class="form-control" v-model="hear" placeholder="write your text here" required></textarea>
            <span v-if="v$.hear.$error"> {{ v$.hear.$errors[0].$message }}</span>
          </div>
          <br>
         <h3>Which of our contents are you interested in?</h3>
          <div class="form-check">
            <input type="checkbox"   >
            <label >
              Recipes
            </label>
          </div>
          <div  >
            <input type="checkbox" >
            <label  >
              Tropical Fruits
            </label>
          </div>
          <div>
            <input type="checkbox" >
            <label  >
              Tropical Garden
            </label>
          </div>
          <br>
          <div>
            <label >Your message</label>
            <br>
            <br>
            <textarea class="form-control" v-model="message" placeholder="write your text here" required></textarea>
             <span v-if="v$.message.$error"> {{ v$.message.$errors[0].$message }}</span>
          </div>
          <br>
          <div >
            <input  v-model= "agree" type="checkbox"  id="Agree" required>
             <span v-if="v$.agree.$error"> {{ v$.agree.$errors[0].$message }}</span>
            <label >
              Agree to Terms and Conditions
            </label>
          </div>
          <br>
          <br>
          <br>
          <div >
           <button class="button" @click="submitForm" type="button" id="submit" style="margin-left: 25px;">Submit</button>
        </div>
  </div>
  </form>
  <footer class="footer">
    <h5>TropLand, 2022 &copy;</h5>
  </footer>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email} from "@vuelidate/validators";



export default {
  name: 'ContactusView',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      name:"",
      email:"",
      gender:"",
      hear:"",
      message:"",
      agree:"",
      msg:[]
    };
  },
      
  validations() {
    return{
      name: { required },
      email:{ required, email},
      hear:{required},
      message:{required},
      agree:{required}
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) { // if ANY fail validation
        alert('Form successfully submitted.')
        this.$router.push('/')
      } 
      else {
        alert('Form failed validation')
      }
    },
} }
</script>


<style scoped>
  h3, h4, h5{

    margin-left: 15px;

    margin-right: 25px;
            

  }
        
  body{
    margin-left: 25px;
    margin-right: 25px;

        
  }
  div{
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color:rgba(180, 216, 182, 0.836);
          
  }
  .button{
    background-color:#eee;
    color: #2c3e50;
    border:1px solid #25692A;
    border-radius:4px;
    padding:6px 10px;
    font-weight:bold;
    font-size:13px;
    display:inline-block;

  }
  .button:hover{
    color: cornflowerblue;
  }
  .footer {
    font-family: 'Quicksand', sans-serif;
    font-size: 12pt;
    padding: 20px;
    text-align: center;
    background: #eee;
    margin-top: 20px;
    margin-left: 1,5%;
    margin-right: 1,5%;    
  }
 .group .input{
    border:none;
    padding:15px 20px;
    border-radius:25px;
    background:rgba(255,255,255,.1);
    width: 300px;
  }
  .form-control{
    border:none;
    padding:15px 20px;
    border-radius:25px;
    background:rgba(255,255,255,.1);
    width: 300px;
  }
  
</style>
