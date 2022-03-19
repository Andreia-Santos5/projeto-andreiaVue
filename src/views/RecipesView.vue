<template>
  <div>
  <div >
    <div class="card">
      <h2>Tropical fruit salad </h2>
      <div class="saladfruit"></div>
      <br>
      <p id="pBold">Ingredients:</p>
      <p> 1/2 papaia,</p>
      <p> 1/2 pitaya,</p>
      <p> 2 pieces of starFruit,</p>
      <p> 3 pieces of goiaba,</p>
      <p> 1 mango,</p>
      <p> 2 pieces of Ciriguela,</p>
      <p> Handfuul of brazil cherry.</p>

    </div>
    <div class="card">
      <h2>Orange mousse </h2>
      <div class="crepe"></div>
      <br>
      <p id="pBold">Ingredients:</p>
      <p> 1 can of condensed milk,</p>
      <p> 2 packages of cream,</p>
      <p> 1 orange juice,</p>
      <p> 1 grated orange,</p>
      <p> 5 sheets of gelatin.</p>
    </div>
  </div>
</div>
<footer class="footer">
  <h5>TropLand, 2022 &copy;</h5>
</footer>
</template>
<style scoped>
   .saladfruit {
    background-color: #eee;
    background-image: url("/Users/andreiasantos/Projects/projeto-andreiaVue/src/assets/salada.jpeg");
    width:400px;
    height: 150px;
    padding: 100px;
    margin-top: 20px;
    margin-left: 10%;
    margin-right: 10%;
    background-position: center;
    background-size:cover;
  }
  .crepe {
    background-color: #eee;
    background-image: url("/Users/andreiasantos/Projects/projeto-andreiaVue/src/assets/crepe.jpeg");
    width:400px;
    height: 150px;
    padding: 100px;
    margin-top: 20px;
    margin-left: 10%;
    margin-right: 10%;
    background-position: center;
    background-size:cover;
    
  }
  #pBold {
    font-weight: bold;

  }
  p{
    text-align: center;
  }
</style>