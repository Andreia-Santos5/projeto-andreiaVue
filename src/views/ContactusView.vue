<template>
  <h2>Contact Us</h2> 
    <br>
    <form class="was-validated" @submit="checkForm" novalidate="true" id= "myform" method="get" action="About.html">
    <div id="app">
       <div class="col-md-6 position-relative">
          <label>Name</label>
          <input type="text" class="form-control" id="name1" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"  required>
        </div>
        <div class="col-md-6 position-relative">
          <label>Email</label>
          <input type="Email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required>
          </div>
          <br>
          <h5>Gender</h5>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="Gender"  id="female">
            <label class="form-check-label" for="Female">
              Female
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="Gender"  id="Male">
            <label class="form-check-label" for="Male">
              Male
            </label>
          </div>
          <br>
          <div class="mb-3">
            <label for="FormControlTextarea" class="form-label">From where did you hear about us?</label>
            <textarea class="form-control" id="FormControlTextarea" rows="3" required></textarea>
          </div>
          <br>
          <h5>Which of our contents are you interested in?</h5>
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
            <textarea class="form-control" id="FormControlTextarea" rows="3" required></textarea>
          </div>
          <br>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="Agree" required>
            <label class="form-check-label" for="Agree">
              Agree to Terms and Conditions
            </label>
          </div>
          <br>
          <label for="customRange3" class="form-label" style="margin-left:  25px;">How satisfied are you with our content? </label>
          <br>
          <input type="range" class="form-range" id="foo" v-model="range" style="width:50%; margin-left: 25px;" min="0" max="5" step="1" >
          <br>
          <br>
          <div class="col-12">
          <button type="button" id="submit" class="btn btn-primary" style="margin-left: 25px;">Submit</button>
        </div>
  </div>
  </form>
</template>
<style>
  h3, h4, h5{

    margin-left: 15px;
    margin-right: 25px;
            

  }
  h2{

    padding: 20px;
    background-color: #eee;
    margin-left: 25px;
    margin-right: 25px;
    text-align: center;
          
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
</style>