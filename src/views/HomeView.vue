<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <footer>
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
body{
background-image: url("/Users/andreiasantos/Projects/projeto-andreiaVue/src/assets/background.jpg");
background-size:cover;
backdrop-filter:initial;
}
</style>
