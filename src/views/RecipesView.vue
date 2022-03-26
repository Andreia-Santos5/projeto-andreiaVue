<template>
  <div>
    <div class="card">
      <h1>Recipes</h1>
    </div>
    <div class="card">
      <div v-for="recipe in recipes" :key="recipe.title" class="recipe">
        <h3>{{ recipe.title }}</h3>
        <br>
        <p class="pBold"> Ingredients:</p>
        <p> {{ recipe.ingredients}} </p>
        <br>
        <p class="pBold"> Description:</p>
        <p> {{ recipe.recipeText }}</p>
        <br>
        <br>
      </div>
  </div>
</div>
<footer class="footer">
  <h5>TropLand, 2022 &copy;</h5>
</footer>
</template>

<script>
import axios from "axios";

export default {
  name: 'RecipesView',
  components: {
   
  },
  data() {
    return {
     recipes: "",
    };
  },
  mounted() {
    axios
      .get("https://projetoandreia-24413-default-rtdb.firebaseio.com/.json")
      .then(res => {
        console.log(res.data)
        this.recipes = res.data
      });    
  },
}
</script>

<style scoped>
  .recipe{
    text-align: center;
  }
  .pBold{
    font-weight: bold;
    color: darkgreen;
  }
</style>