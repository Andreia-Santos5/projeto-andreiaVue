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
    <label> Description </label>
    <br>
    <br>
    <textarea class="form-control" v-model="recipeText" placeholder="write your text here" required></textarea>
    <br>
    <br>
    <label> Image </label>
    <input class="inputstyle" type="file">
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
     recipeText:"",
    };
  },
  methods:{
    save(){
      axios
      .post ("https://projetoandreia-24413-default-rtdb.firebaseio.com/.json", {
        title: this.title,
        recipeText: this.recipeText
      })
      .then((response) => (
        // this.articleId = response.data.id,
        // console.log("res"+ this.articleId()))
        console.log("res" + response)
        )
      );
    },
    async created(){
      const response=await axios.get("https://projetoandreia-24413-default-rtdb.firebaseio.com/.json",
      this.recipeText=response.data);
      this.$router.push('/')
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

<!--<template>
  <div>
    <form>
      <label> Title </label>
      <br>
      <input class="form-control" type="text" v-model="title" placeholder="title" required>
      <label> Description </label>
      <br>
      <input class="form-control" type="text" v-model="recipeText" placeholder="recipeText" required>
      <br>
      <button class="button" @click="save()" type="submit" id="submit">Save</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:"get-request-async-await",
  components: {
  },
  data() {
    return {
      title: "",
      recipeText: "",
    };
  },
  methods: {
    save() {
      axios.post('https://projetoandreia-24413-default-rtdb.firebaseio.com/.json', {
        title: this.title,
        recipeText: this.recipeText
      })      
      .then((response) => (
        console.log("res" + response)
      ));
    },
    async created() {
      const response=await axios.get("https://projetoandreia-24413-default-rtdb.firebaseio.com/.json",
      this.recipeText=response.data);
    },
  },
}
</script>-->