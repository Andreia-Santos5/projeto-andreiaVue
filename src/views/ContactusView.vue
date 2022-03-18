<template>
    <br>
    <form class="was-validated" @submit="checkForm" novalidate="true" id= "myform" method="get" action="About.html">
    <div id="app">
      <h3> Personal Data </h3>
      <div class="group">
            <label for="cname" class="label">Name</label>
            <input id="cname" v-model=name name="name" placeholder="Name" type="text" class="input" required>
            </div>
            <div class="group">
            <label for="email" class="label">Email</label>
            <input id="email" type="email" name="email" placeholder="Email" class="input" data-type="email" required>
      </div>
        <br>
        <h3>Gender</h3>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="Gender"  id="female">
            <label class="form-check-label" for="Female">Female</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="Gender"  id="Male">
            <label class="form-check-label" for="Male">Male</label>
          </div>
          <br>
          <div class="mb-3">
            <label for="FormControlTextarea" class="form-label">From where did you hear about us?</label>
            <br>
            <br>
            <textarea class="form-control" placeholder="Write your text here" id="FormControlTextarea" rows="3" required></textarea>
          </div>
          <br>
         <h3>Which of our contents are you interested in?</h3>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="flexRadioDefault"  id="OnlineTests" >
            <label class="form-check-label" for="OnlineTests">
              Recipes
            </label>
          </div>
          <div class="form-check" >
            <input class="form-check-input" type="checkbox" name="flexRadioDefault" id=" PaperBasedTests" >
            <label class="form-check-label" for="Paper Based Tests">
              Tropical Fruits
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="flexRadioDefault"   id="CustomizedTests" >
            <label class="form-check-label" for="Customized Tests">
              Tropical Garden
            </label>
          </div>
          <br>
          <div class="mb-3">
            <label for="FormControlTextarea" class="form-label">Your message</label>
            <br>
            <br>
            <textarea class="form-control" placeholder="Write your text here" id="FormControlTextarea" rows="3" required></textarea>
          </div>
          <br>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="Agree" required>
            <label class="form-check-label" for="Agree">
              Agree to Terms and Conditions
            </label>
          </div>
          <br>
          <br>
          <br>
          <div >
          <button class="button" type="button" id="submit" style="margin-left: 25px;">Submit</button>
        </div>
  </div>
  </form>
  <footer class="footer">
  <h5>TropLand, 2022 &copy;</h5>
  </footer>
</template>




<style scoped>
  h3, h4, h5{

    margin-left: 15px;

    margin-right: 25px;
            

  }
        
  body{
    margin-left: 25px;
    margin-right: 25px;

        
  }
  div{
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color:rgba(180, 216, 182, 0.836);
          
  }
  .button{
    background-color:#eee;
    color: #2c3e50;
    border:1px solid #25692A;
    border-radius:4px;
    padding:6px 10px;
    font-weight:bold;
    font-size:13px;
    display:inline-block;

  }
  .button:hover{
    color: cornflowerblue;
    transform: scale(1.2);
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
 .group .input{
    border:none;
    padding:15px 20px;
    border-radius:25px;
    background:rgba(255,255,255,.1);
    width: 300px;
  }
  .form-control{
    border:none;
    padding:15px 20px;
    border-radius:25px;
    background:rgba(255,255,255,.1);
    width: 300px;
  }
  
  

</style>
