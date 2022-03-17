<template>
<h1>TropLand</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Tropical Garden</router-link> |
    <router-link to="/tropicalfruits">Tropical Fruits</router-link> |
    <router-link to="/recipes">Recipes</router-link> |
    <router-link to="/signinsignup">Sign In/Sign-Up</router-link> |
    <router-link to="/contactus">Contact Us</router-link> |

  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
#app {
  font-family: Quicksand;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
  background: rgba(180, 216, 182, 0.836);
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;

}
nav a.houver {
  color:cornflowerblue;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h1{
  text-align: center;
  background-color: #eee;
  padding: 20px;
}
body{
  background-image: url("/Users/andreiasantos/Projects/projeto-andreiaVue/src/assets/background.jpg");
  background-size:cover;
  backdrop-filter:initial;
}
.footer {
  font-family: 'Quicksand', sans-serif;
  font-size: 12pt;
  padding: 20px;
  text-align: center;
  background: #eee;
  margin-top: 20px;
    
    
}
.card {
  background-color: #eee;
  padding: 20px;
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
    
}
</style>
