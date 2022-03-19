<template>
<br>
<br>
<div>
  <form>
    <label> Title </label>
    <br>
    <br>
    <input class= "form-control" type="text" v-model="title" placeholder="title" required> 
    <span v-if="v$.title.$error">{{ v$.title.$errors[0].$message }}</span>
    <br>
    <br>
    <label> Description </label>
    <br>
    <br>
    <textarea class="form-control" v-model="recipeText" placeholder="write your text here" required></textarea>
      <span v-if="v$.recipeText.$error">{{ v$.recipeText.$errors[0].$message }}</span>
    <br>
    <br>
    <label> Image </label>
    <input class="inputstyle" type="file" >
    <br>
    <br>
    <br>
   <button class="button" @click="submitRecipe()" type="submit" id="submit">Submit</button>
  </form>
</div>
<br>
<br>
  <footer class="footer">
    <h5>TropLand, 2022 &copy;</h5>
  </footer>
</template>

<script>
import useValidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";

export default {
  name: 'AdminView',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      title: "",
      recipeText: "",
    };
  },
  validations() {
      return{
        title:{required},
        recipeText:{required}

      
      };
    },
  methods: {
    submitRecipe() {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) { // if ANY fail validation
        alert('Recipe successfully submitted')
        this.$router.push('/recipes')
      } 
      else {
        alert('Recipe failed validation')
      } 
    },
  },
}
</script>

<style scoped>
  .form-control{
    border:none;
    padding:15px 20px;
    border-radius:25px;
    background:rgba(255,255,255,.1);
    width: 300px;
  }
  div{
    text-align: center;
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color:rgba(180, 216, 182, 0.836);
          
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
  .inputstyle{
    background-color:#eee;
    color: #2c3e50;
    border:1px solid #25692A;
    border-radius:25px;
    font-weight:bold;
    font-size:13px;
    display:inline-block;
    padding: 10px;
  }
  .inputstyle:hover{
    color: cornflowerblue;
  }


</style>