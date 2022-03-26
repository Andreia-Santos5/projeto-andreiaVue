<template>
  <div class="card">
    <HelloWorld msg="Welcome to our land"/>
    <div class="img1"></div>
  </div>
  <div class="card">
    <p>TropLand, Tropical Fruits on a Tropical Island.</p>
    <p>Living in Madeira Island, and as we have  a tropical garden, we thought, why not create a web page to share our tropical fruits and share with you some recipes with them?</p>
    <p>So, on this website, we show you our tropical Garden, located in Paul Do Mar (Meu pé de Cacau). You could see our fruits and the diversity of recipes that we usually do with our fruits.</p>
  </div>
  <footer class="footer">
    <h5>TropLand, 2022 &copy;</h5>
  </footer>
</template>

<script>

  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'HomeView',
    components: {
    }, HelloWorld
  }
</script>

<style >
 .img1{
    background-image: url("/Users/andreiasantos/Projects/projeto-andreiaVue/src/assets/20210911_111846.jpg");
    width:400px;
    height: 150px;
    padding: 100px;
    margin-top: 20px;
    margin-left: 22%;
    margin-right: 22%;
    background-position: center;
    background-size:cover;
  
  }
</style>
