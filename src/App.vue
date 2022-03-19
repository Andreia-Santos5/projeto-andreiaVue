<template>
<h1>TropLand</h1>
  <nav class="nava">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Tropical Garden</router-link> |
    <router-link to="/tropicalfruits">Tropical Fruits</router-link> |
    <router-link to="/recipes">Recipes</router-link> |
    <router-link to="/signin">Sign-in</router-link> |
    <router-link to="/signup">Sign-up</router-link> |
    <router-link to="/contactus">Contact Us</router-link> |
    <router-link to="/manage">Manage</router-link> 
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
  
  background: rgba(180, 216, 182, 0.836);
  text-align: center;
  padding: 30px;
  margin-top: 20px;
  margin-left: 1,5%;
  margin-right: 1,5%;  
}


nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration:none;

}
.nava a:hover {
  width: 100%;
  height: 1px;
  color:cornflowerblue;
}

nav a.router-link-exact-active {
  color: cornflowerblue;
}
h1, h2{
  text-align: center;
  background-color: #eee;
  padding: 30px;
  margin-top: 20px;
  margin-left: 1,5%;
  margin-right: 1,5%;  

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
  margin-left: 1,5%;
  margin-right: 1,5%;  
    
}
.card {
  background-color: #eee;
  padding: 20px;
  margin-top: 20px;
  margin-left: 15%;
  margin-right: 15%;
    
}
</style>
