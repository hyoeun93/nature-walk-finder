document.addEventListener('DOMContentLoaded', function() {
//create variables
const enterYourName = document.querySelector('.enter-your-name')
const quizForm = document.querySelector('.quiz-form')
let modal = document.querySelector(".modal")
let nameSubmitBtn = document.querySelector('.submit-btn')
let closeBtn = document.querySelector(".close-btn")


console.log(enterYourName);

enterYourName.addEventListener('submit', displayQuizForm)

function displayQuizForm(event){
  event.preventDefault()
  quizForm.innerHTML = `
  <h1>What paths in NYC do you want to take a walk? Take this quiz!</h1>
  <form class="solve-the-quiz">
    <h3>What would you like as far as difficulty?</h3>
    <input type="radio" name="difficulty"> Difficulty Level : 1 <br>
    <input type="radio" name="difficulty"> Difficulty Level : 2 <br>
    <input type="radio" name="difficulty"> Difficulty Level : 3 <br>
    <input type="radio" name="difficulty"> Difficulty Level : 4 <br>

    <h3>What kind of surface type do you prefer walking on?</h3>
    <input type="radio" name="surface-type" > Dirt <br>
    <input type="radio" name="surface-type"> Paved <br>
    <input type="radio" name="surface-type"> Boardwalk <br>
    <input type="radio" name="surface-type"> Grasses <br>
    <input type="radio" name="surface-type"> Wood Chips <br>

    <h3>What kind of landform are you looking for?</h3>
    <input type="radio" name="landform"> Sloped <br>
    <input type="radio" name="landform"> Wavy <br>
    <input type="radio" name="landform"> Level <br><br>
    <input type="submit" value="Submit">
  </form>
  `
}

// nameSubmitBtn.onclick = function(){
//     modal.style.display = "block"
//   }

//   closeBtn.onclick = function(){
//     modal.style.display = "none"
//   }

//   window.onclick = function(e){
//       e.preventDefault();
//     if(e.target == modal){
//       modal.style.display = "none"
//     }
//   }



//create EventListener


//talk to a server using fetch(make a fetch get request to the paths show page)

//LOGIC/DOM Manipulation

})






    