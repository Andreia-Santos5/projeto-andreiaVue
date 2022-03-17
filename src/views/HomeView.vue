<template>
  <div class="card">
    <HelloWorld msg="Welcome to our land"/>
  </div>
    <div class="card">
      <div id="image1">
      <img src="~@/assets/fruits.jpeg" width="20%">
      </div>
      <p>TropLand, Tropical Fruits on a Tropical Island.</p>
      <p>Living in Madeira Island, and as we have  a tropical garden, we thought, why not create a web page to share our tropical fruits and share with you some recipes with them?</p>
      <p>So, on this website, we show you our tropical Garden, located in Paul Do Mar (Meu pé de Cacau). You could see our fruits and the diversity of recipes that we usually do with our fruits.</p>
  </div>
  <footer class="footer">
    <h5>TropLand, 2022 &copy;</h5>
  </footer>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style >
#image1{
  background: fixed;
  align-content: center;
  
}
</style>
