<template>
<br>
<br>
<div>
  <form>
    <label> Title </label>
    <br>
    <br>
    <input class= "form-control" type="text" v-model="title" placeholder="title" required> 
    <br>
    <br>
    <label> Ingredients </label>
    <br>
    <br>
    <textarea class="form-control" v-model="ingredients" placeholder="write your text here" required></textarea>
    <br>
    <br>
    <label> Description </label>
    <br>
    <br>
    <textarea class="form-control" v-model="recipeText" placeholder="write your text here"></textarea>
    <br>
    <br>
    <br>
   <button class="button" @click="save()" type="submit" id="submit">Save</button>
  </form>
</div>
<br>
<br>
  <footer class="footer">
    <h5>TropLand, 2022 &copy;</h5>
  </footer>
</template>

<script>
import axios from "axios";
//import firebase from 'firebase';

export default{
  //name: 'AdminView',
  name:"get-request-async-await",
  components: {
  },
  data() {
    return {
     title:"",
     ingredients:"",
     recipeText:"",
    };
  },
  methods:{
    save() {
      axios
      .post ("https://projetoandreia-24413-default-rtdb.firebaseio.com/.json", {
        title: this.title,
        ingredients: this.ingredients,
        recipeText: this.recipeText
      })
      .then((response) => (
        console.log("res" + response)
        )
      );
      this.$router.push('/recipes')
    },
    /*async created(){
      const response=await axios.get("https://projetoandreia-24413-default-rtdb.firebaseio.com/.json",
      this.recipeText=response.data);
      this.$router.push('/')
    },*/
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

